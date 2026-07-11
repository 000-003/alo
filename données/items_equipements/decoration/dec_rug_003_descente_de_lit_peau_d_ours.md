# Descente de Lit en Peau d'Ours (`DEC_RUG_003`)

## Identification Cardinal
- **Item_ID** : `DEC_RUG_003`
- **Catégorie** : Décoration · **Type** : Tapis / Tenture (`RUG`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+3 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la fourrure épaisse coupe le froid du sol |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : **loot + tannage** — griffe et fourrure d'ours des cavernes Gnome, apprêtées par un tanneur.
- **Recette** : 1× `MAT_CUI_017` (Griffe d'Ours) + 4× `MAT_CUI_001` (Fourrure Grise) + 1× `DIV_DYE_006` (Teinture d'Ombre) — tannerie Nv.18.
- **Prix** : 1 700 ¥ (achat) · 425 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Un trophée qui se marche dessus : la peau entière d'un ours des carrières Gnome, gueule ouverte au pied du lit. Chaque matin, poser le pied sur la fourrure d'une bête qu'on a abattue est une petite affirmation de puissance. Les tanneurs de Granzam disent qu'une bonne peau d'ours dure plus longtemps que le chasseur qui l'a prise.

## Intégration Bot
- Joueur : `!decorate DEC_RUG_003` — GM : `!sys_give DEC_RUG_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_RUG_003, 1)`
