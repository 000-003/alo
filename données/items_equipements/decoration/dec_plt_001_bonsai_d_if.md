# Bonsaï d'If (`DEC_PLT_001`)

## Identification Cardinal
- **Item_ID** : `DEC_PLT_001`
- **Catégorie** : Décoration · **Type** : Plante / Jardin (`PLT`)
- **Tier** : T1 · **Rareté** : Commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+2 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la contemplation apaise et régénère |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : jardinier-horticulteur de toute capitale ; premier ornement végétal abordable.
- **Recette** : 1× `MAT_WOD_001` (Bois d'If, greffe) + 1× `MAT_HRB_020` (Herbe d'Eau Claire) + coupe patiente — horticulture Nv.6.
- **Prix** : 500 ¥ (achat) · 125 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Un arbre millénaire réduit à la taille d'une paume, taillé nuit après nuit. L'if est l'arbre des cimetières et des serments : le garder chez soi, c'est apprivoiser le temps lui-même. Les vétérans d'Aincrad en offrent aux novices comme leçon muette — la patience est une arme.

## Intégration Bot
- Joueur : `!decorate DEC_PLT_001` — GM : `!sys_give DEC_PLT_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_PLT_001, 1)`
