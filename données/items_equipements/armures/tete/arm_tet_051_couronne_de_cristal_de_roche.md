# Couronne de Cristal de Roche

## Identification Cardinal
- **Item_ID** : `ARM_TET_051`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T3 · **Rareté** : Épique
- **Niveau requis** : 28 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 44 |
| RES magique | 40 (dont +16 vs Terre) |
| Poids | 0,9 kg |
| Durabilité | 530 |
| Pénalité de vol | -1% |
| Bonus | +12% dégâts de magie de Terre ; +10% MP max ; `!scan` révèle les filons de minerai dans la zone |

## Acquisition & Chaînage économique
- **Source** : Craft — géomanciens de Granzam ; le cristal central est un drop rare du golem de cristal.
- **Recette** : 1× Cœur de cristal parfait (drop `MOB_GNO_025`, mini-boss golem) + 3× Cristal luminescent + 1× Fil d'argent.
- **Prix** : 5 900 Yrds (achat) · 1 475 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le cristal central continue de croître, d'un millimètre par saison, en absorbant le mana du porteur. Les géomanciens léguent leur couronne à leur apprenti : certaines, vieilles de « générations » de joueurs, forment de véritables géodes. Le Cardinal les répertorie individuellement, comme des arbres remarquables.

## Intégration Bot
- Joueur : `!equiper ARM_TET_051 tete` · `!inspect ARM_TET_051` — GM : `!sys_give ARM_TET_051 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_051, 1)`
