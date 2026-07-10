# Eau de Source de Lioda

## Identification Cardinal
- **Item_ID** : `CSM_POT_016`
- **Catégorie** : Potion · **Type** : Mana (MP)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 16 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 200 MP + réduit de 1 s le cooldown des sorts de chant pendant 15 s |
| Durée | 15 s (effet cooldown) |
| Cooldown | 18 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de Lioda (`ZONE_PUC_CAP_001`) / craft alchimiste Puca
- **Recette** : 3× Fleur-de-lune + 1× Eau-de-source claire de l'Amphithéâtre + 1× fiole de verre *(alchimie)*
- **Prix** : 220 Yrds (achat) · 55 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Puisée dans les vasques qui résonnent sous l'Amphithéâtre Oublié, cette eau garde, dit-on, un peu de la musique du lieu. Les bardes Puca jurent qu'elle « accorde » leur mana au tempo de leurs chants — et la mécanique leur donne raison, puisqu'elle raccourcit brièvement leurs cadences. Hors de Lioda, on la vend surtout comme curiosité de collectionneur.

## Intégration Bot
- Joueur : `!use CSM_POT_016` — GM : `!sys_give CSM_POT_016 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_016, 1)`
