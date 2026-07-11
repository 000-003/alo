# Clerc de l'Hôtel des Ventes — `JOB_COM_006`

## Identification
- **JOB_ID** : `JOB_COM_006`
- **Titre** : Clerc de l'Hôtel des Ventes
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_GAT_50` (Courtier de l'Hôtel des Ventes Fenn)
- **Zone** : Gattan (`ZONE_SAL_CAP_001`)

## Paramètres
- **Niveau requis** : 8
- **Salaire par service** : 300 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Gattan)

## Déroulement du service (`!work`)
Fenn t'installe au guichet de l'Hôtel des Ventes. Le mini-jeu : vérifier qu'une mise en vente respecte le plancher anti-arbitrage, calculer la taxe de dépôt (2 %) et détecter une annonce frauduleuse. Guichet tenu sans erreur = commission ; validation d'une arnaque = sanction de Fenn, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : gestion des lots de forte valeur.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Courtier assermenté » — +2 slots HdV permanents pour toi-même (crochet HdV) et Fenn te tuyaute sur les tendances du marché.

## Intégration Bot
- Joueur : `!apply_job JOB_COM_006`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_006`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_CAP_001, tentative_fraude)`, `SYS_PAY_WAGE`
