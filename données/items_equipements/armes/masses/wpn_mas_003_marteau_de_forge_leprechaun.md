# Marteau de Forge Leprechaun

## Identification Cardinal
- **Item_ID** : `WPN_MAS_003`
- **Famille** : Masse · **Vitesse** : lente
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 38 |
| Poids | 4,2 kg |
| Durabilité | 460 |
| Bonus | +4 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — maître-forgeron de Brokkheim (`NPC_BRO_01`).
- **Recette** : 4× Laiton + 2× Rouage.
- **Prix** : 1 050 Yrds (achat) · 263 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un marteau de forge assez lourd pour battre le mithril — et donc pour briser un genou. Les Leprechauns l'utilisent d'abord à l'atelier, ensuite au combat, sans changer d'outil. Sa tête plate étourdit là où une pointe percerait, ce qui en fait l'arme préférée de qui préfère capturer que tuer.

## Intégration Bot
- Joueur : `!equiper WPN_MAS_003` · `!inspect WPN_MAS_003` — GM : `!sys_give WPN_MAS_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_MAS_003, 1)`
