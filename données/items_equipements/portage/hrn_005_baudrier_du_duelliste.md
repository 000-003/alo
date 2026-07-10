# Baudrier du Duelliste

## Identification Cardinal
- **Item_ID** : `HRN_005`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **3 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 15 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : selliers de capitale / craft `!sew`
- **Recette** : 3× cuir souple + boucles de bronze + doublure *(`!sew`)*
- **Prix** : 1 500 Yrds (achat) · 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Pensé pour la vitesse pure, ce baudrier positionne trois armes à angles parfaits pour un dégainage éclair. Les duellistes des arènes d'Alne le règlent au millimètre. Élégant, sombre, discret sous une cape : l'accessoire des tueurs qui ne veulent pas avoir l'air d'en être.

## Intégration Bot
- Joueur : `!equiper HRN_005 dos` · `!sew` — GM : `!sys_give HRN_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_005, 1)`
