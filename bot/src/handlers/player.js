import { getPlayer, getPlayerInventory, getPlayerQuests } from '../services/player.js';
import { render } from '../services/template.js';

export async function handleStatus(db, playerId) {
  const player = await getPlayer(db, playerId);
  if (!player) return render('error');

  return render('status', {
    playerName: player.avatar_name,
    hp: player.hp_current,
    hpMax: player.hp_max,
    mp: player.mp_current,
    mpMax: player.mp_max,
    zoneName: player.zone_name,
    level: player.level,
    race: player.race_name,
    yrds: player.yrd_balance,
  });
}

export async function handleInventory(db, playerId) {
  const [items, player] = await Promise.all([
    getPlayerInventory(db, playerId),
    getPlayer(db, playerId),
  ]);
  const playerName = player?.avatar_name || 'inconnu';

  if (items.length === 0) return render('inventory_empty', { playerName });

  const itemLines = items.map(i => {
    const line = `• **${i.name}** (${i.item_id}) ×${i.quantity}`;
    return i.item_type === 'WPN' || i.item_type === 'ARM'
      ? `${line} — ⚔️ ${i.tier ? `T${i.tier}` : ''} ${i.rarity}`
      : line;
  });

  return render('inventory', {
    playerName,
    items: itemLines.join('\n'),
  });
}

export async function handleQuests(db, playerId) {
  const quests = await getPlayerQuests(db, playerId);
  if (quests.length === 0) {
    return `📜 Tu n'as aucune quête active. Rends-toi chez un PNJ pour en obtenir.`;
  }

  return quests.map(q =>
    render('quest_progress', {
      questTitle: q.title,
      progress: q.current_step,
      total: q.total_steps,
      stepDescription: q.description?.slice(0, 100) || '',
    })
  ).join('\n━━━━━━━━━━━━━━━━\n');
}

export default { handleStatus, handleInventory, handleQuests };
