# 🕯️ Détecteur Illusions — `NPC_PEN_46`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_46` |
| **Nom affiché** | Détecteur Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Détection de fausses façades) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 14 / 600 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Spécialiste en détection d'illusions. Il repère les fausses façades, les murs qui ne sont pas des murs, les portes qui n'existent pas. Il a aidé des dizaines de clients à trouver les vraies entrées du Marché 7 Façades. Mais il y a une entrée qu'il rate à chaque fois. Il passe devant sans la voir. D'autres la voient, lui non. Il est le meilleur détecteur d'illusions de Penwether, mais une illusion lui échappe systématiquement — et elle est juste devant son étal. Angle : la vraie entrée qu'il rate toujours.
- **Traits** : confiant, un peu arrogant, devient nerveux près de son étal.
- **Voix** : assurée, professoral. « Une illusion, ça se voit à la lumière. L'ombre qui tombe pas là où elle devrait. Le reflet qui suit pas. Sauf une. Celle devant ma boutique. Je la vois pas. C'est gênant. »
- **Relations** : `NPC_PEN_28` (lui achète des potions de détection) ; `NPC_PEN_30` (l'aide à repérer les fausses façades) ; `NPC_PEN_34` (teste ses lanternes sur les fausses façades) ; `NPC_PEN_32` (vérifie les écritures) ; `NPC_PEN_49` (lui demande de vérifier les accès des expéditions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_46_01` | K0 | detection, illusions | Détection de fausses façades : 30 Yrds par inspection | — |
| 2 | `QI_PEN_46_02` | K0 | marche, facades | Connaît le Marché 7 Façades par cœur — vraies et fausses portes | — |
| 3 | `QI_PEN_46_03` | K0 | service, inspection | Inspection de bâtiments, murs, entrées | — |
| 4 | `QI_PEN_46_04` | K1 | entree, rate | Il y a une entrée qu'il rate toujours — devant son étal | — |
| 5 | `QI_PEN_46_05` | K1 | visible, autres | D'autres voient l'entrée — lui, non | `AFF>=60` |
| 6 | `QI_PEN_46_06` | K1 | gene, professionnelle | C'est gênant pour un détecteur d'illusions de rater une illusion | `AFF>=65` |
| 7 | `QI_PEN_46_07` | K2 | entree, personnelle | L'entrée qu'il rate est liée à lui — codée pour être invisible à ses yeux | `AFF>=80` |
| 8 | `QI_PEN_46_08` | K2 | code, verrou | L'illusion a un verrou de vision : elle disparaît pour ceux qui la cherchent | `AFF>=85` |
| 9 | `QI_PEN_46_09` | K3 | detecteur, filtre | Le Détecteur Illusions a un filtre intégré dans son code. Le Cardinal a rendu une entrée invisible spécifiquement pour lui — c'est la vraie sortie de la simulation. Il la rate parce que le Cardinal ne veut pas que celui qui voit à travers les illusions trouve la porte de sortie. Il est trop utile dans la cage pour qu'on le laisse sortir | JAMAIS — déflection : *(il ferme les yeux)* « Devant mon étal. Un pas à droite. Je sais qu'elle est là. Je l'ai touchée une fois. Je la vois pas, mais… *(il tend la main, hésite)* …mais je la sens. C'est la seule que je peux pas voir. Et c'est celle qu'il faudrait que je trouve. » |
| 10 | `QI_PEN_46_10` | KX | *(hors sujet)* | « L'illusion parfaite, c'est celle que tu sais être là mais que tu ne vois pas. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!detect_illusion_pen` (inspection d'illusion), `!find_entrance_pen` (trouver une entrée).
- Fil **🎭 Illusions** (la porte que le Cardinal lui cache).
- Client de `NPC_PEN_28`, `NPC_PEN_34`, lié à `NPC_PEN_30`, `NPC_PEN_49`.

## 5. Intégration Bot

- **Accueil** (`!parler detecteur illusions`) : *(Il plisse les yeux en regardant un mur)* « Là. Porte factice. L'ombre tombe pas bien. Là aussi. Et là. Mais devant ma boutique ? *(il se tourne)* …Rien. Un mur. Je vois un mur. Tu veux essayer, toi ? » |
- `!detect_illusion_pen` — inspection, `!find_entrance_pen` — recherche d'entrée.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « détecteur = filtre du Cardinal/porte de sortie cachée » réservé à l'orchestrateur.
