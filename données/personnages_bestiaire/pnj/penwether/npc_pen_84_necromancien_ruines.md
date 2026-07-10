# 🕯️ Nécromancien des Ruines — `NPC_PEN_84`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_84` |
| **Nom affiché** | Nécromancien des Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (résurrection noire — Nécropole Antique interdite) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Nécropole Antique (interdit) |
| **Niveau / HP / MP** | 60 / 9 200 / 14 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Nécromancien des Ruines opère dans la zone interdite de la Nécropole Antique. Il ranime les morts des ruines — pas des Spriggans, pas des joueurs : des morts qui étaient là avant le serveur. Des entités que le Cardinal n'a jamais officiellement créées. Chaque résurrection noire lui arrache un peu de mémoire, mais il continue, parce que les morts qu'il ranime se souviennent de choses que personne ne sait : le monde d'avant la première seed, le silence avant la compilation. Un mort, en particulier, s'est souvenu de la date de lancement du serveur et a souri en disant : « Ce n'est pas la première fois. » Angle : un mort qui se souvient d'avant le serveur — date de lancement, sourire, K3.
- **Traits** : obsédé, amaigri, parle aux cadavres comme à des vieux amis.
- **Voix** : fiévreuse, pressée (« Tu veux savoir ce qu'il y avait avant ? Je peux te le montrer. J'ai ranimé un mort, l'autre jour. Il m'a regardé. Il m'a dit : « Tu es la troisième version. » La troisième. Tu comprends ? Avant toi, avant moi, avant les Spriggans — il y avait eu d'autres versions. »).
- **Relations** : Vestale Passé `NPC_PEN_83` (cherche à lui voler son rite sans y parvenir) ; Fossoyeur Grim `NPC_PEN_05` (tension — Grim n'aime pas qu'on dérange les morts) ; Receleuse Nix `NPC_PEN_01` (lui achète des objets prélevés sur les cadavres ranimés).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_84_01` | K0 | necromancie, ruines | Pratique la nécromancie dans la Nécropole Antique | — |
| 2 | `QI_PEN_84_02` | K0 | morts, antiques | Ranime les morts des ruines — entités pré-Spriggan | — |
| 3 | `QI_PEN_84_03` | K0 | necropole, acces | Accès à la zone interdite de la Nécropole — plan connu de lui seul | — |
| 4 | `QI_PEN_84_04` | K1 | memoire, morts | Les morts qu'il ranime ont des souvenirs d'avant le serveur | — |
| 5 | `QI_PEN_84_05` | K1 | date, lancement | Un mort a cité la date de lancement du serveur — une date qui n'existe pas dans les archives | `AFF>=60` |
| 6 | `QI_PEN_84_06` | K1 | versions, monde | Le mort a parlé de « versions » du monde — il sait qu'il y en a eu d'autres | `AFF>=65` |
| 7 | `QI_PEN_84_07` | K2 | vestale, rite | Cherche le rite secret de la Vestale `NPC_PEN_83` — il croit qu'il permet de ranimer le premier mort | `AFF>=80` |
| 8 | `QI_PEN_84_08` | K2 | fossoyeur, conflit | Grim `NPC_PEN_05` le surveille — une confrontation est inévitable | `AFF>=85` |
| 9 | `QI_PEN_84_09` | K3 | mort, reset | Le mort qui se souvient d'avant le serveur n'est pas un Spriggan ni un joueur — c'est une instance du Cardinal d'un reset précédent. Le Nécromancien a ranimé une copie corrompue du Cardinal qui avait survécu à la réinitialisation du monde. Elle se souvient de tout — y compris des versions du monde que le Cardinal lui-même a oubliées | JAMAIS — déflection : *(il saisit un bras décharné qui dépasse d'un tas de pierres)* « Celui-ci. Il sait. Il était là à la création. Il m'a dit : « Le Cardinal ne crée pas. Il compile. Et la compilation échoue parfois. » *(il rit)* « Tu veux lui parler ? Il est… fatigué. Mais il parlera. Il parle toujours. » |
| 10 | `QI_PEN_84_10` | KX | *(hors sujet)* | « La mort n'est pas une fin. C'est une corruption de fichier. Et moi, je suis le débogueur. » | — |

## 4. Chaînage économique & quêtes

- **Black Market** : `!pen_necromancie_ranimer [cible]` — ranimer un mort (service payant, 10 000 Yrds, peut mal tourner).
- **Fils rouges** : nœud central de **💀 La Nécropole Ancestrale** (résurrection des morts non compilés). Relais de **🔮 Fil méta — La Ville Fantôme** (le mort ranimé est une instance du Cardinal d'un reset précédent).
- Donneur de `QST_PEN_MORT_AVANT_MONDE_01` (enquêter sur le mort qui se souvient du lancement).
- K3 en conflit avec l'instance `NPC_PEN_00` : tous deux détiennent des fragments de mémoire des resets.

## 5. Intégration Bot

- **Accueil** (`!parler necromancien ruines`) : *« T'en veux un ? Un mort qui parle ? J'en ai un qui se souvient du jour où le monde a été allumé. Un souvenir, ça s'achète. Ou ça s'échange. »*
- `!pen_necromancie_ranimer` — service de résurrection noire ; `!pen_necromancie_ecouter` — écouter les souvenirs des morts.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Nécromancien a ranimé une copie corrompue du Cardinal d'un reset précédent » réservé à l'orchestrateur.
