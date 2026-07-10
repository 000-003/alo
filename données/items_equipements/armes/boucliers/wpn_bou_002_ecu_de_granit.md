# Écu de Granit

## Identification Cardinal
- **Item_ID** : `WPN_BOU_002`
- **Famille** : Bouclier (moyen) · **Vitesse** : —
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| BLOC | 34 |
| Poids | 4,5 kg |
| Durabilité | 380 |
| Pénalité de vol | -3% |
| Bonus | +4 DEF, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`). Main libre (`hand_off`).
- **Recette** : 3× Granit de Granzam + 2× Fer gnome.
- **Prix** : 950 Yrds (achat) · 238 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une plaque de granit poli montée sur une âme de fer : lourd, oui, mais rien ne le fait plier. Les Gnomes des Steppes s'en servent en mur de boucliers, épaule contre épaule, pour recevoir les charges. On dit qu'un Écu de Granit bien tenu a déjà brisé plus de lances qu'il n'a encaissé de coups.

## Intégration Bot
- Joueur : `!equiper WPN_BOU_002 main` · `!inspect WPN_BOU_002` — GM : `!sys_give WPN_BOU_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BOU_002, 1)`
