# 🔨 Marchand Vol — `NPC_BRO_19`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_19` |
| **Nom affiché** | Marchand Vol |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Potions de vol) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Route Aérienne (îlot) |
| **Niveau / HP / MP** | 30 / 3 500 / 6 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Installé sur un îlot suspendu le long de la Route Aérienne, le Marchand Vol vend des potions qui permettent de voler — des mixtures instables, à base de vapeur de geyser condensée. Il les fabrique lui-même dans un alambic de fortune. Ses potions fonctionnent, mais pas toujours comme prévu : certains clients ont flotté au lieu de voler, d'autres se sont retournés, un a他甚至 atterri dans la Vallée des Geysers à l'envers. Il s'approvisionne en ingrédients auprès de l'Alchimiste Eaux `NPC_BRO_28`.
- **Traits** : optimiste malgré les accidents, improvise tout le temps, n'a jamais de monnaie.
- **Voix** : rapide, enthousiaste. « Potion de vol ! Fraîche du jour ! Celle d'hier a fait planer un client pendant six heures ! (il marque une pause) Bon, six heures dans le mauvais sens, mais il a volé ! »
- **Relations** : Alchimiste Eaux `NPC_BRO_28` (fournisseur d'ingrédients) ; Vigie Route `NPC_BRO_18` (la méfiante — elle a raison, il trafique ses déclarations) ; Prêteur Fenn `NPC_BRO_05` (lui doit de l'argent).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_19_01` | K0 | potion, vol | Vente de potions de vol — instables mais efficaces | — |
| 2 | `QI_BRO_19_02` | K0 | ilot, route | Son étal est sur un îlot suspendu — accessible par la Route Aérienne | — |
| 3 | `QI_BRO_19_03` | K0 | prix, risque | Les prix sont bas — « Le risque fait partie du voyage ! » | — |
| 4 | `QI_BRO_19_04` | K1 | ingredients, eau | Il s'approvisionne auprès de l'Alchimiste Eaux `NPC_BRO_28` — « La meilleure eau de Brokkheim ! » | `AFF>=60` |
| 5 | `QI_BRO_19_05` | K1 | accidents, potions | Ses potions ont des effets imprévisibles — vol inversé, flottaison stationnaire, atterrissage forcé | `AFF>=65` |
| 6 | `QI_BRO_19_06` | K1 | preteur, dette | Il doit de l'argent au Prêteur Fenn `NPC_BRO_05` — il rembourse en potions | — |
| 7 | `QI_BRO_19_07` | K2 | cargaison, cachee | Il cache des objets dans ses caisses de potions — de petits automates démontés | `AFF>=85` |
| 8 | `QI_BRO_19_08` | K2 | alambic, vapeur | Son alambic utilise de la vapeur du geyser silencieux — la même que celle qui sent le cuivre brûlé | `QUEST:QST_BRO_ROUTE_01` |
| 9 | `QI_BRO_19_09` | K3 | potion, code | Les potions de vol ne sont pas chimiques — elles modifient temporairement le paramètre de gravité du joueur dans le code du serveur. Ses potions sont des injections de commandes, déguisées en mixtures | JAMAIS — déflection : *(il cesse de sourire)* « La potion, elle te fait voler. C'est tout ce que t'as besoin de savoir. Le reste… c'est de la mécanique. Et la mécanique, c'est mon affaire. » *(il te tourne le dos et range son alambic.)* |
| 10 | `QI_BRO_19_10` | KX | *(hors sujet)* | *(il agite une fiole. Le liquide à l'intérieur a des reflets de code — des 1 et des 0 dansent dedans)* | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!buy_flying_potion` (achat potion de vol), `!potion_risk` (avertissement).
- Connecté au fil **💧 Le Pacte des Eaux** via `NPC_BRO_28`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand vol`) : *(il te voit arriver et lève une fiole)* « Potion de vol ? T'as l'air solide. Bon, je disais ça au dernier client aussi, il a fini dans le bassin de refroidissement. Mais il a volé ! Pendant trois secondes ! » |
- `!buy_flying_potion` (achat).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « potions = injection de commandes serveur » réservé à l'orchestrateur.
