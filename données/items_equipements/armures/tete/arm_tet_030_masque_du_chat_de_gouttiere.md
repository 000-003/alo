# Masque du Chat de Gouttière

## Identification Cardinal
- **Item_ID** : `ARM_TET_030`
- **Slot** : Tête — Masque · **Classe** : Cuir
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 25 |
| RES magique | 9 |
| Poids | 0,5 kg |
| Durabilité | 340 |
| Pénalité de vol | 0% |
| Bonus | +8% discrétion en zone urbaine ; +3 AGI ; annule les dégâts de chute < 10 m |

## Acquisition & Chaînage économique
- **Source** : Craft — bourreliers de Freelia ; populaire chez les voleurs... pardon, les « récupérateurs indépendants ».
- **Recette** : 3× Cuir souple + 2× Fourrure courte + 1× Moustache de félin géant (drop `MOB_CAI_011-012`).
- **Prix** : 1 050 Yrds (achat) · 260 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Demi-masque au museau retroussé, hommage au premier Cait Sith qui aurait dérobé une clé de coffre au seigneur Imp — en plein banquet, sur ses genoux. Les moustaches synthétiques vibrent près des pièges. La guilde des marchands de Freelia le tolère : « au moins, on les voit venir ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_030 tete` · `!inspect ARM_TET_030` — GM : `!sys_give ARM_TET_030 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_030, 1)`
