import logger from '../utils/logger.js';

export function calculateBuyPrice(item, quantity = 1) {
  const unitPrice = item.buy_price || 0;
  const taxRate = 0.05;
  const total = unitPrice * quantity;
  const tax = Math.round(total * taxRate);
  return { unitPrice, total: total + tax, tax, quantity };
}

export function calculateSellPrice(item, quantity = 1) {
  const resaleValue = item.resale_value || Math.floor((item.buy_price || 0) * 0.25);
  return { unitPrice: resaleValue, total: resaleValue * quantity, quantity };
}

export function canAfford(player, totalCost) {
  return (player.yrd_balance || 0) >= totalCost;
}

export async function buyItem(db, playerUuid, itemId, quantity = 1) {
  const itemResult = await db.query(
    'SELECT item_id, name, buy_price, max_stack, is_consumable FROM t_items_dict WHERE item_id = $1',
    [itemId]
  );
  if (itemResult.rows.length === 0) {
    return { success: false, error: 'ITEM_NOT_FOUND' };
  }
  const item = itemResult.rows[0];
  const { total, tax } = calculateBuyPrice(item, quantity);

  const playerResult = await db.query(
    'SELECT avatar_uuid, yrd_balance FROM t_avatars WHERE avatar_uuid = $1',
    [playerUuid]
  );
  if (playerResult.rows.length === 0) {
    return { success: false, error: 'PLAYER_NOT_FOUND' };
  }
  const player = playerResult.rows[0];

  if (!canAfford(player, total)) {
    return { success: false, error: 'INSUFFICIENT_FUNDS', required: total, available: player.yrd_balance };
  }

  const client = await db.connect();
  try {
    await client.query('BEGIN');

    await client.query(
      'UPDATE t_avatars SET yrd_balance = yrd_balance - $1, total_yrd_spent = COALESCE(total_yrd_spent, 0) + $2 WHERE avatar_uuid = $3',
      [total, total, playerUuid]
    );

    const existing = await client.query(
      'SELECT quantity FROM t_inventory WHERE avatar_uuid = $1 AND item_id = $2',
      [playerUuid, itemId]
    );

    if (existing.rows.length > 0) {
      await client.query(
        'UPDATE t_inventory SET quantity = quantity + $1 WHERE avatar_uuid = $2 AND item_id = $3',
        [quantity, playerUuid, itemId]
      );
    } else {
      await client.query(
        'INSERT INTO t_inventory (instance_uuid, avatar_uuid, item_id, quantity) VALUES (gen_random_uuid(), $1, $2, $3)',
        [playerUuid, itemId, quantity]
      );
    }

    await client.query('COMMIT');
    logger.info('Achat effectué', { playerUuid, itemId, quantity, total });
    return { success: true, item, quantity, total, tax, newBalance: player.yrd_balance - total };
  } catch (err) {
    await client.query('ROLLBACK');
    logger.error('Erreur lors de l\'achat', { error: err.message, playerUuid, itemId });
    return { success: false, error: 'TRANSACTION_FAILED', message: err.message };
  } finally {
    client.release();
  }
}

export async function sellItem(db, playerUuid, itemId, quantity = 1) {
  const itemResult = await db.query(
    'SELECT item_id, name, resale_value, buy_price FROM t_items_dict WHERE item_id = $1',
    [itemId]
  );
  if (itemResult.rows.length === 0) {
    return { success: false, error: 'ITEM_NOT_FOUND' };
  }
  const item = itemResult.rows[0];
  const resaleValue = item.resale_value || Math.floor((item.buy_price || 0) * 0.25);
  const total = resaleValue * quantity;

  const invResult = await db.query(
    'SELECT quantity FROM t_inventory WHERE avatar_uuid = $1 AND item_id = $2',
    [playerUuid, itemId]
  );
  if (invResult.rows.length === 0 || invResult.rows[0].quantity < quantity) {
    return { success: false, error: 'INSUFFICIENT_STOCK', available: invResult.rows[0]?.quantity || 0 };
  }

  const client = await db.connect();
  try {
    await client.query('BEGIN');
    await client.query(
      'UPDATE t_avatars SET yrd_balance = yrd_balance + $1, total_yrd_earned = COALESCE(total_yrd_earned, 0) + $2 WHERE avatar_uuid = $3',
      [total, total, playerUuid]
    );
    const newQty = invResult.rows[0].quantity - quantity;
    if (newQty <= 0) {
      await client.query(
        'DELETE FROM t_inventory WHERE avatar_uuid = $1 AND item_id = $2',
        [playerUuid, itemId]
      );
    } else {
      await client.query(
        'UPDATE t_inventory SET quantity = $1 WHERE avatar_uuid = $2 AND item_id = $3',
        [newQty, playerUuid, itemId]
      );
    }
    await client.query('COMMIT');
    logger.info('Revente effectuée', { playerUuid, itemId, quantity, total });
    return { success: true, item, quantity, total, newBalance: total };
  } catch (err) {
    await client.query('ROLLBACK');
    logger.error('Erreur lors de la revente', { error: err.message, playerUuid, itemId });
    return { success: false, error: 'TRANSACTION_FAILED', message: err.message };
  } finally {
    client.release();
  }
}

export default {
  calculateBuyPrice,
  calculateSellPrice,
  canAfford,
  buyItem,
  sellItem,
};
