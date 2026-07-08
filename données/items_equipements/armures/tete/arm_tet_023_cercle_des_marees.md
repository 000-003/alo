# Cercle des Marées

## Identification Cardinal
- **Item_ID** : `ARM_TET_023`
- **Slot** : Tête — Cercle · **Classe** : Tissu
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 23 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 47 |
| RES magique | 36 (dont +15 vs Eau) |
| Poids | 0,4 kg |
| Durabilité | 540 |
| Pénalité de vol | 0% |
| Bonus | +12% dégâts de magie d'Eau ; +10% MP max ; régénère 1% MP/10s sous la pluie ou sous l'eau |

## Acquisition & Chaînage économique
- **Source** : Craft — enchanteurs de l'Archipel d'Écume.
- **Recette** : 2× Perle laiteuse + 3× Essence de courant (drop `MOB_UND_020-024`, Marais de Brume) + 1× Coquillage nacré.
- **Prix** : 4 200 Yrds (achat) · 1 050 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'anneau d'argent est creux et rempli d'eau de mer : on entend, oreille collée, le ressac perpétuel d'une marée miniature. Les hydromanciens synchronisent leurs incantations sur ce rythme. Un Cercle « à marée haute » — phénomène rare — doublerait la puissance du prochain sort, mais nul n'a su le prévoir.

## Intégration Bot
- Joueur : `!equiper ARM_TET_023 tete` · `!inspect ARM_TET_023` — GM : `!sys_give ARM_TET_023 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_023, 1)`
