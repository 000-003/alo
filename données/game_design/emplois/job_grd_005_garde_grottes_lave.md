# Garde des Grottes de Lave — `JOB_GRD_005`

## Identification
- **JOB_ID** : `JOB_GRD_005`
- **Titre** : Garde des Grottes de Lave
- **Catégorie** : guard
- **Employeur** : `city` → `ZONE_SAL_TWN_001` (Milice de Voulg) ; cf. `NPC_VOU_18` (Garde des Grottes)
- **Zone** : Voulg (`ZONE_SAL_TWN_001`)

## Paramètres
- **Niveau requis** : 11
- **Salaire par service** : 420 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Salamander)

## Déroulement du service (`!work`)
Les grottes de lave sous Voulg abritent des créatures ignées et des filons convoités. Le mini-jeu : patrouiller en surveillant une jauge de chaleur (rester trop près de la coulée te blesse) et repousser une escarmouche scriptée d'élémentaires. Filon protégé + jauge maîtrisée = prime ; brûlure = soins déduits du salaire.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : affectation aux galeries profondes, tolérance à la chaleur accrue.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Garde des Braises » — résistance feu passive pendant le service et grade de chef de patrouille (+5 % réputation Salamander).

## Intégration Bot
- Joueur : `!apply_job JOB_GRD_005`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_GRD_005`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_TWN_001, reveil_elementaire)`, `SYS_PAY_WAGE`
