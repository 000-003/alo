# Allumeur de lanternes d'ombre — `JOB_SRV_010`

## Identification
- **JOB_ID** : `JOB_SRV_010`
- **Titre** : Allumeur de lanternes d'ombre
- **Catégorie** : service
- **Employeur** : `city` → `ZONE_IMP_CAP_001` (Voirie de Duskarn) ; cf. `NPC_DUS_52` (Maître du camouflage)
- **Zone** : Duskarn (`ZONE_IMP_CAP_001`)

## Paramètres
- **Niveau requis** : 4
- **Salaire par service** : 180 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Duskarn)

## Déroulement du service (`!work`)
Duskarn n'éclaire ses rues qu'à demi : les lanternes d'ombre diffusent une lueur tamisée qui préserve la pénombre. Le mini-jeu : parcourir la tournée en réglant chaque lanterne au bon niveau (trop vive = on te reproche d'éblouir, éteinte = coin dangereux), et rallumer celles qu'un mauvais plaisant a soufflées. Tournée nuancée = prime ; réglage raté = plaintes, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : tournée des quartiers hauts, lanternes runiques.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Veilleur des ombres » — tu connais toutes les rues de Duskarn (raccourcis documentés) et la voirie te confie l'entretien des lanternes du palais.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_010`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_010`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_IMP_CAP_001, lanternes_eteintes)`, `SYS_PAY_WAGE`
