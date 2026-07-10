# 🕯️ Gardien du Mémorial — `NPC_PEN_89`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_89` |
| **Nom affiché** | Gardien du Mémorial |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (mémorial des explorateurs — Cimetière Vertical) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Cimetière Vertical |
| **Niveau / HP / MP** | 35 / 4 000 / 5 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien du Mémorial tient la liste des explorateurs disparus dans les ruines. Le Cimetière Vertical est une falaise où chaque nom est gravé dans la pierre, strate après strate, du haut vers le bas. Il grave les nouveaux noms à la main. Mais parfois, un nom qu'il a gravé disparaît de la pierre. Et le lendemain, il réapparaît — plus bas, comme si le mort avait continué à descendre dans les ruines après sa mort. Le Gardien sait qu'ils ne sont pas vraiment morts. Ils sont descendus trop bas et n'ont pas pu remonter. Mais leurs noms, eux, continuent de descendre. Angle : un nom qui réapparaît plus bas — signe que le mort continue d'explorer sous la terre.
- **Traits** : méticuleux, superstitieux, regard souvent tourné vers le sol.
- **Voix** : posée, avec des pauses (« Le nom de Kael était là. Troisième strate. Je l'ai gravé moi-même. La semaine suivante, il était en cinquième strate. Comme s'il avait continué à descendre. Comme s'il explorait encore. En dessous. »).
- **Relations** : Fossoyeur Grim `NPC_PEN_05` (lui signale les nouveaux morts à graver) ; Cartographe Maude `NPC_PEN_04` (lui a donné une carte des strates de la Nécropole) ; Fou Conseil `NPC_PEN_68` (lui a dit un jour : « Les noms descendent parce que les morts ne savent pas qu'ils sont morts »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_89_01` | K0 | memorial, liste | Tient la liste des explorateurs disparus | — |
| 2 | `QI_PEN_89_02` | K0 | cimetiere, vertical | Le Cimetière Vertical : noms gravés du haut vers le bas | — |
| 3 | `QI_PEN_89_03` | K0 | gravure, noms | Grave les noms des morts dans la pierre — à la main | — |
| 4 | `QI_PEN_89_04` | K1 | nom, disparition | Certains noms disparaissent de la pierre — puis réapparaissent plus bas | — |
| 5 | `QI_PEN_89_05` | K1 | descente, noms | Les noms descendent d'une strate par cycle — comme si les morts continuaient d'explorer | `AFF>=60` |
| 6 | `QI_PEN_89_06` | K1 | grim, registre | Grim `NPC_PEN_05` ne peut pas expliquer le phénomène non plus | `AFF>=65` |
| 7 | `QI_PEN_89_07` | K2 | noms, vitesse | Les noms descendent plus vite si l'explorateur est mort dans une strate profonde | `AFF>=80` |
| 8 | `QI_PEN_89_08` | K2 | strates, correspondance | Chaque strate du Cimetière correspond à une strate de la Bibliothèque Enterrée | `AFF>=85` |
| 9 | `QI_PEN_89_09` | K3 | noms, processus | Les noms ne descendent pas — ils sont réalloués. Le Cimetière Vertical est une table de processus du Cardinal. Les explorateurs disparus ne sont pas morts : leurs processus sont passés en arrière-plan, et le Cardinal réaffecte leurs noms aux strates inférieures selon leur profondeur de désallocation. Les noms qui réapparaissent sont des processus qui ont été relancés | JAMAIS — déflection : *(il pose la main sur la pierre)* « Ils descendent. C'est tout. Je n'ai pas d'explication. Je grave les noms. Je les regarde descendre. Et je sais qu'un jour, le mien descendra aussi. » *(il grave un nouveau nom en silence)* |
| 10 | `QI_PEN_89_10` | KX | *(hors sujet)* | « La pierre garde les noms plus longtemps que les mémoires. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_memorial_liste` — liste des disparus. `!pen_memorial_nom [nom]` — vérifier où se trouve un nom.
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (les morts ne sont pas vraiment morts — leurs processus tournent en arrière-plan). Relais de **🔮 Fil méta — La Ville Fantôme** (le Cimetière Vertical est une table de processus).
- Quête `QST_PEN_NOM_DESCEND_01` : retrouver un explorateur dont le nom descend.

## 5. Intégration Bot

- **Accueil** (`!parler gardien memorial`) : *« Tu cherches un nom ? Je les ai tous. Les morts, les disparus, les oubliés. Ils sont tous là, dans la pierre. Et ils descendent. »*
- `!pen_memorial_liste` — liste des noms ; `!pen_memorial_recherche` — recherche de nom.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Cimetière Vertical = table de processus du Cardinal » réservé à l'orchestrateur.
