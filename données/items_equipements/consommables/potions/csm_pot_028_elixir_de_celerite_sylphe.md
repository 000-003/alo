# Élixir de Célérité Sylphe

## Identification Cardinal
- **Item_ID** : `CSM_POT_028`
- **Catégorie** : Potion · **Type** : Buff (AGI)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | +5% AGI |
| Durée | 30 min |
| Cooldown | 5 s |
| Cumulable | NON — 1 buff potion + 1 buff nourriture max |

## Acquisition & Chaînage économique
- **Source** : boutique de Swilvane (`ZONE_SYL_CAP_001`) / craft alchimiste Sylph
- **Recette** : 1× Feuille-de-zéphyr + 1× Fleur-de-lune + 1× fiole de verre *(alchimie)*
- **Prix** : 140 Yrds (achat) · 35 Yrds (revente)

## Lore (Encyclopédie d'Argo)
D'un vert clair qui semble frissonner dans le flacon, cet élixir allège les pas comme si le vent portait chaque foulée. Les voltigeurs Sylph le boivent avant les courses de vol de Swilvane, et personne n'a jamais prouvé que c'était de la triche. Léger sur la langue, léger sur les pieds — la signature Sylph par excellence.

## Intégration Bot
- Joueur : `!use CSM_POT_028` — GM : `!sys_give CSM_POT_028 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_028, 1)`
