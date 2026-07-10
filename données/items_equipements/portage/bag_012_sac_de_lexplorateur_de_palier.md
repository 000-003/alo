# Sac de l'Explorateur de Palier

## Identification Cardinal
- **Item_ID** : `BAG_012`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 32 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 32 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maître-tailleur + 1 quête d'endgame (récompense de palier)
- **Recette** : 6× cuir épais + 1× fil de mithril + 1× écaille de boss de palier *(`!sew` maître)*
- **Prix** : 16 000 Yrds (achat) · 4 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le sac ultime, cousu d'écailles arrachées à un boss de palier et de fil de mithril de Brokkheim. On ne l'achète pas vraiment : on le mérite, au terme d'une quête que peu achèvent. Trente emplacements, comme le plus humble des besaces — car le Cardinal ne fait pas d'exception — mais porté par ceux qui ont vu le sommet du monde. Un trophée déguisé en bagage.

## Intégration Bot
- Joueur : `!equiper BAG_012 dos` · `!sew` — GM : `!sys_give BAG_012 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_012, 1)`
