# 🔨 Marchand Scories — `NPC_BRO_15`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_15` |
| **Nom affiché** | Marchand Scories |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Résidus de forge) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Champs de Scories |
| **Niveau / HP / MP** | 30 / 3 800 / 1 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Marchand de Scories parcourt les monticules de déchets de la zone de chasse pour récupérer ce que les forgerons jettent — métaux ratés, alliages cassés, outils brisés. Il revend le tout à prix réduit aux apprentis et aux bricoleurs. Rien de ce qu'il vend n'est parfait, mais rien n'est inutile non plus. Il a un œil pour déceler la valeur cachée dans les rebuts.
- **Traits** : débrouillard, optimiste, parle la bouche pleine de tabac à mâcher ; aime marchander pour le plaisir.
- **Voix** : éraillée, joyeuse. « C'est cassé ? Oui. C'est réparable ? Avec assez d'amour et d'Yrd, tout est réparable. »
- **Relations** : Gardien Scories `NPC_BRO_13` (lui verse une commission) ; Pisteur Scories `NPC_BRO_14` (achète des trophées) ; Apprenti Forgeron `NPC_BRO_21` (client régulier) ; Restaurateur Enclumes `NPC_BRO_24` (lui fournit des enclumes abîmées).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_15_01` | K0 | rebuts, vente | Vente de rebuts de forge — métaux, outils, alliages ratés à prix réduits | — |
| 2 | `QI_BRO_15_02` | K0 | scories, collecte | Il collecte lui-même dans les Champs de Scories — il connaît les bons coins | — |
| 3 | `QI_BRO_15_03` | K0 | prix, negociation | Il négocie toujours — c'est un jeu pour lui | — |
| 4 | `QI_BRO_15_04` | K1 | trouvaille, valeur | Il a trouvé un morceau d'alliage qu'il n'identifie pas — froid, lourd, sans marque de forge | `AFF>=60` |
| 5 | `QI_BRO_15_05` | K1 | apprenti, client | L'Apprenti Forgeron `NPC_BRO_21` vient régulièrement — il cherche du métal pour s'entraîner | `AFF>=65` |
| 6 | `QI_BRO_15_06` | K1 | enclumes, restaure | Le Restaurateur d'Enclumes `NPC_BRO_24` lui prend les enclumes fêlées — « Il les répare ou il les fond, je sais pas. » | — |
| 7 | `QI_BRO_15_07` | K2 | alliage, inconnu | L'alliage qu'il a trouvé vient d'un automate écrasé — pas d'un objet forgé | `AFF>=85` |
| 8 | `QI_BRO_15_08` | K2 | betes, collection | Les bêtes des scories ramassent du métal spécifique — elles trient les rebuts comme si elles avaient un plan | `QUEST:QST_BRO_BETES_01` |
| 9 | `QI_BRO_15_09` | K3 | rebuts, vivants | Certains rebuts qu'il récupère bougent encore — des fragments d'automates qui n'ont pas été complètement désactivés. Ils cherchent à se recomposer dans les scories | JAMAIS — déflection : *(il baisse la voix)* « J'ai vu un bras d'automate ramper tout seul vers un tas de métal. J'ai brûlé le tas. Mais le lendemain, le bras était plus là. Il avait trouvé un autre tas. » *(il rit nerveusement)* « Je rigole. … Enfin, je rigole à moitié. » |
| 10 | `QI_BRO_15_10` | KX | *(hors sujet)* | *(il te tend un morceau de métal tordu)* « Tiens. C'est moche, mais c'est gratuit. La première réparation est toujours gratuite. » | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!buy_scrap` (achat de rebuts), `!scrap_appraisal` (estimation de rebuts).
- Connecté au fil **⚙️ Les Automates** via les fragments d'automates.

## 5. Intégration Bot

- **Accueil** (`!parler marchand scories`) : *(Il fouille dans un tas de métal tordu. Il en sort un engrenage qu'il lèche.)* « Bonne qualité. Enfin, bonne qualité pour un rebut. Tu veux voir ? » |
- `!buy_scrap` (achat), `!scrap_appraisal` (estimation).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « fragments d'automates rampants » réservé à l'orchestrateur.
