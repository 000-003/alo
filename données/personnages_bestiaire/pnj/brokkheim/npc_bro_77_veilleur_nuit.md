# 🔨 Veilleur Nuit — `NPC_BRO_77`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_77` |
| **Nom affiché** | Veilleur Nuit |
| **Race** | Leprechaun |
| **Rôle** | `GUARD` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Remparts |
| **Niveau / HP / MP** | 16 / 1200 / 250 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ronde de nuit sur les remparts de Brokkheim. Il a remarqué que la forge ne brille pas dans le noir — alors que le feu ne s'éteint jamais le jour. Parfois, la forge est éteinte la nuit, mais les lueurs persistent. Angle : Pas forge dans noir.
- **Traits** : Solitaire, observateur nocturne, fatigué chronique.
- **Voix** : Chuchotée, rauque. « La nuit cache ce que le jour forge. »
- **Relations :** `NPC_BRO_78` (relève de jour), `NPC_BRO_75` (entrée).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_77_01` | K0 | ronde, remparts | Ronde de nuit toutes les heures, des tours nord à sud | — |
| 2 | `QI_BRO_77_02` | K0 | forge, nuit | La Forge-Mère est éteinte la nuit — les feux sont couverts | — |
| 3 | `QI_BRO_77_03` | K0 | lueur, etrange | Malgré les feux couverts, une lueur rouge persiste au sommet de la Forge-Mère | — |
| 4 | `QI_BRO_77_04` | K1 | ombre, rempart | Une ombre longue marche sur les remparts alors qu'il n'y a pas de lune | `AFF>=55` |
| 5 | `QI_BRO_77_05` | K1 | granzam, toit | Des gnomes se déplacent sur les toits la nuit — ils évitent les portes | `AFF>=65` |
| 6 | `QI_BRO_77_06` | K1 | pouls, palpable | Le Pouls bat plus fort la nuit — la vibration monte par les remparts | — |
| 7 | `QI_BRO_77_07` | K2 | forge, fantome | Il a vu un forgeron sans ombre travailler à la forge éteinte | `AFF>=80` |
| 8 | `QI_BRO_77_08` | K2 | clef, interdite | Une clef en mithril pend à la ceinture d'un garde qui n'existe pas | `AFF>=85` |
| 9 | `QI_BRO_77_09` | K3 | forge, dimension | La forge ne s'éteint jamais — elle brûle dans une autre dimension la nuit, et les flammes qu'il voit sont des reflets | JAMAIS — déflection : *(il ferme les yeux)* « Je ne regarde pas la forge. Je regarde ailleurs. Tu devrais faire pareil. » |
| 10 | `QI_BRO_77_10` | KX | *(hors sujet)* | « La pierre est froide. Mais elle écoute. » | — |

## 4. Chaînage économique & quêtes

- **GUARD** : `!report_night` — signalement d'activité nocturne.

## 5. Intégration Bot

- **Accueil :** *(il ne vous regarde pas)* « La nuit porte ce que le jour ne peut pas porter. »