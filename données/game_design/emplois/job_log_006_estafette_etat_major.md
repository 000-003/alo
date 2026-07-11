# Estafette de l'État-Major — `JOB_LOG_006`

## Identification
- **JOB_ID** : `JOB_LOG_006`
- **Titre** : Estafette de l'État-Major
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_GAT_41` (Messagère d'État-Major Fyra)
- **Zone** : Gattan (`ZONE_SAL_CAP_001`)

## Paramètres
- **Niveau requis** : 10
- **Salaire par service** : 380 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Salamander)

## Déroulement du service (`!work`)
Fyra te confie les ordres scellés de l'état-major salamander. Le mini-jeu : mémoriser le sceau du destinataire, choisir la route évitant les Plaines exposées et remettre le pli en mains propres. Ordre remis à temps et au bon officier = prime ; pli intercepté ou en retard = sanction, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : plis de commandement, montures de relais.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Estafette de confiance » — Fyra t'ouvre le réseau de relais militaires (déplacement inter-cités accéléré, documenté) et confie les dépêches secrètes (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_006`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_006`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_CAP_001, depeche_urgente)`, `SYS_PAY_WAGE`
