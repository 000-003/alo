# Épine Imp

## Identification Cardinal
- **Item_ID** : `MAT_DRP_015`
- **Famille** : Drop de monstre · **Rare**
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_IMP_001` (taux 10%) |
| Acheté par | `NPC_DUS_35` à 150 Yrds |
| Entre dans | `WPN_DAG_004`, `CSM_POT_020` (Imp) |
| Empilable | OUI (×99) |

## Lore
Les Imps de Duskwood portent sur leur dos des épines acérées imprégnées d'un toxine paralysante. L'alchimiste de poisons extrait le venin pour composer des concoctions qui engourdissent les membres en quelques secondes. L'épine elle-même peut être utilisée comme aiguille d'injection réutilisable. Les assassins de la guilde des ombres s'arrachent ces épines à prix d'or.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_015` — GM : `!sys_give MAT_DRP_015 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_015, Qty)`
