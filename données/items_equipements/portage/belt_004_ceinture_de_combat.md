# Ceinture de Combat

## Identification Cardinal
- **Item_ID** : `BELT_004`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 10 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : maroquiniers de capitale / craft `!sew`
- **Recette** : 3× cuir souple + boucle de bronze + laçage doublé *(`!sew`)*
- **Prix** : 700 Yrds (achat) · 175 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Large, rigide, taillée pour tenir ferme au plus fort d'un affrontement, la ceinture de combat ne bouge pas d'un pouce quand on dégaine à la volée. Ses deux fourreaux sont renforcés pour supporter des lames plus lourdes. Le standard du bretteur confirmé qui a fini d'user des ceintures bon marché.

## Intégration Bot
- Joueur : `!equiper BELT_004 ceinture` · `!sew` — GM : `!sys_give BELT_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_004, 1)`
