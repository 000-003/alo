import config from '../config.js';
import logger from '../utils/logger.js';

let apiAvailable = false;

const SYSTEM_PROMPT = 'Tu es le Système Cardinal, le backend narratif du MMORPG ALfheim Online. Réponds de manière immersive, concise (max 3 phrases), en français.';

const PROVIDERS = {
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama3-70b-8192',
    key: () => config.api.groqKey,
    transform: (data) => data.choices?.[0]?.message?.content || null,
  },
  mistral: {
    url: 'https://api.mistral.ai/v1/chat/completions',
    model: 'mistral-small-latest',
    key: () => config.api.mistralKey,
    transform: (data) => data.choices?.[0]?.message?.content || null,
  },
  openrouter: {
    url: 'https://openrouter.ai/api/v1/chat/completions',
    model: 'mistralai/mistral-7b-instruct:free',
    key: () => config.api.openrouterKey,
    headers: () => ({ 'HTTP-Referer': 'https://alo.local', 'X-Title': 'ALfheim Cardinal' }),
    transform: (data) => data.choices?.[0]?.message?.content || null,
  },
  huggingface: {
    url: 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3',
    model: null,
    key: () => config.api.hfKey,
    format: (prompt) => ({ inputs: `<s>[INST] ${prompt} [/INST]` }),
    transform: (data) => Array.isArray(data) ? data[0]?.generated_text || null : data?.generated_text || null,
  },
};

const NARRATIVE_TEMPLATES = {
  greeting: [
    "Bienvenue à {zone}, {player}. Les vents d'ALfheim te guident.",
    "Ah, un nouveau visage à {zone}. Sois le bienvenu, {player}.",
    "Tu arrives à {zone}. L'air est chargé de magie.",
  ],
  quest_start: [
    "{npc} te confie une mission : {description}",
    "Une nouvelle quête t'attend : {description}. {npc} compte sur toi.",
  ],
  combat_victory: [
    "Tu as vaincu {monster} ! L'expérience coule en toi.",
    "Le {monster} tombe. Tu gagnes {exp} points d'expérience.",
  ],
  discovery: [
    "Tu découvres {place}. Une énergie ancienne imprègne les lieux.",
    "Devant toi s'étend {place}. Le souffle de l'aventure te submerge.",
  ],
  default: [
    "{player}, l'aventure t'attend à {zone}. Que veux-tu faire ?",
  ],
};

function generateFallback(templateKey, vars = {}) {
  const templates = NARRATIVE_TEMPLATES[templateKey] || NARRATIVE_TEMPLATES.default;
  const template = templates[Math.floor(Math.random() * templates.length)];
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(`{${key}}`, String(value || 'inconnu'));
  }
  return result;
}

function getActiveProvider() {
  const providerName = config.api.provider || 'groq';
  const provider = PROVIDERS[providerName];
  if (!provider) return null;
  if (!provider.key()) return null;
  return { name: providerName, ...provider };
}

async function callProvider(prompt, provider) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${provider.key()}`,
    ...(provider.headers ? provider.headers() : {}),
  };

  let body;
  if (provider.name === 'huggingface') {
    body = provider.format(prompt);
  } else {
    body = {
      model: provider.model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt },
      ],
      max_tokens: 200,
      temperature: 0.7,
    };
  }

  const response = await fetch(provider.url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    logger.warn(`LLM ${provider.name} error`, { status: response.status, body: text.slice(0, 200) });
    return null;
  }

  const data = await response.json();
  return provider.transform(data);
}

async function callAny(prompt) {
  const providers = ['groq', 'mistral', 'openrouter', 'huggingface'];

  for (const name of providers) {
    const prov = PROVIDERS[name];
    if (!prov.key()) continue;
    try {
      const result = await callProvider(prompt, { name, ...prov });
      if (result) {
        apiAvailable = true;
        return result;
      }
    } catch (err) {
      logger.debug(`LLM ${name} failed, trying next`, { error: err.message });
    }
  }

  apiAvailable = false;
  return null;
}

export async function generateNarrative(templateKey, vars = {}, context = {}) {
  if (!config.api.useApi) return generateFallback(templateKey, vars);

  const provider = getActiveProvider();
  if (provider) {
    try {
      const prompt = buildPrompt(templateKey, vars, context);
      const result = await callProvider(prompt, provider);
      if (result) return result;
    } catch (err) {
      logger.warn('LLM provider failed, trying fallback chain', { error: err.message });
    }
  }

  const result = await callAny(buildPrompt(templateKey, vars, context));
  if (result) return result;

  return generateFallback(templateKey, vars);
}

export async function generateResponse(query, context = {}) {
  if (!config.api.useApi) return null;

  const prompt = `Réponds à ce message de joueur de manière RP, immersive, en moins de 3 phrases : "${query}"`;
  const provider = getActiveProvider();
  if (provider) {
    try {
      return await callProvider(prompt, provider);
    } catch {}
  }
  return callAny(prompt);
}

export async function enhanceDialogue(npcId, npcName, roleType, query) {
  if (!config.api.useApi) return null;

  const prompt = `Tu es ${npcName} (${roleType}) dans ALfheim Online. Réponds à ce message : "${query}"`;
  const provider = getActiveProvider();
  if (provider) {
    try {
      return await callProvider(prompt, provider);
    } catch {}
  }
  return callAny(prompt);
}

function buildPrompt(templateKey, vars, context) {
  let base = '';
  if (templateKey === 'greeting') {
    base = `Décris l'arrivée de ${vars.player || 'l\'aventurier'} à ${vars.zone || 'une zone inconnue'}.`;
  } else if (templateKey === 'combat_victory') {
    base = `Décris la victoire contre ${vars.monster || 'un monstre'}.`;
  } else {
    base = `Génère une narration immersive pour ALfheim Online.`;
  }
  if (context.npcName) base += ` Le PNJ ${context.npcName} est présent.`;
  if (context.zoneName) base += ` Lieu : ${context.zoneName}.`;
  return base;
}

export function isApiAvailable() {
  return apiAvailable;
}

export default { generateNarrative, generateResponse, enhanceDialogue, isApiAvailable };
