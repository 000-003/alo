# 🔨 Gardien Mémorial — `NPC_BRO_89`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_89` |
| **Nom affiché** | Gardien Mémorial |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Forge-Mère |
| **Niveau / HP / MP** | 18 / 1000 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde la liste des défunts, gravée dans les murs de la Forge-Mère. Chaque nom est un forgeron tombé. Il les récite à voix basse chaque matin. Parfois, un nom résonne en écho — comme si le mur répondait. Angle : Nom résonne.
- **Traits** : Vieux, solennel, mauvaise vue mais bonne mémoire.
- **Voix** : Éraillée, psalmodiée. « Brokk I, Brokk II, Brokk III… Leurs noms vivent dans le métal. »
- **Relations :** `NPC_BRO_95` (vétéran — connaît tous les noms), `NPC_BRO_97` (prêtre souvenir), `NPC_BRO_99` (consulte les listes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_89_01` | K0 | memoire, defunts | Liste des forgerons morts gravée dans le mur nord | — |
| 2 | `QI_BRO_89_02` | K0 | recitation, rituel | Récitation matinale : homélie des noms | — |
| 3 | `QI_BRO_89_03` | K0 | mur, noms | Le mur compte 1427 noms | — |
| 4 | `QI_BRO_89_04` | K1 | echo, nom | Un nom résonne en écho quand il le dit — Brokk VII | `AFF>=55` |
| 5 | `QI_BRO_89_05` | K1 | nom, neuf | Un nom apparaît sur le mur sans qu'il l'ait gravé | `AFF>=65` |
| 6 | `QI_BRO_89_06` | K1 | granzam, noms | 3 noms gnomes sur le mur — des forgerons gnomes morts ici | — |
| 7 | `QI_BRO_89_07` | K2 | mur, vivant | Le mur saigne quand il pleut — un liquide rouge suinte des lettres | `AFF>=80` |
| 8 | `QI_BRO_89_08` | K2 | echo, direction | L'écho vient du sous-sol — le nom résonne depuis le niveau −7 | `AFF>=85` |
| 9 | `QI_BRO_89_09` | K3 | mur, pouls | Le mur n'est pas une liste — c'est la partition du Pouls. Chaque nom est une note dans son battement. Quand un nom cesse de résonner, le Pouls ralentit | JAMAIS — déflection : *(il se tait, écoute le mur)* « Chut. Il récite en même temps que moi. Ce n'est pas mon tour. » |
| 10 | `QI_BRO_89_10` | KX | *(hors sujet)* | « Les noms sont tout ce qui reste. Quand le nom s'efface, le forgeron meurt vraiment. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!read_names` — fait réciter les noms des défunts.

## 5. Intégration Bot

- **Accueil :** *(il lève les yeux du mur)* « Tu veux un nom ? Ou tu veux ajouter le tien ? »