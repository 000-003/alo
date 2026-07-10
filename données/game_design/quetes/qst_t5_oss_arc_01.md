# La Chasse de Sköll — `QST_T5_OSS_ARC_01`

## Identification
- **QST_ID** : `QST_T5_OSS_ARC_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_ARC_012` — Sköll's Hunt (T5)
- **Donneur** : `NPC_ALN_68` — Zephyrine, Maîtresse d'Armes (SKILL_MASTER Arc)
- **Lieu de l'épreuve** : Débarcadère & Canopée d'Alne (`ZONE_NEU_CAP_001`) → `MOB_AIR_001-004`
- **Prérequis** : Niveau 45 · Maîtrise d'arme Arc : **Avancé** · OSS T4 Arc maîtrisé
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Chasseur Céleste »** (`!titre_set`) · OSS `OSS_ARC_012` (jamais achetable)

## Déroulement (étapes)
1. Zephyrine raconte le mythe de Sköll, le loup qui poursuit le soleil : Sköll's Hunt est l'art d'atteindre une cible qui ne s'arrête jamais.
2. S'exercer au tir sur cibles mobiles de vitesse croissante, en menant le tir (anticipation de trajectoire).
3. Épreuve finale : abattre une volée de la Canopée (`MOB_AIR_001-004`) en vol, en un nombre-seuil de flèches consécutives sans manquer une cible.
4. La volée réduite, Zephyrine reconnaît le Chasseur Céleste.

## Dialogues (donneur)
- **Début** : « L'arc, c'est de la patience qui vole vite. Sköll poursuit le soleil depuis l'aube du monde et ne l'a jamais rattrapé — mais toi, tu vas devoir rattraper ce qui fuit. Vise devant. Toujours devant. »
- **Fin** : « Rien n'a touché le sol sans ta flèche d'abord. Sköll serait jaloux. Le ciel est ton terrain de chasse, maintenant. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_ARC_012` auprès de `NPC_ALN_68` → `SYS_GRANT_OSS(Avatar_ID, OSS_ARC_012)`.
- Chaînage éco : mobs aériens partagés `MOB_AIR_001-004` (D8) ; Débarcadère hub des 9 routes (D20).
- Canon Phantom Arrow préservé dans la famille. Titre activable par `!titre_set`.
