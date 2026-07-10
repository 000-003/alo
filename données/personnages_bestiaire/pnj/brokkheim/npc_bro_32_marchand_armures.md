# 🔨 Marchand d'Armures — `NPC_BRO_32`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_32` |
| **Nom affiché** | Marchand d'Armures |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (armures légères, broignes, heaumes) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 19 / 1 600 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vendeur d'armures légères et de heaumes finement ouvragés. Son étal présente des pièces magnifiques, mais un heaume en particulier — un vieux casque nain qu'il n'arrive pas à vendre — murmure des choses la nuit. Des mots en nain ancien, des noms de batailles perdues. Il l'a mis au fond de sa réserve, mais il l'entend encore. Angle : le heaume qui murmure porte la mémoire d'un général nain mort à Brokkheim.
- **Traits** : commercial, un peu peureux la nuit, collectionneur malgré lui, sensible aux murmures.
- **Voix** : enjouée mais qui faiblit le soir (« Belle pièce, hein ? Tu l'entends pas ? Non ? Tant mieux. »).
- **Relations** : `NPC_BRO_31` (étal voisin) ; `NPC_BRO_30` (garde de la halle) ; `NPC_BRO_41` (envoie ses armures au polissage) ; `NPC_BRO_44` (vernis de protection).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_32_01` | K0 | armures, catalogue | Armures légères, broignes, heaumes : 100-800 Yrds | — |
| 2 | `QI_BRO_32_02` | K0 | cuir, metal | Matériaux : cuir bouilli, maille, plaques légères | — |
| 3 | `QI_BRO_32_03` | K0 | essayage, conseils | Service d'essayage, conseils de protection | — |
| 4 | `QI_BRO_32_04` | K1 | heaume, murmure | Un heaume nain murmure la nuit — des mots en nain ancien | — |
| 5 | `QI_BRO_32_05` | K1 | mots, bataille | Les mots sont des noms de soldats morts à la bataille de la Porte de lave | `AFF>=60` |
| 6 | `QI_BRO_32_06` | K1 | general, nain | Le heaume a appartenu à un général nain — tué par un Leprechaun au début du siège | `AFF>=65` |
| 7 | `QI_BRO_32_07` | K2 | heaume, fendu | Le heaume est fendu à l'intérieur — une fissure qui laisse passer « autre chose » | `AFF>=80` |
| 8 | `QI_BRO_32_08` | K2 | ame, coincee | L'âme du général nain est piégée dans le heaume — il ne peut pas partir tant que l'enclume du Cardinal n'est pas apaisée | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_32_09` | K3 | heaume, enclume cardinal | Le heaume a été forgé sur l'Enclume du Cardinal (`NPC_BRO_XX` — PNJ non créé). Quand l'enclume frappe, le heaume répète l'impact. L'âme du général n'est pas prisonnière du heaume — elle est prisonnière du rythme de l'enclume. Chaque coup la brise et la refait | JAMAIS — déflection : *(il enferme le heaume dans un coffre et s'assied dessus)* « Il est juste vieux. Les vieux casques font du bruit. La rouille. Le métal qui se dilate. C'est tout. » |
| 10 | `QI_BRO_32_10` | KX | *(hors sujet)* | « Certaines armures protègent le corps. D'autres protègent ce qui reste dedans. » | — |

## 4. Chaînage économique & quêtes

- **Marchand d'armures** : `!buy_armor_light` (armures légères).
- Fil **Trempe Légendaire** + **Enclume du Cardinal** (heaume/âme).
- Quête `QST_BRO_TREMPE_02` : libérer l'âme du général nain.

## 5. Intégration Bot

- **Accueil** (`!parler armures`) : *« Une armure, c'est une seconde peau. Et celle-ci... elle a déjà eu un propriétaire. »*
- `!buy_armor_light` — catalogue des armures.
- `NPC_SECRET_PROBED` slot 9 : hook « heaume/Enclume du Cardinal » pour l'orchestrateur.
