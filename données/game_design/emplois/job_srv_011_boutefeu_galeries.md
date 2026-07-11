# Boutefeu des galeries — `JOB_SRV_011`

## Identification
- **JOB_ID** : `JOB_SRV_011`
- **Titre** : Boutefeu des galeries
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_GRA_52` (Maître des explosifs)
- **Zone** : Granzam (`ZONE_GNO_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 340 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Granzam)

## Déroulement du service (`!work`)
Le Maître des explosifs te confie l'ouverture des nouvelles galeries. Le mini-jeu : placer les charges au bon point de faille, mesurer la longueur de mèche (trop courte = tu n'as pas le temps de fuir, trop longue = charge éventée) et sonner l'évacuation avant la mise à feu. Tir net et sûr = prime ; mauvais calcul = incident, soins déduits et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : chantiers de percement profond.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Mèche sûre » — le Maître te livre un patron de charge (utilitaire de minage documenté) et te confie l'ouverture des veines de mithril.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_011`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_011`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_GNO_CAP_001, mise_a_feu)`, `SYS_PAY_WAGE`
