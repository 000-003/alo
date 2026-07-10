# Havresac à Maille de Granzam

## Identification Cardinal
- **Item_ID** : `BAG_003`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Gnome)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : tailleurs et forgerons-selliers de Granzam
- **Recette** : 2× cuir souple + 1× maille légère + rivets *(`!sew`)*
- **Prix** : 240 Yrds (achat) · 60 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les Gnomes ne conçoivent rien sans y ajouter du métal, et ce havresac ne fait pas exception : une trame de maille légère renforce sa toile. Il ne pèse guère plus lourd et offre les mêmes trente emplacements, mais résiste aux ronces et aux crocs bien mieux que ses rivaux. Solide comme tout ce qui sort de Granzam.

## Intégration Bot
- Joueur : `!equiper BAG_003 dos` · `!sew` — GM : `!sys_give BAG_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_003, 1)`
