# Excalibur, l'Épée Sainte

## Identification Cardinal
- **Item_ID** : `WPN_LEG_002`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 46 · **Affinité raciale** : aucune (relique du serveur, toutes races)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 210 |
| Poids | 5,5 kg |
| Durabilité | 1 200 (quasi indestructible) |
| Bonus | +14 STR, +5 à toutes les résistances |
| Capacité signature | **Aura Divine** : annule tous les malus d'obscurité et les débuffs de ténèbres du porteur et de son groupe proche ; poids algorithmique tel que seul un avatar aux stats maximales peut la lever. |

## Acquisition & Chaînage économique
- **Source** : Récompense de la quête serveur unique « Excalibur » (`QST_LEG_002`) — cœur énergétique du raid-boss Thrym (`BOSS_JOT_001`), au Trône de Thrym (`ZONE_JOT_RAID_001`, Thrymheim). **Liée à l'âme.**
- **Recette** : non craftable.
- **Prix** : non vendable en boutique (lié) · ~10 000 Yrds (revente exceptionnelle)

## Lore (Encyclopédie d'Argo)
L'arme absolue d'ALfheim. D'après le mythe implanté par le Cardinal, Excalibur fut arrachée à l'Arbre du Monde par le Roi des Géants Thrym pour bâtir son palais, devenant la source d'énergie de Jötunheimr. La récupérer exige de vider le donjon des géants et de survivre à sa propre garde. Une aura de lumière l'entoure en permanence — impossible à dissimuler, impossible à ignorer.

## Intégration Bot
- Joueur : `!equiper WPN_LEG_002` · `!inspect WPN_LEG_002` — GM : `!sys_give WPN_LEG_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_002, 1)`
