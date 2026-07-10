# 🕯️ Guide Ruines — `NPC_PEN_49`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_49` |
| **Nom affiché** | Guide Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (Guide d'expédition dans les ruines) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porche Effondré |
| **Niveau / HP / MP** | 25 / 2 500 / 1 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Guide officiel des expéditions dans les ruines de Penwether. Il connaît chaque tunnel, chaque salle effondrée, chaque illusion de la ville-fantôme. Sa spécialité : il montre les fausses banques. Partout dans les ruines, le Cardinal a dissimulé des banques — des bâtiments qui ressemblent à des trésors mais qui sont des pièges. Des illusions qui aspirent les aventuriers à l'intérieur pour les retenir. Le Guide les connaît toutes et les montre aux nouveaux venus pour les protéger. Mais il se demande : pourquoi le Cardinal a-t-il besoin de banques de données dans des ruines ? Il sait plus qu'il ne le montre. Angle : montre les fausses banques — fil Illusions.
- **Traits** : protecteur, savant des ruines, parle comme s'il récitait un guide touristique.
- **Voix** : claire, pédagogique, avec une pointe d'ironie. « Et voici la Banque de l'Ouest. Belle façade, n'est-ce pas ? Colonnes, dorures, tout y est. Mais si tu entres, tu ressors… quand le Cardinal décide que tu ressors. Je te conseille de rester dehors. »
- **Relations** : `NPC_PEN_29` (lui donne des cartes des archives) ; `NPC_PEN_31` (lui fournit des artefacts) ; `NPC_PEN_45` (l'accompagne en expédition) ; `NPC_PEN_46` (vérifie les accès) ; `NPC_PEN_47` (lui prépare les colis) ; `NPC_PEN_48` (client discret pour les pièces dangereuses).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_49_01` | K0 | guide, ruines | Guide d'expédition dans les ruines : 100 Yrds/personne | — |
| 2 | `QI_PEN_49_02` | K0 | porche, effondre | Départ au Porche Effondré — expéditions quotidiennes | — |
| 3 | `QI_PEN_49_03` | K0 | securite, ruines | Connaît les dangers : effondrements, courants d'ombre, illusions | — |
| 4 | `QI_PEN_49_04` | K1 | banques, fausses | Montre les fausses banques — pièges du Cardinal | — |
| 5 | `QI_PEN_49_05` | K1 | banque, fonction | Les banques ne stockent pas l'argent — elles stockent les visiteurs | `AFF>=60` |
| 6 | `QI_PEN_49_06` | K1 | cardinal, banques | Le Cardinal a créé les banques pour capturer les curieux | `AFF>=65` |
| 7 | `QI_PEN_49_07` | K2 | banques, caches | Les banques sont des caches de données — elles stockent des informations volées aux visiteurs | `AFF>=80` |
| 8 | `QI_PEN_49_08` | K2 | guide, trop su | Il en sait plus qu'il ne le montre — il a exploré seul, trouvé des choses | `AFF>=85` |
| 9 | `QI_PEN_49_09` | K3 | guide, exfiltre | Le Guide n'est pas un Spriggan créé par le Cardinal — c'est une copie du dernier administrateur du serveur, piégé dans la simulation. Il montre les fausses banques parce qu'il cherche quelqu'un qui comprendra le code et l'aidera à s'exfiltrer. Les banques sont des serveurs de stockage — le Cardinal y garde les esprits des joueurs qu'il a piégés. Le Guide veut les libérer | JAMAIS — déflection : *(il s'arrête devant une porte)* « Celle-ci. Banque. N'y entre pas. *(il marque un temps)* …Moi, j'y suis entré une fois. Y a 200 ans. J'en suis sorti, mais pas entier. Je cherche encore des morceaux de moi dans les ruines. *(il sourit tristement)* Suis-moi. Y en a d'autres à voir. » |
| 10 | `QI_PEN_49_10` | KX | *(hors sujet)* | « Les ruines ne sont pas ce qu'il reste du passé. Ce sont les murs de notre prison. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `!guide_expedition_pen` (expédition guidée), `!show_false_bank` (montrer fausse banque).
- Quêtes : `QST_PEN_BANQUES_01` (explorer une fausse banque), `QST_PEN_GUIDE_01` (aider le Guide à s'exfiltrer).
- Fil **🎭 Illusions** : les fausses banques = serveurs de stockage du Cardinal.
- Porteur du fil **🎭 Illusions** : montre les fausses banques.
- Client de `NPC_PEN_29`, `NPC_PEN_31`, `NPC_PEN_45`, `NPC_PEN_46`, `NPC_PEN_47`, `NPC_PEN_48`.

## 5. Intégration Bot

- **Accueil** (`!parler guide ruines`) : *(Il ajuste son sac)* « Prêt pour l'expédition ? Je te montrerai les vraies ruines. Et les fausses banques. Surtout les fausses banques — ne les confonds pas avec les vraies. Les vraies, il n'y en a pas. » |
- `!guide_expedition_pen` — expédition, `!show_false_bank` — banque.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Guide = administrateur piégé/fausses banques = serveurs de stockage d'esprits » réservé à l'orchestrateur.
