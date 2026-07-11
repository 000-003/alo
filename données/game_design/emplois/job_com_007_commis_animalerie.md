# Commis de l'animalerie — `JOB_COM_007`

## Identification
- **JOB_ID** : `JOB_COM_007`
- **Titre** : Commis de l'animalerie
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_FRE_27` (Marchand de souvenirs) ; rayon familiers
- **Zone** : Freelia (`ZONE_CAI_CAP_001`)

## Paramètres
- **Niveau requis** : 4
- **Salaire par service** : 190 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Freelia)

## Déroulement du service (`!work`)
L'échoppe vend nourriture, jouets et accessoires pour familiers. Le mini-jeu : conseiller le bon régime selon l'espèce du client, éviter de vendre un aliment toxique à la mauvaise bête et conclure la vente. Bon conseil = commission ; aliment inadapté vendu = familier malade, plainte et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : rayon des familiers exotiques.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Nourrisseur » — remise sur les consommables de familier pour toi-même (crochet économie) et le marchand te réserve les arrivages rares.

## Intégration Bot
- Joueur : `!apply_job JOB_COM_007`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_007`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_CAI_CAP_001, arrivage_exotique)`, `SYS_PAY_WAGE`
