# Besace de Cuir de Freelia

## Identification Cardinal
- **Item_ID** : `BAG_001`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Cait Sith)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : tailleurs de Freelia et comptoirs de départ (Vosk `NPC_GAT_96`, Ison `NPC_ALN_66`)
- **Recette** : 3× cuir souple + fil résistant *(`!sew`)*
- **Prix** : 200 Yrds (achat) · 50 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une besace de cuir fauve, cousue par les artisans de Freelia qui savent tanner mieux que personne. Elle ne protège pas et ne renforce rien : elle porte, tout simplement, trente emplacements de plus sur le dos. Le premier vrai sac de la plupart des aventuriers — celui qu'on garde par sentiment longtemps après avoir pu s'offrir mieux.

## Intégration Bot
- Joueur : `!equiper BAG_001 dos` · `!sew` — GM : `!sys_give BAG_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_001, 1)`
