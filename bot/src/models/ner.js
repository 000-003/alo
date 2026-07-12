import { resolveItem, resolveNpc, resolveZone, resolveMob } from '../services/gazetteer.js';
import { getPipeline } from './loader.js';
import logger from '../utils/logger.js';

const QUANTITY_RE = /(\d+)\s*(?:x|fois)?/i;
const ITEM_ID_RE = /`?([A-Z]{2,4}_[A-Z]{2,4}_\d{3})`?/i;
const NPC_ID_RE = /`?(NPC_\w+_\d+)`?/i;
const MONSTER_ID_RE = /`?(MOB_\w+)`?/i;
const ZONE_ID_RE = /`?(ZONE_\w+_\d+)`?/i;
const SKILL_ID_RE = /`?((?:MAG|OSS|PAS)_\w+_\d{3})`?/i;

export async function extractEntities(text) {
  const entities = {};
  const lower = text.toLowerCase();

  const nerPipe = getPipeline('ner');
  if (nerPipe) {
    try {
      const nerResults = await nerPipe(text, { aggregation_strategy: 'simple' });
      for (const ent of nerResults) {
        const word = ent.word.toLowerCase();
        if (ent.entity_group === 'PER' || ent.entity_group === 'MISC') {
          const resolved = resolveNpc(word) || resolveMob(word);
          if (resolved) {
            if (resolved.npc_id) entities.npcId = resolved.npc_id;
            if (resolved.monster_id) entities.monsterId = resolved.monster_id;
          }
        }
        if (ent.entity_group === 'LOC') {
          const resolved = resolveZone(word);
          if (resolved) entities.zoneId = resolved.zone_id;
        }
      }
      if (entities.npcId || entities.monsterId || entities.zoneId) {
        logger.debug('NER entities from Transformers.js', { entities });
      }
    } catch (err) {
      logger.debug('NER pipeline failed, fallback regex', { error: err.message });
    }
  }

  if (!entities.npcId) {
    const npcMatch = text.match(NPC_ID_RE);
    if (npcMatch) {
      entities.npcId = npcMatch[1];
    } else {
      const resolved = resolveNpc(text);
      if (resolved) entities.npcId = resolved.npc_id;
    }
  }

  if (!entities.monsterId) {
    const monsterMatch = text.match(MONSTER_ID_RE);
    if (monsterMatch) entities.monsterId = monsterMatch[1];
  }

  let itemIdMatch = text.match(ITEM_ID_RE);
  if (itemIdMatch) {
    entities.itemId = itemIdMatch[1];
  } else if (lower.includes('potion') || lower.includes('arme') || lower.includes('armure')) {
    const resolved = resolveItem(text);
    if (resolved) entities.itemId = resolved.item_id;
  }

  if (!entities.zoneId) {
    const zoneIdMatch = text.match(ZONE_ID_RE);
    if (zoneIdMatch) {
      entities.zoneId = zoneIdMatch[1];
    } else {
      const resolved = resolveZone(text);
      if (resolved) entities.zoneId = resolved.zone_id;
    }
  }

  const qtyMatch = text.match(QUANTITY_RE);
  if (qtyMatch) entities.quantity = parseInt(qtyMatch[1], 10);

  const skillMatch = text.match(SKILL_ID_RE);
  if (skillMatch) entities.skillId = skillMatch[1];

  for (const kw of ['potion', 'arme', 'armure', 'épée', 'bouclier', 'anneau', 'bague', 'minerai', 'plante', 'marchand', 'garde', 'forgeron']) {
    if (lower.includes(kw)) {
      entities.keyword = kw;
      break;
    }
  }

  return entities;
}

export default { extractEntities };
