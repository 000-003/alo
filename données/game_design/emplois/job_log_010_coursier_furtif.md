# Coursier furtif — `JOB_LOG_010`

## Identification
- **JOB_ID** : `JOB_LOG_010`
- **Titre** : Coursier furtif
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_DUS_78` (Coursier des ombres)
- **Zone** : Duskarn (`ZONE_IMP_CAP_001`)

## Paramètres
- **Niveau requis** : 12
- **Salaire par service** : 440 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Imp)

## Déroulement du service (`!work`)
À Duskarn, certains plis ne doivent surtout pas être vus en transit. Le mini-jeu : choisir l'itinéraire d'ombre en ombre (éviter les zones éclairées), gérer une jauge de discrétion et semer un éventuel suiveur. Livraison invisible = prime confidentielle ; repéré en pleine lumière = pli compromis, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : plis scellés à haute confidentialité.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Passe-muraille » — bonus de furtivité en déplacement (documenté) et courses secrètes des notables imp confiées en propre (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_010`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_010`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_IMP_CAP_001, filature)`, `SYS_PAY_WAGE`
