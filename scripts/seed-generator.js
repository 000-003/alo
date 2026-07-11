#!/usr/bin/env node
/**
 * seed-generator.js — Convertit les ~3 289 fichiers markdown en INSERT SQL
 *
 * Usage :
 *   node seed-generator.js > seed_data.sql
 *   node seed-generator.js --append  (génère un .sql qui s'ajoute à seed.sql)
 *
 * Traite : items, monstres, PNJ, boutiques, compétences, quêtes
 */

const fs = require('fs');
const path = require('path');

const BASE = '/home/user1808/Bureau/alo/données';
const APPEND_MODE = process.argv.includes('--append');

// ---------------------------------------------------------------------------
// Utilitaires
// ---------------------------------------------------------------------------
function walk(dir) {
  const files = [];
  try {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) files.push(...walk(full));
      else if (entry.name.endsWith('.md')) files.push(full);
    }
  } catch { /* ignore */ }
  return files;
}

function esc(val) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return String(val);
  const s = String(val);
  if (s === 'TRUE' || s === 'FALSE' || s === 'true' || s === 'false') return s.toUpperCase();
  if (s === 't' || s === 'f') return s.toUpperCase() === 'T' ? 'TRUE' : 'FALSE';
  return `'${s.replace(/'/g, "''")}'`;
}

function batchInsert(table, columns, rows, chunk = 50, onConflict, onConflictAction = 'DO NOTHING') {
  const colList = columns.join(', ');
  const conflict = onConflict ? ` ON CONFLICT ${onConflict} ${onConflictAction}` : '';
  let sql = '';
  for (let i = 0; i < rows.length; i += chunk) {
    const slice = rows.slice(i, i + chunk);
    sql += `INSERT INTO ${table} (${colList}) VALUES\n`;
    sql += slice.map(r => `(${r.map(esc).join(', ')})`).join(',\n');
    sql += conflict + ';\n';
  }
  return sql;
}

// ---------------------------------------------------------------------------
// 1. ITEMS → T_ITEMS_DICT
// ---------------------------------------------------------------------------
function parseItems() {
  const rows = [];
  const seen = new Set();
  const files = walk(path.join(BASE, 'items_equipements'));
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue; // skip index files
    const content = fs.readFileSync(f, 'utf-8');
    const itemId = (content.match(/[\*]?Item_ID[\*]?\s*:\s*(\S+)/i) ||
                    content.match(/item_id[:\s]+(\S+)/i) ||
                    content.match(/([A-Z]+_[A-Z]+_\d{3})/) ||
                    [])[1];
    if (!itemId || seen.has(itemId)) continue;
    seen.add(itemId);

    const name = content.match(/^#\s+(.+)/m)?.[1]?.replace(/`.+`$/, '').trim() || itemId;
    const type = (itemId.startsWith('ARM_') ? 'ARM' :
                  itemId.startsWith('WPN_') ? 'WPN' :
                  itemId.startsWith('CSM_') ? 'CSM' :
                  itemId.startsWith('MAT_') ? 'MAT' :
                  itemId.startsWith('BAG_') ? 'BAG' :
                  itemId.startsWith('HRN_') ? 'HRN' :
                  itemId.startsWith('BELT_') ? 'BELT' :
                  itemId.startsWith('OFT_') ? 'OFT' :
                  itemId.startsWith('ACC_') ? 'MSC' : 'MSC');
    const rarity = (content.match(/rar[ée]t[ée]\s*:\s*(\w+)/i) ||
                    content.match(/Raret[ée]\s*[:\-]\s*(\w+)/i) ||
                    [])[1] || 'common';
    const tier = parseInt(content.match(/Tier\s*[:]?\s*(\d)/i)?.[1] ||
                          content.match(/T(\d)/)?.[1] || 1);
    const buyPrice = parseInt(content.match(/prix\s*[:]?\s*(\d+)/i)?.[1] ||
                              content.match(/buy_price\s*[:]?\s*(\d+)/i)?.[1] || 0);
    const atk = parseInt(content.match(/ATK\s*[:]?\s*(\d+)/i)?.[1] ||
                         content.match(/base_atk\s*[:]?\s*(\d+)/i)?.[1] || 0);
    const def = parseInt(content.match(/DEF\s*[:]?\s*(\d+)/i)?.[1] ||
                         content.match(/base_def\s*[:]?\s*(\d+)/i)?.[1] || 0);
    const isConsumable = type === 'CSM' ? 'TRUE' : 'FALSE';
    const isCraftable = type === 'MAT' ? 'TRUE' : 'FALSE';
    const maxStack = type === 'CSM' || type === 'MAT' ? 99 : 1;
    const resaleValue = Math.floor(buyPrice * 0.25);
    const desc = (content.match(/description\s*[:]\s*(.+)/i)?.[1] || '').slice(0, 200).replace(/'/g, "''");

    rows.push([itemId, name, type, null, rarity, tier, atk, def, 0.5, 0, 0, 0,
               buyPrice, resaleValue, maxStack, isConsumable, isCraftable, 0,
               desc, '', null]);
  }
  return rows;
}

// ---------------------------------------------------------------------------
// 2. MONSTRES → T_MONSTERS_DICT
// ---------------------------------------------------------------------------
function parseMonsters() {
  const rows = [];
  const seen = new Set();
  const files = walk(path.join(BASE, 'personnages_bestiaire', 'monstres'));
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue;
    const content = fs.readFileSync(f, 'utf-8');
    const mobId = (content.match(/MOB_ID\s*:\s*(\S+)/i) ||
                   content.match(/`(MOB_\w+)`/) ||
                   content.match(/(MOB_\w{3}_\d{3})/) ||
                   [])[1];
    if (!mobId || seen.has(mobId)) continue;
    seen.add(mobId);

    const name = (content.match(/^#\s+(.+?)──?/)?.[1]?.trim() ||
                  content.match(/^#\s+(.+)/m)?.[1]?.replace(/`.*$/, '').trim() || mobId)
                  .replace(/^[─—]+\s*/, '').replace(/\s*[─—]+\s*$/, '').replace(/\s+$/, '').trim()
                  .replace(/'/g, "''");
    const level = parseInt(content.match(/Niveau\s*[:]?\s*(\d+)/i)?.[1] ||
                           content.match(/niveau\s*:\s*(\d+)/i)?.[1] || 1);
    const family = content.match(/Famille\s*:\s*(.+)/i)?.[1]?.trim() || null;
    const hp = parseInt(content.match(/PV\s*[|]\s*([\dD]+)/)?.[1] || '100');
    const atk = parseInt(content.match(/ATQ\s*[|]\s*([\dD]+)/)?.[1] || '10');
    const def = parseInt(content.match(/DEF\s*[|]\s*([\dD]+)/)?.[1] || '10');
    const agi = parseInt(content.match(/Vitesse\s*[|]\s*(\d+)/)?.[1] || '10');
    const expYield = parseInt(content.match(/XP\s*[|]\s*([\dD]+)/)?.[1] || '50');
    const bounty = Math.floor(expYield * 0.3);
    const element = content.match(/[Ee]lément\s*:\s*(.+)/i)?.[1]?.trim() || null;
    const weakness = content.match(/[Ff]aiblesse\s*:\s*(.+)/i)?.[1]?.trim() || null;
    const resistance = content.match(/[Rr]ésistance\s*:\s*(.+)/i)?.[1]?.trim() || null;
    const isBoss = content.includes('BOSS') || content.includes('boss') ? 'TRUE' : 'FALSE';
    const isFlying = content.includes('volant') || content.includes('ailé') || content.includes('aile') ? 'TRUE' : 'FALSE';
    const lore = (content.match(/Comportement\/Loot\/Bot\s*(.+?)(?:\n\n|\n#|$)/s)?.[1] || '').trim().slice(0, 500);

    rows.push([mobId, name, level, family, isNaN(hp) ? 100 : hp, 0,
               isNaN(atk) ? 10 : atk, isNaN(def) ? 10 : def, isNaN(agi) ? 10 : agi,
               element, weakness, resistance, null,
               isNaN(expYield) ? 50 : expYield, bounty,
               isBoss, isFlying, 10, 'passive', lore]);
  }
  return rows;
}

// ---------------------------------------------------------------------------
// 2b. Spawns → T_SPAWN_TABLES
// ---------------------------------------------------------------------------
const DIR_TO_ZONE = {
  aincrad:    'ZONE_AIN_HUB_001',
  neutre:     'ZONE_SYL_HUNT_001',
  air:        'ZONE_SYL_HUNT_001',
  sylphe:     'ZONE_SYL_HUNT_001',
  sylph:      'ZONE_SYL_HUNT_001',
  salamander: 'ZONE_SAL_HUNT_001',
  salamandre: 'ZONE_SAL_HUNT_001',
  undine:     'ZONE_UND_HUNT_001',
  cait:       'ZONE_CAI_HUNT_001',
  caitsith:   'ZONE_CAI_HUNT_001',
  imp:        'ZONE_IMP_HUNT_001',
  gnome:      'ZONE_GNO_HUNT_001',
  puca:       'ZONE_PUC_HUNT_001',
  leprechaun: 'ZONE_LEP_HUNT_001',
  lepre:      'ZONE_LEP_HUNT_001',
  spriggan:   'ZONE_SPR_HUNT_001',
  jotun:      'ZONE_JOT_FLD_001',
  jotunheimr: 'ZONE_JOT_FLD_001',
  golden:     'ZONE_YGG_DUN_001',
};

const DIR_TO_BOSS_ZONE = {
  aincrad:    'ZONE_AIN_HUB_001',
  neutre:     'ZONE_SYL_HUNT_001',
  air:        'ZONE_SYL_DUN_001',
  sylphe:     'ZONE_SYL_DUN_001',
  sylph:      'ZONE_SYL_DUN_001',
  salamander: 'ZONE_SAL_DUN_001',
  salamandre: 'ZONE_SAL_DUN_001',
  undine:     'ZONE_UND_DUN_001',
  cait:       'ZONE_CAI_DUN_001',
  caitsith:   'ZONE_CAI_DUN_001',
  imp:        'ZONE_IMP_DUN_001',
  gnome:      'ZONE_GNO_DUN_001',
  puca:       'ZONE_PUC_DUN_001',
  leprechaun: 'ZONE_LEP_DUN_001',
  lepre:      'ZONE_LEP_DUN_001',
  spriggan:   'ZONE_SPR_DUN_001',
  jotun:      'ZONE_JOT_RAID_001',
  jotunheimr: 'ZONE_JOT_RAID_001',
  golden:     'ZONE_YGG_TOP_001',
};

const KNOWN_ZONES = new Set([
  'ZONE_CAI_HUNT_001','ZONE_CAI_HUNT_002','ZONE_CAI_DUN_001',
  'ZONE_GNO_HUNT_001','ZONE_GNO_HUNT_002','ZONE_GNO_DUN_001',
  'ZONE_IMP_HUNT_001','ZONE_IMP_HUNT_002','ZONE_IMP_DUN_001',
  'ZONE_LEP_HUNT_001','ZONE_LEP_HUNT_002','ZONE_LEP_DUN_001',
  'ZONE_PUC_HUNT_001','ZONE_PUC_HUNT_002','ZONE_PUC_DUN_001',
  'ZONE_SAL_HUNT_001','ZONE_SAL_HUNT_002','ZONE_SAL_DUN_001',
  'ZONE_SPR_HUNT_001','ZONE_SPR_HUNT_002','ZONE_SPR_DUN_001',
  'ZONE_SYL_HUNT_001','ZONE_SYL_HUNT_002','ZONE_SYL_DUN_001',
  'ZONE_UND_HUNT_001','ZONE_UND_HUNT_002','ZONE_UND_DUN_001',
  'ZONE_AIN_HUB_001',
  'ZONE_JOT_FLD_001','ZONE_JOT_RAID_001',
  'ZONE_YGG_DUN_001','ZONE_YGG_TOP_001',
  'ZONE_ROUTE_CAI_ALN','ZONE_ROUTE_GNO_ALN','ZONE_ROUTE_IMP_ALN',
  'ZONE_ROUTE_LEP_ALN','ZONE_ROUTE_PUC_ALN','ZONE_ROUTE_SAL_ALN',
  'ZONE_ROUTE_SPR_ALN','ZONE_ROUTE_SYL_ALN','ZONE_ROUTE_UND_ALN',
]);

function parseSpawns() {
  const rows = [];
  const seen = new Set();
  const baseDir = path.join(BASE, 'personnages_bestiaire', 'monstres');
  const files = walk(baseDir);
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue;
    const content = fs.readFileSync(f, 'utf-8');
    const mobId = (content.match(/MOB_ID\s*:\s*(\S+)/i) ||
                   content.match(/`(MOB_\w+)`/) ||
                   content.match(/(MOB_\w{3}_\d{3})/) ||
                   [])[1];
    if (!mobId || seen.has(mobId)) continue;
    seen.add(mobId);
    const isBoss = content.includes('BOSS') || content.includes('boss') || content.includes('raid');
    const dirName = path.basename(path.dirname(f)).toLowerCase().replace(/[^a-z]/g, '');
    const zone = isBoss
      ? (DIR_TO_BOSS_ZONE[dirName] || DIR_TO_ZONE[dirName] || 'ZONE_SYL_HUNT_001')
      : (DIR_TO_ZONE[dirName] || 'ZONE_SYL_HUNT_001');
    if (!KNOWN_ZONES.has(zone)) {
      console.error(`SKIP spawn ${mobId}: zone ${zone} inconnue`);
      continue;
    }
    rows.push([zone, mobId, isBoss ? 5 : 30, 1, 100, isBoss ? 1 : 5, 'always', 'any', isBoss ? 'TRUE' : 'FALSE']);
  }
  return rows;
}

// ---------------------------------------------------------------------------
// 3. PNJ → T_NPC + T_NPC_KNOWLEDGE
// ---------------------------------------------------------------------------
function parseNPCs() {
  const npcRows = [];
  const knowledgeRows = [];
  const seen = new Set();
  const files = walk(path.join(BASE, 'personnages_bestiaire', 'pnj'));
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue;
    const content = fs.readFileSync(f, 'utf-8');
    const npcId = (content.match(/NPC_ID\s*[|]\s*`(\S+)`/i) ||
                   content.match(/`(NPC_\w+_\d+)`/) ||
                   content.match(/(NPC_\w{3}_\d{2})/) ||
                   [])[1];
    if (!npcId || seen.has(npcId)) continue;
    seen.add(npcId);

    function mapRace(r) {
      if (!r) return 'RACE_SYLPH';
      const rl = r.toLowerCase();
      if (rl.includes('system') || rl.includes('syst')) return 'RACE_SYLPH';
      if (rl.includes('sylphe') || rl.includes('sylph')) return 'RACE_SYLPH';
      if (rl.includes('salamander') || rl.includes('salamandre')) return 'RACE_SALAMANDER';
      if (rl.includes('undine')) return 'RACE_UNDINE';
      if (rl.includes('cait') || rl.includes('caitsith') || rl.includes('chat')) return 'RACE_CAIT_SITH';
      if (rl.includes('imp') && !rl.includes('gnome')) return 'RACE_IMP';
      if (rl.includes('gnome')) return 'RACE_GNOME';
      if (rl.includes('puca')) return 'RACE_PUCA';
      if (rl.includes('spriggan')) return 'RACE_SPRIGGAN';
      if (rl.includes('leprechaun') || rl.includes('lepre')) return 'RACE_LEPRECHAUN';
      return 'RACE_SYLPH';
    }
    function mapRole(r) {
      if (!r) return 'SERVICE';
      const rl = r.toLowerCase();
      if (rl.includes('merchant') || rl.includes('marchand') || rl.includes('commerçant') || rl.includes('boutique') || rl.includes('forge') || rl.includes('armurier') || rl.includes('joaillier') || rl.includes('tailleur') || rl.includes('apothicaire') || rl.includes('alchimiste') || rl.includes('aubergiste') || rl.includes('shop')) return 'MERCHANT';
      if (rl.includes('master') || rl.includes('maître') || rl.includes('instructor') || rl.includes('entraîneur') || rl.includes('professeur') || rl.includes('sensei') || rl.includes('tuteur') || rl.includes('coach') || rl.includes('formateur')) return 'SKILL_MASTER';
      if (rl.includes('quest') || rl.includes('quête') || rl.includes('mission') || rl.includes('contrat') || rl.includes('bounty') || rl.includes('chasseur')) return 'QUEST_GIVER';
      if (rl.includes('guard') || rl.includes('garde') || rl.includes('soldat') || rl.includes('milice') || rl.includes('vigile') || rl.includes('sentinel') || rl.includes('watch') || rl.includes('patrouille') || rl.includes('chevalier') || rl.includes('paladin')) return 'GUARD';
      if (rl.includes('lord') || rl.includes('seigneur') || rl.includes('maire') || rl.includes('comte') || rl.includes('duc') || rl.includes('roi') || rl.includes('reine') || rl.includes('baron') || rl.includes('noble') || rl.includes('gouverneur') || rl.includes('dirigeant')) return 'LORD';
      if (rl.includes('service') || rl.includes('domestique') || rl.includes('intendant') || rl.includes('majordome') || rl.includes('bibliothécaire') || rl.includes('scribe') || rl.includes('artisan') || rl.includes('paysan') || rl.includes('fermier') || rl.includes('pêcheur') || rl.includes('cuisinier') || rl.includes('serveur')) return 'SERVICE';
      if (rl.includes('black') || rl.includes('noir') || rl.includes('ombre') || rl.includes('contrebande') || rl.includes('assassin') || rl.includes('voleur') || rl.includes('thief') || rl.includes('bandit') || rl.includes('marché noir') || rl.includes('malfaiteur')) return 'BLACK_MARKET';
      if (rl.includes('pnj') || rl.includes('system') || rl.includes('admin') || rl.includes('développeur')) return 'SERVICE';
      return 'SERVICE';
    }

    const displayName = ((content.match(/Nom affiché\s*[|]\s*(.+)/i) ||
                          content.match(/Nom\s*[|]\s*(.+)/i) ||
                          content.match(/^#\s+.+?`([^`]+)`/m)?.[1]?.trim() ||
                          [])[1]?.trim() || npcId).slice(0, 100);
    const raceRaw = content.match(/Race\s*[|]\s*(.+)/i)?.[1]?.trim() || 'Sylphe';
    const race = mapRace(raceRaw);
    const roleRaw = (content.match(/Rôle\s*\(.*\)\s*[|]\s*`(\w+)`/i) ||
                     content.match(/role_type\s*[|]\s*`(\w+)`/i) ||
                     content.match(/Rôle\s*[|]\s*(.+?)(?:\n|$)/i)?.[1]?.trim() ||
                     'SERVICE').replace(/`/g, '');
    const roleType = mapRole(roleRaw);
    const zoneId = (content.match(/Zone.*?[|]\s*`(\S+)`/i) ||
                    content.match(/zone_id\s*[|]\s*`(\S+)`/i) ||
                    content.match(/`(ZONE_\w+_\d+)`/) ||
                    [])[1] || null;
    const levelMatch = content.match(/Niveau.*?(\d+).*?(\d+).*?(\d+)/i);
    const level = parseInt(levelMatch?.[1] || 1);
    const hp = parseInt(levelMatch?.[2] || 100);
    const mp = parseInt(levelMatch?.[3] || 50);
    const qiBudget = parseInt(content.match(/qi_budget\s*[|]\s*(\d+)/i)?.[1] || 10);
    const isEssential = content.includes('is_essential') && content.includes('VRAI') ? 'TRUE' : 'FALSE';
    const isCanon = content.includes('is_canon') && content.includes('VRAI') ? 'TRUE' : 'FALSE';
    const shopRef = content.match(/shop_ref\s*[|]\s*`(\S+)`/i)?.[1] || null;
    const questRef = content.match(/quest_ref\s*[|]\s*`(\S+)`/i)?.[1] || null;

    npcRows.push([npcId, displayName, race,
                  roleType, zoneId, null, level, hp, mp, null,
                  shopRef, questRef, null, null, qiBudget, isCanon, isEssential, 'TRUE']);

    // QI slots
    const qiTable = content.match(/\|.*QI_ID.*Niv.*Sujet.*Contenu.*\|(?:\s*\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|[^|]+\|)+/);
    if (qiTable) {
      const lines = content.split('\n');
      let inQISection = false;
      for (const line of lines) {
        if (line.includes('QI_ID') && line.includes('Niv') && line.includes('Sujet')) {
          inQISection = true; continue;
        }
        if (inQISection && line.startsWith('|') && line.split('|').length >= 6) {
          const parts = line.split('|').map(p => p.trim());
          if (parts.length >= 7 && /^QI_\w+/.test(parts[1])) {
            const kLevel = (parts[2] || '').trim().toUpperCase();
            if (kLevel === 'K3' || kLevel === 'KX' || kLevel.startsWith('K') && !['K0','K1','K2'].includes(kLevel)) {
              console.warn(`  [SKIP] ${parts[1]} — niveau K interdit : ${kLevel}`);
              continue;
            }
            knowledgeRows.push([
              parts[1], npcId, parts[2], parts[3] || '',
              parts[4]?.replace(/\n/g, ' ') || '',
              parts[5]?.includes('JAMAIS') ? null : (parts[5] || null),
              parts[5]?.includes('déflection') || parts[5]?.includes('deflection') || parts[6]?.includes('*') ? parts.slice(5).join(' | ').replace(/^.*déflection|deflection\s*[:\-–]\s*/i, '').replace(/`/g, '').trim() : null
            ]);
          }
        }
      }
    }
  }
  return { npcRows, knowledgeRows };
}

// ---------------------------------------------------------------------------
// 4. BOUTIQUES → T_SHOPS + T_SHOP_ITEMS
// ---------------------------------------------------------------------------
function parseShops() {
  const shopRows = [];
  const itemRows = [];
  const seenShops = new Set();
  const files = walk(path.join(BASE, 'game_design', 'boutiques'));
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue;
    const content = fs.readFileSync(f, 'utf-8');
    const shopId = (content.match(/SHOP_ID\s*[|]\s*`(\S+)`/i) ||
                    content.match(/`(SHOP_\w+_\d+)`/) ||
                    content.match(/(SHOP_\w{3}_\d{2})/) ||
                    [])[1];
    if (!shopId || seenShops.has(shopId)) continue;
    seenShops.add(shopId);

    const ownerNpc = (content.match(/Propriétaire.*?`(NPC_\w+_\d+)`/i) ||
                      content.match(/owner_npc_id\s*[|]\s*`(\S+)`/i) ||
                      [])?.[1] || null;
    const zoneId = (content.match(/Zone.*?[|]\s*`(\S+)`/i) ||
                    content.match(/zone_id\s*[|]\s*`(\S+)`/i) ||
                    content.match(/`(ZONE_\w+_\d+)`/) ||
                    [])?.[1] || 'ZONE_AIN_HUB_001';
    const shopType = (content.match(/Type\s*[|]\s*(\w+)/i)?.[1] ||
                      content.match(/shop_type\s*[|]\s*`(\w+)`/i)?.[1] ||
                      'BOUTIQUE').toUpperCase();
    const accessRule = content.match(/Accès\s*[|]\s*(.+)/i)?.[1]?.trim() || 'LIBRE';
    const buyback = content.match(/Rachète\s*[:]\s*(.+)/i)?.[1]?.trim() ||
                    content.match(/buyback_categories\s*[|]\s*(.+)/i)?.[1]?.trim() || null;

    shopRows.push([shopId, ownerNpc, zoneId, shopType, accessRule, buyback, 'TRUE']);

    // Shop items — parcours des lignes du fichier
    const lines = content.split('\n');
    let inShopTable = false;
    for (const line of lines) {
      if (line.includes('Item_ID') && line.includes('Prix')) { inShopTable = true; continue; }
      if (!inShopTable) continue;
      if (line.startsWith('|---')) continue;
      if (!line.startsWith('|')) { inShopTable = false; continue; }
      const parts = line.split('|').map(p => p.trim()).filter(p => p);
      if (parts.length >= 5 && parts[0].startsWith('`')) {
        const itemId = parts[0].replace(/`/g, '');
        const price = parseInt((parts[3] || '').replace(/[\sYrds]/g, '')) || 0;
        const origin = parts[4]?.includes('IMPORT') ? 'IMPORT' : 'LOCAL';
        const originCity = parts[4]?.replace(/^(IMPORT|LOCAL)\s*/i, '')?.trim() || null;
        const stockRaw = (parts[5] || '').trim();
        const stock = stockRaw === '∞' || stockRaw === '-1' ? -1 : parseInt(stockRaw) || -1;
        const restock = parseInt(parts[6] || 0) || null;
        const condition = (parts[7] || '').trim() || null;
        if (itemId && price > 0 && !itemId.startsWith('Item_ID')) {
          itemRows.push([shopId, itemId, price, origin, originCity, stock, restock, condition]);
        }
      }
    }
  }
  return { shopRows, itemRows };
}

// ---------------------------------------------------------------------------
// 5. COMPÉTENCES → T_SKILLS_DICT
// ---------------------------------------------------------------------------
function parseSkills() {
  const rows = [];
  const seen = new Set();
  const files = walk(path.join(BASE, 'competences_magie'));
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue;
    const content = fs.readFileSync(f, 'utf-8');
    const skillId = (content.match(/Skill_ID\s*:\s*`?(\S+)`?/i) ||
                     content.match(/skill_id\s*:\s*(\S+)/i) ||
                     content.match(/`?((?:MAG|OSS|PAS)_\w+_\d{3})`?/) ||
                     [])[1];
    if (!skillId || seen.has(skillId)) continue;
    seen.add(skillId);

    const name = content.match(/^#\s+(.+)/m)?.[1]?.trim() || skillId;
    const skillType = skillId.startsWith('MAG') ? 'MAG' : skillId.startsWith('OSS') ? 'OSS' : 'PAS';
    const domain = skillType === 'PAS' ?
                   (content.includes('CBT') ? 'CBT' : content.includes('CRA') ? 'CRA' : content.includes('EXP') ? 'EXP' : 'SOC') :
                   (content.includes('CBT') || content.includes('Combat') ? 'CBT' : 'SOC');
    const tier = parseInt(content.match(/Tier\s*:\s*T?(\d)/i)?.[1] || 1);
    const mpCost = parseInt(content.match(/Coût MP\s*[|]\s*(\d+)/i)?.[1] || 0);
    const castFrames = parseFloat(content.match(/Temps d'Incantation\s*[|]\s*([\d.]+)s/i)?.[1] || 0) * 20;
    const cooldown = parseInt(content.match(/Cooldown\s*[|]\s*(\d+)/i)?.[1] || 0);
    const hitCount = parseInt(content.match(/hit_count\s*[:]\s*(\d+)/i)?.[1] || 1);
    const baseDmg = parseInt(content.match(/base_damage\s*[:]\s*(\d+)/i)?.[1] || 0);
    const desc = (content.match(/Effet\s*(.+?)(?:\n\n|\n#|$)/s)?.[1] || '').trim().slice(0, 300);
    const unlock = (content.match(/Acquisition.*?\n(?:.*\n)*?.*?`NPC_\w+_\d+`/i)?.[0] ||
                    content.match(/Enseignant\s*[:]\s*(.+)/i)?.[1]?.trim() || null)?.slice(0, 200);
    const maxMastery = 3;

    rows.push([skillId, name, skillType, domain, tier, hitCount, mpCost, Math.round(castFrames),
               cooldown, baseDmg, 0, null, desc, unlock, maxMastery, 'TRUE']);
  }
  return rows;
}

// ---------------------------------------------------------------------------
// 6. QUÊTES → T_QUESTS_DICT (partial)
// ---------------------------------------------------------------------------
function parseQuests() {
  const rows = [];
  const seen = new Set();
  const files = walk(path.join(BASE, 'game_design', 'quetes'));
  for (const f of files) {
    if (path.basename(f).startsWith('_')) continue;
    const content = fs.readFileSync(f, 'utf-8');
    const questId = (content.match(/`?([A-Z]+_[A-Z]+_[A-Za-z]+_\d+)`?/) ||
                     content.match(/(QST_\w+_\d+)/) ||
                     [])[1];
    if (!questId || questId.startsWith('_index') || seen.has(questId)) continue;
    seen.add(questId);

    const title = content.match(/^#\s+(.+)/m)?.[1]?.trim() || questId;
    const qtype = questId.includes('DAILY') || questId.includes('daily') ? 'daily' :
                  questId.includes('LEG') || questId.includes('legendary') ? 'legendary' :
                  questId.includes('T5') || questId.includes('_t5') ? 't5' : 'side';
    const minLevel = parseInt(content.match(/Niveau requis?\s*[:]\s*(\d+)/i)?.[1] || 1);
    const rewardXp = parseInt(content.match(/EXP\s*[:]\s*(\d+)/i)?.[1] || 0);
    const rewardYrds = parseInt(content.match(/Yrds?\s*[:]\s*(\d+)/i)?.[1] || 0);

    rows.push([questId, title, qtype, minLevel, null, null, null, '{}', 1,
               rewardXp, rewardYrds, '[]', null, '{}',
               qtype === 'daily' ? 'TRUE' : 'FALSE', 'FALSE',
               qtype === 'daily' ? 'TRUE' : 'FALSE',
               qtype === 'daily' ? 24 : null, '', '']);
  }
  return rows;
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
try {
  if (APPEND_MODE) {
    console.log('-- seed_data.sql — généré par seed-generator.js (append mode)');
  }

  // Items
  console.log('-- ============================================================');
  console.log('-- T_ITEMS_DICT');
  console.log('-- ============================================================');
  const items = parseItems();
  console.log(batchInsert('T_ITEMS_DICT', [
    'item_id','name','item_type','subtype','rarity','tier','base_atk','base_def','weight',
    'str_req','agi_req','int_req','buy_price','resale_value','max_stack','is_consumable',
    'is_craftable','durability_max','description','lore_text','icon'
  ], items, 50, '(item_id)'));
  console.log(`-- Items : ${items.length} lignes`);

  // Monsters
  console.log('-- ============================================================');
  console.log('-- T_MONSTERS_DICT');
  console.log('-- ============================================================');
  const monsters = parseMonsters();
  console.log(batchInsert('T_MONSTERS_DICT', [
    'monster_id','name','level','family','base_hp','base_mp','base_atk','base_def','base_agi',
    'element','weakness','resistance','immune','exp_yield','bounty_yrds',
    'is_boss','is_flying','aggression_range','spawn_behavior','lore_text'
  ], monsters, 50, '(monster_id)', 'DO UPDATE SET name = EXCLUDED.name, level = EXCLUDED.level, family = EXCLUDED.family, base_hp = EXCLUDED.base_hp, base_atk = EXCLUDED.base_atk, base_def = EXCLUDED.base_def, base_agi = EXCLUDED.base_agi, exp_yield = EXCLUDED.exp_yield, is_boss = EXCLUDED.is_boss, lore_text = EXCLUDED.lore_text'));
  console.log(`-- Monstres : ${monsters.length} lignes`);

  // Spawn tables
  console.log('-- ============================================================');
  console.log('-- T_SPAWN_TABLES');
  console.log('-- ============================================================');
  const spawns = parseSpawns();
  if (spawns.length > 0) {
    console.log(batchInsert('T_SPAWN_TABLES', [
      'zone_id','monster_id','spawn_rate','min_level','max_level','max_concurrent','time_condition','weather_cond','is_boss'
    ], spawns, 50));
  }
  console.log(`-- Spawns : ${spawns.length} lignes`);

  // NPCs
  const npcData = parseNPCs();
  console.log('-- ============================================================');
  console.log('-- T_NPC');
  console.log('-- ============================================================');
  console.log(batchInsert('T_NPC', [
    'npc_id','display_name','race','role_type','zone_id','location_label','level','hp','mp',
    'stats_json','shop_ref','quest_ref','dialog_ref','secret_note','qi_budget',
    'is_canon','is_essential','is_alive'
  ], npcData.npcRows, 50, '(npc_id)'));
  console.log(`-- PNJ : ${npcData.npcRows.length} lignes`);

  if (npcData.knowledgeRows.length > 0) {
    console.log('-- ============================================================');
    console.log('-- T_NPC_KNOWLEDGE');
    console.log('-- ============================================================');
    console.log(batchInsert('T_NPC_KNOWLEDGE', [
      'qi_id','npc_id','k_level','topic_tags','content','unlock_condition','deflection_line'
    ], npcData.knowledgeRows, 50));
    console.log(`-- QI : ${npcData.knowledgeRows.length} lignes`);
  }

  // Shops
  const shopData = parseShops();
  console.log('-- ============================================================');
  console.log('-- T_SHOPS');
  console.log('-- ============================================================');
  console.log(batchInsert('T_SHOPS', [
    'shop_id','owner_npc_id','zone_id','shop_type','access_rule','buyback_categories','is_open'
  ], shopData.shopRows, 50, '(shop_id)'));
  console.log(`-- Boutiques : ${shopData.shopRows.length} lignes`);

  console.log('-- ============================================================');
  console.log('-- T_SHOP_ITEMS');
  console.log('-- ============================================================');
  console.log(batchInsert('T_SHOP_ITEMS', [
    'shop_id','item_id','price','origin','origin_city','stock','restock_days','condition'
  ], shopData.itemRows, 50));
  console.log(`-- Articles boutique : ${shopData.itemRows.length} lignes`);

  // Skills
  console.log('-- ============================================================');
  console.log('-- T_SKILLS_DICT');
  console.log('-- ============================================================');
  const skills = parseSkills();
  console.log(batchInsert('T_SKILLS_DICT', [
    'skill_id','name','skill_type','domain','tier','hit_count','mp_cost','cast_frames',
    'cooldown_sec','base_damage','base_healing','stat_scaling','description',
    'unlock_requirement','max_mastery','is_equippable'
  ], skills, 50, '(skill_id)'));
  console.log(`-- Compétences : ${skills.length} lignes`);

  // Quests
  console.log('-- ============================================================');
  console.log('-- T_QUESTS_DICT');
  console.log('-- ============================================================');
  const quests = parseQuests();
  if (quests.length > 0) {
    console.log(batchInsert('T_QUESTS_DICT', [
      'quest_id','title','quest_type','min_level','recommended_level','zone_id','giver_npc_id',
      'objective_json','total_steps','reward_xp','reward_yrds','reward_items','reward_title_id',
      'prerequisites','is_repeatable','is_hidden','has_deadline','deadline_hours',
      'description','lore_text'
    ], quests, 50, '(quest_id)'));
  }
  console.log(`-- Quêtes : ${quests.length} lignes`);

  console.log('-- ============================================================');
  console.log('-- FIN seed_data.sql');
  console.log('-- ============================================================');

} catch (err) {
  console.error('ERREUR:', err.message);
  process.exit(1);
}
