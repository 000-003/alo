# Masse de Guerre Gnome

## Identification Cardinal
- **Item_ID** : `WPN_MAS_001`
- **Type** : Masse à une main
- **Tier** : T1 (Niveau recommandé : 1-20)
- **Rareté** : Commune

## Statistiques de Combat
| Paramètre | Valeur |
|---|---|
| ATK de Base | 55 |
| Vitesse d'Attaque | Lente (1.5s) |
| Modificateur Critique | x1.5 |
| Poids (kg) | 6.0 |
| Portée | Mêlée |
| Affinité Élémentaire | Terre |
| Durabilité Max | 280 |
| Coût de Réparation | 110 Yrds |

## Prérequis d'Équipement
- **STR minimum** : 30
- **DEX minimum** : 5
- **Niveau minimum** : 1

## Économie
- **Prix Marchand (Achat)** : 1100 Yrds
- **Prix de Revente** : 440 Yrds
- **Source de Drop** : Forgeron Gnome
- **Taux de Drop** : 25%

## Capacité Spéciale
Arme brute et directe, la masse est le prolongement naturel du poing d'un Gnome. Là où les épées tranchent, la masse écrase. Simple, efficace, sans fioritures.

## Lore (Encyclopédie d'Argo)
Ignore 10% de la DEF physique ennemie (Armor Penetration).

## Commande IA Associée
- `SYS_DROP_WEAPON(Avatar_ID, "WPN_MAS_001")` : L'IA peut forcer le drop de cette arme en récompense narrative.
- `SYS_BREAK_WEAPON("WPN_MAS_001", Instance_ID)` : L'IA peut briser cette arme en combat pour créer du drame.
