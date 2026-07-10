# 🔨 Marchand de Lames — `NPC_BRO_31`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_31` |
| **Nom affiché** | Marchand de Lames |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (épées, dagues, lames fines) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 20 / 1 500 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Expert en lames, de la dague de poche à l'épée longue. Ses lames sont forgées par les maîtres de Brokkheim, mais il garde sous son comptoir une épée qui vibre toute seule quand on approche du Pouls. Il l'a trouvée dans un lot d'armes d'occasion et depuis, elle chante une note différente chaque jour. Angle : la lame qui vibre est accordée au Pouls — une arme vivante.
- **Traits** : enthousiaste, amoureux des lames, secret sur son stock personnel, parle aux épées.
- **Voix** : rapide, passionnée (« Chaque lame a une histoire. Celle-ci, par exemple — elle a soif. »).
- **Relations** : `NPC_BRO_30` (garde qui protège son étal) ; `NPC_BRO_32` (étal voisin, s'échangent des clients) ; `NPC_BRO_40` (lui envoie ses clients pour finitions) ; `NPC_BRO_44` (lui vernit les lames de prestige).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_31_01` | K0 | lames, catalogue | Épées, dagues, rapières : 50-500 Yrds selon forge | — |
| 2 | `QI_BRO_31_02` | K0 | acier, local | L'acier de Brokkheim : réputé pour sa trempe au geyser | — |
| 3 | `QI_BRO_31_03` | K0 | entretien, lame | Conseils d'entretien, huile, pierre à aiguiser | — |
| 4 | `QI_BRO_31_04` | K1 | lame, vibration | Une épée vibre sous son comptoir — elle résonne avec le Pouls | — |
| 5 | `QI_BRO_31_05` | K1 | note, jour | La lame vibre à une note différente chaque jour — elle « parle » | `AFF>=60` |
| 6 | `QI_BRO_31_06` | K1 | origine, arme | L'épée vient d'un stock de la Trempe Légendaire — marquée du sceau du Cardinal | `AFF>=65` |
| 7 | `QI_BRO_31_07` | K2 | lame, vivante | L'épée a soif — pas d'eau, de sang. Elle s'anime si on la plante dans la forge | `AFF>=80` |
| 8 | `QI_BRO_31_08` | K2 | forge, cardinal | L'épée a été forgée par `NPC_BRO_40` il y a 200 ans — avant qu'il devienne Maître | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_31_09` | K3 | lame, epee ame | L'épée contient l'âme d'un forgeron mort dans la Trempe Légendaire. Chaque vibration est un mot qu'il tente de dire. La lame n'est pas une arme — c'est une prison d'âme | JAMAIS — déflection : *(il caresse le fourreau)* « C'est une bonne lame. Une très bonne lame. Mais elle a ses humeurs. Je devrais la vendre, mais elle ne veut pas partir. Alors elle reste. » |
| 10 | `QI_BRO_31_10` | KX | *(hors sujet)* | « Une lame ne ment jamais. C'est le forgeron qui ment. » | — |

## 4. Chaînage économique & quêtes

- **Marchand d'armes** : `!buy_blades` (lames, dagues, épées).
- Fil **Trempe Légendaire** (lame prison d'âme).
- Quête `QST_BRO_TREMPE_01` : enquêter sur l'origine de l'épée vibrante.

## 5. Intégration Bot

- **Accueil** (`!parler lames`) : *« Tu cherches une lame ou une histoire ? Parfois c'est la même chose. »*
- `!buy_blades` — catalogue des lames.
- `NPC_SECRET_PROBED` slot 9 : hook « épée/âme de forgeron » pour l'orchestrateur.
