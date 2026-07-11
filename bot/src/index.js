import express from 'express';
import config from './config.js';
import logger from './utils/logger.js';
import pool, { healthCheck as dbHealth } from './db/pool.js';
import { routeMessage } from './agents/router.js';
import * as movement from './engine/movement.js';
import { render } from './services/template.js';
import { processMessage } from './orchestrator/message-handler.js';
import { initWhatsApp, getClient as getWAClient } from './services/whatsapp.js';
import { loadModels, getStatus as getModelStatus } from './models/loader.js';

const app = express();
app.use(express.json());

let serverStartTime = Date.now();
let modelStatus = { intent: false, ner: false, combat: false, embed: false };
let waConnected = false;

async function initialize() {
  logger.info('Initialisation du Système Cardinal...', { env: config.env });

  try {
    await pool.query('SELECT 1');
    logger.info('Connexion PostgreSQL établie');
  } catch (err) {
    logger.error('Impossible de se connecter à PostgreSQL', { error: err.message });
    logger.warn('Le serveur démarre sans base de données — mode dégradé');
  }

  try {
    await movement.loadZoneGraph(pool);
  } catch (err) {
    logger.warn('Impossible de charger le graphe de zones', { error: err.message });
  }

  try {
    const waClient = await initWhatsApp();
    if (waClient) {
      waConnected = true;
      logger.info('WhatsApp bridge activé');
    }
  } catch (err) {
    logger.warn('WhatsApp non disponible — mode API uniquement', { error: err.message });
  }

  try {
    await loadModels();
    modelStatus = getModelStatus();
  } catch (err) {
    logger.warn('Impossible de charger les modèles ONNX', { error: err.message });
  }

  try {
    const fs = await import('fs');
    const path = await import('path');
    const modelDir = config.models.path;
    for (const [key, file] of [['intent', config.models.intent], ['ner', config.models.ner], ['combat', config.models.combat], ['embed', config.models.embed]]) {
      const fullPath = path.join(modelDir, file);
      if (fs.existsSync(fullPath)) {
        modelStatus[key] = true;
        logger.debug(`Modèle ONNX trouvé : ${file}`);
      }
    }
    logger.info('Statut des modèles ONNX', modelStatus);
  } catch (err) {
    logger.warn('Vérification des modèles ONNX impossible', { error: err.message });
  }

  serverStartTime = Date.now();
  logger.info('Système Cardinal initialisé', {
    uptime: `${Math.round((Date.now() - serverStartTime) / 1000)}s`,
    models: Object.values(modelStatus).filter(Boolean).length + '/4 chargés',
  });
}

app.get('/health', async (req, res) => {
  const dbOk = await dbHealth();
  const uptime = Math.floor((Date.now() - serverStartTime) / 1000);
  res.json({
    status: 'ok',
    uptime: `${uptime}s`,
    version: '0.1.0',
    database: dbOk ? 'connected' : 'disconnected',
    models: getModelStatus(),
    wa: { status: waConnected ? 'connected' : 'disconnected' },
    memory: process.memoryUsage(),
  });
});

app.get('/health/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT count(*)::int as tables FROM information_schema.tables WHERE table_schema = \'public\'');
    res.json({ status: 'ok', tables: result.rows[0].tables });
  } catch (err) {
    res.status(503).json({ status: 'error', message: err.message });
  }
});

app.get('/health/graph', async (req, res) => {
  const graph = movement.getGraph();
  if (!graph) {
    return res.status(503).json({ status: 'error', message: 'Graph non chargé' });
  }
  res.json({
    status: 'ok',
    zones: graph.size,
    links: Array.from(graph.values()).reduce((acc, n) => acc + n.length, 0) / 2,
  });
});

app.post('/api/message', async (req, res) => {
  const { text, playerId, groupId, whatsappPhone } = req.body || {};
  if (!text) {
    return res.status(400).json({ error: 'Le champ "text" est requis' });
  }

  let resolvedPlayerId = playerId;
  if (!resolvedPlayerId && whatsappPhone) {
    try {
      const pr = await pool.query('SELECT avatar_uuid FROM t_avatars WHERE whatsapp_phone = $1', [whatsappPhone]);
      if (pr.rows.length > 0) resolvedPlayerId = pr.rows[0].avatar_uuid;
    } catch {}
  }
  if (!resolvedPlayerId) {
    resolvedPlayerId = '00000000-0000-0000-0000-000000000001';
  }

  const result = await processMessage(pool, text, resolvedPlayerId, groupId);
  res.json({
    response: result.response,
    intent: result.routing.intent,
    confidence: result.routing.confidence,
  });
});

app.post('/api/move', async (req, res) => {
  const { from, to, canFly } = req.body || {};
  if (!from || !to) {
    return res.status(400).json({ error: 'Les champs "from" et "to" sont requis' });
  }
  const path = movement.findShortestPath(from, to, canFly !== false);
  if (!path) {
    return res.status(404).json({ error: 'Aucun chemin trouvé', from, to });
  }
  res.json(path);
});

app.get('/api/zones/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT zone_id, zone_name, zone_type, territory_race, is_safe_zone, min_level, max_level, flight_allowed, description FROM t_zones WHERE zone_id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Zone inconnue', zoneId: req.params.id });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT item_id, name, item_type, rarity, tier, buy_price, is_consumable, max_stack, description FROM t_items_dict WHERE item_id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item inconnu', itemId: req.params.id });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/npcs/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT npc_id, display_name, race, role_type, zone_id, level, hp, mp, shop_ref, quest_ref FROM t_npc WHERE npc_id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'PNJ inconnu', npcId: req.params.id });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/shops/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT s.shop_id, s.shop_type, s.access_rule, s.is_open, n.display_name as owner_name '
      + 'FROM t_shops s LEFT JOIN t_npc n ON s.owner_npc_id = n.npc_id WHERE s.shop_id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Boutique inconnue', shopId: req.params.id });
    }
    const shop = result.rows[0];
    const items = await pool.query(
      'SELECT si.item_id, i.name, si.price, si.stock, i.rarity, i.tier, i.description '
      + 'FROM t_shop_items si JOIN t_items_dict i ON si.item_id = i.item_id WHERE si.shop_id = $1 ORDER BY si.price',
      [req.params.id]
    );
    res.json({ ...shop, items: items.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/neighbors/:zoneId', (req, res) => {
  const neighbors = movement.getNeighbors(req.params.zoneId);
  if (!neighbors) {
    return res.status(404).json({ error: 'Zone inconnue', zoneId: req.params.zoneId });
  }
  res.json({ zoneId: req.params.zoneId, neighbors });
});

app.get('/api/zones/:id/neighbors', (req, res) => {
  const neighbors = movement.getNeighbors(req.params.id);
  if (!neighbors) {
    return res.status(404).json({ error: 'Zone inconnue', zoneId: req.params.id });
  }
  res.json({ zoneId: req.params.id, neighbors });
});

app.get('/api/search', async (req, res) => {
  const { q, type } = req.query;
  if (!q || q.length < 2) {
    return res.status(400).json({ error: 'Requête trop courte (min 2 caractères)' });
  }
  try {
    const like = `%${q}%`;
    if (type === 'item' || !type) {
      const items = await pool.query(
        'SELECT item_id, name, item_type, rarity, tier, buy_price FROM t_items_dict WHERE name ILIKE $1 OR item_id ILIKE $1 LIMIT 10',
        [like]
      );
      return res.json({ items: items.rows });
    }
    if (type === 'npc') {
      const npcs = await pool.query(
        'SELECT npc_id, display_name, race, role_type, zone_id FROM t_npc WHERE display_name ILIKE $1 OR npc_id ILIKE $1 LIMIT 10',
        [like]
      );
      return res.json({ npcs: npcs.rows });
    }
    if (type === 'zone') {
      const zones = await pool.query(
        'SELECT zone_id, zone_name, zone_type FROM t_zones WHERE zone_name ILIKE $1 OR zone_id ILIKE $1 LIMIT 10',
        [like]
      );
      return res.json({ zones: zones.rows });
    }
    res.status(400).json({ error: 'Type de recherche invalide' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/stats', async (req, res) => {
  try {
    const tables = await pool.query(
      "SELECT tablename::text as table_name FROM pg_catalog.pg_tables WHERE schemaname = 'public' ORDER BY tablename"
    );
    const counts = {};
    for (const row of tables.rows) {
      try {
        const c = await pool.query(`SELECT count(*)::int as cnt FROM "${row.table_name}"`);
        counts[row.table_name] = c.rows[0].cnt;
      } catch {
        counts[row.table_name] = -1;
      }
    }
    res.json(counts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route inconnue', path: req.path });
});

app.use((err, req, res, next) => {
  logger.error('Erreur non gérée', { error: err.message, stack: err.stack });
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

initialize().then(() => {
  app.listen(config.port, () => {
    logger.info(`Serveur Cardinal démarré sur le port ${config.port}`);
    logger.info(`Health check: http://localhost:${config.port}/health`);
    logger.info(`API Stats: http://localhost:${config.port}/api/stats`);
  });
}).catch((err) => {
  logger.error('Échec de l\'initialisation', { error: err.message });
  process.exit(1);
});

process.on('SIGTERM', async () => {
  logger.info('SIGTERM reçu, arrêt gracieux...');
  await pool.end();
  process.exit(0);
});

process.on('SIGINT', async () => {
  logger.info('SIGINT reçu, arrêt gracieux...');
  await pool.end();
  process.exit(0);
});
