# Pierre Philosophale

## Identification Cardinal
- **Item_ID** : `MAT_MIN_017`
- **Famille** : Minerai · **Rareté** : Épique
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Nécropole, `ZONE_SPR_DUN_001` |
| Acheté par | Vess `NPC_GAT_63` à 2 500 Yrds |
| Entre dans | `WPN_EP2_007`, `WPN_LEG_001` (transmutation) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
La Pierre Philosophale d'Alfheim n'est pas une légende d'alchimiste — c'est un minerai que l'on trouve dans les profondeurs de la Nécropole, là où les morts numériques se désagrègent en données brutes. Rouge, translucide, elle émet une chaleur sèche qui dessèche l'air autour d'elle. Les alchimistes de haut niveau l'utilisent pour la transmutation : convertir un matériau en un autre de tier égal, ou (avec des risques) de tier supérieur. Le PNJ Vess la paie à prix d'or.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_017` — GM : `!sys_give MAT_MIN_017 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_017, Qty)`
