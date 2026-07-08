# Serre-tête du Traqueur

## Identification Cardinal
- **Item_ID** : `ARM_TET_029`
- **Slot** : Tête — Serre-tête · **Classe** : Cuir
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 6 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 12 |
| RES magique | 3 |
| Poids | 0,3 kg |
| Durabilité | 210 |
| Pénalité de vol | 0% |
| Bonus | +2 AGI ; les traces de mobs restent visibles 30s de plus (`!pister`) |

## Acquisition & Chaînage économique
- **Source** : Craft — bourreliers de Freelia.
- **Recette** : 2× Cuir souple (drop `MOB_CAI_001-002`) + 1× Griffe émoussée (drop `MOB_CAI_010`, Collines de l'Ouest).
- **Prix** : 320 Yrds (achat) · 80 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le bandeau dégage les oreilles — les vraies — pour ne rien perdre des bruits de la savane. La griffe cousue au centre pointe, dit-on, vers la dernière proie blessée. Les traqueurs cait siths débutants apprennent vite la nuance : elle pointe vers la proie, pas vers ce qui la chasse aussi.

## Intégration Bot
- Joueur : `!equiper ARM_TET_029 tete` · `!inspect ARM_TET_029` — GM : `!sys_give ARM_TET_029 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_029, 1)`
