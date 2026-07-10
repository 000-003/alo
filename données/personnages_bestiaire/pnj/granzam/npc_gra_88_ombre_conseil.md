# ⛏️ Ombre du Conseil — `NPC_GRA_88`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_88` |
| **Nom affiché** | Ombre du Conseil |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 30 / 2 000 / 1 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Espion attitré du Chancelier de Pierre (`NPC_GRA_08`). Il écoute les conversations des conseillers, note les trahisons, compile les secrets. Officiellement, il est « secrétaire aux écritures ». En un an, il a identifié trois conspirations, deux détournements de gemmes et un trafic de mithril. Mais la semaine dernière, il a découvert le vrai visage des alliés de Granzam — les Leprechauns de Brokkheim (`NPC_GRA_91`), qui négocient secrètement avec les Salamanders de Voulg. Il a surpris une conversation entre le Marchand Leprechaun et un messager au manteau gris : « Le Balrog sait. Il faut le faire taire. » **Angle** : Le vrai visage des alliés.
- **Traits** : discret, patient, voix neutre, mémoire photographique.
- **Voix** : Neutre, fade, sans aspérité — une voix qu'on oublie en l'entendant. « Les murs du Conseil ont des oreilles. Je suis l'une d'elles. »
- **Relations** : `NPC_GRA_08` (Chancelier — employeur) ; `NPC_GRA_91` (Marchand Leprechaun — surveillé) ; `NPC_GRA_93` (Trafiquant — sait qu'il est un intermédiaire) ; `NPC_GRA_27` (Vice-Chancelier — sait qu'il enquête sur le Lord).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_88_01` | K0 | secretaire, conseil | Son rôle officiel — prise de notes, archivage des débats | — |
| 2 | `QI_GRA_88_02` | K0 | espionnage, granzam | Les pratiques d'espionnage à Granzam | — |
| 3 | `QI_GRA_88_03` | K0 | alliances, granzam | Les alliances officielles de Granzam — Brokkheim, Alne, Voulg | — |
| 4 | `QI_GRA_88_04` | K1 | leprechaun, secret | Le Marchand Leprechaun `NPC_GRA_91` négocie avec Voulg en secret | `AFF>=60` |
| 5 | `QI_GRA_88_05` | K1 | salamander, balrog | Un messager a dit « Le Balrog `NPC_VOU_04` sait. Il faut le faire taire. » | `AFF>=65` |
| 6 | `QI_GRA_88_06` | K1 | trafic, mithril | Du mithril part de Granzam vers des destinataires inconnus — sans passer par la comptabilité | — |
| 7 | `QI_GRA_88_07` | K2 | trafiquant, reseau | Le Trafiquant `NPC_GRA_93` est le nœud du réseau — gemmes, mithril, informations | `AFF>=85` |
| 8 | `QI_GRA_88_08` | K2 | vice_chancelier, financement | Le Vice-Chancelier `NPC_GRA_27` finance un projet — l'or falsifié de l'Intendant `NPC_GRA_87` | `QUEST:QST_GRA_OMBRE_DU_CONSEIL` |
| 9 | `QI_GRA_88_09` | K3 | reseau, inter_cites, seed | Le trafic de gemmes et de mithril entre Granzam, Brokkheim, Voulg, Alne et Gatorisande n'est pas un simple marché noir — c'est un réseau de distribution de seeds de duplication. Les gemmes noires du Nécromancien `NPC_GRA_84` transportent des fragments de seed qui permettent de dupliquer des ressources d'une ville à l'autre, créant une inflation parallèle de l'économie du jeu | JAMAIS — déflection : *(il range ses notes)* « Je ne suis qu'un secrétaire. Je note ce que j'entends. Je n'interprète pas. » |
| 10 | `QI_GRA_88_10` | KX | *(hors sujet)* | *(il écrit dans un registre)* « Les mots écrits restent. Les mots parlés s'envolent. Mais moi, je les rattrape. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!renseignement <cible>` (donne un secret mineur sur un PNJ).
- Porteur du fil **🔥 Rivalité de Sang** (liaison Leprechaun-Salamander contre Granzam).
- Donneur de `QST_GRA_OMBRE_DU_CONSEIL` : enquête sur le réseau de trafic inter-cités.

## 5. Intégration Bot

- **Accueil** (`!parler ombre_conseil`) : *Assis dans un coin de la salle, une plume à la main, il lève à peine les yeux.* « Tu veux noter quelque chose ? Je peux noter. Je note tout. »
- `!renseignement <cible>` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « réseau de distribution de seeds de duplication » pour l'orchestrateur.
