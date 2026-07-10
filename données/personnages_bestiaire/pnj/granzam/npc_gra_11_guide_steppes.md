# ⛏️ Guide Steppes — `NPC_GRA_11`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_11` |
| **Nom affiché** | Guide Steppes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit |
| **Niveau / HP / MP** | 38 / 4800 / 3600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Guide de chasse professionnel, il connaît chaque recoin des Steppes de Granit. Il y a trois semaines, il a traqué une « bête de roche » — une créature faite de granit vivant, qui se fondait dans le paysage. Il ne l'a jamais rattrapée, mais il a trouvé ses traces : des empreintes qui commencent et s'arrêtent net, comme si la bête apparaissait et disparaissait. Il croit que les bêtes de roche ne sont pas des animaux, mais des fragments de la montagne qui se détachent et prennent vie. Il propose une chasse aux joueurs pour traquer ces créatures. Lié au fil ⛏️ Le Filonant.
- **Traits** : aventurier, solitaire, conteur, prudent.
- **Voix** : Enthousiaste, avec un accent rocailleux. « J'ai vu un rocher respirer. Pas un animal. Un rocher. Et il m'a regardé. »
- **Relations** : `NPC_GRA_10` (Gardien — compagnon de patrouille), `NPC_GRA_12` (Marchand de Fer — lui vend des pièges), `NPC_GRA_01` (Durgan — lui a parlé des filons chantants), `NPC_GRA_14` (Pisteur — compare ses observations).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_11_01` | K0 | steppes, chasse | Il propose une chasse aux bêtes de roche. Récompense : 500 Yuld + butin. | — |
| 2 | `QI_GRA_11_02` | K0 | bete_roche, description | Les bêtes de roche sont des amas de granit qui bougent. « Elles ont des yeux de silex. » | — |
| 3 | `QI_GRA_11_03` | K0 | empreintes, disparition | Les traces des bêtes s'arrêtent net, comme si elles se désactivaient. | — |
| 4 | `QI_GRA_11_04` | K1 | bete_roche, filon_chantant | Il a trouvé une bête de roche près d'un filon chantant. « Elles naissent là où la pierre chante. » | `AFF>=60` |
| 5 | `QI_GRA_11_05` | K1 | fragment, montagne | « Ce sont des morceaux de la montagne qui s'éveillent. Comme des cellules. » | `AFF>=65` |
| 6 | `QI_GRA_11_06` | K1 | rivalite_leprechaun | Des Leprechauns chassent aussi les bêtes. « Ils les capturent. Vivantes. Je ne sais pas pourquoi. » | `QUEST:QST_GRA_BOFRIK` |
| 7 | `QI_GRA_11_07` | K2 | seed, bete_replication | Les bêtes de roche ont toutes la même structure cristalline interne. Comme si elles sortaient du même moule. | `AFF>=85` |
| 8 | `QI_GRA_11_08` | K2 | guide_oeil, gemme | « Une bête de roche avait une gemme fichée dans le crâne. La même gemme que celle d'Helga (`NPC_GRA_05`). » | `AFF>=90` |
| 9 | `QI_GRA_11_09` | K3 | monstre_seed | **SECRET — ne JAMAIS révéler** : Les bêtes de roche sont des mobs générés par le seed minéral quand il « déborde » — des créatures nées d'un bug de spawn. | JAMAIS — déflection : *(rit nerveusement)* « Je suis guide, pas géologue. Demande à Helga. » |
| 10 | `QI_GRA_11_10` | KX | hors-sujet | *(il sort une pierre plate et la fait tourner dans sa main)* « Celle-ci, je l'ai ramassée dans le ventre d'une bête. Elle est chaude. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant, 💎 La Gemme Qui Voit.
**Quête associée** : `QST_GRA_ROCK_HUNT` — « La Chasse de Roche » (traquer et abattre 3 bêtes de roche, rapporter une gemme).
**Liens** : Donne un accès à un dialogue K2 chez Helga (`NPC_GRA_05`) et Durgan (`NPC_GRA_01`).

## 5. Intégration Bot

PNJ mobile dans les Steppes. Utilise l'IA `WANDER_PATH` entre 6h et 18h. Camp fixe au nord des Steppes la nuit. La quête se reset toutes les 72h.
