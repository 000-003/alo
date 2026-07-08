# Serre-tête Diapason

## Identification Cardinal
- **Item_ID** : `ARM_TET_067`
- **Slot** : Tête — Serre-tête · **Classe** : Maille
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 17 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 28 |
| RES magique | 16 |
| Poids | 0,6 kg |
| Durabilité | 380 |
| Pénalité de vol | 0% |
| Bonus | +3 INT ; les mélodies ratées (fausse commande) ne consomment que 50% de la jauge ; affiche le tempo optimal en combat |

## Acquisition & Chaînage économique
- **Source** : Craft — luthiers de Lioda, branche « instruments portés ».
- **Recette** : 2× Acier chantant (drop `MOB_PUC_012-013`) + 1× Grelot de bronze + 1× Feutre souple.
- **Prix** : 1 450 Yrds (achat) · 362 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les deux branches d'acier chantant qui encadrent les tempes vibrent en LA parfait, en continu. Les bardes s'accordent dessus par ostéophonie — le crâne comme caisse de résonance. Les non-Pucas le trouvent insupportable au bout d'une heure ; les Pucas ne comprennent pas la question.

## Intégration Bot
- Joueur : `!equiper ARM_TET_067 tete` · `!inspect ARM_TET_067` — GM : `!sys_give ARM_TET_067 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_067, 1)`
