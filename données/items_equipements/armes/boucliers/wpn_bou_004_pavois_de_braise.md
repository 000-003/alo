# Pavois de Braise

## Identification Cardinal
- **Item_ID** : `WPN_BOU_004`
- **Famille** : Bouclier (pavois) · **Vitesse** : —
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 27 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| BLOC | 70 |
| Poids | 7,0 kg |
| Durabilité | 680 |
| Pénalité de vol | -6% |
| Bonus | +7 DEF, +3 résistance feu, -2 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune (`NPC_GAT_01`). Main libre (`hand_off`).
- **Recette** : 5× Obsidienne de Gattan + 3× Gemme de feu de Voulg + 1× Gemme de Granzam.
- **Prix** : 4 800 Yrds (achat) · 1 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un mur d'obsidienne assez haut pour s'accroupir entièrement derrière, veiné de gemme de feu qui le rend brûlant au toucher. Les gardes de Gattan l'enfoncent dans le sol pour former une barrière incandescente que peu osent franchir. Trop lourd pour voler correctement, il est fait pour tenir un terrain, pas pour le survoler.

## Intégration Bot
- Joueur : `!equiper WPN_BOU_004 main` · `!inspect WPN_BOU_004` — GM : `!sys_give WPN_BOU_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BOU_004, 1)`
