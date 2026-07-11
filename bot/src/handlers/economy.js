import { buyItem, sellItem } from '../engine/economy.js';
import { getPlayer } from '../services/player.js';
import { render } from '../services/template.js';
import logger from '../utils/logger.js';

export async function handleBuy(db, playerId, entities) {
  const player = await getPlayer(db, playerId);
  if (!player) return render('error');

  if (!entities.itemId) {
    return render('buy_fail_notfound', { itemName: entities.keyword || 'objet inconnu' });
  }
  const qty = entities.quantity || 1;

  const result = await buyItem(db, playerId, entities.itemId, qty);
  if (!result.success) {
    if (result.error === 'INSUFFICIENT_FUNDS') {
      return render('buy_fail_insufficient', { required: result.required, available: result.available });
    }
    if (result.error === 'ITEM_NOT_FOUND') {
      return render('buy_fail_notfound', { itemName: entities.itemId });
    }
    return render('error');
  }

  return render('buy_success', {
    quantity: qty,
    itemName: result.item.name,
    total: result.total,
    tax: result.tax,
    balance: result.newBalance,
  });
}

export async function handleSell(db, playerId, entities) {
  const player = await getPlayer(db, playerId);
  if (!player) return render('error');

  if (!entities.itemId) {
    return render('buy_fail_notfound', { itemName: entities.keyword || 'objet inconnu' });
  }
  const qty = entities.quantity || 1;

  const result = await sellItem(db, playerId, entities.itemId, qty);
  if (!result.success) {
    if (result.error === 'INSUFFICIENT_STOCK') {
      return render('sell_fail_insufficient', { itemName: entities.itemId, available: result.available });
    }
    return render('error');
  }

  return render('sell_success', { quantity: qty, itemName: result.item.name, total: result.total });
}

export async function handleCraft(db, playerId, entities) {
  return `🔨 L'artisanat n'est pas encore implémenté. Reviens dans une prochaine mise à jour.`;
}

export default { handleBuy, handleSell, handleCraft };
