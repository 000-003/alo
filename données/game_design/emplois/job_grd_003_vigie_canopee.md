# Vigie de la Canopée — `JOB_GRD_003`

## Identification
- **JOB_ID** : `JOB_GRD_003`
- **Titre** : Vigie de la Canopée
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_NEU_CAP_001` (Garde civique d'Alne)
- **Zone** : Alne (`ZONE_NEU_CAP_001`)

## Paramètres
- **Niveau requis** : 8
- **Salaire par service** : 340 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Alne)

## Déroulement du service (`!work`)
Perché sur les racines maîtresses d'Yggdrasil, tu balaies l'horizon. Le mini-jeu présente 3 signaux (fumée, silhouette, cri) à trier entre « fausse alerte » et « menace réelle » ; signaler une vraie menace donne la prime, crier au loup à tort entame la réputation. Un round d'escarmouche scriptée peut survenir (`SYS_JOB_EVENT` incident) — ta défense compte.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : affectation aux tours hautes, meilleure visibilité (moins de faux positifs).
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil de la Racine » — tu débloques le grade de chef de vigie, +5 % de réputation ville par service et l'accès prioritaire au téléport de garnison.

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_003`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_003`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_NEU_CAP_001, incident_intrusion)`, `SYS_PAY_WAGE`
