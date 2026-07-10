# ⛏️ Vendeur de Noyaux — `NPC_GRA_69`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_69` |
| **Nom affiché** | Vendeur de Noyaux |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit |
| **Niveau / HP / MP** | 36 / 2 800 / 4 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand itinérant spécialisé dans les noyaux de golem — il les récupère dans les ruines des Steppes de Granit et les revend aux enchanteurs et aux forgerons. Il y a deux semaines, il a trouvé un noyau encore chaud — il émettait une pulsation faible, comme un cœur qui s'arrête. Il l'a gardé. La nuit, il rêve d'une lumière ambrée. Il a tenté de le vendre, mais chaque acheteur potentiel a eu un malaise en le touchant. Le Vendeur de Noyaux sait que ce noyau est différent. Il le garde dans un sac de plomb à sa ceinture. (Angle : noyau qui pulsait encore.)
- **Traits** : itinérant, solitaire, pragmatique, perturbé.
- **Voix** : Voix des Steppes, portée par le vent. « Un noyau froid, ça se vend. Un noyau chaud, ça se garde. Ou ça se jette. J'ai pas encore décidé. »
- **Relations** : `NPC_GRA_10` (Gardien Steppes — lui signale les ruines), `NPC_GRA_11` (Guide — le connaît), `NPC_GRA_84` (Nécromancien — acheteur potentiel), `NPC_GRA_61` (Enchanteur — client régulier), `NPC_GRA_35` (Alchimiste — expert en gemmes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_69_01` | K0 | noyau, golem | Il vend des noyaux de golem. Prix : 300-1500 Yuld selon l'état. | — |
| 2 | `QI_GRA_69_02` | K0 | steppes, ruines | Il collecte les noyaux dans les ruines des Steppes de Granit. | — |
| 3 | `QI_GRA_69_03` | K0 | itinérant, commerce | Il est marchand itinérant — pas de boutique fixe. | — |
| 4 | `QI_GRA_69_04` | K1 | noyau, chaud | Il a trouvé un noyau encore chaud. « Il était tiède dans ma main toute la nuit. » | `AFF>=60` |
| 5 | `QI_GRA_69_05` | K1 | pulsation, faible | Le noyau pulse faiblement, comme un cœur en arrêt. | `AFF>=65` |
| 6 | `QI_GRA_69_06` | K1 | acheteurs, malaise | Chaque acheteur potentiel a eu un malaise en touchant le noyau. — |
| 7 | `QI_GRA_69_07` | K2 | lueur, noyau | La nuit, le noyau émet une lueur ambrée — la couleur du Noyau de la Salle du Conseil. | `AFF>=85` |
| 8 | `QI_GRA_69_08` | K2 | steppes, ruine_recente | La ruine où il a trouvé le noyau n'était pas là le mois dernier. Le Gardien (`NPC_GRA_10`) le confirme. | `QUEST:QST_GRA_NOYAU_CHAUD` |
| 9 | `QI_GRA_69_09` | K3 | noyau_golem, seed_pulse | Le noyau pulse encore car il contient une copie partielle du seed matériel — un golem « mort » dont le noyau est resté connecté au serveur. | JAMAIS — déflection : *(il glisse la main dans le sac de plomb)* « Tu veux l'acheter ? Non. Tu veux le voir ? Même pas. Il reste là. » |
| 10 | `QI_GRA_69_10` | KX | *(tout le reste)* | *(il regarde l'horizon des Steppes)* « Y a des jours où les ruines sont plus nombreuses que la veille. Des ruines neuves. Ça te dit rien ? » | — |

## 4. Chaînage économique & quêtes

- Marchand : achète et vend des noyaux de golem.
- Porteur du fil **🔮 Noyau de Pierre** (noyau chaud = copie partielle du seed).
- Donneur de `QST_GRA_NOYAU_CHAUD` : enquêter sur le noyau qui pulse encore.

## 5. Intégration Bot

- **Accueil** (`!parler vendeur_noyaux`) : *Un sac de plomb à la ceinture, il vous jauge.* « Tu veux un noyau ? J'ai des tièdes et des froids. Les tièdes, je les vends pas. »
- `!acheter_noyau <type>` / `!vendre_noyau <noyau>` (commerce).
- `NPC_SECRET_PROBED` slot 9 : hook « noyau chaud = fragment de seed connecté au serveur » pour l'orchestrateur.