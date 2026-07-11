# Table MLD : T_SHOPS + T_SHOP_ITEMS

> Registre des boutiques et de leurs inventaires. Source de vérité des fiches `game_design/boutiques/`.

## 1. Structure SQL

```sql
CREATE TABLE T_SHOPS (
    shop_id             VARCHAR(50) PRIMARY KEY,
    owner_npc_id        VARCHAR(50) NOT NULL UNIQUE REFERENCES T_NPC(npc_id),
    zone_id             VARCHAR(50) NOT NULL REFERENCES T_ZONES(zone_id),
    shop_type           VARCHAR(15) NOT NULL CHECK (shop_type IN ('BOUTIQUE','ETAL','MARCHE_NOIR','TAVERNE')),
    access_rule         VARCHAR(50) DEFAULT 'LIBRE',
    buyback_categories  VARCHAR(100),
    is_open             BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX idx_shops_zone ON T_SHOPS(zone_id);
CREATE INDEX idx_shops_owner ON T_SHOPS(owner_npc_id);

CREATE TABLE T_SHOP_ITEMS (
    shop_id             VARCHAR(50) NOT NULL REFERENCES T_SHOPS(shop_id) ON DELETE CASCADE,
    item_id             VARCHAR(30) NOT NULL REFERENCES T_ITEMS_DICT(item_id),
    price               INT NOT NULL CHECK (price > 0),
    origin              VARCHAR(10) NOT NULL CHECK (origin IN ('LOCAL','IMPORT')),
    origin_city         VARCHAR(50),
    stock               INT NOT NULL DEFAULT -1,
    restock_days        INT,
    condition           VARCHAR(100),
    PRIMARY KEY (shop_id, item_id)
);

CREATE INDEX idx_shop_items_item ON T_SHOP_ITEMS(item_id);
```

## 2. Indexation et Optimisation

- **Index** `zone_id` : `!shop_list` liste les boutiques de la zone courante.
- **Index** `owner_npc_id` : résolution `!parler <pnj>` → menu marchand.
- **Index** `item_id` : vérification exclusivités et audit prix.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| S1 | **Propriétaire marchand** | INSERT refusé si `T_NPC.role_type` ∉ {MERCHANT, BLACK_MARKET}. `zone_id` copiée depuis le propriétaire. `T_NPC.shop_ref` mis à jour |
| S2 | **Item réel** | INSERT `T_SHOP_ITEMS` refusé si `item_id` absent de `T_ITEMS_DICT` |
| S3 | **Boutique orpheline** | `SYS_ASSASSINATE_NPC` sur le propriétaire ⇒ `is_open = FALSE` |
| S4 | **Exclusivité intra-ville (R2)** | Hors panier UNIVERSEL, un `item_id` ne peut être vendu que par une boutique par ville |
| S5 | **Anti-arbitrage (R4)** | `price` ≥ 2 × 0.25 × `T_ITEMS_DICT.resale_value` |
| S6 | **Plafond T4 / interdit T5 (R6)** | ≤ 2 lignes T4 par ville (toujours avec `condition`). Tout item T5 refusé |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Consulter / acheter / vendre | `!shop_list`, `!buy`, `!sell` | — | — |
| Prix / économie | — | `!sys_market_price` | `SYS_SET_SHOP_PRICES` |
| Réassort | — | `!sys_shop_restock` | `SYS_SHOP_RESTOCK` |
