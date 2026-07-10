# L'Ouverture Oubliée — `QST_T5_MAG_SUP_01`

## Identification
- **QST_ID** : `QST_T5_MAG_SUP_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_SUP_010` — Overture of Genesis
- **Donneur** : `NPC_ALN_68` — Zephyrine, Maîtresse du Support (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_PUC_DUN_001` — Amphithéâtre Oublié (`BOSS_PUC_DUN_001` Ondaro)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_SUP_009` · Affinité Puca ≥ 80 · maîtrise du tempo (`PAS_SOC` scène)
- **Récompense** : 5 000 EXP · Titre **« Chef de l'Ouverture »** (`!titre_set`) · sort `MAG_SUP_010` (jamais achetable)

## Déroulement (étapes)
1. Zephyrine explique que l'Overture of Genesis est la première mesure jamais jouée dans le monde — dormante au fond de l'Amphithéâtre Oublié, elle n'attend qu'un chef assez juste pour la reprendre.
2. Traverser l'Amphithéâtre au **tempo** exact d'Ondaro (mécanique signature Puca) — un contretemps réveille le boss.
3. Sur la scène finale, jouer l'Ouverture en soutenant simultanément trois buffs sans en briser la cadence (épreuve de maintien polyphonique).
4. La mesure achevée sans fausse note, Zephyrine reconnaît la Genèse et scelle le sort.

## Dialogues (donneur)
- **Début** : « Le support n'est pas un art mineur, petit. Le monde a commencé par une *note*, pas par un coup d'épée. Cette note dort dans l'Amphithéâtre Oublié. Va la rejouer. Mais sur le tempo — sinon Ondaro te corrigera lui-même. »
- **Fin** : « Tu as tenu la mesure qui a fait le monde. Les épéistes tuent des dieux ; toi, tu accompagnes leur naissance. C'est plus rare. C'est à toi. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_SUP_010` auprès de `NPC_ALN_68` → `SYS_GRANT_SPELL(Avatar_ID, MAG_SUP_010)`.
- Chaînage : boss `BOSS_PUC_DUN_001` Ondaro, mécanique de tempo (D10) ; Harmonie de Fond de Lioda (`SUP_006`).
- Titre activable par `!titre_set`.
