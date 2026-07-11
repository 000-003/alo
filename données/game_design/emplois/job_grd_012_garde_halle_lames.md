# Garde de la Halle aux Lames — `JOB_GRD_012`

## Identification
- **JOB_ID** : `JOB_GRD_012`
- **Titre** : Garde de la Halle aux Lames
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_LEP_CAP_001` (Garde de Brokkheim) ; cf. `NPC_BRO_30` (Garde de la halle)
- **Zone** : Brokkheim (`ZONE_LEP_CAP_001`)

## Paramètres
- **Niveau requis** : 13
- **Salaire par service** : 480 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Leprechaun)

## Déroulement du service (`!work`)
La Halle aux Lames expose les plus belles pièces des forges leprechaun — tentation pour les voleurs. Le mini-jeu : faire la ronde entre les vitrines, repérer une lame subtilement remplacée par une copie et intercepter une escarmouche scriptée de voleurs. Vol déjoué = grosse prime ; pièce de maître dérobée sous ta garde = déshonneur, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde de la salle des pièces légendaires.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil du connaisseur » — tu distingues d'un regard le vrai du faux (identification d'armes documentée) et grade de chef de garde (+5 % réputation Leprechaun).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_012`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_012`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_LEP_CAP_001, tentative_vol)`, `SYS_PAY_WAGE`
