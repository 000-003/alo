# Sabre de Braise

## Identification Cardinal
- **Item_ID** : `WPN_EP1_003`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 34 |
| Poids | 2,8 kg |
| Durabilité | 380 |
| Bonus | +3 STR |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune, maître-forgeron de Gattan (`NPC_GAT_01`).
- **Recette** : 4× Acier de braise + 2× Obsidienne de Gattan.
- **Prix** : 1 100 Yrds (achat) · 275 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Trempée trois fois dans la lave de la Désolation de Magma, la lame conserve une chaleur résiduelle qui fait grésiller la pluie à son contact. Kagemune refuse de la vendre à quiconque n'a jamais mis les pieds dans la Caldeira — « une braise, ça se mérite ». On la reconnaît à la ligne orange qui court le long du fil, souvenir du bain de feu.

## Intégration Bot
- Joueur : `!equiper WPN_EP1_003` · `!inspect WPN_EP1_003` — GM : `!sys_give WPN_EP1_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_003, 1)`
