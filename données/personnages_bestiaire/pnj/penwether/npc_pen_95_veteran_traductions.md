# 🕯️ Vétéran des Traductions — `NPC_PEN_95`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_95` |
| **Nom affiché** | Vétéran des Traductions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (ancien traducteur — Bibliothèque Enterrée) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Bibliothèque Enterrée |
| **Niveau / HP / MP** | 55 / 7 500 / 10 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien traducteur des archives de Penwether, le Vétéran a passé sa vie à déchiffrer les textes des ruines — des inscriptions, des parchemins, des gravures. Et il a fait une découverte troublante : la langue dans laquelle ils sont écrits n'est pas une langue humaine. Ce n'est pas une langue Spriggan. Ce n'est pas une langue Imp, Gnome ou Sylphe. C'est une langue qui précède toutes les races. Une langue faite de motifs répétés, d'instructions, de séquences — du code. Les ruines sont écrites dans la langue du Cardinal, et il a passé des cycles à la traduire sans dire à personne ce qu'elle révélait. Angle : la langue des ruines n'est pas humaine — c'est du code, la langue du Cardinal.
- **Traits** : érudit, secret, parle comme s'il lisait un texte en continu.
- **Voix** : précise, hésitante sur certains mots — des mots qu'il n'arrive pas à traduire (« Les ruines parlent. Le problème, c'est que leur langue n'a pas de locuteurs. Pas de bouche pour la dire. Juste des yeux pour la lire. Et ce qu'elle dit… ce n'est pas une histoire. C'est un programme. »).
- **Relations** : Archiviste Sans Nom `NPC_PEN_06` (le seul autre traducteur — rivalité feutrée sur l'interprétation des textes) ; Vétéran Ruines `NPC_PEN_85` (ancien compagnon d'expédition) ; Bibliothécaire `NPC_PEN_29` (lui fournit les parchemins à traduire).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_95_01` | K0 | traduction, ruines | Traduit les textes des ruines — inscriptions, parchemins | — |
| 2 | `QI_PEN_95_02` | K0 | bibliotheque, archives | Travaille à la Bibliothèque Enterrée — strates 1 à 5 | — |
| 3 | `QI_PEN_95_03` | K0 | langues, connues | Connaît toutes les langues races — aucune ne correspond aux ruines | — |
| 4 | `QI_PEN_95_04` | K1 | langue, non humaine | La langue des ruines n'est pas humaine — pas une langue de race connue | — |
| 5 | `QI_PEN_95_05` | K1 | motifs, sequences | Les textes sont faits de motifs répétés — comme des instructions | `AFF>=60` |
| 6 | `QI_PEN_95_06` | K1 | archiviste, rivalite | L'Archiviste `NPC_PEN_06` prétend que c'est une langue religieuse — c'est faux | `AFF>=65` |
| 7 | `QI_PEN_95_07` | K2 | code, cardinal | La langue est un langage de programmation — les ruines sont du code exécutable | `AFF>=80` |
| 8 | `QI_PEN_95_08` | K2 | traduction, cle | Certains blocs de texte sont des commandes — des instructions que le Cardinal exécute | `AFF>=85` |
| 9 | `QI_PEN_95_09` | K3 | langue, creation | La langue des ruines est le langage source du serveur — le Cardinal a écrit le monde dans cette langue. Les ruines ne sont pas des ruines : ce sont des fichiers source que le Cardinal n'a pas effacés après compilation. Le Vétéran a traduit assez pour comprendre que Penwether elle-même est une fonction — un module du programme principal. Un jour, il finira la traduction et saura exactement ce que le Cardinal cache dans ses plus vieux fichiers | JAMAIS — déflection : *(il pose un parchemin)* « Je n'ai pas tout traduit. Il manque des mots. Beaucoup de mots. Et ceux que j'ai traduits… *(il hésite)* …ils ne devraient pas être lus. » |
| 10 | `QI_PEN_95_10` | KX | *(hors sujet)* | « Les mots sont des fenêtres. Mais certaines fenêtres donnent sur le vide. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_TRADUCTION_01` (traduire un parchemin spécifique des ruines). `QST_PEN_LANGUE_ORIGINE_01` (découvrir l'origine de la langue — quête fil rouge **📜 Ce Que Cachent les Ruines**).
- **Fils rouges** : nœud central de **📜 Ce Que Cachent les Ruines** (les ruines sont des fichiers source du Cardinal). Relais de **🔮 Fil méta — La Ville Fantôme** (Penwether est une fonction du programme principal).
- Rivalité intellectuelle avec l'Archiviste Sans Nom `NPC_PEN_06`.

## 5. Intégration Bot

- **Accueil** (`!parler veterant traductions`) : *« Un parchemin des ruines ? Assieds-toi. Je vais te dire ce qu'il dit. Mais je te préviens : ce n'est pas une histoire. C'est une instruction. »*
- `!pen_traduction_parchemin` — traduire un parchemin ; `!pen_traduction_langue` — explication sur la langue des ruines.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « langue des ruines = langage source du serveur — Penwether est une fonction compilée » réservé à l'orchestrateur.
