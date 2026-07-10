# Eau Bénite de Lioda

## Identification Cardinal
- **Item_ID** : `CSM_POT_024`
- **Catégorie** : Potion · **Type** : Dissipation (malédiction)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 17 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge le statut Malédiction et les debuffs de magie noire (1 dissipation) |
| Durée | Instantané |
| Cooldown | 15 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique de Lioda (`ZONE_PUC_CAP_001`) / temples neutres d'Alne
- **Recette** : 1× Eau-de-source claire de l'Amphithéâtre + 1× Sel-de-lune + rituel de bénédiction *(alchimie sacrée)*
- **Prix** : 170 Yrds (achat) · 42 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Bénie au son continu des vasques de l'Amphithéâtre Oublié, cette eau brise les malédictions comme on coupe une corde. Les aventuriers qui reviennent de la Nécropole de Penwether, couverts de marques violettes, se ruent dessus. On dit que la mélodie « imprégnée » dans le liquide compte autant que le sel — allez savoir, avec les Puca.

## Intégration Bot
- Joueur : `!use CSM_POT_024` — GM : `!sys_give CSM_POT_024 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_024, 1)`
