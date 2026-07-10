# 🔨 Guide Vallée — `NPC_BRO_11`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_11` |
| **Nom affiché** | Guide Vallée |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (Guide de chasse — HUNT_001) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée des Geysers |
| **Niveau / HP / MP** | 40 / 6 000 / 2 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Guide Vallée connaît la Vallée des Geysers mieux que personne — chaque crevasse, chaque chemin de vapeur, chaque bête qui s'y cache. Il propose ses services aux chasseurs qui veulent maximiser leur butin ou explorer les zones dangereuses. Il n'est pas Leprechaun de naissance — il est arrivé il y a longtemps comme réfugié d'une cité minière, et il a appris la vallée par nécessité, pas par choix.
- **Traits** : bavard, prudent, connaît la vallée comme sa poche ; il aime raconter des histoires de chasseurs disparus.
- **Voix** : enjouée, entrecoupée de rires. « La vallée est belle aujourd'hui. Mais elle l'était aussi le jour où j'ai vu un chasseur se faire avaler par un geyser. Alors bon. »
- **Relations** : Gardien Vallée `NPC_BRO_10` (collègue, le gardien n'a jamais perdu la mémoire) ; Marchand Soufre `NPC_BRO_12` (concurrent — il guide les chasseurs vers le soufre) ; Commandant Gardes `NPC_BRO_09` (déclare les disparitions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_11_01` | K0 | guide, chasse | Il guide les chasseurs dans la Vallée des Geysers — cachettes, bêtes, pièges naturels | — |
| 2 | `QI_BRO_11_02` | K0 | histoires, geysers | Il raconte des histoires de chasseurs — certaines vraies, d'autres inventées | — |
| 3 | `QI_BRO_11_03` | K0 | prix, service | Ses services coûtent de l'Yrd — plus la zone est dangereuse, plus c'est cher | — |
| 4 | `QI_BRO_11_04` | K1 | arrive, inconnue | Il n'est pas Leprechaun de naissance — il est arrivé comme réfugié d'une cité minière effondrée | `AFF>=60` |
| 5 | `QI_BRO_11_05` | K1 | geyser, portail | Il sait que le grand geyser qui dort est un portail — il ne dit pas vers où | `AFF>=65` |
| 6 | `QI_BRO_11_06` | K1 | soufre, marchand | Le Marchand de Soufre `NPC_BRO_12` le paie pour amener les chasseurs à son étal | — |
| 7 | `QI_BRO_11_07` | K2 | refugie, cite | La cité minière d'où il vient s'appelait Durak — elle a été rayée de la carte. Mais lui et quelques autres ont survécu | `AFF>=85` |
| 8 | `QI_BRO_11_08` | K2 | geyser, eveil | Il a vu le geyser « dormeur » s'éveiller une fois — une lumière orange, un bruit de machinerie | `QUEST:QST_BRO_SOUFRE_01` |
| 9 | `QI_BRO_11_09` | K3 | durakm, secret | Durak n'a pas été rayée de la carte — elle a été dévorée par le serveur. Une corruption de zone que le Cardinal a effacée en supprimant la ville. Lui et les autres réfugiés sont des anomalies : ils existent dans les logs mais leur ville n'existe plus | JAMAIS — déflection : *(son sourire disparaît)* « Durak ? Conn… Conn ça. Une mine. Une mine qui s'est effondrée. Y a rien d'autre à dire. » *(il crache par terre et s'éloigne.)* |
| 10 | `QI_BRO_11_10` | KX | *(hors sujet)* | *(il te montre une plume d'un oiseau qui n'existe pas)* « Joli, non ? Trouvé dans le quatrième geyser. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `!hunt_guide_bro` (engagement comme guide), `!quest_geyser` (quête d'exploration).
- Donneur de `QST_BRO_SOUFRE_01` (quête du souffre des geysers).

## 5. Intégration Bot

- **Accueil** (`!parler guide vallee`) : *(il siffle entre ses dents)* « Encore un chasseur ? Ou juste un curieux ? Dans les deux cas, j'ai un prix. » |
- `!hunt_guide_bro` (guide de chasse), `!quest_geyser` (quêtes).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « Durak — cité effacée par le serveur » réservé à l'orchestrateur.
