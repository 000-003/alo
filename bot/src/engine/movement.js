import logger from '../utils/logger.js';

let zoneGraph = null;
let zoneIndex = new Map();

export async function loadZoneGraph(db) {
  const result = await db.query(
    'SELECT zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight FROM t_zone_links'
  );
  const graph = new Map();
  for (const row of result.rows) {
    if (!graph.has(row.zone_a)) graph.set(row.zone_a, []);
    if (!graph.has(row.zone_b)) graph.set(row.zone_b, []);
    graph.get(row.zone_a).push({
      zone: row.zone_b,
      type: row.link_type,
      mpCost: row.mp_cost,
      travelTime: row.travel_time_min,
      requiresFlight: row.requires_flight,
    });
    graph.get(row.zone_b).push({
      zone: row.zone_a,
      type: row.link_type,
      mpCost: row.mp_cost,
      travelTime: row.travel_time_min,
      requiresFlight: row.requires_flight,
    });
  }
  zoneGraph = graph;
  zoneIndex.clear();
  for (const [id] of graph) {
    zoneIndex.set(id, true);
  }
  logger.info('Graphe de zones chargé', { zones: graph.size, links: result.rows.length });
  return graph;
}

export function getGraph() {
  return zoneGraph;
}

export function zoneExists(zoneId) {
  return zoneIndex.has(zoneId);
}

export function findShortestPath(from, to, canFly = true) {
  if (!zoneGraph) {
    logger.error('Graphe de zones non chargé');
    return null;
  }
  if (from === to) return { path: [from], totalCost: 0, totalTime: 0 };

  const distances = new Map();
  const previous = new Map();
  const visited = new Set();
  const pq = [[0, from, 0]];
  distances.set(from, 0);

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [currentCost, current, currentTime] = pq.shift();
    if (current === to) {
      const path = [];
      let node = to;
      while (node) {
        path.unshift(node);
        node = previous.get(node);
      }
      return { path, totalCost: currentCost, totalTime: currentTime };
    }
    if (visited.has(current)) continue;
    visited.add(current);
    const neighbors = zoneGraph.get(current) || [];
    for (const edge of neighbors) {
      if (visited.has(edge.zone)) continue;
      if (edge.requiresFlight && !canFly) continue;
      const newCost = currentCost + edge.mpCost;
      const newTime = currentTime + edge.travelTime;
      if (newCost < (distances.get(edge.zone) ?? Infinity)) {
        distances.set(edge.zone, newCost);
        previous.set(edge.zone, current);
        pq.push([newCost, edge.zone, newTime]);
      }
    }
  }
  return null;
}

export function getZoneInfo(db, zoneId) {
  return db.query(
    'SELECT zone_id, zone_name, zone_type, territory_race, is_safe_zone, min_level, max_level, flight_allowed FROM t_zones WHERE zone_id = $1',
    [zoneId]
  );
}

export function getNeighbors(zoneId) {
  return zoneGraph?.get(zoneId) || [];
}

export default {
  loadZoneGraph,
  getGraph,
  zoneExists,
  findShortestPath,
  getZoneInfo,
  getNeighbors,
};
