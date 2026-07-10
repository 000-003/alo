# 🕯️ Veilleur de Jour — `NPC_PEN_78`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_78` |
| **Nom affiché** | Veilleur de Jour |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (ronde de jour des remparts) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Remparts |
| **Niveau / HP / MP** | 35 / 3 800 / 3 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Veilleur de Jour patrouille les remparts quand le soleil est levé. C'est un poste routinier — les ruines sont calmes le jour, les anciens ne marchent pas, la ville vaque à ses illusions. Mais il a remarqué quelque chose d'étrange : parfois, une ombre se projette sur les pierres des remparts, une ombre qui n'a pas de source. Pas de nuage, pas d'oiseau, pas de tour. Juste l'ombre d'une ruine qui n'existe pas. Il ne la signale pas. À qui la signaler ? Les ombres sans ruine sont devenues normales pour lui. Angle : ombre de ruine sans ruine — une ombre qui n'a pas de source.
- **Traits** : observateur, résigné, a depuis longtemps cessé de s'étonner.
- **Voix** : calme, légèrement détachée (« Les ombres ? Y en a partout. Celle-là ? …elle est là tous les jours. Je sais pas d'où elle vient. Je m'y suis fait. »).
- **Relations** : Veilleur Nuit `NPC_PEN_77` (collègue de nuit — ne lui parle pas des ombres, de peur de passer pour fou) ; Garde du Conseil Voilé `NPC_PEN_86` (ancien collègue) ; Cartographe Maude `NPC_PEN_04` (lui a dessiné une carte des ombres — elle ne les voyait pas sur son plan).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_78_01` | K0 | ronde, jour | Patrouille les remparts du lever au coucher | — |
| 2 | `QI_PEN_78_02` | K0 | remparts, jour | Les remparts sont calmes le jour — aucun incident | — |
| 3 | `QI_PEN_78_03` | K0 | routine, observation | Note les allées et venues — rapports quotidiens | — |
| 4 | `QI_PEN_78_04` | K1 | ombre, ruine | Voit une ombre de ruine qui n'a pas de source réelle | — |
| 5 | `QI_PEN_78_05` | K1 | ombre, horaire | L'ombre apparaît toujours à la même heure — midi pile | `AFF>=60` |
| 6 | `QI_PEN_78_06` | K1 | cartographe, carte | Maude `NPC_PEN_04` n'a pas vu l'ombre sur ses cartes | `AFF>=65` |
| 7 | `QI_PEN_78_07` | K2 | ombre, orientation | L'ombre pointe vers la Bibliothèque Enterrée — comme un index | `AFF>=80` |
| 8 | `QI_PEN_78_08` | K2 | ombre, immuable | L'ombre ne bouge pas avec le soleil — elle est fixe, accrochée au vide | `AFF>=85` |
| 9 | `QI_PEN_78_09` | K3 | ombre, projection | L'ombre est la projection d'un bâtiment qui n'a pas été compilé — un fichier de construction que le Cardinal a inclus dans la scène sans le rendre visible. C'est le plan d'une aile manquante de Penwether, une ruine qui devait exister mais dont le mesh n'a jamais été chargé. L'ombre est la preuve que Penwether est une scène incomplète | JAMAIS — déflection : *(il s'assied, dos à la pierre)* « C'est juste une ombre. Je regarde pas. Je vois pas. Je suis là pour surveiller, pas pour comprendre. » *(il ferme les yeux et ne les rouvre pas tant que tu n'es pas parti)* |
| 10 | `QI_PEN_78_10` | KX | *(hors sujet)* | « Le jour cache autant de choses que la nuit. La différence, c'est que le jour, on fait semblant de ne pas voir. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_remparts_jour` — rapport de ronde de jour.
- **Fils rouges** : rouage de **🎭 Les Illusions Qui Mentent** (l'ombre est une illusion involontaire — un artefact de compilation). Relais mineur de **🔮 Fil méta — La Ville Fantôme** (les bâtiments non compilés).
- L'ombre mène à la Bibliothèque Enterrée (quête `QST_PEN_OMBRE_SOURCE_01`).

## 5. Intégration Bot

- **Accueil** (`!parler veilleur jour`) : *« Jour calme. Comme d'habitude. Les ombres sont là, le soleil aussi. Tout va bien. »*
- `!pen_remparts_ombre` — interroger sur l'ombre sans source.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « ombre = bâtiment non compilé du Cardinal » réservé à l'orchestrateur.
