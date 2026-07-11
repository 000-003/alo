# Garde-frontière des Plaines de Cendres — `JOB_GRD_006`

## Identification
- **JOB_ID** : `JOB_GRD_006`
- **Titre** : Garde-frontière des Plaines de Cendres
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_SAL_CAP_001` (Armée Salamander) ; cf. `NPC_GAT_10` (Garde-Frontière Braga)
- **Zone** : Gattan (`ZONE_SAL_CAP_001`)

## Paramètres
- **Niveau requis** : 14
- **Salaire par service** : 520 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Salamander)

## Déroulement du service (`!work`)
Les Plaines de Cendres sont la marche exposée de la capitale salamander. Le mini-jeu : tenir un poste de guet, juger si une caravane approchante est amie ou pillarde (indices de bannière) et soutenir une escarmouche scriptée. Frontière tenue = solde de campagne ; poste abandonné = désertion notée, −20 % et perte de réputation.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : commandement d'un binôme de guet.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Rempart de Cendres » — grade de sergent (+5 % réputation Salamander), accès à l'arsenal de garnison et téléport militaire prioritaire.

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_006`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_006`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_CAP_001, incursion_pillards)`, `SYS_PAY_WAGE`
