# Casque d'Écaille Abyssale

## Identification Cardinal
- **Item_ID** : `ARM_TET_024`
- **Slot** : Tête — Casque · **Classe** : Cuir (écailles)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 27 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 55 |
| RES magique | 28 (dont +18 vs Eau) |
| Poids | 1,3 kg |
| Durabilité | 580 |
| Pénalité de vol | -1% |
| Bonus | +4 VIT ; réduit de 20% la consommation de la jauge d'Apnée (D11) |

## Acquisition & Chaînage économique
- **Source** : Craft — tanneurs de l'Archipel d'Écume ; composants exclusifs du Gouffre de Léviathan (`ZONE_UND_DUN_001`).
- **Recette** : 5× Écaille abyssale (drop `MOB_UND_030-034`, mobs du donjon sous-marin) + 2× Cuir traité + 1× Essence de courant.
- **Prix** : 5 500 Yrds (achat) · 1 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les écailles proviennent des créatures qui nagent dans le noir du Gouffre, sous la zone de bioluminescence. Assemblées, elles conservent leur instinct : le casque se plaque de lui-même contre le crâne quand la pression monte. Les plongeurs disent qu'il « respire à votre place » — à moitié une image.

## Intégration Bot
- Joueur : `!equiper ARM_TET_024 tete` · `!inspect ARM_TET_024` — GM : `!sys_give ARM_TET_024 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_024, 1)`
