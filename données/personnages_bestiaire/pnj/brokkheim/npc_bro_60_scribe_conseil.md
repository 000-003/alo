# 🔨 Scribe Conseil — `NPC_BRO_60`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_60` |
| **Nom affiché** | Scribe Conseil |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (notation des édits du Conseil des Guildes) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (salle des archives) |
| **Niveau / HP / MP** | 25 / 1 800 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il note chaque édit du Conseil des Guildes — le moindre mot prononcé en séance. Mais depuis l'arrivée de l'Ombre `NPC_BRO_67`, certains mots s'effacent du parchemin une fois la nuit tombée. Il a d'abord cru à un défaut d'encre. Puis il a vu le mot « Enclume » disparaître en temps réel, comme raturé par une main invisible. Il note les édits effacés dans un grimoire secret.
- **Traits** : discret, plume infaillible, peur bleue de l'Ombre.
- **Voix** : murmure professionnel — on l'entend à peine, comme s'il dictait à son papier plutôt qu'à son interlocuteur.
- **Relations** : Ombre Conseil `NPC_BRO_67` (le terrifie) ; Huissier Conseil `NPC_BRO_61` (son protecteur déclaré, mais inefficace) ; Vétéran Guerres `NPC_BRO_55` (le fait chanter sur le faux-scellé, réciproquement).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_60_01` | K0 | conseil, edicts | Le fonctionnement du Conseil des Guildes : séances, édits, protocole | — |
| 2 | `QI_BRO_60_02` | K0 | scribe, metier | L'art de la notation : vitesse, encres, sceaux | — |
| 3 | `QI_BRO_60_03` | K0 | archives, acces | Consultation des archives du Conseil (procédure publique) | — |
| 4 | `QI_BRO_60_04` | K1 | mots, effaces | Des mots s'effacent des parchemins la nuit — il a perdu trois édits complets | `AFF>=60` |
| 5 | `QI_BRO_60_05` | K1 | ombre, presence | Les effacements ont commencé avec l'arrivée de `NPC_BRO_67` au Conseil | — |
| 6 | `QI_BRO_60_06` | K1 | grimoire, secret | Il tient un grimoire où il recopie les mots effacés avant qu'ils ne disparaissent | `AFF>=70` |
| 7 | `QI_BRO_60_07` | K2 | mot, enclume | Le mot « Enclume » s'efface le plus souvent — interdit de mention | `AFF>=80` |
| 8 | `QI_BRO_60_08` | K2 | edite, falsifie | Un édit entier a été falsifié le mois dernier — la version du grimoire diffère de l'archive officielle | `AFF>=90` |
| 9 | `QI_BRO_60_09` | K3 | ombre, effaceur | L'Ombre `NPC_BRO_67` n'efface pas les mots : il les aspire dans un artefact qu'il porte au cou. Les mots rejoignent un lexique que le Cardinal consulte pour mesurer ce que Brokkheim sait de l'Enclume | JAMAIS — déflection : *(sa plume tremble un instant, puis se pose)* « L'encre vieillit. Le parchemin se dégrade. Les mots s'effacent avec le temps, c'est naturel. Le Conseil est ancien, ses documents aussi. » |
| 10 | `QI_BRO_60_10` | KX | *(tout le reste)* | « Je scribe. Je ne commente pas. Si tu veux un commentaire, adresse-toi au crieur. » | — |

## 4. Chaînage économique & quêtes

- Service : accès aux archives du Conseil (consultation payante).
- K3 : l'Ombre comme collecteur de mots pour le Cardinal — fil méta.
- `QST_BRO_EDIT_01` : découvrir ce qui efface les édits du Conseil.

## 5. Intégration Bot

- **Accueil** (`!parler scribe_conseil`) : *« L'encre sèche, le parchemin jaunit, les mots restent. Enfin, certains. »*
- `!archives_conseil [edit_id]` : consultation d'un édit public.
