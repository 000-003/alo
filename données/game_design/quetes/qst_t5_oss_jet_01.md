# La Volée du Zéphyr — `QST_T5_OSS_JET_01`

## Identification
- **QST_ID** : `QST_T5_OSS_JET_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_JET_008` — Zephyr's Volley (T5)
- **Donneur** : `NPC_ALN_69` — Roan, Maître d'Armes (SKILL_MASTER Armes de jet)
- **Lieu de l'épreuve** : Terrain d'adresse d'Alne (`ZONE_NEU_CAP_001`)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Jet : **Avancé** · OSS T4 Jet maîtrisé
- **Récompense** : 5 000 EXP · Titre **« Souffle Lancé »** (`!titre_set`) · OSS `OSS_JET_008` (jamais achetable)

## Déroulement (étapes)
1. Roan pose la difficulté : Zephyr's Volley lance plusieurs projectiles en un seul geste, chacun sur une cible différente — la dispersion maîtrisée, pas le tir groupé.
2. S'exercer au lancer multiple jusqu'à contrôler la divergence des trajectoires (chaque projectile sa cible).
3. Épreuve finale : neutraliser un nombre-seuil de cibles simultanées d'une seule volée, sans en manquer aucune ni en toucher deux fois.
4. Toutes les cibles à terre d'un geste, Roan valide la technique.

## Dialogues (donneur)
- **Début** : « Lancer une lame, un enfant le fait. En lancer cinq qui partent ensemble et arrivent chacune ailleurs — ça, c'est le Zéphyr. Ne groupe pas. *Disperse*. Chaque projectile a un nom, et ce nom c'est une cible différente. »
- **Fin** : « Cinq cibles, un geste, aucune oubliée. Le vent lui-même ne disperse pas mieux. Le Souffle Lancé t'appartient. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_JET_008` auprès de `NPC_ALN_69` → `SYS_GRANT_OSS(Avatar_ID, OSS_JET_008)`.
- Chaînage skills : requiert précision (`PAS_CBT`) ; effet multi-cible (dispersion).
- Titre activable par `!titre_set`.
