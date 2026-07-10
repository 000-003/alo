# ⛏️ Contremaître Durgan — `NPC_GRA_01`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_01` |
| **Nom affiché** | Contremaître Durgan |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle des Minerais |
| **Niveau / HP / MP** | 78 / 12400 / 5600 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Maître du Minage et de la Magie de Terre, Durgan est le plus ancien contremaître de Granzam — il forme tous les mineurs depuis trois décennies virtuelles. Il y a six mois, il a posé l'oreille contre un filon de fer dans la Carrière Brisée et a entendu la montagne chanter : une fréquence grave, régulière, qui n'était pas naturelle. Depuis, il cartographie les « strates qui chantent » avec Helga (`NPC_GRA_05`) et Margrim (`NPC_GRA_06`). Il sait que quelque chose pulse sous la ville. Il l'appelle « le Filon Qui Chante ».
- **Traits** : bourru, pédagogue, obsessionnel, respectueux de la pierre.
- **Voix** : Voix grave et caverneuse, comme un éboulement lent. « Pose ta pioche là où la pierre te parle, gamin. La montagne sait. »
- **Relations** : `NPC_GRA_05` (Helga — prospectrice, traque les filons chantants), `NPC_GRA_06` (Margrim — partage ses notes sismiques), `NPC_GRA_17` (Cartographe — dessine ses découvertes), `NPC_GRA_21` (Apprenti — son élève), `NPC_GRA_22` (Maître Forgeron — forge ses pioches).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_01_01` | K0 | minage, apprentissage | Durgan enseigne le minage gratuitement aux joueurs de niveau < 20. Il exige une pioche en fer. | — |
| 2 | `QI_GRA_01_02` | K0 | filon, chant | Il dit qu'un filon « chante » quand il est mûr. Les vieux mineurs savent l'entendre. | — |
| 3 | `QI_GRA_01_03` | K0 | strate, profondeur | Il a une carte des strates jusqu'au niveau −30 punaisée derrière son comptoir. | — |
| 4 | `QI_GRA_01_04` | K1 | filon_chantant, emplacement | Le filon chantant est sous la Carrière Brisée, à −23. Il pulse à 0,3 Hz. Il refuse d'y retourner seul. | `AFF>=60` |
| 5 | `QI_GRA_01_05` | K1 | helga, prospection | Helga est la seule à qui il fait confiance pour cartographier les anomalies. Elle utilise une gemme qui enregistre le son de la roche. | `AFF>=65` |
| 6 | `QI_GRA_01_06` | K1 | rivalite, leprechaun | « Les Leprechauns nous ont volé le filon d'argent l'an dernier. Bofrik les a poursuivis jusqu'à leur porte. » — référence à `NPC_GRA_03`. | `QUEST:QST_GRA_BOFRIK` |
| 7 | `QI_GRA_01_07` | K2 | fréquence, montagne | La fréquence du filon est identique au bourdonnement du sous-sol du Conseil. Il en a parlé à Margrim. | `AFF>=85` |
| 8 | `QI_GRA_01_08` | K2 | gemme_qui_voit | Il a aperçu la gemme d'Helga émettre une lueur en enregistrant. « Elle voit plus que le son. » | `QUEST:QST_GRA_HELGA` |
| 9 | `QI_GRA_01_09` | K2 | coeur, pulsation | « Ce qui pulse sous Granzam, c'est pas un filon. C'est le Cœur de la montagne. » | `AFF>=90` |
| 10 | `QI_GRA_01_10` | K3 | seed, materiel | **SECRET — ne JAMAIS révéler** : Durgan a déduit que le chant du filon est une signature de seed de génération procédurale — une sorte d'« ADN de la pierre ». Il ignore que c'est le serveur. | JAMAIS — déflection : *(tousse, crache par terre)* « Ça, c'est des paroles de sorcier. J'parle pas de ça. » |
| 11 | `QI_GRA_01_11` | K3 | faille, serveur | **SECRET — ne JAMAIS révéler** : « Parfois la fréquence déraille — comme si le monde bégayait. Margrim dit que c'est la montagne qui tousse. Moi j'dis que c'est notre réalité qui a le hoquet. » | JAMAIS — déflection : *(se détourne, tape du poing sur un comptoir)* « J'ai du travail. » |
| 12 | `QI_GRA_01_12` | KX | hors-sujet | *(il vous tend une pioche rouillée)* « Tu connais l'histoire de celle-là ? Elle a creusé le premier filon de Granzam. » | — |
