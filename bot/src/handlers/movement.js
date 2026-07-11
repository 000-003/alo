import { findShortestPath, zoneExists, getGraph } from '../engine/movement.js';
import { getPlayer } from '../services/player.js';
import { render } from '../services/template.js';
import logger from '../utils/logger.js';

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

  const cost = path.totalCost || 0;

  try {
    const upd = await db.query(
      'UPDATE t_avatars SET current_zone_id = $1, mp_current = GREATEST(0, mp_current - $2) WHERE avatar_uuid = $3 AND mp_current >= $4',
      [targetZone, cost, playerUuid, cost]
    );

    if (upd.rowCount === 0) {
      return `❌ MP insuffisants pour ce déplacement (coût : ${cost} MP, disponible : ${player.mp_current}).`;
    }

    logger.info('Déplacement effectué', { playerUuid, fromZone, targetZone, cost });
  } catch (err) {
    logger.error('Erreur lors du déplacement', { error: err.message, playerUuid });
    return `❌ Erreur lors du déplacement.`;
  }

  return render('move', {
    destination: targetZone,
    distance: path.path.length - 1,
    time: path.totalTime,
    cost,
    travelTime: path.totalTime,
  });
}

export async function getNeighborsForZone(zoneId) {
  const graph = getGraph();
  if (!graph) return [];
  return graph.get(zoneId) || [];
}

export default { handleMove, getNeighborsForZone };
