# Commis de l'échoppe de dagues — `JOB_COM_010`

## Identification
- **JOB_ID** : `JOB_COM_010`
- **Titre** : Commis de l'échoppe de dagues
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_DUS_31` (Marchand de dagues)
- **Zone** : Duskarn (`ZONE_IMP_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 240 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Duskarn)

## Déroulement du service (`!work`)
L'échoppe de dagues attire assassins et duellistes discrets. Le mini-jeu : jauger la vraie intention du client sans la nommer, présenter la lame adaptée (équilibre, gouttière à poison) et conclure sans poser de questions gênantes. Vente bien menée = commission ; client vexé par une question de trop = départ, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : accès au présentoir des lames d'exception.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Fin lame » — estimation instantanée d'une dague et remise fournisseur transmise par le marchand (crochet économie).

## Intégration Bot
- Joueur : `!apply_job JOB_COM_010`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_010`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_IMP_CAP_001, client_de_marque)`, `SYS_PAY_WAGE`
