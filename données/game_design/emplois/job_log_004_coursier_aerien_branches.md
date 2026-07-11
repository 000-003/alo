# Coursier aérien des Branches — `JOB_LOG_004`

## Identification
- **JOB_ID** : `JOB_LOG_004`
- **Titre** : Coursier aérien des Branches
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_SWI_88` (Coursier Velt)
- **Zone** : Swilvane (`ZONE_SYL_CAP_001`)

## Paramètres
- **Niveau requis** : 7
- **Salaire par service** : 280 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Swilvane)

## Déroulement du service (`!work`)
Velt t'apprend à livrer de branche en branche sans jamais toucher le sol — fierté sylphe. Le mini-jeu : enchaîner un trajet aérien en gérant une jauge de souffle (voler trop longtemps t'épuise) et éviter les courants contraires. Livraison sans se poser = bonus « vol pur » ; atterrissage forcé = −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : itinéraires de haute frondaison, plis plus lourds.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Aile filante » — réduction du coût de souffle en vol et service express inter-cités confié par Velt.

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_004`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_004`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SYL_CAP_001, tempete_de_vent)`, `SYS_PAY_WAGE`
