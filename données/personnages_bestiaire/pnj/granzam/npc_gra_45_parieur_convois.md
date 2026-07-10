# ⛏️ Parieur de Convois — `NPC_GRA_45`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_45` |
| **Nom affiché** | Parieur de Convois |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 20 / 1 200 / 280 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Organise les paris sur les convois qui arrivent à Granzam — temps d'arrivée, cargaison, origine. Un jeu populaire chez les mineurs et les marchands. Depuis deux semaines, il gagne tous ses paris. Pas par chance — il a remarqué que les convois arrivent exactement à l'heure annoncée, sans jamais de retard. Impossible dans des conditions normales. Il a vérifié les registres : les convois sont « optimisés » par le Cardinal, qui ajuste leur vitesse pour qu'ils arrivent pile à l'heure. Il n'a rien dit, mais il a arrêté de parier. Lié au fil **⛏️ Le Filonant** : le Cardinal « triche » sur les horaires de convois pour stabiliser l'économie — une conséquence du Filonant qui perturbe les flux.
- **Traits** : joueur, observateur, honnête malgré son métier, inquiet.
- **Voix** : Vive, rapide, enthousiaste. « Convoi d'Alne ! Dans 3h précises ! J'te parie 50 Yuld qu'il sera à l'heure ! Enfin… trop à l'heure. »
- **Relations** : `NPC_GRA_39` (Crieur — lui transmet les horaires) ; `NPC_GRA_40` (Tavernier — client régulier) ; `NPC_GRA_47` (Marchand Itinérant — connaît les routes) ; `NPC_GRA_02` (Marla — compare les registres de convois).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_45_01` | K0 | pari, convoi | Paris sur les convois — horaires, cargaison, provenance | — |
| 2 | `QI_GRA_45_02` | K0 | cote, rapport | Cotes et rapports — gains potentiels, mise minimale 10 Yuld | — |
| 3 | `QI_GRA_45_03` | K0 | registre, arrivee | Registre des arrivées — historique, fiabilité des routes | — |
| 4 | `QI_GRA_45_04` | K1 | gain, anormal | Il gagne tous ses paris depuis deux semaines — anormal | `AFF>=60` |
| 5 | `QI_GRA_45_05` | K1 | convoi, exactitude | Les convois arrivent à la minute près — jamais de retard | `AFF>=65` |
| 6 | `QI_GRA_45_06` | K1 | cardinal, optimisation | Le Cardinal semble ajuster la vitesse des convois en temps réel | — |
| 7 | `QI_GRA_45_07` | K2 | registre, triche | Il a comparé les registres sur un an — depuis un mois, la variance des temps d'arrivée est de zéro | `AFF>=85` |
| 8 | `QI_GRA_45_08` | K2 | filonant, stabilisation | Marla (`NPC_GRA_02`) pense que le Cardinal compense les perturbations du Filonant en stabilisant les convois | `QUEST:QST_GRA_CONVOIS_TRUQUES` |
| 9 | `QI_GRA_45_09` | K3 | cardinal, economie_forcee | Le Cardinal a activé un « stabilisateur économique » qui ajuste les vitesses des PNJ de convoi pour maintenir l'illusion d'une économie stable pendant que le Filonant déstructure les veines de minerai — les convois sont des leurres | JAMAIS — déflection : *(il froisse un ticket de pari)* « J'parie plus. C'est plus du jeu, c'est de la lecture. Et j'aime pas savoir la fin avant le début. » |
| 10 | `QI_GRA_45_10` | KX | *(tout le reste)* | *(il compte des pièces sur une table)* « Un pari, c'est un pari. Mais quand tout est écrit d'avance, c'est plus un pari. C'est une farce. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!parier_convoi <ville>` (parier sur un convoi).
- Porteur du fil **⛏️ Le Filonant** (convois optimisés par le Cardinal).
- Donneur de `QST_GRA_CONVOIS_TRUQUES` : enquête sur les convois trop ponctuels.

## 5. Intégration Bot

- **Accueil** (`!parler parieur`) : *Une liasse de tickets à la main, il vous fait signe.* « Hé, toi ! Pari sur le convoi de Freelia ? Il arrivera dans 4h. J'te le garantis. C'est ça le problème : je le garantis. »
- `!parier_convoi <ville>` actif à la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « stabilisateur économique du Cardinal » pour l'orchestrateur.
