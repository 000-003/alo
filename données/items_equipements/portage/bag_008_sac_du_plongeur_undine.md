# Sac du Plongeur Undine

## Identification Cardinal
- **Item_ID** : `BAG_008`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 20 · **Affinité raciale** : Aucune (variante régionale Undine)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 20 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maître-tailleur de l'Archipel `!sew`
- **Recette** : 4× cuir épais + 1× écaille imperméable + résine d'étanchéité *(`!sew`)*
- **Prix** : 4 200 Yrds (achat) · 1 050 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Scellé à la résine des Undine, il garde son contenu au sec même au fond du Gouffre de Léviathan. Sa capacité de trente n'a rien d'exceptionnel, mais rares sont les sacs qui survivent à une plongée en eaux profondes sans transformer les parchemins en bouillie. Indispensable à quiconque explore sous la surface.

## Intégration Bot
- Joueur : `!equiper BAG_008 dos` · `!sew` — GM : `!sys_give BAG_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_008, 1)`
