# Gardien de vestiaire des masques — `JOB_SRV_013`

## Identification
- **JOB_ID** : `JOB_SRV_013`
- **Titre** : Gardien de vestiaire des masques
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_PEN_33` (Marchand de masques)
- **Zone** : Penwether (`ZONE_SPR_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 200 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Penwether)

## Déroulement du service (`!work`)
Aux entrées des bals et salons de Penwether, on confie son masque de rechange au vestiaire. Le mini-jeu : ranger chaque masque sous un jeton, le rendre au bon porteur sans jamais lier un visage à un nom et repérer le resquilleur qui réclame un masque qui n'est pas le sien. Vestiaire tenu sans confusion = pourboires ; masque rendu au mauvais client = incident d'identité, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : vestiaire des grands bals du Voile.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Gardien du Voile » — tu mémorises les masques d'habitués (réseau social spriggan) et le marchand te confie la garde des masques de prestige.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_013`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_013`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SPR_CAP_001, soir_de_gala)`, `SYS_PAY_WAGE`
