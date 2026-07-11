# Hôte de l'Auberge du Chat Botté — `JOB_HOS_007`

## Identification
- **JOB_ID** : `JOB_HOS_007`
- **Titre** : Hôte de l'Auberge du Chat Botté
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_FRE_45` (Aubergiste du Chat Botté)
- **Zone** : Freelia (`ZONE_CAI_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 240 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Freelia)

## Déroulement du service (`!work`)
Au Chat Botté, les clients cait sith viennent souvent accompagnés de leur familier. Le mini-jeu : loger le voyageur ET sa bête (attribuer une chambre compatible, prévoir la gamelle), calmer un familier grincheux et servir le lait chaud. Duo maître-familier satisfait = double pourboire ; familier fâché = griffures et casse, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des chambres à familiers de prestige.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Hôte des Ronrons » — accès au coffre de l'auberge et l'aubergiste te confie les allées et venues suspectes de Freelia (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_007`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_007`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_CAI_CAP_001, nuit_de_pleine_lune)`, `SYS_PAY_WAGE`
