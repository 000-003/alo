import logger from '../utils/logger.js';

export function calculateDamage(attacker, defender, skill = null) {
  const atk = attacker.base_atk || 0;
  const def = defender.base_def || 0;
  const levelRatio = attacker.level / Math.max(defender.level, 1);

  let baseDmg = (atk * atk) / (atk + Math.max(def, 1));
  baseDmg = Math.max(baseDmg, 1);

  if (skill) {
    baseDmg += skill.base_damage || 0;
    if (skill.stat_scaling) {
      const scaling = typeof skill.stat_scaling === 'object'
        ? skill.stat_scaling
        : JSON.parse(skill.stat_scaling || '{}');
      for (const [stat, ratio] of Object.entries(scaling)) {
        baseDmg += (attacker[stat] || 0) * (ratio || 0);
      }
    }
  }

  baseDmg *= levelRatio;
  baseDmg *= (1 + (Math.random() - 0.5) * 0.2);

  return Math.round(Math.max(baseDmg, 0));
}

export function calculateHealing(caster, skill) {
  let baseHeal = skill.base_healing || 0;
  if (skill.stat_scaling) {
    const scaling = typeof skill.stat_scaling === 'object'
      ? skill.stat_scaling
      : JSON.parse(skill.stat_scaling || '{}');
    for (const [stat, ratio] of Object.entries(scaling)) {
      baseHeal += (caster[stat] || 0) * (ratio || 0);
    }
  }
  return Math.round(Math.max(baseHeal, 1));
}

export function applyStatusEffect(target, effect) {
  if (!effect || !target) return null;

  const durationMs = (effect.duration_sec || 10) * 1000;
  const effectInstance = {
    effectId: effect.effect_id,
    name: effect.name,
    type: effect.type,
    statModified: effect.stat_modified,
    modifierValue: effect.modifier_value || 0,
    modifierType: effect.modifier_type || 'flat',
    durationMs,
    endTime: Date.now() + durationMs,
    maxStacks: effect.max_stacks || 1,
    currentStacks: 1,
  };

  if (!target.activeEffects) target.activeEffects = [];
  const existing = target.activeEffects.find(e => e.effectId === effect.effect_id);
  if (existing) {
    existing.currentStacks = Math.min(existing.currentStacks + 1, existing.maxStacks);
    existing.endTime = Date.now() + durationMs;
    return existing;
  }

  target.activeEffects.push(effectInstance);
  return effectInstance;
}

export function tickStatusEffects(target) {
  if (!target?.activeEffects?.length) return [];
  const now = Date.now();
  const expired = [];
  target.activeEffects = target.activeEffects.filter(ef => {
    if (now >= ef.endTime) {
      expired.push(ef);
      return false;
    }
    if (ef.statModified === 'hp_current' && ef.type === 'debuff') {
      target.hp_current = Math.max(0, (target.hp_current || 0) - ef.modifierValue);
    }
    if (ef.statModified === 'hp_current' && ef.type === 'buff') {
      target.hp_current = Math.min(target.hp_max || 9999, (target.hp_current || 0) + ef.modifierValue);
    }
    return true;
  });
  return expired;
}

export function calculateExpReward(monster, partySize = 1) {
  const base = monster.exp_yield || 50;
  const partyMultiplier = partySize > 1 ? 1 + (partySize - 1) * 0.15 : 1;
  return Math.round(base * partyMultiplier / partySize);
}

export function generateCombatLog(action, actor, target, damage, effects) {
  return {
    timestamp: Date.now(),
    action,
    actorId: actor.id || actor.npc_id,
    targetId: target?.id || target?.npc_id || null,
    damage: damage || 0,
    effects: effects || [],
    actorHp: actor.hp_current,
    targetHp: target?.hp_current,
  };
}

export default {
  calculateDamage,
  calculateHealing,
  applyStatusEffect,
  tickStatusEffects,
  calculateExpReward,
  generateCombatLog,
};
