# 🕯️ Courtier d'Alne — `NPC_PEN_92`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_92` |
| **Nom affiché** | Courtier d'Alne |
| **Race** | Sylphe |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (diplomate d'Alne — Salle du Conseil Voilé) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Salle du Conseil Voilé |
| **Niveau / HP / MP** | 32 / 3 000 / 6 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Diplomate sylphe envoyé par Bomil d'Alne (`NPC_ALN_93`) pour représenter les intérêts de la cité-État auprès du Conseil Voilé de Penwether. Officiellement, il négocie des accords commerciaux. Officieusement, il rapporte à Bomil tout ce qui concerne les ruines, les gemmes et les mouvements du Conseil. Il sait que les ruines de Penwether n'ont pas d'âge — aucune datation ne fonctionne. Les pierres ne vieillissent pas. Les inscriptions ne s'érodent pas. Le temps lui-même semble suspendu dans les ruines. Et Bomil veut savoir pourquoi. Angle : connaît Bomil `NPC_ALN_93` ; sait que les ruines n'ont pas d'âge.
- **Traits** : diplomate, réservé, note tout sur un carnet qu'il ne montre jamais.
- **Voix** : posée, mesurée, avec une précision oratoire (« Les ruines sont anciennes. Mais ancien comment ? J'ai fait dater les pierres par trois écoles différentes. Toutes ont échoué. Comme si le temps n'avait pas prise sur elles. Comme si elles étaient… hors du temps. »).
- **Relations** : Bomil `NPC_ALN_93` (son employeur — lien inter-cités Alne) ; Chancelier Masques `NPC_PEN_07` (son interlocuteur officiel au Conseil) ; Marchand Gnome `NPC_PEN_91` (contact pour les gemmes des ruines).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_92_01` | K0 | alne, diplomatie | Diplomate d'Alne — représentant commercial au Conseil | — |
| 2 | `QI_PEN_92_02` | K0 | bomil, employeur | Travaille pour Bomil `NPC_ALN_93` — transmet des rapports | — |
| 3 | `QI_PEN_92_03` | K0 | conseil, acces | Accès à la Salle du Conseil Voilé — négociations officielles | — |
| 4 | `QI_PEN_92_04` | K1 | ruines, age | Les ruines n'ont pas d'âge — aucune datation possible | — |
| 5 | `QI_PEN_92_05` | K1 | bomil, mission | Bomil l'a chargé d'enquêter sur la nature des ruines | `AFF>=60` |
| 6 | `QI_PEN_92_06` | K1 | ruines, temps | Le temps ne passe pas dans les ruines — les pierres ne vieillissent pas | `AFF>=65` |
| 7 | `QI_PEN_92_07` | K2 | bomil, theorie | Bomil pense que les ruines sont des artefacts du Cardinal — préexistants au monde | `AFF>=80` |
| 8 | `QI_PEN_92_08` | K2 | gnome, collaboration | `NPC_PEN_91` lui fournit des gemmes des ruines pour analyse | `AFF>=85` |
| 9 | `QI_PEN_92_09` | K3 | ruines, horodatage | Les ruines n'ont pas d'âge parce qu'elles n'existent pas dans le temps linéaire. Ce sont des fichiers système dont l'horodatage est antérieur à l'initialisation du serveur. Le Cardinal a compilé Penwether avec une seed de temps zéro — les ruines sont « antérieures à tout » dans la base de données. Bomil cherche à accéder aux métadonnées de compilation, qui révéleraient la date réelle de création du serveur | JAMAIS — déflection : *(il referme son carnet)* « Les pierres sont vieilles. C'est tout. Très vieilles. Bomil est curieux. C'est un Gnome, les Gnomes sont curieux. Il veut juste savoir. …pour savoir. » |
| 10 | `QI_PEN_92_10` | KX | *(hors sujet)* | « Le temps ne ment pas. Mais les pierres, si. Surtout celles qui n'ont pas d'âge. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_courtier_rapport` — rapport diplomatique (infos générales). `!pen_courtier_ruines` — infos sur les ruines (avec affinité).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les ruines préexistent au temps). Lien inter-cités Alne via Bomil `NPC_ALN_93`.
- Donneur de `QST_PEN_DATATION_01` (découvrir pourquoi les ruines n'ont pas d'âge — peut mener à Bomil `NPC_ALN_93`).

## 5. Intégration Bot

- **Accueil** (`!parler courtier alne`) : *« Le Conseil m'accorde une audience quand je le demande. Penwether est une cité fascinante. Ses ruines surtout. Elles défient toute chronologie. »*
- `!pen_courtier_rapport` — rapport ; `!pen_courtier_bomil` — informations sur Bomil.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « ruines = fichiers système avec seed de temps zéro » réservé à l'orchestrateur.
