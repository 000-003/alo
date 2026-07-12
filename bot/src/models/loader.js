import { pipeline, env } from '@huggingface/transformers';
import config from '../config.js';
import logger from '../utils/logger.js';

env.localModelPath = config.models.path || './models';
env.allowRemoteModels = true;

let pipelines = {};
let ready = false;

export async function loadModels() {
  const models = {
    embed: { task: 'feature-extraction', model: 'Xenova/all-MiniLM-L6-v2' },
    intent: { task: 'zero-shot-classification', model: 'Xenova/distilbert-base-uncased-mnli' },
    ner: { task: 'token-classification', model: 'Xenova/bert-base-NER' },
  };

  let loaded = 0;
  for (const [key, cfg] of Object.entries(models)) {
    try {
      const pipe = await pipeline(cfg.task, cfg.model, {
        dtype: 'q8',
        device: 'cpu',
        progress_callback: (p) => {
          if (p.status === 'progress') {
            logger.debug(`Chargement ${key}`, { progress: `${p.loaded}/${p.total}` });
          }
        },
      });
      pipelines[key] = pipe;
      loaded++;
      logger.info(`Modèle chargé : ${key} (${cfg.model})`);
    } catch (err) {
      logger.warn(`Impossible de charger ${key}`, { error: err.message });
    }
  }

  ready = loaded > 0;
  logger.info(`Modèles Transformers.js : ${loaded}/${Object.keys(models).length} chargés`);
  return pipelines;
}

export function getPipeline(key) {
  return pipelines[key] || null;
}

export function isReady() {
  return ready;
}

export function getStatus() {
  return {
    ready,
    pipelines: Object.keys(pipelines).reduce((acc, k) => {
      acc[k] = !!pipelines[k];
      return acc;
    }, {}),
  };
}

export default { loadModels, getPipeline, isReady, getStatus };
