# 🕯️ Guide des Ruines Noires — `NPC_PEN_11`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_11` |
| **Nom affiché** | Guide des Ruines Noires |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (guide de chasse dans les Ruines Noires) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Ruines Noires |
| **Niveau / HP / MP** | 58 / 8 500 / 11 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Guide des Ruines Noires est le seul Spriggan qui connaît tous les chemins du fichier corrompu. Il arpente les Ruines Noires depuis des années, traçant des itinéraires, notant les apparitions d'ombres, et ramenant vivants ceux qui l'engagent comme guide. Il ne conduit jamais les chasseurs au cœur des ruines — il sait ce qui s'y trouve et refuse d'y aller. Ni menace, ni or, ni supplication ne le fera changer d'avis. Il a perdu trop d'amis dans les strates profondes, et il sait que le « nœud » central est une porte qu'il vaut mieux ne pas ouvrir.
- **Traits** : prudent, loquace sur les dangers, muré sur le centre.
- **Voix** : rapide, précise, celle d'un homme qui a l'habitude d'être écouté pour ne pas mourir (« Ici, tu suis mes traces ou tu crèves. Pas de troisième option. Les ombres ici ne sont pas des monstres. Ce sont des versions de toi qui ont mal tourné. »).
- **Relations** : Gardien Ruines Noires `NPC_PEN_10` (seul contact humain régulier — respect mutuel) ; Marchand de Fleurs `NPC_PEN_12` (lui indique où poussent les meilleures fleurs de gravats) ; Commandant Masques `NPC_PEN_09` (lui fournit des rapports de terrain — ne veut pas finir comme lui).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_11_01` | K0 | guide, ruines | Service de guide dans les Ruines Noires — tarifs, zones couvertes | — |
| 2 | `QI_PEN_11_02` | K0 | chasse, ombres | Types d'ombres, comportement, faiblesses | — |
| 3 | `QI_PEN_11_03` | K0 | survie, ruines | Équipement recommandé, pièges, zones à éviter | — |
| 4 | `QI_PEN_11_04` | K1 | coeur, interdit | Le cœur des Ruines Noires est interdit — il n'y emmène personne | `AFF>=65` |
| 5 | `QI_PEN_11_05` | K1 | ombres, doubles | Certaines ombres ressemblent à des Spriggans vivants — ce sont des « copies de sauvegarde » | `AFF>=70` |
| 6 | `QI_PEN_11_06` | K1 | portes, strates | Il a trouvé des portes qui mènent à d'autres strates — certaines ne sont pas de Penwether | — |
| 7 | `QI_PEN_11_07` | K2 | perte, equipe | Il a perdu une équipe au cœur des ruines — ils ont été « désindexés » | `AFF>=85` |
| 8 | `QI_PEN_11_08` | K2 | note, personnel | Il tient un carnet de bord qui cartographie les changements journaliers des ruines | `AFF>=88` |
| 9 | `QI_PEN_11_09` | K3 | noeud, porte | Le nœud central est une porte de compilation — elle mène au « dossier parent » du monde | JAMAIS — déflection : *(il recule d'un pas)* « Non. Non, ça, je ne le montre pas. La porte au centre n'est pas une porte. C'est une bouche. Et ce qui est derrière a déjà avalé trop de curieux. Je ne te dirai pas où elle est. Je ne te dirai même pas qu'elle existe. Alors arrête de poser la question. » |
| 10 | `QI_PEN_11_10` | KX | *(hors-sujet)* | « Je guide. Je ne parle pas. Si tu veux des réponses, va voir l'Archiviste. Moi, je te montre où poser les pieds. Et où ne pas les poser. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_CHASSE_01` (chasse aux ombres dans les Ruines Noires), `QST_PEN_EXPLO_01` (exploration de zone).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les portes de strates). Relais de **🔮 Fil méta — La Ville Fantôme** (la porte de compilation).
- Vente de `CARTE_RUINES_NOIRES` (guide cartographique fiable pour 48h).

## 5. Intégration Bot

- **Accueil** (`!parler guide_rn`) : *« Tu veux entrer dans les Ruines Noires ? T'as une arme ? T'as de l'eau ? T'as confiance en moi ? Parce qu'ici, la confiance, ça vaut plus que l'or. Alors ? On y va ou tu fais demi-tour ? »*
- `!guide_rn [zone]` (accompagnement) ; `!carnet_rn` (carnet de bord si `AFF>=88`).
