# Excalibur — `QST_LEG_002`

## Identification
- **QST_ID** : `QST_LEG_002`
- **Type** : Grande Quête serveur (arme liée à l'âme)
- **Arme débloquée** : `WPN_LEG_002` — Excalibur, l'Épée Sainte (Épée 1M, T5)
- **Donneur** : `NPC_CANON_KIRITO` — Kirito (canonique errant, invulnérable C5)
- **Lieu de l'épreuve** : crevasse sous Alne → `ZONE_JOT_FLD_001` (Abysse de Jötunheimr) → `ZONE_JOT_RAID_001` (Trône de Thrym / Thrymheim), boss `BOSS_JOT_001` **Thrym**
- **Prérequis** : Niveau 46 · **Clé de Glace** (item-clé de `ZONE_JOT_FLD_001`, atlas — vol impossible) · groupe de raid
- **Récompense** : 10 000 EXP · `WPN_LEG_002` Excalibur (**liée à l'âme**, relique de serveur, toutes races)

## Déroulement (étapes)
1. Kirito confie avoir trouvé une crevasse sous Alne qui descend jusqu'au monde de glace : Thrym, le Roi des Géants, a volé Excalibur et s'en sert de **cœur énergétique** pour faire léviter son palais au-dessus de l'abysse.
2. Obtenir la **Clé de Glace** et descendre dans l'Abysse de Jötunheimr (`ZONE_JOT_FLD_001`) — le vol y est forcé à OFF (atlas L5) : progression au sol, sous le froid.
3. Traverser jusqu'au Trône de Thrym (`ZONE_JOT_RAID_001`) et abattre le raid-boss `BOSS_JOT_001` avant que Thrymheim n'ait accumulé assez d'énergie pour s'écraser sur Yggdrasil (menace d'effacement de serveur, minuterie narrative).
4. Thrym vaincu, son cœur se brise : Excalibur se libère de l'Arbre du Monde, **liée à l'âme** de celui qui la tire. Aura de lumière permanente (impossible à dissimuler).

## Dialogues (donneur)
- **Début** : « Il y a un trou sous Alne. Il descend jusqu'à un royaume de glace où un géant a planté une épée dans l'Arbre du Monde pour voler son énergie. Si on ne la reprend pas, tout Alfheim finit sous les glaces. J'ai besoin de gens qui n'ont pas froid aux yeux. Toi, ça ira ? »
- **Fin** : « Tu l'as tirée. Excalibur. Regarde cette lumière — plus personne ne pourra prétendre ne pas t'avoir vu venir. Prends-en soin. Le serveur entier a failli tomber pour elle. »

## Notes d'intégration
- Déblocage : récompense liée → IA `SYS_GRANT_ITEM(Avatar_ID, WPN_LEG_002, 1)` (bind-on-pickup) ; `!equiper WPN_LEG_002`. Aucune commande nouvelle.
- **Correction d'ID (étape 34)** : ancrée sur `ZONE_JOT_RAID_001` (atlas maître, Trône de Thrym) et non `ZONE_JOT_DUN_001` (ID fantôme corrigé dans la fiche arme).
- Froid Jötunheimr : `SYS_SET_ENV_HAZARD(ZONE_JOT_FLD_001, HAZARD/froid, …)` (extension D12) ; vol OFF (atlas L5).
- Chaînage : boss `BOSS_JOT_001` Thrym (`monstres/thrym_roi_des_geants.md`) ; Kirito canonique (invulnérabilité C5, réplique de départ).
