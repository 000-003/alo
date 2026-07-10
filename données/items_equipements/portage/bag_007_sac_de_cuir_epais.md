# Sac de Cuir Épais

## Identification Cardinal
- **Item_ID** : `BAG_007`
- **Catégorie** : Portage · **Type** : Sac de dos
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 20 · **Affinité raciale** : Aucune

## Fonction
| Paramètre | Valeur |
|---|---|
| Fonction | Stockage +30 emplacements (items / consommables / matériaux — **jamais d'armes**) + accès rapide |
| Slot | `gear_back` (exclusif avec la sangle) |
| Niveau requis | 20 |
| Empilable | NON |
| Bonus de stat | AUCUN |

## Acquisition & Chaînage économique
- **Source** : craft maître-tailleur `!sew` (cuirs T3)
- **Recette** : 5× cuir épais (`MAT_CUI_*` T3) + 1× fil renforcé + boucles de bronze *(`!sew`)*
- **Prix** : 3 500 Yrds (achat) · 875 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Taillé dans le cuir épais des grandes bêtes de zone T3, il survit à des chutes qui déchireraient un sac ordinaire. La capacité, encore et toujours, reste de trente — mais un sac qui ne cède jamais vaut son pesant de Yrds quand on est loin de toute réparation. Les vétérans le transmettent comme un héritage.

## Intégration Bot
- Joueur : `!equiper BAG_007 dos` · `!sew` — GM : `!sys_give BAG_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, BAG_007, 1)`
