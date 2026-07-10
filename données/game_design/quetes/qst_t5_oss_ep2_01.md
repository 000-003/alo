# Le Jugement de la Grande Lame — `QST_T5_OSS_EP2_01`

## Identification
- **QST_ID** : `QST_T5_OSS_EP2_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_EP2_010` — Gram's Judgment (T5)
- **Donneur** : `NPC_VOU_29` — Vork, Maître d'Armes (SKILL_MASTER Épée 2M)
- **Lieu de l'épreuve** : Arène de Voulg (`ZONE_SAL_TWN_001`)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Épée 2M : **Avancé** · OSS T4 Épée 2M maîtrisé
- **Récompense** : 5 000 EXP · Titre **« Juge de Gram »** (`!titre_set`) · OSS `OSS_EP2_010` (jamais achetable)

## Déroulement (étapes)
1. Vork explique que Gram's Judgment est un seul coup — mais un coup qui tranche une sentence, pas une chair. Il faut la maîtrise de la lenteur assumée.
2. Dans l'arène de Voulg, briser une garde adverse « imbrisable » d'un unique coup chargé, sans esquiver au préalable (engagement total).
3. Assumer le Post-Motion Delay maximal après le coup, sous les huées de l'arène, sans reculer.
4. La sentence rendue, Vork valide le Jugement.

## Dialogues (donneur)
- **Début** : « L'épée à deux mains ne danse pas. Elle *tranche* et elle assume. Gram's Judgment, c'est un coup, un seul, et tout ce qui vient après. Va dans l'arène. Brise ce qu'on dit imbrisable. Et ne recule pas d'un pouce. »
- **Fin** : « Un coup. Une garde brisée. Tu as tenu debout dans le silence qui suivait. Gram te reconnaît pour juge. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_EP2_010` auprès de `NPC_VOU_29` → `SYS_GRANT_OSS(Avatar_ID, OSS_EP2_010)`.
- Ancrage : arène de Voulg (`ZONE_SAL_TWN_001`, forteresse Salamander D1) ; fil rouge « L'Arène qui mange les âmes » (D28) effleuré sans résolution.
- Titre activable par `!titre_set`.
