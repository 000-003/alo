# Le Souffle de Jörmun — `QST_T5_MAG_EAU_01`

## Identification
- **QST_ID** : `QST_T5_MAG_EAU_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_EAU_010` — Leviathan's Wrath
- **Donneur** : `NPC_ALN_68` — Zephyrine, Maîtresse de l'Eau (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_UND_DUN_001` — Gouffre de Léviathan (`BOSS_UND_DUN_001` Jörmun)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_EAU_009` · Affinité Undine ≥ 80 · Potion d'Oxygène (`NPC_UND_07` Coralia)
- **Récompense** : 5 000 EXP · Titre **« Héraut des Abysses »** (`!titre_set`) · sort `MAG_EAU_010` (jamais achetable)

## Déroulement (étapes)
1. Zephyrine révèle que la Colère du Léviathan n'est pas une magie que l'on jette : c'est le courant même de Jörmun, qu'il faut apprendre à emprunter sans se noyer.
2. Descendre au Tier 5 sous-marin en gérant la **jauge d'Apnée** (D11) — chaque sort de feu est inerte ici, seule l'Eau répond.
3. Sous la pression du Gouffre, canaliser le courant de Jörmun sans qu'il vous emporte (épreuve de maintien à jauge basse).
4. Remonter la **Perle d'Abysse** ; Zephyrine y lit le tracé du sort et l'enseigne.

## Dialogues (donneur)
- **Début** : « L'eau douce obéit. L'abysse, elle, *décide*. Descends au Gouffre. Respire quand tu peux, écoute toujours. Le courant de Jörmun t'apprendra ce que je ne peux pas dire. »
- **Fin** : « Tu es remontée avec le souffle des abysses dans les mains. Peu reviennent. Aucun ne revient le même. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_EAU_010` auprès de `NPC_ALN_68` → `SYS_GRANT_SPELL(Avatar_ID, MAG_EAU_010)`.
- Épreuve pilotée par `SYS_SET_ENV_HAZARD(ZONE_UND_DUN_001, OXYGEN, …)` (jauge d'Apnée D11/D12) ; `!respirer` en poche d'air.
- Chaînage éco : Potion d'Oxygène de Coralia (`NPC_UND_07`) requise ; boss `BOSS_UND_DUN_001` Jörmun.
- Titre activable par `!titre_set`.
