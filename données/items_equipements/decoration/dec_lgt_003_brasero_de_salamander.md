# Brasero de Salamander (`DEC_LGT_003`)

## Identification Cardinal
- **Item_ID** : `DEC_LGT_003`
- **Catégorie** : Décoration · **Type** : Éclairage (`LGT`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Salamander (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+5 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la braise éternelle réchauffe et régénère |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : forgeron-fondeur Salamander de Gattan (`ZONE_SAL_CAP_001`), à la Grande Forge.
- **Recette** : 3× `MAT_DRP_016` (Braise de Forge) + 6× `MAT_MIN_008` (Obsidienne de Gattan) — forge Nv.30.
- **Prix** : 4 800 ¥ (achat) · 1 200 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Une coupe d'obsidienne où couve une braise prélevée à la Grande Forge de Gattan — un charbon qui, dit-on, ne s'éteint qu'à la chute d'ALfheim. Les Salamander ne conçoivent pas de foyer sans un feu qui les regarde. Sa chaleur guerrière ressoude les chairs lasses aussi sûrement qu'elle intimide les invités.

## Intégration Bot
- Joueur : `!decorate DEC_LGT_003` — GM : `!sys_give DEC_LGT_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_LGT_003, 1)`
