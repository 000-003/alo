# Hôte de l'Auberge de l'Écume — `JOB_HOS_008`

## Identification
- **JOB_ID** : `JOB_HOS_008`
- **Titre** : Hôte de l'Auberge de l'Écume
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_UND_44` (Aubergiste de l'Écume)
- **Zone** : Archipel d'Écume (`ZONE_UND_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 250 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Archipel d'Écume)

## Déroulement du service (`!work`)
L'auberge de l'Écume est bâtie sur pilotis, bercée par la marée. Le mini-jeu : loger les voyageurs selon le mal de mer (chambres basses stables pour les non-Undine), servir la soupe de varech chaude et amarrer les barques des clients avant la nuit. Amarrage sûr + clients installés = pourboire ; barque partie à la dérive = réclamation, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des suites face au large.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Hôte des Marées » — accès au coffre de l'auberge et l'aubergiste te confie les rumeurs des marins de passage (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_008`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_008`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_UND_CAP_001, tempete_nocturne)`, `SYS_PAY_WAGE`
