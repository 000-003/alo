# Heaume du Champion de la Caldeira

## Identification Cardinal
- **Item_ID** : `ARM_TET_017`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 115 |
| RES magique | 40 (dont +25 vs Feu) |
| Poids | 4,1 kg |
| Durabilité | 900 |
| Pénalité de vol | -5% |
| Bonus | +6 VIT ; réduit de 30% l'accumulation de la jauge de Surchauffe (D11) ; immunité aux sols de lave T1-T2 |

## Acquisition & Chaînage économique
- **Source** : Craft — Armurier Graz (`NPC_GAT_02`) ; le composant principal ne tombe que dans la Caldeira d'Obsidienne (`ZONE_SAL_DUN_001`).
- **Recette** : 2× Braise éternelle (drop `MOB_SAL_030-034`, mobs du donjon) + 5× Minerai d'obsidienne + 1× Cœur de magma.
- **Prix** : 19 000 Yrds (achat) · 4 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Conçu pour une seule chose : tenir debout devant Logi. La visière fendue en croix laisse passer juste assez d'air pour respirer sans cuire les poumons. On dit à Gattan qu'un guerrier qui possède ce heaume n'a plus le droit de reculer — la Caldeira connaît son visage.

## Intégration Bot
- Joueur : `!equiper ARM_TET_017 tete` · `!inspect ARM_TET_017` — GM : `!sys_give ARM_TET_017 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_017, 1)`
