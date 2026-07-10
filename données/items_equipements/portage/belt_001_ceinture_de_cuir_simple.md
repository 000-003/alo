# Ceinture de Cuir Simple

## Identification Cardinal
- **Item_ID** : `BELT_001`
- **Catégorie** : Portage · **Type** : Ceinture porte-armes
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Débloque **2 fourreaux** (arme au flanc gauche + flanc droit, dégainage instantané) |
| Slot | `gear_belt` (distinct de l'armure de taille `ARM_TAI_*`) |
| Niveau requis | 1 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : boutique de départ (toutes villes)
- **Recette** : 2× cuir souple + 1× boucle de fer *(`!sew`)*
- **Prix** : 150 Yrds (achat) · 37 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La toute première ceinture de tout aventurier : deux fourreaux, une boucle, rien de plus. Elle ne protège pas — c'est le rôle de l'armure de taille, qu'elle ne remplace jamais — mais elle met deux armes à portée instantanée des mains. Modeste et universelle, on la trouve dans la première échoppe venue.

## Intégration Bot
- Joueur : `!equiper BELT_001 ceinture` · `!sew` — GM : `!sys_give BELT_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BELT_001, 1)`
