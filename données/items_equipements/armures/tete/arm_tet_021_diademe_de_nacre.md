# Diadème de Nacre

## Identification Cardinal
- **Item_ID** : `ARM_TET_021`
- **Slot** : Tête — Diadème · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 23 |
| RES magique | 20 (dont +8 vs Eau) |
| Poids | 0,3 kg |
| Durabilité | 330 |
| Pénalité de vol | 0% |
| Bonus | +8% puissance des soins ; +2 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — joailliers de l'Archipel d'Écume.
- **Recette** : 3× Coquillage nacré (récolte, rivages) + 1× Perle laiteuse (drop `MOB_UND_010-011`, Lac Cristallin) + 1× Fil d'argent.
- **Prix** : 1 000 Yrds (achat) · 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La nacre undine n'est pas polie : elle est *apaisée*, baignée sept nuits dans l'eau du Lac Cristallin. Les soigneurs disent qu'elle garde la mémoire du calme et la transmet aux mains qui pansent. C'est le cadeau traditionnel de fin d'apprentissage des clercs de l'Archipel.

## Intégration Bot
- Joueur : `!equiper ARM_TET_021 tete` · `!inspect ARM_TET_021` — GM : `!sys_give ARM_TET_021 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_021, 1)`
