# Masque du Silence Parfait

## Identification Cardinal
- **Item_ID** : `ARM_TET_044`
- **Slot** : Tête — Masque intégral · **Classe** : Cuir
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 95 |
| RES magique | 44 |
| Poids | 1,1 kg |
| Durabilité | 840 |
| Pénalité de vol | 0% |
| Bonus | +6 AGI ; réduit de 40% l'accumulation de la jauge de Vacarme (donjon Imp, D11) ; les cris des Hurleurs ne l'interrompent plus en incantation |

## Acquisition & Chaînage économique
- **Source** : Craft — Forgeronne Umbra (`NPC_DUS_02`) ; composants exclusifs de la Caverne des Hurleurs (`ZONE_IMP_DUN_001`).
- **Recette** : 3× Tympan du Hurleur (drop `MOB_IMP_030-034`, mobs du donjon) + 4× Membrane de chauve-souris + 1× Essence d'ombre pure.
- **Prix** : 18 000 Yrds (achat) · 4 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Conçu comme contre-mesure directe à Skreech : les tympans de ses propres créatures, retournés, annulent le vacarme au lieu de l'amplifier. Le porteur entend le monde comme à travers une neige épaisse. Umbra grave à l'intérieur une seule phrase : « Le silence aussi est une arme. Ne la pointe pas vers toi. »

## Intégration Bot
- Joueur : `!equiper ARM_TET_044 tete` · `!inspect ARM_TET_044` — GM : `!sys_give ARM_TET_044 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_044, 1)`
