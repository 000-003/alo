# 🔨 Dompteur Feux Follets — `NPC_BRO_58`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_58` |
| **Nom affiché** | Dompteur Feux Follets |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (capture et dressage de feux follets) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Champs Scories |
| **Niveau / HP / MP** | 19 / 1 300 / 900 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il capture les feux follets qui naissent spontanément dans les Champs Scories — des flammes intelligentes nées de la chaleur résiduelle des forges. Il les dresse pour éclairer les ateliers. Un feu follet capturé la semaine dernière a prononcé un mot dans une langue qu'il ne connaît pas : « Enclume ». Depuis, il étudie ses flammes en cachette.
- **Traits** : doux avec les flammes, nerveux avec les gens.
- **Voix** : siffle et chuchote plus qu'il ne parle, comme s'il imitait le crépitement.
- **Relations** : Trieur Scories `NPC_BRO_51` (les Champs Scories sont sa zone de chasse principale) ; Piqueur Terrils `NPC_BRO_59` (lui signale les concentrations de chaleur) ; Bibliothécaire `NPC_BRO_63` (lui a prêté un traité sur les langages élémentaires).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_58_01` | K0 | feux, follets | Les feux follets de Brokkheim : quoi, où, à quoi ça sert | — |
| 2 | `QI_BRO_58_02` | K0 | dressage, metier | L'art du dressage des flammes : outils, risques, techniques | — |
| 3 | `QI_BRO_58_03` | K0 | feux, vente | Vente de feux follets apprivoisés (50 Yrds — éclairage cosmétique) | — |
| 4 | `QI_BRO_58_04` | K1 | feu, parole | Le feu follet qui parle — « Enclume » — il l'a gardé dans une cage spéciale | `AFF>=60` |
| 5 | `QI_BRO_58_05` | K1 | mot, origine | Le mot revient chaque fois que le Pouls de la forge `NPC_BRO_71` frappe un coup fort | — |
| 6 | `QI_BRO_58_06` | K1 | champs, anomalie | Les Champs Scories émettent une chaleur résiduelle anormale depuis un mois — pas de source visible | `AFF>=70` |
| 7 | `QI_BRO_58_07` | K2 | feu, reponse | Si on dit « Enclume » au feu follet, il change de couleur — passe du jaune au bleu profond | `AFF>=80` |
| 8 | `QI_BRO_58_08` | K2 | champs, carte | En brûlant les Scories en motifs, le feu follet dessine une carte — celle d'une salle sous Brokkheim | `AFF>=90` |
| 9 | `QI_BRO_58_09` | K3 | feu, fragment | Le feu follet parlant est un fragment de l'Enclume du Cardinal rendu gazeux par la chaleur des Champs Scories. Il retient un mot-souche de la langue du Cardinal. Chaque feu follet est un éclat de mémoire de l'Enclume | JAMAIS — déflection : *(il pose un doigt sur la cage, la flamme se plaque contre le verre)* « Les feux follets ne parlent pas. Ils crépitent, c'est tout. Le vent fait des mots avec le bruit, c'est l'oreille qui invente. » |
| 10 | `QI_BRO_58_10` | KX | *(tout le reste)* | « Les flammes ne mentent pas. Les mots, si. Je préfère les flammes. » | — |

## 4. Chaînage économique & quêtes

- Service : vente de feux follets apprivoisés (cosmétique).
- K3 : fragments gazeux de l'Enclume — fil Enclume du Cardinal.
- `QST_BRO_FEU_01` : suivre la carte tracée par le feu follet.

## 5. Intégration Bot

- **Accueil** (`!parler dompteur`) : *« N'approche pas trop. Les feux follets sont timides avec les inconnus. »*
- `!shop_feu_follet` : achat d'un feu follet apprivoisé (cosmétique).
