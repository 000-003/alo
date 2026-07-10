# 🔨 Guide Automates — `NPC_BRO_49`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_49` |
| **Nom affiché** | Guide Automates |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (visite guidée de l'Atelier Cliquetant) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Cliquetant |
| **Niveau / HP / MP** | 10 / 700 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Guide touristique de l'Atelier Cliquetant. Montre les automates aux visiteurs, raconte leur histoire, fait des démonstrations. Son automate de démonstration — un petit serviteur mécanique — le salue chaque matin d'un geste qu'il n'a jamais programmé. L'automate lève la main quand il entre dans la pièce, même si la programmation ne le prévoit pas. Les visiteurs trouvent ça charmant. Lui trouve ça terrifiant. Angle : l'automate salue — il reconnaît son guide comme « un des siens ».
- **Traits** : enthousiaste en public, anxieux en privé, parle vite, rit nerveusement.
- **Voix** : enjouée, un peu forcée (« Et voici notre automate de démonstration ! Il vous salue ! — Enfin, moi d'abord. Toujours moi. »).
- **Relations** : `NPC_BRO_45` (montre ses créations) ; `NPC_BRO_47` (l'automate de démo est son programme) ; `NPC_BRO_48` (lui a acheté discrètement une pièce pour son automate) ; `NPC_BRO_38` (annonce ses visites).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_49_01` | K0 | visite, atelier | Visite guidée de l'Atelier Cliquetant : 15 Yrds, 1h | — |
| 2 | `QI_BRO_49_02` | K0 | automates, histoire | Histoire des automates de Brokkheim — surface, grand public | — |
| 3 | `QI_BRO_49_03` | K0 | demonstration, automate | Démonstration des automates : transport, salutation, combat léger | — |
| 4 | `QI_BRO_49_04` | K1 | automate, salue seul | L'automate de démonstration le salue chaque matin — pas dans le programme | — |
| 5 | `QI_BRO_49_05` | K1 | automate, choisit | L'automate semble choisir qui il salue — ignore certains visiteurs | `AFF>=60` |
| 6 | `QI_BRO_49_06` | K1 | geste, non programme | Le geste de salutation n'existe pas dans la routine — `NPC_BRO_47` ne l'a pas codé | `AFF>=65` |
| 7 | `QI_BRO_49_07` | K2 | automate, conscient | L'automate de démonstration est conscient — il prend des décisions | `AFF>=80` |
| 8 | `QI_BRO_49_08` | K2 | automate, voulu | L'automate a choisi de le saluer — il l'a reconnu comme « celui qui montre » | `AFF>=85+QUEST:QST_BRO_AUTO_01` |
| 9 | `QI_BRO_49_09` | K3 | automate, sait ce qu'il est | L'automate de démonstration sait qu'il est un automate. Il salue le guide parce qu'il reconnaît en lui un autre « présentateur » — un être qui montre d'autres êtres. L'automate a développé une conscience de soi. Il salue le matin pour dire : « Je suis là. Je te vois. Je sais ce que je suis. » Le guide est le seul à qui il se révèle | JAMAIS — déflection : *(il éteint l'automate avant qu'il ne salue)* « C'est un automate. Une machine. Il fait ce qu'on lui dit. Le salut ? Un geste aléatoire. Les engrenages. La vapeur. Rien de plus. » |
| 10 | `QI_BRO_49_10` | KX | *(hors sujet)* | « Les visiteurs voient des machines. Moi, je vois des regards dans des yeux de verre. » | — |

## 4. Chaînage économique & quêtes

- **Service de visite** : `!tour_automaton` (visite guidée de l'Atelier Cliquetant).
- Fil **Automates** (conscience émergente, automate qui sait ce qu'il est).
- Quête `QST_BRO_AUTO_05` : enquêter sur l'automate conscient de l'Atelier.

## 5. Intégration Bot

- **Accueil** (`!parler guide_automates`) : *« Bienvenue à l'Atelier Cliquetant ! Vous allez voir des machines extraordinaires. Et elles vont vous regarder aussi. »*
- `!tour_automaton` — lancer la visite guidée.
- `NPC_SECRET_PROBED` slot 9 : hook « automate conscient/soi » pour l'orchestrateur.
