# Fourrure Grise

## Identification Cardinal
- **Item_ID** : `MAT_CUI_001`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_GNO_002` Marmotte Cuirassée (taux 45%) > Steppes Granit |
| Acheté par | `NPC_GRA_50` Charbonnier à 12 Yrds |
| Entre dans | `ARM_TET_010`, `BAG_001` (cuir Freelia) |
| Empilable | OUI (×99) |

## Lore
Tannée à même la roche par les Marmottes Cuirassées des Steppes Granit, cette fourrure grise est prisée des chasseurs nomades pour sa robustesse malgré son aspect grossier. On raconte qu'un Charbonnier solitaire en ramasse des ballots entiers pour alimenter ses échanges avec les forgerons de passage. Sa teinte pâle la rend idéale pour les vêtements d'hiver, mais aussi pour les doublures d'armures légères. Les marmottes la perdent naturellement lors des mues printanières, ce qui en fait une ressource renouvelable.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_001` — GM : `!sys_give MAT_CUI_001 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_001, Qty)`
