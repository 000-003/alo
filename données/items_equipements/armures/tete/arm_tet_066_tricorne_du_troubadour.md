# Tricorne du Troubadour

## Identification Cardinal
- **Item_ID** : `ARM_TET_066`
- **Slot** : Tête — Tricorne · **Classe** : Cuir
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 24 |
| RES magique | 12 |
| Poids | 0,5 kg |
| Durabilité | 340 |
| Pénalité de vol | 0% |
| Bonus | +3 CHA ; +10% portée des buffs musicaux ; +5% Yrds gagnés en représentation de rue (`!jouer`) |

## Acquisition & Chaînage économique
- **Source** : Craft — chapeliers de Lioda ; modèle déposé de la guilde des Troubadours Itinérants.
- **Recette** : 3× Cuir souple + 1× Plume de geai chanteur + 1× Boucle d'étain.
- **Prix** : 1 000 Yrds (achat) · 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les trois cornes du chapeau servent d'amplificateur directionnel : le troubadour choisit qui reçoit sa chanson. La guilde exige qu'un membre en tournée le porte dans les neuf territoires — un tricorne « complet » arbore neuf épingles, une par capitale, et vaut plus cher que bien des épées.

## Intégration Bot
- Joueur : `!equiper ARM_TET_066 tete` · `!inspect ARM_TET_066` — GM : `!sys_give ARM_TET_066 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_066, 1)`
