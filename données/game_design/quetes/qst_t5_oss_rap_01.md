# L'Épée Absolue — `QST_T5_OSS_RAP_01`

## Identification
- **QST_ID** : `QST_T5_OSS_RAP_01`
- **Type** : Quête de titre T5 (maîtrise ultime, hommage Mother's Rosario)
- **Skill débloqué** : `OSS_RAP_001` — Mother's Rosario (T5)
- **Donneur** : `NPC_ALN_69` — Roan, Maître d'Armes (SKILL_MASTER Rapière)
- **Lieu de l'épreuve** : Salle des Onze — dédiée à la mémoire de Yuuki (`NPC_CANON_*`)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Rapière : **Avancé** · OSS T4 Rapière maîtrisé
- **Récompense** : 5 000 EXP · Titre **« Épée Absolue »** (`!titre_set`) · OSS `OSS_RAP_001` (jamais achetable)

## Déroulement (étapes)
1. Roan confie que Mother's Rosario est une combinaison de onze estocs, léguée par une bretteuse dont plus personne ne prononce le nom (renvoi discret au canon Yuuki, `NPC_CANON_*`).
2. Apprendre les dix premiers estocs — chacun impossible sans que le précédent soit parfait (chaîne stricte).
3. Le onzième estoc ne peut être porté qu'en acceptant de laisser une ouverture : la maîtrise, ici, c'est la confiance, pas la garde.
4. La combinaison complète, Roan transmet l'héritage.

## Dialogues (donneur)
- **Début** : « Onze coups. Le dernier était le sien, et elle l'offrait à qui saurait porter les dix autres. Ne me demande pas son nom — apprends d'abord ses estocs. Le reste viendra si tu es digne du onzième. »
- **Fin** : « Tu as porté les onze. Quelque part, quelqu'un sourit. L'Épée Absolue n'appartient à personne — elle se transmet. À ton tour, un jour. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_RAP_001` auprès de `NPC_ALN_69` → `SYS_GRANT_OSS(Avatar_ID, OSS_RAP_001)`.
- Chaînage canon : hommage Yuuki (`pnj/canoniques/`, invulnérabilité C5) — le nom n'est jamais confirmé frontalement (parenté règle de déflection).
- Canon Linear / Star Splash préservé dans la famille. Titre activable par `!titre_set`.
