import fs from 'fs';
import path from 'path';
import ort from 'onnxruntime-node';
import config from '../config.js';
import logger from '../utils/logger.js';

const MODEL_DIR = config.models.path;
const sessions = {};
let ready = false;

export async function loadModels() {
  const modelFiles = [
    { key: 'intent', file: config.models.intent },
    { key: 'ner', file: config.models.ner },
    { key: 'combat', file: config.models.combat },
    { key: 'embed', file: 'embed.onnx' },
  ];

  for (const { key, file } of modelFiles) {
    const fullPath = path.join(MODEL_DIR, file);
    if (fs.existsSync(fullPath)) {
      try {
        sessions[key] = await ort.InferenceSession.create(fullPath);
        logger.debug(`Modèle ONNX chargé : ${file}`);
      } catch (err) {
        logger.warn(`Impossible de charger le modèle ${file}`, { error: err.message });
      }
    } else {
      logger.debug(`Modèle ONNX non trouvé : ${fullPath}`);
    }
  }

  ready = true;
  const loaded = Object.keys(sessions).length;
  logger.info(`${loaded}/4 modèles ONNX chargés`);
  return sessions;
}

export function getSession(key) {
  return sessions[key] || null;
}

export function isReady() {
  return ready;
}

export function getStatus() {
  return {
    intent: !!sessions.intent,
    ner: !!sessions.ner,
    combat: !!sessions.combat,
    embed: !!sessions.embed,
  };
}

export default { loadModels, getSession, isReady, getStatus };
