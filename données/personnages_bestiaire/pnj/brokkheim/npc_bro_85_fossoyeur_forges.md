# 🔨 Fossoyeur Forges — `NPC_BRO_85`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_85` |
| **Nom affiché** | Fossoyeur Forges |
| **Race** | Leprechaun |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Autel Résurrection |
| **Niveau / HP / MP** | 16 / 1100 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Enterre les forgerons morts. Il les descend dans les cryptes sous l'autel. Il a remarqué que les corps restent chauds bien après la mort — comme si la forge continuait de battre dans leurs veines. Il livre certains corps à `NPC_BRO_84`. Angle : Corps chaud.
- **Traits** : Silencieux, fort, sent la terre.
- **Voix** : Grave, lente. « Le corps est chaud. Le métal ne refroidit pas tout de suite. »
- **Relations :** `NPC_BRO_80` (prêtre), `NPC_BRO_84` (livre les corps pour nécromancie).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_85_01` | K0 | enterrement, rite | Rite d'enterrement : descente dans les cryptes, prière du métal | — |
| 2 | `QI_BRO_85_02` | K0 | cryptes, autel | Les cryptes sous l'autel ont 7 niveaux — le dernier est scellé | — |
| 3 | `QI_BRO_85_03` | K0 | chaleur, post-mortem | Les forgerons restent chauds 48h après la mort | — |
| 4 | `QI_BRO_85_04` | K1 | corps, vivant | Certains corps bougent dans leur cercueil | `AFF>=55` |
| 5 | `QI_BRO_85_05` | K1 | crypte, lieu | Le niveau scellé des cryptes contient le premier forgeron | — |
| 6 | `QI_BRO_85_06` | K1 | cendres, livrees | Il livre les corps à `NPC_BRO_84` — pour que la forge continue | `AFF>=65` |
| 7 | `QI_BRO_85_07` | K2 | crypte, lumiere | Une lumière chaude vient du niveau scellé — comme une forge en activité | `AFF>=80` |
| 8 | `QI_BRO_85_08` | K2 | corps, pouls | Les corps chauds battent au rythme du Pouls | `AFF>=85` |
| 9 | `QI_BRO_85_09` | K3 | cryptes, enclume | Le niveau scellé ne contient pas de corps — il contient la première enclume, forgée dans le manteau terrestre. Les corps chauds y sont attirés pour alimenter la forge-mère du monde | JAMAIS — déflection : *(il pose la main sur la pierre)* « En dessous, il y a encore en dessous. Et tout en bas, il y a elle. » |
| 10 | `QI_BRO_85_10` | KX | *(hors sujet)* | « Le froid n'existe pas ici. Seulement le pas-encore-chaud. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!bury` — enterrer un forgeron mort.

## 5. Intégration Bot

- **Accueil :** « Tu as un mort ? Pose-le là. Je m'en occupe. »