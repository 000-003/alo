# Sabre de Magma de Gattan

## Identification Cardinal
- **Item_ID** : `WPN_EP1_009`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 38 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 115 |
| Poids | 3,2 kg |
| Durabilité | 880 |
| Bonus | +8 STR, +4 résistance feu |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune (`NPC_GAT_01`) ; composant rare tombé par le boss de zone (`MOB_SAL_026`, 8%).
- **Recette** : 6× Gemme de feu de Voulg + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 16 000 Yrds (achat) · 4 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La lame n'est pas trempée : elle est maintenue en fusion permanente par une veine de gemme de feu enchâssée dans le dos du fil, si bien qu'elle laisse une traînée incandescente à chaque estoc. Seul un Salamander peut la tenir plus de quelques secondes sans que la garde ne lui brûle la paume. Kagemune n'en forge qu'une par saison, et exige en paiement un fragment tombé de la Caldeira elle-même.

## Intégration Bot
- Joueur : `!equiper WPN_EP1_009` · `!inspect WPN_EP1_009` — GM : `!sys_give WPN_EP1_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_009, 1)`
