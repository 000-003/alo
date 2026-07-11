# Écaille de Dragon Spectral sous Verre (`DEC_TRO_004`)

## Identification Cardinal
- **Item_ID** : `DEC_TRO_004`
- **Catégorie** : Décoration · **Type** : Trophée (`TRO`)
- **Tier** : T5 · **Rareté** : Légendaire · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Spriggan (prise dans les Terres Grises)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_exp_pct` **+3 %** (méditer devant la relique aiguise l'esprit) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` |
| Cumul / plafond | Catégorie `rest_exp` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : **loot** — arracher une écaille au **Dragon Spectral** (`MOB_SPR_024`), boss des ruines Spriggan ; sertie sous cloche par un maître-verrier.
- **Recette** : 1× écaille de dragon spectral *(loot `MOB_SPR_024`)* + 2× `MAT_MIN_007` (Cristal de Brise, cloche) + 1× `MAT_WOD_020` (Bois Spectral, socle) — verrerie Nv.80.
- **Prix** : 100 000 ¥ (achat, ventes exceptionnelles) · 25 000 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le Dragon Spectral n'existe qu'à moitié : moitié bête, moitié souvenir de bête. Ses écailles translucides gardent, dit-on, un fragment de sa mémoire ancienne. Sous verre, l'une d'elles luit d'un gris lunaire et distille une inquiétante clarté d'esprit à qui l'observe longtemps. Peu de foyers en possèdent ; ceux-là ne l'oublient jamais.

## Intégration Bot
- Joueur : `!decorate DEC_TRO_004` — GM : `!sys_give DEC_TRO_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_TRO_004, 1)`
