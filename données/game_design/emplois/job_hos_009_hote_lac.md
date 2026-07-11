# Hôte de l'Auberge du Lac — `JOB_HOS_009`

## Identification
- **JOB_ID** : `JOB_HOS_009`
- **Titre** : Hôte de l'Auberge du Lac
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_LIO_44` (Aubergiste du Lac)
- **Zone** : Lioda (`ZONE_PUC_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 220 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Lioda)

## Déroulement du service (`!work`)
À Lioda, l'auberge résonne des musiques puca jusqu'au bord du lac. Le mini-jeu : accorder l'ambiance sonore des chambres (feutrée pour dormir, vive pour la salle commune), servir l'hydromel de roseau et calmer un client sensible au vacarme. Harmonie tenue = pourboire ; cacophonie = clients qui fuient, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des chambres-résonance côté lac.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Hôte accordé » — accès au coffre de l'auberge et l'aubergiste te confie les rumeurs des musiciens voyageurs (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_009`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_009`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_PUC_CAP_001, nuit_de_concert)`, `SYS_PAY_WAGE`
