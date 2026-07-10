# Croc de Loup

## Identification Cardinal
- **Item_ID** : `MAT_CUI_011`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_CAI_001` Loup Commun (taux 35%) > Zones HUNT partout |
| Acheté par | `NPC_SWI_26` Hob à 9 Yrds |
| Entre dans | `WPN_DAG_002`, `BELT_001` (Croc de Freelia) |
| Empilable | OUI (×99) |

## Lore
Les crocs de loup commun sont la ressource de base des apprentis artisans : solides, faciles à travailler et disponibles un peu partout dans les zones de chasse. Le Hob de Swilvane les récolte auprès des jeunes chasseurs pour en faire des pendentifs protecteurs. La tradition veut qu'offrir un croc de loup porte chance au chasseur qui part en expédition. Leur ivoire jaunit joliment avec l'âge.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_011` — GM : `!sys_give MAT_CUI_011 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_011, Qty)`
