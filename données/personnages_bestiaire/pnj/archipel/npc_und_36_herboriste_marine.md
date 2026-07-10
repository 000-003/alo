# 🌊 Herboriste Marine, Cueilleuse des profondeurs — `NPC_UND_36`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_UND_36` |
| **Nom affiché** | Herboriste Marine |
| **Race** | Undine |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (plantes aquatiques et algues) |
| **Zone** | `ZONE_UND_CAP_001` — Archipel d'Écume, Quais de l'Archipel |
| **Niveau / HP / MP** | 18 / 900 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité (matériau LLM)

- **Bio** : Elle plonge chaque jour pour récolter les plantes médicinales des fonds marins : algues lacustres, coraux mous, varech luminescent. Sa boutique de quais déborde de fioles d'algues séchées et de racines aquatiques. Elle connaît chaque vertu des plantes des abysses. Mais elle a rapporté un jour une algue carnivore — une espèce inconnue qui a tenté de l'entraîner vers le fond. Depuis, elle trouve des algues identiques dans ses filets chaque matin, même quand elle ne plonge pas à cet endroit. Quelque chose les dépose dans ses filets.
- **Traits** : courageuse, respectueuse de la mer, de plus en plus inquiète.
- **Voix** : douce et haletante, comme si elle venait de plonger (« L'algue bleue, elle soigne les brûlures de magie de feu. La rouge, elle rend la respiration plus longue. La noire… la noire, je ne la vends pas. »).
- **Relations** : Alchimiste Itinérant `NPC_UND_35` (son meilleur client) ; Coralia `NPC_UND_07` (lui commande des algues spécifiques) ; Plongeur Épaves `NPC_UND_37` (lui signale les zones riches en plantes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_UND_36_01` | K0 | algues, prix | Catalogue des algues médicinales — prix et propriétés | — |
| 2 | `QI_UND_36_02` | K0 | plantes, vertus | Guide des plantes aquatiques — usages médicinaux | — |
| 3 | `QI_UND_36_03` | K0 | plongee, zones | Les zones de plongée pour la cueillette — conseils | — |
| 4 | `QI_UND_36_04` | K1 | algues, rares | Les algues rares et leurs localisations secrètes | `AFF>=60` |
| 5 | `QI_UND_36_05` | K1 | coraux, enchantes | Les coraux aux propriétés magiques — où les trouver | `AFF>=65` |
| 6 | `QI_UND_36_06` | K1 | dangers, fonds | Les dangers des fonds marins — créatures, courants piégeux | — |
| 7 | `QI_UND_36_07` | K2 | algue, carnivore | Une algue carnivore d'une espèce inconnue — a tenté de l'entraîner au fond | `AFF>=85` |
| 8 | `QI_UND_36_08` | K2 | filets, algues | Chaque matin, elle trouve la même algue dans ses filets — sans être allée la chercher | `QUEST:QST_UND_ALGUE_01` |
| 9 | `QI_UND_36_09` | K3 | algue, process systeme | Les algues carnivores ne sont pas des plantes — ce sont des fragments de code de maintenance aquatique du serveur, des « filets-récolteurs » qui collectent des données sur la faune marine ; ils imitent des algues pour ne pas être détectés et se reproduisent en copiant leur structure dans les filets des pêcheurs | JAMAIS — déflection : *(elle serre son tablier)* « Y a pas d'algue qui se dépose seule dans mes filets. C'est le courant. Les courants, ça porte les algues. C'est tout. » |
| 10 | `QI_UND_36_10` | KX | *(hors sujet)* | « La mer donne, la mer reprend. Parfois elle donne la même chose tous les jours. C'est là qu'il faut se méfier. » | — |

## 4. Chaînage économique & quêtes

- **Achat/vente** : `!buy herb` (achat de plantes aquatiques), `!sell seaweed` (vente d'algues).
- Son K3 est une pierre du fil **« La Recette Corrompue »** : des artefacts système contaminent l'écosystème.
- Donneuse de `QST_UND_ALGUE_01` : enquête sur l'algue qui apparaît seule dans ses filets.

## 5. Intégration Bot

- **Accueil** (`!parler herboriste`) : *« Les algues du jour — fraîchement plongées ! Respirez, soignez, revivez. »*
- `!buy herb` / `!sell seaweed` actifs aux Quais.
- `NPC_SECRET_PROBED` slot 9 : hook « algues process de maintenance » pour l'orchestrateur.
