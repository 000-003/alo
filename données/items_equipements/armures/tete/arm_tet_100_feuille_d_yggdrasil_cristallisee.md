# Feuille d'Yggdrasil Cristallisée

## Identification Cardinal
- **Item_ID** : `ARM_TET_100`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Légendaire (unique serveur)
- **Niveau requis** : 48 · **Affinité raciale** : Toutes (+5% aux bonus, quelle que soit la race)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 200 |
| RES magique | 120 |
| Poids | 0,1 kg |
| Durabilité | Indestructible |
| Pénalité de vol | 0% — supprime la limite d'altitude de vol |
| Bonus | +10 à toutes les stats ; « Sève du Monde » : régénère 1% HP et MP/10s ; le porteur est visible sur la carte de tous les joueurs du serveur |

## Acquisition & Chaînage économique
- **Source** : Une seule feuille tombe de la canopée d'Yggdrasil (`ZONE_YGG_*`) par cycle serveur — à l'endroit exact où un joueur a accompli « un acte que l'Arbre juge digne d'ombre » (critère Cardinal non documenté, événement `SYS_PLANT_TREASURE`).
- **Recette** : Non craftable, non recyclable.
- **Prix** : Invendable, non échangeable — retourne à l'Arbre si son porteur reste déconnecté 30 jours.

## Lore (Encyclopédie d'Argo)
Yggdrasil ne perd pas ses feuilles ; il les *donne*, et il a très rarement envie. Cristallisée en tombant, la feuille garde la transparence verte de la canopée et le bruit du vent dans les hautes branches. La limite d'altitude — la grande frustration des joueurs d'ALO — cesse d'exister pour son porteur : l'Arbre reconnaît les siens et ouvre le ciel. Chaque détenteur entre dans l'Encyclopédie d'Argo à la page « Ceux que l'Arbre a nommés ». La page est courte.

## Intégration Bot
- Joueur : `!equiper ARM_TET_100 tete` · `!inspect ARM_TET_100` — GM : `!sys_give ARM_TET_100 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_100, 1)`
