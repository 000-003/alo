# Le Marteau Divin — `QST_T5_OSS_MAS_01`

## Identification
- **QST_ID** : `QST_T5_OSS_MAS_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_MAS_008` — Mjölnir Strike (T5)
- **Donneur** : `NPC_VOU_29` — Vork, Maître d'Armes (SKILL_MASTER Masse)
- **Lieu de l'épreuve** : Enclume-arène de Voulg (`ZONE_SAL_TWN_001`)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Masse : **Avancé** · OSS T4 Masse maîtrisé
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Marteau Divin »** (`!titre_set`) · OSS `OSS_MAS_008` (jamais achetable)

## Déroulement (étapes)
1. Vork explique que Mjölnir Strike ne tue pas par tranchant mais par *choc* — l'art de désorganiser un adversaire plus grand que soi (stagger/crush).
2. Apprendre à briser la posture d'un ennemi lourd sans le tuer, coup après coup, jusqu'à le mettre à genoux.
3. Épreuve finale : sonner un adversaire réputé instaggerable d'un unique coup chargé, timing parfait sur son temps fort.
4. L'ennemi à terre, Vork reconnaît le Marteau Divin.

## Dialogues (donneur)
- **Début** : « L'épée coupe, la masse *convainc*. Un bon coup de Mjölnir, et le plus grand des colosses oublie où est le haut. Va sonner quelqu'un qu'on dit inébranlable. Frappe sur son temps fort — pas avant, pas après. »
- **Fin** : « Il est à genoux et il ne sait même pas comment. C'est ça, le Marteau Divin : la force qui humilie la force. Il est à toi. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_MAS_008` auprès de `NPC_VOU_29` → `SYS_GRANT_OSS(Avatar_ID, OSS_MAS_008)`.
- Chaînage skills : effet stagger ; robustesse (`PAS_CBT`).
- Titre activable par `!titre_set`.
