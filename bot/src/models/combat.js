import { Tensor } from 'onnxruntime-node';
import { getSession } from './loader.js';
import logger from '../utils/logger.js';

const FEATURE_NAMES = [
  'atk', 'defense', 'level', 'hp',
  'monster_atk', 'monster_def', 'monster_level',
  'distance', 'is_magic', 'accuracy',
];

export function buildFeatures(player, monster, opts = {}) {
  return [
    player.atk || 50,
    player.defense || 30,
    player.level || 1,
    player.hp_current || 100,
    monster.atk || 30,
    monster.defense || 20,
    monster.level || 1,
    opts.distance || 5,
    opts.isMagic ? 1 : 0,
    opts.accuracy || 0.9,
  ];
}

export async function predictDamage(features) {
  const session = getSession('combat');
  if (!session) {
    const atk = features[0] || 50;
    const defense = features[1] || 30;
    const monsterDef = features[5] || 20;
    const level = features[2] || 1;
    const monsterLevel = features[6] || 1;
    return fallbackDamage(atk, defense, level, monsterDef, monsterLevel);
  }

  try {
    const inputName = session.inputNames[0];
    const tensor = new Tensor('float32', new Float32Array(features), [1, features.length]);
    const results = await session.run({ [inputName]: tensor });
    const output = results[session.outputNames[0]];
    return output.data[0];
  } catch (err) {
    logger.warn('ONNX combat failed, using fallback', { error: err.message });
    const atk = features[0] || 50;
    const defense = features[1] || 30;
    const monsterDef = features[5] || 20;
    const level = features[2] || 1;
    const monsterLevel = features[6] || 1;
    return fallbackDamage(atk, defense, level, monsterDef, monsterLevel);
  }
}

function fallbackDamage(atk, defense, level, monsterDef, monsterLevel) {
  const base = (atk * atk) / (atk + monsterDef);
  const levelRatio = 1 + (level - monsterLevel) * 0.05;
  return Math.round(base * Math.max(0.5, levelRatio));
}

export default { buildFeatures, predictDamage };
