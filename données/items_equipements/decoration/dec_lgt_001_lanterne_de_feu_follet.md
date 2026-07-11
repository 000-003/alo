# Lanterne de Feu-Follet (`DEC_LGT_001`)

## Identification Cardinal
- **Item_ID** : `DEC_LGT_001`
- **Catégorie** : Décoration · **Type** : Éclairage (`LGT`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+3 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la flamme captive infuse le mana ambiant |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : **loot** — Feu-Follet Leprechaun (`MOB_LEP_003`) ou Feu-Follet Gris Spriggan (`MOB_SPR_003`) ; l'esprit capturé est mis en bocal par un verrier.
- **Recette** : 1× essence de feu-follet *(loot direct des mobs ci-dessus)* + 2× `MAT_MIN_002` (Cuivre Brut, monture) — verrerie Nv.14.
- **Prix** : 900 ¥ (achat) · 225 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
On ne « tue » pas un feu-follet, on l'apprivoise. Enfermée dans une cage de cuivre et de verre soufflé, la lueur bat comme un petit cœur bleu, et sa danse hypnotique aide l'esprit à retrouver sa réserve de sorts. Les mages débutants s'endorment en la regardant ; c'est déconseillé, elle finit toujours par vous parler.

## Intégration Bot
- Joueur : `!decorate DEC_LGT_001` — GM : `!sys_give DEC_LGT_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_LGT_001, 1)`
