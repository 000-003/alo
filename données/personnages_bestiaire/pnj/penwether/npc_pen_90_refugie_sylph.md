# 🕯️ Réfugié Sylph — `NPC_PEN_90`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_90` |
| **Nom affiché** | Réfugié Sylph |
| **Race** | Sylph |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (fuyard de Swilvane — Faubourg des Masques) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Faubourg des Masques |
| **Niveau / HP / MP** | 30 / 2 800 / 6 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Un Sylphe qui a fui Swilvane — sa cité natale, son peuple, ses vents. Il vit reclus au Faubourg des Masques, sans ailes déployées, sans jamais prendre l'air. Il est venu à Penwether parce que ici, les illusions permettent d'oublier. Mais il ne peut pas oublier le silence. À Swilvane, le vent soufflait toujours — c'était la respiration de la ville. Puis le vent s'est arrêté. Pas progressivement : d'un coup, comme si quelqu'un avait coupé le souffle du monde. Il sait pourquoi. Il a vu ce qui se cachait dans la Tour du Seigneur des Vents. Il ne veut pas en parler. Angle : le vent ne souffle plus à Swilvane — il sait pourquoi (lien Swilvane).
- **Traits** : méfiant, les épaules voûtées, tousse quand il parle du vent.
- **Voix** : sèche, sans le murmure aérien typique des Sylphes (« Le vent s'est arrêté. Tu veux savoir pourquoi ? Moi aussi. Mais ceux qui savent, ils ne parlent pas. Et ceux qui parlent, ils… *(il tousse)* …ils ne savent pas. »).
- **Relations** : Murmure Tour `NPC_SWI_00` (a vu son ombre dans la Tour avant de fuir) ; Tenebris `NPC_SWI_03` (lui a vendu la carte qui l'a mené à Penwether) ; Marchand Imp `NPC_PEN_79` (lui a trouvé un logement au Faubourg).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_90_01` | K0 | refuge, penwether | Réfugié Sylph au Faubourg des Masques — fuit Swilvane | — |
| 2 | `QI_PEN_90_02` | K0 | silence, vent | Le vent de Swilvane s'est arrêté — il y a des cycles | — |
| 3 | `QI_PEN_90_03` | K0 | ailes, cachees | Cache ses ailes sous un manteau — ne les déploie jamais | — |
| 4 | `QI_PEN_90_04` | K1 | saw, tower | Il a vu quelque chose dans la Tour du Seigneur des Vents | — |
| 5 | `QI_PEN_90_05` | K1 | mur, tour | L'étage verrouillé de la Tour émettait une lueur — comme un écran | `AFF>=60` |
| 6 | `QI_PEN_90_06` | K1 | tenebris, carte | Tenebris `NPC_SWI_03` lui a vendu la carte pour fuir Swilvane | `AFF>=65` |
| 7 | `QI_PEN_90_07` | K2 | vent, machine | Le vent était généré par une machine dans la Tour — elle s'est éteinte | `AFF>=80` |
| 8 | `QI_PEN_90_08` | K2 | machine, cardinal | La machine était une interface du Cardinal — le vent était un processus | `AFF>=85` |
| 9 | `QI_PEN_90_09` | K3 | vent, arret | Le vent ne souffle plus parce que le Cardinal a désactivé le module climatique de Swilvane. Penwether n'a pas de vent parce qu'elle est une coque intérieure — un environnement scellé. Swilvane avait un module de simulation qui est tombé en panne. Le Cardinal ne l'a pas réparé parce que Swilvane n'est pas prioritaire dans la hiérarchie des serveurs. Les Sylphes vivent dans une cité dont le système de survie est en panne | JAMAIS — déflection : *(il serre son manteau)* « Le vent s'est arrêté. C'est tout. Y'a pas de pourquoi. Y'a pas de comment. Il s'est arrêté. Et ceux qui sont restés… ils suffoquent. » *(il ferme les yeux, inspire, et n'ajoute rien)* |
| 10 | `QI_PEN_90_10` | KX | *(hors sujet)* | « L'air de Penwether est lourd. Il ne bouge pas. Comme si la ville elle-même retenait son souffle. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_sylph_histoire` — récit de Swilvane. `!pen_sylph_tour` — ce qu'il a vu dans la Tour.
- **Fils rouges** : rouage de **🔮 Fil méta — La Ville Fantôme** (le vent de Swilvane était un processus du Cardinal qui a été désactivé). Lien inter-cités Swilvane via Tenebris `NPC_SWI_03` et le Murmure de la Tour `NPC_SWI_00`.
- Donneur de `QST_PEN_VENT_ARRETE_01` (enquêter sur l'arrêt du vent de Swilvane — quête inter-cités).

## 5. Intégration Bot

- **Accueil** (`!parler refugie sylph`) : *« Penwether est calme. Trop calme. Pas de vent. Pas de bruit. C'est pour ça que je suis venu. Le silence, ici, n'est pas une absence. C'est un choix. »*
- `!pen_sylph_histoire` — son histoire ; `!pen_sylph_swilvane` — informations sur Swilvane.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « vent de Swilvane = module climatique du Cardinal désactivé » réservé à l'orchestrateur.
