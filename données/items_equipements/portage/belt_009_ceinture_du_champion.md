# Ceinture du Champion

## Identification Cardinal
- **Item_ID** : `BELT_009`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 25 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 25 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : quête d'arène (Voulg / Alne) / craft maroquinier maître
- **Recette** : 4× cuir épais + boucle de mithril gravée + plaque de champion *(`!sew` maître)*
- **Prix** : 5 500 Yrds (achat) · 1 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La large plaque frontale de cette ceinture se gagne dans l'arène, jamais à la boutique — on la remet aux vainqueurs, gravée de leur nom. Deux fourreaux d'apparat qui n'ont pourtant rien perdu de leur utilité. La porter, c'est répondre à toute provocation avant même d'avoir parlé : le champion se reconnaît à sa taille.

## Intégration Bot
- Joueur : `!equiper BELT_009 ceinture` · `!sew` — GM : `!sys_give BELT_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_009, 1)`
