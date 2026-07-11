# Commis du comptoir de cuivre — `JOB_COM_009`

## Identification
- **JOB_ID** : `JOB_COM_009`
- **Titre** : Commis du comptoir de cuivre
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_LIO_66` (Marchand de métronomes)
- **Zone** : Lioda (`ZONE_PUC_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 210 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Lioda)

## Déroulement du service (`!work`)
Le comptoir vend métronomes, cordes et pièces de cuivre aux musiciens. Le mini-jeu : accorder rapidement l'article devant le client pour le convaincre, comparer deux modèles selon son budget et conclure. Démonstration juste = vente et commission ; article désaccordé présenté = client dubitatif, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : rayon des instruments de maître.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Commis accordé » — remise sur les fournitures musicales pour toi-même (crochet économie) et priorité sur les pièces de cuivre rares.

## Intégration Bot
- Joueur : `!apply_job JOB_COM_009`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_009`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_PUC_CAP_001, foire_musicale)`, `SYS_PAY_WAGE`
