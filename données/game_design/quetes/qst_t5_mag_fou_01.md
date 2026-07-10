# Le Marteau du Ciel — `QST_T5_MAG_FOU_01`

## Identification
- **QST_ID** : `QST_T5_MAG_FOU_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_FOU_010` — Mjölnir Descent
- **Donneur** : `NPC_VOU_29` — Vork, Maître de la Foudre (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_IMP_DUN_001` — Caverne des Hurleurs (`BOSS_IMP_DUN_001` Skreech)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_FOU_009` · Affinité Imp ≥ 80
- **Récompense** : 5 000 EXP · Titre **« Marteau du Ciel »** (`!titre_set`) · sort `MAG_FOU_010` (jamais achetable)

## Déroulement (étapes)
1. Vork explique que la foudre a besoin de ciel — et qu'il n'y en a pas dans la Caverne des Hurleurs. Appeler Mjölnir *sous terre*, là où le tonnerre n'a pas de place, voilà l'épreuve.
2. Traverser la Caverne en gardant la **jauge de Vacarme** basse (mécanique Imp anti-MAJUSCULES) — chaque cri de rage nourrit Skreech.
3. Dans le silence forcé, concentrer la charge de Mjölnir jusqu'à ce que la roche elle-même serve de ciel de substitution (canalisation à haut risque).
4. La décharge accomplie, Vork reconnaît la Descente du Marteau et l'inscrit.

## Dialogues (donneur)
- **Début** : « N'importe quel gamin peut faire tomber la foudre d'un ciel d'orage. Toi, tu vas la faire tomber là où il n'y a pas de ciel. Dans la Caverne des Hurleurs. Et tu vas le faire en *silence*, sinon Skreech te mangera avant. »
- **Fin** : « Le tonnerre a obéi sous la terre. C'est contre nature, et c'est exactement pour ça que c'est à toi. Mjölnir tombe quand tu le décides, désormais. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_FOU_010` auprès de `NPC_VOU_29` → `SYS_GRANT_SPELL(Avatar_ID, MAG_FOU_010)`.
- Chaînage : boss `BOSS_IMP_DUN_001` Skreech, jauge de Vacarme (D10, anti-MAJUSCULES).
- Titre activable par `!titre_set`.
