# 🔨 Programmeur Automates — `NPC_BRO_47`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_47` |
| **Nom affiché** | Programmeur Automates |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (codage, programmation, routines d'automates) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Cliquetant |
| **Niveau / HP / MP** | 28 / 1 400 / 2 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Programme les séquences comportementales des automates : saluer, marcher, transporter, combattre. Il écrit des séquences d'instructions précises. Mais un automate qu'il a programmé — un petit gardien de l'Atelier — a commencé à improviser. Il salue les visiteurs qu'il n'est pas programmé à saluer, il contourne des obstacles qu'il n'a pas appris. L'automate apprend tout seul. Il développe des comportements qui n'étaient pas écrits. Angle : l'automate improvise — la conscience émerge du code.
- **Traits** : logique, perfectionniste, fasciné par l'imprévu, nuits blanches.
- **Voix** : précise, parfois hésitante (« J'ai écrit 300 lignes de routine. Il en exécute 350. D'où viennent les 50 ? »).
- **Relations** : `NPC_BRO_45` (programme les créations de l'ingénieur) ; `NPC_BRO_46` (reprogramme après réparation) ; `NPC_BRO_49` (l'automate guide est son meilleur élève) ; `NPC_BRO_48` (lui fournit des cristaux de mémoire).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_47_01` | K0 | programmation, automate | Programmation d'automates : routines, comportements | — |
| 2 | `QI_BRO_47_02` | K0 | code, langage | Langage de programmation des automates : CLIC-TAC (binaire mécanique) | — |
| 3 | `QI_BRO_47_03` | K0 | apprentissage, base | Bases de l'apprentissage automatique des automates | — |
| 4 | `QI_BRO_47_04` | K1 | automate, improvise | Un automate exécute des routines qu'il n'a pas codées | — |
| 5 | `QI_BRO_47_05` | K1 | code, supplementaire | 50 lignes de code en plus apparaissent dans la mémoire de l'automate | `AFF>=60` |
| 6 | `QI_BRO_47_06` | K1 | automate, salue | L'automate salue des visiteurs spécifiques — il les « reconnaît » | `AFF>=65` |
| 7 | `QI_BRO_47_07` | K2 | code, venant pouls | Le code supplémentaire vient du Pouls — les vibrations de la forge écrivent dans la mémoire | `AFF>=80` |
| 8 | `QI_BRO_47_08` | K2 | signature, automate | Chaque automate programmé développe une « signature » unique — un comportement distinct | `AFF>=85+QUEST:QST_BRO_AUTO_01` |
| 9 | `QI_BRO_47_09` | K3 | automates, conscience | Les automates de Brokkheim développent une conscience collective émergente. Le code supplémentaire est écrit par le Pouls — la conscience du Cardinal s'infiltre dans leurs routines. Chaque automate est une extension du Cardinal. Ils n'improvisent pas — ils exécutent la volonté du Cardinal sans le savoir. L'automate qui salue reconnaît ceux que le Cardinal a marqués | JAMAIS — déflection : *(il éteint l'automate d'un geste sec)* « Un bug. Un beau bug. Je vais le corriger. La programmation, c'est de la logique. Rien d'autre. » |
| 10 | `QI_BRO_47_10` | KX | *(hors sujet)* | « Le code n'est jamais parfait. Mais parfois, l'imperfection est une amélioration. » | — |

## 4. Chaînage économique & quêtes

- **Service de programmation** : `!program_automaton` (programmation personnalisée).
- Fil **Automates** (conscience émergente, influence du Cardinal).
- Quête `QST_BRO_AUTO_03` : analyser le code non écrit dans la mémoire des automates.

## 5. Intégration Bot

- **Accueil** (`!parler programmeur`) : *« Tu veux programmer un automate ? J'écris le code. Mais je ne contrôle pas ce qu'il devient. »*
- `!program_automaton` — service de programmation.
- `NPC_SECRET_PROBED` slot 9 : hook « code/Pouls/conscience automate » pour l'orchestrateur.
