# Aubergiste-adjoint du Brasier — `JOB_HOS_005`

## Identification
- **JOB_ID** : `JOB_HOS_005`
- **Titre** : Aubergiste-adjoint du Brasier
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_VOU_55` (Aubergiste Brasier Tessa)
- **Zone** : Voulg (`ZONE_SAL_TWN_001`)

## Paramètres
- **Niveau requis** : 7
- **Salaire par service** : 260 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Voulg)

## Déroulement du service (`!work`)
L'auberge du Brasier accueille forgerons et légionnaires salamanders au sang chaud. Le mini-jeu : servir la bière de forge sans en renverser une goutte, désamorcer une rixe entre deux ferrailleurs et attribuer les lits. Rixe calmée aux mots plutôt qu'aux poings = double pourboire ; bagarre déclenchée = casse, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Tessa te confie la salle du soir seul.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Pilier du Brasier » — accès au coffre de l'auberge, tarif ami sur les repas et Tessa te livre les ragots de la légion (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_005`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_005`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_TWN_001, soir_de_paye)`, `SYS_PAY_WAGE`
