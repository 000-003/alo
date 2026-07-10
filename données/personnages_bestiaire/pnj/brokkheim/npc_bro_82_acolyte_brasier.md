# 🔨 Acolyte Brasier — `NPC_BRO_82`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_82` |
| **Nom affiché** | Acolyte Brasier |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Autel Résurrection |
| **Niveau / HP / MP** | 6 / 400 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Jeune acolyte qui entretient les braises de l'autel. Il a la charge des braises qui ne refroidissent pas — le feu dormant qui attend les résurrections. Depuis peu, les braises refroidissent sans raison, et il les ranime sans comprendre pourquoi. Angle : Braises refroidissent pas.
- **Traits** : Nerveux, zélé, brûlé aux doigts.
- **Voix** : Haute, pressée. « Les braises ! Elles s'éteignent ! Vite ! »
- **Relations :** `NPC_BRO_80` (supérieur), `NPC_BRO_81` (prêtresse), `NPC_BRO_83` (vestale).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_82_01` | K0 | braises, autel | Entretien des braises : toutes les 2 heures | — |
| 2 | `QI_BRO_82_02` | K0 | feu, resurrection | Les braises servent à ranimer les forgerons morts | — |
| 3 | `QI_BRO_82_03` | K0 | charbon, sacre | Le charbon utilisé vient du cœur de la Forge-Mère | — |
| 4 | `QI_BRO_82_04` | K1 | braise, froide | Une braise est restée froide 3 jours — impossible | `AFF>=55` |
| 5 | `QI_BRO_82_05` | K1 | cendre, chaude | Les cendres froides sont chaudes au toucher — paradoxe | — |
| 6 | `QI_BRO_82_06` | K1 | ombre, braise | L'ombre de la braise est plus grande que la braise elle-même | `AFF>=65` |
| 7 | `QI_BRO_82_07` | K2 | braise, vol | Quelqu'un échange les braises contre du faux charbon | `AFF>=80` |
| 8 | `QI_BRO_82_08` | K2 | acolyte, avant | L'acolyte avant lui est mort brûlé — braises s'étaient emballées | `AFF>=85` |
| 9 | `QI_BRO_82_09` | K3 | braise, essence | Les braises ne sont pas du feu — ce sont des fragments d'âme de forgerons qui attendent la résurrection. Si elles refroidissent, l'âme s'éteint définitivement | JAMAIS — déflection : *(il recule)* « Je ne peux pas parler des braises. Elles écoutent. » |
| 10 | `QI_BRO_82_10` | KX | *(hors sujet)* | « La braise n'oublie pas. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!tend_braises` — aide à entretenir le feu.

## 5. Intégration Bot

- **Accueil :** *(il souffle sur une braise)* « Elle tient… pour l'instant. »