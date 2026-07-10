# Crest of Yggdrasil, la Rapière du Blason

## Identification Cardinal
- **Item_ID** : `WPN_LEG_004`
- **Famille** : Rapière · **Vitesse** : rapide
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 44 · **Affinité raciale** : Undine (chef-d'œuvre légué à Asuna)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 145 |
| Poids | 1,3 kg |
| Durabilité | 1 200 |
| Bonus | +16 AGI, +5 RES magique |
| Capacité signature | **Fil du Rosaire** : +25% de vitesse d'attaque et hitbox si fine qu'elle permet d'enchaîner l'OSS *Mother's Rosario* sans friction de l'air. |

## Acquisition & Chaînage économique
- **Source** : Quête de forge unique « Le Legs de la Dormeuse » (`QST_LEG_004`) par la maître-artisane Lisbeth (canon) ; prérequis = titre « Épée Absolue » (`QST_T5_OSS_RAP_01`, héritage de l'OSS de Yuuki). **Liée à l'âme.**
- **Recette** : non craftable en boutique — commande unique (alliage de cristal d'eau pur et d'argent).
- **Prix** : non vendable en boutique (lié) · ~10 000 Yrds (revente exceptionnelle)

## Lore (Encyclopédie d'Argo)
Rapière d'artisanat absolu, forgée par Lisbeth pour Asuna après que celle-ci eut hérité de l'Original Sword Skill de Yuuki. Sa lame, alliage de cristal d'eau pur et d'argent, est si fine qu'elle semble trancher l'air lui-même sans le sentir. Les duellistes Undine y voient l'incarnation du legs de la Dormeuse — une arme qui se transmet comme une promesse, jamais comme un butin.

## Intégration Bot
- Joueur : `!equiper WPN_LEG_004` · `!inspect WPN_LEG_004` — GM : `!sys_give WPN_LEG_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_004, 1)`
