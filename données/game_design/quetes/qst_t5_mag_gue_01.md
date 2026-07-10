# La Racine qui Refleurit — `QST_T5_MAG_GUE_01`

## Identification
- **QST_ID** : `QST_T5_MAG_GUE_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_GUE_010` — Genesis Bloom
- **Donneur** : `NPC_ALN_70` — Selene, Maîtresse de la Guérison (SKILL_MASTER)
- **Lieu de l'épreuve** : Racines d'`ZONE_YGG_DUN_001` (base d'Yggdrasil, axe vertical)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_GUE_009` · Affinité Undine ≥ 80 · avoir déjà utilisé `MAG_GUE_006` (Revive)
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Main de la Genèse »** (`!titre_set`) · sort `MAG_GUE_010` (jamais achetable)

## Déroulement (étapes)
1. Selene confie qu'une racine d'Yggdrasil s'est flétrie — aucune magie de soin connue ne la ranime. Genesis Bloom n'existe que pour celui qui saura la faire refleurir.
2. Se rendre aux Racines (base du Dôme, `ZONE_YGG_DUN_001`) et diagnostiquer la corruption (chaîne de soin progressive, sans dégât offensif autorisé).
3. Maintenir un flux de guérison continu assez longtemps pour inverser la nécrose — la moindre interruption fait tout recommencer.
4. Quand la racine bourgeonne, Selene reconnaît la Genèse dans les mains de l'avatar et scelle le sort.

## Dialogues (donneur)
- **Début** : « Soigner une blessure, tout le monde finit par l'apprendre. Faire *renaître* ce qui était condamné, c'est autre chose. Une racine du Monde meurt sous le Dôme. Va lui rendre le printemps. Si tu y arrives, tu n'auras plus rien à apprendre de moi. »
- **Fin** : « Elle refleurit. Regarde tes mains — elles ne guérissent plus, elles *recommencent*. C'est le plus lourd des dons. Porte-le doucement. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_GUE_010` auprès de `NPC_ALN_70` → `SYS_GRANT_SPELL(Avatar_ID, MAG_GUE_010)`.
- Chaînage skills : prérequis d'usage de `MAG_GUE_006` (Revive, canon préservé, D59).
- Ancrage axe vertical `ZONE_YGG_DUN_001` (atlas) ; méta Racine effleurée sans révélation (verrou D22).
- Titre activable par `!titre_set`.
