# 🕯️ Marchand Gnome — `NPC_PEN_91`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_91` |
| **Nom affiché** | Marchand Gnome |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (marchand de gemmes — Marché des Sept Façades) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché des Sept Façades |
| **Niveau / HP / MP** | 25 / 2 200 / 3 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Un Gnome de Granzam installé au Marché des Sept Façades — le seul représentant gnome dans une ville Spriggan. Il vend des gemmes taillées en provenance de Granzam, mais il a aussi un œil sur les ruines. Les Gnomes creusent. Les ruines de Penwether sont pleines de cristaux anciens que les Spriggans ignorent. Lui ne les ignore pas. Il rachète en sous-main les gemmes que les fouilleurs rapportent des ruines, et il les revend sur le réseau Granzam. La rivalité entre Gnomes et Spriggans est polie mais réelle : les Gnomes voient Penwether comme un gisement à exploiter ; les Spriggans voient les Gnomes comme une menace pour les ruines. Angle : rivalité — les Gnomes creusent les ruines, menaçant leur intégrité.
- **Traits** : jovial, calculateur, les doigts toujours tachés de poussière de gemme.
- **Voix** : enjouée, avec un accent gnome de Granzam (« Des gemmes ! Des vraies gemmes de Granzam ! Et pour les clients discrets… j'ai aussi des pierres des ruines. Celles que les Spriggans ne voient pas. Ils regardent les murs, pas le sol. L'erreur classique. »).
- **Relations** : Marchand Imp `NPC_PEN_79` (concurrence — les Imps et les Gnomes ont des intérêts divergents sur les ruines) ; Courtier Alne `NPC_PEN_92` (lien avec Bomil `NPC_ALN_93` — réseau commercial) ; Vétéran Ruines `NPC_PEN_85` (lui signale les filons de gemmes dans les ruines).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_91_01` | K0 | gemmes, commerce | Marchand de gemmes — étal au Marché des Sept Façades | — |
| 2 | `QI_PEN_91_02` | K0 | granzam, origine | Originaire de Granzam — réseau d'approvisionnement | — |
| 3 | `QI_PEN_91_03` | K0 | ruines, pierres | Rachète des gemmes trouvées dans les ruines — sous le manteau | — |
| 4 | `QI_PEN_91_04` | K1 | ruines, exploitation | Les Gnomes considèrent les ruines comme un gisement — tension avec Spriggans | — |
| 5 | `QI_PEN_91_05` | K1 | rivalite, imp | Les Imps du Pacte des Ombres `NPC_PEN_79` le voient comme une menace | `AFF>=60` |
| 6 | `QI_PEN_91_06` | K1 | bomil, alne | Connaît Bomil `NPC_ALN_93` — intermédiaire du réseau Granzam–Alne | `AFF>=65` |
| 7 | `QI_PEN_91_07` | K2 | gemme, speciale | A trouvé une gemme noire dans les ruines — elle « voit » | `AFF>=80` |
| 8 | `QI_PEN_91_08` | K2 | puits, gnome | Les Gnomes forent sous Penwether par un puits secret — atteignent les strates de gemmes | `AFF>=85` |
| 9 | `QI_PEN_91_09` | K3 | ruines, effondrement | Les Gnomes ont déjà fragilisé la strate 4 des ruines avec leurs forages. Si le puits gnome atteint la strate -12, il percera la coque de compilation et déclenchera un effondrement système de toute la zone Penwether. Le Marchand le sait mais continue de vendre — les gemmes des strates profondes sont trop précieuses pour s'arrêter | JAMAIS — déflection : *(il cesse de sourire)* « Les ruines ? Elles sont solides. Elles tiennent depuis avant le monde. Un petit forage gnome, ça va pas les faire s'écrouler. » *(il tripote une gemme sans la regarder)* |
| 10 | `QI_PEN_91_10` | KX | *(hors sujet)* | « Une gemme, c'est comme un secret. Plus elle est profonde, plus elle brille. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!pen_gnome_etal` — inventaire de gemmes. `!pen_gnome_ruines` — achat/vente de gemmes des ruines.
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les Gnomes forent les ruines pour les gemmes — menacent l'intégrité des strates). Lien Granzam via Bomil `NPC_ALN_93`.
- Quête `QST_PEN_PUITS_GNOME_01` : découvrir et arrêter le forage gnome sous Penwether.
- Rivalité avec le Marchand Imp `NPC_PEN_79`.

## 5. Intégration Bot

- **Accueil** (`!parler marchand gnome`) : *« Des gemmes ! De Granzam, des ruines, d'ailleurs. J'ai des pierres que même le sol de Penwether ne sait pas qu'il a. »*
- `!pen_gnome_etal` — étal ; `!pen_gnome_ruines` — gemmes des ruines.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « le forage gnome menace la coque de compilation strate -12 » réservé à l'orchestrateur.
