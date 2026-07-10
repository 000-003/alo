# Le Crépuscule sous la Nécropole — `QST_T5_MAG_TEN_01`

## Identification
- **QST_ID** : `QST_T5_MAG_TEN_01`
- **Type** : Quête de titre T5 (déblocage de sort ultime)
- **Skill débloqué** : `MAG_TEN_010` — Ragnarök Umbra
- **Donneur** : `NPC_ALN_69` — Roan, Maître des Ténèbres (SKILL_MASTER)
- **Lieu de l'épreuve** : `ZONE_SPR_DUN_001` — Nécropole Antique (`BOSS_SPR_DUN_001` Pennroth)
- **Prérequis** : Niveau 45 · Maîtrise `MAG_TEN_009` · Affinité Spriggan ≥ 80
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Ombre du Crépuscule »** (`!titre_set`) · sort `MAG_TEN_010` (jamais achetable)

## Déroulement (étapes)
1. Roan prévient : dans la Nécropole Antique, les salles mentent (illusions signatures Spriggan). Ragnarök Umbra ne se donne qu'à celui qui distingue son ombre de celles que le donjon fabrique.
2. Traverser les salles illusoires de Pennroth sans se laisser piéger par les fausses sorties (épreuve de discernement).
3. Au tombeau final, éteindre volontairement toute lumière et lancer la magie de Ténèbres à l'aveugle — voir *par* l'ombre, non malgré elle.
4. L'illusion brisée par le vrai noir, Roan valide la maîtrise du Crépuscule.

## Dialogues (donneur)
- **Début** : « Les Spriggans jouent avec les ombres comme d'autres avec des cartes. Ragnarök Umbra, ce n'est pas jouer — c'est *être* l'ombre. Descends dans la Nécropole. Elle te montrera cent mensonges. N'en crois aucun, sauf le noir total. »
- **Fin** : « Tu as trouvé ta propre ombre au milieu de mille fausses. Peu en sont capables. Le crépuscule ne te trompera plus jamais — parce qu'il t'appartient. »

## Notes d'intégration
- Déblocage : `!learn_skill MAG_TEN_010` auprès de `NPC_ALN_69` → `SYS_GRANT_SPELL(Avatar_ID, MAG_TEN_010)`.
- Chaînage : boss `BOSS_SPR_DUN_001` Pennroth, salles illusoires (D10).
- Code d'école `TEN` (D60) ; canon Dark Detonation préservé dans la plage.
- Titre activable par `!titre_set`.
