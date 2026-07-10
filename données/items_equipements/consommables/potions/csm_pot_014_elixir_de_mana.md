# Élixir de Mana

## Identification Cardinal
- **Item_ID** : `CSM_POT_014`
- **Catégorie** : Potion · **Type** : Mana (MP)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 800 MP |
| Durée | Instantané |
| Cooldown | 15 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : maître-alchimiste de capitale (craft) / marché noir
- **Recette** : 3× Éclat de saphir brut + 1× Gemme de mana (Granzam) + 1× flacon de cristal *(alchimie experte)*
- **Prix** : 1 800 Yrds (achat) · 450 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un liquide qui ne cesse jamais de tournoyer sur lui-même, comme s'il refusait de rester immobile. Sa fabrication réclame une gemme de mana taillée à Granzam, ce qui explique son prix indécent. Les archimages d'endgame en gardent une réserve secrète — car un mage à court de mana au mauvais moment, c'est un raid qui s'effondre.

## Intégration Bot
- Joueur : `!use CSM_POT_014` — GM : `!sys_give CSM_POT_014 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_014, 1)`
