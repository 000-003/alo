# Table MLD : T_SHOPS

> Registre relationnel des boutiques et de leurs inventaires. Source de vérité des fiches
> `game_design/boutiques/<ville>/shop_*.md` (contrat D35, cf. `directives_generation/03_cdc_boutiques.md`).
> Résout enfin `T_NPC.shop_ref` (colonne existante, jusqu'ici sans cible) et les commandes `!shop_list` / `!buy` / `!sell`.

## 1. Structure Logique : T_SHOPS (en-tête boutique)

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `shop_id` | Texte | **PK** — format `SHOP_<VILLE>_<NN>` | `<VILLE>_<NN>` = ceux du PNJ propriétaire (ex: `SHOP_SWI_21`) |
| `owner_npc_id` | Texte | FK → `T_NPC.npc_id`, NOT NULL, UNIQUE | 1 boutique ↔ 1 PNJ `MERCHANT`/`BLACK_MARKET` |
| `zone_id` | Texte | FK → `T_ZONES.zone_id`, NOT NULL | Dénormalisé depuis le propriétaire (T1) |
| `shop_type` | Énum | `BOUTIQUE` / `ETAL` / `MARCHE_NOIR` / `TAVERNE` | Pilote le formatteur narratif du bot |
| `access_rule` | Texte | défaut `LIBRE` | `LIBRE` / `AFF>=n` / `QUETE:<QST_ID>` / `NUIT` |
| `buyback_categories` | Texte | NULLABLE | Catégories rachetées à 25% (politique de rachat, fiche §3) |
| `is_open` | Booléen | défaut VRAI | FAUX si propriétaire `is_alive = FAUX` (T3) |

## 2. Structure Logique : T_SHOP_ITEMS (lignes d'inventaire)

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `shop_id` | Texte | **PK composée** avec `item_id`, FK → `T_SHOPS` | — |
| `item_id` | Texte | FK → `T_ITEMS_DICT.item_id`, NOT NULL | Un `item_id` inexistant est un rejet (T2) |
| `price` | Entier | > 0 | Prix modulé D36 : LOCAL −20% · IMPORT +40% · arrondi 5 Yrds · ≥ 2× valeur de revente |
| `origin` | Énum | `LOCAL` / `IMPORT` | Si `IMPORT` : `origin_city` obligatoire |
| `origin_city` | Texte | NULLABLE | Ville source (doit PRODUIRE l'article dans la matrice D36) |
| `stock` | Entier | −1 = illimité | Stock courant |
| `restock_days` | Entier | NULLABLE | Période de réassort (`SYS_SHOP_RESTOCK`) |
| `condition` | Texte | NULLABLE | `AFF>=n` / titre / quête — obligatoire pour tout T4 |

## 3. Indexation et Optimisation

- **Index** sur `zone_id` : `!shop_list` liste les boutiques de la zone courante.
- **Index** sur `owner_npc_id` : résolution `!parler <pnj>` → menu marchand.
- **Index** sur `(item_id)` dans `T_SHOP_ITEMS` : vérification des exclusivités R2/R3 (D36) et audit des prix (`!sys_market_price`).

## 4. Triggers / Procédures Stockées (contrats d'intégrité)

| # | Contrat | Comportement |
|---|---|---|
| T1 | **Propriétaire marchand** | INSERT refusé si `T_NPC.role_type` ∉ {`MERCHANT`, `BLACK_MARKET`} ; `zone_id` copiée depuis le propriétaire ; `T_NPC.shop_ref` mis à jour en retour |
| T2 | **Item réel** | INSERT dans `T_SHOP_ITEMS` refusé si `item_id` absent de `T_ITEMS_DICT` (aucun article fantôme en rayon) |
| T3 | **Boutique orpheline** | `SYS_ASSASSINATE_NPC` sur le propriétaire ⇒ `is_open = FAUX` (succession D16 rouvrira) |
| T4 | **Exclusivité intra-ville (R2)** | Hors panier `[UNIVERSEL]` (6 items, D36-R1), un `item_id` ne peut être vendu que par une boutique par ville |
| T5 | **Anti-arbitrage (R4)** | `price` ≥ 2 × (0,25 × prix de référence `T_ITEMS_DICT`) — bloque la boucle achat/revente infinie |
| T6 | **Plafond T4 / interdit T5 (R6)** | ≤ 2 lignes T4 par ville (toujours avec `condition`) ; tout item T5 refusé |

## 5. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Consulter / acheter / vendre | `!shop_list`, `!buy`, `!sell` | — | — |
| Prix / économie | — | `!sys_market_price` | `SYS_SET_SHOP_PRICES` |
| Réassort | — | `!sys_shop_restock [SHOP_ID]` | `SYS_SHOP_RESTOCK(Shop_ID)` |
| Don direct (hors boutique) | — | `!sys_give` | `SYS_GRANT_ITEM(Avatar_ID, Item_ID, Qty)` |

> ✅ `!sys_shop_restock` (§1) / `SYS_SHOP_RESTOCK` (§11) : **propagés dans les maîtres à l'étape 21 (2026-07-09)** — consolidation des commandes.
