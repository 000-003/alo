# Couronne à Crocs

## Identification Cardinal
- **Item_ID** : `ARM_TET_035`
- **Slot** : Tête — Couronne · **Classe** : Maille
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 102 |
| RES magique | 38 |
| Poids | 1,9 kg |
| Durabilité | 860 |
| Pénalité de vol | -1% |
| Bonus | +6 STR, +6 AGI ; chaque kill de mob Bête octroie « Instinct » (+2% dégâts, cumulable ×5, 60s) |

## Acquisition & Chaînage économique
- **Source** : Craft — Gimli Griffe-Fer (`NPC_FRE_04`) ; exige un croc de chaque espèce alpha de la Savane.
- **Recette** : 5× Croc d'alpha (drops `MOB_CAI_020` à `MOB_CAI_025`, un de chaque) + 4× Maillon d'acier + 1× Or filé.
- **Prix** : 18 500 Yrds (achat) · 4 600 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chez les Cait Siths, on ne hérite pas cette couronne : on la complète. Cinq crocs, cinq chasses, cinq preuves — Gimli vérifie chaque trophée à la loupe et refuse un croc acheté « à l'odeur de l'Yrd ». La porter au conseil de Freelia donne le droit de parler avant les anciens.

## Intégration Bot
- Joueur : `!equiper ARM_TET_035 tete` · `!inspect ARM_TET_035` — GM : `!sys_give ARM_TET_035 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_035, 1)`
