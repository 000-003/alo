# Encre de Sagesse

## Identification Cardinal
- **Item_ID** : `CSM_POT_030`
- **Catégorie** : Potion · **Type** : Buff (INT)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | +5% INT |
| Durée | 30 min |
| Cooldown | 5 s |
| Cumulable | NON — 1 buff potion + 1 buff nourriture max |

## Acquisition & Chaînage économique
- **Source** : boutique de l'Archipel d'Écume (`ZONE_UND_CAP_001`) / bibliothèque d'Alne
- **Recette** : 1× Encre-de-seiche + 1× Fleur-de-lune + 1× fiole de verre *(alchimie)*
- **Prix** : 140 Yrds (achat) · 35 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Noire comme la nuit d'encre dont elle tire son nom, cette potion aiguise la pensée arcanique le temps d'une longue session de magie. Les érudits Undine la préfèrent aux stimulants criards des autres races : elle éclaircit sans exciter. On dit qu'un mage qui en abuse finit par « penser en cercles » — mythe de taverne, probablement.

## Intégration Bot
- Joueur : `!use CSM_POT_030` — GM : `!sys_give CSM_POT_030 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_030, 1)`
