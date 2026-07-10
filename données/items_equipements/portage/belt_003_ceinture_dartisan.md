# Ceinture d'Artisan

## Identification Cardinal
- **Item_ID** : `BELT_003`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (variante régionale Leprechaun)

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : ateliers de Brokkheim et selliers (toutes villes)
- **Recette** : 2× cuir souple + boucle à cran + rivets *(`!sew`)*
- **Prix** : 160 Yrds (achat) · 40 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Conçue par des Leprechaun qui ne conçoivent rien sans une astuce : sa boucle à cran se règle d'une main. Deux fourreaux, oui, mais placés pour ne jamais gêner un artisan penché sur son établi. Populaire chez les forgerons-combattants qui passent la journée entre marteau et lame.

## Intégration Bot
- Joueur : `!equiper BELT_003 ceinture` · `!sew` — GM : `!sys_give BELT_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_003, 1)`
