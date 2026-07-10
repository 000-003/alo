# 🔨 Graveur de Runes — `NPC_BRO_42`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_42` |
| **Nom affiché** | Graveur de Runes |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (gravure runique, marquage) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Quai des Finitions |
| **Niveau / HP / MP** | 23 / 1 100 / 1 100 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Graveur de runes héréditaire — sa famille grave depuis six générations. Chaque rune qu'il trace sur une lame ou une armure est une formule de pouvoir ancien. Mais sa dernière gravure — une rune de protection sur une épée de `NPC_BRO_31` — a pris feu pendant la nuit. La rune brûle encore dans le métal, consumant l'acier de l'intérieur. La rune n'est pas qu'une marque — elle est active, vivante, et elle brûle. Angle : la rune qui brûle est une rune qui n'aurait jamais dû être gravée — un savoir trop ancien.
- **Traits** : traditionaliste, méticuleux, effrayé par son propre art, dévoué.
- **Voix** : concentrée, hésite parfois sur les mots (« Chaque rune a un poids. Certaines sont trop lourdes pour l'acier. »).
- **Relations** : `NPC_BRO_31` (grave ses lames) ; `NPC_BRO_43` (enchantements sur runes) ; `NPC_BRO_40` (gravure avant finition) ; `NPC_BRO_32` (runes décoratives sur armures).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_42_01` | K0 | runes, gravure | Services de gravure runique : 50-500 Yrds | — |
| 2 | `QI_BRO_42_02` | K0 | alphabet, runique | L'alphabet runique Leprechaun, histoire de l'écriture sacrée | — |
| 3 | `QI_BRO_42_03` | K0 | protection, rune | Runes de protection, de force, de précision | — |
| 4 | `QI_BRO_42_04` | K1 | rune, brule | Une rune de protection gravée récemment brûle dans l'acier | — |
| 5 | `QI_BRO_42_05` | K1 | nuit, feu | La nuit, la rune s'embrase — le métal devient rouge mais ne fond pas | `AFF>=60` |
| 6 | `QI_BRO_42_06` | K1 | mot, interdit | Il a gravé une rune interdite — une rune qui n'apparaît dans aucun livre | `AFF>=65` |
| 7 | `QI_BRO_42_07` | K2 | rune, origine | La rune lui a été dictée en rêve par un forgeron mort — son arrière-grand-père | `AFF>=80` |
| 8 | `QI_BRO_42_08` | K2 | famille, secret | Sa famille garde un recueil de runes anciennes — la Rune de Feu n'a jamais été écrite | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_42_09` | K3 | rune, bruler dit | La rune qui brûle est la signature du Cardinal lui-même. Chaque fois qu'un forgeron grave une rune de pouvoir, le Cardinal peut « répondre » à travers elle. La rune brûle parce que le Cardinal a reconnu l'acier — il l'a marqué de sa volonté. La rune n'est pas une marque de protection — c'est un sceau d'appartenance au Cardinal | JAMAIS — déflection : *(il couvre la rune d'un linge humide)* « C'est une technique qui a mal tourné. Trop de chaleur pendant la gravure. Je vais la repolir. Elle ne brûlera plus. » |
| 10 | `QI_BRO_42_10` | KX | *(hors sujet)* | « La rune n'est pas écrite sur l'acier. Elle est écrite dans l'acier. Et parfois, l'acier répond. » | — |

## 4. Chaînage économique & quêtes

- **Service de gravure** : `!engrave` (graver une rune sur une arme/armure).
- Fil **Trempe Légendaire** (Rune du Cardinal) + **Le Pouls** (réponse du Cardinal).
- Quête `QST_BRO_TREMPE_06` : enquêter sur le recueil de runes familiales.

## 5. Intégration Bot

- **Accueil** (`!parler graveur`) : *« Quelle rune veux-tu ? Choisis bien — elle ne partira plus. »*
- `!engrave` — service de gravure runique.
- `NPC_SECRET_PROBED` slot 9 : hook « rune/sceau du Cardinal » pour l'orchestrateur.
