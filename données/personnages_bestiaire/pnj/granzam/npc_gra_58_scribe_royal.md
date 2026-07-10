# ⛏️ Scribe Royal — `NPC_GRA_58`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_58` |
| **Nom affiché** | Scribe Royal |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 32 / 1 800 / 5 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Scribe officiel du Conseil, il enregistre chaque édit et chaque décret du Lord Gnome. Il y a trois jours, un édit est arrivé via le trône sismique — il l'a transcrit sur parchemin. Mais l'édit portait une signature qui ne correspondait à rien : des runes qui n'existaient pas dans le lexique sismique gnome. Il a vérifié les archives : la même signature apparaît sur tous les édits depuis six mois. Il n'a pas osé le signaler à la Dame de Compagnie (`NPC_GRA_57`), mais il a fait une copie qu'il garde dans sa manche. (Angle : édit non signé.)
- **Traits** : méticuleux, anxieux, loyaliste, méthodique.
- **Voix** : Voie nette et précise, comme un parchemin qui se déroule. « Un édit sans signature est une fenêtre ouverte. Et Granzam a trop de fenêtres. »
- **Relations** : `NPC_GRA_57` (Dame — collègue), `NPC_GRA_08` (Chancelier — supérieur), `NPC_GRA_59` (Héraut — lui transmet les édits), `NPC_GRA_23` (Scribe Conseil — mentor), `NPC_GRA_87` (Intendant — archiviste).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_58_01` | K0 | scribe, conseil | Il transcrit les édits du Lord Gnome. | — |
| 2 | `QI_GRA_58_02` | K0 | edit, parchemin | Chaque édit est gravé sur parchemin de pierre. | — |
| 3 | `QI_GRA_58_03` | K0 | rune, sismique | Le lexique sismique compte 88 runes connues. | — |
| 4 | `QI_GRA_58_04` | K1 | signature, inconnue | Il a trouvé une rune de signature qui n'existe pas dans le lexique. | `AFF>=60` |
| 5 | `QI_GRA_58_05` | K1 | edit, six_mois | La même signature apparaît sur tous les édits depuis six mois. | `AFF>=65` |
| 6 | `QI_GRA_58_06` | K1 | dame, silence | Il n'en a pas parlé à la Dame (`NPC_GRA_57`). « Elle a assez de soucis avec le Lord. » | — |
| 7 | `QI_GRA_58_07` | K2 | copie, cachee | Il a gardé une copie de l'édit avec la signature inconnue. Il la cache dans les archives. | `AFF>=85` |
| 8 | `QI_GRA_58_08` | K2 | rune, noyau | Il a comparé la rune aux gravures du sous-sol du Conseil : c'est la même. | `QUEST:QST_GRA_SIGNATURE_EDIT` |
| 9 | `QI_GRA_58_09` | K3 | edit, cardinal_noyau | L'édit vient du Cardinal via le Noyau de Pierre — la signature inconnue est la signature système du Cardinal lui-même. | JAMAIS — déflection : *(il range ses plumes)* « Mes transcriptions sont dans les archives. Je ne commente pas leur contenu. » |
| 10 | `QI_GRA_58_10` | KX | *(tout le reste)* | *(il trempe sa plume)* « Un mot mal écrit peut tout changer. Je ne laisse rien au hasard. » | — |

## 4. Chaînage économique & quêtes

- Service : `!transcrire <message>` (rédiger un parchemin officiel).
- Porteur du fil **🔮 Noyau de Pierre** (édits = messages du Cardinal).
- Donneur de `QST_GRA_SIGNATURE_EDIT` : enquêter sur la signature inconnue.

## 5. Intégration Bot

- **Accueil** (`!parler scribe`) : *Une plume à la main, il vous toise par-dessus ses lunettes.* « Un message à faire transcrire ? Prends garde — chaque mot reste gravé pour l'éternité. »
- `!transcrire <message>` (service payant, 50 Yuld).
- `NPC_SECRET_PROBED` slot 9 : hook « édits = messages du Cardinal via le Noyau » pour l'orchestrateur.