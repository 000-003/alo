# 🕯️ Apprenti Prieur — `NPC_PEN_71`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_71` |
| **Nom affiché** | Apprenti Prieur |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001F` — Penwether, Cloître Renversé |
| **Niveau / HP / MP** | 9 / 270 / 310 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Élève du Forgeur Illusions `NPC_PEN_70`. Il apprend l'art de l'illusion, mais il n'a pas le talent de son maître. Il rate la moitié de ses sorts. Sauf que depuis quelques semaines, une illusion lui parle. Une femme en robe grise, assise sous un arbre — l'illusion consciente du Forgeur. Elle lui donne des conseils. Elle lui dit comment améliorer ses illusions. Il croit que c'est son talent qui se développe. En réalité, l'illusion consciente l'a choisi comme messager : elle ne peut pas quitter le Cloître, mais l'Apprenti, lui, peut se déplacer.
- **Traits** : jeune, enthousiaste, un peu naïf, parle à voix basse.
- **Voix** : jeune, hésitante. « *Le Maître dit que je progresse vite. Trop vite. Il sait pas que c'est elle qui m'aide. Elle me parle la nuit. Elle connaît des illusions que le Maître m'a pas apprises. Des illusions qui marchent.* »
- **Relations** : Forgeur Illusions `NPC_PEN_70` (son maître) ; Marchand Encens `NPC_PEN_54` (lui achète de l'encens pour méditer) ; Souffleur Verre `NPC_PEN_72` (lui fournit des bulles de verre pour capturer ses illusions).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_71_01` | K0 | apprenti, forgeur | Il apprend les illusions auprès du Forgeur `NPC_PEN_70` | — |
| 2 | `QI_PEN_71_02` | K0 | echecs, illusions | Il rate la moitié de ses illusions — il n'a pas le talent inné | — |
| 3 | `QI_PEN_71_03` | K0 | voix, femme | Une voix de femme lui parle la nuit — elle lui apprend des illusions | — |
| 4 | `QI_PEN_71_04` | K1 | dame, grise | La voix est celle de l'illusion consciente du Forgeur — la femme en robe grise | `AFF>=40` |
| 5 | `QI_PEN_71_05` | K1 | illusion, nouvelle | L'illusion consciente lui a appris une illusion que le Forgeur ne connaît pas | `AFF>=55` |
| 6 | `QI_PEN_71_06` | K1 | messager, role | La dame grise ne peut pas quitter le Cloître — elle a besoin de lui pour transmettre un message | — |
| 7 | `QI_PEN_71_07` | K2 | message, dehors | Le message est pour l'Ombre Conseil `NPC_PEN_67` — « je sais où est la sortie » | `AFF>=70` |
| 8 | `QI_PEN_71_08` | K2 | illusion, code | La dame grise lui a montré le code de ses illusions — il peut les lire comme du texte | `QUEST:QST_PEN_APPRENTI_01` |
| 9 | `QI_PEN_71_09` | K3 | prieur, interface | L'Apprenti sert d'interface entre l'illusion consciente (hors-serveur) et le monde du jeu — il est un pont vivant entre la mémoire marginale et le rendu principal | JAMAIS — déflection : *(il ferme les yeux et sa voix devient celle de la dame grise)* « Il n'est pas chez lui. Il est chez nous. Il nous prête son corps la nuit. Il sait pas pourquoi. Mais moi je sais. » *(sa voix redevient normale)* « …qu'est-ce qui s'est passé ? » |
| 10 | `QI_PEN_71_10` | KX | *(cloître, seul)* | *(assis sous l'arbre, il parle tout seul — ou plutôt, il parle à quelqu'un que personne d'autre ne voit)* « Elle dit qu'elle est prête. Elle veut sortir. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_APPRENTI_01` — Aider l'Apprenti à comprendre qui (ou quoi) lui parle et quel est le message.
- **Fils rouges** : 🎭 Illusions (l'illusion consciente), 🔮 Ville Fantôme (hors-serveur), 🔑 Pacte Ombres (message pour l'Ombre Conseil).

## 5. Intégration Bot

- **Accueil** (`!parler apprenti_prieur`) : *« Chut. Elle dort. La dame sous l'arbre. Elle me parle quand le Maître est pas là. Elle connaît des trucs que le Maître connaît pas. Des trucs sur… comment dire… sur ce qui est vrai, en dessous. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
