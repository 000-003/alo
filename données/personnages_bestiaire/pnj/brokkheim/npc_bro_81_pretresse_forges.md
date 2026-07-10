# 🔨 Prêtresse Forges — `NPC_BRO_81`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_81` |
| **Nom affiché** | Prêtresse Forges |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Autel Résurrection |
| **Niveau / HP / MP** | 22 / 750 / 950 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prêtresse dédiée aux forges. Elle bénit les enclumes et les marteaux neufs. Depuis un certain temps, un silence pesant l'entoure quand elle prie — les marteaux ne résonnent plus, le feu ne crépite pas. Comme si la forge elle-même retenait son souffle. Angle : Silence pesant.
- **Traits** : Calme, pénétrante, parle à voix basse.
- **Voix** : Murmurée, solennelle. « Les forges se taisent. Écoute. »
- **Relations :** `NPC_BRO_80` (prêtre flamme, collègue), `NPC_BRO_84` (complot secret — le nécromancien utilise ses cendres), `NPC_BRO_97` (prêtre souvenir).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_81_01` | K0 | benediction, forge | Bénédiction des forges : rituel hebdomadaire | — |
| 2 | `QI_BRO_81_02` | K0 | enclume, sacree | Chaque enclume est bénite avec de l'eau des geysers | — |
| 3 | `QI_BRO_81_03` | K0 | priere, silence | La prière du forgeron : un poème en 47 coups de marteau | — |
| 4 | `QI_BRO_81_04` | K1 | silence, recent | Les enclumes ne résonnent plus comme avant — un son mat | — |
| 5 | `QI_BRO_81_05` | K1 | forge, ecoute | Elle sent que la forge l'écoute — une conscience dans le métal | `AFF>=60` |
| 6 | `QI_BRO_81_06` | K1 | cendres, disparues | Les cendres des bénédictions disparaissent la nuit | `AFF>=65` |
| 7 | `QI_BRO_81_07` | K2 | necromancien, complicite | Elle livre les cendres à `NPC_BRO_84` en secret — pour que les forgerons morts aient une seconde existence | `AFF>=85` |
| 8 | `QI_BRO_81_08` | K2 | silence, cause | Le silence est causé par la peur — les enclumes ont peur de ce qu'elles forgent | `AFF>=80` |
| 9 | `QI_BRO_81_09` | K3 | enclumes, conscience | Les enclumes sont des êtres conscients qui transmettent leur connaissance à travers le métal forgé. Elles se taisent car le mithril qu'on leur donne à forger est impur — il ment | JAMAIS — déflection : *(elle pose la main sur l'enclume, silence absolu)* « Elle ne me parle plus. Va-t'en avant qu'elle ne te juge. » |
| 10 | `QI_BRO_81_10` | KX | *(hors sujet)* | « Le silence est une réponse. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!bless_forge` — bénédiction d'équipement de forgeron.

## 5. Intégration Bot

- **Accueil :** *(elle incline la tête)* « Que le marteau te guide. »