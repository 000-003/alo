# Manœuvre des remparts — `JOB_SRV_006`

## Identification
- **JOB_ID** : `JOB_SRV_006`
- **Titre** : Manœuvre des remparts
- **Catégorie** : service
- **Employeur** : `npc` → `NPC_GAT_78` (Tarn, Maçon des remparts)
- **Zone** : Gattan (`ZONE_SAL_CAP_001`)

## Paramètres
- **Niveau requis** : 6
- **Salaire par service** : 230 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Gattan)

## Déroulement du service (`!work`)
Tarn entretient les murailles de basalte de Gattan. Le mini-jeu : gâcher le mortier au bon dosage, hisser les pierres à la poulie sans lâcher la corde et colmater une brèche avant la relève. Section réparée solide = prime de chantier ; pierre lâchée = accident, soins déduits et −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : chantiers des tours d'angle, poulies lourdes.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Bras des Remparts » — Tarn t'enseigne un patron de maçonnerie (bonus utilitaire de construction, documenté) et te confie la réfection des portes.

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_006`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_006`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_SAL_CAP_001, breche_muraille)`, `SYS_PAY_WAGE`
