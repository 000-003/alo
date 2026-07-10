# Étain des Collines

## Identification Cardinal
- **Item_ID** : `MAT_MIN_003`
- **Famille** : Minerai · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Vallée Geysers, `ZONE_LEP_HUNT_001` |
| Acheté par | `NPC_BRO_52` à 3 Yrds |
| Entre dans | `WPN_LAN_001`, `WPN_HAC_001` (bronze) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Dans la Vallée des Geysers, l'étain affleure en veines gris-blanc qui luisent sous la vapeur. Les Leprechauns l'appellent « l'os de la vallée » : il craque sous le pic avec un bruit sec, comme une branche qui cède. Les prospecteurs novices le confondent souvent avec l'argent — erreur qui ne coûte que quelques pièces, car l'étain est dix fois plus commun. Pur, il sert à étamer les ustensiles ; allié, il donne le bronze qui arme les premières phalanges. Argo dit toujours : l'étain, c'est la politesse des métaux.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_003` — GM : `!sys_give MAT_MIN_003 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_003, Qty)`
