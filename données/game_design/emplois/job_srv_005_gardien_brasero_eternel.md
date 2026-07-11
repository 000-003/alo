# Gardien du brasero éternel — `JOB_SRV_005`

## Identification
- **JOB_ID** : `JOB_SRV_005`
- **Titre** : Gardien du brasero éternel
- **Catégorie** : service
- **Employeur** : `city` → `ZONE_SAL_TWN_001` (Temple du Feu de Voulg)
- **Zone** : Voulg (`ZONE_SAL_TWN_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 200 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Salamander)

## Déroulement du service (`!work`)
Le brasero éternel de Voulg ne doit jamais s'éteindre — honneur sacré salamander. Le mini-jeu : alimenter la flamme au bon combustible selon l'heure (charbon la nuit, résine le jour), écarter les cendres et repousser un coup de vent traître. Flamme maintenue haute toute la veille = offrande des fidèles ; flamme faiblie = déshonneur, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde du brasero central du temple.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Veilleur de la Flamme » — titre honorifique salamander, +5 % réputation race et bénédiction cosmétique de feu.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_005`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_005`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_TWN_001, bourrasque)`, `SYS_PAY_WAGE`
