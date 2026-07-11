# Soigneur de montures ailées — `JOB_SRV_004`

## Identification
- **JOB_ID** : `JOB_SRV_004`
- **Titre** : Soigneur de montures ailées
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_SWI_84` (Palefrenière Hilda)
- **Zone** : Swilvane (`ZONE_SYL_CAP_001`)

## Paramètres
- **Niveau requis** : 4
- **Salaire par service** : 180 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Swilvane)

## Déroulement du service (`!work`)
Hilda t'apprend à panser les libellules géantes et coursiers ailés au repos. Le mini-jeu : brosser dans le sens des écailles, nourrir selon l'espèce et vérifier l'état des ailes. Monture apaisée = pourboire du propriétaire ; geste brusque = la bête s'affole, −15 % et petite bousculade scriptée.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde des montures de prestige.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Chuchoteur d'ailes » — Hilda t'apprend un tour de dressage (bonus de familiarité monture, documenté) et te confie la couvée annuelle.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_004`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_004`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SYL_CAP_001, monture_blessee)`, `SYS_PAY_WAGE`
