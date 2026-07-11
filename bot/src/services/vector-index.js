import { embed, cosineSimilarity } from '../models/embed.js';
import logger from '../utils/logger.js';

let index = [];

export async function loadVectorIndex(db) {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS t_embeddings (
        id SERIAL PRIMARY KEY,
        source_table VARCHAR(50) NOT NULL,
        source_id VARCHAR(100) NOT NULL,
        chunk_index INT DEFAULT 0,
        chunk_text TEXT NOT NULL,
        embedding FLOAT[] NOT NULL,
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_embeddings_source ON t_embeddings(source_table, source_id)
    `);
  } catch (err) {
    logger.warn('Table t_embeddings déjà existante ou erreur création', { error: err.message });
  }

  try {
    const result = await db.query('SELECT id, source_table, source_id, chunk_text, metadata FROM t_embeddings');
    index = result.rows.map(r => ({
      id: r.id,
      sourceTable: r.source_table,
      sourceId: r.source_id,
      text: r.chunk_text,
      metadata: typeof r.metadata === 'object' ? r.metadata : {},
      vector: null,
    }));
    logger.info('Index vectoriel chargé', { chunks: index.length });
  } catch (err) {
    logger.warn('Aucun index vectoriel trouvé', { error: err.message });
    index = [];
  }

  return index;
}

export function search(query, topK = 5) {
  if (!index.length) return [];
  const queryVec = embed(query);
  const scored = [];

  for (let i = 0; i < index.length; i++) {
    const entry = index[i];
    if (!entry.vector) {
      entry.vector = embed(entry.text);
    }
    const score = cosineSimilarity(queryVec, entry.vector);
    if (score > 0.15) {
      scored.push({ ...entry, score, vector: undefined });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}

export function searchBySource(query, sourceTable, topK = 3) {
  const results = search(query, index.length);
  return results.filter(r => r.sourceTable === sourceTable).slice(0, topK);
}

export function formatResults(results) {
  if (!results.length) return null;
  return results.map(r => `[${r.sourceTable}:${r.sourceId}] ${r.text.slice(0, 200)}`).join('\n');
}

export function getStats() {
  const bySource = {};
  for (const entry of index) {
    bySource[entry.sourceTable] = (bySource[entry.sourceTable] || 0) + 1;
  }
  return { total: index.length, bySource };
}

export default { loadVectorIndex, search, searchBySource, formatResults, getStats };
