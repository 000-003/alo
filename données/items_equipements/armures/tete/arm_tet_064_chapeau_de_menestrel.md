# Chapeau de Ménestrel

## Identification Cardinal
- **Item_ID** : `ARM_TET_064`
- **Slot** : Tête — Chapeau · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 7 |
| RES magique | 6 |
| Poids | 0,2 kg |
| Durabilité | 150 |
| Pénalité de vol | 0% |
| Bonus | +2 CHA ; +5% durée des buffs musicaux |

## Acquisition & Chaînage économique
- **Source** : Boutique de la Grande Scène de Lioda (`ZONE_PUC_CAP_001`).
- **Recette** : 2× Feutre souple + 1× Plume de geai chanteur (drop `MOB_PUC_001-002`, périphérie de Lioda).
- **Prix** : 165 Yrds (achat) · 41 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le couvre-chef des débutants de Lioda, à large bord pour saluer bas. La plume vibre en résonance avec la voix du porteur et « arrondit » les fausses notes — d'un demi-ton, pas plus. Les maîtres de la Grande Scène le disent sans méchanceté : ce chapeau applaudit toujours, c'est bien son seul défaut.

## Intégration Bot
- Joueur : `!equiper ARM_TET_064 tete` · `!inspect ARM_TET_064` — GM : `!sys_give ARM_TET_064 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_064, 1)`
