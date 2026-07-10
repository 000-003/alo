# Sac Ignifuge de Gattan

## Identification Cardinal
- **Item_ID** : `BAG_009`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 20 · **Affinité raciale** : Aucune (variante régionale Salamander)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 20 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maître-tailleur de Gattan / Voulg `!sew`
- **Recette** : 4× cuir épais + 1× toile d'amiante + fil ignifugé *(`!sew`)*
- **Prix** : 4 000 Yrds (achat) · 1 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Traité contre le feu, ce sac ne s'embrase pas quand son porteur traverse la Caldeira d'Obsidienne — un détail qui a sauvé bien des réserves de potions de la combustion. Trente emplacements comme les autres, mais qui ne partent pas en fumée au premier souffle de Logi. Les forgerons de Gattan n'en portent pas d'autres.

## Intégration Bot
- Joueur : `!equiper BAG_009 dos` · `!sew` — GM : `!sys_give BAG_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_009, 1)`
