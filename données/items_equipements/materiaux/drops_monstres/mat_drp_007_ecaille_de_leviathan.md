# Écaille de Léviathan

## Identification Cardinal
- **Item_ID** : `MAT_DRP_007`
- **Famille** : Drop de monstre · **Légendaire**
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `BOSS_UND_DUN_001` Jörmun (taux 2%) |
| Acheté par | `NPC_UND_07` à 2000 Yrds |
| Entre dans | `WPN_BAG_008`, `ARM_TET_095` (Jörmun) |
| Empilable | OUI (×99) |

## Lore
Jörmun, le Léviathan des profondeurs d'Underdark, possède une carapace quasi indestructible. Chaque écaille tombée lors des combats conserve sa propriété d'absorber les chocs les plus violents. Les maîtres armuriers les intègrent aux armures T4 pour offrir une protection inégalée. La surface iridescente de l'écaille dévie non seulement les lames mais aussi les sorts de faible intensité.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_007` — GM : `!sys_give MAT_DRP_007 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_007, Qty)`
