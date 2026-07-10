# Perle des Abysses

## Identification Cardinal
- **Item_ID** : `MAT_DRP_010`
- **Famille** : Drop de monstre · **Épique**
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_UND_004` (taux 5%) |
| Acheté par | `NPC_UND_xx` à 500 Yrds |
| Entre dans | `WPN_BAG_005`, `CSM_POT_037` (Coralia) |
| Empilable | OUI (×99) |

## Lore
Les mollusques géants des abysses d'Underdark sécrètent ces perles couleur nuit pour encapsuler des particules de magie ambiante. Chaque perle emprisonne un sort mineur qui peut être libéré par un joaillier expérimenté. Les marchands de perles les achètent pour les sertir dans des bijoux qui protègent des malédictions aquatiques. Leur éclat profond évoque les abysses sans fond des océans primordiaux.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_010` — GM : `!sys_give MAT_DRP_010 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_010, Qty)`
