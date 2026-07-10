# ⛏️ Marchand Itinérant — `NPC_GRA_47`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_47` |
| **Nom affiché** | Marchand Itinérant |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, itinérant |
| **Niveau / HP / MP** | 38 / 2 800 / 3 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Colporteur qui relie les trois grandes villes gnomes — Granzam, Alne et Voulg — et fait du commerce avec Freelia. Il connaît chaque route, chaque piste, chaque raccourci. Sa caravane est toujours chargée de marchandises rares. Depuis qu'un convoi a été attaqué sur la route de Freelia, il a remarqué que les pierres de la route « bougent » la nuit — comme si le chemin se modifiait tout seul. Il a dû utiliser une boussole pour ne pas se perdre sur une route qu'il connaît depuis 30 ans. Lié au fil **⛏️ Le Filonant** : le Filonant déplace les strates, ce qui modifie les routes.
- **Traits** : aventurier, commerçant, mémoire vivante des routes, prudent.
- **Voix** : Chaude, animée, toujours en mouvement. « De Granzam à Alne, j'en ai fait des aller-retours. Mais cette semaine, la route m'a joué un tour. »
- **Relations** : `NPC_GRA_45` (Parieur — échange des infos sur les convois) ; `NPC_GRA_39` (Crieur — annonce ses arrivées) ; `NPC_ALN_93` (Bomil — contact à Alne) ; `NPC_GAT_33` (Ilka — contact à Gathel) ; commerce inter-cités Alne, Voulg, Freelia.

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_47_01` | K0 | commerce, itinerant | Vente de marchandises itinérantes — outils, tissus, épices | — |
| 2 | `QI_GRA_47_02` | K0 | routes, alne_voulg | Routes commerciales — Granzam-Alne (3j), Granzam-Voulg (2j), Freelia (5j) | — |
| 3 | `QI_GRA_47_03` | K0 | cargaison, prix | Prix variables selon la ville d'origine — négociation possible | — |
| 4 | `QI_GRA_47_04` | K1 | route, modification | La route de Freelia a changé la nuit — des pierres déplacées | `AFF>=60` |
| 5 | `QI_GRA_47_05` | K1 | boussole, perte | Il a dû utiliser une boussole sur une route qu'il connaît depuis 30 ans | `AFF>=65` |
| 6 | `QI_GRA_47_06` | K1 | alne, bomil | Bomil (`NPC_ALN_93`) à Alne a signalé le même phénomène sur la route des Gemmes | — |
| 7 | `QI_GRA_47_07` | K2 | strate, deplacement | Les pierres de la route sont « poussées » par quelque chose sous le sol | `AFF>=85` |
| 8 | `QI_GRA_47_08` | K2 | filonant, route | Le Marchand de Gemmes (`NPC_GRA_66`) a dit que le Filonant déplace les veines — et donc la route qui les suit | `QUEST:QST_GRA_ROUTE_MOBILE` |
| 9 | `QI_GRA_47_09` | K3 | filament, reseau_route | Le réseau routier d'Alfheim est généré par les mêmes seeds que les veines de minerai — quand le Filonant bouge, les routes « suivent » virtuellement, et le Cardinal recalcule le terrain chaque nuit, ce qui explique les changements nocturnes | JAMAIS — déflection : *(il range sa boussole)* « La route change. Je ne sais pas pourquoi. Mais je sais que je ne suis plus le seul à la tracer. » |
| 10 | `QI_GRA_47_10` | KX | *(tout le reste)* | *(il charge un sac sur son épaule)* « Le commerce, c'est du mouvement. Et le mouvement, c'est la vie. Mais si la route bouge plus vite que toi, t'es mort. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : marchandises itinérantes (stock tournant).
- Porteur du fil **⛏️ Le Filonant** (routes modifiées par le Filonant).
- Donneur de `QST_GRA_ROUTE_MOBILE` : enquête sur les routes qui changent la nuit.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_itinerant`) : *Arrivé avec sa caravane, il dételle un âne.* « Granzam ! Enfin ! La route était longue. Et différente de d'habitude. »
- `!buy itinerant` actif (présence temporaire à la Grande Halle, puis en route).
- `NPC_SECRET_PROBED` slot 9 : hook « recalcule nocturne des routes » pour l'orchestrateur.
