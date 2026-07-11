# Concierge de l'Auberge de la Racine — `JOB_HOS_003`

## Identification
- **JOB_ID** : `JOB_HOS_003`
- **Titre** : Concierge de l'Auberge de la Racine
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_ALN_44` (Aubergiste Merida)
- **Zone** : Alne (`ZONE_NEU_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 240 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Alne)

## Déroulement du service (`!work`)
Merida te confie le registre nocturne : attribuer les chambres, calmer un client éméché, retrouver la clé n°7 égarée. Le mini-jeu enchaîne 3 requêtes textuelles ; répondre dans l'ordre de priorité (urgence médicale > litige > confort) maximise le pourboire. Une erreur de priorité coûte 20 % du salaire du service (client mécontent).

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Merida te laisse la caisse du soir.
- **Compagnon → Maître** (200 services, ×2.0) : tu obtiens la maîtrise « Veilleur de confiance » — accès au coffre de l'auberge et remise de 10 % sur la restauration pour toi-même. Déblocage narratif : Merida partage un `QI` sur les allées et venues suspectes à Alne (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_003`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_003`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_NEU_CAP_001, rush_nocturne)`, `SYS_PAY_WAGE`
