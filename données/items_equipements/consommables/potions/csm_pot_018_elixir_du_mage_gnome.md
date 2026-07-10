# Élixir du Mage Gnome

## Identification Cardinal
- **Item_ID** : `CSM_POT_018`
- **Catégorie** : Potion · **Type** : Mana (MP) + buff
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 26 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 500 MP + 5% INT pendant 30 min |
| Durée | 30 min (buff INT) |
| Cooldown | 15 s |
| Cumulable | NON — compte comme le buff potion unique |

## Acquisition & Chaînage économique
- **Source** : boutique de Granzam (`ZONE_GNO_CAP_001`) / craft alchimiste Gnome
- **Recette** : 4× Fleur-de-lune + 1× Poudre de gemme de Granzam + 1× fiole scellée *(alchimie)*
- **Prix** : 650 Yrds (achat) · 162 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les Gnomes n'admettent pas qu'on sépare la magie de l'ingénierie, et cet élixir le prouve : il restaure le mana *et* aiguise l'esprit, comme on huile un mécanisme. Sa poudre de gemme lui donne un léger scintillement en suspension. Les artificiers de Granzam en boivent avant les longues sessions de calcul runique — l'équivalent local d'un café très fort.

## Intégration Bot
- Joueur : `!use CSM_POT_018` — GM : `!sys_give CSM_POT_018 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_018, 1)`
