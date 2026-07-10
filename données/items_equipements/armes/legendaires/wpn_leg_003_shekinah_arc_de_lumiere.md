# Shekinah, l'Arc de Lumière

## Identification Cardinal
- **Item_ID** : `WPN_LEG_003`
- **Famille** : Arc · **Vitesse** : moyenne
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 45 · **Affinité raciale** : Cait Sith (arme de la légende Sinon)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 160 |
| Poids | 1,6 kg |
| Durabilité | 1 100 |
| Bonus | +16 AGI, +5 INT |
| Capacité signature | **Flèches de Mana** : ne nécessite aucun carquois ; draine 5 MP par tir pour générer une flèche de lumière pure qui ignore 30% de la DEF physique de la cible. |

## Acquisition & Chaînage économique
- **Source** : Récompense de la quête serveur « Calibur » (`QST_LEG_003`), dans les glaces du Trône de Thrym (`ZONE_JOT_RAID_001`, Thrymheim). **Liée à l'âme.**
- **Recette** : non craftable.
- **Prix** : non vendable en boutique (lié) · ~10 000 Yrds (revente exceptionnelle)

## Lore (Encyclopédie d'Argo)
Arc technologique et magique récupéré par la légende Sinon lors de la quête Calibur, dans les glaces de Thrymheim. Il n'a pas besoin de flèches : il en fabrique, faites de lumière, à même le mana de son porteur. Les archers Cait Sith le vénèrent comme la preuve qu'un tir parfait peut plier les règles du monde — puisque celui-ci les a écrites à sa façon.

## Intégration Bot
- Joueur : `!equiper WPN_LEG_003` · `!inspect WPN_LEG_003` — GM : `!sys_give WPN_LEG_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_003, 1)`
