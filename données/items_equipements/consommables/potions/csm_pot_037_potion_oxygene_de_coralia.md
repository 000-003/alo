# Potion d'Oxygène de Coralia

## Identification Cardinal
- **Item_ID** : `CSM_POT_037`
- **Catégorie** : Potion · **Type** : Anti-jauge D12 (OXYGEN)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 26 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 50 points d'OXYGEN (jauge d'Apnée) |
| Durée | Instantané |
| Cooldown | 20 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : Coralia `NPC_UND_07` (Archipel d'Écume) / boutique de l'Archipel
- **Recette** : 2× Perle du Lac Cristallin + 1× Algue-souffle + 1× fiole scellée *(alchimie Undine)*
- **Prix** : 550 Yrds (achat) · 137 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La création signature de Coralia, l'apothicaire de l'Archipel : une fiole qui rend cinquante souffles à un plongeur en train de se noyer dans le Gouffre de Léviathan. C'est elle, littéralement, qui rend le donjon sous-marin franchissable — sans ces potions, la jauge d'Apnée tue avant Jörmun. Coralia les rationne, et n'en vend jamais à ceux qu'elle juge trop imprudents pour survivre.

## Intégration Bot
- Joueur : `!use CSM_POT_037` — GM : `!sys_give CSM_POT_037 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_037, 1)`

## Note
Interagit avec la jauge D12 `OXYGEN` (mécanique d'Apnée, `BOSS_UND_DUN_001` — Gouffre de Léviathan). Équivalent objet du `!respirer` en poche d'air.
