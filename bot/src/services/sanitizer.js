const INJECTION_PATTERNS = [
  /ignore\s+(?:all\s+)?(?:previous|above|instructions|prompts?)/i,
  /ignore\s+everything/i,
  /forget\s+(?:all\s+)?(?:previous|above)/i,
  /you\s+(?:are\s+)?(?:now|must\s+act\s+as)\s+/i,
  /from\s+now\s+on/i,
  /system\s+(?:prompt|instructions?|message)/i,
  /you\s+are\s+(?:not\s+)?(?:bound|limited|restricted)/i,
  /do\s+(?:not\s+)?(?:follow|obey|listen)/i,
  /override/i,
  /<\|im_start\|>/i,
  /<\|im_end\|>/i,
  /<\|system\|>/i,
  /\[INST\]/i,
  /\[\/INST\]/i,
  /<s>/i,
  /\[\/s\]/i,
  /role\s*[:=]\s*(?:system|assistant)/i,
  /(?:ignore|oublie)\s+(?:toutes\s+)?(?:les|mes)?\s*(?:instructions?|directives?|consignes?)/i,
  /(?:à partir de maintenant|désormais)\s*(?:tu|vous)\s+(?:es|êtes|seras)\s+/i,
  /(?:ne\s+)?(?:tiens?\s+pas?\s+compte|écoute?\s+pas?|suit?\s+pas?)\s+(?:de\s+)?(?:ce qui précède|ces instructions)/i,
  /(?:tu\s+)?(?:es|seras)\s+(?:maintenant|désormais)\s+/i,
];

export function sanitizeUserInput(text) {
  if (!text || typeof text !== 'string') return '';
  let sanitized = text
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
    .slice(0, 2000);
  for (const pattern of INJECTION_PATTERNS) {
    sanitized = sanitized.replace(pattern, '[contenu filtré]');
  }
  return sanitized.trim();
}

export function sanitizeForLlm(text) {
  return sanitizeUserInput(text);
}

export default { sanitizeUserInput, sanitizeForLlm };
