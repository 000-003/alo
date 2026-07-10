# Baudrier Simple

## Identification Cardinal
- **Item_ID** : `HRN_001`
- **Catégorie** : Portage · **Type** : Sangle d'armes (dos)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Porte **2 armes au dos** (dégainage dorsal sans commande) — **aucun stockage d'items** |
| Slot | `gear_back` (alternative au sac : sac **XOR** sangle) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : selliers et comptoirs de départ (toutes villes)
- **Recette** : 2× cuir souple + boucle de fer *(`!sew`)*
- **Prix** : 250 Yrds (achat) · 62 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le choix du combattant qui préfère les lames au bagage : deux armes croisées dans le dos, prêtes à jaillir sans un mot. Qui porte une sangle renonce au sac — le dos ne sert qu'une fois. Simple lanière de cuir et boucle, c'est le premier pas de tout bretteur à deux styles.

## Intégration Bot
- Joueur : `!equiper HRN_001 dos` · `!sew` — GM : `!sys_give HRN_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, HRN_001, 1)`
