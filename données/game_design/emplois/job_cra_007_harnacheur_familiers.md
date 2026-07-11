# Harnacheur de familiers — `JOB_CRA_007`

## Identification
- **JOB_ID** : `JOB_CRA_007`
- **Titre** : Harnacheur de familiers
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_FRE_60` (Maître des familiers)
- **Zone** : Freelia (`ZONE_CAI_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 330 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Cait Sith)

## Déroulement du service (`!work`)
Le Maître des familiers te confie la sellerie : harnais, laisses et bâts taillés sur mesure pour chaque espèce. Le mini-jeu : mesurer la bête, découper le cuir au bon gabarit et river les boucles sans blesser l'animal à l'essayage. Harnais ajusté = commande honorée ; cuir gâché ou bête pincée = −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : accès aux cuirs rares (dragon, sanglier des cimes).
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Sellier des Bêtes » — tu produis un harnais orné `DEC_*` pour ta propre monture (crochet SOC-3) et le Maître te lègue un patron secret.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_007`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_007`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_CAI_CAP_001, commande_dresseur)`, `SYS_PAY_WAGE`
