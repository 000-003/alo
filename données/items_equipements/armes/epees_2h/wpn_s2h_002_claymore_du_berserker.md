# Claymore du Berserker

## Identification Cardinal
- **Item_ID** : `WPN_S2H_002`
- **Type** : Épée à deux mains
- **Tier** : T2 (Niveau recommandé : 21-40)
- **Rareté** : Rare

## Statistiques de Combat
| Paramètre | Valeur |
|---|---|
| ATK de Base | 155 |
| Vitesse d'Attaque | Lente (2.0s) |
| Modificateur Critique | x2.5 |
| Poids (kg) | 8.5 |
| Portée | Mêlée |
| Affinité Élémentaire | Aucun |
| Durabilité Max | 300 |
| Coût de Réparation | 600 Yrds |

## Prérequis d'Équipement
- **STR minimum** : 70
- **DEX minimum** : 10
- **Niveau minimum** : 21

## Économie
- **Prix Marchand (Achat)** : 6000 Yrds
- **Prix de Revente** : 2400 Yrds
- **Source de Drop** : Drop Troll des Montagnes Gnome (6%)
- **Taux de Drop** : 20%

## Capacité Spéciale
Les Berserkers de l'ancien ALO maniaient ces lames avec une fureur aveugle, sacrifiant toute défense pour l'attaque pure. La légende dit que la première Claymore fut forgée par un Gnome fou qui avait perdu toute sa guilde face à un Boss de Palier.

## Lore (Encyclopédie d'Argo)
Chaque coup consécutif augmente l'ATK de 5% (stack x5 max). Reset si le joueur esquive ou bloque.

## Commande IA Associée
- `SYS_DROP_WEAPON(Avatar_ID, "WPN_S2H_002")` : L'IA peut forcer le drop de cette arme en récompense narrative.
- `SYS_BREAK_WEAPON("WPN_S2H_002", Instance_ID)` : L'IA peut briser cette arme en combat pour créer du drame.
