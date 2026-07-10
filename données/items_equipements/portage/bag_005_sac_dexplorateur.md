# Sac d'Explorateur

## Identification Cardinal
- **Item_ID** : `BAG_005`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 10 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : boutiques de tailleurs et guildes d'exploration / craft `!sew`
- **Recette** : 3× cuir souple + 1× toile imperméable + boucles *(`!sew`)*
- **Prix** : 1 100 Yrds (achat) · 275 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Multipoche, imperméabilisé, pensé pour les longues expéditions loin de toute ville. Ses rabats extérieurs permettent d'attraper une potion sans fouiller — l'accès rapide fait toute la différence en combat. Le favori des cartographes et des chasseurs de zones inexplorées, qui vivent des semaines sur son seul contenu.

## Intégration Bot
- Joueur : `!equiper BAG_005 dos` · `!sew` — GM : `!sys_give BAG_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_005, 1)`
