# L'Hiver qui n'a pas de Fin — `QST_T5_MAG_GLA_01`

## Identification
- **QST_ID** : `QST_T5_MAG_GLA_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_GLA_010` — Fimbulwinter
- **Donneur** : `NPC_SWI_79` — Sora, Maître de la Glace (SKILL_MASTER)
- **Lieu de l'épreuve** : Cimes gelées de **Jötunheimr** (axe vertical, `HAZARD` froid D12)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_GLA_009` · Affinité Cait Sith ≥ 80 · endurance au froid (`PAS_EXP`)
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Souffle de l'Hiver Éternel »** (`!titre_set`) · sort `MAG_GLA_010` (jamais achetable)

## Déroulement (étapes)
1. Sora raconte que Fimbulwinter n'est pas un sort mais un *souvenir* du monde : celui de l'hiver qui précéda la Chute de Jötunheimr. Il faut monter le chercher là où il n'a jamais fondu.
2. Gravir les cimes de Jötunheimr sous la jauge de froid (`HAZARD` D12) — la chaleur intérieure baisse à chaque action, comme l'oxygène ailleurs.
3. Au sommet, résister au gel sans jamais lancer un sort de feu (interdit), en ne s'appuyant que sur la Glace pour survivre.
4. Toucher le cœur de glace immémorial ; Sora, restée en contrebas, valide l'empreinte du sort.

## Dialogues (donneur)
- **Début** : « Tu crois que la glace, c'est froid ? La glace, c'est *patient*. Fimbulwinter attend depuis la Chute de Jötunheimr que quelqu'un remonte l'écouter. Couvre-toi. Non — ne te couvre pas trop. Tu dois avoir un peu peur de mourir. »
- **Fin** : « Tu es redescendue avec l'hiver dans la voix. Trois hivers sans été, disait la légende. Tu es le premier. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_GLA_010` auprès de `NPC_SWI_79` → `SYS_GRANT_SPELL(Avatar_ID, MAG_GLA_010)`.
- Épreuve pilotée par `SYS_SET_ENV_HAZARD(Jötunheimr, HAZARD/froid, …)` — extension D12 prévue (froid Jötunheimr).
- Ancrage axe vertical (atlas) ; lore *La Chute de Jötunheimr* (`!lore`).
- Titre activable par `!titre_set`.
