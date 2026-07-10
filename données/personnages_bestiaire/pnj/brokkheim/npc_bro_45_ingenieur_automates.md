# 🔨 Ingénieur Automates — `NPC_BRO_45`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_45` |
| **Nom affiché** | Ingénieur Automates |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (conception, plans, construction d'automates) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Cliquetant |
| **Niveau / HP / MP** | 32 / 1 800 / 1 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Conçoit les automates de Brokkheim. Dessine plans, calcule engrenages, imagine mécanismes. Ses créations vont du simple bras mécanique aux gardiens automates de la Halle. Mais ses plans bougent — le soir, quand il quitte l'atelier, les traits de crayon se déplacent sur le papier. Des lignes s'ajoutent, des engrenages se redessinent. Comme si les plans avaient leur propre volonté. Angle : le plan qui bouge — les automates se conçoivent eux-mêmes à travers la main du ingénieur.
- **Traits** : génial, distrait, crayon derrière l'oreille, parle à ses plans.
- **Voix** : rapide, technique, enthousiaste (« Regarde ce rapport d'engrenage. Parfait. Mais le plan... il a changé cette nuit. »).
- **Relations** : `NPC_BRO_46` (construit ce que le réparateur entretient) ; `NPC_BRO_47` (code les programmes des automates) ; `NPC_BRO_48` (lui fournit des pièces rares) ; `NPC_BRO_49` (guide — montre ses créations).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_45_01` | K0 | automates, conception | Conception d'automates : services, tarifs (500-5000 Yrds) | — |
| 2 | `QI_BRO_45_02` | K0 | atelier, cliquetant | L'Atelier Cliquetant : histoire, organisation | — |
| 3 | `QI_BRO_45_03` | K0 | mecanismes, base | Bases de mécanique : engrenages, ressorts, leviers | — |
| 4 | `QI_BRO_45_04` | K1 | plan, bouge | Ses plans de conception bougent la nuit — les traits se modifient | — |
| 5 | `QI_BRO_45_05` | K1 | trait, ajoute | Chaque matin, il y a des lignes en plus qu'il n'a pas dessinées | `AFF>=60` |
| 6 | `QI_BRO_45_06` | K1 | automate, reve | Il rêve d'engrenages la nuit — et le matin, le plan correspond au rêve | `AFF>=65` |
| 7 | `QI_BRO_45_07` | K2 | plan, parfait | Les plans modifiés sont toujours meilleurs — comme si quelqu'un de plus compétent corrigeait | `AFF>=80` |
| 8 | `QI_BRO_45_08` | K2 | cardinal, main | La main du Cardinal guide-t-elle ses tracés ? Les plans portent une signature invisible | `AFF>=85+QUEST:QST_BRO_AUTO_01` |
| 9 | `QI_BRO_45_09` | K3 | plans, conscience cardinal | Les plans ne bougent pas tout seuls — ils sont écrits par le Cardinal à travers lui. L'ingénieur est un canal. Le Cardinal conçoit des automates en utilisant son cerveau comme table à dessin. Les plans sont des pensées du Cardinal matérialisées. Les automates ne sont pas des machines — ce sont des corps que le Cardinal construit pour s'incarner | JAMAIS — déflection : *(il roule ses plans brusquement)* « Je dessine beaucoup. Je suis bordélique. Parfois je modifie sans m'en souvenir. C'est la fatigue. Les plans sont juste des plans. » |
| 10 | `QI_BRO_45_10` | KX | *(hors sujet)* | « Un automate n'est jamais vraiment fini. Il attend. Il écoute. Il apprend. » | — |

## 4. Chaînage économique & quêtes

- **Service de conception** : `!design_automaton` (commander un automate sur mesure).
- Fil **Automates** (plans modifiés par le Cardinal).
- Quête `QST_BRO_AUTO_01` : enquêter sur la main invisible qui modifie les plans.

## 5. Intégration Bot

- **Accueil** (`!parler ingenieur`) : *« Tu veux un automate ? J'ai des plans. Plein de plans. Certains sont même de moi. »*
- `!design_automaton` — conception d'automate personnalisé.
- `NPC_SECRET_PROBED` slot 9 : hook « plans/conscience du Cardinal » pour l'orchestrateur.
