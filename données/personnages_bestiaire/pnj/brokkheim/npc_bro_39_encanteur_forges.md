# 🔨 Encanteur des Forges — `NPC_BRO_39`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_39` |
| **Nom affiché** | Encanteur des Forges |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (enchères d'armes et artefacts) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 17 / 900 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Organise les enchères des plus belles pièces forgées à Brokkheim. Armes de maître, armures de héros, artefacts antiques. Ses enchères attirent des acheteurs de tout le continent. Mais récemment, un lot d'enchères s'est vendu tout seul — les pièces numéros 7, 14 et 23 se sont auto-encantées. Il n'a rien dit, la pièce 23 a monté son propre prix. Angle : la pièce qui s'auto-encante est un artefact du Cardinal qui choisit son propriétaire.
- **Traits** : élégant, rhéteur, un peu snob, fasciné par les enchères plus que par les objets.
- **Voix** : théâtrale, rapide, rythmée (« 500 ! 500 une fois ! 500 deux fois ! — Un acheteur en salle propose 550 ! »).
- **Relations** : `NPC_BRO_38` (annonce ses enchères) ; `NPC_BRO_31` (met ses plus belles lames aux enchères) ; `NPC_BRO_40` (les finitions de prestige partent aux enchères) ; `NPC_BRO_43` (enchantements sur pièces d'enchères).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_39_01` | K0 | encheres, catalogue | Enchères à venir : dates, lots, prix de départ | — |
| 2 | `QI_BRO_39_02` | K0 | encanteur, metier | Les enchères de Brokkheim, histoire, prestige | — |
| 3 | `QI_BRO_39_03` | K0 | achat, enchere | Comment participer aux enchères, cautions, lots | — |
| 4 | `QI_BRO_39_04` | K1 | piece, auto-enchère | Lot 23 s'est auto-encanté — la pièce a monté son prix seule | — |
| 5 | `QI_BRO_39_05` | K1 | lots, 7-14-23 | Les lots 7, 14 et 23 portent le sceau du Cardinal — sceau invisible | `AFF>=60` |
| 6 | `QI_BRO_39_06` | K1 | artefact, vivant | L'artefact du lot 23 bougeait tout seul sur son socle pendant l'enchère | `AFF>=65` |
| 7 | `QI_BRO_39_07` | K2 | acheteur, masque | L'acheteur du lot 23 portait un masque — personne n'a vu son visage | `AFF>=80` |
| 8 | `QI_BRO_39_08` | K2 | cardinal, artefact | L'artefact est un fragment de la première forge du Cardinal — il a une « volonté » propre | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_39_09` | K3 | artefact, choix proprietaire | Les artefacts du Cardinal ne se vendent pas — ils choisissent leur propriétaire. L'auto-encanteur n'est pas une anomalie. C'est le système normal. Chaque enchère est un test — l'artefact décide qui l'emporte en montant ou baissant son prix. L'encanteur est un spectateur, pas un vendeur | JAMAIS — déflection : *(il range son marteau d'enchère)* « Des enchères animées, c'est bon pour les affaires. Les gens adorent quand ça s'emballe. Mais c'est moi qui mène la danse. Toujours. » |
| 10 | `QI_BRO_39_10` | KX | *(hors sujet)* | « Le marteau d'enchère ne forge pas le métal. Il forge le prix. » | — |

## 4. Chaînage économique & quêtes

- **Marchand d'enchères** : `!auction` (participer aux enchères).
- Fil **Le Pouls** + **Trempe Légendaire** (artefacts qui choisissent leur propriétaire).
- Quête `QST_BRO_TREMPE_04` : découvrir qui achète les artefacts et pourquoi.

## 5. Intégration Bot

- **Accueil** (`!parler encanteur`) : *« Mesdames et messieurs, bienvenue aux enchères ! Que les bourses s'ouvrent ! »*
- `!auction` — lister et participer aux enchères actives.
- `NPC_SECRET_PROBED` slot 9 : hook « artefacts/choix du Cardinal » pour l'orchestrateur.
