# Diapason de Silence

## Identification Cardinal
- **Item_ID** : `WPN_BAG_007`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 28 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 60 |
| Poids | 0,7 kg |
| Durabilité | 500 |
| Bonus | +7 INT, +2 RES magique |

## Acquisition & Chaînage économique
- **Source** : Craft — luthier-forgeron de Lioda (`NPC_LIO_04`) ; corde tombée par Ondaro (`BOSS_PUC_DUN_001`, 8%).
- **Recette** : 4× Argent sonore + 3× Corde de résonance + 1× Gemme de Granzam.
- **Prix** : 5 000 Yrds (achat) · 1 250 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Paradoxe de Lioda : une baguette de mage-musicien conçue pour imposer le silence. Un cast bien mené coupe le son autour de la cible, brisant les incantations chantées et déréglant les mécaniques de tempo. Les Pucas la manient avec réticence — étouffer la musique est chez eux un geste presque sacrilège, réservé aux ennemis qui « chantent faux ».

## Intégration Bot
- Joueur : `!equiper WPN_BAG_007` · `!inspect WPN_BAG_007` — GM : `!sys_give WPN_BAG_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_007, 1)`
