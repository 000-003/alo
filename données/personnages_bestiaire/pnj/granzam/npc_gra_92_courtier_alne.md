# ⛏️ Courtier d'Alne — `NPC_GRA_92`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_92` |
| **Nom affiché** | Courtier d'Alne |
| **Race** | Sylphe |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 18 / 900 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Diplomate Sylphe envoyé par la cité d'Alne pour négocier des accords commerciaux avec Granzam. Représentant officiel de Bomil (`NPC_ALN_93`), le maître-espion d'Alne, il est en réalité un agent de renseignement déguisé en courtier. Sa mission : cartographier le réseau de trafic de gemmes entre Granzam et les autres cités, et identifier les intermédiaires Leprechauns. Il a déjà identifié le Marchand Leprechaun (`NPC_GRA_91`) et le Trafiquant (`NPC_GRA_93`), mais il ne sait pas encore que l'Ombre du Conseil (`NPC_GRA_88`) le surveille aussi. **Angle** : Lien avec Bomil `NPC_ALN_93`.
- **Traits** : élégant, calculateur, parle avec des métaphores de vent, regard perçant.
- **Voix** : Douce, aérienne, chaque mot flotte un instant avant de disparaître. « Le vent porte les rumeurs. Moi, je les attrape. Bomil m'a appris à les faire chanter. »
- **Relations** : `NPC_ALN_93` (Bomil — employeur) ; `NPC_GRA_91` (Marchand Leprechaun — cible) ; `NPC_GRA_93` (Trafiquant — cible secondaire) ; `NPC_GRA_88` (Ombre du Conseil — se sait peut-être surveillé).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_92_01` | K0 | alne, diplomatie | La cité d'Alne — culture Sylphe, politique | — |
| 2 | `QI_GRA_92_02` | K0 | commerce, inter_cites | Les accords commerciaux entre Alne et Granzam | — |
| 3 | `QI_GRA_92_03` | K0 | courtier, role | Le métier de courtier diplomatique | — |
| 4 | `QI_GRA_92_04` | K1 | bomil, mission | Bomil `NPC_ALN_93` l'a envoyé pour enquêter sur le trafic de gemmes | `AFF>=60` |
| 5 | `QI_GRA_92_05` | K1 | leprechaun, identifie | Il a identifié le Marchand Leprechaun `NPC_GRA_91` comme un trafiquant | `AFF>=65` |
| 6 | `QI_GRA_92_06` | K1 | trafiquant, reseau | Il suspecte le Trafiquant `NPC_GRA_93` d'être le nœud du réseau | — |
| 7 | `QI_GRA_92_07` | K2 | ombre, surveillance | L'Ombre du Conseil `NPC_GRA_88` le suit — « un espion qui en espionne un autre » | `AFF>=85` |
| 8 | `QI_GRA_92_08` | K2 | gemmes, seed | Il a découvert que les gemmes du trafic sont des répliques de seed — pas des gemmes naturelles | `QUEST:QST_GRA_COURTIER_ALNE` |
| 9 | `QI_GRA_92_09` | K3 | bomil, reseau, seed | Bomil `NPC_ALN_93` cherche à contrôler le réseau de duplication de seed des gemmes pour Alne — il veut faire d'Alne le hub central de l'économie parallèle du jeu, en court-circuitant Granzam comme plaque tournante du minage | JAMAIS — déflection : *(il sourit, lisse sa manche)* « Bomil est un ami. Un partenaire commercial. Je ne suis qu'un messager. Les messagers ne savent rien. » |
| 10 | `QI_GRA_92_10` | KX | *(hors sujet)* | *(il regarde par une fenêtre)* « Le vent d'Alne me manque. Ici, l'air est lourd. Chargé de pierre. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!courrier_alne` (envoi de message diplomatique à Alne).
- Porteur du fil **💎 La Gemme Qui Voit** (réseau de duplication de seed de gemmes).
- Donneur de `QST_GRA_COURTIER_ALNE` : alliance ou rivalité avec le réseau Alne.

## 5. Intégration Bot

- **Accueil** (`!parler courtier_alne`) : *Un Sylphe élancé, vêtu de soie grise, feuillette un parchemin près de la fenêtre du Conseil.* « Ah, un visiteur d'Alne ? Non ? Dommage. Les affaires attendent. »
- `!courrier_alne <message>` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « Bomil cherche le contrôle du réseau de duplication de seed » pour l'orchestrateur.
