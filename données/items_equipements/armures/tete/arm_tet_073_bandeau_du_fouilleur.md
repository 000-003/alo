# Bandeau du Fouilleur

## Identification Cardinal
- **Item_ID** : `ARM_TET_073`
- **Slot** : Tête — Bandeau · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 8 |
| RES magique | 5 |
| Poids | 0,2 kg |
| Durabilité | 160 |
| Pénalité de vol | 0% |
| Bonus | +2 AGI ; +5% chance de trouver un objet supplémentaire en fouillant les ruines (`!fouiller`) |

## Acquisition & Chaînage économique
- **Source** : Boutique des ruines basses de Penwether (`ZONE_SPR_CAP_001`).
- **Recette** : 2× Toile grise + 1× Fragment de poterie ancienne (récolte, périphérie de Penwether).
- **Prix** : 170 Yrds (achat) · 42 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Penwether est bâtie sur ses propres ruines, et ses habitants vivent de ce que le sol rend. Ce bandeau retient les cheveux et la poussière des fouilles ; le tesson cousu au front est un porte-bonheur — on dit qu'un fragment retrouve toujours son vase, et le fouilleur, son trésor.

## Intégration Bot
- Joueur : `!equiper ARM_TET_073 tete` · `!inspect ARM_TET_073` — GM : `!sys_give ARM_TET_073 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_073, 1)`
