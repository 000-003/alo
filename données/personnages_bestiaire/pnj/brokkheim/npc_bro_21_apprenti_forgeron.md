# 🔨 Apprenti Forgeron — `NPC_BRO_21`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_21` |
| **Nom affiché** | Apprenti Forgeron |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Élève forgeron) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 15 / 2 500 / 1 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le plus jeune des apprentis de la Forge-Mère — il manie le marteau depuis trois ans et rate encore une pièce sur deux. Il est plein de bonne volonté et de bleus aux doigts. Il admire Nilsa `NPC_BRO_06` en secret et vole des techniques en la regardant travailler. Le Marchand de Scories `NPC_BRO_15` lui fournit du métal d'entraînement à prix réduit.
- **Traits** : enthousiaste, maladroit, rêve de devenir un jour aussi fort que Brokk IX `NPC_BRO_01` ; ses mains sont couvertes de cicatrices d'éclats de métal.
- **Voix** : jeune, pressée. « Regarde ! J'ai réussi à faire une lame ! Bon, elle est un peu de travers, et elle chauffe bizarrement, mais c'est une lame ! »
- **Relations** : Nilsa `NPC_BRO_06` (idole secrète) ; Brokk IX `NPC_BRO_01` (le maître qu'il n'ose pas approcher) ; Marchand Scories `NPC_BRO_15` (fournisseur de métaux d'entraînement) ; Concierge Forge-Mère `NPC_BRO_20` (nettoie ses dégâts).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_21_01` | K0 | apprenti, forge | Il apprend la forge à la Forge-Mère — il rate encore une pièce sur deux | — |
| 2 | `QI_BRO_21_02` | K0 | materiaux, entrainement | Il achète du métal d'entraînement au Marchand de Scories `NPC_BRO_15` | — |
| 3 | `QI_BRO_21_03` | K0 | nilsa, admiration | Il admire Nilsa `NPC_BRO_06` en secret — il vole des techniques en la regardant | — |
| 4 | `QI_BRO_21_04` | K1 | lame, bizarre | Une de ses lames ratées a commencé à vibrer toute seule — comme un diapason | `AFF>=60` |
| 5 | `QI_BRO_21_05` | K1 | brokk, peur | Il n'ose pas parler à Brokk IX `NPC_BRO_01` — « Il fait peur. Pas méchant, mais peur. » | `AFF>=65` |
| 6 | `QI_BRO_21_06` | K1 | reves, grand | Il rêve de devenir un grand forgeron — il garde un carnet de croquis de ses projets | — |
| 7 | `QI_BRO_21_07` | K2 | lame, diapason | La lame vibrante émet une fréquence qui correspond au Pouls `NPC_BRO_00` — elle s'arrête quand on la met au contact du sol | `AFF>=85` |
| 8 | `QI_BRO_21_08` | K2 | croquis, vol | Il a dessiné un croquis d'une enclume qui n'existe pas — un modèle qu'il a vu dans ses rêves | `QUEST:QST_BRO_ATELIER_01` |
| 9 | `QI_BRO_21_09` | K3 | enclume, reve, code | L'enclume de ses rêves est l'enclume originelle — celle du niveau −8, la première enclume du serveur. Il ne l'a jamais vue, mais le Pouls la lui montre en dormant. Il est connecté au noyau sans le savoir | JAMAIS — déflection : *(il regarde ses mains)* « Je fais des rêves bizarres. Des enclumes. Des enclumes partout. Et un battement. Je me réveille avec le rythme dans les doigts. C'est juste le bruit des forges, hein ? C'est ça ? » *(il attend une réponse que tu ne peux pas lui donner.)* |
| 10 | `QI_BRO_21_10` | KX | *(hors sujet)* | *(il se brûle le doigt sur une pièce mal refroidie)* « AÏE ! … Ça compte comme un entraînement réussi. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!training_forge` (conseils débutants), `!apprentice_notes` (carnets).
- Connecté au fil **🔨 Le Pouls** via les rêves d'enclume.

## 5. Intégration Bot

- **Accueil** (`!parler apprenti forgeron`) : *(il lève la tête, le visage barbouillé de suie)* « Salut ! Tu veux voir ce que j'ai forgé aujourd'hui ? … Bon, c'est un peu de travers, mais c'est de l'art ! » |
- `!training_forge` (conseils), `!apprentice_notes` (carnets).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « enclume originelle du serveur dans les rêves » réservé à l'orchestrateur.
