# 🕯️ Apprenti Illusionniste — `NPC_PEN_21`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_21` |
| **Nom affiché** | Apprenti Illusionniste |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (élève de Vex — assistant au Cloître Renversé) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Cloître Renversé |
| **Niveau / HP / MP** | 28 / 3 500 / 8 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : L'Apprenti Illusionniste est l'élève de Vex `NPC_PEN_02`. Spriggan encore jeune (pour un PNJ), il maîtrise les illusions basiques et assiste son maître dans l'enseignement et l'entretien du Cloître. Il cache un problème : il voit trop loin. Les illusions que Vex lui apprend à dissiper, lui les voit encore derrière — les couches de masques, les strates de code, les visages sous les visages. Il a peur de devenir comme Vex, à force de voir ce que les autres ne voient pas. Mais il ne peut pas s'arrêter. La vérité l'attire comme un abîme.
- **Traits** : nerveux, brillant, parle vite et trop.
- **Voix** : juvénile, enthousiaste mais anxieuse (« Maître Vex dit que je vois trop loin. Que je vais finir par traverser l'illusion au lieu de la dissiper. Mais comment on fait pour ne PAS voir ce qui est derrière ? »).
- **Relations** : Prieur Vex `NPC_PEN_02` (son maître — admiration mêlée de peur) ; Masquier Orin `NPC_PEN_03` (lui fournit des masques pour les cours) ; Tailleur Illusions `NPC_PEN_23` (rivaux amicaux — débat sur la nature des illusions).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_21_01` | K0 | cloitre, vie | Vie au Cloître Renversé — routines, enseignement | — |
| 2 | `QI_PEN_21_02` | K0 | illusion, base | Connaissances en illusions basiques (apprises de Vex) | — |
| 3 | `QI_PEN_21_03` | K0 | vex, enseignement | Ce que Vex enseigne vs ce qu'il tait | — |
| 4 | `QI_PEN_21_04` | K1 | vision, profonde | Il voit au-delà des masques — il n'arrive pas à s'arrêter | `AFF>=65` |
| 5 | `QI_PEN_21_05` | K1 | peur, verite | Il a peur de ce qu'il voit parfois — des structures sous les structures | `AFF>=70` |
| 6 | `QI_PEN_21_06` | K1 | chancelier, ecran | Il a vu le Chancelier `NPC_PEN_07` sans son illusion de masque — un écran vide | — |
| 7 | `QI_PEN_21_07` | K2 | voir, code | Quand il « force » sa vision, il voit du code défiler sous les murs | `AFF>=85` |
| 8 | `QI_PEN_21_08` | K2 | fantome, entrevu | Il a entrevu une silhouette en négatif au Cloître — le Fantôme `NPC_PEN_00` | `AFF>=88` |
| 9 | `QI_PEN_21_09` | K3 | vision, reset | Quand il ferme les yeux, il voit parfois des resets du monde — des flashs de fin et de recommencement | JAMAIS — déflection : *(il ferme les yeux)* « Je ne veux plus voir ça. Des mondes qui s'effacent. Des Spriggans qui se décomposent en lignes de code. La ville qui se vide. Et puis le noir. Et puis tout recommence. Maître Vex dit que ce sont des illusions. Mais ça ne ressemble pas à des illusions. Ça ressemble à des souvenirs. » |
| 10 | `QI_PEN_21_10` | KX | *(hors-sujet)* | « Parfois, je voudrais être aveugle. Comme Maude. Elle sent les choses — mais elle ne les VOIT pas. » | — |

## 4. Chaînage économique & quêtes

- **Service** : assistant de Vex — peut donner des cours d'illusion basiques (`!cours_illusion`).
- **Fils rouges** : rouage de **🎭 Les Illusions Qui Mentent** (apprenti qui voit trop loin). Relais de **🔮 Fil méta — La Ville Fantôme** (vision des resets).
- Donneur de `QST_PEN_VISION_01` (trouver un moyen de contrôler sa vision profonde).

## 5. Intégration Bot

- **Accueil** (`!parler apprenti_illusion`) : *« Salut ! Tu viens pour les cours d'illusion ? Maître Vex n'est pas là mais je peux te montrer les bases. Attention : si tu vois soudainement le code source du monde sous les murs, c'est normal. Enfin, je crois. Mon maître dit que ça ne devrait pas arriver. »*
- `!cours_illusion` (apprentissage basique) ; `!vision_apprenti` (discussion sur ce qu'il voit).
