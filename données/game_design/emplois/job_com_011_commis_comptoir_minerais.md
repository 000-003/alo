# Commis du comptoir de minerais — `JOB_COM_011`

## Identification
- **JOB_ID** : `JOB_COM_011`
- **Titre** : Commis du comptoir de minerais
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_GRA_67` (Marchand de minerais rares)
- **Zone** : Granzam (`ZONE_GNO_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 240 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Granzam)

## Déroulement du service (`!work`)
Le comptoir écoule fer, granit et minerais rares aux forgerons. Le mini-jeu : authentifier un minerai (vrai mithril ou pyrite trompeuse), le peser et fixer le prix selon le cours du jour. Lot authentifié et vendu au juste cours = commission ; fausse pierre achetée pour du mithril = perte sèche, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion du coffre à gemmes.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil du minéralogiste » — identification instantanée des minerais `MAT_MIN_*` (crochet craft/récolte) et priorité d'achat sur les arrivages rares.

## Intégration Bot
- Joueur : `!apply_job JOB_COM_011`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_011`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_GNO_CAP_001, lot_douteux)`, `SYS_PAY_WAGE`
