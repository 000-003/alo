# Écu de Mithril

## Identification Cardinal
- **Item_ID** : `WPN_BOU_003`
- **Famille** : Bouclier (moyen) · **Vitesse** : —
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| BLOC | 32 |
| Poids | 3,2 kg |
| Durabilité | 460 |
| Pénalité de vol | -3% |
| Bonus | +4 DEF, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — maître-forgeron de Brokkheim (`NPC_BRO_01`). Main libre (`hand_off`).
- **Recette** : 3× Mithril de Brokkheim + 2× Laiton.
- **Prix** : 1 000 Yrds (achat) · 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le miracle leprechaun : la protection d'un écu de fer pour la moitié du poids, grâce au mithril de l'Atelier Englouti. Sa surface polie renvoie les sorts mineurs comme un miroir. Les vétérans le préfèrent pour les longues expéditions, où chaque kilo épargné se paie en distance parcourue.

## Intégration Bot
- Joueur : `!equiper WPN_BOU_003 main` · `!inspect WPN_BOU_003` — GM : `!sys_give WPN_BOU_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BOU_003, 1)`
