# Queue Annelée

## Identification Cardinal
- **Item_ID** : `MAT_CUI_007`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SPR_002` Rat des Ruines (taux 55%) > Ruines Noires |
| Acheté par | `NPC_PEN_28` Alchimiste à 11 Yrds |
| Entre dans | `ARM_TET_020`, `CSM_NOU_010` |
| Empilable | OUI (×99) |

## Lore
Les Rats des Ruines ont une queue annelée cartilagineuse très résistante que les alchimistes recherchent pour ses propriétés coagulantes. Une fois séchée, elle se conserve des années sans se dégrader. L'Alchimiste de la guilde de Pénombre-les-Tours en fait l'ingrédient de base de ses potions de stabilité. Les apprentis collecteurs passent leurs nuits à tendre des pièges dans les décombres.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_007` — GM : `!sys_give MAT_CUI_007 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_007, Qty)`
