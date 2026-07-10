# 🔨 Prêtre Souvenir — `NPC_BRO_97`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_97` |
| **Nom affiché** | Prêtre Souvenir |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Autel Résurrection |
| **Niveau / HP / MP** | 18 / 700 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prêtre qui brûle les noms des défunts dans le feu sacré. Quand un nom brûle, il monte avec la fumée vers les geysers. Il a la charge de la mémoire des morts. Mais certains noms refusent de brûler — ils tombent en cendres sans s'enflammer. Angle : Nom brûle.
- **Traits** : Mélancolique, fumée dans les vêtements, yeux rouges.
- **Voix** : Basse, fatiguée. « Le nom monte vers la vapeur. Là-haut, il rejoint la mémoire collective. »
- **Relations :** `NPC_BRO_80` (prêtre flamme — rituels combinés), `NPC_BRO_83` (vestale — rites funéraires), `NPC_BRO_89` (gardien mémorial — reçoit les noms).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_97_01` | K0 | rituel, nom | Rituel : brûler le nom du défunt dans la flamme | — |
| 2 | `QI_BRO_97_02` | K0 | fumee, geyser | La fumée monte vers les geysers — mémoire qui retourne à la terre | — |
| 3 | `QI_BRO_97_03` | K0 | nom, refuse | Certains noms refusent de brûler — ils tombent en cendres | — |
| 4 | `QI_BRO_97_04` | K1 | nom, coincé | Un nom coincé entre deux mondes — il brûle pas, signe que l'âme est retenue | `AFF>=55` |
| 5 | `QI_BRO_97_05` | K1 | cendre, froide | Les noms qui refusent de brûler donnent des cendres froides — anormal | — |
| 6 | `QI_BRO_97_06` | K1 | nom, brokk | Le nom de Brokk VI refuse de brûler depuis 20 ans | `AFF>=65` |
| 7 | `QI_BRO_97_07` | K2 | necromancie, lien | Les noms qui refusent de brûler sont ceux ranimés par `NPC_BRO_84` | `AFF>=85` |
| 8 | `QI_BRO_97_08` | K2 | nom, pouls | Les noms qui brûlent le plus vite sont ceux forgés près du Pouls | `AFF>=80` |
| 9 | `QI_BRO_97_09` | K3 | nom, serveur | Brûler un nom dans le feu, c'est supprimer son entrée dans le registre des âmes du serveur. Les noms qui refusent de brûler sont protégés par le Cardinal — ils ne peuvent pas être effacés | JAMAIS — déflection : *(la flamme vacille, ses yeux s'embrument)* « Je brûle ce qu'on me donne. Je ne pose pas de questions. Je ne peux pas. » |
| 10 | `QI_BRO_97_10` | KX | *(hors sujet)* | « La fumée monte. Mais un jour, elle redescend. Elle redescend toujours. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!burn_name` — brûler un nom dans la flamme.

## 5. Intégration Bot

- **Accueil :** *(il jette une pincée de cendres dans le feu)* « Un nom pour la flamme ? Donne-le-moi. Je le monte aux geysers. »