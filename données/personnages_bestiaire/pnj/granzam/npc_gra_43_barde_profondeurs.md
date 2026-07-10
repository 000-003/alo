# ⛏️ Barde Profondeurs — `NPC_GRA_43`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_43` |
| **Nom affiché** | Barde Profondeurs |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 30 / 1 800 / 4 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ménestrel qui chante les légendes de la pierre et des profondeurs. Sa voix résonne dans la Grande Halle. Il compose ses propres chansons, inspirées des échos des galeries. Depuis une semaine, il chante une chanson qu'il n'a pas écrite — elle lui vient en dormant, et il la siffle sans s'en rendre compte. Les paroles parlent d'une « veine qui saigne » et d'un « cœur qui bat sous le granit ». Les mineurs qui l'écoutent deviennent nerveux. Lié au fil **⛏️ Le Filonant** : la chanson est la fréquence du Filonant — une transmission involontaire que le Barde capte comme une radio.
- **Traits** : artiste, sensible, insomniaque, inspiré.
- **Voix** : Voix de chanteur — chaude, grave, qui porte. « La pierre chante quand on sait l'écouter. Moi, je ne fais que répéter. »
- **Relations** : `NPC_GRA_40` (Tavernier — employeur) ; `NPC_GRA_41` (Serveuse — amie) ; `NPC_GRA_25` (Pêcheur — source d'une chanson) ; `NPC_GRA_26` (Archiviste — lui a traduit des paroles anciennes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_43_01` | K0 | musique, barde | Représentations au Socle — soirées, chansons, horaires | — |
| 2 | `QI_GRA_43_02` | K0 | repertoire, legende | Répertoire — légendes de la pierre, ballades des mines | — |
| 3 | `QI_GRA_43_03` | K0 | inspiration, source | Ses inspirations — échos des galeries, récits des mineurs | — |
| 4 | `QI_GRA_43_04` | K1 | chanson, involontaire | Il chante une chanson qu'il n'a pas écrite — elle lui vient en dormant | `AFF>=60` |
| 5 | `QI_GRA_43_05` | K1 | paroles, saigne | « Une veine qui saigne, un cœur sous le granit » — paroles récurrentes | `AFF>=65` |
| 6 | `QI_GRA_43_06` | K1 | mineurs, effet | Les mineurs qui l'écoutent deviennent nerveux, certains arrêtent le travail | — |
| 7 | `QI_GRA_43_07` | K2 | frequence, filonant | L'Archiviste (`NPC_GRA_26`) a reconnu la mélodie — « c'est la fréquence du Filonant » | `AFF>=85` |
| 8 | `QI_GRA_43_08` | K2 | reve, note | Il rêve d'une note unique qui résonne dans une galerie vide — toujours la même | `QUEST:QST_GRA_CHANSON_FILON` |
| 9 | `QI_GRA_43_09` | K3 | transmission, involontaire | Le Barde capte la fréquence sismique du Filonant — le Cœur `NPC_GRA_00` émet des ondes que son oreille absolue transforme inconsciemment en musique, et la chanson est un décodage exact de l'activité du seed | JAMAIS — déflection : *(il pose sa lyre, voix soudain grave)* « Je ne chante plus cette chanson. Les pierres m'ont demandé d'arrêter. Et j'écoute les pierres. » |
| 10 | `QI_GRA_43_10` | KX | *(tout le reste)* | *(il pince une corde)* « La musique, c'est comme la pierre. Elle dure plus longtemps que ceux qui la créent. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!musique` (écouter une chanson, buff moral).
- Porteur du fil **⛏️ Le Filonant** (chanson transmise par le Filonant).
- Donneur de `QST_GRA_CHANSON_FILON` : enquête sur la chanson venue des profondeurs.

## 5. Intégration Bot

- **Accueil** (`!parler barde`) : *Assis sur un tabouret, lyre à la main.* « Une chanson ? J'en ai une nouvelle. Elle parle de toi, d'ailleurs. Enfin, pas de toi — de la pierre qui est en toi. »
- `!musique` actif à la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « barde récepteur sismique » pour l'orchestrateur.
