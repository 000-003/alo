# Âtre de Pierre de Granzam (`DEC_FUR_005`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_005`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Gnome (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+4 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la chaleur de l'âtre « soigne » plus vite |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** ; ne s'additionne pas au-delà avec `DEC_FUR_001` |

## Acquisition & Chaînage économique
- **Source** : maçon-tailleur Gnome de Granzam (`ZONE_GNO_CAP_001`), atelier de cheminées.
- **Recette** : 12× `MAT_MIN_009` (Granit de Granzam) + 3× `MAT_MIN_001` (Minerai de Fer, chenets) — maçonnerie Nv.28.
- **Prix** : 4 500 ¥ (achat) · 1 125 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Les Gnome ne conçoivent pas de foyer sans feu de pierre. Taillé dans le granit gris de leurs carrières, cet âtre irradie une chaleur constante qui rassure autant qu'elle réchauffe. Un logement doté d'un tel foyer n'est jamais tout à fait froid, même serveur au ralenti. On dit qu'un Gnome qui vend son âtre vend son honneur.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_005` — GM : `!sys_give DEC_FUR_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_005, 1)`
