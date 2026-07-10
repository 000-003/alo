# Le Pilier sous la Mine — `QST_T5_MAG_TER_01`

## Identification
- **QST_ID** : `QST_T5_MAG_TER_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_TER_010` — World Pillar
- **Donneur** : `NPC_ALN_69` — Roan, Maître de la Terre (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_GNO_DUN_001` — Mine de Mithril (`BOSS_GNO_DUN_001` Mithrandur)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_TER_009` · Affinité Gnome ≥ 80
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Pilier du Monde »** (`!titre_set`) · sort `MAG_TER_010` (jamais achetable)

## Déroulement (étapes)
1. Roan avertit : la galerie profonde de la Mine de Mithril s'effondre. World Pillar ne s'enseigne pas — il se prouve, en tenant la montagne.
2. Descendre sous le magnétisme de Mithrandur et atteindre la salle instable (mécanique signature Gnome).
3. Ériger et **maintenir** trois piliers de pierre pendant que le plafond cède — épreuve de canalisation soutenue, aucun repli autorisé.
4. La galerie stabilisée, Roan grave le sort : celui qui a porté une mine peut porter un monde.

## Dialogues (donneur)
- **Début** : « Les Gnomes creusent. Toi, tu vas devoir *soutenir*. Il y a une galerie sous la Mine de Mithril qui va tomber sur la tête de trop de monde. Tiens-la. Avec la pierre, pas avec tes bras. »
- **Fin** : « La montagne s'est appuyée sur toi et tu n'as pas plié. World Pillar est à toi. Le monde a désormais une colonne de plus. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_TER_010` auprès de `NPC_ALN_69` → `SYS_GRANT_SPELL(Avatar_ID, MAG_TER_010)`.
- Chaînage : boss `BOSS_GNO_DUN_001` Mithrandur, mécanique de magnétisme (D10).
- Titre activable par `!titre_set`.
