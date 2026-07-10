# Sac de Marche Renforcé

## Identification Cardinal
- **Item_ID** : `BAG_004`
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
- **Source** : boutiques de tailleurs (toutes villes) / craft `!sew`
- **Recette** : 4× cuir souple + 1× fil renforcé + boucles de fer *(`!sew`)*
- **Prix** : 900 Yrds (achat) · 225 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La montée en gamme du voyageur sérieux : coutures doublées, sangles capitonnées, fond rigide. La capacité reste de trente — le tier ne change que la solidité et le prestige, jamais le volume. On le reconnaît à ses boucles de fer luisantes, petit luxe qui distingue l'aventurier confirmé du débutant.

## Intégration Bot
- Joueur : `!equiper BAG_004 dos` · `!sew` — GM : `!sys_give BAG_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_004, 1)`
