# ⛏️ Vétéran des Guerres — `NPC_GRA_55`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_55` |
| **Nom affiché** | Vétéran des Guerres |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte des Convois |
| **Niveau / HP / MP** | 92 / 18 400 / 3 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien commandant des patrouilles des Carrières pendant les Guerres Leprechaunes, il a signé le cessez-le-feu à la Porte des Convois il y a trente ans. Aujourd'hui retraité, il passe ses journées à observer les allées et venues. Il sait que le traité n'a jamais été ratifié par le Cardinal — seulement par les Lords des deux clans. Il a gardé une copie du traité original, dont un paragraphe manquant rédigé dans une langue qu'il ne reconnaît pas. Depuis que la Sentinelle (`NPC_GRA_56`) lui a parlé des nouveaux patrouilleurs Leprechauns, il craint que la paix ne soit qu'un répit. (Angle : sait quel traité cache la paix.)
- **Traits** : las, lucide, amer, loyal.
- **Voix** : Voix éraillée, comme une pierre qu'on roule. « J'ai enterré trop de gnomes pour croire à la paix. Le traité n'est qu'un sursis. »
- **Relations** : `NPC_GRA_56` (Sentinelle — source d'info), `NPC_GRA_95` (Vétéran Convois — ancien soldat), `NPC_GRA_09` (Commandant — l'a remplacé), `NPC_GRA_06` (Margrim — seul à qui il fait confiance).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_55_01` | K0 | guerre, leprechaun | Il a combattu pendant les Guerres Leprechaunes il y a trente ans. | — |
| 2 | `QI_GRA_55_02` | K0 | traité, paix | Le traité de paix a été signé à la Porte des Convois. | — |
| 3 | `QI_GRA_55_03` | K0 | porte_convois, veteran | Il passe ses journées à la Porte des Convois, assis sur un banc de pierre. | — |
| 4 | `QI_GRA_55_04` | K1 | traité, copie | Il a gardé une copie personnelle du traité. Un paragraphe est dans une langue inconnue. | `AFF>=60` |
| 5 | `QI_GRA_55_05` | K1 | ratification, cardinal | Le Cardinal n'a jamais ratifié le traité. Seuls les Lords des deux clans l'ont signé. | `AFF>=65` |
| 6 | `QI_GRA_55_06` | K1 | sentinelle, patrouille | La Sentinelle (`NPC_GRA_56`) a vu des patrouilles Leprechaunes franchir la frontière. | — |
| 7 | `QI_GRA_55_07` | K2 | langue, inconnue | La langue du paragraphe manquant ressemble à du langage sismique — des runes qui vibrent. | `AFF>=85` |
| 8 | `QI_GRA_55_08` | K2 | paix, armistice | « La paix n'est qu'un armistice. Le Cardinal nous prépare à quelque chose. Les Leprechauns aussi. » | `QUEST:QST_GRA_TRAITE_PERDU` |
| 9 | `QI_GRA_55_09` | K3 | traité, cardinal | Le traité a été signé par le Cardinal via le Noyau de Pierre — une clause secrète lie les deux seeds miniers des deux territoires en un seul protocole serveur. | JAMAIS — déflection : *(il plie la copie du traité et la glisse dans sa poche)* « Ce papier sent la mort. Je ne le montre plus. » |
| 10 | `QI_GRA_55_10` | KX | *(tout le reste)* | *(il regarde l'horizon)* « Le soleil se couche sur Granzam. Tu trouves ça beau ? Moi je trouve que ça ressemble à un incendie. » | — |

## 4. Chaînage économique & quêtes

- Porteur du fil **🔥 Rivalité de Sang** (traité non ratifié, paix illusoire).
- Donneur de `QST_GRA_TRAITE_PERDU` : enquêter sur le paragraphe manquant du traité, découvrir la clause liant les deux seeds.

## 5. Intégration Bot

- **Accueil** (`!parler veteran`) : *Assis sur un banc, il vous regarde de ses yeux fatigués.* « T'as pas la gueule d'un mineur. T'es qui, toi ? »
- Donneur de quête `QST_GRA_TRAITE_PERDU`.
- `NPC_SECRET_PROBED` slot 9 : hook « traité = protocole serveur inter-seed » pour l'orchestrateur.