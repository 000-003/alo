# Œil de Chauve-Souris

## Identification Cardinal
- **Item_ID** : `MAT_CUI_013`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_IMP_001` Chauve-Souris des Cavernes (taux 25%) > Cavernes Duskarn |
| Acheté par | `NPC_DUS_35` Alchimiste Poisons à 15 Yrds |
| Entre dans | `CSM_POT_020`, `CSM_PAR_006` |
| Empilable | OUI (×99) |

## Lore
Les yeux des chauves-souris des Cavernes Duskarn ont la particularité de rester ouverts et brillants longtemps après la mort de l'animal. Les alchimistes spécialisés dans les poisons les utilisent pour leurs propriétés alcalines. L'Alchimiste Poisons de Duskarn en prépare des extraits pour ses clients les plus discrets. Dans le folklore local, porter un œil de chauve-souris autour du cou permet de voir dans le noir — une croyance tenace mais infondée.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_013` — GM : `!sys_give MAT_CUI_013 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_013, Qty)`
