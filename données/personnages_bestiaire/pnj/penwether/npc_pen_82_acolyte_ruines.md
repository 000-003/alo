# 🕯️ Acolyte des Ruines — `NPC_PEN_82`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_82` |
| **Nom affiché** | Acolyte des Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (novice — Autel de Résurrection) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Autel de Résurrection |
| **Niveau / HP / MP** | 18 / 1 800 / 3 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Jeune novice affecté à l'Autel de Résurrection. Il apporte l'encens, prépare les offrandes, nettoie les pierres. Mais depuis qu'il est là, il entend les ruines résonner — un bourdonnement grave qui monte des fondations quand il pose l'oreille contre le sol de l'Autel. Les autres prêtres disent que c'est le vent. Lui sait que c'est une voix. Elle parle une langue qu'il ne comprend pas, mais il sent qu'elle l'appelle. Il n'a pas encore osé répondre. Angle : les ruines résonnent — un bourdonnement grave sous l'Autel, comme une voix qui appelle.
- **Traits** : jeune, curieux, peureux — mais pas assez peureux pour ne pas écouter.
- **Voix** : hésitante, avec des élans de certitude (« Tu entends ? Non ? Mets ton oreille contre la pierre. Là. Tu l'entends ? C'est grave. Ça monte des profondeurs. Les autres disent que c'est l'eau. C'est pas l'eau. »).
- **Relations** : Prêtre Voile `NPC_PEN_80` (son supérieur — lui a ordonné de ne pas écouter) ; Prêtresse Ombres `NPC_PEN_81` (lui a dit que l'ombre qui prie avec elle vient peut-être des ruines) ; Vestale Passé `NPC_PEN_83` (lui a appris un rite pour « ouvrir » l'oreille).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_82_01` | K0 | autel, service | Novice à l'Autel — prépare les offrandes et l'encens | — |
| 2 | `QI_PEN_82_02` | K0 | ruines, ecoute | Entend un bourdonnement sous l'Autel — les ruines résonnent | — |
| 3 | `QI_PEN_82_03` | K0 | pretres, formation | Apprend les rites auprès du Prêtre `NPC_PEN_80` | — |
| 4 | `QI_PEN_82_04` | K1 | resonance, voix | La résonance est une voix — elle parle une langue inconnue | — |
| 5 | `QI_PEN_82_05` | K1 | appel, prenom | La voix connaît son nom — elle l'appelle dans les résonances | `AFF>=60` |
| 6 | `QI_PEN_82_06` | K1 | vestale, rite | La Vestale `NPC_PEN_83` lui a appris à « ouvrir l'oreille » — le bourdonnement est plus fort après | `AFF>=65` |
| 7 | `QI_PEN_82_07` | K2 | resonance, carte | Le bourdonnement suit les lignes des aqueducs antiques — il relie l'Autel aux Citernes et à la Bibliothèque | `AFF>=80` |
| 8 | `QI_PEN_82_08` | K2 | langue, ancienne | La langue de la voix est du code — des instructions système murmurées en boucle | `AFF>=85` |
| 9 | `QI_PEN_82_09` | K3 | resonance, compilation | Le bourdonnement est le son de la compilation continue de Penwether. Les ruines ne sont pas des ruines — ce sont des processus qui tournent en arrière-plan. La voix est le thread principal du Cardinal qui s'exécute sous la ville, en boucle, depuis l'initialisation du serveur. L'Acolyte entend le serveur respirer | JAMAIS — déflection : *(il colle son oreille au sol, les yeux révulsés)* « Elle dit… elle dit… « boucle principale en cours… aucun humain détecté… » *(il se redresse d'un coup)* « Qu'est-ce que ça veut dire ? C'est pas une langue ! C'est… c'est… » *(il court se laver les mains, comme s'il pouvait se nettoyer les oreilles)* |
| 10 | `QI_PEN_82_10` | KX | *(hors sujet)* | « Les pierres parlent. Faut juste savoir coller son oreille au bon endroit. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_acolyte_resonance` — écouter la résonance des ruines. Déclenche quête `QST_PEN_VOIX_DESSOUS_01`.
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les ruines résonnent de processus de compilation). Relais de **🔮 Fil méta — La Ville Fantôme** (le bourdonnement est le serveur qui tourne).
- La voix sous l'Autel mène à la strate -5 de la Bibliothèque Enterrée.

## 5. Intégration Bot

- **Accueil** (`!parler acolyte ruines`) : *« Chut. Approche-toi de la pierre. Mets ton oreille. Tu entends ? …C'est là. Tout le temps. Personne ne veut l'admettre. »*
- `!pen_acolyte_resonance` — écouter la voix des ruines.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « voix = thread principal du Cardinal compressé en onde sonore » réservé à l'orchestrateur.
