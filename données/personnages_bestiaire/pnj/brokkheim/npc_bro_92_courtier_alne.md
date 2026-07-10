# 🔨 Courtier Alne — `NPC_BRO_92`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_92` |
| **Nom affiché** | Courtier Alne |
| **Race** | Sylphe/Humain |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes |
| **Niveau / HP / MP** | 14 / 700 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Diplomate sylphe/alne envoyé par Bomil. Il sert de courrier entre Brokkheim et la cité de Bomil. Connaît NPC_ALN_93, son contact sur place. Il porte des messages dans des tubes de verre scellés. Son rôle officiel est de faciliter le commerce inter-cités. Angle : Lien Bomil NPC_ALN_93.
- **Traits** : Diplomate, voix douce, toujours en habit de voyage.
- **Voix** : Polie, mesurée. « Je ne viens que pour les échanges. Rien de plus. »
- **Relations :** `NPC_ALN_93` (contact Bomil), `NPC_BRO_86` (connaissance au Conseil), `NPC_BRO_94` (courtier inter-racial — collègue).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_92_01` | K0 | diplomatie, bomil | Échanges diplomatiques Brokkheim ↔ Bomil | — |
| 2 | `QI_BRO_92_02` | K0 | messager, role | Porte des messages scellés entre les cités | — |
| 3 | `QI_BRO_92_03` | K0 | alne, culture | Culture alne : société de marchands et d'archivistes | — |
| 4 | `QI_BRO_92_04` | K1 | aln_93, contact | `NPC_ALN_93` est son contact à Bomil — il connaît les routes de gemmes | `AFF>=55` |
| 5 | `QI_BRO_92_05` | K1 | trafic, bomil | Bomil achète du mithril trafiqué — il ferme les yeux | `AFF>=65` |
| 6 | `QI_BRO_92_06` | K1 | pouls, bomil | Bomil s'intéresse au Pouls — veut mesurer sa fréquence | — |
| 7 | `QI_BRO_92_07` | K2 | message, code | Les messages contiennent un code en marge — il a des doubles instructions | `AFF>=80` |
| 8 | `QI_BRO_92_08` | K2 | granzam, bomil | Bomil fait aussi du commerce avec Granzam — il équilibre les deux | `AFF>=85` |
| 9 | `QI_BRO_92_09` | K3 | aln_93, cardinal | `NPC_ALN_93` est un rouage du Cardinal — il collecte les données de flux pour le serveur-mère. Le courrier Alne est en fait un nœud de communication entre les instances serveur | JAMAIS — déflection : *(il sourit, mais ses yeux sont vides)* « Nous ne sommes que des messagers. Le message est plus important que le messager. » |
| 10 | `QI_BRO_92_10` | KX | *(hors sujet)* | « Le vent porte les nouvelles. Et les nouvelles portent le vent. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!send_message` — envoyer un message à Bomil.

## 5. Intégration Bot

- **Accueil :** *(il incline élégamment la tête)* « Un message pour Bomil ? Ou de Bomil ? Dans les deux cas, je suis ton homme. »