# Masse de Granit

## Identification Cardinal
- **Item_ID** : `WPN_MAS_002`
- **Famille** : Masse · **Vitesse** : lente
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 40 |
| Poids | 4,6 kg |
| Durabilité | 440 |
| Bonus | +4 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 4× Granit de Granzam + 2× Fer gnome.
- **Prix** : 1 100 Yrds (achat) · 275 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La tête est un bloc de granit brut à peine dégrossi, monté sur un manche renforcé de fer. Les Gnomes n'y voient aucune laideur : « une pierre, ça ne ment pas ». Contre les carapaces des créatures des Carrières Brisées, elle fait plus de dégâts que la plus fine des épées.

## Intégration Bot
- Joueur : `!equiper WPN_MAS_002` · `!inspect WPN_MAS_002` — GM : `!sys_give WPN_MAS_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_MAS_002, 1)`
