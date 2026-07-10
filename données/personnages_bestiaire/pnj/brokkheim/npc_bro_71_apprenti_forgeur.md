# 🔨 Apprenti Forgeur — `NPC_BRO_71`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_71` |
| **Nom affiché** | Apprenti Forgeur |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (élève du maître de la Forge-Mère) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère (forge centrale) |
| **Niveau / HP / MP** | 17 / 1 300 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Élève du maître de la Forge-Mère, il forge depuis l'aube jusqu'au crépuscule. Son marteau ne lâche pas sa main — littéralement : ses doigts sont crispés sur le manche, même la nuit, même en dormant. Les autres apprentis disent qu'il est devenu un avec l'outil. Lui dit simplement que le marteau « sait où frapper » sans qu'il le décide. Le Pouls de Brokkheim bat dans sa poitrine au même rythme que les coups de son marteau.
- **Traits** : silencieux, obsessionnel, regard qui fixe mille yards.
- **Voix** : rare — il préfère frapper son enclume pour répondre (un coup = oui, deux = non).
- **Relations** : Maître Forgeron Lames `NPC_BRO_70` (son ancien maître — l'a quitté pour la Forge-Mère) ; Souffleur Forge `NPC_BRO_72` (travaille les soufflets à côté de lui) ; Chaudronnier `NPC_BRO_74` (partage la chaleur de la forge).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_71_01` | K0 | forge, apprentissage | La vie à la Forge-Mère : apprentissage, hiérarchie, discipline | — |
| 2 | `QI_BRO_71_02` | K0 | forge-mere, fonctionnement | La Forge-Mère de Brokkheim : capacité, production, histoire | — |
| 3 | `QI_BRO_71_03` | K0 | marteau, outil | Les outils de la Forge-Mère : marteaux, enclumes, soufflets, l'enclume centrale | — |
| 4 | `QI_BRO_71_04` | K1 | marteau, main | Son marteau ne quitte jamais sa main — crispé même dans son sommeil | `AFF>=60` |
| 5 | `QI_BRO_71_05` | K1 | pouls, personnel | Il sent le Pouls de Brokkheim battre en lui — le rythme de la ville, qui est le sien | — |
| 6 | `QI_BRO_71_06` | K1 | marteau, volonte | Le marteau frappe sans qu'il le décide — « il sait où aller » | `AFF>=70` |
| 7 | `QI_BRO_71_07` | K2 | forge-mere, pouls | La Forge-Mère est le cœur du Pouls — chaque coup de marteau synchronise toutes les forges de Brokkheim | `AFF>=80` |
| 8 | `QI_BRO_71_08` | K2 | enclume, centrale | L'enclume centrale de la Forge-Mère est chaude SANS feu — elle chauffe par le sol | `AFF>=90` |
| 9 | `QI_BRO_71_09` | K3 | enclume, cardinal | L'enclume centrale de la Forge-Mère est une extension de l'Enclume du Cardinal. Le « Pouls » est le battement du Cardinal à travers la croûte terrestre du jeu. L'apprenti ne frappe pas sa propre forge — il répète les coups que l'Enclume imprime dans la roche, comme un diapason qui propage une note dans toute la ville-sculpture | JAMAIS — déflection : *(un coup de marteau sur l'enclume = non, il ne répondra pas à cette question)* |
| 10 | `QI_BRO_71_10` | KX | *(tout le reste)* | *(un coup de marteau = va-t'en, je forge)* | — |

## 4. Chaînage économique & quêtes

- SERVICE : initiation à la Forge-Mère pour les nouveaux forgerons.
- K3 : l'Enclume de la Forge-Mère = extension de l'Enclume du Cardinal — fil Pouls + Enclume.
- `QST_BRO_POULS_01` : comprendre la source du Pouls de Brokkheim.

## 5. Intégration Bot

- **Accueil** (`!parler apprenti`) : *(un coup sur l'enclume — il hoche la tête, vous invitant à parler)*
- `!forge_mere_visite` : visite guidée de la Forge-Mère (service aux nouveaux joueurs).
