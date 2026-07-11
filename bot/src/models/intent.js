import logger from '../utils/logger.js';

const INTENT_KEYWORDS = {
  MOVE: ['va', 'vais', 'allé', 'déplace', 'tp', 'teleporte', 'direction', 'move', 'go'],
  BUY: ['achète', 'achete', 'achat', 'acheter', 'buy', 'prends', 'je veux', 'donne', 'combien', 'prix'],
  SELL: ['vends', 'revends', 'sell', 'vendre', 'brade'],
  ATTACK: ['attaque', 'attack', 'frappe', 'cogne', 'engage', 'combat'],
  TALK: ['parle', 'talk', 'discute', 'dialogue'],
  INVENTORY: ['inventaire', 'sac', 'bag', 'items', 'objets', 'equipement'],
  STATUS: ['statut', 'status', 'profil', 'fiche', 'niveau', 'level', 'stats'],
  HELP: ['aide', 'help', 'commandes', 'tutoriel'],
  QUEST: ['quête', 'quest', 'mission'],
  CRAFT: ['craft', 'artisanat', 'forge', 'fabrique'],
  EMOTE: ['/dance', '/salut', '/pleure', '/rire', '/crie'],
  WHISPER: ['mp', 'message privé', 'whisper', 'dm'],
};

export async function classifyIntent(text) {
  const lower = text.toLowerCase();
  let bestIntent = 'UNKNOWN';
  let bestScore = 0;

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        score += 1;
      }
    }
    if (keywords.length > 0) {
      score = score / keywords.length;
    }
    if (text.length < 20 && score > 0) {
      score += 0.2;
    }
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return { intent: bestIntent, confidence: Math.min(1, bestScore * 2) };
}

export default { classifyIntent };
