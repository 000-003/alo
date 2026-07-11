# Hôte de l'Auberge de l'Encrier — `JOB_HOS_010`

## Identification
- **JOB_ID** : `JOB_HOS_010`
- **Titre** : Hôte de l'Auberge de l'Encrier
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_DUS_44` (Aubergiste de l'Encrier)
- **Zone** : Duskarn (`ZONE_IMP_CAP_001`)

## Paramètres
- **Niveau requis** : 7
- **Salaire par service** : 270 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Duskarn)

## Déroulement du service (`!work`)
L'Encrier, dans la pénombre de Duskarn, accueille une clientèle discrète qui préfère qu'on ne retienne pas son nom. Le mini-jeu : loger sans poser de questions, deviner qui veut la table du fond (à l'écart) et repérer le client qui cherche noise. Discrétion tenue = bon pourboire ; indiscrétion = client qui disparaît sans payer, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des alcôves privées.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Hôte muet » — accès au coffre de l'auberge et l'aubergiste, qui sait tout et ne dit rien, te lâche un secret utile (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_010`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_010`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_IMP_CAP_001, client_recherche)`, `SYS_PAY_WAGE`
