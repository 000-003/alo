# 🔨 Forgeron Ambulant — `NPC_BRO_36`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_36` |
| **Nom affiché** | Forgeron Ambulant |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (forge itinérante, réparations rapides) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 25 / 2 000 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Forgeron qui pousse une charrette-forge à travers Brokkheim, réparant armes et outils sur place. Sa forge est montée sur roues, alimentée par un petit geyser portatif. Son secret : le soufflet de sa forge pompe tout seul, même quand il ne le touche pas. Il a appris à vivre avec — le soufflet suit le rythme du Pouls, pas sa main. Angle : le soufflet pompe seul car il est accordé au Pouls central de Brokkheim — une forge qui n'a pas besoin de forgeron.
- **Traits** : vagabond, philosophe, contents de peu, observateur.
- **Voix** : tranquille, un peu essoufflé par la marche (« Ma forge roule, je roule. On s'arrête quand le métal est chaud. »).
- **Relations** : `NPC_BRO_33` (lui vend ses outils) ; `NPC_BRO_35` (teste ses alliages) ; `NPC_BRO_30` (le fait circuler) ; `NPC_BRO_40` (lui envoie des clients pour finitions avancées) ; `NPC_BRO_46` (lui achète des pièces d'automate).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_36_01` | K0 | forge, mobile | Forge itinérante : réparations, retrempe, affûtage | — |
| 2 | `QI_BRO_36_02` | K0 | itinerant, halle | Son circuit : Halle, Quai, Atelier, Canaux | — |
| 3 | `QI_BRO_36_03` | K0 | prix, reparations | Prix : 10-100 Yrds selon réparation | — |
| 4 | `QI_BRO_36_04` | K1 | soufflet, pompe seul | Son soufflet pompe tout seul — il suit le Pouls | — |
| 5 | `QI_BRO_36_05` | K1 | charrette, vibration | Sa charrette vibre au passage sur certaines plaques de la Halle — comme si le sol répondait | `AFF>=60` |
| 6 | `QI_BRO_36_06` | K1 | forge, ambulant | Il n'est jamais au même endroit — le Pouls le déplace | `AFF>=65` |
| 7 | `QI_BRO_36_07` | K2 | itineraire, pouls | Son itinéraire n'est pas aléatoire — il suit les « veines » du Pouls sous Brokkheim | `AFF>=80` |
| 8 | `QI_BRO_36_08` | K2 | carte, souterraine | Il a une carte des courants du Pouls sous la ville — dessinée par les vibrations de sa charrette | `AFF>=85+QUEST:QST_BRO_POULS_01` |
| 9 | `QI_BRO_36_09` | K3 | forgeron, guide pouls | Le Forgeron Ambulant n'est pas un forgeron — il est le Pouls rendu Chair. Le battement central de la forge cardinale a pris forme Leprechaun il y a 300 ans et erre depuis. Sa charrette n'est pas une forge — c'est le cœur du Pouls qui se déplace sous Brokkheim pour maintenir la ville en vie | JAMAIS — déflection : *(il s'arrête, pose la main sur sa charrette)* « Je suis juste un forgeron qui marche. La charrette suit. C'est tout. Si tu veux des légendes, va voir le cardinal. Lui, il aime les histoires. » |
| 10 | `QI_BRO_36_10` | KX | *(hors sujet)* | « Forger, c'est écouter. Le métal parle. La roue chante. Et le Pouls bat pour nous tous. » | — |

## 4. Chaînage économique & quêtes

- **Service de forge mobile** : `!repair_mobile` (réparations rapides sur place).
- Fil **Le Pouls** (forgeron = incarnation du Pouls).
- Quête `QST_BRO_POULS_02` : suivre le forgeron pour cartographier les veines du Pouls.

## 5. Intégration Bot

- **Accueil** (`!parler forgeron_ambulant`) : *« T'as cassé quelque chose ? Pose-le là. Le temps que ma forge se réchauffe. »*
- `!repair_mobile` — service de réparation.
- `NPC_SECRET_PROBED` slot 9 : hook « forgeron/Pouls incarné » pour l'orchestrateur.
