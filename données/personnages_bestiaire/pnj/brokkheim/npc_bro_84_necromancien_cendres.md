# 🔨 Nécromancien Cendres — `NPC_BRO_84`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_84` |
| **Nom affiché** | Nécromancien Cendres |
| **Race** | Leprechaun |
| **Rôle** | `BLACK_MARKET` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Englouti (interdit) |
| **Niveau / HP / MP** | 35 / 2000 / 1500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien prêtre de l'autel banni pour avoir tenté de ranimer les morts par la cendre plutôt que par la flamme. Il travaille dans l'Atelier Englouti, un niveau inondé sous les canaux. Il ranime les cendres des forgerons — des corps chauds, des voix de métal. Le processus donne des êtres de cendre et de brasier qui parlent encore la langue de la forge. Angle : Mort parle métal.
- **Traits** : Macabre, brûlé vif autrefois, parle aux cendres.
- **Voix** : Gravelée, comme des braises qui crépitent. « La cendre se souvient du feu. Et le feu se souvient du forgeron. »
- **Relations :** `NPC_BRO_81` (complice — lui livre les cendres), `NPC_BRO_85` (fossoyeur — lui fournit les corps), `NPC_BRO_88` (achète ses créations de mithril cendré).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_84_01` | K0 | atelier, englouti | Atelier sous les canaux, accès par une trappe dans le canal 4 | — |
| 2 | `QI_BRO_84_02` | K0 | cendres, rituel | Rituel de nécromancie par les cendres de forge | — |
| 3 | `QI_BRO_84_03` | K0 | morts, metal | Les ranimés parlent avec une voix de métal fondu | — |
| 4 | `QI_BRO_84_04` | K1 | cendres, echange | Les cendres viennent de `NPC_BRO_85` et `NPC_BRO_81` | `AFF>=55` |
| 5 | `QI_BRO_84_05` | K1 | forgeron, ranime | Un forgeron ranimé nommé Brokk VI parle encore — il sait où est le Pouls | `AFF>=65` |
| 6 | `QI_BRO_84_06` | K1 | voix, morts | Les morts racontent ce qu'ils ont vu dans l'intervalle — le vide entre la mort et la cendre | — |
| 7 | `QI_BRO_84_07` | K2 | enclume, noire | Il forge avec une enclume noire — forgée dans les cendres des premiers Leprechauns | `AFF>=80` |
| 8 | `QI_BRO_84_08` | K2 | granzam, morts | Des gnomes morts lui sont apportés — il les ranime aussi | `AFF>=85` |
| 9 | `QI_BRO_84_09` | K3 | cendres, cardinal | Les cendres qu'il utilise sont des fragments du Cardinal lui-même — chaque forgeron qui meurt rend un peu de cardinalité. Le ranimer vole un fragment à l'au-delà du serveur | JAMAIS — déflection : *(les cendres autour de lui s'embrasent)* « Tu veux savoir ce que je fais ? Non. Tu veux savoir ce que sont les cendres ? Encore moins. » |
| 10 | `QI_BRO_84_10` | KX | *(hors sujet)* | « La cendre parle. Il faut juste savoir écouter. » | — |

## 4. Chaînage économique & quêtes

- **BLACK_MARKET** : `!trade_ash` — achat/vente d'objets de cendre.
- Hook Brokk VI ranimé : `QST_BRO_CENDRES_ROI`.

## 5. Intégration Bot

- **Accueil :** *(les braises crépitent dans sa gorge)* « Tu viens pour les morts ? Ils t'attendent. »