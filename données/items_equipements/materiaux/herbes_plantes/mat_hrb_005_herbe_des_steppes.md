# Herbe des Steppes

## Identification Cardinal
- **Item_ID** : `MAT_HRB_005`
- **Famille** : Plante · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Steppes Granit |
| Acheté par | Guide Steppes `NPC_GRA_11` à 3 Yrds |
| Entre dans | `CSM_NOU_007`, `CSM_POT_002` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Une herbe coriace qui résiste aux vents secs des steppes de Granit. Sa sève amère est un antidote naturel contre les venins courants de la région. Les éleveurs de chèvres la donnent à leurs bêtes pour les purger. Elle dégage une odeur âcre qui monte au nez. Ses graines voyageuses s'accrochent aux manteaux des voyageurs.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_005` — GM : `!sys_give MAT_HRB_005 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_005, Qty)`
