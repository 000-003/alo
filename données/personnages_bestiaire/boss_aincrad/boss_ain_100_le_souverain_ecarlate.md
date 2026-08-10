# Wiki ALfheim Online - Le Souverain Écarlate (Boss du Palier 100)

## 1. Lore et Histoire (Background)
Le Palier 100 — le **Palais Rubis** — est le sommet de New Aincrad, jamais atteint dans l'Aincrad d'origine (le jeu fut « terminé » au Palier 75, lorsque Kirito vainquit Kayaba). Ymir, en réintégrant le Château Flottant à ALfheim, a donc dû **écrire un boss de Palier 100 qui n'a jamais existé** : le Souverain Écarlate, une entité léguée par le code résiduel de Kayaba lui-même, gardienne du trône vide du créateur. Le vaincre est l'exploit ultime de la progression horizontale d'Aincrad, pendant de la Grand Quest verticale d'Yggdrasil.

## 2. Apparitions
- **Lieu d'apparition** : Palais Rubis, salle du trône, `ZONE_AIN_FLR_100` (sommet de New Aincrad).
- **Condition de rencontre** : les 99 paliers précédents nettoyés par le serveur (palier de front = 100) ; raid d'élite inscrit.

## 3. Statistiques RPG (Fandom Stats)
- **ID Monstre** : `BOSS_AIN_100`
- **Catégorie** : Floor Boss final (Palier 100 — server-first, apex d'Aincrad)
- **Niveau Estimé** : 115+ (comparable Thrym `BOSS_JOT_001` / Gardien du Dôme `BOSS_YGG_001`)
- **Hit Points (HP)** : 6 Barres (~7 500 000 HP).
- **STR** : 2 900 · **AGI** : 1 500 · **VIT** : 2 400.
- **Résistances** : adaptatives — encaisse un élément puis y devient résistant (force la diversité d'écoles). **Faiblesses** : aucune fixe (voir mécanique 4).

## 4. Mécaniques de Combat et Patterns
1. **Manteau d'Adaptation** : après ~15 % de dégâts d'un même type élémentaire, le Souverain y devient résistant (80 %) — le raid **doit alterner** les 10 écoles de magie et les familles d'OSS. Récompense directe d'un roster de skills large (les T5 `MAG_*_010`).
2. **Réplique du Système** : copie l'apparence et un OSS de l'avatar ayant le plus haut DPS, retournant ses propres coups contre le raid.
3. **Effondrement du Trône** : le sol du Palais Rubis se fracture par quadrants ; combinaison avec le vol forcé (endurance `PAS_EXP`).
4. **Phase finale — Le Vide du Créateur** : à la dernière barre, invulnérable sauf pendant une fenêtre courte ouverte uniquement par un **enchaînement multi-écoles parfait** (magie ultime + OSS T5), clin d'œil à la nécessité de « réécrire les règles » pour finir Aincrad.

## 5. Loot et Conséquences
- **Drops Directs** : aucun Yrd ; **conséquence de système** exclusivement (design anti-farm — boss apex, cf. `19_cdc_moteur_deterministe.md` D-DET-5).
- **Récompense de Système** : Titre serveur **« Conquérant d'Aincrad »** (`!titre_set`) au raid ; gravure permanente sur le **Monument des Épéistes** ; achèvement de la progression horizontale (pendant de la Grand Quest d'Yggdrasil).
- **Intégration Bot** : `!sys_spawn_boss [Group_ID] BOSS_AIN_100` · titre via système existant. Aucune commande nouvelle.
- **Fil méta** : le « trône vide de Kayaba » est un nœud méta — révélation réservée orchestrateur, jamais confirmée frontalement (règle D22).

### Parties Récoltables (D78)

> Boss apex anti-farm : **aucun item introduit** (respecte le « aucun Yrd » ci-dessus). D78 formalise ici uniquement le déclencheur déjà décrit — la récompense système reste ce qu'elle était.

| Partie | Seuil | Récompense liée | Attribution |
|---|---|---|---|
| Le Vide du Créateur (invulnérabilité rompue) | Dernière barre — fenêtre ouverte uniquement par un enchaînement multi-écoles parfait (§4.4) | Titre « Conquérant d'Aincrad » + gravure Monument des Épéistes | Raid inscrit ayant porté le coup dans la fenêtre |
