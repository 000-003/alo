# 🕯️ Fossoyeur Grim — `NPC_PEN_05`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_05` |
| **Nom affiché** | Fossoyeur Grim |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (quêtes de la Nécropole Antique — les morts non compilés) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Cimetière Vertical |
| **Niveau / HP / MP** | 55 / 9 200 / 12 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Grim est le gardien du Cimetière Vertical — un champ de stèles fichées dans la paroi d'une faille, où les Spriggans enterrent leurs morts depuis la fondation de Penwether. Mais Grim sait quelque chose que les autres ignorent : certains morts de la Nécropole Antique ne sont pas de « vrais » morts. Ce sont des entités dont l'initialisation a échoué lors de la compilation du monde — des « morts non compilés ». Le Cardinal ne les a jamais enregistrés comme vivants, donc ils ne peuvent pas être vraiment morts. Ils errent dans les strates basses de la Nécropole, répétant des cycles de comportement qui n'ont ni début ni fin. Grim organise des expéditions pour les « mettre au repos » — ce qui signifie les supprimer du registre système.
- **Traits** : pragmatique, hanté par le rituel, parle aux défunts comme s'ils étaient en ligne.
- **Voix** : grave, rituelle, avec une fatigue qui semble vieille de plusieurs resets (« Ils ne sont pas morts. Ils sont mal compilés. Le sommeil ne les prend pas. Il faut les décharger un par un. »).
- **Relations** : Gardien Nécropole `NPC_PEN_16` (son contact sur place — lui signale les nouvelles « anomalies ») ; Receleuse Nix `NPC_PEN_01` (lui achète les objets récupérés sur les non-compilés) ; Archiviste Sans Nom `NPC_PEN_06` (échange des logs sur les morts contre des informations sur les strates).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_05_01` | K0 | cimetiere, vertical | Le Cimetière Vertical : lieu d'enterrement principal de Penwether | — |
| 2 | `QI_PEN_05_02` | K0 | necropole, antique | Accès à la Nécropole Antique (DUN_001) — donjons, dangers, sorties | — |
| 3 | `QI_PEN_05_03` | K0 | morts, rituel | Rituel d'enterrement spriggan — incinération et inscription dans le registre | — |
| 4 | `QI_PEN_05_04` | K1 | non compiles, entites | Certains morts n'ont jamais été compilés — ils ne sont ni vivants ni morts | `AFF>=65` |
| 5 | `QI_PEN_05_05` | K1 | quete, expedition | Il organise des expéditions dans la Nécropole pour « mettre au repos » les non-compilés | `AFF>=70` |
| 6 | `QI_PEN_05_06` | K1 | cardinal, registre | Le Cardinal n'enregistre que les vies compilées — les non-compilés sont des bugs | — |
| 7 | `QI_PEN_05_07` | K2 | cicatrices, compilation | Les non-compilés portent des « cicatrices de compilation » — des fragments de code à vif | `AFF>=85` |
| 8 | `QI_PEN_05_08` | K2 | strate, fonte | Une strate entière de la Nécropole est en « fonte » — les non-compilés y fusionnent entre eux | `AFF>=88` |
| 9 | `QI_PEN_05_09` | K3 | reset, registre | Le dernier reset du monde a laissé des « fantômes de registre » — des entités qui existent dans deux versions à la fois | JAMAIS — déflection : *(il plante sa pelle dans la terre)* « Les fantômes de registre ne sont pas faits pour être vus. Ni pour être nommés. Chaque reset crée des doublons. Certains doublons se souviennent de la version d'avant. Je ne creuse pas ces tombes-là. Personne ne devrait. » |
| 10 | `QI_PEN_05_10` | KX | *(hors-sujet)* | « Un mort, ça se creuse. Ça se pleure. Ça s'oublie. Pas les non-compilés. Eux, ça se supprime. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_NECRO_01` (extermination de non-compilés), `QST_PEN_NECRO_02` (récupération de registre), `QST_PEN_NECRO_03` (fermeture de strate en fonte).
- **Fils rouges** : rouage central de **💀 La Nécropole Ancestrale** (les morts non compilés). Relais de **📜 Ce Que Cachent les Ruines** (les cicatrices de compilation).
- Récompenses : Yrd, équipement nécropole, fragments de code (`ITEM_CODE_FRAGMENT`).

## 5. Intégration Bot

- **Accueil** (`!parler grim`) : *« La Nécropole ne dort jamais. Pas parce que les morts veillent. Parce que certains ne sont jamais vraiment nés. Si tu veux les aider à partir, je peux t'indiquer le chemin. »*
- `!quetes grim` (liste des quêtes disponibles) ; `!rapport grim` (état de la Nécropole).
