# 🕯️ Gardien de la Nécropole — `NPC_PEN_16`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_16` |
| **Nom affiché** | Gardien de la Nécropole |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (DUN_001 — garde l'entrée de la Nécropole Antique) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Nécropole Antique |
| **Niveau / HP / MP** | 68 / 19 000 / 8 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien de la Nécropole monte la garde à l'entrée de DUN_001, veillant à ce que personne n'entre sans autorisation — et à ce que rien ne sorte sans identification. La Nécropole Antique est le plus ancien cimetière de Penwether, antérieur à la ville elle-même. Le Gardien a vu des chasseurs entrer et ne jamais revenir, des « morts non compilés » tenter de franchir la porte, et des silences qui durent trop longtemps. Il est le contact de Grim `NPC_PEN_05` sur le terrain — quand une nouvelle anomalie apparaît dans les strates funéraires, c'est lui qui donne l'alerte. Il ne dort presque plus.
- **Traits** : vigilant, taciturne, a perdu le compte des nuits.
- **Voix** : rauque à force de parler aux pierres tombales (« Les morts non compilés cognent à la porte la nuit. Toc toc toc. Je ne réponds pas. Ils finissent par se lasser. Ou pas. »).
- **Relations** : Fossoyeur Grim `NPC_PEN_05` (son contact principal — l'alerte en cas d'anomalie) ; Cartographe Nécropole `NPC_PEN_17` (lui signale les changements de structure du donjon) ; Vétéran `NPC_PEN_55` (ancien gardien, aujourd'hui retiré — le conseille encore).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_16_01` | K0 | necropole, entree | Accès à la Nécropole Antique — procédures, dangers | — |
| 2 | `QI_PEN_16_02` | K0 | non compiles, identification | Procédure d'identification des morts non compilés | — |
| 3 | `QI_PEN_16_03` | K0 | garde, ronde | Organisation des rondes dans la Nécropole | — |
| 4 | `QI_PEN_16_04` | K1 | frappe, nocturne | Les non-compilés frappent à la porte la nuit — il a noté les cycles | `AFF>=65` |
| 5 | `QI_PEN_16_05` | K1 | strates, funeraires | La Nécropole descend sur 6 strates — les plus profondes sont scellées | `AFF>=70` |
| 6 | `QI_PEN_16_06` | K1 | grim, contact | Il travaille avec Grim `NPC_PEN_05` pour « mettre au repos » les anomalies | — |
| 7 | `QI_PEN_16_07` | K2 | porte, strate 6 | La strate 6 de la Nécropole est scellée par un sceau système — il ne sait pas ce qu'il y a en dessous | `AFF>=85` |
| 8 | `QI_PEN_16_08` | K2 | double, gardien | Il a vu son propre double parmi les morts non compilés — une version de lui qui n'a pas survécu à un reset | `AFF>=88` |
| 9 | `QI_PEN_16_09` | K3 | strate 6, contenu | La strate 6 contient le « registre des morts véritables » — les entités que le Cardinal a définitivement supprimées | JAMAIS — déflection : *(il pose la main sur le sceau)* « La strate 6 n'existe pas. Il n'y a rien sous nos pieds. Le sceau est là pour protéger les vivants, pas pour sceller les morts. Si je te disais ce qu'il y a vraiment en dessous… je devrais t'y jeter pour que tu le croies. » |
| 10 | `QI_PEN_16_10` | KX | *(hors-sujet)* | « La Nécropole ne dort jamais. Pas à cause des morts. À cause de ceux qui ne sont pas encore nés. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : contrôle l'accès à la Nécropole Antique. Délivre les autorisations d'entrée.
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (garde l'entrée des morts non compilés). Relais de **📜 Ce Que Cachent les Ruines** (les strates funéraires scellées).
- Donneur de `QST_PEN_NECRO_ACCES_01` (obtenir l'accès à une strate verrouillée).

## 5. Intégration Bot

- **Accueil** (`!parler gardien_necropole`) : *« La Nécropole t'attend. Elle attend tout le monde, d'ailleurs. La seule question, c'est si tu en sortiras — et si tu en sortiras comme tu es entré. »*
- `!acces_necropole` (demande d'accès) ; `!alerte_gardien` (signalement d'anomalie).
