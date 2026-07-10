# Griffe d'Ours

## Identification Cardinal
- **Item_ID** : `MAT_CUI_017`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SYL_001` Ours des Bois (taux 15%) > Forêt Swilvane |
| Acheté par | Marchand Cuirs `NPC_SWI_xx` à 45 Yrds |
| Entre dans | `WPN_JET_002`, `WPN_DAG_008` |
| Empilable | OUI (×99) |

## Lore
Les Ours des Bois de Swilvane ont des griffes si longues qu'elles s'incrustent dans les troncs où ils font leurs marques. Les chasseurs les récupèrent après la mort naturelle de l'animal selon la tradition sylvestre. Le Marchand Cuirs les achète pour les monter en bijoux ou en outils de sculpture sur bois. Chaque griffe est unique par sa courbure et sa patine. Les druides locaux les utilisent comme composant rituel.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_017` — GM : `!sys_give MAT_CUI_017 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_017, Qty)`
