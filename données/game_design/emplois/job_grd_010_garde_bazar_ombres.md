# Garde du Bazar des Ombres — `JOB_GRD_010`

## Identification
- **JOB_ID** : `JOB_GRD_010`
- **Titre** : Garde du Bazar des Ombres
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_IMP_CAP_001` (Garde de Duskarn) ; cf. `NPC_DUS_30` (Garde du bazar)
- **Zone** : Duskarn (`ZONE_IMP_CAP_001`)

## Paramètres
- **Niveau requis** : 11
- **Salaire par service** : 420 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Imp)

## Déroulement du service (`!work`)
Le bazar de Duskarn grouille de pickpockets dans la pénombre. Le mini-jeu : suivre du regard une main suspecte dans la foule, choisir d'intervenir ou de filer le voleur jusqu'au receleur, puis gérer une escarmouche scriptée. Réseau démantelé = grosse prime ; innocent arrêté par erreur = bavure, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : surveillance des allées profondes, en civil.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil dans le noir » — vision nocturne améliorée pendant le service (documenté) et grade de chef du guet du bazar (+5 % réputation Imp).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_010`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_010`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_IMP_CAP_001, vague_de_vols)`, `SYS_PAY_WAGE`
