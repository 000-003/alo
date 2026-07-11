# Bibliothèque de Chêne (`DEC_FUR_002`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_002`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+3 %** (bonus au taux de régénération MP au repos) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif, tant que l'objet est placé via `!decorate` |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : menuisier de Granzam (`ZONE_GNO_CAP_001`) ou de toute capitale disposant d'un atelier de meuble.
- **Recette** : 8× `MAT_WOD_002` (Bois de Chêne) + 2× `MAT_MIN_001` (Minerai de Fer, ferrures) — menuiserie Nv.12.
- **Prix** : 1 200 ¥ (achat) · 300 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le chêne massif retient l'humeur studieuse. Entouré de grimoires — même de simples copies factices générées par le Cardinal —, l'esprit d'un mage se réaccorde plus vite à sa réserve de mana. Les érudits Spriggan prétendent que les reliures « murmurent » la nuit ; c'est en réalité le bois qui travaille. Un meuble de veilleur autant que de lettré.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_002` — GM : `!sys_give DEC_FUR_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_002, 1)`
