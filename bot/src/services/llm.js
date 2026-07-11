import config from '../config.js';
import logger from '../utils/logger.js';

let apiAvailable = false;
let quotaRemaining = { groq: 60, mistral: 50, openrouter: 200, huggingface: 100 };
const QUOTA_RESET_MS = 60 * 1000;

setInterval(() => {
  for (const key of Object.keys(quotaRemaining)) {
    quotaRemaining[key] = Math.min(
      { groq: 60, mistral: 50, openrouter: 200, huggingface: 100 }[key] || 50,
      quotaRemaining[key] + 10
    );
  }
}, QUOTA_RESET_MS);

const SYSTEM_PROMPT = 'Tu es le Système Cardinal, le backend narratif du MMORPG ALfheim Online. Réponds de manière immersive, concise (max 3 phrases), en français.';

const PROVIDERS = {
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
    key: () => config.api.groqKey,
  },
  mistral: {
    url: 'https://api.mistral.ai/v1/chat/completions',
    model: 'mistral-small-latest',
    key: () => config.api.mistralKey,
  },
  openrouter: {
    url: 'https://openrouter.ai/api/v1/chat/completions',
    model: 'mistralai/mistral-7b-instruct:free',
    key: () => config.api.openrouterKey,
    headers: () => ({ 'HTTP-Referer': 'https://alo.local', 'X-Title': 'ALfheim Cardinal' }),
  },
  huggingface: {
    url: 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3',
    key: () => config.api.hfKey,
    format: (prompt) => ({ inputs: `<s>[INST] ${prompt} [/INST]` }),
  },
};

const ROLES = {
  NARRATIVE: {
    model: 'llama-3.3-70b-versatile',
    priority: ['groq', 'mistral', 'openrouter'],
    system: 'Tu es le Système Cardinal du MMORPG ALfheim Online. Produis une narration immersive en français (max 3 phrases).',
    temperature: 0.8,
    maxTokens: 300,
  },
  DIALOGUE: {
    model: 'mistral-small-latest',
    priority: ['mistral', 'groq', 'openrouter'],
    system: 'Tu es un PNJ d\'ALfheim Online. Réponds en restant dans ton rôle, en français (max 2 phrases).',
    temperature: 0.7,
    maxTokens: 200,
  },
  LORE: {
    model: 'llama-3.3-70b-versatile',
    priority: ['groq', 'mistral', 'openrouter'],
    system: 'Tu es l\'encyclopédie d\'ALfheim Online. Réponds avec des faits précis, en français (max 4 phrases). Si tu ne sais pas, dis-le.',
    temperature: 0.4,
    maxTokens: 400,
  },
  COMBAT: {
    model: 'mistral-small-latest',
    priority: ['mistral', 'groq', 'openrouter'],
    system: 'Tu es le narrateur de combat d\'ALfheim Online. Décris l\'action de manière dynamique en français (1-2 phrases).',
    temperature: 0.7,
    maxTokens: 150,
  },
};

const FALLBACK_TEMPLATES = {
  NARRATIVE: [
    "{player}, l'aventure t'attend à {zone}. Les vents d'ALfheim te guident.",
    "Tu te tiens à {zone}, prêt pour l'aventure, {player}.",
  ],
  DIALOGUE: [
    "Bonjour, {player}. Que puis-je faire pour toi ?",
    "Sois le bienvenu à {zone}, {player}.",
  ],
  LORE: [
    "Cette connaissance est perdue dans les âges. Seuls les anciens s'en souviennent peut-être.",
    "Les archives d'ALfheim ne contiennent pas cette information.",
  ],
  COMBAT: [
    "Le combat fait rage !",
    "Les armes s'entrechoquent dans un bruit assourdissant.",
  ],
};

export async function generate(role, prompt, context = {}, policy = {}) {
  const roleConfig = ROLES[role];
  if (!roleConfig) return prompt;

  if (!config.api.useApi) {
    return generateFallback(role, prompt, context);
  }

  const providers = getProviderPriority(role, policy);

  for (const name of providers) {
    const prov = PROVIDERS[name];
    if (!prov || !prov.key()) continue;
    if ((quotaRemaining[name] || 0) <= 0) continue;

    try {
      const result = await callProvider(name, prov, prompt, roleConfig, context);
      if (result) {
        apiAvailable = true;
        quotaRemaining[name] = (quotaRemaining[name] || 0) - 1;
        return result;
      }
    } catch (err) {
      logger.debug(`LLM ${name} failed for role ${role}`, { error: err.message });
    }
  }

  apiAvailable = false;
  return generateFallback(role, prompt, context);
}

function getProviderPriority(role, policy) {
  const roleConfig = ROLES[role];
  const base = policy.priority || roleConfig?.priority || ['groq', 'mistral', 'openrouter', 'huggingface'];
  return [...new Set(base)];
}

async function callProvider(name, prov, prompt, roleConfig, context) {
  const systemPrompts = [];
  systemPrompts.push(context.systemPrompt || roleConfig.system || SYSTEM_PROMPT);

  if (context.ragContext) {
    systemPrompts.push(`\nContexte récupéré :\n${context.ragContext}`);
  }

  const system = systemPrompts.join('\n');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${prov.key()}`,
    ...(prov.headers ? prov.headers() : {}),
  };

  let body;
  if (name === 'huggingface' && prov.format) {
    body = prov.format(`${system}\n\n${prompt}`);
  } else {
    body = {
      model: roleConfig.model || prov.model,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      max_tokens: roleConfig.maxTokens || 200,
      temperature: roleConfig.temperature || 0.7,
    };
  }

  const response = await fetch(prov.url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    if (response.status === 429) {
      quotaRemaining[name] = 0;
      setTimeout(() => { quotaRemaining[name] = 50; }, QUOTA_RESET_MS);
    }
    logger.warn(`LLM ${name} error`, { status: response.status });
    return null;
  }

  const data = await response.json();
  const transform = PROVIDERS[name]?.transform;
  if (transform) return transform(data);
  return data.choices?.[0]?.message?.content || null;
}

PROVIDERS.groq.transform = (data) => data.choices?.[0]?.message?.content || null;
PROVIDERS.mistral.transform = (data) => data.choices?.[0]?.message?.content || null;
PROVIDERS.openrouter.transform = (data) => data.choices?.[0]?.message?.content || null;
PROVIDERS.huggingface.transform = (data) =>
  Array.isArray(data) ? data[0]?.generated_text || null : data?.generated_text || null;

function generateFallback(role, _prompt, context) {
  const templates = FALLBACK_TEMPLATES[role];
  if (!templates) return _prompt;
  const template = templates[Math.floor(Math.random() * templates.length)];
  let result = template;
  for (const [key, value] of Object.entries(context)) {
    result = result.replace(`{${key}}`, String(value || 'inconnu'));
  }
  result = result.replace('{player}', context.playerName || 'Aventurier');
  result = result.replace('{zone}', context.zoneName || 'ALfheim');
  return result;
}

export const generateNarrative = (vars, ctx) => generate('NARRATIVE', 'Décris cette scène.', { ...ctx, ...vars });
export const enhanceDialogue = (npcId, npcName, roleType, query, ctx) =>
  generate('DIALOGUE', `"${query}"`, { ...ctx, npcName, systemPrompt: `Tu es ${npcName} (${roleType}).` });
export const generateResponse = (query, ctx) => generate('NARRATIVE', query, ctx);
export const isApiAvailable = () => apiAvailable;

export default { generate, generateNarrative, enhanceDialogue, generateResponse, isApiAvailable };
