# Table MLD : T_MARKET_LISTINGS

> Hôtel des Ventes (HdV). Toute transaction est tracée pour audit économique.

## 1. Structure SQL

```sql
CREATE TABLE T_MARKET_LISTINGS (
    listing_uuid        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    seller_avatar_uuid  UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid),
    instance_uuid       UUID NOT NULL REFERENCES T_INVENTORY(instance_uuid),
    item_id             VARCHAR(30) NOT NULL,           -- dénormalisé pour indexation
    quantity            INT NOT NULL DEFAULT 1 CHECK (quantity BETWEEN 1 AND 99),

    -- Prix
    price_per_unit      BIGINT NOT NULL CHECK (price_per_unit >= 10),
    total_price         BIGINT NOT NULL,                -- price_per_unit × quantity
    listing_fee         BIGINT NOT NULL,                -- 2% du total, prélevé à la mise

    -- Statut
    status              VARCHAR(10) NOT NULL DEFAULT 'active'
                            CHECK (status IN ('active','sold','cancelled','expired')),
    listed_at           TIMESTAMP NOT NULL DEFAULT NOW(),
    expires_at          TIMESTAMP NOT NULL DEFAULT (NOW() + INTERVAL '48 hours'),
    sold_at             TIMESTAMP,
    buyer_avatar_uuid   UUID REFERENCES T_AVATARS(avatar_uuid),
    sale_tax            BIGINT,                         -- 5% du prix de vente, prélevé à la vente
    net_revenue         BIGINT                          -- total_price - listing_fee - sale_tax

    -- Contrainte : seule une instance NON liée peut être listée
    CONSTRAINT chk_not_bound CHECK (
        NOT EXISTS (SELECT 1 FROM T_INVENTORY inv WHERE inv.instance_uuid = instance_uuid AND inv.is_bound = TRUE)
    )
);

CREATE INDEX idx_market_active ON T_MARKET_LISTINGS(status, listed_at) WHERE status = 'active';
CREATE INDEX idx_market_seller ON T_MARKET_LISTINGS(seller_avatar_uuid);
CREATE INDEX idx_market_item ON T_MARKET_LISTINGS(item_id);
CREATE INDEX idx_market_expires ON T_MARKET_LISTINGS(expires_at) WHERE status = 'active';

CREATE TABLE T_MARKET_HISTORY (
    history_uuid        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    item_id             VARCHAR(30) NOT NULL,
    sale_price          BIGINT NOT NULL,
    sold_at             TIMESTAMP NOT NULL DEFAULT NOW(),
    seller_avatar_uuid  UUID NOT NULL,
    buyer_avatar_uuid   UUID NOT NULL
);

CREATE INDEX idx_market_history_item ON T_MARKET_HISTORY(item_id, sold_at);
```

## 2. Indexation et Optimisation

- **Index partiel** `idx_market_active` : listing des enchères actives (page d'accueil HdV).
- **Index** `idx_market_item` : recherche par item (`!hdv search [Item_ID]`).
- **Index** `idx_market_expires` : cron d'expiration (toutes les 5 min).

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| M1 | **Frais de mise** | Avant INSERT : `listing_fee = total_price * 0.02` (prélevé sur le solde du vendeur, non remboursable). Refusé si solde insuffisant |
| M2 | **Frais de vente** | Au passage `active → sold` : `sale_tax = total_price * 0.05` ; `net_revenue = total_price - listing_fee - sale_tax` crédité au vendeur ; l'instance passe au buyer |
| M3 | **Anti-arbitrage** | `price_per_unit` ≥ 2× la valeur de revente PNJ du même item (vérification sur `T_ITEMS_DICT.resale_value`) |
| M4 | **Expiration** | Cron 5 min : `status = 'active'` et `expires_at < NOW()` ⇒ `status = 'expired'`, instance retourne au vendeur (storage_zone = 'BANK') |
| M5 | **Item lié** | La CHECK constraint `chk_not_bound` utilise une sous-requête sur `T_INVENTORY.is_bound` — implémentée en trigger pour PostgreSQL (pas de sous-requête dans CHECK sur une autre table) |
| M6 | **Limite de slots** | Un vendeur ne peut avoir plus de 10 listings actifs (extensible à 20 via guilde QG Nv.3) |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Vendre / annuler | `!hdv sell [Item_ID] [Prix] [Qty]`, `!hdv cancel [Listing_ID]` | `!sys_hdv_purge` | `SYS_MARKET_LIST`, `SYS_MARKET_CANCEL` |
| Acheter / rechercher | `!hdv search [Item_ID]`, `!hdv buy [Listing_ID]` | — | `SYS_MARKET_BUY` |
| Historique | `!hdv history [Item_ID]` | `!sys_market_price [Item_ID]` | `SYS_MARKET_HISTORY` |
