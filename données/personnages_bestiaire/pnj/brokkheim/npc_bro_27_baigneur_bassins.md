# 🔨 Baigneur des Bassins — `NPC_BRO_27`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_27` |
| **Nom affiché** | Baigneur des Bassins |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (bains thermaux, soins aquatiques) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Bassins Chauds |
| **Niveau / HP / MP** | 16 / 900 / 650 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Tient les bains thermaux alimentés par les geysers du Pouls. Les bassins sont réputés pour guérir les brûlures de forge et les courbatures. Il est lui-même un baigneur permanent — personne ne l'a vu sortir de l'eau depuis des années. Sa peau est devenue lisse et pâle comme celle d'un noyé. Les enfants disent qu'il ne vieillit pas. Angle : le baigneur qui ne vieillit pas boit-il vraiment l'eau des bassins ?
- **Traits** : apathique, flottant, voix étouffée par l'eau, regard vitreux.
- **Voix** : bulles et murmures (« L'eau est chaude. Reste. Le temps ne passe plus. »).
- **Relations** : `NPC_BRO_26` (lui fournit l'eau pure) ; `NPC_BRO_28` (lui achète de l'eau des bassins pour ses potions) ; `NPC_BRO_25` (viennent pêcher près des bassins).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_27_01` | K0 | bains, thermaux | Accès aux bains : 10 Yrds l'heure, soins légers, repos | — |
| 2 | `QI_BRO_27_02` | K0 | bienfaits, sante | Soins : guérison des brûlures, fatigue, stress | — |
| 3 | `QI_BRO_27_03` | K0 | geyser, chaleur | L'eau est chauffée par le Pouls — température constante | — |
| 4 | `QI_BRO_27_04` | K1 | age, baigneur | Il ne se souvient pas de son âge — « longtemps » est sa seule mesure | — |
| 5 | `QI_BRO_27_05` | K1 | peau, lisse | Sa peau ne vieillit pas — les forgerons disent qu'il a passé trop de temps dans l'eau du Pacte | `AFF>=60` |
| 6 | `QI_BRO_27_06` | K1 | bassin, profond | Le bassin central n'a pas de fond — l'eau y est noire et chaude | `AFF>=65` |
| 7 | `QI_BRO_27_07` | K2 | dormir, eau | Il dort dans l'eau, la tête sous la surface — il ne respire pas quand il dort | `AFF>=80` |
| 8 | `QI_BRO_27_08` | K2 | pacte, eau | Il est « signé » par le Pacte des Eaux — l'eau le maintient en vie depuis des décennies | `AFF>=85+QUEST:QST_BRO_EAUX_01` |
| 9 | `QI_BRO_27_09` | K3 | baigneur, mort vivant | Le Baigneur est mort il y a 80 ans. Le Pacte des Eaux a retenu son âme dans son corps. Il n'est plus qu'un réceptacle — les Undines voient à travers ses yeux et parlent par sa bouche. Il est un pont vivant entre Brokkheim et le plan des Eaux | JAMAIS — déflection : *(il ferme les yeux et s'enfonce sous l'eau, les bulles cessent pendant une minute, puis il remontre)* « L'eau est bonne. Reste encore un peu. Tu verras, après un moment, tu ne voudras plus sortir. » |
| 10 | `QI_BRO_27_10` | KX | *(hors sujet)* | « Le monde de l'air est trop sec. Trop rapide. Ici, tout est lent et chaud. » | — |

## 4. Chaînage économique & quêtes

- **Service de bains** : `!rest_bath` (buffs récupération). Tarifs : 10 Yrds/heure.
- Point d'entrée fil **Pacte des Eaux** (bassin central sans fond).
- Quête `QST_BRO_EAUX_02` : enquêter sur le Baigneur — est-il mort-vivant ?

## 5. Intégration Bot

- **Accueil** (`!parler baigneur`) : *« L'eau t'attend. Entre. Le temps n'existe pas ici. »*
- `!rest_bath` — buff de récupération étendue si dans les Bassins Chauds.
- `NPC_SECRET_PROBED` slot 9 : hook « Baigneur/réceptacle Undine » pour l'orchestrateur.
