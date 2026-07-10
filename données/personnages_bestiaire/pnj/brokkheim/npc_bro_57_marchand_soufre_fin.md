# 🔨 Marchand Soufre Fin — `NPC_BRO_57`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_57` |
| **Nom affiché** | Marchand Soufre Fin |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (soufre raffiné pour alliages) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée des Geysers (comptoir du soufre) |
| **Niveau / HP / MP** | 20 / 1 500 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il raffine le soufre brut des geysers en soufre pur — composant essentiel des alliages de mithril trempé. Un lot récent brûle à température négative au lieu de chauffer : une anomalie qu'il garde secrète et qu'il vend à prix d'or au Prospecteur `NPC_BRO_56` comme « soufre froid ». Il sait que ce soufre vient d'une veine qui touche la chambre de l'Enclume.
- **Traits** : raffiné, calculateur, sentant toujours légèrement l'œuf pourri.
- **Voix** : doucereuse, prix énoncés avec des pauses qui suspendent la négociation.
- **Relations** : Prospecteur Geysers `NPC_BRO_56` (client mystère) ; Garde Terrils `NPC_BRO_54` (achète son charbon volé) ; Apprenti Forgeur `NPC_BRO_71` (lui fournit du soufre pour la Forge-Mère).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_57_01` | K0 | soufre, vente | Catalogue : soufre brut (10 Yrds), raffiné (40 Yrds), pur (100 Yrds) | — |
| 2 | `QI_BRO_57_02` | K0 | raffinage, processus | Les étapes du raffinage : broyage, lessivage, cristallisation | — |
| 3 | `QI_BRO_57_03` | K0 | soufre, usages | Usages du soufre dans la forge : alliages, trempe, décoration | — |
| 4 | `QI_BRO_57_04` | K1 | soufre, froid | Le lot de soufre froid existe — brûle à -10°C au lieu de +300°C | `AFF>=60` |
| 5 | `QI_BRO_57_05` | K1 | provenance, veine | La veine d'où vient le soufre froid : secteur profond sous le geyser ouest | — |
| 6 | `QI_BRO_57_06` | K1 | acheteur, mithril | Un acheteur paie en mithril pur pour du soufre froid — `NPC_BRO_70` (Maître Forgeron) | `AFF>=70` |
| 7 | `QI_BRO_57_07` | K2 | veine, chambre | La veine froide longe une chambre vide cartographiée par `NPC_BRO_56` | `AFF>=80` |
| 8 | `QI_BRO_57_08` | K2 | chambre, acces | La chambre a une porte scellée — il l'a vue une fois, par une fissure | `AFF>=90` |
| 9 | `QI_BRO_57_09` | K3 | chambre, enclume | La chambre contient la racine de l'Enclume du Cardinal — le soufre froid est un produit de déchet du refroidissement du mithril cardinal. La porte scellée n'a pas été construite par des Leprechauns | JAMAIS — déflection : *(il verse une pincée de soufre entre ses doigts, la regarde brûler froid)* « Le soufre est le soufre. Chaud, froid, importe — c'est la pureté qui fait le prix. La provenance, c'est l'affaire du prospecteur. » |
| 10 | `QI_BRO_57_10` | KX | *(tout le reste)* | « Mon soufre est le meilleur de Brokkheim. Si tu veux du bas de gamme, va à Granzam. » | — |

## 4. Chaînage économique & quêtes

- MERCHANT — vente de soufre pour alliages de mithril.
- K3 : la chambre sous la Vallée = racine de l'Enclume.
- `QST_BRO_SOUFRE_01` : enquêter sur le soufre froid et la veine anormale.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_soufre`) : *« Le soufre ne ment pas sur sa qualité. Les acheteurs, si. »*
- `!shop_soufre` : catalogue du marchand.
