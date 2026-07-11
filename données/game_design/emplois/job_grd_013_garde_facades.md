# Garde des Façades — `JOB_GRD_013`

## Identification
- **JOB_ID** : `JOB_GRD_013`
- **Titre** : Garde des Façades
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_SPR_CAP_001` (Garde de Penwether) ; cf. `NPC_PEN_50` (Garde des façades)
- **Zone** : Penwether (`ZONE_SPR_CAP_001`)

## Paramètres
- **Niveau requis** : 12
- **Salaire par service** : 440 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Spriggan)

## Déroulement du service (`!work`)
À Penwether, les façades mentent : passages secrets et fausses portes truffent la ville. Le mini-jeu : distinguer une vraie ruelle d'un mur peint en trompe-l'œil, repérer l'intrus qui exploite une illusion et soutenir une escarmouche scriptée. Illusion percée à jour = prime ; garde égaré dans un faux passage = temps perdu et −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde du quartier des façades mouvantes.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil qui perce » — détection passive des illusions pendant le service (documenté) et grade de chef des façades (+5 % réputation Spriggan).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_013`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_013`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SPR_CAP_001, intrus_illusionniste)`, `SYS_PAY_WAGE`
