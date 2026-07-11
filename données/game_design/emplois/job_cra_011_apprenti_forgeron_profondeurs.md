# Apprenti-forgeron des Profondeurs — `JOB_CRA_011`

## Identification
- **JOB_ID** : `JOB_CRA_011`
- **Titre** : Apprenti-forgeron des Profondeurs
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_GRA_22` (Maître-forgeron de Granzam)
- **Zone** : Granzam (`ZONE_GNO_CAP_001`)

## Paramètres
- **Niveau requis** : 12
- **Salaire par service** : 440 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Gnome)

## Déroulement du service (`!work`)
Les forges gnomes de Granzam travaillent le mithril extrait juste en dessous. Le mini-jeu : chauffer le lingot au point précis (le mithril tolère une fenêtre étroite), marteler en cadence pour aligner le grain et tremper à l'instant juste. Barre de cadence tenue = pièce sans défaut ; martelage à contretemps = crique dans le métal, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : accès à la forge à mithril, alliages T3.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Marteau des Profondeurs » — réduction des frais de forge sur ton propre craft d'armures (crochet craft) et le Maître te transmet une technique de trempe gnome.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_011`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_011`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_GNO_CAP_001, commande_mithril)`, `SYS_PAY_WAGE`
