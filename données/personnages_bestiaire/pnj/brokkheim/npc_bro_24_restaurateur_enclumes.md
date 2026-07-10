# 🔨 Restaurateur Enclumes — `NPC_BRO_24`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_24` |
| **Nom affiché** | Restaurateur Enclumes |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Réparation d'enclumes) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 45 / 6 000 / 3 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Restaurateur répare les enclumes fêlées, fissurées ou cassées — un métier rare même à Brokkheim. Les enclumes sont des outils vivants pour lui : il leur parle, les écoute, les comprend. Il dit que chaque enclume a sa propre voix, sa propre résonance, et qu'il suffit de la frapper pour savoir ce qui ne va pas. Il récupère les enclumes abîmées auprès du Marchand de Scories `NPC_BRO_15` et auprès des forgerons de la Forge-Mère. Il a une technique secrète : il réchauffe le métal en tapant en rythme avec le Pouls `NPC_BRO_00`.
- **Traits** : doux, patient, parle aux objets comme à des animaux ; ses mains sont calleuses mais ses gestes sont précis.
- **Voix** : calme, chantante. « Cette enclume a une fissure intérieure. Pas dans le métal — dans son histoire. Quelqu'un l'a frappée avec colère. Je dois lui réapprendre à recevoir les coups. »
- **Relations** : Marchand Scories `NPC_BRO_15` (lui fournit des enclumes endommagées) ; Brokk IX `NPC_BRO_01` (lui confie l'entretien de son enclume personnelle) ; Apprenti Forgeron `NPC_BRO_21` (lui apprend les bases) ; Concierge Forge-Mère `NPC_BRO_20` (lui signale les enclumes à réparer).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_24_01` | K0 | enclumes, reparatio | Il répare les enclumes — fêlées, fissurées, cassées, il les remet en état | — |
| 2 | `QI_BRO_24_02` | K0 | voix, metal | Il dit que chaque enclume a une voix — il les écoute avant de les réparer | — |
| 3 | `QI_BRO_24_03` | K0 | prix, reparation | Prix selon l'état de l'enclume — une enclume bien entretenue coûte moins cher | — |
| 4 | `QI_BRO_24_04` | K1 | pouls, rythme, repa | Il tape en rythme avec le Pouls `NPC_BRO_00` pour réchauffer le métal avant réparation | `AFF>=60` |
| 5 | `QI_BRO_24_05` | K1 | brokk, enclume | Brokk IX `NPC_BRO_01` lui confie son enclume personnelle — il ne la répare que quand Brokk IX n'est pas là | `AFF>=65` |
| 6 | `QI_BRO_24_06` | K1 | apprenti, cours | Il donne des cours à l'Apprenti Forgeron `NPC_BRO_21` sur l'entretien des enclumes | — |
| 7 | `QI_BRO_24_07` | K2 | enclume, ancienne | Il a réparé une enclume qui portait la marque de Brokk I — la plus vieille enclume de Brokkheim | `AFF>=85` |
| 8 | `QI_BRO_24_08` | K2 | fissure, colere | La fissure intérieure qu'il « entend » est parfois une information — l'enclume a enregistré des paroles prononcées pendant la forge | `QUEST:QST_BRO_POULS_01` |
| 9 | `QI_BRO_24_09` | K3 | enclume, memoire, son | Les enclumes enregistrent les vibrations sonores des forges — elles sont les disques durs acoustiques de Brokkheim. En frappant une enclume dans le bon ordre, on peut rejouer des conversations tenues devant elle, y compris des réunions du Conseil des Guildes | JAMAIS — déflection : *(il pose son marteau. Il pose sa main sur l'enclume.)* « Les enclumes se souviennent de tout. De chaque coup, de chaque mot prononcé à côté d'elles. Je ne répète jamais ce que j'entends. Parce que certaines choses, même les enclumes devraient oublier. » *(il frappe un coup sec — ça claque comme un point final.)* |
| 10 | `QI_BRO_24_10` | KX | *(hors sujet)* | *(il frotte un coin d'enclume avec un chiffon)* « Là. Tu vois ? Elle sourit. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!repair_anvil` (réparation d'enclume), `!anvil_tuning` (réglage).
- Connecté au fil **🔨 Le Pouls** via la technique de réparation rythmique.

## 5. Intégration Bot

- **Accueil** (`!parler restaurateur enclumes`) : *(Il passe la main sur la surface d'une enclume, les yeux fermés. Il hoche la tête.)* « Bienvenue. Assieds-toi. Finis d'abord de réparer celle-là. Elle me raconte sa journée. » |
- `!repair_anvil` (réparation), `!anvil_tuning` (réglage).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « enclumes = disques durs acoustiques du serveur » réservé à l'orchestrateur.
