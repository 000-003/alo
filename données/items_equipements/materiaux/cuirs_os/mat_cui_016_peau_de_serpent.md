# Peau de Serpent

## Identification Cardinal
- **Item_ID** : `MAT_CUI_016`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_UND_001` Serpent des Récifs (taux 35%) > Archipel |
| Acheté par | `NPC_UND_69` Marchand Écailles à 25 Yrds |
| Entre dans | `BELT_004`, `ARM_TET_045` |
| Empilable | OUI (×99) |

## Lore
Les Serpents des Récifs muent dans les eaux chaudes de l'Archipel, laissant derrière eux des peaux irisées parfaitement intactes. Le Marchand Écailles organise des expéditions de collecte entre les marées. Ces peaux sont utilisées pour les ceintures, les gaines de lames et les reliures de grimoires. Leur motif écailleux offre une prise naturelle qui les rend très appréciées des escrimeurs.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_016` — GM : `!sys_give MAT_CUI_016 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_016, Qty)`
