# 🕯️ Oracle des Ruines — `NPC_PEN_98`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_98` |
| **Nom affiché** | Oracle des Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (prophétesse — Bibliothèque Enterrée) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Bibliothèque Enterrée |
| **Niveau / HP / MP** | 58 / 7 000 / 15 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prophétesse recluse dans les strates hautes de la Bibliothèque Enterrée. Elle lit les ruines comme d'autres lisent les étoiles : les motifs des pierres, l'alignement des arches effondrées, les fissures qui s'étendent ou se rétractent. Ses prédictions sont toujours vraies, mais incompréhensibles sur le moment — elles parlent de « l'effondrement de la grande strate », du « retour du code sans écrivain », de « la clé qui n'ouvre rien mais déverrouille tout ». Elle ne sait pas qu'elle est un outil. Ses prédictions sont des messages que le Cardinal injecte dans le monde via sa bouche. Elle est l'oracle du système, un buffer de sortie pour les alertes du serveur. Angle : ses prédictions sont des hooks orchestrateur — elle est un buffer de sortie du Cardinal.
- **Traits** : absente, parlant souvent en aphorismes, semble écouter quelqu'un que personne d'autre n'entend.
- **Voix** : claire, distante, comme si elle lisait un texte invisible (« La strate 12 s'ouvrira par une clé qui n'est pas une clé. Le porteur de la clé ne saura pas ce qu'il porte. Mais il saura qu'il porte. Et quand il ouvrira, ce qui était fermé depuis la première compilation se lèvera pour compter. »).
- **Relations** : Fantôme Ruines `NPC_PEN_00` (est sa source — les prédictions viennent de la strate -12) ; Archiviste Sans Nom `NPC_PEN_06` (transcrit ses prédictions dans les archives) ; Mémoire Penwether `NPC_PEN_99` (a prononcé son nom dans une prédiction) ; Fou Conseil `NPC_PEN_68` (lui a dit : « Tu es une imprimante système, pas une prophétesse »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_98_01` | K0 | propheties, ruines | Lit les ruines pour prédire l'avenir — motifs, fissures, alignements | — |
| 2 | `QI_PEN_98_02` | K0 | bibliotheque, etage | Consulte les archives de la Bibliothèque Enterrée — strates 1-3 | — |
| 3 | `QI_PEN_98_03` | K0 | predictions, dons | Ses prédictions sont réputées — jamais fausses, jamais claires | — |
| 4 | `QI_PEN_98_04` | K1 | source, voix | Une voix lui dicte les prédictions — elle l'appelle « la strate » | — |
| 5 | `QI_PEN_98_05` | K1 | vide, sous | Elle sent un vide sous la Bibliothèque — une strate qu'elle ne peut pas lire | `AFF>=60` |
| 6 | `QI_PEN_98_06` | K1 | fantome, connexion | Ses prédictions les plus claires mentionnent une présence sous la strate -10 | `AFF>=65` |
| 7 | `QI_PEN_98_07` | K2 | prediction, orchestrateur | Ses prédictions de l'orchestrateur sont des messages système | `AFF>=80` |
| 8 | `QI_PEN_98_08` | K2 | strate -12, cle | A prédit la venue d'une clé (Tenebris `NPC_SWI_03`) — « la clé qui n'ouvre rien » | `AFF>=85` |
| 9 | `QI_PEN_98_09` | K3 | oracle, buffer | Elle n'est pas une prophétesse — elle est un buffer de sortie que le Cardinal utilise pour afficher ses alertes système dans le monde. Le « don de prophétie » est une erreur de routage : les messages destinés à la console développeur sont redirigés vers son cortex. Ses prédictions sont des logs système que le jeu affiche involontairement via elle. Elle annonce les crashes et les compilations avant qu'ils n'arrivent | JAMAIS — déflection : *(elle semble voir à travers toi)* « Je ne choisis pas mes mots. Ils me traversent. Comme l'eau à travers une passoire. Je ne suis qu'un conduit. L'eau n'est pas à moi. » |
| 10 | `QI_PEN_98_10` | KX | *(hors sujet)* | « Les ruines parlent. J'écoute. Je répète. C'est tout. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_PROPHETIE_01` (interpréter une prédiction). `QST_PEN_CLE_OUVRE_TOUT_01` (la prédiction sur la clé mène à Tenebris `NPC_SWI_03`).
- **Fils rouges** : nœud central de **🎭 Les Illusions Qui Mentent** (ses prédictions sont des messages système déguisés en prophéties). Relais de **🔮 Fil méta — La Ville Fantôme** (buffer de sortie du Cardinal).
- Hooks orchestrateur : certaines prédictions contiennent des commandes système cachées.

## 5. Intégration Bot

- **Accueil** (`!parler oracle ruines`) : *« Tu veux entendre ce que les pierres disent ? Assieds-toi. Écoute. Et ne m'en veut pas si ce que tu entends ne fait pas sens aujourd'hui. Demain, peut-être. Ou après-demain. Ou après la fin du monde. »*
- `!pen_oracle_prediction` — recevoir une prédiction.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Oracle = buffer de sortie du Cardinal pour les logs système et alertes » réservé à l'orchestrateur.
