# 🔨 Marchand d'Eau Pure — `NPC_BRO_26`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_26` |
| **Nom affiché** | Marchand d'Eau Pure |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (eau de trempe, eau pure des geysers) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Canaux de Refroidissement |
| **Niveau / HP / MP** | 14 / 720 / 580 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchande spécialisée dans l'eau de trempe la plus pure de Brokkheim. Elle capte l'eau des geysers les plus profonds, là où le Pouls est le plus fort. Sa marchandise est prisée par les forgerons légendaires. Son eau « pleure » quand on la laisse reposer — des gouttes qui remontent seules dans le contenant, comme si elles refusaient le calme. Angle : la goutte qui pèse est liée au Pacte des Eaux et aux Undines. Elle entretient un contact discret avec l'Undine `NPC_BRO_91`.
- **Traits** : sereine en surface, intense sous l'eau calme, méticuleuse, gardienne de secrets liquides.
- **Voix** : murmure qui coule (« L'eau se souvient de tout. Surtout de ce qu'on lui confie. »).
- **Relations** : `NPC_BRO_91` (contact Undine) ; `NPC_BRO_28` (achète son eau pour alchimie) ; `NPC_BRO_25` (lui vend des poissons tests de pureté) ; `NPC_BRO_40` (eau de trempe pour finitions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_26_01` | K0 | eau, trempe | Eau de trempe : grades standards, prix (15-100 Yrds le litre) | — |
| 2 | `QI_BRO_26_02` | K0 | geyser, captage | Comment elle capte l'eau aux geysers du Pouls | — |
| 3 | `QI_BRO_26_03` | K0 | purete, test | Tests de pureté : le poisson du `NPC_BRO_25` nage 24h dans l'eau | — |
| 4 | `QI_BRO_26_04` | K1 | goutte, remonte | Ses fioles d'eau pure : la goutte remonte seule après 24h de repos | — |
| 5 | `QI_BRO_26_05` | K1 | pacte, eaux | Un ancien pacte lie Brokkheim aux Esprits des Eaux — elle en est la gardienne | `AFF>=60` |
| 6 | `QI_BRO_26_06` | K1 | undine, 91 | Une Undine (`NPC_BRO_91`) lui rend visite la nuit — elle vérifie la pureté de l'eau | `AFF>=65` |
| 7 | `QI_BRO_26_07` | K2 | eau, qui pleure | L'eau « pleure » quand un feu du Cardinal va mal — système d'alerte liquide | `AFF>=80` |
| 8 | `QI_BRO_26_08` | K2 | fosse, profonde | Sous le canal n°7, une fosse d'eau pure sans fond communique avec le plan des Undines | `AFF>=85+QUEST:QST_BRO_EAUX_01` |
| 9 | `QI_BRO_26_09` | K3 | fosse, coeur des eaux | La fosse sous le canal 7 est un fragment du Cœur des Eaux primordiales — un morceau du plan d'existence des Undines, ramené par le premier Leprechaun forgeron pour sceller le Pacte | JAMAIS — déflection : *(elle verse de l'eau entre ses doigts, attentive aux reflets)* « L'eau est pure. C'est tout ce que tu dois savoir. Pose trop de questions et elle pourrait se troubler. Et une eau troublée ne sert à personne. » |
| 10 | `QI_BRO_26_10` | KX | *(hors sujet)* | « L'eau pure n'existe pas. Elle est toujours mêlée de quelque chose. De temps, de mémoire, de silence. » | — |

## 4. Chaînage économique & quêtes

- **Marchande d'eau** : `!buy_water` (eau de trempe). Hub du **fil Pacte des Eaux**.
- Quête `QST_BRO_EAUX_01` : enquêter sur la fosse sous le canal 7.
- Lien avec `NPC_BRO_91` (Undine) — point d'accès vers le plan des Esprits des Eaux.

## 5. Intégration Bot

- **Accueil** (`!parler eau_pure`) : *« L'eau coule, le monde tourne. Que veux-tu ? »*
- `!buy_water` — catalogue des eaux (qualités, prix, effets).
- `NPC_SECRET_PROBED` slot 9 : hook « fosse/Cœur des Eaux » pour l'orchestrateur.
