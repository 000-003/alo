# Étalagiste du marché central — `JOB_COM_003`

## Identification
- **JOB_ID** : `JOB_COM_003`
- **Titre** : Étalagiste du marché central
- **Catégorie** : commerce
- **Employeur** : `npc` → `NPC_ALN_29` (Marchand Peppin)
- **Zone** : Alne (`ZONE_NEU_CAP_001`)

## Paramètres
- **Niveau requis** : 4
- **Salaire par service** : 190 Yrds
- **Cooldown** : 8 h
- **Réputation gagnée** : ville (Alne)

## Déroulement du service (`!work`)
Peppin t'ouvre son étal à l'aube. Le mini-jeu : disposer la marchandise (les denrées fraîches devant), annoncer les prix du jour et conclure 3 ventes en négociant sans brader sous le plancher anti-arbitrage. Bonne marge = commission ; vente à perte = Peppin retient 15 %.

## Progression
- **Apprenti → Compagnon** (50 services, ×1.5) : Peppin te laisse fixer les prix dans une fourchette.
- **Compagnon → Maître** (200 services, ×2.0) : maîtrise « Bonimenteur » — +1 slot de vente HdV temporaire pendant le service et remise fournisseur transmise par Peppin (crochet economie).

## Intégration Bot
- Joueur : `!apply_job JOB_COM_003`, `!work`, `!payslip`
- GM : `!sys_assign_job [Avatar] JOB_COM_003`, `!sys_fire [Avatar]`
- IA : `SYS_ASSIGN_JOB`, `SYS_JOB_EVENT(ZONE_NEU_CAP_001, jour_de_foire)`, `SYS_PAY_WAGE`
