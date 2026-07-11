# Mouleur de masques — `JOB_CRA_013`

## Identification
- **JOB_ID** : `JOB_CRA_013`
- **Titre** : Mouleur de masques
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_PEN_22` (Maître des masques)
- **Zone** : Penwether (`ZONE_SPR_CAP_001`)

## Paramètres
- **Niveau requis** : 11
- **Salaire par service** : 400 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Spriggan)

## Déroulement du service (`!work`)
Les masques spriggan ne cachent pas seulement le visage : ils portent une part d'illusion. Le mini-jeu : mouler la forme sur le gabarit du client, tendre la laque sans bulle et fixer le fil d'illusion au bon nœud. Masque net et illusion stable = pièce d'exception ; bulle dans la laque ou fil mal noué = illusion qui grésille, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : masques à double visage, laques rares.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Faiseur de visages » — tu peux fabriquer un masque décoratif `DEC_*` à buff passif pour le logement (crochet SOC-3) et le Maître te transmet un motif d'illusion secret.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_013`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_013`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SPR_CAP_001, commande_bal)`, `SYS_PAY_WAGE`
