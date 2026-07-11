# Guide d'orientation des Débutants — `JOB_SRV_003`

## Identification
- **JOB_ID** : `JOB_SRV_003`
- **Titre** : Guide d'orientation des Débutants
- **Catégorie** : service
- **Employeur** : `city` → `ZONE_NEU_CAP_001` (Bureau d'accueil d'Alne)
- **Zone** : Alne (`ZONE_NEU_CAP_001`)

## Paramètres
- **Niveau requis** : 3
- **Salaire par service** : 160 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Alne)

## Déroulement du service (`!work`)
Alne étant le premier sol foulé par les nouveaux joueurs, tu accueilles une fournée de débutants perdus. Le mini-jeu enchaîne 3 questions (« où acheter une arme ? », « comment quitter la ville sans mourir ? ») ; répondre juste et brièvement rassure la recrue. Bonnes réponses = pourboire de gratitude ; réponse fausse envoyée à un débutant = plainte et malus.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : brassard officiel, groupes plus nombreux.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Mentor d'Alne » — chaque recrue guidée peut t'ajouter en contact (réseau social), et la ville t'octroie un titre cosmétique « Guide ».

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_003`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_003`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_NEU_CAP_001, afflux_recrues)`, `SYS_PAY_WAGE`
