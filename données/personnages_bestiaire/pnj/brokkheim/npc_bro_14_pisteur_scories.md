# 🔨 Pisteur Scories — `NPC_BRO_14`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_14` |
| **Nom affiché** | Pisteur Scories |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (Traqueur — HUNT_002) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Champs de Scories |
| **Niveau / HP / MP** | 45 / 7 500 / 3 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Pisteur des Scories traque les bêtes qui rodent dans les Champs de Scories — des créatures nées des résidus de forge, des monstres de métal et de chaleur. Il connaît leurs habitudes, leurs nids, leurs faiblesses. Il propose des contrats de chasse aux aventuriers : éliminer des nuisibles, rapporter des trophées ou explorer des zones inaccessibles.
- **Traits** : silencieux, patient, méthodique ; il lit les traces comme d'autres lisent une carte.
- **Voix** : calme, posée. « Une trace de patte à trois griffes. Chaleur résiduelle : 40 degrés. Pas une bête native des scories. Quelque chose de nouveau. »
- **Relations** : Gardien Scories `NPC_BRO_13` (collègue, ne fait pas confiance à ses pots-de-vin) ; Marchand Scories `NPC_BRO_15` (lui vend des trophées) ; Commandant Gardes `NPC_BRO_09` (déclare les espèces invasives).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_14_01` | K0 | pistage, scories | Il traque les bêtes dans les Champs de Scories — il connaît la zone mieux que personne | — |
| 2 | `QI_BRO_14_02` | K0 | contrats, chasse | Il propose des contrats de chasse — élimination, exploration, collecte | — |
| 3 | `QI_BRO_14_03` | K0 | trophées, rapport | Il paie pour les trophées rares — plus la bête est étrange, plus le prix est haut | — |
| 4 | `QI_BRO_14_04` | K1 | traces, nouvelles | Il a repéré des traces inconnues — des empreintes à cinq griffes, comme une main | `AFF>=60` |
| 5 | `QI_BRO_14_05` | K1 | betes, forgees | Il sait que les bêtes des scories ne sont pas naturelles — elles viennent de la Forge-Mère | `AFF>=65` |
| 6 | `QI_BRO_14_06` | K1 | gardien, corruption | Il sait que le Gardien `NPC_BRO_13` est corrompu — mais il ferme les yeux | — |
| 7 | `QI_BRO_14_07` | K2 | main, automate | Les traces à cinq griffes sont des empreintes d'automates — des modèles échappés de l'Atelier Cliquetant | `AFF>=85` |
| 8 | `QI_BRO_14_08` | K2 | nid, central | Il a localisé un nid au centre des scories — les bêtes y ramènent du métal brut comme pour construire quelque chose | `QUEST:QST_BRO_BETES_01` |
| 9 | `QI_BRO_14_09` | K3 | betes, conscience | Les bêtes des scories ne sont pas juste des monstres — elles assemblent du métal en formes géométriques, comme des algorithmes qui construisent une structure dans l'espace physique. Le nid central est un processeur en formation | JAMAIS — déflection : *(il te montre un morceau de métal griffé)* « Regarde. C'est pas une griffure. C'est une lettre. Un symbole. Les bêtes écrivent. » *(il te regarde droit dans les yeux)* « J'ai peur de savoir ce qu'elles écrivent. » |
| 10 | `QI_BRO_14_10` | KX | *(hors sujet)* | *(il suit des traces par terre, absorbé)* | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `!hunt_contract_bro` (contrat de chasse), `!trophy_sale` (vente de trophées).
- Connecté au fil **⚙️ Les Automates** via les traces d'automates.
- Donneur de `QST_BRO_BETES_01` (quête sur les bêtes des scories).

## 5. Intégration Bot

- **Accueil** (`!parler pisteur scories`) : *(accroupi, il examine le sol. Sans se lever, il dit :)* « Tu marches lourdement. Les bêtes t'entendent arriver de loin. Si tu veux chasser, commence par apprendre à marcher. » |
- `!hunt_contract_bro` (contrat), `!trophy_sale` (trophées).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « bêtes algorithmiques forment un processeur » réservé à l'orchestrateur.
