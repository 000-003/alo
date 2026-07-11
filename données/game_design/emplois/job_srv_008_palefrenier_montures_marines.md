# Palefrenier des montures marines — `JOB_SRV_008`

## Identification
- **JOB_ID** : `JOB_SRV_008`
- **Titre** : Palefrenier des montures marines
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_UND_74` (Palefrenier marin)
- **Zone** : Archipel d'Écume (`ZONE_UND_CAP_001`)

## Paramètres
- **Niveau requis** : 4
- **Salaire par service** : 180 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Archipel d'Écume)

## Déroulement du service (`!work`)
Les Undine chevauchent hippocampes et selkies dans les bassins de l'Archipel. Le mini-jeu : maintenir l'eau du bassin à la bonne salinité, nourrir la monture de krill et vérifier ses branchies. Monture vive = pourboire du cavalier ; eau viciée = bête malade, soins déduits et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : soin des montures de course.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Écuyer des Abysses » — bonus d'affinité avec les montures marines (documenté) et garde des selkies de la noblesse undine.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_008`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_008`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_UND_CAP_001, course_hippocampes)`, `SYS_PAY_WAGE`
