# 🔨 Vétéran Forges — `NPC_BRO_95`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_95` |
| **Nom affiché** | Vétéran Forges |
| **Race** | Leprechaun |
| **Rôle** | `QUEST_GIVER` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 30 / 1800 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien maître-forgeron, trop vieux pour tenir le marteau. Il passe ses journées près de la Forge-Mère, à regarder les autres travailler. Il a été l'assistant de Brokk IX et connaît le secret du Pouls — il sait ce que le Pouls cache, mais il ne le dit pas. Sa dernière quête : retrouver son marteau perdu au niveau −5. Angle : Sait ce que le Pouls cache.
- **Traits** : Fatigué, les mains tremblantes, un œil vitreux.
- **Voix** : Cassée, autoritaire malgré l'âge. « J'ai forgé le métal qui soutient cette cité. Et toi ? »
- **Relations :** `NPC_BRO_00` (Le Pouls — il sait), `NPC_BRO_89` (gardien mémorial — ancien compagnon), `NPC_BRO_96` (instructeur — ancien élève), `NPC_BRO_01` (Brokk IX — le connaît depuis l'enfance).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_95_01` | K0 | ancien, maitre | Ancien maître-forgeron, 80 ans de métier | — |
| 2 | `QI_BRO_95_02` | K0 | forge-mere, histoire | Histoire de la Forge-Mère de mémoire vivante | — |
| 3 | `QI_BRO_95_03` | K0 | brokk ix, apprenti | A formé Brokk IX quand il était jeune | — |
| 4 | `QI_BRO_95_04` | K1 | pouls, secret | Il sait que le Pouls est le cœur de Brokkheim — pas juste un mythe | `AFF>=60` |
| 5 | `QI_BRO_95_05` | K1 | marteau, perdu | Son marteau est au niveau −5. Il veut qu'on le récupère | — |
| 6 | `QI_BRO_95_06` | K1 | sous-sol, souvenir | Il est descendu au −6 une fois. Il n'en parle pas. | `AFF>=70` |
| 7 | `QI_BRO_95_07` | K2 | pouls, cachette | Le Pouls cache un battement irrégulier — un défaut dans sa fréquence | `AFF>=80` |
| 8 | `QI_BRO_95_08` | K2 | enclume, cardinal | Il a vu l'Enclume du Cardinal au −7. Il n'a pas touché | `AFF>=85+QUEST:QST_BRO_MARTEAU` |
| 9 | `QI_BRO_95_09` | K3 | pouls, echec | Le Pouls n'est pas parfait — il a un battement manquant. Ce battement perdu est le premier secret du Cardinal, une faute dans son code. Si on trouve le battement manquant, on peut contrôler le Pouls — et Brokkheim avec | JAMAIS — déflection : *(il tousse, ses yeux se perdent dans le vide)* « J'ai forgé trop longtemps pour reparler de ça. Le métal se souvient. Moi, j'oublie. C'est mieux comme ça. » |
| 10 | `QI_BRO_95_10` | KX | *(hors sujet)* | « La forge ne ment pas. Elle te dit si t'es bon ou pas. » | — |

## 4. Chaînage économique & quêtes

- **QUEST_GIVER** : donne `QST_BRO_MARTEAU_PERDU` (aller au −5 chercher son marteau).
- Hook battement manquant : `QST_BRO_POULS_FLAW`.

## 5. Intégration Bot

- **Accueil :** *(il ne vous regarde pas, fixe le feu)* « Tu sais forger ? Non ? Dommage. Le monde a besoin de ceux qui transforment le métal. »