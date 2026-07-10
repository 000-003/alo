# 🕯️ Pêcheur Citernes — `NPC_PEN_25`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_25` |
| **Nom affiché** | Pêcheur Citernes |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Poisson des Citernes) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Citernes Antiques |
| **Niveau / HP / MP** | 5 / 350 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Pêche dans les Citernes Antiques, là où l'eau ne s'écoule plus et où la lumière ne pénètre jamais. Il attrape des anguilles pâles — des poissons aveugles aux yeux blancs qui nagent dans l'eau stagnante des anciens réservoirs. Il ne les mange pas : il les vend à ceux qui veulent une lumière qui ne s'éteint jamais. L'anguille pâle brille dans le noir. Il refuse de descendre au fond des citernes.
- **Traits** : silencieux, méfiant, sent l'eau croupie ; ne sort jamais sans sa lanterne.
- **Voix** : chuchotée, rauque. « L'anguille pâle te montrera ce que la ville cache. Une fois que t'as vu ça, tu peux plus l'oublier. »
- **Relations** : `NPC_PEN_26` (lui achète de l'eau filtrée pour ses anguilles) ; `NPC_PEN_27` (client régulier, baigneur qui achète des anguilles) ; `NPC_PEN_28` (lui fournit des potions de vision pour mieux pêcher).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_25_01` | K0 | pêche, citerne | Pêche dans les Citernes Antiques — anguilles pâles, 30 Yrds pièce | — |
| 2 | `QI_PEN_25_02` | K0 | anguille, lueur | L'anguille pâle brille dans le noir — lumière bioluminescente | — |
| 3 | `QI_PEN_25_03` | K0 | peche, horaires | Il pêche à l'aube et au crépuscule — les anguilles sortent des failles | — |
| 4 | `QI_PEN_25_04` | K1 | fond, citerne | Il n'est jamais descendu au fond — il entend des choses qui l'appellent | — |
| 5 | `QI_PEN_25_05` | K1 | faille, aqueduc | Les anguilles viennent par des failles dans l'aqueduc antique — ouvertes | `AFF>=60` |
| 6 | `QI_PEN_25_06` | K1 | lueur, illusion | Les anguilles ne brillent pas vraiment — c'est une illusion qui persiste hors de l'eau | `AFF>=65` |
| 7 | `QI_PEN_25_07` | K2 | citernes, carte | Les Citernes sont reliées à la Bibliothèque Enterrée `NPC_PEN_29` par un aqueduc scellé | `AFF>=80` |
| 8 | `QI_PEN_25_08` | K2 | poisson, paroles | Les anguilles émettent des sons — des mots dans une langue ancienne, en boucle | `AFF>=85` |
| 9 | `QI_PEN_25_09` | K3 | anguille, archive | Chaque anguille pâle est une archive du Cardinal. Elles contiennent des fragments de mémoire du temps d'avant les ruines. Les vendre, c'est disséminer la mémoire du serveur. Les pêcher, c'est extraire des données | JAMAIS — déflection : *(il serre une anguille dans un bocal)* « Elle brille. C'est tout. Elle brille et elle se vend. Le reste, c'est de l'eau croupie. » *(il tourne le bocal pour que la lumière soit dans tes yeux)* |
| 10 | `QI_PEN_25_10` | KX | *(hors sujet)* | « L'eau ne ment pas. Les poissons, si. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_eel` (achat d'anguille pâle), `!fish_report` (état des Citernes).
- Fil **📜 Ruines** (lié aux Citernes Antiques).
- Client de `NPC_PEN_26`, `NPC_PEN_28`.

## 5. Intégration Bot

- **Accueil** (`!parler pecheur citernes`) : *(il lève un bocal trouble)* « L'anguille brille. Tu veux voir ce que les murs cachent ? Prends-la. 30 Yrds. » |
- `!buy_eel` — achat d'anguille pâle, `!fish_report` — rapport sur les Citernes.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « anguille = archive mémoire du Cardinal » réservé à l'orchestrateur.
