# Carapace Éclatée

## Identification Cardinal
- **Item_ID** : `MAT_CUI_002`
- **Famille** : Cuir/Os · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_GNO_003` Scarabée Granit (taux 40%) > Carrières |
| Acheté par | `NPC_GRA_15` Marchand Granit à 10 Yrds |
| Entre dans | `ARM_TET_012`, `WPN_BOU_001` |
| Empilable | OUI (×99) |

## Lore
Les Scarabées Granit des Carrières muent régulièrement, abandonnant leur exosquelette durci. Les carriers amassent ces carapaces pour les revendre comme matériau d'appoint, car elles sont légères mais résistantes. Le Marchand Granit les utilise comme monnaie d'échange auprès des tailleurs de pierre. Un proverbe local dit : « Qui ramasse la carapace forge son armure. »

## Intégration Bot
- Joueur : `!inspect MAT_CUI_002` — GM : `!sys_give MAT_CUI_002 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_002, Qty)`
