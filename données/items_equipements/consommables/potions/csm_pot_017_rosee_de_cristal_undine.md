# Rosée de Cristal Undine

## Identification Cardinal
- **Item_ID** : `CSM_POT_017`
- **Catégorie** : Potion · **Type** : Mana (MP)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 450 MP |
| Durée | Instantané |
| Cooldown | 12 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique de l'Archipel d'Écume (`ZONE_UND_CAP_001`) / craft alchimiste Undine
- **Recette** : 4× Fleur-de-lune + 1× Perle du Lac Cristallin + 1× fiole scellée *(alchimie)*
- **Prix** : 550 Yrds (achat) · 137 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Condensée goutte à goutte sur les parois du Lac Cristallin, cette rosée est plus pure que n'importe quelle eau taillée par l'homme. Les mages-soigneurs Undine la préfèrent à toute autre potion de mana : elle ne « refroidit » pas leurs sorts d'eau, contrairement aux mélanges bon marché. Un petit flacon vaut une journée de plongée.

## Intégration Bot
- Joueur : `!use CSM_POT_017` — GM : `!sys_give CSM_POT_017 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_017, 1)`
