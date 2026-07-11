# Messager à cor — `JOB_LOG_009`

## Identification
- **JOB_ID** : `JOB_LOG_009`
- **Titre** : Messager à cor
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_LIO_78` (Coursier mélodique)
- **Zone** : Lioda (`ZONE_PUC_CAP_001`)

## Paramètres
- **Niveau requis** : 7
- **Salaire par service** : 280 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Lioda)

## Déroulement du service (`!work`)
À Lioda, les messages courts se transmettent par appels de cor codés qui portent d'un balcon à l'autre. Le mini-jeu : mémoriser la séquence de notes du message, la relayer sans fausse note aux relais successifs et porter en main propre les plis longs. Séquence parfaite = message transmis vite et prime ; note ratée = message corrompu, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : relais des longues portées inter-quartiers.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Cor d'argent » — accès au réseau de relais sonores (déplacement urbain accéléré, documenté) et dépêches d'honneur confiées en propre (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_009`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_009`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_PUC_CAP_001, appel_urgent)`, `SYS_PAY_WAGE`
