import dotenv from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '..', '.env') });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'cardinal_alo',
    user: process.env.DB_USER || 'user1808',
    password: process.env.DB_PASSWORD || '0000',
    poolSize: parseInt(process.env.DB_POOL_SIZE || '10', 10),
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  api: {
    provider: process.env.LLM_PROVIDER || 'groq',
    groqKey: process.env.GROQ_API_KEY || null,
    mistralKey: process.env.MISTRAL_API_KEY || null,
    openrouterKey: process.env.OPENROUTER_API_KEY || null,
    hfKey: process.env.HF_API_KEY || null,
    geminiKey: process.env.GEMINI_API_KEY || null,
    useApi: process.env.USE_API === 'true',
  },
  wa: {
    sessionPath: process.env.WA_SESSION_PATH || './wa_session',
  },
  models: {
    path: resolve(__dirname, '..', 'models'),
    intent: process.env.MODEL_INTENT || 'intent.onnx',
    ner: process.env.MODEL_NER || 'ner.onnx',
    combat: process.env.MODEL_COMBAT || 'combat.onnx',
    embed: process.env.MODEL_EMBED || 'embed.onnx',
  },
  game: {
    maxPlayers: parseInt(process.env.MAX_PLAYERS || '300', 10),
    tickRateMs: parseInt(process.env.TICK_RATE_MS || '1000', 10),
    startingYrds: parseInt(process.env.STARTING_YRDS || '500', 10),
    startingZone: process.env.STARTING_ZONE || 'ZONE_NEU_CAP_001',
  },
  get dbUrl() {
    return `postgresql://${this.db.user}:${this.db.password}@${this.db.host}:${this.db.port}/${this.db.database}`;
  },
};

export default config;
