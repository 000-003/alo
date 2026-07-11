# Tête de Roi-Taupe Empaillée (`DEC_TRO_002`)

## Identification Cardinal
- **Item_ID** : `DEC_TRO_002`
- **Catégorie** : Décoration · **Type** : Trophée (`TRO`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+3 %** (fierté du chasseur — repos plus serein) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : **loot** — abattre le mini-boss **Roi-Taupe** (`MOB_GNO_024`) des carrières Gnome ; naturalisation chez un taxidermiste.
- **Recette** : 1× tête de Roi-Taupe *(loot `MOB_GNO_024`)* + 2× `MAT_HRB_001` (Lin Sylvestre, bourre) + 1× `MAT_WOD_018` (Bois de Fer, socle) — taxidermie Nv.28.
- **Prix** : 6 500 ¥ (achat, revente de trophée) · 1 625 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le Roi-Taupe règne aveugle sur les galeries de Granzam, énorme et tremblant de rage tellurique. En clouer la tête au-dessus de sa cheminée est, pour un chasseur Gnome, un rite de passage. La bête morte veille encore : on dort mieux sous le regard vide de ce qu'on a vaincu.

## Intégration Bot
- Joueur : `!decorate DEC_TRO_002` — GM : `!sys_give DEC_TRO_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_TRO_002, 1)`
