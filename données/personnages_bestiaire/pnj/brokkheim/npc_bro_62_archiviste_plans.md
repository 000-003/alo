# 🔨 Archiviste Plans — `NPC_BRO_62`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_62` |
| **Nom affiché** | Archiviste Plans |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (archives des plans de forge) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (archives des plans) |
| **Niveau / HP / MP** | 30 / 2 200 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il conserve les plans de toutes les forges de Brokkheim — des plus modestes aux plus anciennes. Un plan trouvé dans les archives du Conseil semble se compléter seul : chaque semaine, un nouveau détail apparaît, un angle qui n'était pas dessiné la veille. Le plan représente une pièce qu'aucun forgeron vivant n'a jamais vue — et qui ressemble à l'Enclume du Cardinal.
- **Traits** : obsessionnel de l'ordre, plié sur ses parchemins, voix de poussière.
- **Voix** : basse et rapide, comme s'il lisait une liste mentale.
- **Relations** : Scribe Conseil `NPC_BRO_60` (compare leurs notes) ; Bibliothécaire `NPC_BRO_63` (emprunte des ouvrages de référence) ; Maître Forgeron Lames `NPC_BRO_70` (le seul à qui il a montré le plan).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_62_01` | K0 | plans, archives | Organisation des archives : classification, prêt, consultation | — |
| 2 | `QI_BRO_62_02` | K0 | plans, forges | Les plans des forges célèbres de Brokkheim (histoire publique) | — |
| 3 | `QI_BRO_62_03` | K0 | archiviste, metier | Le métier d'archiviste : restauration, classement, authentification | — |
| 4 | `QI_BRO_62_04` | K1 | plan, anomalie | Un plan se complète seul — ajouts hebdomadaires, encre inconnue | `AFF>=60` |
| 5 | `QI_BRO_62_05` | K1 | plan, contenu | Le plan représente une enclume monumentale avec un cœur de forge incandescent | — |
| 6 | `QI_BRO_62_06` | K1 | encre, analyse | L'encre est à base de soufre raffiné et de cendre de mithril — identique à celle du Scribe `NPC_BRO_60` | `AFF>=70` |
| 7 | `QI_BRO_62_07` | K2 | plan, auteur | L'écriture change à chaque ajout — comme si plusieurs mains se relayaient à travers le temps | `AFF>=80` |
| 8 | `QI_BRO_62_08` | K2 | forge, perdue | Le plan montre une chambre de forge sous Brokkheim — coordonnées alignées sur la cave du Conseil | `AFF>=90` |
| 9 | `QI_BRO_62_09` | K3 | plan, cardinal | Le plan se complète seul parce que l'Enclume du Cardinal est une machine à dessiner : chaque fois qu'un fragment du Cardinal (feu follet `NPC_BRO_58`, bloc de charbon `NPC_BRO_50`) entre en contact avec le parchemin, l'encre se dépose. Le plan est une radiographie en temps réel de l'Enclume | JAMAIS — déflection : *(il roule le parchemin d'un geste sec)* « Les vieux parchemins réagissent à l'humidité. Les encres minérales migrent avec le temps. C'est de la chimie, pas de la magie. » |
| 10 | `QI_BRO_62_10` | KX | *(tout le reste)* | « Un plan à la fois. Chaque chose en son temps. » | — |

## 4. Chaînage économique & quêtes

- Service : consultation des plans de forge (payant, aide au craft).
- K3 : l'Enclume comme machine à écrire — fil Enclume du Cardinal.
- `QST_BRO_PLAN_01` : suivre l'évolution du plan qui se complète.

## 5. Intégration Bot

- **Accueil** (`!parler archiviste_plans`) : *« Les plans ne mentent pas. Ceux qui se corrigent tout seuls, si. »*
- `!plan_forge [nom]` : consultation d'un plan de forge.
