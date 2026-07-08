# Masque de l'Opéra Muet

## Identification Cardinal
- **Item_ID** : `ARM_TET_071`
- **Slot** : Tête — Masque · **Classe** : Cuir
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 92 |
| RES magique | 48 |
| Poids | 0,8 kg |
| Durabilité | 830 |
| Pénalité de vol | 0% |
| Bonus | +6 AGI ; immunité au Silence ; les mélodies peuvent être « mimées » (aucun message requis, coût de jauge +50%) |

## Acquisition & Chaînage économique
- **Source** : Craft — maîtres masquiers de Lioda ; composants exclusifs de l'Amphithéâtre Oublié (`ZONE_PUC_DUN_001`).
- **Recette** : 3× Voile de spectre (drop `MOB_PUC_030-034`, mobs du donjon) + 2× Cuir blanc + 1× Larme de résine.
- **Prix** : 17 800 Yrds (achat) · 4 450 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'Amphithéâtre Oublié fut condamné après la « Première sans applaudissements » — une représentation dont personne, dit le lore, n'est ressorti bruyant. Ce masque blanc en perpétue l'art : l'opéra intégralement mimé. Contre Ondaro, qui coupe la voix des intrus, c'est moins un hommage qu'une assurance-vie.

## Intégration Bot
- Joueur : `!equiper ARM_TET_071 tete` · `!inspect ARM_TET_071` — GM : `!sys_give ARM_TET_071 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_071, 1)`
