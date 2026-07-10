# Griffe Fouisseuse

## Identification Cardinal
- **Item_ID** : `MAT_CUI_010`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_GNO_001` Blaireau Roche (taux 50%) > Steppes Granit |
| Acheté par | `NPC_GRA_32` Marchand Outils à 10 Yrds |
| Entre dans | `WPN_DAG_001`, `WPN_JET_001` |
| Empilable | OUI (×99) |

## Lore
Les Blaireaux Roche des Steppes Granit usent leurs griffes à creuser des terriers dans la pierre. Les griffes tombées naturellement sont ramassées par les tailleurs de pierre qui les transforment en burins improvisés. Le Marchand Outils les achète par lots et les revend aux artisans de la ville basse. Une griffe bien conservée peut graver le granit le plus dur sans s'émousser.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_010` — GM : `!sys_give MAT_CUI_010 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_010, Qty)`
