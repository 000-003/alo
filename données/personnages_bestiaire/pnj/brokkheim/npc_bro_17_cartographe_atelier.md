# 🔨 Cartographe Atelier — `NPC_BRO_17`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_17` |
| **Nom affiché** | Cartographe Atelier |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Cartes de l'Atelier Englouti) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Englouti |
| **Niveau / HP / MP** | 25 / 3 200 / 5 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Cartographe de l'Atelier s'est installé près de l'entrée du donjon pour vendre des cartes aux explorateurs. Ses cartes sont… imprécises. Parfois les salles se déplacent. Parfois les couloirs n'existent plus le lendemain. Il le sait, il le mentionne en riant, mais il vend quand même. Il est le seul à avoir pénétré dans l'Atelier Englouti et à en être ressorti — trois fois. La quatrième, il a passé six jours à l'intérieur et n'a aucun souvenir de ce qui s'est passé.
- **Traits** : excentrique, dessine partout, sur les murs, sur ses mains ; il oublie les visages mais se souvient des couloirs.
- **Voix** : distraite, comme s'il parlait à quelqu'un d'autre en même temps. « La carte est à jour. Enfin, à jour d'il y a trois jours. Et encore, le couloir 7 s'est peut-être déplacé. Mais globalement, c'est à jour. »
- **Relations** : Gardien Atelier `NPC_BRO_16` (client régulier, ne rentre jamais) ; Concierge Forge-Mère `NPC_BRO_20` (se plaint que ses cartes encombrent les couloirs) ; Réparateur `NPC_BRO_46` (lui a acheté une carte des niveaux inférieurs).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_17_01` | K0 | cartes, atelier | Vente de cartes de l'Atelier Englouti — la disposition change régulièrement | — |
| 2 | `QI_BRO_17_02` | K0 | entrees, sorties | Il connaît les trois entrées connues de l'Atelier — la quatrième n'est sur aucune carte | — |
| 3 | `QI_BRO_17_03` | K0 | prix, mises, jour | Les cartes sont vendues avec une mise à jour gratuite — « Si le couloir a bougé, reviens, je te le redessine. » | — |
| 4 | `QI_BRO_17_04` | K1 | sejour, perte | Il a passé six jours dans l'Atelier — il ne se souvient de rien de cette période | `AFF>=60` |
| 5 | `QI_BRO_17_05` | K1 | salles, deplacement | Les salles se déplacent — l'Atelier est vivant, il respire et il se reconfigure | `AFF>=65` |
| 6 | `QI_BRO_17_06` | K1 | reparateur, carte | Le Réparateur `NPC_BRO_46` a acheté une carte des niveaux inférieurs — « Il cherchait quelque chose. Un automate perdu. » | — |
| 7 | `QI_BRO_17_07` | K2 | six, jours, souvenirs | Pendant les six jours perdus, il a dessiné sur ses bras — des symboles qu'il ne comprend pas mais qui forment une carte | `AFF>=85` |
| 8 | `QI_BRO_17_08` | K2 | quatrieme, entree | La quatrième entrée mène au niveau −7 — l'antichambre du Pouls `NPC_BRO_00` | `QUEST:QST_BRO_ATELIER_01` |
| 9 | `QI_BRO_17_09` | K3 | carte, bras, code | Les symboles sur ses bras ne sont pas une carte de l'Atelier — c'est un morceau du code source de la zone. Il a rapporté des lignes de code gravées sur sa peau | JAMAIS — déflection : *(il cache ses bras sous ses manches)* « Mes dessins ? C'est personnel. Des notes. Rien d'important. » *(il rit nerveusement)* « Pourquoi tu veux voir mes bras ? Y a rien. Vraiment. » |
| 10 | `QI_BRO_17_10` | KX | *(hors sujet)* | *(il dessine sur un coin de table)* « Tiens, un nouveau couloir. Il était pas là hier. Je l'appelle le Couloir des Sourires. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!buy_map_dun_001` (achat de carte), `!map_update` (mise à jour).
- Connecté au fil **🔨 Le Pouls** via la quatrième entrée.

## 5. Intégration Bot

- **Accueil** (`!parler cartographe atelier`) : *(sans te regarder, il dessine sur un parchemin)* « Carte de l'Atelier Englouti. Garantie… disons, partiellement. Si tu te perds, c'est pas ma faute. Enfin, c'est un peu ma faute, mais je rembourse pas. » |
- `!buy_map_dun_001` (achat), `!map_update` (mise à jour).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « code source gravé sur la peau » réservé à l'orchestrateur.
