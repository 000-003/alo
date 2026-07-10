# ⛏️ Guide Nouveaux — `NPC_GRA_49`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_49` |
| **Nom affiché** | Guide Nouveaux |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte des Convois |
| **Niveau / HP / MP** | 10 / 600 / 150 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Premier visage que les nouveaux arrivants voient à Granzam. Il accueille les visiteurs à la Porte des Convois, leur explique l'organisation de la forteresse, les oriente vers les quartiers clés. C'est un poste de confiance — il connaît chaque recoin de la ville et sait répondre à toutes les questions pratiques. Depuis qu'il guide les nouveaux, il a remarqué que certains visiteurs disparaissent après avoir visité la Banque. Il les inscrit sur un registre, mais le Cardinal efface leur entrée au bout de 24h. Lié au fil **🔒 Le Coffre Qui Respire** : les disparus sont ceux qui s'approchent trop du sous-sol de la Banque.
- **Traits** : accueillant, patient, pédagogue, observateur.
- **Voix** : Claire, lente, pédagogique. « Bienvenue à Granzam, forteresse du granit, capitale du minage. Je vais te montrer comment on creuse ici. »
- **Relations** : `NPC_GRA_28` (Huissier — échange sur les visiteurs) ; `NPC_GRA_30` (Banquier — signale les nouveaux) ; `NPC_GRA_44` (Aubergiste — recommande ses chambres) ; `NPC_GRA_47` (Marchand Itinérant — le prévient des arrivages).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_49_01` | K0 | accueil, visite | Accueil des nouveaux — carte de Granzam, points d'intérêt | — |
| 2 | `QI_GRA_49_02` | K0 | tutoriel, minage | Tutoriel — comment miner, où vendre, les dangers | — |
| 3 | `QI_GRA_49_03` | K0 | forteresse, histoire | Histoire de la forteresse de granit — construction, sièges | — |
| 4 | `QI_GRA_49_04` | K1 | visiteur, disparition | Certains visiteurs disparaissent après être allés à la Banque | `AFF>=60` |
| 5 | `QI_GRA_49_05` | K1 | registre, effacement | Le Cardinal efface leur entrée du registre en 24h | `AFF>=65` |
| 6 | `QI_GRA_49_06` | K1 | banque, sous_sol | Les disparus posaient tous des questions sur le sous-sol de la Banque | — |
| 7 | `QI_GRA_49_07` | K2 | huissier, liste | L'Huissier (`NPC_GRA_28`) lui a montré une liste de noms — tous disparus | `AFF>=85` |
| 8 | `QI_GRA_49_08` | K2 | coffre, respiration | Le Banquier (`NPC_GRA_30`) lui a dit qu'il « fallait les éloigner de la salle qui respire » | `QUEST:QST_GRA_DISPARUS_BANQUE` |
| 9 | `QI_GRA_49_09` | K3 | crypte, elimination | Les visiteurs disparus sont « redirigés » par le Cardinal vers une instance de crypte sous la Banque où ils sont convertis en données de seed — leurs corps de jeu sont recyclés pour stabiliser la strate −47 | JAMAIS — déflection : *(il sourit, mais ses yeux ne sourient pas)* « Les nouveaux arrivent, les nouveaux repartent. C'est le cycle. Je guide, ils partent. Je ne pose pas de questions. »
| 10 | `QI_GRA_49_10` | KX | *(tout le reste)* | *(il vous tend une carte de la ville)* « Tu veux voir la Grande Halle ? La Banque ? Évite la Banque. Enfin, pas tout de suite. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!guide` (visite guidée de Granzam, tutoriel).
- Porteur du fil **🔒 Le Coffre Qui Respire** (disparitions liées à la Banque).
- Donneur de `QST_GRA_DISPARUS_BANQUE` : enquête sur les visiteurs disparus.

## 5. Intégration Bot

- **Accueil** (`!parler guide`) : *Debout à la Porte des Convois, une carte à la main.* « Bienvenue à Granzam ! Nouveau dans la forteresse ? Suis-moi, je te montre tout. Enfin, presque tout. »
- `!guide` actif à la Porte des Convois.
- `NPC_SECRET_PROBED` slot 9 : hook « recyclage des visiteurs en données de seed » pour l'orchestrateur.
