# Visière de MK-0

## Identification Cardinal
- **Item_ID** : `ARM_TET_097`
- **Slot** : Tête — Visière · **Classe** : Plaque
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 44 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 140 |
| RES magique | 70 |
| Poids | 1,8 kg |
| Durabilité | 1 150 |
| Pénalité de vol | -1% |
| Bonus | +8 DEX ; affiche les HP exacts, résistances et patterns d'attaque des mobs ciblés (`!analyser`) ; +10% qualité de craft |

## Acquisition & Chaînage économique
- **Source** : Drop direct — MK-0, l'Automate Directeur (`BOSS_LEP_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 2× Fragment de fer météorique + 1× Cristal-processeur endommagé.
- **Prix** : Revente 10 600 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
L'organe optique de l'Automate Directeur, encore fonctionnel : il continue d'analyser tout ce qu'il voit, en silence, pour un atelier qui n'existe plus. La visière affiche parfois une ligne que personne n'a demandée — « PRODUCTION : EN RETARD » — et les maîtres de Brokkheim se surprennent à accélérer le geste. MK-0 dirige encore, un porteur à la fois.

## Intégration Bot
- Joueur : `!equiper ARM_TET_097 tete` · `!inspect ARM_TET_097` — GM : `!sys_give ARM_TET_097 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_097, 1)`
