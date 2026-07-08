# Capuche du Guetteur des Cimes

## Identification Cardinal
- **Item_ID** : `ARM_TET_004`
- **Slot** : Tête — Capuche · **Classe** : Cuir
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 16 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 30 |
| RES magique | 10 |
| Poids | 0,7 kg |
| Durabilité | 400 |
| Pénalité de vol | 0% |
| Bonus | +10% portée de détection (`!scan`) ; +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Récompense de quête répétable des vigies de Swilvane (patrouille frontalière) ; sinon craft tanneur.
- **Recette** : 3× Cuir épais (drop `MOB_SYL_012-013`) + 2× Plume rigide + 1× Teinture d'écorce.
- **Prix** : 1 400 Yrds (achat) · 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Portée par les sentinelles qui vivent des semaines dans la canopée frontalière, face au territoire Salamander. La visière de cuir coupe l'éblouissement du soleil levant — direction d'où viennent toujours les raids. Une entaille sur le rabat gauche signifie que le porteur a survécu à une attaque de nuit.

## Intégration Bot
- Joueur : `!equiper ARM_TET_004 tete` · `!inspect ARM_TET_004` — GM : `!sys_give ARM_TET_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_004, 1)`
