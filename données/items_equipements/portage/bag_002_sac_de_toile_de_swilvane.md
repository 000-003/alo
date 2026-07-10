# Sac de Toile de Swilvane

## Identification Cardinal
- **Item_ID** : `BAG_002`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Sylph)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : tailleurs de Swilvane et comptoirs de départ
- **Recette** : 3× toile légère de Swilvane + fil de lin *(`!sew`)*
- **Prix** : 220 Yrds (achat) · 55 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Tissé dans la toile légère que les Sylph affectionnent, ce sac pèse presque rien — un atout pour un peuple qui vole. Même capacité que ses cousins de cuir : trente emplacements, pas un de plus, car un contenant n'est qu'un contenant. Les voltigeurs le préfèrent pour sa discrétion au vent.

## Intégration Bot
- Joueur : `!equiper BAG_002 dos` · `!sew` — GM : `!sys_give BAG_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_002, 1)`
