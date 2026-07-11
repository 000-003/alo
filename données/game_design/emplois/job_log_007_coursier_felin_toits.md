# Coursier félin des toits — `JOB_LOG_007`

## Identification
- **JOB_ID** : `JOB_LOG_007`
- **Titre** : Coursier félin des toits
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_FRE_78` (Coursier de Freelia)
- **Zone** : Freelia (`ZONE_CAI_CAP_001`)

## Paramètres
- **Niveau requis** : 8
- **Salaire par service** : 300 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Freelia)

## Déroulement du service (`!work`)
À Freelia, les coursiers cait sith filent par les toits plutôt que par les rues encombrées. Le mini-jeu : enchaîner sauts et corniches en gérant une jauge d'équilibre (une tuile glissante te fait chuter) et livrer avant l'horloge. Parcours des toits sans chute = prime d'agilité ; dégringolade = colis abîmé, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : itinéraires des hautes toitures, colis fragiles.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Ombre des Toits » — bonus d'agilité en déplacement urbain (documenté) et service de livraison express confié en propre (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_007`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_007`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_CAI_CAP_001, colis_fragile)`, `SYS_PAY_WAGE`
