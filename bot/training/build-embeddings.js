import pool from '../src/db/pool.js';
import { embed } from '../src/models/embed.js';
import logger from '../src/utils/logger.js';

function chunkText(text, maxLen = 300) {
  if (!text) return [];
  if (text.length <= maxLen) return [text];
  const chunks = [];
  const sentences = text.match(/[^.!?\n]+[.!?\n]*/g) || [text];
  let current = '';
  for (const s of sentences) {
    if ((current + s).length > maxLen && current) {
      chunks.push(current.trim());
      current = s;
    } else {
      current += s;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

async function build() {
  logger.info('Construction de l\'index vectoriel...');

  await pool.query('TRUNCATE t_embeddings');

  const sources = [
    {
      table: 't_encyclopedia_dict',
      query: 'SELECT knowledge_id, title, content, category, is_secret FROM t_encyclopedia_dict WHERE is_secret = FALSE',
      idCol: 'knowledge_id',
      textCols: ['title', 'content'],
      meta: (r) => ({ category: r.category }),
    },
    {
      table: 't_npc_knowledge',
      query: 'SELECT qi_id, npc_id, k_level, content FROM t_npc_knowledge WHERE k_level IN (\'K0\', \'K1\', \'K2\')',
      idCol: 'qi_id',
      textCols: ['content'],
      meta: (r) => ({ npc_id: r.npc_id, k_level: r.k_level }),
    },
    {
      table: 't_items_dict',
      query: 'SELECT item_id, name, item_type, description FROM t_items_dict',
      idCol: 'item_id',
      textCols: ['name', 'description'],
      meta: (r) => ({ item_type: r.item_type }),
    },
    {
      table: 't_zones',
      query: 'SELECT zone_id, zone_name, zone_type, description FROM t_zones',
      idCol: 'zone_id',
      textCols: ['zone_name', 'description'],
      meta: (r) => ({ zone_type: r.zone_type }),
    },
    {
      table: 't_quests_dict',
      query: 'SELECT quest_id, title, quest_type, description, min_level FROM t_quests_dict',
      idCol: 'quest_id',
      textCols: ['title', 'description'],
      meta: (r) => ({ quest_type: r.quest_type, min_level: r.min_level }),
    },
    {
      table: 't_races',
      query: 'SELECT race_id, name, description FROM t_races',
      idCol: 'race_id',
      textCols: ['name', 'description'],
      meta: () => ({}),
    },
    {
      table: 't_monsters_dict',
      query: 'SELECT monster_id, name, level, family, exp_yield FROM t_monsters_dict',
      idCol: 'monster_id',
      textCols: ['name'],
      meta: (r) => ({ level: r.level, family: r.family }),
    },
  ];

  let total = 0;
  for (const source of sources) {
    const rows = await pool.query(source.query);
    for (const row of rows.rows) {
      const combined = source.textCols.map(c => row[c]).filter(Boolean).join('. ');
      const chunks = chunkText(combined);
      for (let i = 0; i < chunks.length; i++) {
        const vec = embed(chunks[i]);
        await pool.query(
          `INSERT INTO t_embeddings (source_table, source_id, chunk_index, chunk_text, embedding, metadata)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [
            source.table,
            String(row[source.idCol]),
            i,
            chunks[i],
            `{${Array.from(vec).join(',')}}`,
            JSON.stringify(source.meta(row)),
          ]
        );
        total++;
      }
    }
    logger.info(`  ${source.table}: ${rows.rows.length} lignes → ${total} chunks`);
  }

  logger.info(`Index vectoriel construit : ${total} chunks`);
  await pool.end();
}

build().catch(err => {
  logger.error('Erreur build embeddings', { error: err.message });
  process.exit(1);
});
