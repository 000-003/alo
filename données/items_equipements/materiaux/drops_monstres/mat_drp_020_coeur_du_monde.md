# Cœur du Monde

## Identification Cardinal
- **Item_ID** : `MAT_DRP_020`
- **Famille** : Drop de monstre · **Mythique**
- **Tier** : T5

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `BOSS_UND_DUN_001` Jörmun ou boss d'axe vertical `[TODO]` (taux 0.5%) |
| Acheté par | `NPC_ALN_98` à 10000 Yrds |
| Entre dans | `WPN_LEG_001`, `WPN_LEG_004` (craft T5 lié) |
| Empilable | OUI (×99) |

## Lore
Le Cœur du Monde est le noyau d'un titan primordial vaincu par les premiers dieux. Cette gemme pulsante contient l'énergie brute de la création et dégage une aura qui tord la réalité autour d'elle. Les oracles d'Isilde la conservent dans des coffres scellés sous plusieurs enceintes antimagiques. Forger une arme légendaire T5 sans ce composant est impossible. La légende dit qu'il existe moins de sept Cœurs du Monde sur tout le continent.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_020` — GM : `!sys_give MAT_DRP_020 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_020, Qty)`
