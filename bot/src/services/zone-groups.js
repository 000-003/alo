let zoneToTerritory = null;  // Map<zone_id, territory_id>
let territoryToGroup = null; // Map<territory_id, { groupId, groupName }>

const TERRITORY_ZONES = {
  sylphe:     ['ZONE_SYL_CAP_001','ZONE_SYL_HUNT_001','ZONE_SYL_HUNT_002','ZONE_SYL_DUN_001','ZONE_ROUTE_SYL_ALN'],
  salamander: ['ZONE_SAL_CAP_001','ZONE_SAL_HUNT_001','ZONE_SAL_HUNT_002','ZONE_SAL_DUN_001','ZONE_ROUTE_SAL_ALN','ZONE_SAL_TWN_001'],
  undine:     ['ZONE_UND_CAP_001','ZONE_UND_HUNT_001','ZONE_UND_HUNT_002','ZONE_UND_DUN_001','ZONE_ROUTE_UND_ALN'],
  cait:       ['ZONE_CAI_CAP_001','ZONE_CAI_HUNT_001','ZONE_CAI_HUNT_002','ZONE_CAI_DUN_001','ZONE_ROUTE_CAI_ALN'],
  gnome:      ['ZONE_GNO_CAP_001','ZONE_GNO_HUNT_001','ZONE_GNO_HUNT_002','ZONE_GNO_DUN_001','ZONE_ROUTE_GNO_ALN'],
  imp:        ['ZONE_IMP_CAP_001','ZONE_IMP_HUNT_001','ZONE_IMP_HUNT_002','ZONE_IMP_DUN_001','ZONE_ROUTE_IMP_ALN'],
  leprechaun: ['ZONE_LEP_CAP_001','ZONE_LEP_HUNT_001','ZONE_LEP_HUNT_002','ZONE_LEP_DUN_001','ZONE_ROUTE_LEP_ALN'],
  puca:       ['ZONE_PUC_CAP_001','ZONE_PUC_HUNT_001','ZONE_PUC_HUNT_002','ZONE_PUC_DUN_001','ZONE_ROUTE_PUC_ALN'],
  spriggan:   ['ZONE_SPR_CAP_001','ZONE_SPR_HUNT_001','ZONE_SPR_HUNT_002','ZONE_SPR_DUN_001','ZONE_ROUTE_SPR_ALN'],
  alne:       ['ZONE_NEU_CAP_001'],
  aincrad:    ['ZONE_AIN_HUB_001'],
  jotunheimr: ['ZONE_JOT_FLD_001','ZONE_JOT_RAID_001'],
  yggdrasil:  ['ZONE_YGG_DUN_001','ZONE_YGG_TOP_001'],
};

const PERMANENT_GROUPS = [
  { groupId: 'WA_HUB_ANNOUNCES',  groupName: '📢 ALO — Annonces' },
  { groupId: 'WA_HUB_REGISTER',   groupName: '📋 ALO — Enregistrement' },
  { groupId: 'WA_HUB_GENERAL',    groupName: '💬 ALO — Général' },
  { groupId: 'WA_HUB_LFG',        groupName: '🤝 ALO — LFG' },
  { groupId: 'WA_RACE_SYLPH',     groupName: '🏛️ Peuple Sylphe' },
  { groupId: 'WA_RACE_SALAMANDER',groupName: '🏛️ Peuple Salamander' },
  { groupId: 'WA_RACE_UNDINE',    groupName: '🏛️ Peuple Undine' },
  { groupId: 'WA_RACE_CAIT',      groupName: '🏛️ Peuple Cait Sith' },
  { groupId: 'WA_RACE_GNOME',     groupName: '🏛️ Peuple Gnome' },
  { groupId: 'WA_RACE_IMP',       groupName: '🏛️ Peuple Imp' },
  { groupId: 'WA_RACE_LEPRECHAUN',groupName: '🏛️ Peuple Leprechaun' },
  { groupId: 'WA_RACE_PUCA',      groupName: '🏛️ Peuple Puca' },
  { groupId: 'WA_RACE_SPRIGGAN',  groupName: '🏛️ Peuple Spriggan' },
];

export async function loadWaGroups(db) {
  const result = await db.query(
    "SELECT zone_id, wa_group_id, group_name FROM t_wa_groups WHERE is_active = TRUE AND group_type = 'location'"
  );
  zoneToTerritory = new Map();
  territoryToGroup = new Map();

  for (const [territoryId, zones] of Object.entries(TERRITORY_ZONES)) {
    for (const zoneId of zones) {
      zoneToTerritory.set(zoneId, territoryId);
    }
    // Find WA group for the first zone in each territory
    const firstZone = zones[0];
    const row = result.rows.find(r => r.zone_id === firstZone);
    if (row) {
      territoryToGroup.set(territoryId, { groupId: row.wa_group_id, groupName: row.group_name });
    }
  }
  return { zoneToTerritory, territoryToGroup };
}

export function getTerritoryForZone(zoneId) {
  return zoneToTerritory?.get(zoneId) || null;
}

export function getGroupForTerritory(territoryId) {
  return territoryToGroup?.get(territoryId) || null;
}

export function getGroupForZone(zoneId) {
  const terr = getTerritoryForZone(zoneId);
  if (!terr) return null;
  return getGroupForTerritory(terr);
}

export async function syncPlayerGroups(db, playerUuid, currentZoneId) {
  // Determine the allowed territory group for the player's current zone
  const territory = getTerritoryForZone(currentZoneId);
  const allowedTerritoryGroups = territory ? [territory] : [];

  // Remove from territory groups that don't match, add the matching one
  for (const [terrId, group] of territoryToGroup) {
    if (allowedTerritoryGroups.includes(terrId)) {
      // Ensure membership (idempotent)
      await db.query(
        'INSERT INTO t_wa_presence (avatar_uuid, wa_group_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
        [playerUuid, group.groupId]
      );
    } else {
      // Remove from non-matching territory groups
      await db.query(
        'DELETE FROM t_wa_presence WHERE avatar_uuid = $1 AND wa_group_id = $2',
        [playerUuid, group.groupId]
      );
    }
  }

  // Ensure permanent groups (idempotent)
  for (const g of PERMANENT_GROUPS) {
    await db.query(
      'INSERT INTO t_wa_presence (avatar_uuid, wa_group_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [playerUuid, g.groupId]
    );
  }
}

export default { loadWaGroups, getTerritoryForZone, getGroupForTerritory, getGroupForZone, syncPlayerGroups,
                 TERRITORY_ZONES, PERMANENT_GROUPS };
