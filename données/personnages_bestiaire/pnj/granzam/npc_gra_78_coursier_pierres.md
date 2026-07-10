# ⛏️ Coursier des Pierres — `NPC_GRA_78`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_78` |
| **Nom affiché** | Coursier des Pierres |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, itinérant (Porte → Grande Halle → Mine) |
| **Niveau / HP / MP** | 14 / 700 / 180 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Coursier itinérant qui transporte des messages et des échantillons de minerai entre les quartiers de Granzam. Il court toute la journée, de la Porte à la Grande Halle, de la Mine à la Salle du Conseil. La semaine dernière, il a reçu un pli scellé destiné au Lord Gnome (`NPC_GRA_07`). En courant, le pli est tombé de sa sacoche. Quand il l'a ramassé, l'encre avait coulé — les mots étaient illisibles, comme si le message s'était dissous. Depuis, il trouve des bouts de parchemin tombés dans ses poches, avec des fragments de texte qui ne sont pas de lui. **Angle** : Un pli qui tombe et se défait.
- **Traits** : rapide, distrait, curieux malgré lui, fatigue chronique.
- **Voix** : Essoufflée, pressée, entrecoupée de « faut que j'y aille ». « Le pli ? Quel pli ? J'ai perdu quelque chose ? Ah, celui-là… il est… il était… tu l'as lu ? »
- **Relations** : `NPC_GRA_07` (Lord Gnome — destinataire du pli perdu) ; `NPC_GRA_27` (Vice-Chancelier — lui confie les messages du Conseil) ; `NPC_GRA_79` (Guide — croise souvent son chemin).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_78_01` | K0 | coursier, itineraire | Sa tournée quotidienne — Porte, Halle, Conseil, Mine | — |
| 2 | `QI_GRA_78_02` | K0 | message, transport | Service de messagerie interne de Granzam | — |
| 3 | `QI_GRA_78_03` | K0 | granzam, circulation | Les axes de circulation dans Granzam — il les connaît tous | — |
| 4 | `QI_GRA_78_04` | K1 | pli, perte | Il a perdu un pli scellé pour le Lord — l'encre a coulé en tombant | `AFF>=60` |
| 5 | `QI_GRA_78_05` | K1 | parchemin, fragment | Des fragments de texte apparaissent dans ses poches — il ne les a pas écrits | `AFF>=65` |
| 6 | `QI_GRA_78_06` | K1 | vice_chancelier, message | Le Vice-Chancelier `NPC_GRA_27` lui a confié le pli — « urgent et confidentiel » | — |
| 7 | `QI_GRA_78_07` | K2 | encre, disparition | L'encre du pli se dissout au contact de l'air — comme un message à durée limitée | `AFF>=85` |
| 8 | `QI_GRA_78_08` | K2 | lord, absence | Il n'a jamais remis le pli au Lord — il n'a pas trouvé la Salle du Conseil ce jour-là, les couloirs avaient changé | `QUEST:QST_GRA_PLI_PERDU` |
| 9 | `QI_GRA_78_09` | K3 | pli, seed, message | Le pli n'était pas un message politique — c'était un fichier de configuration du Cardinal, encodé dans une encre thermosensible qui se désintègre à l'air libre. Le Vice-Chancelier transmet des mises à jour système déguisées en courrier officiel | JAMAIS — déflection : *(il regarde sa sacoche vide)* « J'ai dû le perdre. C'est pas grave. C'était juste un mot. Les mots, ça se perd. » |
| 10 | `QI_GRA_78_10` | KX | *(hors sujet)* | *(il boit une gourde à toute vitesse)* « Coursier, c'est courir. Je cours, je livre, je repars. Pas le temps de causer. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!coursier <destinataire>` (envoi de messages intra-cité).
- Porteur du fil **🔮 Le Noyau de Pierre** (le pli perdu contient une update système du Cardinal).
- Donneur de `QST_GRA_PLI_PERDU` : retrouver le pli et déchiffrer son contenu.

## 5. Intégration Bot

- **Accueil** (`!parler coursier`) : *Il passe en courant, s'arrête net, rebrousse chemin.* « Ouais ? Un message ? J'ai pas le temps mais… pour toi je peux. Vas-y, crache. »
- `!coursier <destinataire>` actif dans toute la zone.
- `NPC_SECRET_PROBED` slot 9 : hook « pli = update système du Cardinal » pour l'orchestrateur.
