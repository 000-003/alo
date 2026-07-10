# ⛏️ Banquier de Granzam — `NPC_GRA_30`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_30` |
| **Nom affiché** | Banquier de Granzam |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Banque de Granzam |
| **Niveau / HP / MP** | 62 / 12 400 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien en chef des coffres de la Banque de Granzam. Ilpatronne les dépôts, les retraits et la sécurité des réserves. Il ne quitte jamais son poste. Depuis trois mois, il entend un bruit dans la salle des coffres la nuit — un souffle lent et régulier, comme une respiration. Il a fait creuser un mètre plus bas : du granit plein. Mais le souffle continue. Il a caché l'information au Conseil, de peur qu'on le prenne pour un fou. Seul le Receleur (`NPC_GRA_48`) est au courant — c'est lui qui a proposé de « déplacer » les coffres les plus précieux. Lié au fil **🔒 Le Coffre Qui Respire** : la salle entière pulse comme un poumon de pierre.
- **Traits** : stoïque, secret, insomniaque, angoissé.
- **Voix** : Grave, posée, mais qui se fissure quand on évoque le souffle. « L'or ne dort jamais. Mais la salle des coffres, si. Trop. »
- **Relations** : `NPC_GRA_48` (Receleur Gemmes — confident du bruit) ; `NPC_GRA_28` (Huissier — lui a signalé des visiteurs nocturnes) ; `NPC_GRA_27` (Vice-Chancelier — rapports officiels).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_30_01` | K0 | banque, depot | Dépôt et retrait de Yuld, coffres individuels | — |
| 2 | `QI_GRA_30_02` | K0 | securite, procedures | Procédures de sécurité — pas d'armes dans la salle des coffres | — |
| 3 | `QI_GRA_30_03` | K0 | interet, taux | Taux d'intérêt sur les dépôts — 2% par mois | — |
| 4 | `QI_GRA_30_04` | K1 | souffle, coffre | Il entend un souffle dans la salle des coffres la nuit | `AFF>=60` |
| 5 | `QI_GRA_30_05` | K1 | bruit, mur | Le bruit vient du mur nord — il a fait sonder, rien | `AFF>=65` |
| 6 | `QI_GRA_30_06` | K1 | receleur, proposition | Le Receleur (`NPC_GRA_48`) lui a proposé de déplacer les coffres précieux « ailleurs » | — |
| 7 | `QI_GRA_30_07` | K2 | respiration, cadence | Le souffle suit une cadence régulière — 12 cycles par minute, comme un cœur au repos | `AFF>=85` |
| 8 | `QI_GRA_30_08` | K2 | sous_sol, faille | En perçant, il a trouvé une faille qui mène vers le bas — chaleur anormale | `QUEST:QST_GRA_BANQUIER_COFFRE` |
| 9 | `QI_GRA_30_09` | K3 | noyau, pierre_respirante | Le souffle vient du Noyau de Pierre `NPC_GRA_75` — un organe serveur enterré sous la Banque qui « respire » le trafic de données entre les coffres et le Cardinal, et la salle entière est un conduit de refroidissement | JAMAIS — déflection : *(il pose la main sur le mur, ferme les yeux)* « La pierre dort. Laisse-la dormir. Si tu l'éveilles, elle t'écrasera. » |
| 10 | `QI_GRA_30_10` | KX | *(tout le reste)* | *(il croise les bras)* « La Banque ferme à 18h. Reviens demain. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!depot <montant>`, `!retrait <montant>` (banque).
- Porteur du fil **🔒 Le Coffre Qui Respire** (salle qui pulse).
- Donneur de `QST_GRA_BANQUIER_COFFRE` : enquête sur le souffle sous la banque.

## 5. Intégration Bot

- **Accueil** (`!parler banquier`) : *Debout devant l'entrée de la Banque, clés à la ceinture.* « La Banque de Granzam est la plus sûre d'Alfheim. Aucune pierre n'est plus dure que ma volonté. »
- `!depot <montant>`, `!retrait <montant>` actifs à la Banque de Granzam.
- `NPC_SECRET_PROBED` slot 9 : hook « Noyau de Pierre respirant » pour l'orchestrateur.
