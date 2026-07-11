# Tailleur de topiaires vivantes — `JOB_CRA_004`

## Identification
- **JOB_ID** : `JOB_CRA_004`
- **Titre** : Tailleur de topiaires vivantes
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_SWI_60` (Maître-jardinier Flora)
- **Zone** : Swilvane (`ZONE_SYL_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 320 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Sylph)

## Déroulement du service (`!work`)
Les jardins suspendus de Swilvane sont taillés en formes vivantes qui poussent à vue d'œil. Le mini-jeu : choisir la coupe (spirale, bête, arche) et respecter le sens de la sève sinon la plante flétrit. Trois coupes réussies = œuvre saluée par Flora ; une coupe à contre-sève = plante abîmée, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : accès aux essences rares du jardin royal.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Sculpteur de sève » — tu peux produire un `DEC_*` végétal d'ornement pour le logement (crochet SOC-3) et Flora te confie une bouture unique.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_004`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_004`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SYL_CAP_001, commande_ceremonie)`, `SYS_PAY_WAGE`
