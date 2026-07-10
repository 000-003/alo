# Croc de Salamander

## Identification Cardinal
- **Item_ID** : `MAT_DRP_013`
- **Famille** : Drop de monstre · **Rare**
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SAL_001` (taux 10%) |
| Acheté par | `NPC_GAT_31` à 150 Yrds |
| Entre dans | `WPN_KAT_002`, `CSM_NOU_001` |
| Empilable | OUI (×99) |

## Lore
Les Salamanders des marais de Gâtine possèdent des crocs creux qui injectent un venin thermique brûlant. Même après la mort de la créature, le venin cristallisé dans la dent reste actif. Les forgerons les montent sur des lames T2 pour infliger des brûlures secondaires à chaque entaille. Un croc bien conservé peut traverser trois forges avant de perdre son tranchant naturel.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_013` — GM : `!sys_give MAT_DRP_013 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_013, Qty)`
