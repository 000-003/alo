# 🕯️ Garde Marché — `NPC_PEN_30`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_30` |
| **Nom affiché** | Garde Marché |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (Sécurité du Marché 7 Façades) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 35 / 4 500 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde affecté au Marché 7 Façades. Il connaît chaque étal, chaque marchand, chaque recoin. Il arrête les voleurs — ceux qui essaient de prendre sans payer. Mais récemment, il a attrapé un voleur qui, au moment d'être menotté, est sorti par une façade qui n'existait pas — une vraie porte dans le mur du marché. Le voleur s'est enfui par une entrée que le garde n'avait jamais vue, et qu'il n'a jamais revue depuis. Angle : le voleur est sorti par une vraie façade.
- **Traits** : vigilant, frustré, obsessionnel sur son périmètre.
- **Voix** : autoritaire, un ton en dessous du cri. « Il est passé par un mur. Je te jure. Un mur qui n'était pas un mur. »
- **Relations** : `NPC_PEN_31` (surveille son étal) ; `NPC_PEN_32` (lui signale les parchemins suspects) ; `NPC_PEN_38` (lui rapporte les annonces de vol) ; `NPC_PEN_46` (l'aide à repérer les fausses façades).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_30_01` | K0 | garde, marche | Garde du Marché 7 Façades — sécurité, patrouille, vols | — |
| 2 | `QI_PEN_30_02` | K0 | patrouille, horaire | Patrouille de l'aube au crépuscule — tourne entre les 7 allées | — |
| 3 | `QI_PEN_30_03` | K0 | voleur, description | Voleur : Spriggan masqué, cape grise, main droite bandée | — |
| 4 | `QI_PEN_30_04` | K1 | voleur, facade | Le voleur s'est enfui par une façade qui n'existait pas — vraie porte | — |
| 5 | `QI_PEN_30_05` | K1 | mur, disparu | La façade a disparu après son passage — mur plein | `AFF>=60` |
| 6 | `QI_PEN_30_06` | K1 | facade, reelle | Il a touché l'encadrement — c'était de la vraie pierre | `AFF>=65` |
| 7 | `QI_PEN_30_07` | K2 | marche, failles | Le Marché 7 Façades a des failles dans l'illusion — des entrées réelles | `AFF>=80` |
| 8 | `QI_PEN_30_08` | K2 | plan, cache | Il a dressé une carte des entrées réelles — 3 repérées | `AFF>=85` |
| 9 | `QI_PEN_30_09` | K3 | garde, illusion | Il ne garde pas le marché — il garde une prison illusoire. Les marchands sont prisonniers d'une simulation. Les « vraies façades » sont des brèches dans la matrice du Cardinal. Le voleur était un échappé, et le garde est le geôlier qui ne sait pas qu'il est dans la même cage | JAMAIS — déflection : *(il pose la main sur son épée)* « Je fais mon travail. Je garde ce marché. C'est tout. » *(il regarde le mur)* « Même si les murs changent. » |
| 10 | `QI_PEN_30_10` | KX | *(hors sujet)* | « Un mur est un mur. Jusqu'à ce qu'il soit une porte. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!report_security_pen` (rapport de sécurité), `!patrol_marche` (patrouille).
- Fil **🎭 Illusions** (failles du Marché 7 Façades).
- Lié à `NPC_PEN_46` pour la détection d'illusions.

## 5. Intégration Bot

- **Accueil** (`!parler garde marche`) : *(Il te dévisage, la main prête)* « Tu viens pour le marché ou pour le mur ? Parce que le mur, je le cherche encore. » |
- `!report_security_pen` — rapport, `!patrol_marche` — patrouille.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « marché = prison illusoire/brèches dans le code » réservé à l'orchestrateur.
