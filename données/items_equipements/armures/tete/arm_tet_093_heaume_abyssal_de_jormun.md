# Heaume Abyssal de Jörmun

## Identification Cardinal
- **Item_ID** : `ARM_TET_093`
- **Slot** : Tête — Heaume · **Classe** : Maille (écailles)
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 44 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 138 |
| RES magique | 78 (dont +40 vs Eau) |
| Poids | 2,2 kg |
| Durabilité | 1 020 |
| Pénalité de vol | -1% |
| Bonus | +7 VIT ; jauge d'Apnée (D11) gelée sous 50% ; bioluminescence contrôlable (`!lumiere on/off`) |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Jörmun, le Léviathan des Abysses (`BOSS_UND_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 4× Écaille abyssale + 1× Vessie lumineuse.
- **Prix** : Revente 10 200 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
Forgé de trois écailles du front de Jörmun — la seule partie du Léviathan qui ait jamais vu la surface. L'intérieur reste rempli d'une eau que rien ne vide : le porteur respire dedans comme un poisson dans son bocal inversé. Les plongeurs du Gouffre l'appellent « la dette » : Jörmun prête son souffle, il ne le donne pas.

## Intégration Bot
- Joueur : `!equiper ARM_TET_093 tete` · `!inspect ARM_TET_093` — GM : `!sys_give ARM_TET_093 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_093, 1)`
