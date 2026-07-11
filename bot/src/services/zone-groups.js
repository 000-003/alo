let waGroupsCache = null;

export async function loadWaGroups(db) {
  const result = await db.query(
    'SELECT zone_id, group_id, group_name, is_official FROM t_wa_groups WHERE is_active = TRUE'
  );
  waGroupsCache = new Map();
  for (const row of result.rows) {
    waGroupsCache.set(row.zone_id, { groupId: row.group_id, groupName: row.group_name });
  }
  return waGroupsCache;
}

export function getGroupForZone(zoneId) {
  return waGroupsCache?.get(zoneId) || null;
}

export default { loadWaGroups, getGroupForZone };
