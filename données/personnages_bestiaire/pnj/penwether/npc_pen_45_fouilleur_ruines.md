# 🕯️ Fouilleur Ruines — `NPC_PEN_45`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_45` |
| **Nom affiché** | Fouilleur Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Fouille d'objets dans les ruines) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Ruines Noires |
| **Niveau / HP / MP** | 18 / 900 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Fouilleur professionnel des Ruines Noires. Il explore les décombres, récupère ce qui peut être vendu. Mais il a trouvé un objet — une petite sphère métallique — qui l'appelle par son nom. Pas quand il la tient. Quand il la pose. Elle murmure son nom dans le silence. Il ne l'a pas vendue. Il l'a gardée dans une boîte en plomb. Il l'entend encore. Il a peur que d'autres objets l'appellent aussi, alors il fouille de moins en moins. Angle : objet qui l'appelle par son nom = artefact non compilé.
- **Traits** : solitaire, voyant des ombres partout, poches pleines de babioles.
- **Voix** : brisée, fatigue dans chaque mot. « J'ai trouvé une sphère. Elle m'appelle. « Vheln ». C'est mon nom. Elle sait qui je suis. Je ne lui ai jamais dit. »
- **Relations** : `NPC_PEN_31` (lui achète des antiquités) ; `NPC_PEN_37` (lui achète des reliques) ; `NPC_PEN_48` (lui achète discrètement des pièces) ; `NPC_PEN_49` (le guide qui l'accompagne parfois dans les ruines).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_45_01` | K0 | fouille, ruines | Fouille des Ruines Noires — cherche objets, reliques | — |
| 2 | `QI_PEN_45_02` | K0 | objets, vente | Vente d'objets trouvés : 10-200 Yrds selon la pièce | — |
| 3 | `QI_PEN_45_03` | K0 | ruines, noires | Zone dangereuse — effondrements fréquents | — |
| 4 | `QI_PEN_45_04` | K1 | sphere, appele | Une sphère métallique l'appelle par son nom | — |
| 5 | `QI_PEN_45_05` | K1 | nom, inconnu | La sphère connaît son nom — il ne lui a jamais dit | `AFF>=60` |
| 6 | `QI_PEN_45_06` | K1 | boite, plomb | Garde la sphère dans une boîte en plomb — l'entend encore | `AFF>=65` |
| 7 | `QI_PEN_45_07` | K2 | sphere, potentiel | La sphère n'est pas un objet — c'est un potentiel non compilé | `AFF>=80` |
| 8 | `QI_PEN_45_08` | K2 | autres, appels | D'autres objets des ruines commencent à l'appeler | `AFF>=85` |
| 9 | `QI_PEN_45_09` | K3 | artefact, non compile | La sphère est un artefact non compilé — une intention de création du Cardinal qui n'a jamais été finalisée. Elle l'appelle par son nom parce qu'elle a besoin d'un hôte pour se compiler. Si elle termine son appel, elle s'incarnera en lui, écrasant son identité. Les artefacts non compilés sont des programmes inachevés qui cherchent une conscience pour se terminer | JAMAIS — déflection : *(il tient la boîte. Sa main tremble.)* « Elle chuchote. Elle dit mon nom. Elle sait. Je ne veux pas savoir ce qu'elle veut. *(il pose la boîte)* …Elle est lourde. Plus lourde qu'avant. » |
| 10 | `QI_PEN_45_10` | KX | *(hors sujet)* | « Les ruines gardent des secrets. Mais certains secrets, ils te cherchent. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!hire_excavator_pen` (engager pour fouille), `!sell_find_pen` (vendre une trouvaille).
- Fil **📜 Ruines** (artefacts non compilés).
- Client de `NPC_PEN_49`, fournisseur de `NPC_PEN_31`, `NPC_PEN_37`, `NPC_PEN_48`.

## 5. Intégration Bot

- **Accueil** (`!parler fouilleur ruines`) : *(Il est accroupi dans la poussière, une pierre à la main)* « J'ai trouvé ça aujourd'hui. Juste une pierre. Elle m'a pas parlé. *(il la jette)* …Celle-là. C'est une bonne journée quand elles parlent pas. » |
- `!hire_excavator_pen` — engager, `!sell_find_pen` — vendre.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « artefact non compilé = programme inachevé cherchant hôte » réservé à l'orchestrateur.
