# 🔨 Marchand d'Outils — `NPC_BRO_33`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_33` |
| **Nom affiché** | Marchand d'Outils |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (outils de forge) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 15 / 950 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vends marteaux, tenailles, soufflets, enclumes de table, limes, et cent autres outils pour la forge. Ses outils sont réputés fiables, mais certains clients rapportent que leurs outils « travaillent seuls » la nuit — un marteau qui tape tout seul, un soufflet qui pompe sans main. Il prétend que c'est des blagues, mais il a arrêté de laisser ses outils dans sa boutique la nuit. Angle : l'outil qui travaille seul a été forgé dans le rythme du Pouls, et il continue le mouvement.
- **Traits** : pragmatique, superstitieux malgré lui, compétent, répare tout.
- **Voix** : bourrue mais honnête (« Un bon outil, c'est un outil qui te comprend. Et un outil qui te comprend, des fois, il a sa propre opinion. »).
- **Relations** : `NPC_BRO_31` (lui achète des limes pour les lames) ; `NPC_BRO_36` (forgeron ambulant, son meilleur client) ; `NPC_BRO_35` (alliages — achète ses outils pour les tester) ; `NPC_BRO_46` (réparateur d'automates, lui achète des outils spéciaux).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_33_01` | K0 | outils, catalogue | Outils de forge : marteaux, tenailles, soufflets, 15-200 Yrds | — |
| 2 | `QI_BRO_33_02` | K0 | qualite, acier | Qualité des outils : acier trempé au geyser, manche en chêne de lave | — |
| 3 | `QI_BRO_33_03` | K0 | conseils, forge | Conseils pour bien choisir ses outils de forge | — |
| 4 | `QI_BRO_33_04` | K1 | outil, travaille seul | Des clients disent que leurs outils forgés ici travaillent seuls la nuit | — |
| 5 | `QI_BRO_33_05` | K1 | marteau, tape | Un marteau a tapé tout seul 12 coups à minuit — le rythme du Pouls | `AFF>=60` |
| 6 | `QI_BRO_33_06` | K1 | soufflet, pompe | Un soufflet pompe sans personne — il suit le souffle de la forge souterraine | `AFF>=65` |
| 7 | `QI_BRO_33_07` | K2 | forge, memoire | Les outils « se souviennent » du rythme de la forge où ils ont été créés — le Pouls les anime | `AFF>=80` |
| 8 | `QI_BRO_33_08` | K2 | cardinal, influence | Le Pouls du Cardinal influence les outils neufs — ils sont « pré-accordés » à la forge centrale | `AFF>=85+QUEST:QST_BRO_POULS_01` |
| 9 | `QI_BRO_33_09` | K3 | outils, fragment pouls | Chaque outil forgé à Brokkheim est un fragment du Pouls solidifié. Ils ne travaillent pas seuls — ils amplifient le Pouls à travers Brokkheim, transformant chaque forge en relais du battement du Cardinal. Les outils sont des antennes. Brokkheim tout entier est un instrument | JAMAIS — déflection : *(il range un marteau derrière son comptoir, hors de vue)* « Les outils sont des outils. Ils font ce qu'on leur dit de faire. Point. Si tu veux des théories, va au quartier des automates. » |
| 10 | `QI_BRO_33_10` | KX | *(hors sujet)* | « Un marteau ne choisit pas sa main. Mais la main choisit son marteau. » | — |

## 4. Chaînage économique & quêtes

- **Marchand d'outils** : `!buy_tools` (outils de forge).
- Fil **Le Pouls** (outils comme amplificateurs du Pouls).
- Quête `QST_BRO_POULS_01` : enquêter sur l'influence du Pouls sur les outils.

## 5. Intégration Bot

- **Accueil** (`!parler outils`) : *« T'as cassé ton outil ? Ou tu veux un nouveau ? Parce que les deux, je peux. »*
- `!buy_tools` — catalogue des outils.
- `NPC_SECRET_PROBED` slot 9 : hook « outils/fragments Pouls » pour l'orchestrateur.
