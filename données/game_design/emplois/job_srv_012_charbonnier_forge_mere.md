# Charbonnier de la Forge-Mère — `JOB_SRV_012`

## Identification
- **JOB_ID** : `JOB_SRV_012`
- **Titre** : Charbonnier de la Forge-Mère
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_BRO_52` (Marchand de charbon)
- **Zone** : Brokkheim (`ZONE_LEP_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 230 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Brokkheim)

## Déroulement du service (`!work`)
Sans charbon de qualité, la Forge-Mère s'éteint. Le mini-jeu : monter la meule de charbonnier, contrôler la combustion lente (trop d'air = tout brûle en cendre, pas assez = charbon vert inutilisable) et ensacher par calibre. Charbon dense et bien calibré = prime des forgerons ; fournée gâchée = −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : fours à charbon dur pour aciers fins.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Maître charbonnier » — le charbon que tu produis pour ta propre forge réduit tes frais de forge (crochet craft) et le marchand te confie l'approvisionnement des maîtres.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_012`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_012`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_LEP_CAP_001, penurie_charbon)`, `SYS_PAY_WAGE`
