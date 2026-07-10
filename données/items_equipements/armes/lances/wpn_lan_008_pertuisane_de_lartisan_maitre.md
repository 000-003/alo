# Pertuisane de l'Artisan-Maître

## Identification Cardinal
- **Item_ID** : `WPN_LAN_008`
- **Famille** : Lance · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 41 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 115 |
| Poids | 3,4 kg |
| Durabilité | 950 |
| Bonus | +11 STR, +3 VIT |

## Acquisition & Chaînage économique
- **Source** : Drop de MK-0 (`BOSS_LEP_DUN_001`, 8%) ; assemblage par le maître-forgeron de Brokkheim (`NPC_BRO_03`).
- **Recette** : 6× Mithril de Brokkheim + 4× Rouage + 3× Gemme de Granzam.
- **Prix** : 17 500 Yrds (achat) · 4 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chef-d'œuvre de l'ingénierie leprechaun : la tête est montée sur un mécanisme qui la fait vibrer à l'impact, doublant la profondeur de pénétration. Récupérée sur l'automate MK-0 de l'Atelier Englouti, elle porte encore les gravures d'origine du boss. On dit que c'est l'arme d'un ingénieur autant que d'un guerrier — et qu'elle se démonte pour l'entretien comme une horloge.

## Intégration Bot
- Joueur : `!equiper WPN_LAN_008` · `!inspect WPN_LAN_008` — GM : `!sys_give WPN_LAN_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LAN_008, 1)`
