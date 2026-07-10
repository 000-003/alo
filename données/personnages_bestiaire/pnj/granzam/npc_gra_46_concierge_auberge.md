# ⛏️ Concierge Auberge — `NPC_GRA_46`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_46` |
| **Nom affiché** | Concierge Auberge |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 10 / 600 / 140 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Concierge de l'Auberge du Socle — il monte les bagages, nettoie les chambres, garde les clés des coffres individuels. Depuis qu'il garde la clé du coffre de la chambre 4, il entend des gémissements la nuit. Pas humains. Le bois du coffre qui travaille, dit l'Aubergiste (`NPC_GRA_44`). Mais le Concierge a posé sa main sur le coffre : il était chaud. Et il a senti un battement à travers le bois. Il ne dort plus. Lié au fil **🔒 Le Coffre Qui Respire** : le coffre de la chambre 4 communique avec la salle des coffres de la Banque via la veine de fer.
- **Traits** : serviable, peureux, fatigué, consciencieux.
- **Voix** : Timide, fatiguée. « Le coffre de la 4, il gémit la nuit. Comme s'il y avait quelque chose dedans. Mais il est vide. Je l'ai ouvert. »
- **Relations** : `NPC_GRA_44` (Aubergiste — employeur) ; `NPC_GRA_30` (Banquier — lui a demandé de « surveiller » le coffre) ; `NPC_GRA_48` (Receleur — lui a proposé de l'acheter).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_46_01` | K0 | concierge, service | Services — bagages, ménage, clés | — |
| 2 | `QI_GRA_46_02` | K0 | coffre, acces | Accès aux coffres individuels des chambres | — |
| 3 | `QI_GRA_46_03` | K0 | auberge, entretien | Entretien de l'auberge — horaires, étages | — |
| 4 | `QI_GRA_46_04` | K1 | coffre_4, gemissement | Le coffre de la chambre 4 gémit la nuit | `AFF>=60` |
| 5 | `QI_GRA_46_05` | K1 | chaleur, bois | Le coffre est chaud au toucher — anormal pour du bois | `AFF>=65` |
| 6 | `QI_GRA_46_06` | K1 | banquier, surveillance | Le Banquier (`NPC_GRA_30`) lui a demandé de surveiller le coffre | — |
| 7 | `QI_GRA_46_07` | K2 | battement, dedans | Il sent un battement à travers le bois — comme un cœur | `AFF>=85` |
| 8 | `QI_GRA_46_08` | K2 | coffre, vide | Il a ouvert le coffre : vide. Mais le battement continue | `QUEST:QST_GRA_COFFRE_GEINT` |
| 9 | `QI_GRA_46_09` | K3 | coffre, conduit_noyau | Le coffre de la chambre 4 est un « réceptacle de résonance » du Noyau de Pierre `NPC_GRA_75` — il capte les pulsations du serveur via la veine de fer et les amplifie, et les gémissements sont des interférences de données qui traversent le bois | JAMAIS — déflection : *(il recule d'un pas)* « J'ai touché le coffre. Il est vivant. Je ne veux plus m'en approcher. Toi non plus. » |
| 10 | `QI_GRA_46_10` | KX | *(tout le reste)* | *(il balaye le couloir sans conviction)* « L'auberge est calme aujourd'hui. Sauf la 4. Toujours la 4. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!coffre <chambre>` (accès au coffre).
- Porteur du fil **🔒 Le Coffre Qui Respire** (coffre qui gémit).
- Donneur de `QST_GRA_COFFRE_GEINT` : enquête sur le coffre de la chambre 4.

## 5. Intégration Bot

- **Accueil** (`!parler concierge`) : *Un balai à la main, il regarde le sol.* « L'auberge est propre. Tout est en ordre. Sauf le coffre de la 4. Lui, il fait ce qu'il veut. »
- `!coffre <chambre>` actif à la Grande Halle (Auberge du Socle).
- `NPC_SECRET_PROBED` slot 9 : hook « coffre réceptacle de résonance » pour l'orchestrateur.
