# ⛏️ Stratège du Bastion — `NPC_GRA_54`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_54` |
| **Nom affiché** | Stratège du Bastion |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Bastion de l'Ouest |
| **Niveau / HP / MP** | 58 / 7 200 / 9 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Officier tacticien du Bastion de l'Ouest, il conçoit les plans de défense de Granzam. Depuis trois mois, il travaille sur un plan que personne d'autre ne voit : un réseau de fortifications souterraines qui transforme chaque niveau de la ville en piège. Le Commandant (`NPC_GRA_09`) l'a approuvé sans poser de questions. Mais le Stratège a remarqué que le Bastion lui-même pulse parfois — un battement régulier dans ses murs de granit. Il cache cette observation, car il craint que le Bastion ne soit plus une forteresse, mais une cage. (Angle : ennemi qu'il voit seul.)
- **Traits** : méthodique, paranoïaque, solitaire, brillant.
- **Voix** : Voix basse et pressée, comme s'il chuchotait un ordre de bataille. « Les murs écoutent. Je conçois mes plans dans ma tête, je ne les écris pas. »
- **Relations** : `NPC_GRA_09` (Commandant — supérieur), `NPC_GRA_52` (Maître Explosifs — fournit les charges), `NPC_GRA_13` (Gardien Carrières — surveille les entrées), `NPC_GRA_86` (Garde Conseil — liaison défense).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_54_01` | K0 | bastion, défense | Le Bastion de l'Ouest est la première ligne de défense de Granzam. | — |
| 2 | `QI_GRA_54_02` | K0 | fortification, plan | Le Stratège conçoit des plans de fortification pour toute la ville. | — |
| 3 | `QI_GRA_54_03` | K0 | commandant, approbation | Le Commandant (`NPC_GRA_09`) approuve ses plans sans les lire en détail. | — |
| 4 | `QI_GRA_54_04` | K1 | vibration, mur | Les murs du Bastion émettent une vibration régulière la nuit. | `AFF>=60` |
| 5 | `QI_GRA_54_05` | K1 | piège, souterrain | Il conçoit un réseau de pièges sous la ville qui pourraient tous s'activer d'un seul coup. | `AFF>=65` |
| 6 | `QI_GRA_54_06` | K1 | ennemi, intérieur | « L'ennemi n'est pas dehors. L'ennemi est dans les murs. » Il refuse de préciser. | — |
| 7 | `QI_GRA_54_07` | K2 | vibration, fréquence | La vibration du Bastion est à 0,3 Hz — identique au filon chantant de Durgan (`NPC_GRA_01`). | `AFF>=85` |
| 8 | `QI_GRA_54_08` | K2 | mur, cartographie | Il a cartographié un réseau de cavités dans les murs qui ne figurent sur aucun plan original. | `QUEST:QST_GRA_BASTION_VIBRE` |
| 9 | `QI_GRA_54_09` | K3 | bastion, noyau_defense | Le Bastion est un noyau de défense du serveur — un sous-système du Cardinal qui protège le seed matériel contre les intrusions extérieures. | JAMAIS — déflection : *(pose un doigt sur ses lèvres)* « Certains murs ne doivent pas être scrutés. Ni même nommés. » |
| 10 | `QI_GRA_54_10` | KX | *(tout le reste)* | *(déplie une carte vierge et la contemple)* « Le meilleur plan est celui qui n'existe que dans la tête. » | — |

## 4. Chaînage économique & quêtes

- Service : `!conseil_defense` (conseils tactiques).
- Porteur du fil **🏔️ Poids de la Montagne** (Bastion = noyau de défense du serveur).
- Donneur de `QST_GRA_BASTION_VIBRE` : enquêter sur les vibrations du Bastion.

## 5. Intégration Bot

- **Accueil** (`!parler stratege`) : *Penché sur une carte, il ne lève pas les yeux.* « Approche. Mais ne touche à rien. Chaque trait ici est une vie sauvée. »
- `!conseil_defense <zone>` (donne des conseils tactiques).
- `NPC_SECRET_PROBED` slot 9 : hook « Bastion = noyau de défense serveur » pour l'orchestrateur.