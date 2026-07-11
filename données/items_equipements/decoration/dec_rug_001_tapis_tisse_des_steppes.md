# Tapis Tissé des Steppes (`DEC_RUG_001`)

## Identification Cardinal
- **Item_ID** : `DEC_RUG_001`
- **Catégorie** : Décoration · **Type** : Tapis / Tenture (`RUG`)
- **Tier** : T1 · **Rareté** : Commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Cait Sith (tissage)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+2 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; un sol chaud sous le pied repose le corps |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : tisserand Cait Sith de Freelia (`ZONE_CAI_CAP_001`) ; ornement d'entrée de gamme.
- **Recette** : 4× `MAT_HRB_005` (Herbe des Steppes, fibres) + 2× `DIV_DYE_002` (Teinture de Garance) — tissage Nv.6.
- **Prix** : 450 ¥ (achat) · 112 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Les tribus Cait Sith de la Savane des Crocs tissent leurs tapis en marchant, nouant un rang à chaque halte. Les motifs racontent la route parcourue. Étalé au sol d'un logement, il garde une trace de ces grands espaces — et un peu de leur chaleur.

## Intégration Bot
- Joueur : `!decorate DEC_RUG_001` — GM : `!sys_give DEC_RUG_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_RUG_001, 1)`
