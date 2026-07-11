# Intendant du dortoir de la Forge-Mère — `JOB_HOS_012`

## Identification
- **JOB_ID** : `JOB_HOS_012`
- **Titre** : Intendant du dortoir de la Forge-Mère
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_BRO_20` (Concierge de la Forge-Mère) — hébergement des forgerons
- **Zone** : Brokkheim (`ZONE_LEP_CAP_001`)
- **Note** : `[BESOIN_NPC: aubergiste/tavernier dédié Brokkheim]` — aucune auberge propre listée à Brokkheim ; le service s'exerce au dortoir de la Forge-Mère en attendant.

## Paramètres
- **Niveau requis** : 10
- **Salaire par service** : 360 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Brokkheim)

## Déroulement du service (`!work`)
La Forge-Mère leprechaun ne s'éteint jamais ; ses forgerons dorment en rotation dans le grand dortoir. Le mini-jeu : attribuer les couchettes selon l'équipe qui sort du feu, servir la soupe de fer et faire respecter le silence pour ceux qui récupèrent. Rotation bien huilée = pourboire collectif ; forgeron d'équipe de nuit réveillé = colère, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des cellules des maîtres-forgerons.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Intendant de la Forge-Mère » — accès au coffre du dortoir et le concierge te confie les secrets d'atelier qui circulent la nuit (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_012`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_012`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_LEP_CAP_001, releve_de_forge)`, `SYS_PAY_WAGE`
