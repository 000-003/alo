# Maillet de MK-0

## Identification Cardinal
- **Item_ID** : `WPN_MAS_006`
- **Famille** : Masse · **Vitesse** : lente
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 41 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 128 |
| Poids | 6,2 kg |
| Durabilité | 940 |
| Bonus | +11 STR, +4 DEF, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Drop de MK-0 (`BOSS_LEP_DUN_001`, 8%) ; remontage par le maître-forgeron de Brokkheim (`NPC_BRO_03`).
- **Recette** : 6× Mithril de Brokkheim + 4× Rouage + 3× Gemme de Granzam.
- **Prix** : 18 500 Yrds (achat) · 4 625 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le bras-marteau de l'automate MK-0, démonté et remonté sur un manche pour usage humanoïde : à l'intérieur, un piston hydraulique se recharge à chaque armé et libère toute sa force à l'impact. Les Leprechauns disent qu'ils n'ont « rien inventé, juste récupéré » — mais nul autre atelier ne saurait le réparer. Un coup à pleine charge sonne comme un coup de bélier.

## Intégration Bot
- Joueur : `!equiper WPN_MAS_006` · `!inspect WPN_MAS_006` — GM : `!sys_give WPN_MAS_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_MAS_006, 1)`
