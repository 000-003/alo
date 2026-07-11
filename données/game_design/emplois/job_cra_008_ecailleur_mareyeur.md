# Écailleur-mareyeur — `JOB_CRA_008`

## Identification
- **JOB_ID** : `JOB_CRA_008`
- **Titre** : Écailleur-mareyeur
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_UND_42` (Cuisinier de poissons)
- **Zone** : Archipel d'Écume (`ZONE_UND_CAP_001`)

## Paramètres
- **Niveau requis** : 8
- **Salaire par service** : 300 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Undine)

## Déroulement du service (`!work`)
Le cuisinier te confie la préparation du poisson d'abysse. Le mini-jeu : écailler dans le sens juste, lever les filets sans gâcher la chair et trier les abats vendables (vessies, huiles). Poisson préparé net = matière première de qualité pour la cuisine ; chair déchirée = perte, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : traitement des espèces rares des abysses.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Lame de mer » — bonus de rendement quand tu prépares du poisson pour ta propre cuisine (crochet gathering/cooking) et le cuisinier te livre une recette de bouillabaisse buff.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_008`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_008`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_UND_CAP_001, peche_miraculeuse)`, `SYS_PAY_WAGE`
