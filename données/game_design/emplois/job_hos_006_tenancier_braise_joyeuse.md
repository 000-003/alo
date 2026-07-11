# Tenancier-adjoint de La Braise Joyeuse — `JOB_HOS_006`

## Identification
- **JOB_ID** : `JOB_HOS_006`
- **Titre** : Tenancier-adjoint de La Braise Joyeuse
- **Catégorie** : hospitality
- **Employeur** : `npc` → `NPC_GAT_42` (Tavernier Grum)
- **Zone** : Gattan (`ZONE_SAL_CAP_001`)

## Paramètres
- **Niveau requis** : 9
- **Salaire par service** : 320 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Gattan)

## Déroulement du service (`!work`)
La Braise Joyeuse est la taverne bruyante de la capitale salamander. Le mini-jeu : gérer trois tablées (militaires, forgerons, aventuriers), servir la bonne tournée à chacune et lancer une chanson à boire au bon moment pour éviter la bagarre. Salle chauffée à blanc sans casse = grosse recette ; rixe = mobilier brisé, −20 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Grum te confie les nuits de fête.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Âme de la Taverne » — accès au coffre, tarif ami et Grum, qui entend tout, te livre les rumeurs de la capitale (crochet side-quest affinité).

## Intégration Bot
- Joueur : `!apply_job JOB_HOS_006`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_HOS_006`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_CAP_001, nuit_de_victoire)`, `SYS_PAY_WAGE`
