# Potion de Régénération

## Identification Cardinal
- **Item_ID** : `CSM_POT_009`
- **Catégorie** : Potion · **Type** : Soin (HP sur la durée)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Régénération de 40 HP/s pendant 10 s (400 HP au total) |
| Durée | 10 s |
| Cooldown | 20 s |
| Cumulable | NON — annulée par une potion de soin directe |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 2× Herbe-de-vie + 1× Mousse-de-source + 1× fiole de verre *(alchimie)*
- **Prix** : 180 Yrds (achat) · 45 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Contrairement aux fioles qui claquent d'un coup, celle-ci diffuse sa chaleur lentement, comme une braise sous la peau. Les archers et les mages l'adorent : ils la boivent avant l'échange, pas pendant. Attention — une vraie potion de soin l'interrompt sèchement, donc c'est l'une ou l'autre, jamais les deux.

## Intégration Bot
- Joueur : `!use CSM_POT_009` — GM : `!sys_give CSM_POT_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_009, 1)`
