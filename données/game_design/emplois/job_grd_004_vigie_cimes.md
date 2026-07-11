# Vigie des Cimes — `JOB_GRD_004`

## Identification
- **JOB_ID** : `JOB_GRD_004`
- **Titre** : Vigie des Cimes
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_SYL_CAP_001` (Garde des Cimes de Swilvane)
- **Zone** : Swilvane (`ZONE_SYL_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 360 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Sylph)

## Déroulement du service (`!work`)
Depuis les plus hautes branches, tu surveilles l'approche aérienne — la faiblesse de Swilvane. Le mini-jeu : distinguer un vol d'oiseaux d'une escouade d'intrus ailés (indices de formation), puis choisir de sonner le cor ou non. Bonne lecture = prime ; fausse alerte = réputation entamée, incident réel manqué = pénalité lourde.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : poste de guet avancé, longue-vue de rosée.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Sentinelle du Vent » — bonus de vol (déplacement aérien facilité, documenté) et grade de chef de guet avec +5 % réputation Sylph.

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_004`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_004`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SYL_CAP_001, raid_aerien)`, `SYS_PAY_WAGE`
