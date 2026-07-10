# 🔨 Maître Trempe — `NPC_BRO_22`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_22` |
| **Nom affiché** | Maître Trempe |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (Trempe avancée) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 70 / 14 000 / 5 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître Trempe est le spécialiste de la trempe à la Forge-Mère — c'est lui qui refroidit les lames dans les bains d'huile, d'eau ou de vapeur, selon la destination de l'arme. Il travaille en silence, entouré de cuves fumantes. Il est jaloux de Nilsa `NPC_BRO_06` — son « don » lui semble une insulte à l'art de la trempe, qui demande des années de pratique, pas un talent inné. Il ne le dit pas ouvertement, mais il sabote parfois ses pièces. Il suit le rythme du Pouls `NPC_BRO_00` sans le savoir — ses mains plongent les lames en synchronisation avec les battements.
- **Traits** : silencieux, jaloux, méthodique ; ses bras sont marqués de brûlures anciennes.
- **Voix** : basse, hostile. « La trempe est pas un don. C'est une discipline. On apprend pas à refroidir le métal en un matin. On y passe des années. »
- **Relations** : Nilsa `NPC_BRO_06` (jalousie secrète) ; Brokk IX `NPC_BRO_01` (le respect à contrecœur) ; Maître Alliage `NPC_BRO_23` (collègue, prépare les métaux pour ses trempes) ; Marchand Eau `NPC_BRO_26` (fil Le Pacte des Eaux — négocie des bains d'eau pure).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_22_01` | K0 | trempe, maitrise | Il maîtrise la trempe — huile, eau, vapeur, chaque bain a ses secrets | — |
| 2 | `QI_BRO_22_02` | K0 | cuves, forge | Il travaille entouré de cuves fumantes — la salle de trempe est la plus chaude de la Forge-Mère | — |
| 3 | `QI_BRO_22_03` | K0 | prix, trempe | Prix selon la complexité de la trempe — trempe simple, double, triple | — |
| 4 | `QI_BRO_22_04` | K1 | nilsa, jalousie | Il est jaloux du don de Nilsa `NPC_BRO_06` — il pense que ça dévalorise son art | `AFF>=60` |
| 5 | `QI_BRO_22_05` | K1 | sabotage, piece | Il sabote parfois les pièces de Nilsa — une fissure invisible, un refroidissement trop rapide | `AFF>=65` |
| 6 | `QI_BRO_22_06` | K1 | pouls, rythme | Ses mains plongent les lames en rythme avec le Pouls `NPC_BRO_00` — il ne s'en rend pas compte | — |
| 7 | `QI_BRO_22_07` | K2 | eau, pure, pacte | Il négocie avec le Marchand d'Eau `NPC_BRO_26` pour des bains d'eau pure — les meilleures trempes nécessitent de l'eau non recyclée | `AFF>=85` |
| 8 | `QI_BRO_22_08` | K2 | trempe, triple, rare | La trempe triple est presque impossible — seules trois lames dans l'histoire de Brokkheim l'ont supportée | `QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_22_09` | K3 | eau, basse, couche | L'eau pure du Marchand d'Eau ne vient pas des nappes phréatiques — elle vient d'une couche de données non corrompue du serveur. Tremper une lame dans cette eau, c'est laver le métal avec le code source original d'ALO | JAMAIS — déflection : *(il plonge une lame dans un bain. La vapeur s'élève en motifs géométriques parfaits.)* « L'eau. Juste de l'eau. Rien que de l'eau. » *(il trempe ses doigts dans le bain. La peau ne brûle pas — elle luit.)* « … Va-t'en. » |
| 10 | `QI_BRO_22_10` | KX | *(hors sujet)* | *(il crache dans un bain d'huile — l'huile grésille)* | — |

## 4. Chaînage économique & quêtes

- **Skill Master** : `!skill_trempe` (formation trempe), `!trempe_price` (devis).
- Porteur du fil **🔨 Le Pouls** (rythme des trempes) et **💧 Le Pacte des Eaux** avec `NPC_BRO_26`.

## 5. Intégration Bot

- **Accueil** (`!parler maitre trempe`) : *(Il ne se retourne pas. Il plonge une lame rouge dans un bain. La vapeur crache.)* « Si t'es venu pour apprendre la trempe, pose ton métal et tais-toi. Si t'es venu pour parler, la porte est derrière toi. » |
- `!skill_trempe` (formation), `!trempe_price` (devis).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « eau pure = code source d'ALO » réservé à l'orchestrateur.
