# Calotte de Cendre

## Identification Cardinal
- **Item_ID** : `ARM_TET_010`
- **Slot** : Tête — Calotte · **Classe** : Tissu
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 9 |
| RES magique | 5 (dont +3 vs Feu) |
| Poids | 0,3 kg |
| Durabilité | 170 |
| Pénalité de vol | 0% |
| Bonus | +2 STR |

## Acquisition & Chaînage économique
- **Source** : Boutique d'équipement de Gattan (`ZONE_SAL_CAP_001`).
- **Recette** : 2× Toile grossière + 1× Cendre volcanique (récolte, périphérie de Gattan).
- **Prix** : 170 Yrds (achat) · 40 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le tissu est bouilli dans la cendre des pentes de Gattan jusqu'à devenir gris ardoise et légèrement ignifuge. Les recrues salamanders la portent pendant l'entraînement au lancer de sorts de feu — d'où son surnom de « calotte à sourcils », référence à ce qu'elle sauve le plus souvent.

## Intégration Bot
- Joueur : `!equiper ARM_TET_010 tete` · `!inspect ARM_TET_010` — GM : `!sys_give ARM_TET_010 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_010, 1)`
