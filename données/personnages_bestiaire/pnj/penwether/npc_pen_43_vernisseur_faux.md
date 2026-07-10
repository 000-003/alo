# 🕯️ Vernisseur Faux — `NPC_PEN_43`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_43` |
| **Nom affiché** | Vernisseur Faux |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Vernis de masques) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 5 / 250 / 350 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vernisseur à l'Atelier Visages. Il applique le vernis final sur les masques et les prothèses pour fixer l'illusion. Son vernis spécial — un mélange de résine des ruines et de salive d'anguille pâle — a une propriété étrange : il garde le faux. Un masque vernis conserve l'expression qu'on lui a donnée, même si la peinture s'efface. Il a verni un masque de souris ; la personne qui l'a porté a eu des moustaches pendant une semaine. Il ne dit rien aux clients. Angle : vernis qui garde le faux.
- **Traits** : silencieux, appliqué, petites mains calleuses.
- **Voix** : sobre, monocorde. « Le vernis fixe. Ce qui est fixé reste. Ce qui reste devient vrai. Tu veux que ton déguisement devienne vrai ? Je te mets une couche. »
- **Relations** : `NPC_PEN_33` (lui achète des masques à vernir) ; `NPC_PEN_40` (lui fournit des prothèses) ; `NPC_PEN_41` (vernit ses peintures) ; `NPC_PEN_36` (lui vend des tissus à vernir).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_43_01` | K0 | vernis, masques | Application de vernis sur masques : 15 Yrds | — |
| 2 | `QI_PEN_43_02` | K0 | resine, ruines | Utilise une résine des ruines mélangée à de la salive d'anguille | — |
| 3 | `QI_PEN_43_03` | K0 | atelier, visages | Travaille à l'Atelier Visages, salle de séchage | — |
| 4 | `QI_PEN_43_04` | K1 | vernis, fixe faux | Le vernis rend les illusions permanentes | — |
| 5 | `QI_PEN_43_05` | K1 | moustaches, exemple | Un client a eu des moustaches réelles après un masque de souris | `AFF>=60` |
| 6 | `QI_PEN_43_06` | K1 | effet, duree | L'effet dure de plus en plus longtemps — semaines, puis mois | `AFF>=65` |
| 7 | `QI_PEN_43_07` | K2 | vernis, materialise | Le vernis matérialise les illusions — les rend réelles dans le code | `AFF>=80` |
| 8 | `QI_PEN_43_08` | K2 | ingredient, cle | L'ingrédient clé est la salive d'anguille pâle `NPC_PEN_25` | `AFF>=85` |
| 9 | `QI_PEN_43_09` | K3 | vernis, compiler | Le vernis est un compilateur d'illusions. Il transforme les données illusoires en objets réels dans la simulation en fixant leur code. Chaque couche de vernis est un commit dans le code de l'objet. Le vernis rend le « faux » permanent parce qu'il écrit l'illusion dans la base de données du Cardinal | JAMAIS — déflection : *(il applique du vernis sur une plume)* « C'est juste de la résine. Ça brille. Ça protège. *(la plume devient métal)* …C'est la lumière. Ça joue des tours. » |
| 10 | `QI_PEN_43_10` | KX | *(hors sujet)* | « Le vernis garde ce qui doit être gardé. Même les mensonges. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!varnish_mask_pen` (vernissage de masque).
- Fil **🎭 Illusions** (vernis = compilateur d'illusions).
- Client/Fournisseur de `NPC_PEN_33`, `NPC_PEN_40`, `NPC_PEN_41`, `NPC_PEN_36`.

## 5. Intégration Bot

- **Accueil** (`!parler vernisseur faux`) : *(Il tient un pinceau de vernis)* « Une couche de vernis et ton masque tiendra toute la vie. Littéralement. Tu veux essayer ? » |
- `!varnish_mask_pen` — vernissage.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « vernis = compilateur d'illusions/commit dans la base de données » réservé à l'orchestrateur.
