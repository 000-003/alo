# Casque du Fossoyeur d'Abîmes

## Identification Cardinal
- **Item_ID** : `ARM_TET_053`
- **Slot** : Tête — Casque · **Classe** : Maille
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 98 |
| RES magique | 42 |
| Poids | 2,6 kg |
| Durabilité | 880 |
| Pénalité de vol | -3% |
| Bonus | +6 VIT ; vision dans le noir total ; immunité aux gaz de mine ; `!scan` détecte les cavités cachées |

## Acquisition & Chaînage économique
- **Source** : Craft — ateliers de la Mine de Mithril Abandonnée ; les plans sont gravés sur les parois de l'étage 2 du donjon (`ZONE_GNO_DUN_001`).
- **Recette** : 4× Alliage de mithril résiduel (drop `MOB_GNO_030-034`, mobs du donjon) + 2× Cristal luminescent + 2× Cuir traité.
- **Prix** : 18 500 Yrds (achat) · 4 625 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'équipement des équipes qui redescendent dans la Mine Abandonnée chercher les corps — de pixels — des expéditions perdues. Le masque respiratoire intégré filtre ce que la mine exhale. Les Fossoyeurs ont une règle : on ne prononce pas le nom de Mithrandur sous la surface. Il écoute par les filons.

## Intégration Bot
- Joueur : `!equiper ARM_TET_053 tete` · `!inspect ARM_TET_053` — GM : `!sys_give ARM_TET_053 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_053, 1)`
