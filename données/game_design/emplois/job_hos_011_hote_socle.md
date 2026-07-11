# Hôte de l'Auberge du Socle — `JOB_HOS_011`

## Identification
- **JOB_ID** : `JOB_HOS_011`
- **Titre** : Hôte de l'Auberge du Socle
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_GRA_44` (Aubergiste du Socle)
- **Zone** : Granzam (`ZONE_GNO_CAP_001`)

## Paramètres
- **Niveau requis** : 8
- **Salaire par service** : 300 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Granzam)

## Déroulement du service (`!work`)
Taillée dans la roche des profondeurs, l'auberge du Socle héberge mineurs harassés et marchands de minerai. Le mini-jeu : servir la bière noire et le ragoût de champignons, attribuer les couchettes selon l'équipe (jour/nuit) et gérer la poussière de mine qui encrasse tout. Mineurs bien traités = pourboire ; erreur d'équipe réveillée = grogne, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion du dortoir des contremaîtres.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Hôte du Socle » — accès au coffre de l'auberge et l'aubergiste te renseigne sur les filons qui se murmurent au comptoir (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_011`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_011`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_GNO_CAP_001, retour_de_filon)`, `SYS_PAY_WAGE`
