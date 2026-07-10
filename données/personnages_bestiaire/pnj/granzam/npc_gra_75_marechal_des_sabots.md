# ⛏️ Maréchal des Sabots — `NPC_GRA_75`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_75` |
| **Nom affiché** | Maréchal des Sabots |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte de Granzam |
| **Niveau / HP / MP** | 18 / 1 100 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Maréchal des Sabots ferre les montures des voyageurs aux portes de Granzam. Gnome silencieux aux mains calleuses, il reconnaît un sabot d'un coup d'œil et sait immédiatement quel fer convient. Depuis quelques semaines, un fer qu'il a posé sur un cheval de commerce lui revient en mémoire : le sabot portait une marque d'usure impossible, comme si l'animal avait marché sur une roche qui n'existe pas dans les montagnes autour de Granzam. **Angle** : Un fer qui sonne creux.
- **Traits** : taciturne, observateur, minutieux, superstitieux.
- **Voix** : grave, marmonnée, avec des « hein ? » de fatigue. « Laisse-moi voir ce sabot… ça vient de loin, cette bête. Très loin. »
- **Relations** : Veilleur de Nuit `NPC_GRA_76` (partage la garde de la Porte) ; Veilleur de Jour `NPC_GRA_77` ; les marchands de la Porte ; Coursier des Pierres `NPC_GRA_78`.

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_75_01` | K0 | ferrure, montures | Ferrage de montures, types de fers par race, prix | — |
| 2 | `QI_GRA_75_02` | K0 | porte, granzam | Description de la Porte de Granzam, flux de voyageurs | — |
| 3 | `QI_GRA_75_03` | K0 | gnome, metal | Son métier de maréchal-ferrant gnome, traditions de forge | — |
| 4 | `QI_GRA_75_04` | K1 | sabot, marque | Certains sabots portent des marques de roche inconnue sous Granzam | `AFF>=60` |
| 5 | `QI_GRA_75_05` | K1 | fer, son creux | Depuis peu, certains fers « sonnent creux » après un jour de route | `AFF>=65` |
| 6 | `QI_GRA_75_06` | K1 | voyageurs, destinations | Les voyageurs qu'il ferre viennent de toutes les routes — une augmentation du trafic | — |
| 7 | `QI_GRA_75_07` | K2 | fer, provenance | Le fer qu'il utilise n'est plus le même depuis deux mois — le minerai a une teinte grise anormale | `AFF>=85` |
| 8 | `QI_GRA_75_08` | K2 | roche, filon | Un marchand lui a dit qu'un filon s'était déplacé sous la montagne — le Filonant | `AFF>=90` |
| 9 | `QI_GRA_75_09` | K3 | fer, sonde | Le fer gris est en réalité un alliage de surface mêlé à un minerai qui n'affleure nulle part — les fers qui sonnent creux sont en train de fondre de l'intérieur, comme si la roche les « buvait » pour se nourrir, un signe que le Noyau de Pierre aspire les métaux de la surface dans les strates profondes | JAMAIS — déflection : *(il tape sur l'enclume)* « Un fer qui sonne creux ? C'est l'usure, p'tit. L'usure, ça arrive. Mes fers sont bons, je les fais moi-même. Le minerai vient de la Mine — c'est la même veine depuis cent ans. Y a rien d'anormal. Rien. » |
| 10 | `QI_GRA_75_10` | KX | *(hors sujet)* | « Tu parles de cailloux ? Moi je parle de fers à cheval. » | — |

## 4. Chaînage économique & quêtes

- **Service de ferrure** : `!ferrure` (ferrage de montures T1-T2, buff VIT).
- Son K3 (fer qui sonne creux) nourrit le **fil ⛏️ Le Filonant** (l'anomalie des métaux qui descendent vers le Noyau de Pierre).

## 5. Intégration Bot

- **Accueil** (`!parler marechal`) : *« Un sabot à ferrer ? Pose ta bête et assieds-toi. Ça prend dix minutes, pas plus. »*
- `!ferrure` (service de ferrage, buff monture).
- `NPC_SECRET_PROBED` slot 9 : hook « fer gris / alliage du Noyau ».
