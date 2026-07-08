# Loup de l'Ombre Dansante

## Identification Cardinal
- **Item_ID** : `ARM_TET_042`
- **Slot** : Tête — Loup (demi-masque) · **Classe** : Tissu
- **Tier** : T3 · **Rareté** : Épique
- **Niveau requis** : 28 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 46 |
| RES magique | 34 (dont +18 vs Ténèbres) |
| Poids | 0,3 kg |
| Durabilité | 510 |
| Pénalité de vol | 0% |
| Bonus | +14% dégâts de magie de Ténèbres ; après une esquive parfaite, le prochain sort est gratuit (0 MP) |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — enchanteurs du Bazar des Ombres, sur présentation d'un contrat de duel gagné.
- **Recette** : 1× Essence d'ombre pure (drop `MOB_IMP_025`, mini-boss) + 4× Soie grise + 2× Gemme d'onyx.
- **Prix** : 5 800 Yrds (achat) · 1 450 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Ce loup de bal masqué est cousu dans l'ombre d'un danseur mort, prétend le folklore de Duskarn. La vérité du Cardinal est plus élégante encore : le masque échantillonne les mouvements d'esquive du porteur et les rejoue en micro-illusions. L'adversaire frappe toujours là où vous étiez, jamais là où vous êtes.

## Intégration Bot
- Joueur : `!equiper ARM_TET_042 tete` · `!inspect ARM_TET_042` — GM : `!sys_give ARM_TET_042 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_042, 1)`
