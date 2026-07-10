# 🔨 Marchand de Gemmes — `NPC_BRO_34`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_34` |
| **Nom affiché** | Marchand de Gemmes |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (gemmes, décorations serties) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 18 / 1 100 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vendeur de gemmes précieuses — rubis, saphirs, émeraudes — pour sertir les armes et armures de prestige. Sa famille est en conflit commercial avec les joailliers Gnomes de Granzam, qui prétendent que seuls leurs cristaux ont la pureté suffisante pour les armes de haut rang. Lui, il taille et polit des gemmes locales, extraites dans les profondeurs de Brokkheim, qui ont un éclat plus chaud. Angle : la rivalité Granzam (gemmes Gnomes vs forge Leprechaun) couve — et ses gemmes « chantent » quand on les approche du Pouls.
- **Traits** : fier, un peu vindicatif contre les Gnomes, artiste de la taille, sensible à la lumière.
- **Voix** : précise, mesurée (« Une gemme de Brokkheim contre dix de Granzam. L'éclat ne fait pas tout. »).
- **Relations** : `NPC_BRO_31` (sert ses lames) ; `NPC_BRO_32` (orne ses heaumes) ; `NPC_BRO_37` (métaux rares — cadre de gemmes) ; `NPC_BRO_40` (finit les armes d'apparat).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_34_01` | K0 | gemmes, catalogue | Rubis, saphirs, émeraudes : 50-2000 Yrds | — |
| 2 | `QI_BRO_34_02` | K0 | taille, brokkheim | La taille des gemmes de Brokkheim — spécificité locale | — |
| 3 | `QI_BRO_34_03` | K0 | sertissage, armes | Services de sertissage sur armes et armures | — |
| 4 | `QI_BRO_34_04` | K1 | rivalite, granzam | Les Gnomes de Granzam dénigrent ses gemmes pour protéger leur marché | — |
| 5 | `QI_BRO_34_05` | K1 | gemme, chant | Ses gemmes « chantent » une note quand approchées du Pouls | `AFF>=60` |
| 6 | `QI_BRO_34_06` | K1 | granzam, sabotage | Un agent Granzam a été vu à la Halle — il vole des échantillons | `AFF>=65` |
| 7 | `QI_BRO_34_07` | K2 | gemme, profondeur | Les gemmes viennent d'une veine sous le canal 7 — là où l'eau des Undines a cristallisé la roche | `AFF>=80` |
| 8 | `QI_BRO_34_08` | K2 | granzam, espion | Le marchand de gemmes de Granzam (`NPC_BRO_34` — lien extérieur) a offert une prime pour ses secrets de taille | `AFF>=85+QUEST:QST_BRO_RIVAL_01` |
| 9 | `QI_BRO_34_09` | K3 | gemmes, fragments pacte | Les gemmes de Brokkheim ne sont pas des pierres — ce sont des larmes solidifiées du Pacte des Eaux. Chaque gemme est une promesse qu'une Undine a faite aux premiers forgerons. Les Gnomes de Granzam le savent — ils veulent les gemmes pour briser le Pacte | JAMAIS — déflection : *(il ferme son écrin)* « Mes gemmes viennent de la montagne. De la roche. De la profondeur. Rien d'autre. Si Granzam dit le contraire, c'est qu'ils ont peur de notre savoir-faire. » |
| 10 | `QI_BRO_34_10` | KX | *(hors sujet)* | « La lumière traverse la pierre. La pierre traverse le temps. » | — |

## 4. Chaînage économique & quêtes

- **Marchand de gemmes** : `!buy_gems` (gemmes, sertissage).
- Fil **Rivalité Mineurs** (conflit Granzam) + **Pacte des Eaux** (gemmes = larmes d'Undine).
- Quête `QST_BRO_RIVAL_01` : démasquer l'agent Granzam à la Halle.

## 5. Intégration Bot

- **Accueil** (`!parler gemmes`) : *« Une gemme de Brokkheim vaut cent pierres de Granzam. Et encore, je suis modeste. »*
- `!buy_gems` — catalogue des gemmes et services de sertissage.
- `NPC_SECRET_PROBED` slot 9 : hook « gemmes/larmes Pacte » pour l'orchestrateur.
