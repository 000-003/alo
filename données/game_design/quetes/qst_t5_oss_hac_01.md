# La Fin du Monde — `QST_T5_OSS_HAC_01`

## Identification
- **QST_ID** : `QST_T5_OSS_HAC_01`
- **Type** : Quête de titre T5 (maîtrise ultime)
- **Skill débloqué** : `OSS_HAC_010` — World Ender (T5)
- **Donneur** : `NPC_VOU_29` — Vork, Maître d'Armes (SKILL_MASTER Hache)
- **Lieu de l'épreuve** : Forge-arène de Voulg (`ZONE_SAL_TWN_001`)
- **Prérequis** : Niveau 45 · Maîtrise d'arme Hache : **Avancé** · OSS T4 Hache (Ragnar's Fury) maîtrisé
- **Récompense** : 8 000 EXP, 500 Yrds · Titre **« Fin du Monde »** (`!titre_set`) · OSS `OSS_HAC_010` (jamais achetable)

## Déroulement (étapes)
1. Vork prévient : World Ender n'est pas une frappe, c'est une *démolition*. Elle brise l'arme si elle est mal portée — et le porteur avec, s'il n'a pas la charpente.
2. Prouver la robustesse (`PAS_CBT` endurance) en encaissant sans broncher, puis charger la frappe jusqu'à son point de rupture.
3. Fendre en un seul coup un obstacle réputé infendable de la forge-arène, en acceptant le Post-Motion maximal qui laisse totalement à découvert.
4. L'obstacle réduit en éclats, Vork grave la technique.

## Dialogues (donneur)
- **Début** : « La hache ne cherche pas la finesse. Elle cherche la *fin*. World Ender fend tout — y compris ta propre garde, si tu la portes mal. Montre-moi d'abord que tu tiens debout. Ensuite, brise l'infrangible. »
- **Fin** : « Tu as fendu ce que dix forgerons disaient éternel. Le monde a une fin, désormais — et elle est au bout de ta hache. »

## Notes d'intégration
- Déblocage : `!learn_skill OSS_HAC_010` auprès de `NPC_VOU_29` → `SYS_GRANT_OSS(Avatar_ID, OSS_HAC_010)`.
- Chaînage skills : requiert robustesse/endurance (`PAS_CBT`) ; T4 Ragnar's Fury en prérequis (index skills).
- Titre activable par `!titre_set`.
