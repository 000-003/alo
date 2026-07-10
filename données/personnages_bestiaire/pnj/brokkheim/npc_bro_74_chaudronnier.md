# 🔨 Chaudronnier — `NPC_BRO_74`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_74` |
| **Nom affiché** | Chaudronnier |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (chaudronnerie — cuves et réservoirs) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Manufacture Automates (atelier de chaudronnerie) |
| **Niveau / HP / MP** | 18 / 1 400 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il fabrique les chaudrons et cuves qui servent à la trempe et au traitement des métaux. Un chaudron qu'il a riveté la semaine dernière bout sans feu depuis trois jours — l'eau à l'intérieur frémit, bulle, sans aucune source de chaleur. Il l'a déplacé à l'écart, mais il continue de bouillir. Le Souffleur Verre `NPC_BRO_53` a reconnu le phénomène : la même bulle que sa propre veilleuse.
- **Traits** : bourru, pragmatique, refuse de s'émerveiller devant l'anomalie.
- **Voix** : grommelante, accompagnée de coups de marteau sur le cuivre.
- **Relations** : Souffleur Verre `NPC_BRO_53` (lui achète des fioles et compare les anomalies) ; Modeleur Métal `NPC_BRO_73` (partage l'atelier) ; Apprenti Forgeur `NPC_BRO_71` (lui fournit les chaudrons de trempe).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_74_01` | K0 | chaudronnerie, metier | La chaudronnerie : rivetage, martelage, assemblage | — |
| 2 | `QI_BRO_74_02` | K0 | cuves, vente | Catalogue : chaudrons, cuves, réservoirs (50-500 Yrds) | — |
| 3 | `QI_BRO_74_03` | K0 | trempe, procede | Le rôle des chaudrons dans la trempe des métaux à Brokkheim | — |
| 4 | `QI_BRO_74_04` | K1 | chaudron, bouillant | Un chaudron bout sans feu depuis trois jours — déplacé, toujours bouillant | `AFF>=60` |
| 5 | `QI_BRO_74_05` | K1 | chaudron, localisation | Le chaudron a été fabriqué avec des rivets en mithril de la Manufacture | — |
| 6 | `QI_BRO_74_06` | K1 | bulle, veilleuse | `NPC_BRO_53` a reconnu la bulle — même phénomène que sa veilleuse en verre | `AFF>=70` |
| 7 | `QI_BRO_74_07` | K2 | chaudron, eau | L'eau du chaudron ne s'évapore pas — elle bout mais le niveau reste constant | `AFF>=80` |
| 8 | `QI_BRO_74_08` | K2 | chaudron, fond | Au fond du chaudron, un symbole s'est formé dans le cuivre — identique à celui du mémorial `NPC_BRO_68` | `AFF>=90` |
| 9 | `QI_BRO_74_09` | K3 | chaudron, enclume | Le chaudron bouillant est connecté au système de refroidissement de l'Enclume. L'eau ne s'évapore pas parce qu'elle est recyclée en circuit fermé par une boucle thermique que l'Enclume commande. Le chaudron est un radiateur de l'Enclume, et les bulles sont le signe que l'Enclume travaille | JAMAIS — déflection : *(il frappe le chaudron, un coup sourd)* « Le cuivre conduit la chaleur. Celui-ci a dû garder la température du dernier usage. Rien d'anormal, il refroidira. » |
| 10 | `QI_BRO_74_10` | KX | *(tout le reste)* | « Le chaudron a besoin de cuivre et de feu. Pas de questions. » | — |

## 4. Chaînage économique & quêtes

- SERVICE : fabrication de chaudrons (crafting containers).
- K3 : le chaudron radiateur de l'Enclume — fil Pacte Eaux + Enclume.
- `QST_BRO_CHAUDRON_01` : enquêter sur le chaudron qui bout sans feu.

## 5. Intégration Bot

- **Accueil** (`!parler chaudronnier`) : *« Chaudrons, cuves, réservoirs. Si ça contient un liquide, je le fabrique. »*
- `!shop_chaudron` : catalogue de chaudronnerie.
