# Facteur d'instruments — `JOB_CRA_009`

## Identification
- **JOB_ID** : `JOB_CRA_009`
- **Titre** : Facteur d'instruments
- **Catégorie** : crafting
- **Employeur** : `npc` → `NPC_LIO_67` (Marchand de cuivre)
- **Zone** : Lioda (`ZONE_PUC_CAP_001`)

## Paramètres
- **Niveau requis** : 11
- **Salaire par service** : 400 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Puca)

## Déroulement du service (`!work`)
L'atelier coule cloches et cors dans le cuivre de Lioda. Le mini-jeu : couler l'alliage à la bonne température, puis accorder l'instrument à l'oreille (frapper, écouter, limer jusqu'à la note juste). Instrument accordé pile = pièce d'exception ; note fausse figée dans le métal = rebut, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : fonte des grandes cloches de résonance.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Oreille absolue » — tu peux fabriquer un instrument décoratif `DEC_*` à buff musical pour le logement (crochet SOC-3) et le marchand te confie un alliage-secret.

## Intégration Bot
- Joueur : `!apply_job JOB_CRA_009`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_CRA_009`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_PUC_CAP_001, commande_cloche)`, `SYS_PAY_WAGE`
