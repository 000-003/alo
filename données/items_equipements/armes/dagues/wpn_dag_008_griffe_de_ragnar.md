# Griffe de Ragnar

## Identification Cardinal
- **Item_ID** : `WPN_DAG_008`
- **Famille** : Dague · **Vitesse** : rapide
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 38 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 92 |
| Poids | 0,8 kg |
| Durabilité | 790 |
| Bonus | +12 AGI, +3 VIT |

## Acquisition & Chaînage économique
- **Source** : Drop du Roi Béhémoth Ragnar (`BOSS_CAI_DUN_001`, 8%) ; montage par Brok (`NPC_FRE_07`).
- **Recette** : 5× Croc de béhémoth + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 15 500 Yrds (achat) · 3 875 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une seule griffe du Roi Béhémoth suffit à forger deux dagues jumelles ; on ne les vend jamais séparément à Freelia. La corne durcie garde le tranchant sans jamais s'émousser, et le porteur qui court à quatre appuis — comme le font les Cait Sith en chasse — frappe avec la force du fauve dont elle provient. Brok considère chaque Griffe de Ragnar comme un hommage rendu à la bête vaincue.

## Intégration Bot
- Joueur : `!equiper WPN_DAG_008` · `!inspect WPN_DAG_008` — GM : `!sys_give WPN_DAG_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_DAG_008, 1)`
