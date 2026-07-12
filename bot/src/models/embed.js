import { getPipeline } from './loader.js';
import logger from '../utils/logger.js';

const EMBED_DIM = 384;

let fallbackVocab = null;
let fallbackReady = false;

async function initFallback() {
  if (fallbackReady) return;
  try {
    const fs = await import('fs');
    const path = await import('path');
    const config = await import('../config.js');
    const vocabPath = path.default.join(config.default.models.path, 'embed_vocab.json');
    if (fs.default.existsSync(vocabPath)) {
      fallbackVocab = JSON.parse(fs.default.readFileSync(vocabPath, 'utf-8'));
    } else {
      fallbackVocab = {};
    }
  } catch {}
  fallbackReady = true;
}

function bowEmbed(text) {
  const vec = new Float32Array(64);
  const words = text.toLowerCase().split(/\s+/);
  let count = 0;
  for (const word of words) {
    const clean = word.replace(/[^a-zéèêëàâùûôîï]/g, '');
    if (fallbackVocab && fallbackVocab[clean] !== undefined) {
      const idx = fallbackVocab[clean];
      if (idx < 64) { vec[idx] += 1; count++; }
    }
  }
  if (count > 0) for (let i = 0; i < 64; i++) vec[i] /= count;
  return vec;
}

export async function embed(text) {
  const pipe = getPipeline('embed');
  if (!pipe) {
    if (!fallbackReady) await initFallback();
    return bowEmbed(text);
  }

  try {
    const result = await pipe(text, { pooling: 'mean', normalize: true });
    return result.data;
  } catch (err) {
    logger.warn('Embedding Transformers.js failed, fallback BOW', { error: err.message });
    if (!fallbackReady) await initFallback();
    return bowEmbed(text);
  }
}

export function cosineSimilarity(a, b) {
  if (!a || !b) return 0;
  const len = Math.min(a.length, b.length);
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < len; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom === 0 ? 0 : dot / denom;
}

export async function semanticSearch(query, candidates, topK = 3) {
  const queryVec = await embed(query);
  const scored = [];
  for (const c of candidates) {
    const vec = await embed(c.text || c.name || c);
    scored.push({ ...c, score: cosineSimilarity(queryVec, vec) });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}

export default { embed, cosineSimilarity, semanticSearch };
