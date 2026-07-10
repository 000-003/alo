# L'Aube sur l'Atelier Englouti — `QST_T5_MAG_LUM_01`

## Identification
- **QST_ID** : `QST_T5_MAG_LUM_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_LUM_010` — Empyrean Dawn
- **Donneur** : `NPC_ALN_70` — Selene, Maîtresse de la Lumière (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_LEP_DUN_001` — Atelier Englouti (`BOSS_LEP_DUN_001` MK-0)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_LUM_009` · Affinité Leprechaun ≥ 80 · endurance à l'apnée (sections nagées)
- **Récompense** : 5 000 EXP · Titre **« Aube Empyréenne »** (`!titre_set`) · sort `MAG_LUM_010` (jamais achetable)

## Déroulement (étapes)
1. Selene confie qu'aucune lumière n'a jamais atteint le fond de l'Atelier Englouti — les sections nagées engloutissent le jour. Empyrean Dawn est le premier soleil qu'on y allumera.
2. Traverser les sections nagées de l'Atelier (mécanique Leprechaun, gestion du souffle) jusqu'à la salle noyée de MK-0.
3. Dans l'obscurité totale sous l'eau, faire lever une aube de lumière assez pure pour percer la profondeur (canalisation soutenue, aucune magie d'attaque).
4. Le premier rayon touchant MK-0 éteint, Selene lit l'Aube dans les mains de l'avatar.

## Dialogues (donneur)
- **Début** : « La lumière rassure quand il fait déjà jour. Le vrai don, c'est de la faire naître là où le soleil n'est jamais venu. Descends dans l'Atelier Englouti. Retiens ton souffle. Et fais lever un matin qui n'a jamais existé. »
- **Fin** : « Tu as allumé une aube au fond de l'eau. Les Leprechauns raconteront ça pendant des générations. Empyrean Dawn ne t'éblouira plus — elle t'obéit. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_LUM_010` auprès de `NPC_ALN_70` → `SYS_GRANT_SPELL(Avatar_ID, MAG_LUM_010)`.
- Chaînage : boss `BOSS_LEP_DUN_001` MK-0, sections nagées (D10) ; gestion du souffle (parenté jauge d'Apnée D11).
- Titre activable par `!titre_set`.
