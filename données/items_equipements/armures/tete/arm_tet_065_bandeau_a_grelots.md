# Bandeau à Grelots

## Identification Cardinal
- **Item_ID** : `ARM_TET_065`
- **Slot** : Tête — Bandeau · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 5 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 9 |
| RES magique | 7 |
| Poids | 0,2 kg |
| Durabilité | 175 |
| Pénalité de vol | 0% |
| Bonus | +2 AGI ; les esquives réussies rechargent 1% de la jauge de mélodie |

## Acquisition & Chaînage économique
- **Source** : Craft — luthiers de Lioda.
- **Recette** : 2× Feutre souple + 3× Grelot de bronze (drop `MOB_PUC_010-011`, `ZONE_PUC_HUNT_001`).
- **Prix** : 300 Yrds (achat) · 75 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Paradoxe puca : un bandeau qui tinte à chaque pas, porté par des artistes qui doivent parfois se faire discrets. La réponse est dans la technique — un vrai danseur de Lioda bouge sans faire sonner un seul grelot, et chaque silence est un point d'esquive. Le Cardinal note la chorégraphie, pas la vitesse.

## Intégration Bot
- Joueur : `!equiper ARM_TET_065 tete` · `!inspect ARM_TET_065` — GM : `!sys_give ARM_TET_065 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_065, 1)`
