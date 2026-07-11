# Ménestrel de rue accordé — `JOB_SRV_009`

## Identification
- **JOB_ID** : `JOB_SRV_009`
- **Titre** : Ménestrel de rue accordé
- **Catégorie** : service
- **Employeur** : `city` → `ZONE_PUC_CAP_001` (Guilde des Ménestrels de Lioda) ; cf. `NPC_LIO_65` (Vieux ménestrel)
- **Zone** : Lioda (`ZONE_PUC_CAP_001`)

## Paramètres
- **Niveau requis** : 5
- **Salaire par service** : 210 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : race (Puca)

## Déroulement du service (`!work`)
La ville rétribue les ménestrels qui animent ses places. Le mini-jeu : lire l'humeur de la foule et choisir le répertoire (ballade lente, gigue enjouée), tenir le rythme sans décrocher et relancer quand l'attention retombe. Foule conquise = chapeau bien rempli ; public lassé = pièces rares, −15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : scènes des grandes places, répertoire élargi.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Barde accompli » — tu débloques une aubade jouable en groupe (buff social documenté) et la guilde t'octroie le titre de « Voix de Lioda ».

## Intégration Bot
- Joueur : `!apply_job JOB_SRV_009`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_SRV_009`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_PUC_CAP_001, place_bondee)`, `SYS_PAY_WAGE`
