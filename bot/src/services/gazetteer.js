import logger from '../utils/logger.js';

let itemIndex = [];
let npcIndex = [];
let zoneIndex = [];
let mobIndex = [];
let loaded = false;

const FRENCH_PLURALS = [
  [/aux$/i, 'al'], [/eaux$/i, 'eau'], [/eux$/i, 'eux'],
  [/(?:ier)s$/i, '$1'], [/(?:age|é|eur|ien|ien|iste)s$/i, '$1'],
  [/(?:ion|tion|sion)s$/i, '$1'],
  [/s$/i, ''],
];

function singularize(word) {
  if (word.length < 3) return word;
  for (const [pattern, replacement] of FRENCH_PLURALS) {
    if (pattern.test(word)) return word.replace(pattern, replacement);
  }
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  return word;
}

function stripQuantity(text) {
  return text.replace(/^\d+\s+/, '');
}

export async function loadGazetteer(db) {
  try {
    const [items, npcs, zones, mobs] = await Promise.all([
      db.query("SELECT item_id, name, item_type FROM t_items_dict WHERE name IS NOT NULL"),
      db.query("SELECT npc_id, display_name, role_type, zone_id FROM t_npc WHERE display_name IS NOT NULL"),
      db.query("SELECT zone_id, zone_name, zone_type FROM t_zones"),
      db.query("SELECT monster_id, name, level, family, element FROM t_monsters_dict WHERE name IS NOT NULL"),
    ]);
    itemIndex = items.rows;
    npcIndex = npcs.rows;
    zoneIndex = zones.rows;
    mobIndex = mobs.rows;
    loaded = true;
    logger.info(`Gazetteer chargé : ${itemIndex.length} items, ${npcIndex.length} PNJs, ${zoneIndex.length} zones, ${mobIndex.length} mobs`);
  } catch (err) {
    logger.warn('Impossible de charger le gazetteer', { error: err.message });
  }
}

function normalize(str) {
  return singularize(stripQuantity(str)).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function score(a, b) {
  const na = normalize(a);
  const nb = normalize(b);
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.85;
  const wordsA = na.split(/\s+/);
  const wordsB = nb.split(/\s+/);
  const common = wordsA.filter(w => wordsB.includes(w)).length;
  if (common > 0) return common / Math.max(wordsA.length, wordsB.length) * 0.65;
  return 0;
}

export function resolveItem(query) {
  if (!loaded || itemIndex.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const item of itemIndex) {
    const s = Math.max(score(query, item.item_id), score(query, item.name));
    if (s > bestScore) {
      bestScore = s;
      best = item;
    }
  }
  return bestScore > 0.4 ? best : null;
}

export function resolveNpc(query) {
  if (!loaded || npcIndex.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const npc of npcIndex) {
    const s = Math.max(score(query, npc.npc_id), score(query, npc.display_name));
    if (s > bestScore) {
      bestScore = s;
      best = npc;
    }
  }
  return bestScore > 0.3 ? best : null;
}

export function resolveZone(query) {
  if (!loaded || zoneIndex.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const zone of zoneIndex) {
    const s = Math.max(score(query, zone.zone_id), score(query, zone.zone_name));
    if (s > bestScore) {
      bestScore = s;
      best = zone;
    }
  }
  return bestScore > 0.3 ? best : null;
}

export function resolveMob(query) {
  if (!loaded || mobIndex.length === 0) return null;
  let best = null;
  let bestScore = 0;
  for (const mob of mobIndex) {
    const s = Math.max(score(query, mob.monster_id), score(query, mob.name));
    if (s > bestScore) {
      bestScore = s;
      best = mob;
    }
  }
  return bestScore > 0.3 ? best : null;
}

export function isLoaded() {
  return loaded;
}

export default { loadGazetteer, resolveItem, resolveNpc, resolveZone, resolveMob, isLoaded };
