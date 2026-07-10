# ⛏️ Minéralogiste — `NPC_GRA_53`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_53` |
| **Nom affiché** | Minéralogiste |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 30 / 1 200 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Minéralogiste attitré de la Grande Halle — il lit les veines dans la pierre pour le Conseil et les marchands de gemmes. Il pose ses mains sur une strate et ferme les yeux : il sent les filons par résonance. Il y a une lune, il a posé la main sur une dalle et entendu la pierre « chanter » — une note unique, tenue, sous la Salle du Conseil. Lié à `NPC_GRA_00` (Cœur de Granit), `NPC_GRA_66` (Marchand Gemmes Fines), `NPC_GRA_67` (Marchand Minerais R).
- **Traits** : calme, presque méditatif, parle des pierres comme des êtres, gestes lents.
- **Voix** : douce, murmurée, les yeux mi-clos quand il lit. « Cette strate est vieille. Très vieille. Elle se souvient de l'époque où la montagne n'était pas encore une ville. »
- **Relations** : `NPC_GRA_00` (Cœur de Granit — sent sa présence sous la ville) ; `NPC_GRA_66` et `NPC_GRA_67` (lui achètent des lectures de filons) ; `NPC_GRA_51` (Marchand Lanternes — lui taille les gemmes trouvées).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_53_01` | K0 | mineralogie, lecture | Lit les veines des roches par résonance tactile — 10 min par échantillon. | — |
| 2 | `QI_GRA_53_02` | K0 | grande_halle, service | Sa table est à l'angle nord-ouest de la Grande Halle, près de la fontaine. | — |
| 3 | `QI_GRA_53_03` | K0 | strate, age | Il peut estimer l'âge d'une strate à 2% près. | — |
| 4 | `QI_GRA_53_04` | K1 | chant, veine | Il a entendu une veine « chanter » sous la Grande Halle — un son grave et tenu. | `AFF>=60` |
| 5 | `QI_GRA_53_05` | K1 | resonance, nord | Le chant venait de sous la Salle du Conseil, côté nord — impossible d'en lire la strate. | `AFF>=65` |
| 6 | `QI_GRA_53_06` | K1 | coeur, granit | Il sait qu'il y a « quelque chose » sous la ville — une masse qui n'a pas la même signature qu'une roche ordinaire. | — |
| 7 | `QI_GRA_53_07` | K2 | chant, note, fa | La note tenue de la veine est un Fa−2, en dessous du seuil audible humain — il l'entend quand il pose le front au sol. | `AFF>=85` |
| 8 | `QI_GRA_53_08` | K2 | bloc, cube, parfait | La masse sous le Conseil est un bloc cubique aux arêtes parfaites — rien de géologique. | `QUEST:QST_GRA_COEUR` |
| 9 | `QI_GRA_53_09` | K3 | seed, resonance, fa2 | Le Fa−2 est la fréquence d'échantillonnage de la seed minérale du serveur : 44,1 Hz downsamplé en onde carrée. Le « chant de la pierre » est le bruit de la VM qui respire. | JAMAIS — déflection : *(il ouvre les yeux lentement)* « Il y a des choses que la pierre ne dit qu'à ceux qui se taisent. Toi aussi, écoute. Puis tais-toi. » |
| 10 | `QI_GRA_53_10` | KX | hors-sujet | *(il sourit)* « Une fleur ? Je peux te dire si elle pousse sur un filon de cuivre. Mais je suis minéralogiste, pas jardinier. » | — |

## 4. Chaînage économique & quêtes

- **Service** : lecture de veines (10 Yrd), identification de minerai (5 Yrd), estimation de pureté (15 Yrd).
- Porteur de l'indice sur le **Cœur de Granit** (mène `QST_GRA_COEUR`).
- Lié au commerce de gemmes de la Grande Halle par ses lectures.

## 5. Intégration Bot

- **Accueil** (`!parler mineralogiste`) : *« Tu as une pierre pour moi ? Pose-la là. Je vais l'écouter. »*
- Menu : `[Identifier minerai]` `[Lire veine]` `[Parler]`.