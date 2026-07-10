# Titanite de Granzam

## Identification Cardinal
- **Item_ID** : `WPN_EP2_007`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 41 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 128 |
| Poids | 8,0 kg |
| Durabilité | 940 |
| Bonus | +11 STR, +4 DEF, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`) ; cœur de titanite tombé par Mithrandur (`BOSS_GNO_DUN_001`, 8%).
- **Recette** : 6× Granit de Granzam + 5× Mithril de Brokkheim + 3× Gemme de Granzam.
- **Prix** : 19 000 Yrds (achat) · 4 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Forgée autour d'un noyau de titanite extrait de la Mine de Mithril, cette épée pèse le poids d'une enclume et frappe comme un éboulement. Un seul Gnome sur cent possède la STR pour la porter sans traîner la pointe au sol. Mithrandur, gardien de la mine, en aurait béni la première — et maudit toutes les autres.

## Intégration Bot
- Joueur : `!equiper WPN_EP2_007` · `!inspect WPN_EP2_007` — GM : `!sys_give WPN_EP2_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP2_007, 1)`
