# 🍃 Joueur Venn, Parieur invétéré — `NPC_SWI_54`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_SWI_54` |
| **Nom affiché** | Joueur Venn |
| **Race** | Sylph |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (parieur — bookmaker informel) |
| **Zone** | `ZONE_SYL_CAP_001` — Swilvane, Taverne de l'Érable |
| **Niveau / HP / MP** | 14 / 700 / 350 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité (matériau LLM)

- **Bio** : Venn parie sur tout — les duels de l'Arène, le sexe du prochain enfant de tel notable, la couleur des ailes du prochain voyageur. Sa spécialité : des cotes absurdement précises sur les sujets les plus obscurs. Il a récemment ouvert un pari qui a fait rire toute la taverne : il parie qu'un étage de la Tour du Seigneur des Vents n'existe pas. Mais Venn ne parie jamais à perte, et son sourire quand il en parle commence à inquiéter certains.
- **Traits** : chanceux, sourire en coin, ne perd jamais sur le long terme.
- **Voix** : enjouée et rapide (« Je te prends 3 contre 1 que le prochain type qui entre a une plume cassée. Quoi, t'oses pas ? »).
- **Relations** : Bram `NPC_SWI_50` (lui sert de banque) ; Toran `NPC_SWI_78` (arrange les cotes des duels) ; Fynn `NPC_SWI_77` (parie sur lui — et gagne).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_SWI_54_01` | K0 | paris, cotes | Comment parier avec lui, les cotes du jour | — |
| 2 | `QI_SWI_54_02` | K0 | règles, gains | Les règles : pas de triche, paiement comptant | — |
| 3 | `QI_SWI_54_03` | K0 | arène, combats | Les cotes des prochains duels à l'Arène | — |
| 4 | `QI_SWI_54_04` | K1 | arène, trucage | Certains duels sont arrangés — il le sait mais ne dit pas qui paie | `AFF>=60` |
| 5 | `QI_SWI_54_05` | K1 | cotes, analyse | Comment il calcule ses cotes — des sources dans toute la ville | `AFF>=65` |
| 6 | `QI_SWI_54_06` | K1 | pari, étage | Il parie que l'étage 7 de la Tour n'existe pas — et les cotes sont de 50:1 | — |
| 7 | `QI_SWI_54_07` | K2 | raison, pari | La raison de son pari : un plan d'architecte qu'il a vu dans les ordures derrière la Tour | `AFF>=85+PAY:200` |
| 8 | `QI_SWI_54_08` | K2 | source, informateur | Qui lui a fourni le plan : un scribe de la Tour — nom en échange d'une grosse mise | `AFF>=88` |
| 9 | `QI_SWI_54_09` | K3 | pari, perte | Il a parié avec quelqu'un qui n'est pas un joueur — une entité qui a accepté ses conditions par la fenêtre système — et il a perdu. Il doit quelque chose au Cardinal | JAMAIS — déflection : *(son sourire disparaît, il tripote une pièce)* « On finit toujours par perdre, dans mon métier. La question c'est à qui tu dois quand t'as plus rien. Je peux pas en parler. Vraiment pas. » |
| 10 | `QI_SWI_54_10` | KX | *(hors sujet)* | « T'as des Yrds ? J'ai des cotes. On est d'accord ? » | — |

## 4. Chaînage économique & quêtes

- **Fil « Le Murmure de la Tour »** : le pari sur l'étage inexistant est lié à l'étage verrouillé.
- Son informateur est un scribe de la Tour — possiblement Scribe Vald `NPC_SWI_30`.
- Donneur de `QST_SYL_VENN_01` : enquête sur l'étage manquant de la Tour.

## 5. Intégration Bot

- **Accueil** (`!parler venn`) : *« Ah, un parieur ! J'aime ça. Assieds-toi, je te sors les cotes du jour. »*
- `!cotes` / `!parier <montant> <sujet>`.
- `NPC_SECRET_PROBED` slot 9 : hook « dette au Cardinal » pour l'orchestrateur.
