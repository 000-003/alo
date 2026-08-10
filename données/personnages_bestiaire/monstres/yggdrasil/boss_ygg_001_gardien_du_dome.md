# Wiki ALfheim Online - Le Gardien du Dôme (Boss de la Grand Quest d'Yggdrasil)

## 1. Lore et Histoire (Background)
Le Gardien du Dôme est le **boss final de la Grand Quest** d'Yggdrasil, le climax de tout l'endgame d'ALfheim. Là où les *Golden Knights* (cf. `golden_knights_yggdrasil.md`) sont l'essaim d'anticorps codé par l'Administrateur Oberon pour interdire l'ascension de l'Arbre du Monde, le Gardien en est le **noyau** : la dernière itération du Programme de Rétention, compilée pour ne jamais laisser un joueur atteindre le Sommet (`ZONE_YGG_TOP_001`) où fut jadis emprisonnée Asuna. Depuis la chute d'Oberon, The Seed a hérité de ce garde et l'a promu épreuve ultime : le vaincre, c'est prouver qu'un joueur peut réécrire une règle que même l'Administrateur croyait absolue.

## 2. Apparitions
- **Lieu d'apparition** : sommet du puits ascendant, `ZONE_YGG_DUN_001` (Dôme d'Yggdrasil, RAID Tier 8).
- **Condition de rencontre** : raid multi-guildes inscrit via `!dome_enter` / `SYS_LOG_RAID` (Dorn `NPC_ALN_12`, Sella `NPC_ALN_13`) ; n'apparaît qu'après avoir survécu à la saturation des Golden Knights.
- **Conséquence de victoire** : déverrouille `ZONE_YGG_TOP_001` (Sommet, safe) — victoire de la Grand Quest.

## 3. Statistiques RPG (Fandom Stats)
- **ID Monstre** : `BOSS_YGG_001`
- **Catégorie** : Raid Boss (Programme de Rétention — Grand Quest)
- **Niveau Estimé** : 110+ (Hors norme, comparable à Thrym `BOSS_JOT_001`)
- **Hit Points (HP)** : 6 Barres colossales (~6 000 000 HP).
- **STR** : 2 800 · **VIT (Défense)** : 2 600 · **AGI** : très élevée en phase de vol.
- **Résistances** : Toutes magies élémentaires (60 %). Ténèbres (absorbe).
- **Faiblesses** : Lumière (Dégâts ×2 — cohérence `MAG_LUM_010` Empyrean Dawn) ; dégâts contondants d'Armour Break (comme les Golden Knights).

## 4. Mécaniques de Combat et Patterns
1. **Reconvocation d'Essaim** : à chaque barre perdue, le Gardien rappelle une vague de Golden Knights (`MOB_YGG_00X`) avec la logique Swarm (spawn exponentiel sur DPS) — le raid doit *plafonner son DPS* pour ne pas saturer la salle, invariant risk/reward inversé.
2. **Verrou de Rétention** : projette une cage de lumière dorée sur un joueur aléatoire (référence à la cage d'Asuna) ; seul un allié au corps-à-corps peut briser les barreaux (contondant), sinon le joueur est éjecté du raid (mort logicielle).
3. **Chute du Puits** : inverse la gravité du puits ascendant — vol forcé, les joueurs sans endurance de vol (`PAS_EXP`) chutent.
4. **Phase d'Enrage (dernière barre)** : le Gardien fusionne avec les Golden Knights survivants en un colosse unique ; seule une magie de **Lumière de rang ultime** (`MAG_LUM_010`) ou un OSS T5 enchaîné peut percer son armure recompilée.

## 5. Loot et Conséquences
- **Drops Directs** : aucun Yrd, aucune arme (design anti-farm, comme les Golden Knights et Thrym).
- **Récompense de Système** : la mort du Gardien **désactive la Zone de Mort Procédurale** ; le Sommet (`ZONE_YGG_TOP_001`) s'ouvre définitivement au serveur. Titre serveur **« Vainqueur de la Grand Quest »** (`!titre_set`) attribué au raid inscrit. Le premier raid à le tuer grave son nom sur le Monument des Épéistes.
- **Intégration Bot** : `!sys_spawn_boss [Group_ID] BOSS_YGG_001` (GM) · `SYS_LOG_RAID(Raid_ID, Roster, Dome_Floor)` (IA) · déverrouillage zone via trigger de `T_ZONE_LINKS` (`YGG_DUN_001`→`YGG_TOP_001`). Aucune commande nouvelle.

### Parties Récoltables (D78)

> Boss apex anti-farm : **aucun item introduit** (respecte le « aucun Yrd, aucune arme » ci-dessus). D78 formalise ici uniquement le déclencheur déjà décrit.

| Partie | Seuil | Récompense liée | Attribution |
|---|---|---|---|
| Noyau Recompilé (Phase d'Enrage, fusion aux Golden Knights) | Dernière barre (~17 % HP, 1/6) — perçable uniquement par Lumière ultime `MAG_LUM_010` ou OSS T5 enchaîné (§4.4) | Désactivation Zone de Mort Procédurale + Titre « Vainqueur de la Grand Quest » + gravure Monument | Raid inscrit ayant porté le coup dans la fenêtre |
