# Les Mille Lames de l'Ombre — `QST_T5_OSS_DAG_01`

## Identification
- **QST_ID** : `QST_T5_OSS_DAG_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_DAG_010` — Thousand Cuts (T5)
- **Donneur** : `NPC_ALN_69` — Roan, Maître d'Armes (SKILL_MASTER Dague)
- **Lieu de l'épreuve** : Ruelles d'ombre de `ZONE_IMP_CAP_001` (Duskarn)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Dague : **Avancé** · OSS T4 Dague maîtrisé · discrétion (`PAS_EXP`/`PAS_SOC`)
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Mille Lames »** (`!titre_set`) · OSS `OSS_DAG_010` (jamais achetable)

## Déroulement (étapes)
1. Roan avertit : Thousand Cuts n'est pas de la puissance, c'est de la *fréquence*. Il faut la cité sans aube pour l'apprendre, là où l'ombre couvre chaque geste.
2. Traverser Duskarn sans être repéré par les guardes (épreuve de discrétion) jusqu'à l'aire d'entraînement clandestine.
3. Enchaîner un nombre-seuil de frappes rapides dans la fenêtre de Post-Motion la plus courte de toutes les armes — l'endurance de cadence, pas la force.
4. Le compte atteint sans être touché, Roan transmet la technique.

## Dialogues (donneur)
- **Début** : « La dague, c'est l'arme des honnêtes gens pressés et des malhonnêtes patients. Mille coups. Aucun décisif. Tous nécessaires. Va à Duskarn — là-bas, l'ombre te prêtera le temps qu'il faut. »
- **Fin** : « Mille coupures, et pas une reçue. Tu es rapide comme un mensonge. Mille Lames te va. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_DAG_010` auprès de `NPC_ALN_69` → `SYS_GRANT_OSS(Avatar_ID, OSS_DAG_010)`.
- Ancrage : Duskarn (`ZONE_IMP_CAP_001`, cité sans aube D52) ; canon Rapid Bite préservé dans la famille.
- Titre activable par `!titre_set`.
