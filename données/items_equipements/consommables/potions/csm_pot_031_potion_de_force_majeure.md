# Potion de Force Majeure

## Identification Cardinal
- **Item_ID** : `CSM_POT_031`
- **Catégorie** : Potion · **Type** : Buff (STR)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 30 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | +10% STR |
| Durée | 1 h |
| Cooldown | 5 s |
| Cumulable | NON — 1 buff potion + 1 buff nourriture max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 2× Piment-de-braise + 1× Racine d'ambre + 1× Poudre de gemme de Granzam + 1× fiole scellée *(alchimie)*
- **Prix** : 500 Yrds (achat) · 125 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La version « raid » de l'huile du berserker : dix pour cent de force pendant une heure entière, de quoi tenir un boss du début à la fin. Sa poudre de gemme lui donne un éclat rougeoyant et un prix qui dissuade de la gaspiller sur des mobs de passage. Les mêlées d'endgame la boivent en synchronisation, au signal du chef de raid.

## Intégration Bot
- Joueur : `!use CSM_POT_031` — GM : `!sys_give CSM_POT_031 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_031, 1)`
