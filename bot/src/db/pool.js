import pg from 'pg';
import config from '../config.js';
import logger from '../utils/logger.js';

const pool = new pg.Pool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  max: config.db.poolSize,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
  logger.error('Erreur inattendue du pool PostgreSQL', { error: err.message });
});

pool.on('connect', () => {
  logger.debug('Nouvelle connexion PostgreSQL établie');
});

export async function query(text, params) {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;
  logger.debug('Requête SQL exécutée', { duration: `${duration}ms`, rows: result.rowCount });
  return result;
}

export async function getClient() {
  const client = await pool.connect();
  return client;
}

export async function healthCheck() {
  try {
    const result = await query('SELECT 1 AS ok');
    return result.rows[0].ok === 1;
  } catch {
    return false;
  }
}

export default pool;
