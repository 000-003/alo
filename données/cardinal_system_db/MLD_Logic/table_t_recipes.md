# Table : T_RECIPES

```sql
CREATE TABLE T_RECIPES (
    recipe_id       VARCHAR(30) PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    craft_type      VARCHAR(20) NOT NULL CHECK (craft_type IN ('forge','alchemy','sewing','cooking','enchanting')),
    skill_level     VARCHAR(20) NOT NULL DEFAULT 'beginner',
    ingredients     JSONB NOT NULL,
    result_item_id  VARCHAR(30) REFERENCES T_ITEMS_DICT(item_id),
    result_quantity INT DEFAULT 1,
    success_rate    FLOAT DEFAULT 0.8 CHECK (success_rate BETWEEN 0 AND 1),
    craft_time_sec  INT DEFAULT 10,
    yrd_cost        INT DEFAULT 0,
    unlock_cond     VARCHAR(200)
);

CREATE INDEX idx_recipe_type ON T_RECIPES(craft_type);
CREATE INDEX idx_recipe_result ON T_RECIPES(result_item_id);
```
