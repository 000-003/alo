# Totem de Granit Gnome (`DEC_STA_001`)

## Identification Cardinal
- **Item_ID** : `DEC_STA_001`
- **Catégorie** : Décoration · **Type** : Statue (`STA`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Gnome (sculpture)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+4 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; le totem gardien « veille » sur le sommeil |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : sculpteur Gnome de Granzam (`ZONE_GNO_CAP_001`) ; totem des ancêtres des clans souterrains.
- **Recette** : 10× `MAT_MIN_009` (Granit de Granzam) + 2× `MAT_GEM_001` (Gemme de Granit, yeux) — sculpture Nv.30.
- **Prix** : 5 000 ¥ (achat) · 1 250 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Chaque clan Gnome taille son totem dans le granit de sa propre carrière, empilant les visages des ancêtres du plus ancien au sommet au plus jeune à la base. Planté dans un logement, il devient gardien du seuil : les Gnome jurent dormir plus tranquilles sous l'œil de pierre de leurs aïeux. Déplacer le totem d'un autre sans permission est, chez eux, la pire des offenses.

## Intégration Bot
- Joueur : `!decorate DEC_STA_001` — GM : `!sys_give DEC_STA_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_STA_001, 1)`
