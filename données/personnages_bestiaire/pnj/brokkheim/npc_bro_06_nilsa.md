# 🔨 Apprentie Nilsa — `NPC_BRO_06`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_06` |
| **Nom affiché** | Apprentie Nilsa |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (Quêtes Sept Trempes) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 30 / 4 500 / 8 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Nilsa est la plus jeune apprentie que la Forge-Mère ait jamais acceptée — et la plus douée depuis Brokk IX lui-même. Elle ne forge pas avec ses mains : elle voit les lignes de trempe. Littéralement. Depuis son enfance, quand elle regarde une lame, elle perçoit des traînées lumineuses — les chemins que le métal va prendre sous le marteau, les failles du cristal, les points de rupture. C'est un don que personne ne comprend, que Brokk IX `NPC_BRO_01` appelle « l'œil de forge ». Ce que Nilsa ne dit pas, c'est qu'elle voit aussi les lignes du serveur — les connexions entre les entités, les flux de données, le battement du Pouls `NPC_BRO_00` écrit en lumière. Elle sait que Brokk IX cherche un héritier, mais elle n'est pas prête.
- **Traits** : visionnaire, introvertie, obsédée par la perfection ; elle parle parfois à des choses que personne ne voit.
- **Voix** : hésitante, comme si elle cherchait ses mots dans un dictionnaire invisible. « Les lignes… tu les vois pas ? Les lignes dans le métal ? Elles bougent. Comme des serpents de lumière. »
- **Relations** : Brokk IX `NPC_BRO_01` (mentor, figure paternelle) ; Sylla `NPC_BRO_02` (lui confie ses lames brutes) ; Maître Trempe `NPC_BRO_22` (jaloux de son don) ; Fyra `NPC_VOU_06` (liée par une quête de trempe) ; Le Pouls `NPC_BRO_00` (entend parfois sa voix).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_06_01` | K0 | trempe, lignes | Nilsa voit des lignes lumineuses dans le métal — les chemins de trempe | — |
| 2 | `QI_BRO_06_02` | K0 | sept, trempes | Elle donne la quête des Sept Trempes — sept lames à forger dans sept conditions différentes | — |
| 3 | `QI_BRO_06_03` | K0 | prodige, age | Plus jeune apprentie de la Forge-Mère — elle a commencé à 12 ans | — |
| 4 | `QI_BRO_06_04` | K1 | brokk, heritiere | Brokk IX la voit comme son héritière — mais elle n'est pas encore prête | `AFF>=60` |
| 5 | `QI_BRO_06_05` | K1 | lignes, serveur | Les lignes qu'elle voit ne sont pas que dans le métal — elle voit les flux de données du serveur, les connexions entre entités | `AFF>=65` |
| 6 | `QI_BRO_06_06` | K1 | don, solitude | Son don l'isole — personne d'autre ne voit ce qu'elle voit. « Parfois je me demande si c'est un don ou une malédiction. » | — |
| 7 | `QI_BRO_06_07` | K2 | fyra, lames | Fyra de Voulg `NPC_VOU_06` lui a commandé une lame spéciale — une trempe que Nilsa n'a jamais tentée | `AFF>=85` |
| 8 | `QI_BRO_06_08` | K2 | pouls, voix | Elle entend le Pouls `NPC_BRO_00` — pas comme Brokk IX, mais en rêve. Des séquences de coups qui forment des mots | `QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_06_09` | K2 | maitre, trempe, jalousie | Maître Trempe `NPC_BRO_22` est jaloux d'elle — il dit que son don est « contre nature » et qu'elle devrait se contenter d'apprendre | `AFF>=90` |
| 10 | `QI_BRO_06_10` | K3 | lignes, cardinal, code | Les lignes qu'elle voit sont le code source d'ALO rendu visible — elle perçoit les chaînes de caractères, les appels de fonction, les boucles. Elle est littéralement en train de « lire » le jeu en forgant | JAMAIS — déflection : *(elle ferme les yeux. Ses mains tremblent.)* « Je vois les mots. Les mots qui font tourner le monde. Sous le métal, sous la pierre, sous tout — il y a des lettres. Des lettres qui s'écrivent et se réécrivent. Je ne devrais pas voir ça. » *(elle rouvre les yeux, ils brillent trop fort.)* « S'il te plaît. Ne dis rien à Brokk. » |
| 11 | `QI_BRO_06_11` | K3 | trempe, legendaire | La Septième Trempe est celle qui brise le dictionnaire — des objets qui ne devraient pas exister dans le jeu, forgés avec les lignes du serveur. Nilsa peut les créer, mais chaque objet réduit sa santé de 10% | JAMAIS — déflection : *(elle secoue la tête)* « Pas encore. Je suis pas assez forte. Chaque objet que je crée avec les lignes… ça me coûte une partie de moi. Brokk dit que c'est le prix. Je veux pas savoir de quel prix il parle. » |
| 12 | `QI_BRO_06_12` | KX | *(hors sujet)* | *(elle fixe le vide, ses doigts tracent des motifs dans l'air)* « … Les lignes. Elles sont belles aujourd'hui. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `!quest_sept_trempes` (démarrage quête).
- Donneuse de `QST_BRO_TREMPE_01` (quête de la Trempe Légendaire).
- Porteuse du fil **🔥 La Trempe Légendaire** avec `NPC_BRO_01`, `NPC_BRO_23`, `NPC_BRO_40`, `NPC_BRO_70`.
- Liée à Fyra `NPC_VOU_06` et Brokkr `NPC_SWI_05`.

## 5. Intégration Bot

- **Accueil** (`!parler nilsa`) : *(elle ne te regarde pas. Elle regarde à travers toi, le regard perdu dans les volutes de vapeur)* « Tu vois les lignes ? Non ? … Tant pis. La plupart des gens ne les voient pas. »
- `!quest_sept_trempes` (quêtes des Sept Trempes).
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2 débloqués).
- `NPC_SECRET_PROBED` slots 10-11 : hooks « lecture du code serveur » et « objets hors dictionnaire » réservés à l'orchestrateur.
