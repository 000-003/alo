# La Lance qui ne Manque Jamais — `QST_T5_OSS_LAN_01`

## Identification
- **QST_ID** : `QST_T5_OSS_LAN_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_LAN_010` — Gungnir (T5)
- **Donneur** : `NPC_VOU_29` — Vork, Maître d'Armes (SKILL_MASTER Lance)
- **Lieu de l'épreuve** : Champ d'estoc de Voulg (`ZONE_SAL_TWN_001`)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Lance : **Avancé** · OSS T4 Lance maîtrisé
- **Récompense** : 5 000 EXP · Titre **« Lance qui ne Manque Jamais »** (`!titre_set`) · OSS `OSS_LAN_010` (jamais achetable)

## Déroulement (étapes)
1. Vork rappelle la légende : Gungnir, la lance d'Odin, ne rate jamais sa cible. L'épreuve consiste à mériter ce nom d'un unique estoc parfait.
2. S'exercer à l'estoc traversant à distance croissante jusqu'à trouver la portée maximale de la lance sans perte de précision.
3. Épreuve finale : un seul estoc, une cible qui se déplace, aucune seconde chance — la maîtrise est dans l'anticipation, pas la correction.
4. La cible touchée en plein centre, Vork inscrit Gungnir.

## Dialogues (donneur)
- **Début** : « Une lance qui rate, c'est un bâton qui te laisse à découvert. Gungnir n'a jamais raté — et toi non plus tu ne rateras pas, sinon reviens t'entraîner. Un estoc. Une cible qui bouge. Vise l'endroit où elle *sera*. »
- **Fin** : « En plein cœur, du premier coup, sur une cible qui fuyait. La lance d'Odin te reconnaît. Ne manque plus jamais. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_LAN_010` auprès de `NPC_VOU_29` → `SYS_GRANT_OSS(Avatar_ID, OSS_LAN_010)`.
- Chaînage skills : requiert précision (`PAS_CBT`) ; canon Spiral Thrust préservé dans la famille.
- Titre activable par `!titre_set`.
