# Masque d'Illusion Mineure

## Identification Cardinal
- **Item_ID** : `ARM_TET_077`
- **Slot** : Tête — Masque · **Classe** : Tissu
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 23 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 44 |
| RES magique | 35 (dont +15 vs Illusion) |
| Poids | 0,3 kg |
| Durabilité | 530 |
| Pénalité de vol | 0% |
| Bonus | +12% puissance des illusions ; `!deguiser` : prend l'apparence d'un mob non-boss de la zone (10 min, rompu par toute attaque) |

## Acquisition & Chaînage économique
- **Source** : Craft — masquiers de Penwether, guilde des Visages Prêtés.
- **Recette** : 3× Éclat de miroir ancien + 2× Essence spectrale (drop `MOB_SPR_020-024`, `ZONE_SPR_HUNT_002`) + 1× Toile grise.
- **Prix** : 4 300 Yrds (achat) · 1 075 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le masque n'a pas de traits : il attend. La guilde des Visages Prêtés enseigne trois lois — jamais un visage de joueur vivant, jamais deux fois le même mob devant témoin, jamais d'illusion pour fuir une dette. Les infractions sont punies d'un an avec son *vrai* visage. Les Spriggans jurent que c'est la pire peine du code pénal.

## Intégration Bot
- Joueur : `!equiper ARM_TET_077 tete` · `!inspect ARM_TET_077` — GM : `!sys_give ARM_TET_077 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_077, 1)`
