# Maître-chien des rondes — `JOB_GRD_007`

## Identification
- **JOB_ID** : `JOB_GRD_007`
- **Titre** : Maître-chien des rondes
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_CAI_CAP_001` (Garde de Freelia) ; cf. `NPC_FRE_70` (Gardien de la Porte)
- **Zone** : Freelia (`ZONE_CAI_CAP_001`)

## Paramètres
- **Niveau requis** : 10
- **Salaire par service** : 380 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Cait Sith)

## Déroulement du service (`!work`)
La garde de Freelia patrouille flanquée de fauves dressés. Le mini-jeu : lire l'odorat de ta bête (elle flaire un intrus ou une simple proie), lui donner l'ordre juste (traque, garde, repli) et gérer une escarmouche scriptée. Piste juste suivie = capture et prime ; bête lâchée sur un innocent = faute, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde d'un fauve de meute d'élite.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Meneur de meute » — bonus de familiarité avec les familiers de combat (documenté) et grade de chef de ronde (+5 % réputation Cait Sith).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_007`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_007`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_CAI_CAP_001, traque_nocturne)`, `SYS_PAY_WAGE`
