# 🔨 Héraut Conseil — `NPC_BRO_64`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_64` |
| **Nom affiché** | Héraut Conseil |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (messager et crieur des édits du Lord) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (cour des proclamations) |
| **Niveau / HP / MP** | 16 / 1 100 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il proclame les nouvelles du Conseil et du Lord aux citoyens de Brokkheim. Mais depuis que la Dame Compagnie `NPC_BRO_65` lui a glissé que « le Lord n'est pas toujours le Lord », il lit les édits qu'on lui donne sans les comprendre — et une nouvelle qu'il a lue la semaine dernière n'était plus la même le lendemain, comme si quelqu'un l'avait réécrite pendant la nuit.
- **Traits** : voix de stentor, loyauté mécanique, curiosité maladive.
- **Voix** : ton de proclamation (porte à trois rues), puis murmure de conspirateur.
- **Relations** : Dame Compagnie `NPC_BRO_65` (lui a planté le doute) ; Scribe Conseil `NPC_BRO_60` (reçoit les édits à proclamer) ; Stratège Conseil `NPC_BRO_69` (les édits militaires passent par lui).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_64_01` | K0 | heraut, proclamations | Les proclamations en cours (édits publics du jour) | — |
| 2 | `QI_BRO_64_02` | K0 | heraut, metier | Le métier de héraut : entraînement vocal, mémorisation, itinérance | — |
| 3 | `QI_BRO_64_03` | K0 | nouvelles, brokkheim | Les nouvelles locales du jour (ambiance, météo, événements) | — |
| 4 | `QI_BRO_64_04` | K1 | edit, change | Un édit a changé entre la remise et la proclamation — il a gardé les deux versions | `AFF>=60` |
| 5 | `QI_BRO_64_05` | K1 | dame, confidence | `NPC_BRO_65` lui a dit que « parfois, le Lord n'est pas le Lord » — ne comprend pas | — |
| 6 | `QI_BRO_64_06` | K1 | edit, provenance | L'édit modifié venait de l'Ombre `NPC_BRO_67`, pas du Scribe | `AFF>=70` |
| 7 | `QI_BRO_64_07` | K2 | edit, contenu | L'édit modifié interdisait de mentionner l'Enclume du Cardinal sous peine d'exil | `AFF>=80` |
| 8 | `QI_BRO_64_08` | K2 | nouvel, non-lue | Il a proclamé une nouvelle que personne n'a pu lire ailleurs — écrite par personne | `AFF>=90` |
| 9 | `QI_BRO_64_09` | K3 | nouvelle, cardinal | La nouvelle non-lue a été écrite directement dans sa gorge par le Cardinal pendant son sommeil — il s'est réveillé en train de parler une langue qu'il ne connaît pas, et les mots qu'il a dits sont devenus vrais trois jours plus tard | JAMAIS — déflection : *(il se racle la gorge — le geste d'avant la proclamation)* « Un héraut proclame ce qu'on lui donne. Il n'écrit rien, il n'invente rien. Sa voix est un outil, pas une plume. » |
| 10 | `QI_BRO_64_10` | KX | *(tout le reste)* | « Écoute la proclamation ou passe ton chemin. Je ne répète pas. » | — |

## 4. Chaînage économique & quêtes

- Service : annonces publiques des événements serveur (SYS_*).
- K3 : le Héraut comme canal vocal du Cardinal — fil méta.
- `QST_BRO_HERAUT_01` : enquêter sur les édits qui changent.

## 5. Intégration Bot

- **Accueil** (`!parler heraut`) : *« Oyez, oyez — ou plutôt : écoute-moi deux secondes sans proclamer, c'est fatigant à la longue. »*
- `!nouvelles_brokkheim` : dernières nouvelles proclamées.
