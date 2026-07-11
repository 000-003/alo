import fs from 'fs';
import path from 'path';
import config from '../config.js';

let vocab = null;
const EMBED_DIM = 64;

function loadVocab() {
  if (vocab) return vocab;
  const vocabPath = path.join(config.models.path, 'embed_vocab.json');
  if (fs.existsSync(vocabPath)) {
    vocab = JSON.parse(fs.readFileSync(vocabPath, 'utf-8'));
  } else {
    vocab = {};
  }
  return vocab;
}

export function embed(text) {
  const v = loadVocab();
  const vec = new Float32Array(EMBED_DIM);
  const words = text.toLowerCase().split(/\s+/);
  let count = 0;

  for (const word of words) {
    const clean = word.replace(/[^a-zéèêëàâùûôîï]/g, '');
    if (v[clean] !== undefined) {
      const idx = v[clean];
      if (idx < EMBED_DIM) {
        vec[idx] += 1;
        count++;
      }
    }
  }

  if (count > 0) {
    for (let i = 0; i < EMBED_DIM; i++) {
      vec[i] /= count;
    }
  }

  return vec;
}

export function cosineSimilarity(a, b) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom === 0 ? 0 : dot / denom;
}

export function semanticSearch(query, candidates, topK = 3) {
  const queryVec = embed(query);
  const scored = candidates.map(c => ({
    ...c,
    score: cosineSimilarity(queryVec, embed(c.text || c.name || c)),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}

export default { embed, cosineSimilarity, semanticSearch };
