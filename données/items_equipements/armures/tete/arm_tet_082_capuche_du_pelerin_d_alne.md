# Capuche du Pèlerin d'Alne

## Identification Cardinal
- **Item_ID** : `ARM_TET_082`
- **Slot** : Tête — Capuche · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune (objet neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 22 |
| RES magique | 16 |
| Poids | 0,3 kg |
| Durabilité | 320 |
| Pénalité de vol | 0% |
| Bonus | +5% vitesse de déplacement sur les routes (`ZONE_*_ROUTE_*`) ; -10% coût des auberges |

## Acquisition & Chaînage économique
- **Source** : Boutiques d'Alne (`ZONE_NEU_CAP_001`) — vendue à toutes les races sans condition.
- **Recette** : 3× Toile de voyage + 1× Insigne de pèlerin (offert au premier passage à Alne).
- **Prix** : 900 Yrds (achat) · 225 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Alne, ville neutre au pied d'Yggdrasil, voit passer les neuf peuples. Cette capuche beige est un sauf-conduit tacite : les patrouilles raciales laissent passer le pèlerin qui la porte, par une convention plus vieille que les guerres. La doubler d'une couleur de faction est considéré comme du mauvais goût — et de l'espionnage.

## Intégration Bot
- Joueur : `!equiper ARM_TET_082 tete` · `!inspect ARM_TET_082` — GM : `!sys_give ARM_TET_082 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_082, 1)`
