# Aegis de Mithril

## Identification Cardinal
- **Item_ID** : `WPN_BOU_006`
- **Famille** : Bouclier (pavois) · **Vitesse** : —
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 41 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| BLOC | 128 |
| Poids | 6,5 kg |
| Durabilité | 940 |
| Pénalité de vol | -6% |
| Bonus | +11 DEF, +4 RES magique, -2 AGI |

## Acquisition & Chaînage économique
- **Source** : Drop de MK-0 (`BOSS_LEP_DUN_001`, 8%) ; assemblage par le maître-forgeron de Brokkheim (`NPC_BRO_03`). Main libre (`hand_off`).
- **Recette** : 6× Mithril de Brokkheim + 4× Laiton + 3× Gemme de Granzam.
- **Prix** : 18 000 Yrds (achat) · 4 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Récupéré de la carapace frontale de l'automate MK-0, l'Aegis conserve un réseau de runes gravées qui absorbent une part de la magie reçue. Malgré sa taille de pavois, le mithril le rend maniable par un seul bras entraîné. Les tanks leprechauns le considèrent comme le sommet de leur art : une porte blindée que l'on peut porter au combat.

## Intégration Bot
- Joueur : `!equiper WPN_BOU_006 main` · `!inspect WPN_BOU_006` — GM : `!sys_give WPN_BOU_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BOU_006, 1)`
