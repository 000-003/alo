# 🕯️ Prêtre du Souvenir — `NPC_PEN_97`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_97` |
| **Nom affiché** | Prêtre du Souvenir |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (mémoire des ruines — Autel de Résurrection) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Autel de Résurrection |
| **Niveau / HP / MP** | 40 / 4 500 / 8 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Prêtre du Souvenir prie pour les oubliés — les Spriggans que personne ne pleure, les explorateurs disparus dans les ruines, les morts sans nom. Mais depuis un cycle, il prie aussi pour quelqu'un qui prie pour lui. Il l'entend dans ses rêves : une voix qui dit « Je ne t'oublie pas » — mais il ne sait pas qui c'est. Un matin, il a trouvé une fleur fraîche sur l'Autel. Il était seul. Personne n'était entré. L'oublié se souvient de lui. Angle : un oublié se souvient — une voix dans ses rêves, une fleur sans visiteur.
- **Traits** : doux, mélancolique, parle comme s'il s'adressait à des absents.
- **Voix** : basse, apaisée (« Je prie pour ceux que le monde a oubliés. C'est mon rôle. Mais depuis quelque temps, quelqu'un prie pour moi. Je ne sais pas qui. Je ne sais pas où. Mais chaque matin, il y a une fleur sur l'Autel. Et je ne suis pas le seul à la voir. »).
- **Relations** : Prêtre Voile `NPC_PEN_80` (collègue — ne lui a pas parlé des fleurs) ; Prêtresse Ombres `NPC_PEN_81` (lui a dit que l'ombre qui prie avec elle ressent aussi une présence réciproque) ; Vestale Passé `NPC_PEN_83` (a reconnu la fleur — un rite ancien de souvenir mutuel).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_97_01` | K0 | souvenir, priere | Prie pour les morts oubliés — Autel de Résurrection | — |
| 2 | `QI_PEN_97_02` | K0 | oublies, liste | Tient une liste mentale des Spriggans disparus sans sépulture | — |
| 3 | `QI_PEN_97_03` | K0 | autel, rituel | Rituels du souvenir — offrandes, prières, fleurs | — |
| 4 | `QI_PEN_97_04` | K1 | retour, priere | Quelqu'un prie pour lui en retour — il l'entend dans ses rêves | — |
| 5 | `QI_PEN_97_05` | K1 | fleur, autel | Une fleur apparaît chaque matin sur l'Autel — personne ne l'apporte | `AFF>=60` |
| 6 | `QI_PEN_97_06` | K1 | vestale, fleur | La Vestale `NPC_PEN_83` reconnaît la fleur — un rite de souvenir mutuel | `AFF>=65` |
| 7 | `QI_PEN_97_07` | K2 | fleur, origine | La fleur pousse dans les ruines du Cimetière Vertical — strate 7 | `AFF>=80` |
| 8 | `QI_PEN_97_08` | K2 | oublie, identite | L'oublié est un Spriggan disparu dans les ruines à la fondation — son nom est effacé de tout registre sauf de l'Autel | `AFF>=85` |
| 9 | `QI_PEN_97_09` | K3 | oublie, canon | L'« oublié » est une entité que le Cardinal a supprimée de la base de données mais dont le processus n'a jamais vraiment terminé. Il survit dans les interstices de la mémoire du serveur, invisible à tout index, mais capable de déposer une fleur — un pixel que le rendu a laissé. Le Prêtre n'est pas un Spriggan qui prie : il est le point d'ancrage que ce processus supprimé utilise pour ne pas disparaître complètement | JAMAIS — déflection : *(il tient la fleur, mais ses doigts passent à travers)* « Elle est réelle. Je la sens. Je la vois. Mais quand j'essaie de la cueillir… » *(sa main traverse la fleur)* « …elle n'est pas là. Elle est là et pas là. Comme celui qui l'apporte. » |
| 10 | `QI_PEN_97_10` | KX | *(hors sujet)* | « Les oubliés ne sont pas ceux qui sont morts. Ce sont ceux dont personne ne se souvient. Jusqu'à ce que quelqu'un le fasse. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_souvenir_prier` — prière pour un oublié. `!pen_souvenir_fleur` — interroger sur la fleur mystérieuse.
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (les oubliés sont des processus supprimés mais survivants). Relais de **🔮 Fil méta — La Ville Fantôme** (l'oublié est une entité non indexée du Cardinal).
- Quête `QST_PEN_FLEUR_OBLIE_01` : découvrir qui apporte la fleur et pourquoi.

## 5. Intégration Bot

- **Accueil** (`!parler pretre souvenir`) : *« Tu veux que je prie pour quelqu'un ? Donne-moi un nom. Si je le prononce assez fort, peut-être qu'il m'entendra. Et peut-être qu'il me répondra. »*
- `!pen_souvenir_prier` — prière ; `!pen_souvenir_fleur` — la fleur de l'Autel.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « l'oublié est un processus supprimé par le Cardinal qui survit via le Prêtre comme point d'ancrage » réservé à l'orchestrateur.
