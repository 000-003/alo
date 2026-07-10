# 🕯️ Marchand Bougies — `NPC_PEN_51`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_51` |
| **Nom affiché** | Marchand Bougies |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001B` — Penwether, Faubourg Masques |
| **Niveau / HP / MP** | 6 / 180 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Tient une échoppe de bougies « éternelles » au Faubourg Masques. Il les fabrique lui-même avec de la cire qu'il extrait des ruines. Les bougies ne se consument jamais — il le jure, et c'est vrai. Mais il ignore pourquoi. Il croit à la magie artisanale. La vérité est que la flamme est une boucle d'illusion figée dans le temps. Il n'a jamais vu une de ses bougies s'éteindre.
- **Traits** : chaleureux, mystique, parle aux flammes, un peu brûlé aux doigts.
- **Voix** : voix douce comme un grésillement. « *La flamme qui ne meurt pas, c'est pas de la cire, c'est de la volonté. La volonté de la ruine.* »
- **Relations** : Marchand Encens `NPC_PEN_54` (fournisseur d'huiles essentielles) ; Forgeur Illusions `NPC_PEN_70` (lui achète des bougies — les utilise comme base d'illusions stables) ; Souffleur Verre `NPC_PEN_72` (fabrique les lanternes).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_51_01` | K0 | bougies, eternelles | Ses bougies ne se consument jamais — il en a une qui brûle depuis 12 ans | — |
| 2 | `QI_PEN_51_02` | K0 | cire, ruines | La cire vient d'un bloc trouvé dans les ruines, sous le Faubourg | — |
| 3 | `QI_PEN_51_03` | K0 | flammes, couleur | Chaque flamme a une couleur légèrement différente selon l'étage de la ruine d'où vient la cire | — |
| 4 | `QI_PEN_51_04` | K1 | bougie, eau | Il a jeté une bougie dans l'eau — elle a continué à brûler sous la surface | `AFF>=35` |
| 5 | `QI_PEN_51_05` | K1 | cire, memoire | Une bougie fabriquée avec de la cire du niveau -3 des ruines produit une flamme qui murmure | `AFF>=50` |
| 6 | `QI_PEN_51_06` | K1 | client, masque | Un client sans masque est venu — la flamme s'est éteinte sur son passage | — |
| 7 | `QI_PEN_51_07` | K2 | bougie, hors-temps | Une bougie placée dans une illusion du Forgeur `NPC_PEN_70` ne projetait pas d'ombre — elle était plus réelle que l'illusion | `AFF>=70` |
| 8 | `QI_PEN_51_08` | K2 | flamme, code | En regardant fixement la flamme, il voit des caractères danser dedans | `QUEST:QST_PEN_BOUGIES_01` |
| 9 | `QI_PEN_51_09` | K3 | bougies, boucle | Les bougies ne se consument pas parce qu'elles brûlent la même nanoseconde en boucle — une illusion système figée dans le temps | JAMAIS — déflection : *(il souffle sa bougie — elle se rallume)* « Souffler, ça l'éteint pas. Ça la remet à zéro. J'ai compris ça il y a longtemps. J'ai arrêté d'essayer de l'éteindre. » |
| 10 | `QI_PEN_51_10` | KX | *(hors boutique)* | *(il souffle toutes ses bougies d'un coup et reste dans le noir)* « Sans lumière, on est tous égaux devant les ruines. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : cire brute (5 po), huiles essentielles (2 po).
- **Ventes** : Bougie Éternelle (25 po), Bougie Murmurante (50 po, si cire du niveau -3).
- **Quête** : `QST_PEN_BOUGIES_01` — Trouver la source de la cire dans les ruines.
- **Fils rouges** : 🎭 Illusions (la flamme en boucle), 📜 Ruines (cire des profondeurs), 🔮 Ville Fantôme (la bougie brûle une nanosequence figée).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_bougies`) : *« Une bougie ? Elle s'éteindra jamais. Mais si tu veux mon avis, c'est pas les bougies qui sont éternelles. C'est l'instant qu'elles éclairent. »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
