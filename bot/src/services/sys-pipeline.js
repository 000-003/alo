import logger from '../utils/logger.js';
import { getCommand } from './sys-registry.js';

const COMMAND_REGEX = /(SYS_\w+)\s*\(([^)]*)\)/g;

export function parseCommands(text) {
  const commands = [];
  let m;
  while ((m = COMMAND_REGEX.exec(text)) !== null) {
    const raw = m[2].trim();
    const params = {};
    for (const pair of raw.split(',')) {
      const eq = pair.indexOf('=');
      if (eq === -1) continue;
      const key = pair.slice(0, eq).trim();
      let val = pair.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (val) params[key] = val;
    }
    commands.push({ command: m[1], params, raw: m[0] });
  }
  return commands;
}

export async function executeCommand(db, cmd, source = 'system') {
  const def = getCommand(cmd.command);
  if (!def) {
    logger.warn('SYS commande inconnue', { command: cmd.command });
    return { ok: false, message: `Commande ${cmd.command} inconnue` };
  }

  const errors = [];
  for (const [key, type] of Object.entries(def.schema)) {
    if (!cmd.params[key]) {
      errors.push(`Paramètre manquant: ${key}`);
      continue;
    }
    if (type === 'integer' && !/^\d+$/.test(cmd.params[key])) {
      errors.push(`${key} doit être un entier`);
    }
  }
  if (errors.length) {
    return { ok: false, message: errors.join('; ') };
  }

  const d71err = await def.d71(db, cmd.params);
  if (d71err) {
    logger.warn('SYS D71 échec', { command: cmd.command, error: d71err });
    return { ok: false, message: `D71: ${d71err}` };
  }

  const prereqErr = await def.prereqs(db, cmd.params);
  if (prereqErr) {
    logger.warn('SYS prérequis non satisfaits', { command: cmd.command, error: prereqErr });
    return { ok: false, message: `Prérequis: ${prereqErr}` };
  }

  const authorized = await def.authorize(source);
  if (!authorized) {
    logger.warn('SYS non autorisé', { command: cmd.command, source });
    return { ok: false, message: `Source "${source}" non autorisée pour ${cmd.command}` };
  }

  const lockKey = `sys_${cmd.command}_${cmd.params.player_id || cmd.params.npc_id || cmd.params.zone_id || 'global'}`;
  /* Lock via transaction explicite (nR9: pas d'autocommit) */
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    await client.query('SELECT pg_advisory_xact_lock(hashtext($1))', [lockKey]);

    const result = await def.execute(client, cmd.params);
    await client.query('COMMIT');
    logger.info('SYS exécuté', { command: cmd.command, source, ok: result.ok });
    return result;
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    logger.error('SYS erreur exécution', { command: cmd.command, error: err.message });
    return { ok: false, message: `Erreur: ${err.message}` };
  } finally {
    client.release();
  }
}

export async function executePipelineCommands(db, text, source = 'system') {
  const commands = parseCommands(text);
  if (!commands.length) return { commands: [], modified: text };

  const results = [];
  let modified = text;

  for (const cmd of commands) {
    const result = await executeCommand(db, cmd, source);
    results.push({ command: cmd.command, params: cmd.params, result });
    modified = modified.replace(cmd.raw, '');
  }

  modified = modified.replace(/\s{2,}/g, ' ').trim();

  return { commands: results, modified };
}

export default { parseCommands, executeCommand, executePipelineCommands };
