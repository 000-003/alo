# Commis de la criée aux poissons — `JOB_COM_008`

## Identification
- **JOB_ID** : `JOB_COM_008`
- **Titre** : Commis de la criée aux poissons
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_UND_31` (Marchand de poissons)
- **Zone** : Archipel d'Écume (`ZONE_UND_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 210 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Archipel d'Écume)

## Déroulement du service (`!work`)
La criée du matin part à la voix. Le mini-jeu : évaluer la fraîcheur des lots (œil clair, écaille brillante), lancer l'enchère et adjuger au meilleur offrant sans brader. Lots vendus frais au bon prix = commission ; poisson défraîchi refourgué = plainte et réputation entamée, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : conduite de la grande criée, lots d'abysse.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Voix de la Criée » — priorité d'achat sur les arrivages rares pour toi-même (crochet économie) et le marchand te confie sa clientèle de gros.

## Intégration Bot
- Joueur : `!apply_job JOB_COM_008`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_008`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_UND_CAP_001, arrivage_abysse)`, `SYS_PAY_WAGE`
