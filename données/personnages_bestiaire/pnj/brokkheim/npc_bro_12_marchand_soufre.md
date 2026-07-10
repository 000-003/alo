# 🔨 Marchand Soufre — `NPC_BRO_12`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_12` |
| **Nom affiché** | Marchand Soufre |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Soufre et minerais) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée des Geysers |
| **Niveau / HP / MP** | 35 / 4 500 / 2 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Installé à l'entrée de la Vallée des Geysers, le Marchand Soufre extrait et vend le soufre des évents volcaniques — un composant essentiel pour les alliages de la Forge-Mère. Il travaille seul, refuse toute aide, et ses doigts sont jaunis par des années de contact avec le minéral. Maître Alliage `NPC_BRO_23` est son meilleur client, mais il vend aussi aux particuliers pour des enchantements.
- **Traits** : solitaire, bourru, méfiant ; il soupçonne tout le monde de vouloir voler son gisement.
- **Voix** : rauque, entrecoupée de toux. « Le soufre jaune, c'est pour les alliages. Le soufre noir, c'est pour les enchantements. Touche pas au soufre noir. »
- **Relations** : Maître Alliage `NPC_BRO_23` (meilleur client) ; Guide Vallée `NPC_BRO_11` (lui envoie des clients contre commission) ; Gardien Vallée `NPC_BRO_10` (surveille son commerce).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_12_01` | K0 | soufre, vente | Vente de soufre jaune (alliages) et soufre noir (enchantements) | — |
| 2 | `QI_BRO_12_02` | K0 | geyser, extraction | Il extrait le soufre des évents — un travail dangereux qu'il fait seul | — |
| 3 | `QI_BRO_12_03` | K0 | prix, saison | Les prix varient selon la saison — les éruptions rares font monter les prix | — |
| 4 | `QI_BRO_12_04` | K1 | soufre, noir, interdit | Le soufre noir est considéré comme dangereux — il peut brûler à travers le métal | `AFF>=60` |
| 5 | `QI_BRO_12_05` | K1 | maitre, alliage | Maître Alliage `NPC_BRO_23` achète tout le soufre jaune qu'il extrait — il prépare un grand projet | `AFF>=65` |
| 6 | `QI_BRO_12_06` | K1 | doigts, jaunes | Ses doigts sont jaunis par le soufre — il dit que ça le protège des brûlures | — |
| 7 | `QI_BRO_12_07` | K2 | gisement, veine | Il a trouvé une veine de soufre qui descend plus profond que la vallée — une source inépuisable | `AFF>=85` |
| 8 | `QI_BRO_12_08` | K2 | soufre, noir, pur | Le soufre noir qu'il vend n'est pas naturel — il vient du geyser « dormeur » | `QUEST:QST_BRO_SOUFRE_01` |
| 9 | `QI_BRO_12_09` | K3 | soufre, cardinal | Le soufre noir n'est pas du soufre — c'est un résidu de la couche de données du serveur, un sous-produit du Cardinal qui s'infiltre dans le monde physique de Brokkheim. Il permet de forger des objets qui existent en dehors du dictionnaire | JAMAIS — déflection : *(il recule, ses mains jaunes levées)* « Tu poses trop de questions sur le soufre noir. Va-t'en. Reviens quand tu veux acheter, pas quand tu veux comprendre. » |
| 10 | `QI_BRO_12_10` | KX | *(hors sujet)* | *(il crache par terre — la salive fume)* | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!buy_sulfur` (achat de soufre), `!sulfur_prices` (prix du jour).
- Connecté au fil **🔥 La Trempe Légendaire** via `NPC_BRO_23`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand soufre`) : *(il te jauge du regard, ses doigts jaunes croisés)* « Tu veux du soufre ? J'ai du soufre. Jaune ou noir ? Si tu sais pas la différence, prends du jaune. » |
- `!buy_sulfur` (achat), `!sulfur_prices` (prix).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « résidu de données serveur » réservé à l'orchestrateur.
