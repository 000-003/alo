import logger from '../utils/logger.js';

const COMMANDS = {};

function define(name, def) {
  COMMANDS[name] = def;
}

define('SYS_GRANT_ITEM', {
  description: 'Accorde un ou plusieurs exemplaires d\'un objet à un joueur',
  schema: { player_id: 'uuid', item_id: 'string', quantity: 'integer', reason: 'string' },
  async d71(db, params) {
    const pr = await db.query('SELECT 1 FROM t_avatars WHERE avatar_uuid = $1', [params.player_id]);
    if (!pr.rows.length) return `Joueur ${params.player_id} introuvable`;
    const ir = await db.query('SELECT 1 FROM t_items_dict WHERE item_id = $1', [params.item_id]);
    if (!ir.rows.length) return `Objet ${params.item_id} introuvable`;
    return null;
  },
  async prereqs(db, params) {
    const pr = await db.query('SELECT is_alive FROM t_avatars WHERE avatar_uuid = $1', [params.player_id]);
    if (pr.rows.length && !pr.rows[0].is_alive) return 'Le joueur est mort';
    return null;
  },
  async authorize(source) {
    if (source === 'gm') return true;
    if (source === 'system') return true;
    if (source === 'quest_reward') return true;
    return false;
  },
  async execute(db, params) {
    const qty = Math.max(1, Math.min(9999, parseInt(params.quantity, 10) || 1));
    await db.query(
      `INSERT INTO t_inventory (avatar_uuid, item_id, quantity)
       VALUES ($1, $2, $3)
       ON CONFLICT (avatar_uuid, item_id) DO UPDATE SET quantity = t_inventory.quantity + EXCLUDED.quantity`,
      [params.player_id, params.item_id, qty]
    );
    logger.info('SYS_GRANT_ITEM ok', { player: params.player_id, item: params.item_id, qty });
    return { ok: true, message: `${qty}× ${params.item_id} accordé à ${params.player_id}` };
  },
});

define('SYS_ADVANCE_QUEST', {
  description: 'Avance un objectif de quête pour un joueur',
  schema: { player_id: 'uuid', quest_id: 'string', steps: 'integer' },
  async d71(db, params) {
    const pr = await db.query('SELECT 1 FROM t_avatars WHERE avatar_uuid = $1', [params.player_id]);
    if (!pr.rows.length) return `Joueur ${params.player_id} introuvable`;
    const qr = await db.query('SELECT 1 FROM t_quests_dict WHERE quest_id = $1', [params.quest_id]);
    if (!qr.rows.length) return `Quête ${params.quest_id} introuvable`;
    return null;
  },
  async prereqs(db, params) {
    const aq = await db.query(
      'SELECT progress, is_completed FROM t_active_quests WHERE avatar_uuid = $1 AND quest_id = $2',
      [params.player_id, params.quest_id]
    );
    if (!aq.rows.length) return 'Quête non active chez ce joueur';
    if (aq.rows[0].is_completed) return 'Quête déjà terminée';
    return null;
  },
  async authorize(source) {
    return ['gm', 'system', 'quest_reward'].includes(source);
  },
  async execute(db, params) {
    const steps = Math.max(1, parseInt(params.steps, 10) || 1);
    const aq = await db.query(
      `UPDATE t_active_quests
       SET progress = progress + $1,
           is_completed = (progress + $1 >= objectives_total)
       WHERE avatar_uuid = $2 AND quest_id = $3
       RETURNING progress, objectives_total, is_completed`,
      [steps, params.player_id, params.quest_id]
    );
    if (!aq.rows.length) return { ok: false, message: 'Échec mise à jour quête' };
    const row = aq.rows[0];
    logger.info('SYS_ADVANCE_QUEST ok', { player: params.player_id, quest: params.quest_id, steps });
    return { ok: true, message: `Quête avancée (${row.progress}/${row.objectives_total})`, completed: row.is_completed };
  },
});

define('SYS_NPC_KNOWLEDGE_UNLOCK', {
  description: 'Débloque un niveau de connaissance PNJ pour un joueur',
  schema: { player_id: 'uuid', npc_id: 'string', level: 'string' },
  async d71(db, params) {
    const pr = await db.query('SELECT 1 FROM t_avatars WHERE avatar_uuid = $1', [params.player_id]);
    if (!pr.rows.length) return `Joueur ${params.player_id} introuvable`;
    const nr = await db.query('SELECT 1 FROM t_npc WHERE npc_id = $1', [params.npc_id]);
    if (!nr.rows.length) return `PNJ ${params.npc_id} introuvable`;
    if (!['K0', 'K1', 'K2', 'K3'].includes(params.level)) return `Niveau ${params.level} invalide (K0-K3)`;
    return null;
  },
  async prereqs(db, params) {
    const existing = await db.query(
      'SELECT 1 FROM t_npc_knowledge_unlocks WHERE avatar_uuid = $1 AND npc_id = $2 AND k_level = $3',
      [params.player_id, params.npc_id, params.level]
    );
    if (existing.rows.length) return 'Connaissance déjà débloquée';
    return null;
  },
  async authorize(source) {
    return ['gm', 'system'].includes(source);
  },
  async execute(db, params) {
    await db.query(
      'INSERT INTO t_npc_knowledge_unlocks (avatar_uuid, npc_id, k_level) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
      [params.player_id, params.npc_id, params.level]
    );
    logger.info('SYS_NPC_KNOWLEDGE_UNLOCK ok', { player: params.player_id, npc: params.npc_id, level: params.level });
    return { ok: true, message: `Connaissance ${params.level} débloquée pour ${params.npc_id}` };
  },
});

define('SYS_SET_ENV_HAZARD', {
  description: 'Applique un danger environnemental dans une zone pour une durée',
  schema: { zone_id: 'string', hazard_type: 'string', duration_minutes: 'integer', severity: 'string' },
  async d71(db, params) {
    const zr = await db.query('SELECT 1 FROM t_zones WHERE zone_id = $1', [params.zone_id]);
    if (!zr.rows.length) return `Zone ${params.zone_id} introuvable`;
    const validHazards = ['toxic_fog', 'fire_storm', 'earthquake', 'magic_surge', 'blizzard', 'sandstorm'];
    if (!validHazards.includes(params.hazard_type)) return `Type de danger ${params.hazard_type} invalide`;
    return null;
  },
  async prereqs() { return null; },
  async authorize(source) { return ['gm', 'system'].includes(source); },
  async execute(db, params) {
    const validSeverities = ['low', 'medium', 'high', 'extreme'];
    const severity = validSeverities.includes(params.severity) ? params.severity : 'medium';
    await db.query(
      `INSERT INTO t_weather (zone_id, weather_type, started_at, duration_minutes, intensity)
       VALUES ($1, $2, NOW(), $3, $4)
       ON CONFLICT (zone_id, weather_type) DO UPDATE SET started_at = NOW(), duration_minutes = $3, intensity = $4`,
      [params.zone_id, params.hazard_type, Math.max(1, parseInt(params.duration_minutes, 10) || 30), severity]
    );
    logger.info('SYS_SET_ENV_HAZARD ok', { zone: params.zone_id, hazard: params.hazard_type });
    return { ok: true, message: `Danger ${params.hazard_type} (${severity}) dans ${params.zone_id} pour ${params.duration_minutes} min` };
  },
});

define('SYS_SHOP_RESTOCK', {
  description: 'Réapprovisionne un marchand avec des articles',
  schema: { npc_id: 'string' },
  async d71(db, params) {
    const nr = await db.query('SELECT 1 FROM t_npc WHERE npc_id = $1 AND role_type = $2', [params.npc_id, 'MERCHANT']);
    if (!nr.rows.length) return `Marchand ${params.npc_id} introuvable`;
    return null;
  },
  async prereqs() { return null; },
  async authorize(source) { return ['gm', 'system', 'timer'].includes(source); },
  async execute(db, params) {
    const items = await db.query(
      'SELECT item_id, base_quantity FROM t_shop_items WHERE npc_id = $1',
      [params.npc_id]
    );
    for (const row of items.rows) {
      await db.query(
        `UPDATE t_shop_items SET current_stock = base_quantity, last_restock = NOW() WHERE npc_id = $1 AND item_id = $2`,
        [params.npc_id, row.item_id]
      );
    }
    logger.info('SYS_SHOP_RESTOCK ok', { npc: params.npc_id, items: items.rows.length });
    return { ok: true, message: `Marchand ${params.npc_id} réapprovisionné (${items.rows.length} articles)` };
  },
});

export function getCommand(name) {
  return COMMANDS[name] || null;
}

export function listCommands() {
  return Object.keys(COMMANDS);
}

export default { getCommand, listCommands };
