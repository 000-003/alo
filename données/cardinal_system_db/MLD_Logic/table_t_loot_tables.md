# Table : T_LOOT_TABLES

```sql
CREATE TABLE T_LOOT_TABLES (
    loot_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    monster_id      VARCHAR(30) NOT NULL REFERENCES T_MONSTERS_DICT(monster_id),
    item_id         VARCHAR(30) NOT NULL REFERENCES T_ITEMS_DICT(item_id),
    drop_rate       FLOAT NOT NULL CHECK (drop_rate BETWEEN 0 AND 100),
    min_quantity    INT DEFAULT 1,
    max_quantity    INT DEFAULT 1,
    is_last_attack  BOOLEAN DEFAULT FALSE,
    level_req       INT DEFAULT 0
);

CREATE INDEX idx_loot_monster ON T_LOOT_TABLES(monster_id);
```
