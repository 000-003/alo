# Lustre de Cristal de Brise (`DEC_LGT_002`)

## Identification Cardinal
- **Item_ID** : `DEC_LGT_002`
- **Catégorie** : Décoration · **Type** : Éclairage (`LGT`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Sylph (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_exp_pct` **+2 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la lumière prismatique « éclaire l'esprit » |
| Cumul / plafond | Catégorie `rest_exp` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : cristallier Sylph de Swilvane (`ZONE_SYL_CAP_001`) ; pièce d'apparat des manoirs.
- **Recette** : 5× `MAT_MIN_007` (Cristal de Brise) + 3× `MAT_MIN_004` (Minerai d'Argent, chaînettes) — cristallerie Nv.30.
- **Prix** : 5 000 ¥ (achat) · 1 250 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Suspendu sous un plafond de manoir, le cristal de brise décompose la lumière du Cardinal en une pluie d'arcs-en-ciel qui tournent lentement au gré des courants d'air simulés. Sous cette lumière, l'esprit s'accorde, apprend, retient. Les Sylph l'offrent aux nouveaux mariés comme vœu de « jours clairs ».

## Intégration Bot
- Joueur : `!decorate DEC_LGT_002` — GM : `!sys_give DEC_LGT_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_LGT_002, 1)`
