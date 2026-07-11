# Graveur de runes de forge — `JOB_CRA_006`

## Identification
- **JOB_ID** : `JOB_CRA_006`
- **Titre** : Graveur de runes de forge
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_GAT_24` (Graveuse de Runes Tessa)
- **Zone** : Gattan (`ZONE_SAL_CAP_001`)

## Paramètres
- **Niveau requis** : 12
- **Salaire par service** : 440 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Salamander)

## Déroulement du service (`!work`)
Tessa grave les runes de renfort sur les lames de la Grande Forge. Le mini-jeu : reproduire un tracé runique en un seul geste (une main qui tremble brise la rune) puis choisir l'ordre de gravure. Rune parfaite = pièce enchantée valorisée ; tracé raté = métal fêlé, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : accès aux runes de renfort intermédiaires.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Main sûre » — réduction du coût d'enchantement T1-T2 sur ton propre équipement (crochet enchantement) et Tessa te transmet une rune secrète.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_006`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_006`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_CAP_001, commande_royale)`, `SYS_PAY_WAGE`
