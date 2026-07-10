# ⛏️ Doyen Margrim — `NPC_GRA_06`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_06` |
| **Nom affiché** | Doyen Margrim |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil de Pierre |
| **Niveau / HP / MP** | 82 / 15000 / 8200 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Doyen du Conseil de Pierre, Margrim est le plus ancien des élus de Granzam. Il y a deux ans, il a senti un séisme que nul autre n'a perçu — un frémissement venu des entrailles de la montagne. Depuis, il collectionne les relevés sismiques, les rapports de prospection, et écoute le sol chaque nuit. Il est convaincu que la montagne « porte un fardeau » — quelque chose de lourd, d'ancien, qui pulse sous la ville. Il consigne tout dans un journal crypté à l'encre de pierre. Margrim est le seul, avec l'Oracle (`NPC_GRA_98`), à avoir compris que les séismes coïncident avec les maintenances du Cardinal. Il n'en a jamais parlé au Lord (`NPC_GRA_07`) par crainte de passer pour un fou.
- **Traits** : digne, anxieux, insomniaque, visionnaire, discret.
- **Voix** : Posée, avec une vibration grave. Chaque mot semble pesé comme un bloc de granit. « La montagne geint la nuit. Pas un bruit de roche. Une plainte. »
- **Relations** : `NPC_GRA_07` (Lord Gnome — supérieur nominal), `NPC_GRA_00` (Cœur de Granit — sent ses pulsations), `NPC_GRA_98` (Oracle — confident), `NPC_GRA_01` (Durgan — source de données terrain), `NPC_GRA_05` (Helga — lui transmet ses rapports), `NPC_GRA_08` (Chancelier — collègue méfiant), `NPC_GRA_23` (Scribe — consigne ses édits).

## 3. Quantité Informationnelle (budget 12)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_06_01` | K0 | conseil, granzam | Margrim préside le Conseil de Pierre depuis 40 ans. Granzam est la plus vieille cité gnome d'ALO. | — |
| 2 | `QI_GRA_06_02` | K0 | seismes, montagne | Il décrit les « frémissements » qu'il ressent la nuit. « Elle tousse. La montagne tousse. » | — |
| 3 | `QI_GRA_06_03` | K0 | journal, encre_pierre | Il tient un journal sismique. Chaque entrée est scellée à l'encre de pierre, infalsifiable. | — |
| 4 | `QI_GRA_06_04` | K1 | pouls, coeur_granit | Il a mesuré le pouls du soubassement : 0,3 Hz, régulier. « C'est un battement de cœur. » | `AFF>=60` |
| 5 | `QI_GRA_06_05` | K1 | horaire_seisme, synchronisation | Les séismes surviennent à heures fixes — tous les 12 cycles. « Comme une machine qu'on entretient. » | `AFF>=70` |
| 6 | `QI_GRA_06_06` | K1 | oracle, confidence | L'Oracle (`NPC_GRA_98`) lui a dit que la montagne « montre ses failles de code ». Margrim n'a pas compris. | `QUEST:QST_GRA_ORACLE` |
| 7 | `QI_GRA_06_07` | K2 | fardeau, poids_montagne | « La montagne porte un fardeau qui n'est pas de pierre. Un poids informationnel. Comme si le monde était retenu par elle. » | `AFF>=85` |
| 8 | `QI_GRA_06_08` | K2 | cardinal, maintenance | Il a corrélé les séismes avec les annonces de maintenance du Cardinal. « Le monde se répare la nuit. » | `AFF>=90` |
| 9 | `QI_GRA_06_09` | K2 | lord_gnome, silence | Il n'a jamais parlé au Lord (`NPC_GRA_07`). « Il ne parle qu'en sismicité. Je ne sais pas comment lui dire. » | `QUEST:QST_GRA_MARGRIM` |
| 10 | `QI_GRA_06_10` | K3 | seed, ancrage | **SECRET — ne JAMAIS révéler** : Margrim a compris que la montagne n'est pas une montagne — c'est le fichier racine du monde. Le seed matériel d'ALO. | JAMAIS — déflection : *(ferme son journal d'un geste sec)* « Ces mots-là ne doivent pas être écrits. Ni dits. » |
| 11 | `QI_GRA_06_11` | K3 | serveur, verite | **SECRET — ne JAMAIS révéler** : « Si la montagne s'effondre, le monde cesse d'exister. Pas Granzam — le monde. Je le sais. Je l'ai vu dans le frémissement. » | JAMAIS — déflection : *(ses yeux deviennent vitreux)* « Je… je dois aller vérifier les sismographes. » |
| 12 | `QI_GRA_06_12` | KX | hors-sujet | *(il vous regarde avec une lueur fatiguée)* « Tu sais quelle heure il est ? J'ai perdu la notion du temps à force d'écouter la pierre. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : 🏔️ Poids de la Montagne, 🔮 Noyau de Pierre.
**Quête associée** : `QST_GRA_MARGRIM` — « Le Poids de la Montagne » (enquêter sur les séismes, découvrir le Cœur de Granit, faire face au secret du seed matériel).
**Liens** : Débloque les quêtes de `NPC_GRA_07` (Lord Gnome). Dialogue déclenché après avoir parlé à `NPC_GRA_05` (Helga) et `NPC_GRA_01` (Durgan).

## 5. Intégration Bot

PNJ statique dans la Salle du Conseil de Pierre. Disponible 24h. État `state:margrim_journal` suit la progression de la quête. Skill passif `SEISMIC_HEARING` — détecte les warp serveur à proximité.
