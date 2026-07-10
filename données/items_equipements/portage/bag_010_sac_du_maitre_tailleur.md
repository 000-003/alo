# Sac du Maître-Tailleur

## Identification Cardinal
- **Item_ID** : `BAG_010`
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
- **Source** : craft maître-tailleur + 1 quête d'artisanat
- **Recette** : 6× cuir épais + 1× fil de mithril + 1× Gemme de Granzam (fermoir) *(`!sew` maître)*
- **Prix** : 10 000 Yrds (achat) · 2 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'œuvre d'un maître au sommet de son art : coutures invisibles, fermoir de gemme, cuir souple comme du velours et dur comme du bois. Il ne contient toujours que trente emplacements — un sac reste un sac — mais le porter, c'est afficher qu'on a les moyens et les relations pour obtenir le meilleur. Un objet de statut autant que d'usage.

## Intégration Bot
- Joueur : `!equiper BAG_010 dos` · `!sew` — GM : `!sys_give BAG_010 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_010, 1)`
