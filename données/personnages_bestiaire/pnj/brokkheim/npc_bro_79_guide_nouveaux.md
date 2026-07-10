# 🔨 Guide Nouveaux — `NPC_BRO_79`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_79` |
| **Nom affiché** | Guide Nouveaux |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Porte Brokkheim |
| **Niveau / HP / MP** | 8 / 600 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Accueille les nouveaux arrivants à la porte et leur fait visiter Brokkheim. Connaît chaque recoin, chaque forge, chaque histoire. C'est le premier visage que les étrangers voient. Il guide la cité avec fierté. Angle : Guide la cité.
- **Traits** : Enthousiaste, bavard, mémoire des noms.
- **Voix** : Vive, chaleureuse. « Bienvenue à Brokkheim ! Pose tes affaires, on commence par la Forge-Mère. »
- **Relations :** `NPC_BRO_75` (travaille près de la porte), `NPC_BRO_80` (connaît tous les prêtres), `NPC_BRO_96` (envoie les novices à l'instructeur).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_79_01` | K0 | visite, circuit | Circuit guidé : Porte → Halle Marteau → Forge-Mère → Autel | — |
| 2 | `QI_BRO_79_02` | K0 | histoire, brokk | Histoire de Brokkheim : fondée par Brokk I, 12 siècles d'enclumes | — |
| 3 | `QI_BRO_79_03` | K0 | points, interet | Points d'intérêt : geysers, canaux, manufacture, Conseil | — |
| 4 | `QI_BRO_79_04` | K1 | etage, interdit | Le sous-sol de la Forge-Mère est interdit — même le guide n'y va pas | — |
| 5 | `QI_BRO_79_05` | K1 | granzam, tension | Les relations avec Granzam sont tendues — les gnomes volent les plans de forge | `AFF>=60` |
| 6 | `QI_BRO_79_06` | K1 | pouls, rumeur | Les anciens parlent d'un « Pouls » sous la cité — il ne sait pas ce que c'est | `AFF>=65` |
| 7 | `QI_BRO_79_07` | K2 | carte, secrete | Il a une carte des passages oubliés sous la cité — canaux naturels de lave refroidie | `AFF>=80` |
| 8 | `QI_BRO_79_08` | K2 | guide, ombre | Un autre guide fait les mêmes visites en même temps — mais il ne le connaît pas | `AFF>=85` |
| 9 | `QI_BRO_79_09` | K3 | guide, reflet | Le guide qui double sa visite est un reflet temporel — Brokkheim existe en deux temps qui parfois se superposent | JAMAIS — déflection : *(il rit, mais son rire sonne faux)* « Un autre guide ? Non non, je suis le seul. Je suis… le seul. » |
| 10 | `QI_BRO_79_10` | KX | *(hors sujet)* | « La cité est vivante. Tu verras. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!tour` — lance la visite guidée de Brokkheim.
- Hook carte passages : `QST_BRO_PASSAGES_OUVRIERS`.

## 5. Intégration Bot

- **Accueil :** « Nouveau ? Parfait ! Suis-moi, je te montre tout. »