# Garde des Quais — `JOB_GRD_008`

## Identification
- **JOB_ID** : `JOB_GRD_008`
- **Titre** : Garde des Quais
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_UND_CAP_001` (Garde de l'Archipel) ; cf. `NPC_UND_30` (Garde des Quais)
- **Zone** : Archipel d'Écume (`ZONE_UND_CAP_001`)

## Paramètres
- **Niveau requis** : 10
- **Salaire par service** : 380 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Undine)

## Déroulement du service (`!work`)
Les quais de l'Archipel voient transiter marchandises et contrebande. Le mini-jeu : inspecter les cargaisons débarquées (repérer la caisse à double fond), gérer la file des barques et repousser une escarmouche scriptée de pillards des mers. Contrebande saisie = prime ; cargaison volée sous ta garde = sanction, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde du grand ponton, inspections poussées.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil du Port » — nage/apnée améliorée pendant le service (documenté) et grade de brigadier des quais (+5 % réputation Undine).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_008`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_008`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_UND_CAP_001, contrebande)`, `SYS_PAY_WAGE`
