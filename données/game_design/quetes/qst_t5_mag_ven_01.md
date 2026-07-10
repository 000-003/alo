# Le Ciel qui se Retourne — `QST_T5_MAG_VEN_01`

## Identification
- **QST_ID** : `QST_T5_MAG_VEN_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_VEN_010` — Aerial Cataclysm
- **Donneur** : `NPC_SWI_71` — Zeph, Maître du Vent (SKILL_MASTER)
- **Lieu de l'épreuve** : Hautes Tours de `ZONE_SYL_CAP_001` (Swilvane) → Canopée `MOB_AIR_001-004`
- **Prérequis** : Niveau 45 · Maîtrise `MAG_VEN_009` · Affinité Sylph ≥ 80 · vol prolongé (`PAS_EXP`)
- **Récompense** : 5 000 EXP · Titre **« Seigneur des Tempêtes »** (`!titre_set`) · sort `MAG_VEN_010` (jamais achetable)

## Déroulement (étapes)
1. Zeph explique qu'un cataclysme aérien ne se lance pas depuis le sol : il faut *devenir* la tempête, au sommet des Hautes Tours, là où les courants se déchirent.
2. Atteindre le sommet en vol continu sans jamais toucher une plateforme (endurance de vol).
3. Survivre à trois assauts de la Canopée (`MOB_AIR_001-004`) en n'utilisant que la magie de Vent — chaque chute annule l'épreuve.
4. Au pic de la tempête, tracer la spirale de l'Aerial Cataclysm ; Zeph valide la maîtrise depuis la tour.

## Dialogues (donneur)
- **Début** : « Les Sylphes se croient maîtres du vent parce qu'ils volent. Sottise. On ne maîtrise pas une tempête — on lui ressemble assez pour qu'elle t'écoute. Monte. Et ne redescends pas avant d'avoir compris. »
- **Fin** : « Le ciel s'est retourné pour toi. Peu de Sylphes ont entendu ce silence-là au cœur de l'ouragan. Il est à toi, maintenant. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_VEN_010` auprès de `NPC_SWI_71` → `SYS_GRANT_SPELL(Avatar_ID, MAG_VEN_010)`.
- Épreuve d'endurance de vol : dépend de la passive `PAS_EXP` (vol prolongé) — cohérence chaînage skills.
- Chaînage écologique : mobs aériens partagés `MOB_AIR_001-004` (D8).
- Titre activable par `!titre_set`.
