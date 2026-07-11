# Garde du Balcon Résonant — `JOB_GRD_009`

## Identification
- **JOB_ID** : `JOB_GRD_009`
- **Titre** : Garde du Balcon Résonant
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_PUC_CAP_001` (Garde de Lioda) ; cf. `NPC_LIO_09` (Capitaine des gardes)
- **Zone** : Lioda (`ZONE_PUC_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 360 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Puca)

## Déroulement du service (`!work`)
Les balcons résonants de Lioda amplifient le moindre son — atout et faiblesse. Le mini-jeu : identifier une menace à l'oreille dans le brouhaha (pas furtifs, corde qui grince), sonner l'alerte au bon carillon et soutenir une escarmouche scriptée. Menace démasquée par l'ouïe = prime ; fausse alerte carillonnée = panique en ville, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde des balcons intérieurs du palais sonore.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Ouïe fine » — détection passive des embuscades pendant le service (documenté) et grade de chef de garde (+5 % réputation Puca).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_009`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_009`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_PUC_CAP_001, intrus_furtif)`, `SYS_PAY_WAGE`
