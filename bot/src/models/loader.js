import fs from 'fs';
import path from 'path';
import config from '../config.js';
import logger from '../utils/logger.js';

const MODEL_DIR = config.models.path;
let status = { intent: false };
let ready = false;

export async function loadModels() {
  ready = true;
  logger.info('Modèles ONNX : désactivés (moteur déterministe uniquement)');
  return {};
}

export function getSession(key) {
  return null;
}

export function isReady() {
  return ready;
}

export function getStatus() {
  return status;
}

export default { loadModels, getSession, isReady, getStatus };
