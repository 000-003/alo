# 🔨 Veilleur Jour — `NPC_BRO_78`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_78` |
| **Nom affiché** | Veilleur Jour |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Remparts |
| **Niveau / HP / MP** | 14 / 1000 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ronde de jour sur les remparts. Il voit l'ombre de la forge s'étendre sur la cité, mais parfois l'ombre bouge sans que rien ne change du côté de la flamme. Il jurerait que l'ombre mène une forge parallèle, sans forgeron. Angle : Ombre forge sans forgeron.
- **Traits** : Distrait, rêveur, regard toujours ailleurs.
- **Voix** : Lointaine. « L'ombre sait des choses que la flamme ignore. »
- **Relations :** `NPC_BRO_77` (relève de nuit).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_78_01` | K0 | ronde, jour | Ronde de jour sur les remparts est et ouest | — |
| 2 | `QI_BRO_78_02` | K0 | ombre, forge | L'ombre de la Forge-Mère couvre la moitié de la cité à midi | — |
| 3 | `QI_BRO_78_03` | K0 | chaleur, ressenti | La chaleur de la forge s'entend plus qu'elle ne se sent | — |
| 4 | `QI_BRO_78_04` | K1 | ombre, marteau | L'ombre de la forge dessine un marteau qui frappe sans bruit | `AFF>=55` |
| 5 | `QI_BRO_78_05` | K1 | silhouette, vide | Une silhouette apparaît dans l'ombre quand il n'y a personne au feu | — |
| 6 | `QI_BRO_78_06` | K1 | granzam, piste | Des traces de pas gnomes dans la poussière des remparts — alors que personne n'y monte | `AFF>=65` |
| 7 | `QI_BRO_78_07` | K2 | enclume, reflet | L'enclume se reflète dans son bouclier — mais le reflet montre une enclume fissurée | `AFF>=80` |
| 8 | `QI_BRO_78_08` | K2 | forge, jumelle | La forge crée une ombre qui forge elle-même — une forge dans l'ombre | `AFF>=85` |
| 9 | `QI_BRO_78_09` | K3 | ombre, artisan | L'ombre de la forge est l'artisan originel — le forgeron de pierre qui existait avant les Leprechauns, et qui forge encore dans l'anti-monde | JAMAIS — déflection : *(il regarde son ombre)* « Mon ombre forge sans moi. Je ne sais plus qui travaille pour qui. » |
| 10 | `QI_BRO_78_10` | KX | *(hors sujet)* | « Le soleil ne ment pas. Mais l'ombre, si. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!report_day` — signalement d'activité diurne étrange.

## 5. Intégration Bot

- **Accueil :** « L'ombre est longue aujourd'hui. Elle travaille. »