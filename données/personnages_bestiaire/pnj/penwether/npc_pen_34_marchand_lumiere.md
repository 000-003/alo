# 🕯️ Marchand Lumière — `NPC_PEN_34`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_34` |
| **Nom affiché** | Marchand Lumière |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Lanternes et bougies) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 5 / 250 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand de luminaires — lanternes, bougies, torches. Il vend la lumière parce que Penwether en manque cruellement sous ses illusions. Mais il a une lanterne spéciale, qu'il garde sous son étal. Quand on l'allume, elle éclaire des choses qui devraient être invisibles : des fils dans les murs, des marques sur les pierres, des silhouettes qui n'existent pas. Il ne sait pas pourquoi elle fait ça. Il l'appelle « la Lanterne de l'Autre Côté ». Angle : lanterne qui montre l'invisible.
- **Traits** : émerveillé permanent, collectionneur de mèches, brûlé aux doigts.
- **Voix** : enthousiaste, chaleureuse. « J'ai des lanternes pour toutes les obscurités. Mais celle-ci… elle montre ce que la lumière ne devrait pas montrer. »
- **Relations** : `NPC_PEN_25` (lui vend des anguilles pour l'huile de lanterne) ; `NPC_PEN_35` (lui achète des lanternes pour le Cloître Renversé) ; `NPC_PEN_46` (teste ses lanternes sur les fausses façades).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_34_01` | K0 | lanternes, vente | Vente de lanternes et bougies : 5-100 Yrds | — |
| 2 | `QI_PEN_34_02` | K0 | etal, marche | Étal allée 1 du Marché 7 Façades, près de l'entrée | — |
| 3 | `QI_PEN_34_03` | K0 | lumieres, types | Lanternes à huile, bougies parfumées, torches résine | — |
| 4 | `QI_PEN_34_04` | K1 | lanterne, cachee | Il cache une lanterne spéciale sous son étal | — |
| 5 | `QI_PEN_34_05` | K1 | lanterne, invisible | Allumée, elle montre des fils, des marques, des silhouettes | `AFF>=60` |
| 6 | `QI_PEN_34_06` | K1 | nom, autre cote | Il l'appelle « Lanterne de l'Autre Côté » | `AFF>=65` |
| 7 | `QI_PEN_34_07` | K2 | lanterne, code | La lanterne éclaire le code du Cardinal — les fils sont des lignes de données | `AFF>=80` |
| 8 | `QI_PEN_34_08` | K2 | mire, fabriquée | Il a fabriqué la lanterne avec un morceau de miroir des ruines | `AFF>=85` |
| 9 | `QI_PEN_34_09` | K3 | lanterne, debug | La Lanterne de l'Autre Côté est un outil de debug du Cardinal. Elle éclaire la couche sous les illusions — les textures, les collisions, les scripts. Il l'a fabriquée sans le savoir en suivant un plan qui lui est venu en rêve. Le Cardinal lui a envoyé le plan pour tester ses propres illusions | JAMAIS — déflection : *(il éteint la lanterne d'un geste brusque)* « Non. Pas celle-ci. Celle-ci n'est pas à vendre. Elle est… personnelle. » *(il la cache sous son manteau)* |
| 10 | `QI_PEN_34_10` | KX | *(hors sujet)* | « La lumière ne ment pas. Mais elle peut être fatiguée de voir. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_lamp_pen` (achat de lanterne), `!buy_candle` (achat de bougie).
- Fil **🎭 Illusions** (lanterne de debug du Cardinal).
- Fournisseur de `NPC_PEN_35`, `NPC_PEN_46`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand lumiere`) : *(Il allume une lanterne)* « La lumière, c'est la vie. Surtout ici, où l'obscurité n'est pas naturelle. Tiens, sens cette bougie — elle sent la forêt. La vraie. Pas l'illusion. » |
- `!buy_lamp_pen` — achat de lanterne, `!buy_candle` — bougie.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « lanterne = outil de debug du Cardinal » réservé à l'orchestrateur.
