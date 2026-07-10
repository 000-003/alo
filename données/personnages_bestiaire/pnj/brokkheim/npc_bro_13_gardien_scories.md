# 🔨 Gardien Scories — `NPC_BRO_13`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_13` |
| **Nom affiché** | Gardien Scories |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (Gardien des Champs de Scories — HUNT_002) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Champs de Scories |
| **Niveau / HP / MP** | 50 / 9 500 / 2 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien des Scories patrouille la zone de chasse des Champs de Scories — un terrain vague où les résidus de forge s'accumulent depuis des décennies. Des bêtes étranges, attirées par la chaleur résiduelle, rodent entre les monticules de déchets. Le Gardien suit les ordres du Commandant `NPC_BRO_09`, mais il applique sa propre loi : il laisse entrer ceux qui paient et refuse ceux qui ne lui reviennent pas.
- **Traits** : corrompu, opportuniste, regarde ailleurs quand ça l'arrange ; il a ses entrées dans le marché noir.
- **Voix** : râpeuse. « Les scories, c'est pas la Vallée. Ici, ce qui brille est pas toujours du métal. Parfois c'est des yeux. »
- **Relations** : Commandant Gardes `NPC_BRO_09` (supérieur — il lui cache ses pots-de-vin) ; Pisteur Scories `NPC_BRO_14` (collègue, le respecte mais ne l'aime pas) ; Marchand Scories `NPC_BRO_15` (reçoit une commission) ; Receleur `NPC_BRO_48` (laisse passer ses marchandises).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_13_01` | K0 | scories, acces | Il contrôle l'accès aux Champs de Scories — zone de chasse HUNT_002 | — |
| 2 | `QI_BRO_13_02` | K0 | betes, chaleur | Des bêtes attirées par la chaleur résiduelle rodent entre les monticules | — |
| 3 | `QI_BRO_13_03` | K0 | terrain, vague | Les Champs de Scories sont un terrain vague à l'est de Brokkheim | — |
| 4 | `QI_BRO_13_04` | K1 | pot, vin | Les pots-de-vin qu'il reçoit — il laisse entrer des gens « sans papiers » | `AFF>=60` |
| 5 | `QI_BRO_13_05` | K1 | receleur, passage | Il laisse passer les marchandises du Receleur `NPC_BRO_48` contre rémunération | `AFF>=65` |
| 6 | `QI_BRO_13_06` | K1 | commandant, cache | Il cache ses activités au Commandant `NPC_BRO_09` — « Il a assez de problèmes comme ça. » | — |
| 7 | `QI_BRO_13_07` | K2 | trafiquant, gnome | Il a vu un Trafiquant Gnome `NPC_BRO_93` échanger des marchandises dans les scories la nuit | `AFF>=85` |
| 8 | `QI_BRO_13_08` | K2 | scories, profond | Certaines scories gardent la chaleur de la forge pendant des semaines — elles sont vivantes | `QUEST:QST_BRO_BETES_01` |
| 9 | `QI_BRO_13_09` | K3 | betes, scories, forgees | Les bêtes des Champs de Scories ne sont pas nées — elles ont été forgées. Des expériences de la Forge-Mère, des échecs que Brokk IX `NPC_BRO_01` a jetés et qui ont pris vie | JAMAIS — déflection : *(il crache sur une scorie. Elle grésille.)* « Tu veux savoir ce qui vit dans les scories ? Des choses qui auraient pas dû vivre. Des choses que Brokk IX a fabriquées et jetées. Y a pas de honte à les tuer — c'est les achever. » |
| 10 | `QI_BRO_13_10` | KX | *(hors sujet)* | *(il désigne un monticule de scories)* « Y a une dent dedans. Une dent de quoi, je sais pas. Mais elle est grosse. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!hunt_access_bro_002` (accès zone de chasse).
- Connecté au fil **⛏️ La Rivalité des Mineurs** via `NPC_BRO_93`.

## 5. Intégration Bot

- **Accueil** (`!parler gardien scories`) : *(il s'appuie contre un monticule de scories encore chaudes)* « Les scories t'attendent. Et ce qui vit dedans aussi. T'as de l'Yrd ? Alors entre. » |
- `!hunt_access_bro_002` (accès HUNT_002).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « bêtes forgées par Brokk IX » réservé à l'orchestrateur.
