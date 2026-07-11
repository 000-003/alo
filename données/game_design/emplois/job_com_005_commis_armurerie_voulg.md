# Commis de l'armurerie — `JOB_COM_005`

## Identification
- **JOB_ID** : `JOB_COM_005`
- **Titre** : Commis de l'armurerie
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_VOU_40` (Marchand d'armes lourdes Kern)
- **Zone** : Voulg (`ZONE_SAL_TWN_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 240 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Voulg)

## Déroulement du service (`!work`)
Kern vend haches, masses et armes à deux mains à la légion. Le mini-jeu : conseiller l'arme selon le profil du client (force, portée), présenter la durabilité et conclure au juste prix. Bon conseil = vente et commission ; arme inadaptée vendue = retour et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Kern te confie le rayon des pièces d'exception.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Œil de l'armurier » — estimation instantanée de la valeur d'une arme et remise fournisseur transmise par Kern (crochet économie).

## Intégration Bot
- Joueur : `!apply_job JOB_COM_005`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_005`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_TWN_001, commande_militaire)`, `SYS_PAY_WAGE`
