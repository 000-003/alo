# Souffleur de forge — `JOB_CRA_005`

## Identification
- **JOB_ID** : `JOB_CRA_005`
- **Titre** : Souffleur de forge
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_VOU_17` (Souffleur de forge Holt)
- **Zone** : Voulg (`ZONE_SAL_TWN_001`)

## Paramètres
- **Niveau requis** : 10
- **Salaire par service** : 360 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Salamander)

## Déroulement du service (`!work`)
Holt règne sur les grands soufflets de la forge de Voulg. Le mini-jeu : maintenir la température au rouge parfait en rythmant le soufflet (trop d'air = surchauffe qui fend le métal, trop peu = pièce ratée). Barre de chaleur tenue dans la zone verte 3 fois = prime ; métal brûlé = perte, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : soufflet de la forge maîtresse, alliages exigeants.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Poumon de la Forge » — réduction des frais de forge sur ton propre craft d'armes (crochet craft) et Holt t'initie à un secret de trempe.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_005`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_005`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_TWN_001, commande_legion)`, `SYS_PAY_WAGE`
