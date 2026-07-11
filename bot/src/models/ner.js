import { getSession } from './loader.js';

const ENTITY_REGEX = {
  zoneId: /`?(ZONE_\w+_\d+)`?/i,
  npcId: /`?(NPC_\w+_\d+)`?/i,
  monsterId: /`?(MOB_\w+)`?/i,
  itemId: /`?([A-Z]{2,4}_[A-Z]{2,4}_\d{3})`?/i,
  skillId: /`?((?:MAG|OSS|PAS)_\w+_\d{3})`?/i,
  quantity: /(\d+)\s*(?:x|fois)?/i,
  playerName: /[A-Z][a-zéèêëàâùûôîï]{2,}/,
};

export function extractEntities(text) {
  const entities = {};

  for (const [key, regex] of Object.entries(ENTITY_REGEX)) {
    const match = text.match(regex);
    if (match) {
      const val = match[1] || match[0];
      if (key === 'quantity') {
        entities[key] = parseInt(val, 10);
      } else {
        entities[key] = val;
      }
    }
  }

  if (text.toLowerCase().includes('marchand')) entities.keyword = 'marchand';
  if (text.toLowerCase().includes('garde')) entities.keyword = 'garde';
  if (text.toLowerCase().includes('forgeron')) entities.keyword = 'forgeron';
  if (text.toLowerCase().includes('poti')) entities.keyword = 'potion';

  return entities;
}

export async function extractEntitiesNER(text) {
  const session = getSession('ner');
  if (!session) return extractEntities(text);
  return extractEntities(text);
}

export default { extractEntities, extractEntitiesNER };
