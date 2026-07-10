# Sirop de Braise Éteinte

## Identification Cardinal
- **Item_ID** : `CSM_POT_036`
- **Catégorie** : Potion · **Type** : Anti-jauge D12 (HEAT)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 18 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Réduit de 20 points la jauge de HEAT de l'instance / du joueur |
| Durée | Instantané |
| Cooldown | 25 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique de Gattan / Voulg (`ZONE_SAL_TWN_001`) / craft alchimiste
- **Recette** : 1× Menthe-des-glaces + 1× charbon éteint + 1× fiole de verre *(alchimie)*
- **Prix** : 200 Yrds (achat) · 50 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La version « économique » de l'anti-surchauffe, celle que les Salamander eux-mêmes emportent au quotidien dans les forges de Voulg. Vingt points de Chaleur en moins, c'est peu dans un raid, mais suffisant pour souffler entre deux séries de coups. Son nom vient de sa couleur : celle d'une braise qu'on vient juste d'éteindre.

## Intégration Bot
- Joueur : `!use CSM_POT_036` — GM : `!sys_give CSM_POT_036 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_036, 1)`

## Note
Interagit avec la jauge D12 `HEAT` (mécanique de Surchauffe). Réduction pilotable via `SYS_SET_ENV_HAZARD(Zone_ID, HEAT, Valeur)`.
