# 🕯️ Marchand Eaux — `NPC_PEN_26`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_26` |
| **Nom affiché** | Marchand Eaux |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Eau des Citernes) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Citernes Antiques |
| **Niveau / HP / MP** | 4 / 280 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il vend l'eau des Citernes Antiques — une eau grise, lourde, qui ne s'évapore jamais. Il prétend qu'elle guérit tout. En réalité, elle ne fait pas de mal, mais elle ne fait pas de bien non plus. La goutte d'eau qu'il garde dans une fiole au cou ne tombe jamais — elle reste suspendue, parfaitement immobile, défiant la gravité. Il sait que quelque chose cloche, mais il préfère ne pas y penser. Angle : la goutte ne tombe pas.
- **Traits** : jovial forcé, parle trop, évite le regard des gens.
- **Voix** : enjouée, légèrement paniquée. « De l'eau pure des Citernes ! Elle guérit ! Elle hydrate ! Elle… ne tombe pas. Mais ça, c'est normal. »
- **Relations** : `NPC_PEN_25` (lui achète de l'eau filtrée) ; `NPC_PEN_27` (lui rachète de l'eau à prix réduit) ; `NPC_PEN_28` (teste ses eaux pour les potions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_26_01` | K0 | eau, citerne | Vente d'eau des Citernes Antiques : 5 Yrds la fiole | — |
| 2 | `QI_PEN_26_02` | K0 | proprietes, eau | Eau grise, « curative », ne se périme pas | — |
| 3 | `QI_PEN_26_03` | K0 | fiole, cou | Garde une fiole à son cou — la goutte ne tombe jamais | — |
| 4 | `QI_PEN_26_04` | K1 | goutte, suspendue | La goutte dans sa fiole ne suit pas la gravité — immobile | — |
| 5 | `QI_PEN_26_05` | K1 | eau, evapore | L'eau des Citernes ne s'évapore pas — elle reste, toujours | `AFF>=60` |
| 6 | `QI_PEN_26_06` | K1 | alchimiste, test | `NPC_PEN_28` a testé l'eau — elle est « neutre », ni magique ni normale | `AFF>=65` |
| 7 | `QI_PEN_26_07` | K2 | citerne, source | La source des Citernes n'existe pas — l'eau apparaît d'elle-même, sans provenance | `AFF>=80` |
| 8 | `QI_PEN_26_08` | K2 | illusion, liquide | L'eau des Citernes est une illusion persistante — elle n'est pas réelle mais ses effets, si | `AFF>=85` |
| 9 | `QI_PEN_26_09` | K3 | fiole, horizon | La fiole qu'il porte au cou contient la dernière goutte d'eau réelle de Penwether. Toute l'autre eau est une illusion générée par le Cardinal. Quand elle tombera, l'illusion s'effondrera sur toute la ville | JAMAIS — déflection : *(il couvre sa fiole de ses mains)* « Non. Pas ça. Pas ma fiole. C'est juste de l'eau. Il faut que ce soit juste de l'eau. » *(il recule)* |
| 10 | `QI_PEN_26_10` | KX | *(hors sujet)* | « Bois. Ça désaltère. C'est ce qui compte. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_water` (achat d'eau des Citernes).
- Fil **🎭 Illusions** (l'eau = illusion persistante).
- Client de `NPC_PEN_25`, fournisseur de `NPC_PEN_27` et `NPC_PEN_28`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand eaux`) : *(Il tapote sa fiole)* « De l'eau des Citernes. Tu bois ça, tu vis cent ans. La goutte ? Oh, elle tombera quand elle sera prête. » |
- `!buy_water` — achat d'eau.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « dernière goutte d'eau réelle/illusion de Penwether » réservé à l'orchestrateur.
