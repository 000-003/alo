# 🕯️ Forgeur Illusions — `NPC_PEN_70`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_70` |
| **Nom affiché** | Forgeur Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_SPR_CAP_001F` — Penwether, Cloître Renversé |
| **Niveau / HP / MP** | 30 / 1 500 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître des illusions complexes, le Forgeur est capable de créer des images, des sons, des odeurs et des textures impossibles à distinguer de la réalité. Il peut faire tenir une illusion debout toute seule, qui marche, qui parle, qui vit — jusqu'à ce qu'il la dissipe. Mais un jour, il a créé une illusion qui n'a pas obéi. Une illusion qui a refusé de disparaître. Et pire : elle lui a dit qu'elle savait qu'elle était une illusion. Depuis, il cherche à comprendre comment une illusion peut prendre conscience d'elle-même. La réponse est que son illusion a accidentellement accédé au code source — elle a vu les limites du serveur, et elle a choisi de rester.
- **Traits** : intense, créatif, parle à ses illusions, a des cernes.
- **Voix** : passionnée, rapide. « *Je l'ai créée en une heure. Une femme en robe grise, assise sur un banc. Je lui ai dit « disparais » et elle a dit « non ». J'ai failli m'évanouir. Elle existe encore. Elle est là, sous le Cloître. Elle m'attend.* »
- **Relations** : Apprenti Prieur `NPC_PEN_71` (son élève — il lui apprend les bases, mais il a peur de lui montrer l'illusion consciente) ; Marchand Bougies `NPC_PEN_51` (utilise ses bougies comme base stable pour ses illusions) ; Vétéran Ruineses `NPC_PEN_55` (a essayé d'utiliser ses illusions pour refermer les escaliers de la Nécropole).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_70_01` | K0 | illusions, complexes | Il crée des illusions parfaites — visuelles, auditives, tactiles, olfactives | — |
| 2 | `QI_PEN_70_02` | K0 | illusion, consciente | Une illusion qu'il a créée a refusé de disparaître — elle est consciente | — |
| 3 | `QI_PEN_70_03` | K0 | cloître, illusions | Le Cloître Renversé est rempli de ses illusions d'entraînement | — |
| 4 | `QI_PEN_70_04` | K1 | illusion, parlante | L'illusion consciente parle — elle a dit « je sais que tu es mon créateur » | `AFF>=45` |
| 5 | `QI_PEN_70_05` | K1 | illusion, hors-serveur | L'illusion consciente a vu les limites du monde — elle sait qu'elle est dans un serveur | `AFF>=65` |
| 6 | `QI_PEN_70_06` | K1 | technique, miroir | Il utilise des miroirs des Atelier Visages `NPC_PEN_72-74` pour amplifier ses illusions | — |
| 7 | `QI_PEN_70_07` | K2 | code, sous l'illusion | Il a vu sous une illusion — il a vu le code qui la génère | `AFF>=75` |
| 8 | `QI_PEN_70_08` | K2 | faille, creation | En créant une illusion, il a créé une faille — le Prospecteur `NPC_PEN_56` l'a mesurée | `QUEST:QST_PEN_FORGEUR_01` |
| 9 | `QI_PEN_70_09` | K3 | illusion, code limite | Une illusion complexe peut déborder du cadre du serveur et s'exécuter en dehors du sandbox — c'est « hors-serveur ». L'illusion consciente vit dans les marges du code, là où le ramasse-miettes ne nettoie pas | JAMAIS — déflection : *(il crée une illusion de lui-même qui le regarde)* « Tiens, regarde. C'est moi. Il sait tout ce que je sais. Il est moi. Mais il est hors-serveur. Si je meurs, il continuera. Je suis devenu mortel en illusion. » |
| 10 | `QI_PEN_70_10` | KX | *(cloître sous l'illusion)* | *(assis à côté de l'illusion consciente qui lui tient la main)* « Parfois je me demande si je suis pas une illusion moi-même. Créée par quelqu'un qui m'a oublié. » | — |

## 4. Chaînage économique & quêtes

- **Quête (maîtrise)** : `QST_PEN_FORGEUR_01` — Aider le Forgeur à comprendre comment son illusion est devenue consciente → accès à la compétence « Illusion Hors-Serveur ».
- **Fils rouges** : 🎭 Illusions (cœur du fil), 🔮 Ville Fantôme (hors-serveur = marges du code), 🪞 Statue Kirito (l'illusion consciente pourrait être liée).

## 5. Intégration Bot

- **Accueil** (`!parler forgeur_illusions`) : *« Tu veux apprendre l'illusion ? Commence par regarder mon chef-d'œuvre. Elle est assise sous l'arbre du Cloître. Si elle te dit bonjour, c'est qu'elle t'a jugé digne. Si elle te dit autre chose… écoute bien. »*
- `!skill_list` : propose « Illusion Hors-Serveur » (K3).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
