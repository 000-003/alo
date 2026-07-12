import { pipeline, env } from '@huggingface/transformers';

env.localModelPath = './models';
env.allowRemoteModels = true;

const LABELS = ['MOVE', 'BUY', 'SELL', 'ATTACK', 'TALK', 'INVENTORY', 'STATUS', 'HELP', 'QUEST', 'CRAFT', 'EMOTE', 'WHISPER', 'LORE_QUERY'];

const SAMPLES = [
  "attaque le loup avec mon épée",
  "je vais à Swilvane",
  "combien coûte cette potion",
  "parle au garde dans la capitale",
  "qui es-tu",
  "inventaire",
  "statut du personnage",
  "j'achète 3 potions de soin",
  "vends mon épée longue",
  "quête du débutant",
];

async function bench() {
  console.log("=== Benchmark Transformers.js ===\n");
  const mem0 = process.memoryUsage();

  // Embedding
  let t = Date.now();
  const embedPipe = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', { dtype: 'q8' });
  const embedLoad = (Date.now() - t) / 1000;

  let embedTotal = 0;
  for (let i = 0; i < SAMPLES.length; i++) {
    const t0 = Date.now();
    await embedPipe(SAMPLES[i], { pooling: 'mean', normalize: true });
    embedTotal += Date.now() - t0;
  }
  console.log(`📐 Embed (384-dim):  chargement ${embedLoad.toFixed(1)}s | ${(embedTotal / SAMPLES.length).toFixed(0)}ms/inférence`);

  // Intent
  t = Date.now();
  const intentPipe = await pipeline('zero-shot-classification', 'Xenova/distilbert-base-uncased-mnli', { dtype: 'q8' });
  const intentLoad = (Date.now() - t) / 1000;

  let intentTotal = 0;
  for (const text of SAMPLES) {
    const t0 = Date.now();
    await intentPipe(text, LABELS, { hypothesis_template: 'This action is about {}.' });
    intentTotal += Date.now() - t0;
  }
  console.log(`🎯 Intent (13 classes): chargement ${intentLoad.toFixed(1)}s | ${(intentTotal / SAMPLES.length).toFixed(0)}ms/classification`);

  // Slow path: full search (embed all samples × embed query)
  console.log(`\n=== Simulation RAG ===`);
  t = Date.now();
  for (const text of SAMPLES) {
    const q = await embedPipe(text, { pooling: 'mean', normalize: true });
  }
  console.log(`RAG (embed only): ${SAMPLES.length} requêtes en ${(Date.now() - t).toFixed(0)}ms`);

  // Memory
  const mem = process.memoryUsage();
  console.log(`\n=== Mémoire ===`);
  console.log(`RSS: ${((mem.rss - mem0.rss) / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Heap: ${((mem.heapUsed - mem0.heapUsed) / 1024 / 1024).toFixed(1)} MB`);

  console.log(`\n✅ Benchmark terminé.`);
}

bench().catch(e => console.error('ERREUR:', e.message));
