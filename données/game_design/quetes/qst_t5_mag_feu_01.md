# La Braise du Dernier Géant — `QST_T5_MAG_FEU_01`

## Identification
- **QST_ID** : `QST_T5_MAG_FEU_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_FEU_010` — Ragnarök Flame
- **Donneur** : `NPC_GAT_31` — Ferra, Maîtresse du Feu (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_SAL_DUN_001` — Caldeira d'Obsidienne (`BOSS_SAL_DUN_001` Logi)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_FEU_009` (Solar Flare) · Affinité Salamander ≥ 80
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Porteur de la Flamme Crépusculaire »** (`!titre_set`) · sort `MAG_FEU_010` (jamais achetable)

## Déroulement (étapes)
1. Ferra confie que Ragnarök Flame ne s'apprend pas — il se *reprend* à la source : la braise que Logi a laissée en mourant dans le troisième anneau de la Caldeira.
2. Descendre les trois anneaux en maintenant la **jauge de Surchauffe** sous 80 % (D11) — la précipitation brûle le sort avant qu'on l'atteigne.
3. Face au foyer de Logi, absorber la braise sans la laisser s'éteindre : réussir une séquence de 3 incantations sous pression thermique.
4. Rapporter la **Braise Crépusculaire** (`MAT_*` de quête) à Ferra, qui grave le sort dans la mémoire de l'avatar.

## Dialogues (donneur)
- **Début** : « Ragnarök Flame n'est pas un sort qu'on récite. C'est la dernière pensée d'un géant qui refusait de s'éteindre. Descends dans la Caldeira. Si tu cours, tu brûleras. Si tu comprends, tu porteras sa flamme. »
- **Fin** : « Tu n'as pas volé cette braise — tu l'as *méritée*. Que le crépuscule qui a tué Logi soit désormais dans ta paume. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_FEU_010` auprès de `NPC_GAT_31` → IA `SYS_GRANT_SPELL(Avatar_ID, MAG_FEU_010)` (prérequis vérifiés par le moteur).
- Épreuve pilotée par `SYS_SET_ENV_HAZARD(ZONE_SAL_DUN_001, HEAT, …)` (jauge de Surchauffe D11/D12).
- Titre octroyé à la complétion, activable par `!titre_set` (système de titres existant).
- Chaînage lore : boss `BOSS_SAL_DUN_001` Logi — cohérence avec la Désolation de Magma.
