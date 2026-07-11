import { calculateDamage, tickStatusEffects, calculateExpReward, generateCombatLog } from '../engine/combat.js';
import { getPlayer } from '../services/player.js';
import { render } from '../services/template.js';
import logger from '../utils/logger.js';

const activeCombats = new Map();

export async function handleAttack(db, playerUuid, entities) {
  const player = await getPlayer(db, playerUuid);
  if (!player) return render('error');

  if (activeCombats.has(playerUuid)) {
    return `⚔️ Tu es déjà en combat ! Termine-le avant d'en engager un autre.`;
  }

  const monsterId = entities.monsterId || entities.keyword || entities.target;
  if (!monsterId) {
    return `⚔️ Qui veux-tu attaquer ?`;
  }

  const monsterResult = await db.query(
    'SELECT monster_id, name, level, base_hp, base_mp, base_atk, base_def, base_agi, exp_yield '
    + 'FROM t_monsters_dict WHERE (monster_id = $1 OR name ILIKE $1) AND zone_id = $2',
    [`%${monsterId}%`, player.current_zone_id]
  );

  if (monsterResult.rows.length === 0) {
    const anyResult = await db.query(
      'SELECT monster_id, name, level, base_hp, base_mp, base_atk, base_def, base_agi, exp_yield, zone_id '
      + 'FROM t_monsters_dict WHERE monster_id = $1 OR name ILIKE $1 LIMIT 1',
      [`%${monsterId}%`]
    );
    if (anyResult.rows.length) {
      return `❌ "${monsterId}" n'est pas dans ta zone actuelle.`;
    }
    return `❌ Monstre "${monsterId}" introuvable.`;
  }
  const monster = monsterResult.rows[0];

  const combatId = `${playerUuid}_${Date.now()}`;
  const combat = {
    combatId,
    playerUuid,
    monster: { ...monster, hp_current: monster.base_hp, hp_max: monster.base_hp, activeEffects: [] },
    player: { ...player, hp_current: player.hp_current, hp_max: player.hp_max, activeEffects: [] },
    turn: 0,
    startedAt: Date.now(),
  };
  activeCombats.set(playerUuid, combat);

  try {
    await db.query(
      `INSERT INTO t_combat_sessions (session_id, avatar_uuid, monster_id, zone_id, status, started_at, turn_count)
       VALUES ($1, $2, $3, $4, 'active', NOW(), 0)`,
      [combatId, playerUuid, monster.monster_id, player.current_zone_id]
    );
  } catch (err) {
    logger.warn('Impossible de persister le combat', { error: err.message });
  }

  logger.info('Combat engagé', { playerUuid, monsterId: monster.monster_id, monsterLevel: monster.level });
  return render('attack_start', {
    monsterName: monster.name,
    monsterLevel: monster.level,
    monsterHp: monster.base_hp,
    skillName: 'Attaque de base',
  });
}

export async function handleCombatAction(db, playerUuid, action) {
  const combat = activeCombats.get(playerUuid);
  if (!combat) {
    return `⚔️ Tu n'es pas en combat. Tape "attaque [monstre]" pour en engager un.`;
  }

  const response = [];
  tickStatusEffects(combat.player);
  tickStatusEffects(combat.monster);

  const dmg = calculateDamage(combat.player, combat.monster);
  combat.monster.hp_current = Math.max(0, combat.monster.hp_current - dmg);
  response.push(render('attack_damage', {
    actorName: combat.player.avatar_name,
    damage: dmg,
    targetName: combat.monster.name,
    targetHp: combat.monster.hp_current,
  }));

  if (combat.monster.hp_current <= 0) {
    const exp = calculateExpReward(combat.monster);
    const yrds = Math.floor(exp * 0.3);
    try {
      await db.query('UPDATE t_avatars SET hp_current = $1, yrd_balance = yrd_balance + $2 WHERE avatar_uuid = $3',
        [combat.player.hp_current, yrds, playerUuid]);
      await db.query('UPDATE t_avatars SET current_xp = COALESCE(current_xp, 0) + $1 WHERE avatar_uuid = $2',
        [exp, playerUuid]);
    } catch (err) {
      logger.error('Erreur récompense combat', { error: err.message });
    }
    try {
      await db.query(
        'UPDATE t_combat_sessions SET status = $1, ended_at = NOW(), turn_count = $2 WHERE session_id = $3',
        ['victory', combat.turn, combat.combatId]
      );
    } catch {}
    response.push(render('attack_kill', { targetName: combat.monster.name, exp, yrds }));
    activeCombats.delete(playerUuid);
    return response.join('\n');
  }

  const monsterDmg = calculateDamage(combat.monster, combat.player);
  combat.player.hp_current = Math.max(0, combat.player.hp_current - monsterDmg);
  response.push(render('attack_damage', {
    actorName: combat.monster.name,
    damage: monsterDmg,
    targetName: combat.player.avatar_name,
    targetHp: combat.player.hp_current,
  }));

  if (combat.player.hp_current <= 0) {
    try {
      await db.query('UPDATE t_avatars SET hp_current = $1, is_alive = FALSE WHERE avatar_uuid = $2',
        [0, playerUuid]);
    } catch (err) {
      logger.error('Erreur mort combat', { error: err.message });
    }
    try {
      await db.query(
        'UPDATE t_combat_sessions SET status = $1, ended_at = NOW(), turn_count = $2 WHERE session_id = $3',
        ['defeat', combat.turn, combat.combatId]
      );
    } catch {}
    response.push(render('attack_death'));
    activeCombats.delete(playerUuid);
  } else {
    try {
      await db.query('UPDATE t_avatars SET hp_current = $1 WHERE avatar_uuid = $2',
        [combat.player.hp_current, playerUuid]);
    } catch (err) {
      logger.error('Erreur update HP', { error: err.message });
    }
  }

  combat.turn++;
  return response.join('\n');
}

export async function handleFlee(db, playerUuid) {
  const combat = activeCombats.get(playerUuid);
  if (!combat) return `⚔️ Tu n'es pas en combat.`;
  activeCombats.delete(playerUuid);
  return `🏃 Tu as fui le combat contre **${combat.monster.name}**.`;
}

export function getCombatStatus(playerUuid) {
  return activeCombats.get(playerUuid) || null;
}

export default { handleAttack, handleCombatAction, handleFlee, getCombatStatus };
