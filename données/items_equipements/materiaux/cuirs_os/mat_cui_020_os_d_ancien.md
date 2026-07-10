# Os d'Ancien

## Identification Cardinal
- **Item_ID** : `MAT_CUI_020`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SPR_026` Gardien des Cryptes (taux 5%) > Donjon |
| Acheté par | `NPC_PEN_60` Scribe à 100 Yrds |
| Entre dans | `WPN_ARC_010`, `WPN_BAG_009` (Os antique) |
| Empilable | OUI (×99) |

## Lore
Les ossements des Gardiens des Cryptes sont les vestiges d'une race antédiluvienne qui régnait avant l'éveil des humains. Le Scribe de Pénombre-les-Tours les achète pour y graver des textes sacrés, car la matière osseuse absorbe l'encre mieux que tout parchemin. Chaque os porte des runes naturelles indéchiffrables qui attirent les érudits du monde entier. Les forgerons légendaires y taillent des armes d'une puissance inégalée. Leur poussière entre dans la composition des encres de vérité.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_020` — GM : `!sys_give MAT_CUI_020 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_020, Qty)`
