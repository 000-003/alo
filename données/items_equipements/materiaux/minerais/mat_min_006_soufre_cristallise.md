# Soufre Cristallisé

## Identification Cardinal
- **Item_ID** : `MAT_MIN_006`
- **Famille** : Minerai · **Rareté** : Peu commun
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Vallée Geysers, `ZONE_LEP_HUNT_001` |
| Acheté par | `NPC_BRO_57` à 50 Yrds |
| Entre dans | `CSM_POT_021`, `WPN_KAT_002` (Salamander) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le soufre cristallisé de la Vallée des Geysers est une merveille dangereuse : il pousse en prismes jaunes translucides au bord des fumerolles, formant des géodes qui craquent sous la chaleur. Les alchimistes l'adorent, les ingénieurs gnomes aussi — c'est le composant de base de toute poudre explosive digne de ce nom. Quelques cristaux bien placés peuvent ouvrir une paroi rocheuse ou un coffre verrouillé. Manipulez-le avec des gants, ou vos doigts finiront en ornement de plafond.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_006` — GM : `!sys_give MAT_MIN_006 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_006, Qty)`
