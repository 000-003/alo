# 🕯️ Marchand Étoffes — `NPC_PEN_36`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_36` |
| **Nom affiché** | Marchand Étoffes |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Tissus) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 4 / 220 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchande de tissus au Marché 7 Façades. Des rouleaux de soie, de lin, de velours — tous aux couleurs de Penwether. Mais elle a un problème : certains de ses tissus changent de couleur tous seuls. Un rouleau bleu devient vert quand personne ne le regarde. Un tissu rouge qu'elle a vendu est revenu violet. Elle n'en parle pas à ses clients. Elle retourne les rouleaux pour cacher le changement. Angle : étoffe qui change de couleur seule.
- **Traits** : Méticuleuse, menteuse par nécessité, toujours à inspecter ses tissus.
- **Voix** : Affairée, légèrement stressée. « C'est du bleu. Non, regarde bien, c'est du bleu. La lumière du marché joue des tours. Bleu. Bleu ! »
- **Relations** : `NPC_PEN_35` (lui vend des tissus pour filtrer la lumière) ; `NPC_PEN_42` (concurrente mais amie, échange des fournitures) ; `NPC_PEN_43` (lui vend des vernis pour stabiliser les couleurs).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_36_01` | K0 | tissus, vente | Vente d'étoffes : 10-200 Yrds le rouleau | — |
| 2 | `QI_PEN_36_02` | K0 | etal, marche | Étal allée 4 du Marché 7 Façades | — |
| 3 | `QI_PEN_36_03` | K0 | soie, lin, velours | Tissus variés — soie de Sylphe, lin local, velours importé | — |
| 4 | `QI_PEN_36_04` | K1 | tissu, change couleur | Un rouleau bleu devient vert sans raison | — |
| 5 | `QI_PEN_36_05` | K1 | retour, modifié | Un tissu rouge vendu est revenu violet — le client l'a rendu | `AFF>=60` |
| 6 | `QI_PEN_36_06` | K1 | cache, retourne | Elle retourne les rouleaux pour cacher le changement | `AFF>=65` |
| 7 | `QI_PEN_36_07` | K2 | couleur, illusion | Les couleurs des tissus sont instables parce que la simulation les recalcule en continu | `AFF>=80` |
| 8 | `QI_PEN_36_08` | K2 | tissu, stabilite | Les tissus qui tiennent leur couleur sont ceux teints avec des pigments des vraies ruines | `AFF>=85` |
| 9 | `QI_PEN_36_09` | K3 | etoffe, texture cache | Les changements de couleur sont des retexturages du Cardinal. Les tissus sont des textures appliquées sur des objets 3D dans la simulation. Quand le Cardinal optimise, il change les textures. Les étoffes « stables » sont celles dont le code de texture est verrouillé. Les autres changent parce que leur ID de texture est réaffecté | JAMAIS — déflection : *(elle froisse un tissu)* « Les couleurs, ça se lave. Ça se défraîchit. Ça se décolore. C'est la vie. Les tissus vivent. » *(elle serre le rouleau)* « Ils vivent, c'est tout. » |
| 10 | `QI_PEN_36_10` | KX | *(hors sujet)* | « La couleur ment. Le toucher, non. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_fabric_pen` (achat de tissu).
- Fil **🎭 Illusions** (textures instables de la simulation).
- Client de `NPC_PEN_35`, `NPC_PEN_42`, `NPC_PEN_43`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand etoffes`) : *(Elle déroule un tissu bleu)* « Regarde ce bleu. Pur. Stable. Il changera pas, je te jure.… *(le tissu vire au vert)* …C'est la lumière. C'est toujours la lumière. » |
- `!buy_fabric_pen` — achat de tissu.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « retexturages du Cardinal/instabilité des textures » réservé à l'orchestrateur.
