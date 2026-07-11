# Passeur de barque inter-îles — `JOB_LOG_008`

## Identification
- **JOB_ID** : `JOB_LOG_008`
- **Titre** : Passeur de barque inter-îles
- **Catégorie** : logistics
- **Employeur** : `npc` → `NPC_UND_78` (Coursier marin)
- **Zone** : Archipel d'Écume (`ZONE_UND_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 340 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Archipel d'Écume)

## Déroulement du service (`!work`)
L'Archipel étant éclaté en îlots, le passeur relie les quartiers à la rame. Le mini-jeu : lire la marée et le courant pour tracer la route, doser le coup de rame contre le clapot et livrer passagers/colis au bon ponton. Traversée sèche et à l'heure = prime ; barque embarquant l'eau = colis trempé, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : liaisons vers les îlots éloignés, barque à voile.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Batelier des Marées » — bonus de nage/navigation (documenté) et lignes de passage lointaines confiées en propre (revenu majoré).

## Intégration Bot
- Joueur : `!apply_job JOB_LOG_008`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_LOG_008`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_UND_CAP_001, maree_haute)`, `SYS_PAY_WAGE`
