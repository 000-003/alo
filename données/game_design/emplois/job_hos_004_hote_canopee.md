# Hôte de la Canopée — `JOB_HOS_004`

## Identification
- **JOB_ID** : `JOB_HOS_004`
- **Titre** : Hôte de la Canopée
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_SWI_55` (Aubergiste Tessa)
- **Zone** : Swilvane (`ZONE_SYL_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 220 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Swilvane)

## Déroulement du service (`!work`)
Les chambres de Swilvane sont suspendues dans les branches ; Tessa te charge d'accueillir les voyageurs vertigineux. Le mini-jeu : rassurer un client sujet au vertige, servir l'infusion de rosée et attribuer une chambre selon l'affinité (Sylph au vent, non-Sylph à l'abri). Bon appariement = pourboire ; mauvaise chambre = plainte, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des suites de la haute frondaison.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Hôte des Cimes » — accès au coffre de l'auberge et Tessa te confie la rumeur des voyageurs de passage (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_004`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_004`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SYL_CAP_001, rush_festival)`, `SYS_PAY_WAGE`
