# 🔨 Modeleur Métal — `NPC_BRO_73`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_73` |
| **Nom affiché** | Modeleur Métal |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (formes complexes pour la Manufacture) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Manufacture Automates (atelier de modelage) |
| **Niveau / HP / MP** | 21 / 1 700 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il façonne les formes complexes avant la coulée du métal — moules, matrices, gabarits pour les pièces d'automates. Depuis un mois, certaines formes qu'il modèle dans l'argile se retrouvent le lendemain identiques en métal, comme si la forge les avait coulées toutes seules pendant la nuit. Il a essayé de modeler une forme volontairement impossible — le lendemain, elle existait en métal, physiquement cohérente.
- **Traits** : précis, émerveillé par son propre art, cache une excitation enfantine.
- **Voix** : enthousiaste et technique, avec des pauses pour gesticuler la forme qu'il décrit.
- **Relations** : Souffleur Forge `NPC_BRO_72` (atelier voisin) ; Maître Forgeron Lames `NPC_BRO_70` (lui prépare les matrices des lames) ; Chaudronnier `NPC_BRO_74` (partage les moules de grande taille).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_73_01` | K0 | modelage, metier | Le métier de modeleur : argile, cire, sable, plâtre | — |
| 2 | `QI_BRO_73_02` | K0 | formes, manufacture | Les formes produites par la Manufacture : pièces d'automates, armures, outils | — |
| 3 | `QI_BRO_73_03` | K0 | moules, catalogue | Catalogue des moules disponibles (service de craft) | — |
| 4 | `QI_BRO_73_04` | K1 | forme, auto-coulee | Ses formes en argile se coulent en métal toutes seules la nuit | `AFF>=60` |
| 5 | `QI_BRO_73_05` | K1 | forme, impossible | Il a modelé une forme géométriquement impossible — coulée parfaite le lendemain | — |
| 6 | `QI_BRO_73_06` | K1 | metal, provenance | Le métal des formes auto-coulées a la même composition que celui de l'Enclume | `AFF>=70` |
| 7 | `QI_BRO_73_07` | K2 | forge, automatique | Un automate de la Manufacture `NPC_BRO_74` a coulé la forme — vu par le garde de nuit | `AFF>=80` |
| 8 | `QI_BRO_73_08` | K2 | automate, commande | L'automate obéit aux formes que le modeleur dessine — comme si l'argile était un programme | `AFF>=90` |
| 9 | `QI_BRO_73_09` | K3 | argile, programme | L'argile utilisée par le modeleur contient une poudre de mithril cardinal — résidu des soufflets `NPC_BRO_72`. Chaque forme modelée est un programme que l'Enclume lit et exécute via les automates. Modeler, c'est coder dans la matière du Cardinal | JAMAIS — déflection : *(il pétrit l'argile sans la regarder)* « L'argile garde la forme. C'est son métier. Si la forge la copie, c'est que je fais bien mon travail — rien de plus. » |
| 10 | `QI_BRO_73_10` | KX | *(tout le reste)* | « L'argile attend. La forme aussi. Si tu veux un moule, décris-la vite. » | — |

## 4. Chaînage économique & quêtes

- SERVICE : fabrication de moules pour le craft des joueurs.
- K3 : l'argile comme langage de programmation du Cardinal — fil Automates + Enclume.
- `QST_BRO_ARGILE_01` : enquêter sur les formes qui se coulent seules.

## 5. Intégration Bot

- **Accueil** (`!parler modeleur`) : *« L'argile ne ment pas. Elle garde la forme. Parfois trop bien. »*
- `!moule [forme]` : commande d'un moule pour le craft.
