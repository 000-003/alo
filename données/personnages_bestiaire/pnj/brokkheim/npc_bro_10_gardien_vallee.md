# 🔨 Gardien Vallée — `NPC_BRO_10`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_10` |
| **Nom affiché** | Gardien Vallée |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (Gardien de la Vallée des Geysers — HUNT_001) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée des Geysers |
| **Niveau / HP / MP** | 55 / 10 000 / 3 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien posté à l'entrée de la Vallée des Geysers, il contrôle l'accès à la zone de chasse. Il connaît chaque geyser, chaque éruption, chaque silence. Il a vu des chasseurs s'aventurer trop loin et ne jamais revenir — la vapeur peut vous engloutir sans laisser de traces. Il est l'un des rares gardes que le Commandant `NPC_BRO_09` n'a jamais vu perdre la mémoire, ce qui l'inquiète plus que ça ne le rassure.
- **Traits** : vigilant, silencieux, observe la vapeur comme d'autres lisent un livre ; parle peu mais ses avertissements sont toujours précis.
- **Voix** : rocailleuse, couverte par le sifflement des geysers. « Reste sur le sentier. Les geysers n'ont pas d'humeur, mais ils ont un emploi du temps. »
- **Relations** : Commandant Gardes `NPC_BRO_09` (supérieur hiérarchique) ; Guide Vallée `NPC_BRO_11` (collègue — le guide connaît mieux la vallée) ; Marchand Soufre `NPC_BRO_12` (surveille ses allées et venues).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_10_01` | K0 | geysers, acces | Il contrôle l'accès à la Vallée des Geysers — zone de chasse HUNT_001 | — |
| 2 | `QI_BRO_10_02` | K0 | horaire, eruption | Connaît les horaires des éruptions — chaque geyser a son propre cycle | — |
| 3 | `QI_BRO_10_03` | K0 | chasseurs, disparus | Des chasseurs disparaissent — la vapeur peut tuer ou… autre chose | — |
| 4 | `QI_BRO_10_04` | K1 | memoire, intacte | Il n'a jamais perdu la mémoire — contrairement aux autres gardes | `AFF>=60` |
| 5 | `QI_BRO_10_05` | K1 | vapeur, profondeur | Certains geysers ne crachent pas de l'eau — ils crachent une vapeur qui sent le cuivre brûlé | `AFF>=65` |
| 6 | `QI_BRO_10_06` | K1 | guide, confiance | Le Guide `NPC_BRO_11` connaît des passages que même lui ignore | — |
| 7 | `QI_BRO_10_07` | K2 | geyser, silencieux | Un geyser au fond de la vallée n'est jamais entré en éruption — le Guide dit qu'il « dort » | `AFF>=85` |
| 8 | `QI_BRO_10_08` | K2 | commandant, rapport | Il fait un rapport hebdomadaire au Commandant `NPC_BRO_09` — ses notes sont les seules que le Commandant comprend | `QUEST:QST_BRO_MEMOIRE_01` |
| 9 | `QI_BRO_10_09` | K3 | geyser, portail | Le geyser qui n'entre jamais en éruption est un portail — il s'ouvre quand le Pouls `NPC_BRO_00` bat à 66 BPM. La vallée est une porte déguisée en zone de chasse | JAMAIS — déflection : *(il crache par terre)* « J'ai rien à dire sur le geyser. Il dort. Laisse-le dormir. Ou tu veux réveiller ce qui dort dedans ? » |
| 10 | `QI_BRO_10_10` | KX | *(hors sujet)* | *(il souffle dans la vapeur pour tracer des motifs)* | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!hunt_access_bro_001` (accès zone de chasse).
- Connecté au fil **🔨 Le Pouls** via le geyser silencieux.

## 5. Intégration Bot

- **Accueil** (`!parler gardien vallee`) : *(il te regarde, puis regarde les geysers)* « La vallée est ouverte. La vapeur est clémente aujourd'hui. Elle ne le sera pas demain. » |
- `!hunt_access_bro_001` (accès HUNT_001).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « geyser portail » réservé à l'orchestrateur.
