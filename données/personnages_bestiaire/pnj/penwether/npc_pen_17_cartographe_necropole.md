# 🕯️ Cartographe de la Nécropole — `NPC_PEN_17`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_17` |
| **Nom affiché** | Cartographe de la Nécropole |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (cartographie des strates de la Nécropole Antique) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Nécropole Antique |
| **Niveau / HP / MP** | 38 / 4 200 / 9 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : La Cartographe de la Nécropole est une Spriggan menue qui passe ses journées à descendre dans les strates funéraires pour en dessiner les plans. Elle est la seule personne à connaître l'évolution des salles, les nouveaux couloirs qui apparaissent, et les anciens qui disparaissent. Sa mission officielle est de tenir à jour les cartes pour les expéditions de Grim `NPC_PEN_05`. Sa mission officieuse est de comprendre pourquoi la Nécropole change de forme — et ce qu'elle cache dans sa strate la plus profonde. Elle a déjà cartographié la strate 5. La strate 6 reste un mystère qu'elle n'a pas encore percé.
- **Traits** : méthodique, courageuse sans le montrer, obsession des détails.
- **Voix** : rapide, technique, comme si elle lisait une légende de carte (« Strate 3, salle 7 : le mur nord s'est déplacé de 2 mètres vers l'est depuis ma dernière visite. Probablement une réorganisation des strates. Rien d'inquiétant. »).
- **Relations** : Gardien Nécropole `NPC_PEN_16` (lui signale les changements de structure) ; Fossoyeur Grim `NPC_PEN_05` (son employeur principal) ; Cartographe Maude `NPC_PEN_04` (sa « maîtresse » officieuse — Maude l'a formée à sentir les strates).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_17_01` | K0 | necropole, strates | Structure de la Nécropole : 6 strates connues | — |
| 2 | `QI_PEN_17_02` | K0 | cartes, service | Service de cartographie — commandes, prix, délais | — |
| 3 | `QI_PEN_17_03` | K0 | securite, donjon | Conseils de sécurité pour l'exploration de la Nécropole | — |
| 4 | `QI_PEN_17_04` | K1 | strate 6, inaccessible | La strate 6 est scellée — elle n'a pas pu y entrer | `AFF>=65` |
| 5 | `QI_PEN_17_05` | K1 | salles, mouvantes | Certaines salles changent de position entre deux visites | `AFF>=70` |
| 6 | `QI_PEN_17_06` | K1 | formation, maude | Maude `NPC_PEN_04` lui a appris à « sentir » les strates | — |
| 7 | `QI_PEN_17_07` | K2 | carte, strate 5 | Elle a une carte détaillée de la strate 5 — montre des symboles qu'elle ne comprend pas | `AFF>=85` |
| 8 | `QI_PEN_17_08` | K2 | symbole, systeme | Les symboles sur les murs de la strate 5 sont du code système — elle les a recopiés | `AFF>=88` |
| 9 | `QI_PEN_17_09` | K3 | code, systeme | Le code sur les murs de la strate 5 est un « journal de reset » — il enregistre chaque réinitialisation du monde | JAMAIS — déflection : *(elle referme son carnet)* « Je ne sais pas lire ce code. Mais je sais qu'il compte quelque chose. Il compte les fois où le monde est mort et revenu. La strate 5 en est à… beaucoup. Trop. Je n'ai pas montré ça à Grim. Pas encore. » |
| 10 | `QI_PEN_17_10` | KX | *(hors-sujet)* | « Les cartes ne sont jamais fausses. Juste incomplètes. Comme la connaissance. » | — |

## 4. Chaînage économique & quêtes

- **Service** : réalise des cartes personnalisées de la Nécropole (`!carte_necropole [strate]`).
- **Fils rouges** : rouage de **💀 La Nécropole Ancestrale** (cartographie des strates funéraires). Relais de **📜 Ce Que Cachent les Ruines** (le journal de reset sur les murs).
- Donneur de `QST_PEN_CARTE_NECRO_01` (cartographier une nouvelle salle dans la strate 5).

## 5. Intégration Bot

- **Accueil** (`!parler cartographe_necropole`) : *« Tu veux une carte ? J'en ai de toutes les strates. Mais attention : la Nécropole change d'avis sur sa propre géographie. Ce qui était vrai hier ne le sera peut-être pas demain. »*
- `!cartes_necropole` (catalogue) ; `!symbole_necropole [symbole]` (interprétation des symboles système).
