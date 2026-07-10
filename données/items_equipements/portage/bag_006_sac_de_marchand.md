# Sac de Marchand

## Identification Cardinal
- **Item_ID** : `BAG_006`
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
- **Source** : selliers et maisons de commerce (Alne, capitales) / craft `!sew`
- **Recette** : 4× cuir souple + 1× fil renforcé + fermoir à serrure *(`!sew`)*
- **Prix** : 1 300 Yrds (achat) · 325 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Doté d'un fermoir à serrure — luxe rare — ce sac protège les marchandises des doigts baladeurs des marchés d'Alne. Trente emplacements, toujours, mais organisés en compartiments pour trier stock et monnaie. Les colporteurs itinérants le portent avec la fierté d'un outil de métier.

## Intégration Bot
- Joueur : `!equiper BAG_006 dos` · `!sew` — GM : `!sys_give BAG_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_006, 1)`
