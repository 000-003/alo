# Apprenti-trempeur de la Forge-Mère — `JOB_CRA_012`

## Identification
- **JOB_ID** : `JOB_CRA_012`
- **Titre** : Apprenti-trempeur de la Forge-Mère
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_BRO_22` (Maître de la trempe)
- **Zone** : Brokkheim (`ZONE_LEP_CAP_001`)

## Paramètres
- **Niveau requis** : 14
- **Salaire par service** : 500 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Leprechaun)

## Déroulement du service (`!work`)
Les Leprechauns de Brokkheim sont les maîtres incontestés de la trempe. Le mini-jeu : lire la couleur de chauffe d'une lame (paille, cerise, blanc) et la plonger dans le bon bain (eau, huile, saumure) à l'instant exact. Trempe réussie = lame à la dureté parfaite ; mauvais bain ou timing = métal cassant, rebut et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : trempe des alliages T3-T4, bains secrets.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Trempeur de la Forge-Mère » — bonus de durabilité sur ton propre craft d'armes (crochet craft/réparation) et le Maître te confie la recette d'un bain légendaire.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_012`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_012`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_LEP_CAP_001, commande_maitre)`, `SYS_PAY_WAGE`
