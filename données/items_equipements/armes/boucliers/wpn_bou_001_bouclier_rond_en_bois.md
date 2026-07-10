# Bouclier Rond en Bois

## Identification Cardinal
- **Item_ID** : `WPN_BOU_001`
- **Famille** : Bouclier (petit) · **Vitesse** : —
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| BLOC | 14 |
| Poids | 2,0 kg |
| Durabilité | 200 |
| Pénalité de vol | -1% |
| Bonus | +2 DEF |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`) — stock de départ. Se tient en main libre (`hand_off`).
- **Recette** : 3× Bois d'if + 1× Fer commun.
- **Prix** : 180 Yrds (achat) · 45 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une rondache de planches cerclées de fer, le premier rempart de tout aventurier. Elle n'arrête pas grand-chose, mais un coup dévié vaut mieux qu'un coup reçu. Légère au point de ne presque pas gêner le vol, elle finit souvent fendue avant le Palier 2 — et rachetée sans regret.

## Intégration Bot
- Joueur : `!equiper WPN_BOU_001 main` · `!inspect WPN_BOU_001` — GM : `!sys_give WPN_BOU_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BOU_001, 1)`
