# Masque de Suie

## Identification Cardinal
- **Item_ID** : `ARM_TET_039`
- **Slot** : Tête — Masque · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 22 |
| RES magique | 18 |
| Poids | 0,3 kg |
| Durabilité | 320 |
| Pénalité de vol | 0% |
| Bonus | +10% discrétion de nuit ; les sorts de Ténèbres ne révèlent plus la position du lanceur |

## Acquisition & Chaînage économique
- **Source** : Craft — Forgeronne Umbra (`NPC_DUS_02`), Corniche de la Forge Noire ; la suie provient de sa forge à froid.
- **Recette** : 3× Soie grise + 2× Suie de forge froide (vendue par `NPC_DUS_02`) + 1× Poussière de crépuscule.
- **Prix** : 980 Yrds (achat) · 245 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La forge d'Umbra brûle sans chaleur ni lumière — sa suie absorbe les deux. Un lanceur masqué de cette étoffe incante sans halo : l'éclair de ténèbres semble venir de nulle part. Umbra signe chaque masque d'une empreinte de pouce invisible, révélée uniquement sous lumière de pleine lune.

## Intégration Bot
- Joueur : `!equiper ARM_TET_039 tete` · `!inspect ARM_TET_039` — GM : `!sys_give ARM_TET_039 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_039, 1)`
