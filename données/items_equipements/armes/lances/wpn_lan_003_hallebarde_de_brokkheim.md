# Hallebarde de Brokkheim

## Identification Cardinal
- **Item_ID** : `WPN_LAN_003`
- **Famille** : Lance · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Leprechaun (+5% aux bonus si Leprechaun)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 32 |
| Poids | 3,0 kg |
| Durabilité | 380 |
| Bonus | +3 STR |

## Acquisition & Chaînage économique
- **Source** : Craft — maître-forgeron de Brokkheim (`NPC_BRO_01`).
- **Recette** : 3× Laiton + 2× Rouage + 1× Bois d'if.
- **Prix** : 1 000 Yrds (achat) · 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Trois armes en une : pointe pour percer, tranchant pour couper, crochet pour désarçonner. Les Leprechauns y ont ajouté un mécanisme de blocage qui verrouille la tête sur la hampe au dixième de tour. Polyvalente jusqu'à l'excès, elle demande de l'entraînement — mais celui qui la maîtrise n'a jamais le mauvais outil en main.

## Intégration Bot
- Joueur : `!equiper WPN_LAN_003` · `!inspect WPN_LAN_003` — GM : `!sys_give WPN_LAN_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LAN_003, 1)`
