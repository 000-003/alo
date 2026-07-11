import { findShortestPath, zoneExists, getGraph } from '../engine/movement.js';
import { getPlayer } from '../services/player.js';
import { render } from '../services/template.js';

export async function handleMove(db, playerUuid, entities) {
  const player = await getPlayer(db, playerUuid);
  if (!player) return render('error');

  const fromZone = player.current_zone_id;
  const targetZone = (entities.zoneId || entities.target || '').toUpperCase().replace(/`/g, '');

  if (!targetZone) {
    return `📍 Tu es à **${player.zone_name}** (${fromZone}). Où veux-tu aller ?`;
  }

  if (!zoneExists(targetZone)) {
    const graph = getGraph();
    if (graph) {
      const matches = [];
      for (const zid of graph.keys()) {
        if (zid.includes(targetZone)) matches.push(zid);
      }
      if (matches.length > 0) {
        return `❌ Zone "${targetZone}" inconnue. Zones similaires : ${matches.slice(0, 5).join(', ')}`;
      }
    }
    return `❌ Zone "${targetZone}" inconnue.`;
  }

  if (targetZone === fromZone) {
    return `📍 Tu es déjà à **${targetZone}**.`;
  }

  const path = findShortestPath(fromZone, targetZone, true);
  if (!path) {
    return `❌ Aucun chemin trouvé entre ${fromZone} et ${targetZone}.`;
  }

  return render('move', {
    destination: targetZone,
    distance: path.path.length - 1,
    time: path.totalTime,
    cost: path.totalCost,
    travelTime: path.totalTime,
  });
}

export async function getNeighborsForZone(zoneId) {
  const graph = getGraph();
  if (!graph) return [];
  return graph.get(zoneId) || [];
}

export default { handleMove, getNeighborsForZone };
