# L'Épreuve des Deux Lames — `QST_T5_OSS_EPE_01`

## Identification
- **QST_ID** : `QST_T5_OSS_EPE_01`
- **Type** : Quête de titre T5 (maîtrise ultime, modèle Starburst Stream)
- **Skill débloqué** : `OSS_EPE_001` — Starburst Stream (T5)
- **Donneur** : `NPC_GAT_31` — Ferra, Maîtresse d'Armes (SKILL_MASTER Épée 1M)
- **Lieu de l'épreuve** : Arène de Gattan → gantelet enchaîné
- **Prérequis** : Niveau 45 · Maîtrise d'arme Épée 1M : **Avancé** · OSS T4 Épée maîtrisé · double maniement (`PAS_CBT` Dual Wielding)
- **Récompense** : 5 000 EXP · Titre **« Épéiste Noir »** (`!titre_set`) · OSS `OSS_EPE_001` (jamais achetable)

## Déroulement (étapes)
1. Ferra pose la règle : Starburst Stream est une combo de 16 coups à deux épées, sans respiration. On ne l'apprend pas — on prouve qu'on peut la *tenir*.
2. Débloquer le double maniement (passive Dual Wielding) et enchaîner un gantelet de trois adversaires sans jamais rompre la chaîne (Perfect Chain).
3. Épreuve finale : encaisser le Post-Motion Delay maximal (3,5 s T5) au pire moment et survivre — la maîtrise, c'est gérer la vulnérabilité, pas l'éviter.
4. La combo tenue jusqu'au bout, Ferra grave la technique.

## Dialogues (donneur)
- **Début** : « Seize coups. Deux lames. Zéro respiration. Ceux qui échouent, c'est toujours au quinzième — parce qu'ils ont eu peur du délai qui suit. Ne crains pas le vide après le coup. C'est là que vit l'épéiste. »
- **Fin** : « Tu n'as pas lâché au quinzième. Le noir des épéistes te va bien. Va, et que personne ne compte tes coups avant qu'ils soient finis. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_EPE_001` auprès de `NPC_GAT_31` → `SYS_GRANT_OSS(Avatar_ID, OSS_EPE_001)`.
- Chaînage skills : requiert la passive Dual Wielding (`PAS_CBT`, canon préservé) ; Post-Motion Delay T5 (invariant risk/reward de l'index skills).
- Canon SAO préservé (hommage Kirito). Titre activable par `!titre_set`.
