# Porteur de minerai — `JOB_LOG_005`

## Identification
- **JOB_ID** : `JOB_LOG_005`
- **Titre** : Porteur de minerai
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_VOU_89` (Porteur Venn)
- **Zone** : Voulg (`ZONE_SAL_TWN_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 250 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Voulg)

## Déroulement du service (`!work`)
Venn convoie le minerai des grottes jusqu'aux forges. Le mini-jeu : charger la hotte sans dépasser le poids (surcharge = chute, casse de minerai) et choisir la galerie la plus sûre. Chargement optimal livré intact = prime ; hotte renversée = minerai perdu, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : hotte renforcée, capacité de charge accrue.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Dos de fer » — bonus de capacité d'inventaire pendant le service et Venn te confie les convois de minerai rare (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_005`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_005`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_TWN_001, eboulement)`, `SYS_PAY_WAGE`
