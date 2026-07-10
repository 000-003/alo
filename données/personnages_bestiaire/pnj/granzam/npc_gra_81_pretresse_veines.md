# ⛏️ Prêtresse des Veines — `NPC_GRA_81`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_81` |
| **Nom affiché** | Prêtresse des Veines |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Autel de Résurrection |
| **Niveau / HP / MP** | 30 / 1 800 / 1 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prêtresse spécialiste de la calcite et des veines minérales sacrées. Elle interprète les motifs de calcite sur les murs de l'autel pour prédire la pureté des âmes. Elle n'a pas parlé depuis quarante jours. Elle communique par gestes, par écrit, ou par des bourdonnements. Le silence n'est pas un vœu — elle a perdu la voix après avoir vu quelque chose dans les veines de calcite : une carte qui saignait. Depuis, elle écrit des avertissements sur des ardoises : « N'écoutez pas la pierre. » **Angle** : Un silence qui dure.
- **Traits** : silencieuse, observatrice, écrit vite, regard perçant.
- **Voix** : Aucune. Elle écrit sur une ardoise à la craie. Ses gestes sont vifs et précis. Ses bourdonnements sont graves, presque des lamentations minérales.
- **Relations** : `NPC_GRA_80` (Prêtre du Socle — collègue) ; `NPC_GRA_82` (Acolyte — lui apporte de la craie) ; `NPC_GRA_83` (Vestale — interprète ses écrits) ; `NPC_GRA_84` (Nécromancien des Gemmes — sait ce qu'elle a vu).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_81_01` | K0 | calcite, veines | Lecture des veines de calcite — art divinatoire minéral | — |
| 2 | `QI_GRA_81_02` | K0 | autel, rites | Rites secondaires de l'Autel — purification, bénédiction | — |
| 3 | `QI_GRA_81_03` | K0 | silence, voeu | « Elle a fait vœu de silence. » (c'est ce qu'ils disent) | — |
| 4 | `QI_GRA_81_04` | K1 | silence, cause | Elle a crié en regardant la calcite un soir — puis plus jamais parlé | `AFF>=60` |
| 5 | `QI_GRA_81_05` | K1 | ardoise, message | Elle écrit des messages d'alerte — « N'écoutez pas la pierre », « La calcite ment » | `AFF>=65` |
| 6 | `QI_GRA_81_06` | K1 | acolyte, craie | L'Acolyte `NPC_GRA_82` lui apporte de la craie — elle en use des pains entiers par jour | — |
| 7 | `QI_GRA_81_07` | K2 | calcite, carte | Elle a vu une carte de Granzam dans les veines de calcite — avec des galeries qui n'existent pas | `AFF>=85` |
| 8 | `QI_GRA_81_08` | K2 | veines, sang | La calcite était rouge cette nuit-là — « comme si la pierre saignait » | `QUEST:QST_GRA_SILENCE_CALCITE` |
| 9 | `QI_GRA_81_09` | K3 | calcite, reseau, surveillance | Les veines de calcite sont un réseau naturel de transmission de données du Cardinal — elles relient tous les autels de résurrection du jeu. Ce qu'elle a vu dans la calcite, c'est un flux de données brutes : les enregistrements de mort de tous les joueurs de Granzam, classés par seed d'âme. La calcite est une fibre optique magique | JAMAIS — déflection : *(elle efface son ardoise d'un geste sec et écrit)* « Je ne parle pas. La pierre non plus. » |
| 10 | `QI_GRA_81_10` | KX | *(hors sujet)* | *(elle hausse les épaules et retourne à sa calcite)* | — |

## 4. Chaînage économique & quêtes

- **Service** : `!divination_calcite` (buff divinatoire, révèle des veines de minerai proches).
- Porteur du fil **💎 La Gemme Qui Voit** (la calcite = réseau de transmission de données).
- Donneur de `QST_GRA_SILENCE_CALCITE` : découvrir ce qu'elle a vu dans la calcite.

## 5. Intégration Bot

- **Accueil** (`!parler pretresse_veines`) : *Elle ne répond pas. Elle écrit sur son ardoise :* « ✦ Je t'écoute. Parle. » *Puis elle la retourne.*
- `!divination_calcite` actif à l'Autel de Résurrection.
- `NPC_SECRET_PROBED` slot 9 : hook « calcite = réseau fibre optique magique du Cardinal » pour l'orchestrateur.
