# ⛏️ Crieur de la Halle — `NPC_GRA_39`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_39` |
| **Nom affiché** | Crieur de la Halle |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 10 / 600 / 150 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Crieur public de la Grande Halle — il annonce les cours des minerais, les arrivages, les événements. Sa voix porte sur toute la place. Depuis trois jours, les cours qu'il annonce ne bougent pas. Le fer reste à 150, l'argent à 220, le mithril à 980 — des chiffres figés. Or le tableau de Marla (`NPC_GRA_02`) change tous les jours. Le Crieur lit ce que le Cardinal lui dicte, mais les cours du Cardinal sont bloqués. Il n'ose pas le dire à voix haute. Lié au fil **⛏️ Le Filonant** : les cours sont bloqués parce que le Filonant a perturbé les veines de minerai — le Cardinal n'arrive plus à calculer les prix.
- **Traits** : stentorien, loyal, anxieux, superstitieux.
- **Voix** : Tonitruante pour les annonces, mais qui chuchote dès qu'il parle en privé. « Cours du fer : 150 Yuld le lingot ! … C'est ce qu'ils disent, en tout cas. »
- **Relations** : `NPC_GRA_02` (Marla — compare les cours) ; `NPC_GRA_31` (Marchand Fer — confronté au même phénomène) ; `NPC_GRA_27` (Vice-Chancelier — lui a ordonné de continuer à crier).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_39_01` | K0 | annonce, cours | Annonce des cours des minerais — 3 fois par jour | — |
| 2 | `QI_GRA_39_02` | K0 | evenement, halle | Annonces d'événements — arrivages, réunions, alertes | — |
| 3 | `QI_GRA_39_03` | K0 | criee, horaire | Horaires des criées — 8h, 12h, 18h | — |
| 4 | `QI_GRA_39_04` | K1 | cours, bloques | Les cours n'ont pas bougé depuis trois jours — anormal | `AFF>=60` |
| 5 | `QI_GRA_39_05` | K1 | marla, tableau | Le tableau de Marla (`NPC_GRA_02`) change — mais pas ses annonces | `AFF>=65` |
| 6 | `QI_GRA_39_06` | K1 | cardinal, dictée | Le Cardinal lui dicte les cours — normalement mis à jour toutes les heures | — |
| 7 | `QI_GRA_39_07` | K2 | filonant, perturbation | Le Marchand Fer (`NPC_GRA_31`) a dit que les veines « ne répondent plus » aux sondages | `AFF>=85` |
| 8 | `QI_GRA_39_08` | K2 | vice_chancelier, ordre | Le Vice-Chancelier (`NPC_GRA_27`) lui a ordonné de continuer les annonces coûte que coûte | `QUEST:QST_GRA_COURS_BLOQUES` |
| 9 | `QI_GRA_39_09` | K3 | cardinal, freeze | Le Cardinal a gelé les cours parce que le Filonant a créé une veine « pirate » qui fausse les statistiques — le système n'arrive plus à agréger les données des filons, et affiche par défaut les derniers cours valides | JAMAIS — déflection : *(il fait sonner sa cloche, mais sa voix est un ton plus bas)* « Le fer… 150. L'argent… 220. J'annonce ce qu'on me dit d'annoncer. Je ne pose pas de questions. » |
| 10 | `QI_GRA_39_10` | KX | *(tout le reste)* | *(il remonte sa cloche)* « La Halle ne dort jamais. Les cours non plus. Sauf cette semaine. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!annonces` (écouter les cours du jour).
- Porteur du fil **⛏️ Le Filonant** (cours bloqués par la perturbation des veines).
- Donneur de `QST_GRA_COURS_BLOQUES` : enquête sur les cours qui ne bougent pas.

## 5. Intégration Bot

- **Accueil** (`!parler crieur`) : *Au centre de la Grande Halle, cloche à la main.* « Ouverture des cours ! Fer… argent… tout est stable. Trop stable. »
- `!annonces` actif à la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « gel des cours par Cardinal » pour l'orchestrateur.
