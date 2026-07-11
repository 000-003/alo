import logger from '../utils/logger.js';
import { classifyIntent } from '../models/intent.js';
import { extractEntities } from '../models/ner.js';

const INTENT_PATTERNS = [
  { intent: 'MOVE', pattern: /^(?:je )?(?:vais?|va|vé|va à|vais à|me déplace|teleporte|tp)\s*(?::\s*)?(`?\w+`?)?/i },
  { intent: 'BUY', pattern: /(?:achète|achete|achat|acheter|buy|prends?|je veux|donne moi|combien coûte|prix de)\s*(?::\s*)?(\d+)?\s*(.+)?/i },
  { intent: 'SELL', pattern: /(?:vends?|revends?|sell|vendre)\s*(?::\s*)?(\d+)?\s*(.+)?/i },
  { intent: 'ATTACK', pattern: /(?:attaqu?e?|attack|frappe?|cogne?|combat|engage)\s*(?::\s*)?(.+)?/i },
  { intent: 'USE_SKILL', pattern: /(?:utilise?|use|lance?|cast|sort|compétence|skill)\s*(?::\s*)?(`?\w+`?)?/i },
  { intent: 'TALK', pattern: /(?:parle?|talk|discute?|dialogue|qui es-tu|que fais-tu)\s*(?::\s*)?(.+)?/i },
  { intent: 'INVENTORY', pattern: /^(?:inv|inventaire|sac|bag|items?|objets?|equipement|stuff)$/i },
  { intent: 'QUEST', pattern: /(?:quêt|quest|mission|contrat)\s*(?::\s*)?(.+)?/i },
  { intent: 'STATUS', pattern: /^(?:statut?|status|profil|profile|moi|perso|fiche|hp|mp)$/i },
  { intent: 'PARTY', pattern: /(?:groupe?|party|invite?|recrute?)\s*(?::\s*)?(.+)?/i },
  { intent: 'GUILD', pattern: /(?:guilde?|guild|clan)\s*(?::\s*)?(.+)?/i },
  { intent: 'CRAFT', pattern: /(?:craft|fabrique?|forge?|artisanat|recette?)\s*(?::\s*)?(.+)?/i },
  { intent: 'HELP', pattern: /^(?:help|aide|commandes?|menu|\/help|\/aide|!aide|!help)$/i },
  { intent: 'EMOTE', pattern: /^(?:\/me|\/emote|\/do|\/it)(?:\s+(.+))?$/i },
  { intent: 'WHISPER', pattern: /^(?:\/w|\/whisper|\/tell)\s+(\w+)\s+(.+)/i },
];

export function getAgentForIntent(intent) {
  const map = {
    MOVE: 'movement', BUY: 'economy', SELL: 'economy',
    ATTACK: 'combat', USE_SKILL: 'combat',
    TALK: 'dialogue', INVENTORY: 'player', QUEST: 'player',
    STATUS: 'player', PARTY: 'social', GUILD: 'social',
    CRAFT: 'economy', HELP: 'system', EMOTE: 'social', WHISPER: 'social',
  };
  return map[intent] || 'fallback';
}

export async function routeMessage(text) {
  if (!text || typeof text !== 'string') {
    return { intent: 'UNKNOWN', confidence: 0, entities: {}, match: null, agent: 'fallback' };
  }

  const cleaned = text.trim();
  const modelResult = await classifyIntent(cleaned);
  let intent = modelResult.intent;
  let confidence = modelResult.confidence;

  if (confidence < 0.3) {
    for (const { intent: fi, pattern } of INTENT_PATTERNS) {
      const match = cleaned.match(pattern);
      if (match) {
        const coverage = match[0].length / cleaned.length;
        if (coverage > 0.5) {
          intent = fi;
          confidence = Math.min(1, coverage);
          break;
        }
      }
    }
  }

  if (intent === 'UNKNOWN') {
    for (const { intent: fi, pattern } of INTENT_PATTERNS) {
      if (cleaned.match(pattern)) {
        intent = fi;
        confidence = 0.5;
        break;
      }
    }
  }

  const entities = extractEntities(cleaned);

  if (intent === 'BUY' || intent === 'SELL') {
    for (const kw of ['potion', 'arme', 'armure', 'épée', 'bouclier', 'anneau', 'bague', 'minerai', 'plante']) {
      if (cleaned.toLowerCase().includes(kw)) {
        entities.keyword = kw;
        break;
      }
    }
  }

  if (intent === 'ATTACK' && !entities.monsterId) {
    const atkMatch = cleaned.match(/(?:attaqu?e?|attack|frappe?|cogne?|combat|engage)\s+(.+)/i);
    if (atkMatch) entities.target = atkMatch[1].trim();
  }

  let match = null;
  for (const { intent: fi, pattern } of INTENT_PATTERNS) {
    if (fi === intent) {
      match = cleaned.match(pattern);
      break;
    }
  }

  const agent = getAgentForIntent(intent);

  logger.debug('Message routé', {
    intent,
    confidence: confidence.toFixed(2),
    agent,
    entities: Object.keys(entities).length,
  });

  return {
    raw: text,
    intent,
    confidence,
    entities,
    agent,
    match: match?.slice(1) || null,
  };
}

export default { routeMessage, getAgentForIntent };
