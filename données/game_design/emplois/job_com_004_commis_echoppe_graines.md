# Commis de l'échoppe de graines — `JOB_COM_004`

## Identification
- **JOB_ID** : `JOB_COM_004`
- **Titre** : Commis de l'échoppe de graines
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_SWI_19` (Marchand Pipo)
- **Zone** : Swilvane (`ZONE_SYL_CAP_001`)

## Paramètres
- **Niveau requis** : 4
- **Salaire par service** : 190 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Swilvane)

## Déroulement du service (`!work`)
Pipo vend graines rares et boutures aux jardiniers de la canopée. Le mini-jeu : identifier la graine demandée par sa description (feuillage, floraison), la peser au bon dosage et conclure la vente. Trois clients servis correctement = commission ; mauvaise graine vendue = retour furieux, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Pipo t'ouvre le tiroir des semences précieuses.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Grainetier » — tu identifies toute flore `FLO_*` à vue et Pipo te réserve une graine rare par semaine (crochet récolte).

## Intégration Bot
- Joueur : `!apply_job JOB_COM_004`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_004`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SYL_CAP_001, arrivage_rare)`, `SYS_PAY_WAGE`
