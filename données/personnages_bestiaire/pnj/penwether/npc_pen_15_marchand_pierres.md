# 🕯️ Marchand de Pierres — `NPC_PEN_15`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_15` |
| **Nom affiché** | Marchand de Pierres |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (pierres antiques des Terres Grises — fragments de compilation) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Terres Grises |
| **Niveau / HP / MP** | 35 / 4 000 / 6 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Marchand de Pierres collecte les fragments rocheux des Terres Grises que les chasseurs et pisteurs lui rapportent. Il les taille, les identifie, et les revend comme « pierres antiques ». Mais ce ne sont pas de simples minéraux : chaque pierre est un fragment de compilation, un éclat des données qui n'ont pas été chargées lors de l'initialisation du monde. Certaines contiennent des images résiduelles, des bribes de texte système, ou des sons qui n'appartiennent à rien de connu. Il ne dit jamais à ses clients ce qu'elles contiennent vraiment — il les vend comme des curiosités, des talismans, ou des composants alchimiques. Mais il garde les pierres « parlantes » sous son étal, dans une boîte qu'il n'ouvre jamais.
- **Traits** : avare de mots, collectionneur compulsif, semble écouter les pierres.
- **Voix** : sourde, comme si elle venait de sous terre (« Celle-ci vient du bord de la zone grise. Tu l'entends ? Elle résonne. Elle a été compilée trop vite. »).
- **Relations** : Pisteur Terres Grises `NPC_PEN_14` (lui fournit les meilleurs fragments) ; Gardien Terres Grises `NPC_PEN_13` (le ravitaille en échange de pierres « silencieuses ») ; Receleuse Nix `NPC_PEN_01` (lui achète les pierres « qui saignent »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_15_01` | K0 | pierres, vente | Catalogue de pierres antiques — prix, provenances | — |
| 2 | `QI_PEN_15_02` | K0 | collection, tri | Comment il trie les pierres — qualité, résonance, couleur | — |
| 3 | `QI_PEN_15_03` | K0 | terres, grises | Connaissances générales sur les Terres Grises | — |
| 4 | `QI_PEN_15_04` | K1 | fragments, compilation | Les pierres sont des fragments de compilation — pas des minéraux | `AFF>=65` |
| 5 | `QI_PEN_15_05` | K1 | resonance, donnees | Les pierres « résonnent » quand elles contiennent des données non chargées | `AFF>=70` |
| 6 | `QI_PEN_15_06` | K1 | boite, secrete | Il garde les pierres « parlantes » dans une boîte fermée — il ne les vend pas | — |
| 7 | `QI_PEN_15_07` | K2 | pierre, image | Une pierre contient l'image d'un Spriggan qui n'existe pas — un visage sans nom | `AFF>=85` |
| 8 | `QI_PEN_15_08` | K2 | acheteur, masque | Un acheteur masqué lui commande des pierres spécifiques — des fragments de la strate -12 | `AFF>=88` |
| 9 | `QI_PEN_15_09` | K3 | pierre, origine | La plus vieille pierre de sa collection date d'avant le premier Spriggan — c'est un fragment du « plan initial » du monde | JAMAIS — déflection : *(il ferme la boîte lentement)* « Celle-ci n'est pas à vendre. Pas à montrer. Pas à nommer. Elle vient d'avant tout. Et elle contient tout. Si je l'ouvrais devant toi… tu verrais le plan du monde. Et tu ne t'en remettrais pas. » |
| 10 | `QI_PEN_15_10` | KX | *(hors-sujet)* | « Les pierres ne mentent pas. Elles résonnent ou elles se taisent. C'est toi qui décides si tu veux entendre. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : vend `PIERRE_ANTIQUE_BRUTE` (ressource alchimique), `PIERRE_RESONNANTE` (composant quête), `PIERRE_SILENCIEUSE` (décoration).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les fragments de compilation). Relais de **🔑 Le Pacte des Ombres** (l'acheteur masqué de fragments de strate -12).
- Donneur de `QST_PEN_PIERRE_01` (lui rapporter une pierre spécifique des Terres Grises).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_pierres`) : *« Des pierres. J'ai des pierres. Tu veux une pierre ? Regarde. Touche. Écoute. Chacune a quelque chose à dire, même celles qui se taisent. »*
- `!pierres marchand` (catalogue) ; `!ecouter pierre [nom]` (entendre la résonance).
