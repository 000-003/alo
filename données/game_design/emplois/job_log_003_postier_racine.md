# Postier de la Racine — `JOB_LOG_003`

## Identification
- **JOB_ID** : `JOB_LOG_003`
- **Titre** : Postier de la Racine
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_ALN_61` (Maître de poste Cael)
- **Zone** : Alne (`ZONE_NEU_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 240 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Alne)

## Déroulement du service (`!work`)
Cael te remet une sacoche de plis à trier puis distribuer dans les quartiers d'Alne. Le mini-jeu combine tri par destination (associer nom → quartier) et choix d'itinéraire (le plus court sans traverser la zone en travaux). Tournée bouclée avant l'aube = prime ; pli mal trié = 15 % de malus et grognement de Cael.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : tournée inter-quartiers, sacoche renforcée.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Plume véloce » — tu deviens estafette longue-distance, débloques la livraison Alne↔capitales voisines (revenu majoré) et un raccourci de déplacement documenté par Cael.

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_003`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_003`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_NEU_CAP_001, pli_prioritaire)`, `SYS_PAY_WAGE`
