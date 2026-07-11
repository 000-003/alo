# Wagonnier des galeries — `JOB_LOG_011`

## Identification
- **JOB_ID** : `JOB_LOG_011`
- **Titre** : Wagonnier des galeries
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_GRA_01` (Contremaître Durgan)
- **Zone** : Granzam (`ZONE_GNO_CAP_001`)

## Paramètres
- **Niveau requis** : 10
- **Salaire par service** : 380 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Granzam)

## Déroulement du service (`!work`)
Durgan te confie un wagonnet sur les rails des galeries gnomes. Le mini-jeu : gérer la vitesse dans les pentes (freiner avant les virages sinon déraillement), aiguiller aux embranchements et vider la benne au bon monte-charge. Convoi de minerai livré plein = prime ; wagonnet déraillé = minerai répandu, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : lignes profondes, convois de mithril.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Roi du rail » — bonus de capacité de transport (documenté) et Durgan te confie l'aiguillage des convois lourds (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_011`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_011`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_GNO_CAP_001, aiguillage_bloque)`, `SYS_PAY_WAGE`
