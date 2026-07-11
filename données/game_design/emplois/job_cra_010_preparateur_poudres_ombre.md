# Préparateur de poudres d'ombre — `JOB_CRA_010`

## Identification
- **JOB_ID** : `JOB_CRA_010`
- **Titre** : Préparateur de poudres d'ombre
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_DUS_35` (Alchimiste de poisons)
- **Zone** : Duskarn (`ZONE_IMP_CAP_001`)

## Paramètres
- **Niveau requis** : 11
- **Salaire par service** : 400 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Imp)

## Déroulement du service (`!work`)
L'alchimiste imp broie les poudres de camouflage et de sommeil. Le mini-jeu : doser des réactifs volatils à la balance (une pincée de trop et le mélange fume et se gâte), broyer au bon grain et ensacher sous cloche. Poudre stable = lot vendable ; mélange raté = nuage âcre, malus de service et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : accès aux réactifs interdits de la réserve basse.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Main d'ombre » — réduction du coût de tes propres consommables d'évasion/furtivité (crochet alchimie) et l'alchimiste te confie une formule tenue secrète.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_010`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_010`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_IMP_CAP_001, reaction_instable)`, `SYS_PAY_WAGE`
