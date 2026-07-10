# Croc de Freelia

## Identification Cardinal
- **Item_ID** : `WPN_DAG_002`
- **Famille** : Dague · **Vitesse** : rapide
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 11 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 24 |
| Poids | 0,7 kg |
| Durabilité | 300 |
| Bonus | +4 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Brok de Freelia (`NPC_FRE_07`).
- **Recette** : 3× Croc de béhémoth + 1× Cuir de Freelia.
- **Prix** : 850 Yrds (achat) · 213 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Taillée directement dans un croc de béhémoth, elle garde le fil naturel de l'ivoire, plus tranchant que bien des aciers. Les chasseurs Cait Sith en portent une paire, une par botte, pour achever le gibier acculé. Un croc de trophée devient ainsi l'arme qui a tué la bête suivante — une boucle que les dompteurs trouvent poétique.

## Intégration Bot
- Joueur : `!equiper WPN_DAG_002` · `!inspect WPN_DAG_002` — GM : `!sys_give WPN_DAG_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_DAG_002, 1)`
