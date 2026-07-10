# Rempart de Granzam

## Identification Cardinal
- **Item_ID** : `WPN_BOU_005`
- **Famille** : Bouclier (pavois) · **Vitesse** : —
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 29 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| BLOC | 75 |
| Poids | 8,0 kg |
| Durabilité | 700 |
| Pénalité de vol | -6% |
| Bonus | +8 DEF, -2 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`) ; plaque tombée par le mini-boss (`MOB_GNO_025`, 8%). Main libre (`hand_off`).
- **Recette** : 6× Granit de Granzam + 3× Fer gnome + 1× Gemme de Granzam.
- **Prix** : 5 200 Yrds (achat) · 1 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Plus une porte de forteresse qu'un bouclier : le Rempart de Granzam couvre un Gnome de la tête aux pieds et sert de bélier à l'occasion. Les sapeurs avancent derrière en formation, indifférents aux projectiles qui s'y écrasent. On dit qu'aucun n'a jamais été percé — seulement enterré avec son porteur.

## Intégration Bot
- Joueur : `!equiper WPN_BOU_005 main` · `!inspect WPN_BOU_005` — GM : `!sys_give WPN_BOU_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BOU_005, 1)`
