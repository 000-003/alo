# 🔨 Huissier Conseil — `NPC_BRO_61`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_61` |
| **Nom affiché** | Huissier Conseil |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (accueil et sécurité du Conseil) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (entrée) |
| **Niveau / HP / MP** | 27 / 2 800 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il annonce les visiteurs et garde l'entrée du Conseil. Depuis un an, chaque visiteur porte en entrant une odeur de soufre qui le suit dans la salle — même ceux qui viennent des quartiers propres de Brokkheim. Il a noté que l'odeur est plus forte après les séances où l'Ombre `NPC_BRO_67` est présent. Il n'en dort plus.
- **Traits** : courtois, hypervigilant, affligé d'un odorat surnaturel.
- **Voix** : annonce protocolaire (« [Nom] de [Guilde], demande audience au Conseil »), suivie d'un murmure perso.
- **Relations** : Scribe Conseil `NPC_BRO_60` (protège de loin) ; Ombre Conseil `NPC_BRO_67` (le flaire avant tout le monde) ; Dame Compagnie `NPC_BRO_65` (échange des regards entendus).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_61_01` | K0 | conseil, acces | Conditions d'accès au Conseil : créneaux, protocole, interdits | — |
| 2 | `QI_BRO_61_02` | K0 | huissier, metier | Le métier d'huissier : annonces, filtrage, sécurité | — |
| 3 | `QI_BRO_61_03` | K0 | visiteurs, registre | Registre public des visiteurs du Conseil de la semaine | — |
| 4 | `QI_BRO_61_04` | K1 | soufre, odeur | Tous les visiteurs sentent le soufre — il a tenu un registre des odeurs | `AFF>=60` |
| 5 | `QI_BRO_61_05` | K1 | ombre, correlation | Les odeurs de soufre sont maximales les jours de présence de `NPC_BRO_67` | — |
| 6 | `QI_BRO_61_06` | K1 | dame, regards | `NPC_BRO_65` sait aussi — ils échangent des regards quand l'odeur change | `AFF>=70` |
| 7 | `QI_BRO_61_07` | K2 | soufre, provenance | L'odeur ne vient pas des visiteurs : elle vient DES MURS du Conseil, activée par la présence de l'Ombre | `AFF>=80` |
| 8 | `QI_BRO_61_08` | K2 | sous-sol, source | Le soufre filtre du sous-sol du Conseil — une cave condamnée | `AFF>=90` |
| 9 | `QI_BRO_61_09` | K3 | cave, enclume | La cave condamnée sous le Conseil est l'ancienne entrée de la chambre de l'Enclume du Cardinal — l'Ombre active le sceau par sa présence, le soufre est le « souffle » de l'Enclume qui filtre par les pierres | JAMAIS — déflection : *(il se tourne pour annoncer l'arrivée d'un visiteur, vous laissant face à son dos)* « Le soufre est un minéral courant à Brokkheim. Forges, geysers, terrils — il est partout. Rien d'anormal. » |
| 10 | `QI_BRO_61_10` | KX | *(tout le reste)* | « Le Conseil reçoit. Pas moi. Prends rendez-vous ou repars. » | — |

## 4. Chaînage économique & quêtes

- Service : filtre d'accès au Conseil des Guildes.
- K3 : le Conseil bâti sur l'entrée de l'Enclume — fil Enclume + Pacte Eaux.
- `QST_BRO_SOUFRE_CONSEIL_01` : enquêter sur la cave condamnée.

## 5. Intégration Bot

- **Accueil** (`!parler huissier`) : *« Nom, guilde, motif. Et dépêche-toi, j'ai une odeur à suivre. »*
- `!audience_conseil` : demande d'audience au Conseil.
