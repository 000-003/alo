# 🔨 Maître Forgeron Lames — `NPC_BRO_70`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_70` |
| **Nom affiché** | Maître Forgeron Lames |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (forge de lames légendaires) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Manufacture Automates (forge personnelle) |
| **Niveau / HP / MP** | 58 / 9 500 / 3 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le plus grand forgeron de lames vivant de Brokkheim. Il forge des épées qui n'existent dans aucun dictionnaire d'ALO — des lames dont les propriétés ne sont pas écrites dans la base de données du jeu. Sa dernière création, « L'Hors-Dictionnaire », est une épée dont le nom n'apparaît pas dans le System. Il sait que cette lame a été forgée avec un fragment de l'Enclume du Cardinal que lui a fourni l'Ombre `NPC_BRO_67`. Il accepte d'enseigner la forge légendaire au joueur qui lui apporte un métal qui n'existe pas — K3 sur l'Enclume.
- **Traits** : génie taciturne, mains tremblantes de tension créative, obsession du défaut parfait.
- **Voix** : phrases hachées, comme s'il forgeait ses mots en même temps que ses lames.
- **Relations** : Ombre Conseil `NPC_BRO_67` (fournisseur de métal cardinal) ; Apprenti Forgeur `NPC_BRO_71` (son ancien élève — l'a déçu en partant à la Forge-Mère) ; Modeleur Métal `NPC_BRO_73` (lui prépare les formes complexes).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_70_01` | K0 | enseignement, forge | Conditions d'apprentissage : skill forge 450+, apporter un matériau rare | — |
| 2 | `QI_BRO_70_02` | K0 | lames, catalogue | Les types de lames qu'il forge : épées, katanas, lances (légendaires T4-T5) | — |
| 3 | `QI_BRO_70_03` | K0 | forgeron, histoire | Son histoire : trente ans à la Manufacture, élève du dernier maître de la Forge-Mère | — |
| 4 | `QI_BRO_70_04` | K1 | hors-dictionnaire | L'Hors-Dictionnaire existe — une lame dont le System n'a pas le nom | `AFF>=65` |
| 5 | `QI_BRO_70_05` | K1 | propriete, unique | La lame inflige des dégâts qui ne sont pas calculés par les formules standards d'ALO | — |
| 6 | `QI_BRO_70_06` | K1 | metal, ombre | Le métal vient de l'Ombre `NPC_BRO_67` — « mithril cardinal », dit-il | `AFF>=70` |
| 7 | `QI_BRO_70_07` | K2 | enclume, fragment | Le métal est un fragment de l'Enclume du Cardinal — il l'a compris en le forgeant | `AFF>=80` |
| 8 | `QI_BRO_70_08` | K2 | forge, effet | Forger avec le métal cardinal fait apparaître des runes dans le feu — une langue qu'il ne connaît pas | `AFF>=90` |
| 9 | `QI_BRO_70_09` | K3 | lame, dictionnaire | La lame n'a pas de nom dans le dictionnaire parce qu'elle est fabriquée avec un matériau extérieur à la base de données d'ALO. L'Enclume produit un métal que le System ne reconnaît pas — une brèche dans la matrice du jeu. Forger avec, c'est écrire dans les marges de la réalité du serveur | JAMAIS — déflection : *(il plonge la lame dans l'eau — le sifflement couvre sa voix)* « Une bonne lame n'a pas besoin de nom. Elle se reconnaît à son fil, pas à son étiquette. » |
| 10 | `QI_BRO_70_10` | KX | *(tout le reste)* | « La forge attend. Le métal aussi. Reviens quand tu auras quelque chose qui vaille la peine d'être fondu. » | — |

## 4. Chaînage économique & quêtes

- SKILL_MASTER — enseigne la forge de lames légendaires (skill forge rang Maître).
- Condition d'accès : apporter un « métal qui n'existe pas » (fragment de l'Enclume — hooké via `QST_BRO_ENCLUME_01`).
- K3 : l'Hors-Dictionnaire comme artefact hors-base — fil Trempe Légendaire + Enclume.
- `QST_BRO_HORS_DICO_01` : forger une lame hors dictionnaire.

## 5. Intégration Bot

- **Accueil** (`!parler maitre_forgeron`) : *« Le métal parle. La forge écoute. Toi, tais-toi et regarde. »*
- `!train forge_legendaire` : session d'entraînement à la forge légendaire (skill forge 450+ requis).
