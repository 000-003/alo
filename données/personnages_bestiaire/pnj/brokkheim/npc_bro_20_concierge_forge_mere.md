# 🔨 Concierge Forge-Mère — `NPC_BRO_20`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_20` |
| **Nom affiché** | Concierge Forge-Mère |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Entretien de la Forge-Mère) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 25 / 3 800 / 2 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Concierge est chargé de l'entretien de la Forge-Mère — il balaie les limailles, huile les charnières, change les courroies, vide les cendres. Il connaît chaque recoin de la Forge parce qu'il les nettoie tous. Il a accès à toutes les salles, même celles que les forgerons croient secrètes. Il voit tout, il ne dit rien — sauf si on lui pose les bonnes questions. Brokk IX `NPC_BRO_01` le tolère parce qu'il est le seul à ne pas poser de questions sur ce qu'il voit.
- **Traits** : discret, efficace, semble toujours là sans qu'on le remarque ; siffle des airs d'enclume.
- **Voix** : fatiguée, neutre. « La Forge-Mère a besoin de moi. J'ai vu des choses, ouais. Mais je suis pas là pour les raconter. Je suis là pour balayer. »
- **Relations** : Brokk IX `NPC_BRO_01` (supérieur — le tolère) ; Apprenti Forgeron `NPC_BRO_21` (lui montre les coins à nettoyer) ; Gardien Atelier `NPC_BRO_16` (échange des rumeurs sur les bruits souterrains) ; Cartographe Atelier `NPC_BRO_17` (se plaint de ses cartes qui traînent).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_20_01` | K0 | entretien, forge | Il nettoie la Forge-Mère — limailles, cendres, huile, courroies | — |
| 2 | `QI_BRO_20_02` | K0 | acces, salles | Il a accès à toutes les salles — y compris celles fermées aux forgerons | — |
| 3 | `QI_BRO_20_03` | K0 | clefs, trousseau | Il porte un trousseau de 47 clés — il connaît chaque serrure | — |
| 4 | `QI_BRO_20_04` | K1 | souterrain, -7 | Il nettoie le couloir qui mène au −7 — il n'est jamais descendu plus bas | `AFF>=60` |
| 5 | `QI_BRO_20_05` | K1 | brokk, confiance | Brokk IX `NPC_BRO_01` lui fait confiance parce qu'il ne pose pas de questions | `AFF>=65` |
| 6 | `QI_BRO_20_06` | K1 | pouls, sol | Le sol du niveau 0 vibre en rythme avec le Pouls — il le sent dans ses semelles | — |
| 7 | `QI_BRO_20_07` | K2 | cle, interdite | Une des 47 clés ouvre une porte au −7 — mais la clé ne correspond à aucune serrure qu'il connaît | `AFF>=85` |
| 8 | `QI_BRO_20_08` | K2 | cendres, etranges | Il vide des cendres qui ne refroidissent jamais — elles viennent d'une forge qu'il n'a jamais vue | `QUEST:QST_BRO_POULS_01` |
| 9 | `QI_BRO_20_09` | K3 | -7, cles, portes | La clé « interdite » ouvre une porte qui n'existe que quand le Pouls bat à 66 BPM — une porte vers le niveau −8, une chambre de données brutes du serveur, cachée sous la chambre du Pouls | JAMAIS — déflection : *(il s'arrête de balayer. Il te regarde.)* « J'ai une clé qui ouvre rien. Elle ouvre rien, mais je la garde. Parce qu'un jour, elle ouvrira quelque chose. Et ce jour-là, faudra quelqu'un pour descendre. Mais ce sera pas moi. » *(il reprend son balai.)* |
| 10 | `QI_BRO_20_10` | KX | *(hors sujet)* | *(il siffle un air qui suit le rythme du Pouls)* | — |

## 4. Chaînage économique & quêtes

- **Service** : `!forge_cleaning` (info entretien), `!keys_info` (infos clés).
- Connecté au fil **🔨 Le Pouls** via l'accès au −7.

## 5. Intégration Bot

- **Accueil** (`!parler concierge forge mere`) : *(il balaye sans te regarder)* « Attention à la limaille. Elle colle aux semelles. Et si tu vas dans l'aile sud, évite le couloir 3 — le sol est pas encore sec. » |
- `!forge_cleaning` (entretien), `!keys_info` (clés).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « niveau −8, chambre de données brutes » réservé à l'orchestrateur.
