# Plume de Corbeau

## Identification Cardinal
- **Item_ID** : `MAT_CUI_012`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_CAI_003` Corbeau Commun (taux 60%) > Zones HUNT |
| Acheté par | Marchand Plumiers à 6 Yrds |
| Entre dans | `WPN_ARC_003`, `WPN_JET_002` |
| Empilable | OUI (×99) |

## Lore
Les plumes de corbeau sont les plus communes des plumes utilisables en écriture. Leur rachis est ferme, leur barbe fine, et leur encre naturelle noire les rend prisées des scribes itinérants. Les Marchands Plumiers les achètent à la volée, les trient par qualité et les revendent aux calligraphes des grandes villes. Une plume de corbeau bien taillée peut tracer des kilomètres de parchemin avant de s'émousser.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_012` — GM : `!sys_give MAT_CUI_012 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_012, Qty)`
