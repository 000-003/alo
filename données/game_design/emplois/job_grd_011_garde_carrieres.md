# Garde des Carrières — `JOB_GRD_011`

## Identification
- **JOB_ID** : `JOB_GRD_011`
- **Titre** : Garde des Carrières
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_GNO_CAP_001` (Garde de Granzam) ; cf. `NPC_GRA_56` (Sentinelle des carrières)
- **Zone** : Granzam (`ZONE_GNO_CAP_001`)

## Paramètres
- **Niveau requis** : 12
- **Salaire par service** : 440 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Gnome)

## Déroulement du service (`!work`)
Les carrières de Granzam recèlent gemmes et mithril, cibles de pillards et de créatures des tunnels. Le mini-jeu : surveiller les galeries en guettant les signes d'éboulement (craquements, poussière qui tombe), verrouiller les accès aux filons et soutenir une escarmouche scriptée. Filon protégé + galerie stable = prime ; éboulement mal anticipé = accident, soins déduits et −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : garde des galeries à gemmes.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Roc vivant » — détection passive des instabilités de terrain (documenté) et grade de chef des carrières (+5 % réputation Gnome).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_011`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_011`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_GNO_CAP_001, pillards_filon)`, `SYS_PAY_WAGE`
