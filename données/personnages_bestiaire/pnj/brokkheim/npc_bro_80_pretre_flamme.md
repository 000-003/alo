# 🔨 Prêtre Flamme — `NPC_BRO_80`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_80` |
| **Nom affiché** | Prêtre Flamme |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Autel Résurrection |
| **Niveau / HP / MP** | 20 / 800 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Prêtre du feu à l'Autel Résurrection. Il maintient la flamme qui ne doit jamais s'éteindre — le feu sacré qui relie les forgerons à leur ancrage. Mais depuis trois lunes, la flamme vacille sans raison, comme si quelqu'un puisait dedans. Angle : Flamme ne s'éteint pas.
- **Traits** : Dévot, anxieux, murmure des prières.
- **Voix** : Grave, monocorde, empreinte d'échos. « La flamme ne s'éteint pas. Elle se souvient. »
- **Relations :** `NPC_BRO_81` (prêtresse des forges, collègue), `NPC_BRO_82` (acolyte), `NPC_BRO_83` (vestale).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_80_01` | K0 | autel, resurrection | L'Autel Résurrection : lieu où les forgerons renaissent par le feu | — |
| 2 | `QI_BRO_80_02` | K0 | flamme, sacree | La flamme sacrée brûle depuis la fondation de Brokkheim | — |
| 3 | `QI_BRO_80_03` | K0 | rituel, feu | Rituel quotidien : alimenter la flamme avec du charbon de forge | — |
| 4 | `QI_BRO_80_04` | K1 | flamme, vacille | La flamme vacille à minuit et à midi — comme si quelqu'un respirait dessus | — |
| 5 | `QI_BRO_80_05` | K1 | pouls, flamme | Quand le Pouls bat fort, la flamme monte — il y a un lien | `AFF>=60` |
| 6 | `QI_BRO_80_06` | K1 | cendres, folles | Les cendres de l'autel dessinent des runes qu'il n'a jamais apprises | `AFF>=65` |
| 7 | `QI_BRO_80_07` | K2 | flamme, volee | Quelqu'un vole de la flamme — le niveau baisse alors que personne ne touche à l'autel | `AFF>=80` |
| 8 | `QI_BRO_80_08` | K2 | resurrection, rate | La dernière résurrection a échoué — le forgeron est revenu sans étincelle | `AFF>=85+QUEST:QST_BRO_FEU_01` |
| 9 | `QI_BRO_80_09` | K3 | flamme, source | La flamme ne brûle pas du charbon — elle brûle le temps de forge de chaque Leprechaun qui meurt. Si la flamme s'éteint, Brokkheim oublie comment forger | JAMAIS — déflection : *(il souffle sur la flamme qui vacille)* « Ne t'approche pas trop. La flamme est la mémoire de ce que nous avons perdu. » |
| 10 | `QI_BRO_80_10` | KX | *(hors sujet)* | « Le feu purifie. Mais parfois il efface. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!resurrect` — résurrection par le feu (si flamme stable).
- Hook flamme volée : `QST_BRO_FLAMME_VOLEE`.

## 5. Intégration Bot

- **Accueil :** « La flamme t'accueille. Reste près d'elle. »