# Copiste-relieur de la Racine — `JOB_CRA_003`

## Identification
- **JOB_ID** : `JOB_CRA_003`
- **Titre** : Copiste-relieur de la Racine
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_ALN_33` (Libraire Osk)
- **Zone** : Alne (`ZONE_NEU_CAP_001`)

## Paramètres
- **Niveau requis** : 8
- **Salaire par service** : 300 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Alne)

## Déroulement du service (`!work`)
Osk te tend un manuscrit en pièces détachées. Le mini-jeu impose de reconstituer l'ordre des feuillets (indices de pagination narrés), doser la colle (trop = pages collées, trop peu = reliure lâche) et choisir la couverture. Réussite parfaite = manuscrit « éditions Osk » et prime ; ratage de collage = malus de 15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Osk te confie les grimoires mineurs.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Relieur du Cardinal » — tu peux restaurer un parchemin endommagé (`!repair_scroll`, réservé au titulaire) et Osk débloque l'accès à sa réserve d'ouvrages rares (crochet encyclopédie).

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_003`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_003`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_NEU_CAP_001, commande_urgente)`, `SYS_PAY_WAGE`
