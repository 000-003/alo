# 🔨 Prospecteur Geysers — `NPC_BRO_56`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_56` |
| **Nom affiché** | Prospecteur Geysers |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (prospection des geysers et filons) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée des Geysers (camp de prospection) |
| **Niveau / HP / MP** | 28 / 3 200 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prospecteur solitaire des geysers de Brokkheim, il cherche depuis des années le « filon d'or liquide » — un geyser dont les rapports anciens disent qu'il crache de l'or natif mêlé à la vapeur. Il a récemment trouvé un geyser qui saigne un liquide doré qui pulse au rythme du Pouls `NPC_BRO_71`. Il n'a prévenu personne, sauf le Marchand Soufre Fin `NPC_BRO_57` à qui il vend des échantillons sous le manteau.
- **Traits** : solitaire, obsessionnel, voix éraillée par les vapeurs.
- **Voix** : parle vite, comme s'il craignait que l'idée lui échappe avant la fin de la phrase.
- **Relations** : Marchand Soufre Fin `NPC_BRO_57` (acheteur de ses échantillons) ; Dompteur Feux Follets `NPC_BRO_58` (se croisent aux Champs Scories) ; Souffleur Verre `NPC_BRO_53` (lui a commandé des fioles spéciales pour le liquide doré).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_56_01` | K0 | geysers, carte | Carte de la Vallée des Geysers : zones actives, zones dangereuses, accès | — |
| 2 | `QI_BRO_56_02` | K0 | prospection, metier | Le métier de prospecteur : équipement, risques, récompenses | — |
| 3 | `QI_BRO_56_03` | K0 | geysers, histoire | Histoire des geysers de Brokkheim : découverte, exploitation, légendes | — |
| 4 | `QI_BRO_56_04` | K1 | geyser, dore | Le geyser qui saigne de l'or : localisation approximative (secteur nord-ouest de la Vallée) | `AFF>=60` |
| 5 | `QI_BRO_56_05` | K1 | liquide, pouls | Le liquide pulse — même rythme que la Forge-Mère `NPC_BRO_71` | `AFF>=70` |
| 6 | `QI_BRO_56_06` | K1 | echantillons, vente | Il vend des échantillons à `NPC_BRO_57` — 500 Yrds la fiole | — |
| 7 | `QI_BRO_56_07` | K2 | poche, souterraine | Sous le geyser, il a détecté une poche vide — comme si quelque chose avait été extrait avant l'arrivée des Leprechauns | `AFF>=80` |
| 8 | `QI_BRO_56_08` | K2 | carte, ancienne | Une carte ancienne (pré-fondation) montre un réseau de cavités sous la Vallée — relie Brokkheim à Granzam | `AFF>=90` |
| 9 | `QI_BRO_56_09` | K3 | geyser, enclume | Le « sang d'or » du geyser est la forme liquide de l'Enclume du Cardinal — le mithril fondu par le Pouls, remonté par la pression des geysers, filtré par la roche, devenu or. L'« or » est une excrétion de l'Enclume | JAMAIS — déflection : *(il plonge une fiole dans le geyser sans vous quitter des yeux)* « La terre produit ce qu'elle produit. L'or est de l'or, l'eau est de l'eau. Je prospecte, je ne philosophe pas. » |
| 10 | `QI_BRO_56_10` | KX | *(tout le reste)* | « La Vallée réclame du silence. Et des bottes étanches. » | — |

## 4. Chaînage économique & quêtes

- QUEST_GIVER — quête principale fil Pacte Eaux.
- `QST_BRO_GEYSER_01` : explorer le geyser d'or et la poche souterraine.
- K3 : l'or des geysers = l'Enclume qui saigne — indice central du fil Enclume du Cardinal.

## 5. Intégration Bot

- **Accueil** (`!parler prospecteur`) : *« La vapeur brûle les poumons. Et parfois, elle montre des choses. »*
- `!prospection_quetes` : liste des quêtes de prospection disponibles.
