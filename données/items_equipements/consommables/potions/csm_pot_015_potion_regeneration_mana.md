# Potion de Régénération de Mana

## Identification Cardinal
- **Item_ID** : `CSM_POT_015`
- **Catégorie** : Potion · **Type** : Mana (MP sur la durée)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Régénération de 25 MP/s pendant 12 s (300 MP au total) |
| Durée | 12 s |
| Cooldown | 20 s |
| Cumulable | NON — annulée par une potion de mana directe |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 3× Fleur-de-lune + 1× Mousse-de-source + 1× fiole de verre *(alchimie)*
- **Prix** : 200 Yrds (achat) · 50 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le choix des mages patients : plutôt qu'un afflux brutal, un ruisseau régulier de mana pendant douze secondes. On la boit en début de combat, jamais en urgence. Les invocateurs Puca la préfèrent nettement — leurs chants tiennent la durée exacte de l'effet, ce qui n'est sûrement pas un hasard de conception.

## Intégration Bot
- Joueur : `!use CSM_POT_015` — GM : `!sys_give CSM_POT_015 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_015, 1)`
