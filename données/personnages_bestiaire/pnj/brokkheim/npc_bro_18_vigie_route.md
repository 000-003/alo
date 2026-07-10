# 🔨 Vigie Route — `NPC_BRO_18`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_18` |
| **Nom affiché** | Vigie Route |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (Vigie de la Route Aérienne BRO-ALN) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Route Aérienne BRO-ALN |
| **Niveau / HP / MP** | 55 / 10 000 / 2 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : La Vigie monte la garde sur la Route Aérienne qui relie Brokkheim à Alne — un pont de passerelles de cuivre suspendu dans les nuages, au-dessus de la Vallée des Geysers. Elle est là pour protéger les voyageurs des créatures volantes et pour contrôler les marchandises qui entrent et sortent de la capitale. Elle voit tout ce qui passe — littéralement, la route est un point d'observation stratégique. Elle fait partie du fil **🔨 Le Pouls** : elle a remarqué que le trafic fluctue en rythme avec les battements de la forge.
- **Traits** : observatrice, loyale, a un humour sec ; connaît tous les marchands de la route.
- **Voix** : forte, couverte par le vent. « La route est ouverte. Mais si tu transportes des automates sans licence, je te jure que je te balance dans le vide. »
- **Relations** : Commandant Gardes `NPC_BRO_09` (supérieur) ; Marchand Vol `NPC_BRO_19` (surveille ses allées et venues — ne lui fait pas confiance) ; Brokk IX `NPC_BRO_01` (lui a forgé son épée personnellement) ; Vigie Route Alne `NPC_ALN_18` (homologue alnéen, communication par signaux de fumée).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_18_01` | K0 | route, aerienne | Elle garde la Route Aérienne BRO-ALN — un pont de passerelles de cuivre | — |
| 2 | `QI_BRO_18_02` | K0 | trafic, controle | Elle contrôle les marchandises — tout ce qui entre et sort de Brokkheim passe par elle | — |
| 3 | `QI_BRO_18_03` | K0 | creatures, volantes | Des créatures volantes attaquent les voyageurs — elle les connaît toutes | — |
| 4 | `QI_BRO_18_04` | K1 | trafic, rythme | Le trafic sur la route fluctue en rythme avec le Pouls `NPC_BRO_00` — comme si la ville respirait | `AFF>=60` |
| 5 | `QI_BRO_18_05` | K1 | automates, licence | Elle sait que des automates sans licence passent la nuit — le Receleur `NPC_BRO_48` les fait sortir | `AFF>=65` |
| 6 | `QI_BRO_18_06` | K1 | epee, brokk | Brokk IX `NPC_BRO_01` lui a forgé son épée — une lame en alliage de geyser | — |
| 7 | `QI_BRO_18_07` | K2 | marchand, vol, doute | Le Marchand Vol `NPC_BRO_19` lui cache quelque chose — ses cargaisons ne correspondent jamais à ses déclarations | `AFF>=85` |
| 8 | `QI_BRO_18_08` | K2 | signal, alne | Elle communique avec Alne par signaux de fumée — un code que seuls les vigies connaissent | `QUEST:QST_BRO_ROUTE_01` |
| 9 | `QI_BRO_18_09` | K3 | route, pouls, frontiere | La Route Aérienne est construite sur une ligne de faille du serveur — elle marque la frontière entre deux instances. Le Pouls régule le flux de données entre Brokkheim et Alne à travers cette route | JAMAIS — déflection : *(elle regarde le vide, puis te regarde)* « Tu sais pourquoi la route tient dans le ciel ? Parce que quelqu'un a décidé qu'elle devait tenir. Et ce quelqu'un bat à −7. » *(elle pose la main sur le câble de cuivre — il vibre légèrement)* « T'as déjà touché une veine du monde ? » |
| 10 | `QI_BRO_18_10` | KX | *(hors sujet)* | *(elle souffle dans un sifflet — le son porte à des kilomètres)* || — |

## 4. Chaînage économique & quêtes

- **Guard** : `!route_check_bro` (contrôle route), `!route_traffic` (état du trafic).
- Connectée au fil **🔨 Le Pouls** avec `NPC_BRO_00` et fil **⚙️ Les Automates** avec `NPC_BRO_48`.
- Donneuse de `QST_BRO_ROUTE_01` (quête sur le trafic d'automates).

## 5. Intégration Bot

- **Accueil** (`!parler vigie route`) : *(elle siffle entre ses dents)* « Voyageur ou marchand ? Si t'es un marchand, ouvre tes sacs. Si t'es un voyageur, ouvre tes oreilles : la route est longue et le vent est traître. » |
- `!route_check_bro` (contrôle), `!route_traffic` (trafic).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « frontière d'instance entre Brokkheim et Alne » réservé à l'orchestrateur.
