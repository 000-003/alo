# 🔨 Garde de la Halle — `NPC_BRO_30`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_30` |
| **Nom affiché** | Garde de la Halle |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (sécurité de la Halle du Marteau) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 35 / 3 200 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde la Halle du Marteau depuis 40 ans. A vu tous les trafics, toutes les combines, tous les voleurs. Mais récemment, un voleur a traversé un mur. Pas par effraction — il a traversé. Le garde l'a poursuivi et l'homme a disparu dans une cage d'escalier qui n'existe pas. Depuis, il surveille les murs plus que les allées. Angle : le voleur qui disparaît a emprunté un chemin forgé par le Cardinal lui-même.
- **Traits** : méfiant, observateur, fatigué, intégrité discrète.
- **Voix** : grave et autoritaire (« J'ai vu des choses dans cette halle. Des choses qui n'étaient pas censées être vues. »).
- **Relations** : `NPC_BRO_31` (marchand lames — protège son étal) ; `NPC_BRO_32` (marchand armures) ; `NPC_BRO_48` (soupçonne un receleur mais n'a pas de preuve) ; `NPC_BRO_36` (forgeron ambulant — le fait circuler pour éviter les attroupements).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_30_01` | K0 | halle, marche | La Halle du Marteau : horaires, règles, commerçants | — |
| 2 | `QI_BRO_30_02` | K0 | securite, conseils | Conseils de sécurité : gardez vos bourses, signalez les vols | — |
| 3 | `QI_BRO_30_03` | K0 | commerce, local | Commerce local, taxes, permis de vente | — |
| 4 | `QI_BRO_30_04` | K1 | voleur, mur | Un voleur a traversé un mur — il l'a vu de ses yeux | — |
| 5 | `QI_BRO_30_05` | K1 | escalier, cachee | Une cage d'escalier apparaît parfois près du pilier ouest, la nuit | `AFF>=60` |
| 6 | `QI_BRO_30_06` | K1 | murmure, pierre | Les murs murmurent quand le Pouls bat fort — comme si la pierre parlait | `AFF>=65` |
| 7 | `QI_BRO_30_07` | K2 | halle, pas d'origine | La Halle du Marteau n'a pas été construite — elle a été forgée d'un seul bloc et plantée dans le sol | `AFF>=80` |
| 8 | `QI_BRO_30_08` | K2 | passage, cardinal | Le mur que le voleur a traversé : un passage réservé aux Forgerons du Cardinal, activé par le Pouls | `AFF>=85+QUEST:QST_BRO_FORGES_01` |
| 9 | `QI_BRO_30_09` | K3 | halle, etre vivant | La Halle du Marteau est un automate colossal, endormi depuis des siècles. Les passages muraux sont ses articulations. Le voleur n'a pas traversé un mur — il est entré dans le corps de la Halle. Si le Pouls s'emballe, la Halle se réveillera | JAMAIS — déflection : *(il pose la main sur le mur)* « C'est juste une halle. De la pierre et du métal. Elle tient debout parce que les Leprechauns savent bâtir. C'est tout. » |
| 10 | `QI_BRO_30_10` | KX | *(hors sujet)* | « Mes yeux ont vieilli. Mais ils voient encore ce qui devrait pas être là. » | — |

## 4. Chaînage économique & quêtes

- **GUARD** : `!report_theft` (signaler un vol) ; `!patrol_info` (itinéraire de patrouille).
- Fil **Le Pouls** + **Automates** (Halle automate).
- Quête `QST_BRO_FORGES_01` : enquêter sur les passages du Cardinal dans la Halle.

## 5. Intégration Bot

- **Accueil** (`!parler garde_halle`) : *« Circule. Achète. Ne traîne pas. »*
- `NPC_SECRET_PROBED` slot 9 : hook « Halle/automate colossal » pour l'orchestrateur.
