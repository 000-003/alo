# Commis de l'armurerie — `JOB_COM_012`

## Identification
- **JOB_ID** : `JOB_COM_012`
- **Titre** : Commis de l'armurerie
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_BRO_31` (Marchand de lames)
- **Zone** : Brokkheim (`ZONE_LEP_CAP_001`)

## Paramètres
- **Niveau requis** : 7
- **Salaire par service** : 270 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Brokkheim)

## Déroulement du service (`!work`)
Le marchand de lames écoule la production de la Forge-Mère. Le mini-jeu : présenter la lame selon le style du client (parade, estoc, taille), vanter la trempe leprechaun sans mentir sur la durabilité et conclure au juste prix. Argumentaire honnête = vente et commission ; lame survendue = retour furieux, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : rayon des lames signées.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Fin connaisseur » — estimation instantanée de la valeur d'une arme et remise fournisseur transmise par le marchand (crochet économie).

## Intégration Bot
- Joueur : `!apply_job JOB_COM_012`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_012`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_LEP_CAP_001, arrivage_forge)`, `SYS_PAY_WAGE`
