import pool from '../src/db/pool.js';
import { processMessage } from '../src/orchestrator/message-handler.js';
import { executeCommand, parseCommands } from '../src/services/sys-pipeline.js';
import { getCommand } from '../src/services/sys-registry.js';
import * as combat from '../src/handlers/combat.js';
import * as movement from '../src/handlers/movement.js';
import * as economy from '../src/handlers/economy.js';
import * as dialogue from '../src/handlers/dialogue.js';
import * as playerService from '../src/handlers/player.js';
import { loadGazetteer } from '../src/services/gazetteer.js';

const TEST_PLAYER = '00000000-0000-0000-0000-000000000001';
let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`  ✅ ${name}`);
  } catch (err) {
    failed++;
    console.log(`  ❌ ${name}: ${err.message}`);
  }
}

async function run() {
  console.log('\n🔬 Tests d\'intégration — Système Cardinal\n');

  await test('Gazetteer chargé', async () => {
    await loadGazetteer(pool);
  });

  await test('Handler STATUS (player)', async () => {
    const result = await playerService.handleStatus(pool, TEST_PLAYER);
    if (!result || result.includes('❌')) throw new Error('Réponse invalide: ' + result);
  });

  await test('Handler INVENTORY (player)', async () => {
    const result = await playerService.handleInventory(pool, TEST_PLAYER);
    if (!result) throw new Error('Pas de réponse');
  });

  await test('Handler QUESTS (player)', async () => {
    const result = await playerService.handleQuests(pool, TEST_PLAYER);
    if (!result) throw new Error('Pas de réponse');
  });

  await test('Handler BUY (economy)', async () => {
    const result = await economy.handleBuy(pool, TEST_PLAYER, { itemId: 'ITEM_POT_001', quantity: '1' });
    if (!result) throw new Error('Pas de réponse');
  });

  await test('Handler SELL (economy)', async () => {
    const result = await economy.handleSell(pool, TEST_PLAYER, { itemId: 'ITEM_POT_001', quantity: '1' });
    if (!result) throw new Error('Pas de réponse');
  });

  await test('Handler TALK (dialogue) — sans PNJ', async () => {
    const result = await dialogue.handleTalk(pool, TEST_PLAYER, {});
    if (!result || !result.includes('qui')) throw new Error('Devrait demander un nom: ' + result);
  });

  await test('Pipeline SYS — parseCommands', () => {
    const cmds = parseCommands('Bonjour SYS_GRANT_ITEM(player_id=abc, item_id=def, quantity=1)');
    if (cmds.length !== 1) throw new Error('Parse échoué: ' + JSON.stringify(cmds));
    if (cmds[0].command !== 'SYS_GRANT_ITEM') throw new Error('Mauvaise commande');
  });

  await test('Pipeline SYS — parseCommandes multiples', () => {
    const cmds = parseCommands('SYS_SET_ENV_HAZARD(zone_id=ZONE_A, weather=rain) et SYS_SHOP_RESTOCK(shop_id=SHOP_001)');
    if (cmds.length !== 2) throw new Error(`Attendu 2, trouvé ${cmds.length}`);
  });

  await test('Pipeline SYS — commande inconnue', async () => {
    const result = await executeCommand(pool, { command: 'SYS_FAKE', params: {} }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer');
  });

  await test('Pipeline SYS — paramètre manquant', async () => {
    const result = await executeCommand(pool, { command: 'SYS_GRANT_ITEM', params: {} }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer: ' + JSON.stringify(result));
  });

  await test('ProcessMessage — texte vide', async () => {
    const result = await processMessage(pool, '');
    if (result.routing.intent !== 'ERROR') throw new Error('Devrait être ERROR');
  });

  await test('ProcessMessage — aide', async () => {
    const result = await processMessage(pool, '!aide', TEST_PLAYER);
    if (result.routing.intent !== 'HELP') throw new Error('Pas HELP: ' + result.routing.intent);
  });

  await test('ProcessMessage — inventaire', async () => {
    const result = await processMessage(pool, 'inventaire', TEST_PLAYER);
    if (result.routing.intent !== 'INVENTORY') throw new Error('Pas INVENTORY: ' + result.routing.intent);
  });

  await test('ProcessMessage — statut', async () => {
    const result = await processMessage(pool, 'statut', TEST_PLAYER);
    if (result.routing.intent !== 'STATUS') throw new Error('Pas STATUS: ' + result.routing.intent);
  });

  await test('ProcessMessage — mouvement sans zone', async () => {
    const result = await processMessage(pool, 'je vais', TEST_PLAYER);
    if (!result.response || result.response.includes('❌')) throw new Error('Réponse erreur: ' + result.response);
  });

  await test('ProcessMessage — attaque sans cible', async () => {
    const result = await processMessage(pool, 'attaque', TEST_PLAYER);
    if (!result.response || result.response.includes('❌')) throw new Error('Réponse erreur: ' + result.response);
  });

  await test('ProcessMessage — quêtes', async () => {
    const result = await processMessage(pool, 'quêtes', TEST_PLAYER);
    if (result.routing.intent !== 'QUEST') throw new Error('Pas QUEST: ' + result.routing.intent);
  });

  await test('ProcessMessage — confidence basse', async () => {
    const result = await processMessage(pool, 'xyzzy flurp garble', TEST_PLAYER);
    if (result.routing.confidence >= 0.7) throw new Error('Confiance trop haute pour du charabia: ' + result.routing.confidence);
  });

  await test('Registre SYS — liste commandes', () => {
    const cmds = getCommand('SYS_GRANT_ITEM');
    if (!cmds) throw new Error('SYS_GRANT_ITEM manquante');
    if (typeof cmds.execute !== 'function') throw new Error('execute pas une fonction');
    if (typeof cmds.d71 !== 'function') throw new Error('d71 pas une fonction');
    if (typeof cmds.authorize !== 'function') throw new Error('authorize pas une fonction');
  });

  await test('Registre SYS — toutes les commandes', () => {
    for (const name of ['SYS_GRANT_ITEM', 'SYS_ADVANCE_QUEST', 'SYS_NPC_KNOWLEDGE_UNLOCK', 'SYS_SET_ENV_HAZARD', 'SYS_SHOP_RESTOCK']) {
      const cmd = getCommand(name);
      if (!cmd) throw new Error(`${name} manquante`);
      if (!cmd.schema) throw new Error(`${name} sans schema`);
    }
  });

  await test('SYS_GRANT_ITEM — D71 joueur inexistant', async () => {
    const result = await executeCommand(pool, {
      command: 'SYS_GRANT_ITEM',
      params: { player_id: '00000000-0000-0000-0000-000000000000', item_id: 'ITEM_POT_001', quantity: '1' }
    }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer D71');
  });

  await test('SYS_GRANT_ITEM — D71 item inexistant', async () => {
    const result = await executeCommand(pool, {
      command: 'SYS_GRANT_ITEM',
      params: { player_id: TEST_PLAYER, item_id: 'ITEM_FAKE_999', quantity: '1' }
    }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer D71');
  });

  await test('SYS_NPC_KNOWLEDGE_UNLOCK — D71 qi_id inexistant', async () => {
    const result = await executeCommand(pool, {
      command: 'SYS_NPC_KNOWLEDGE_UNLOCK',
      params: { player_id: TEST_PLAYER, qi_id: 'QI_FAKE_999' }
    }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer D71');
  });

  await test('SYS_SET_ENV_HAZARD — D71 zone inexistante', async () => {
    const result = await executeCommand(pool, {
      command: 'SYS_SET_ENV_HAZARD',
      params: { zone_id: 'ZONE_FAKE_999', weather: 'rain', temperature: '20' }
    }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer D71');
  });

  await test('SYS_SET_ENV_HAZARD — weather invalide', async () => {
    const result = await executeCommand(pool, {
      command: 'SYS_SET_ENV_HAZARD',
      params: { zone_id: 'ZONE_NEU_CAP_001', weather: 'invalid', temperature: '20' }
    }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer weather invalide');
  });

  await test('SYS_SHOP_RESTOCK — D71 boutique inexistante', async () => {
    const result = await executeCommand(pool, {
      command: 'SYS_SHOP_RESTOCK',
      params: { shop_id: 'SHOP_FAKE_999' }
    }, 'system');
    if (result.ok !== false) throw new Error('Devrait échouer D71');
  });

  await test('Spawn — t_spawn_tables a des lignes', async () => {
    const result = await pool.query('SELECT count(*)::int AS cnt FROM t_spawn_tables');
    if (result.rows[0].cnt === 0) throw new Error('t_spawn_tables est vide — relancer seed-generator');
    console.log(`      ${result.rows[0].cnt} entrées spawn`);
  });

  await test('Combat — monstre trouvable dans le spawn', async () => {
    const result = await pool.query(
      `SELECT m.monster_id, m.name FROM t_monsters_dict m
       JOIN t_spawn_tables s ON s.monster_id = m.monster_id
       WHERE s.zone_id = 'ZONE_NEU_HUNT_001' LIMIT 1`
    );
    if (!result.rows.length) throw new Error('Aucun monstre dans ZONE_NEU_HUNT_001');
    console.log(`      Ex: ${result.rows[0].name} (${result.rows[0].monster_id})`);
  });

  await test('GM — isGm rejette téléphone inconnu', async () => {
    const { default: msgHandler } = await import('../src/orchestrator/message-handler.js');
    const result = await processMessage(pool, '!sys_help', '00000000-0000-0000-0000-000000000001', null, 'invalid_phone');
    if (!result.response.includes('refusé')) throw new Error('Devrait refuser: ' + result.response);
  });

  console.log(`\n📊 Résultat : ${passed} passé(s), ${failed} échec(s)\n`);
  await pool.end();
  process.exit(failed > 0 ? 1 : 0);
}

run().catch(err => {
  console.error('Erreur fatale:', err.message);
  process.exit(1);
});
