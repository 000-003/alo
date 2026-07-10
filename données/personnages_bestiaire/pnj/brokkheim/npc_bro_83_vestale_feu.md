# 🔨 Vestale Feu — `NPC_BRO_83`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_83` |
| **Nom affiché** | Vestale Feu |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Autel Résurrection |
| **Niveau / HP / MP** | 18 / 650 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vestale qui exécute les rites de passage au feu. Elle chante les hymnes de flammes sur les blessures des forgerons pour les cicatriser. Un rite qu'elle maîtrise — mais depuis que le Pouls ralentit, les cicatrices refusent de fermer. Angle : Rite qui cicatrise.
- **Traits** : Sereine, brûlée rituellement, voix mélodieuse.
- **Voix** : Chantée plutôt que parlée. « La flamme danse sur la plaie. Elle ferme ce qui fut ouvert. »
- **Relations :** `NPC_BRO_80`, `NPC_BRO_82` (collègues autel), `NPC_BRO_97` (prêtre souvenir — complice des rites funéraires).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_83_01` | K0 | rite, feu | Rite de cicatrisation par le feu sur les brûlures de forge | — |
| 2 | `QI_BRO_83_02` | K0 | chants, anciens | Les chants de feu ancestraux transmis par 12 générations | — |
| 3 | `QI_BRO_83_03` | K0 | autel, soin | Les blessures de forge guérissent 2× plus vite à l'autel | — |
| 4 | `QI_BRO_83_04` | K1 | cicatrice, rate | Les cicatrices ne ferment plus — la flamme n'écoute plus | `AFF>=55` |
| 5 | `QI_BRO_83_05` | K1 | pouls, chant | Le rythme du Pouls change son chant — il ralentit | `AFF>=65` |
| 6 | `QI_BRO_83_06` | K1 | granzam, rite | Un gnome a essayé d'assister au rite — brûlé au 3e degré | — |
| 7 | `QI_BRO_83_07` | K2 | flamme, noire | Lorsqu'elle chante, l'ombre de la flamme est noire — pas rouge | `AFF>=80` |
| 8 | `QI_BRO_83_08` | K2 | cicatrice, vivante | Les cicatrices qu'elle referme bougent encore sur la peau | `AFF>=85` |
| 9 | `QI_BRO_83_09` | K3 | rite, essence | Le rite ne cicatrise pas la chair — il cicatrise le temps de vie. Chaque blessure fermée est une année de vie rendue, prélevée sur la réserve du Cardinal. Depuis que le Cardinal faiblit, les rites échouent | JAMAIS — déflection : *(elle entonne un hymne qui se brise)* « Je ne peux pas. Le feu ne me répond plus. Pars. » |
| 10 | `QI_BRO_83_10` | KX | *(hors sujet)* | « La flamme chante ce que les mots ne peuvent pas dire. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!heal_burns` — soin par le rite du feu.

## 5. Intégration Bot

- **Accueil :** *(elle incline la tête, un sourire triste)* « La flamme te salue. »