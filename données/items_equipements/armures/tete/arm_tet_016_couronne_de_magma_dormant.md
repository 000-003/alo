# Couronne de Magma Dormant

## Identification Cardinal
- **Item_ID** : `ARM_TET_016`
- **Slot** : Tête — Couronne · **Classe** : Plaque
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 92 |
| RES magique | 48 (dont +20 vs Feu, -10 vs Glace) |
| Poids | 2,4 kg |
| Durabilité | 820 |
| Pénalité de vol | -2% |
| Bonus | +15% dégâts de magie de Feu ; les attaques subies au corps-à-corps renvoient 5% de dégâts de Feu |

## Acquisition & Chaînage économique
- **Source** : Craft d'élite — Maître-Forgeron Kagemune (`NPC_GAT_01`), Grande Forge de Gattan.
- **Recette** : 1× Cœur de magma (drop `MOB_SAL_026`, boss de zone) + 4× Minerai d'obsidienne + 2× Gemme rubis (import Gnome, Granzam).
- **Prix** : 17 500 Yrds (achat) · 4 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une veine de lave court à l'intérieur du cercle d'obsidienne, maintenue liquide par l'enchantement de Kagemune. Elle pulse lentement, comme un cœur. Les Undines refusent de s'asseoir à côté d'un porteur de cette couronne — la buée sur leurs écailles les trahit avant tout mot.

## Intégration Bot
- Joueur : `!equiper ARM_TET_016 tete` · `!inspect ARM_TET_016` — GM : `!sys_give ARM_TET_016 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_016, 1)`
