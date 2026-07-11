# Commis de l'antiquaire — `JOB_COM_013`

## Identification
- **JOB_ID** : `JOB_COM_013`
- **Titre** : Commis de l'antiquaire
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_PEN_31` (Marchand d'antiquités)
- **Zone** : Penwether (`ZONE_SPR_CAP_001`)

## Paramètres
- **Niveau requis** : 7
- **Salaire par service** : 270 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Penwether)

## Déroulement du service (`!work`)
L'antiquaire écoule les trouvailles des fouilleurs spriggan — et parfois des faux habiles. Le mini-jeu : authentifier une pièce (patine vraie ou illusion de vétusté), estimer sa valeur et négocier sans révéler ton prix plancher. Vraie relique vendue au juste prix = commission ; faux acheté pour de l'ancien = perte, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion de la vitrine des reliques rares.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil d'antiquaire » — identification instantanée d'un objet ancien (crochet encyclopédie/économie) et priorité d'achat sur les trouvailles de fouille.

## Intégration Bot
- Joueur : `!apply_job JOB_COM_013`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_013`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SPR_CAP_001, piece_douteuse)`, `SYS_PAY_WAGE`
