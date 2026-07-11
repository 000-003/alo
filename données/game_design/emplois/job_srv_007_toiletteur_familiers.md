# Toiletteur de familiers — `JOB_SRV_007`

## Identification
- **JOB_ID** : `JOB_SRV_007`
- **Titre** : Toiletteur de familiers
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_FRE_74` (Palefrenier de Freelia)
- **Zone** : Freelia (`ZONE_CAI_CAP_001`)

## Paramètres
- **Niveau requis** : 3
- **Salaire par service** : 160 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Freelia)

## Déroulement du service (`!work`)
Les cait sith bichonnent leurs familiers ; le palefrenier te confie le bain et le pelage. Le mini-jeu : démêler sans tirer, tailler les griffes sans blesser et parfumer selon le goût du maître. Familier tout beau = pourboire ému du propriétaire ; coupure ou parfum détesté = feulement et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : toilettage des familiers de concours.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Toiletteur royal » — titre reconnu à Freelia, bonus d'affinité passif avec les familiers (documenté) et clientèle de la noblesse cait sith.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_007`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_007`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_CAI_CAP_001, concours_beaute)`, `SYS_PAY_WAGE`
