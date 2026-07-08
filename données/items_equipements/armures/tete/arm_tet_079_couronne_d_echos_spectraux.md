# Couronne d'Échos Spectraux

## Identification Cardinal
- **Item_ID** : `ARM_TET_079`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 86 |
| RES magique | 58 (dont +25 vs Illusion, +15 vs Ténèbres) |
| Poids | 0,4 kg |
| Durabilité | 810 |
| Pénalité de vol | 0% |
| Bonus | +14% puissance des illusions ; à chaque esquive, laisse un « écho » (leurre immobile, 5s, les mobs le ciblent en priorité) |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — masquiers de Penwether, sur présentation d'un Masque d'Illusion Mineure usé jusqu'à 0 durabilité (preuve de pratique).
- **Recette** : 1× Couronne funéraire descellée (drop `MOB_SPR_026`, boss de zone) + 5× Essence spectrale + 2× Gemme d'améthyste.
- **Prix** : 16 200 Yrds (achat) · 4 050 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les échos ne sont pas des illusions : ce sont, murmure-t-on à Penwether, les secondes où le porteur *aurait pu* mourir, rendues visibles. La couronne les collectionne comme des perles. Les duellistes expérimentés savent qu'affronter un Spriggan couronné, c'est se battre contre tous ses passés simultanément.

## Intégration Bot
- Joueur : `!equiper ARM_TET_079 tete` · `!inspect ARM_TET_079` — GM : `!sys_give ARM_TET_079 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_079, 1)`
