# 🕯️ Cartographe Maude — `NPC_PEN_04`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_04` |
| **Nom affiché** | Cartographe Maude |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (cartes des ruines, aveugle — « sent » les strates du serveur) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porche Effondré |
| **Niveau / HP / MP** | 42 / 3 800 / 8 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maude est aveugle de naissance — ou plutôt, elle est née sans « interface visuelle enregistrée ». Ses yeux sont blancs, opalescents, et ne voient pas la lumière. Mais elle « sent » les strates du serveur à travers le papier qu'elle touche. Quand elle trace une carte, ses doigts suivent les lignes de code enterrées sous les ruines, les failles de compilation, les nœuds mémoire que même les Archivistes ignorent. Elle travaille sous le Porche Effondré, un arc de pierre brisé qui soutient pourtant le ciel à cet endroit précis — peut-être parce que la carte qu'elle tient est plus vraie que l'architecture. Elle vend des cartes qui permettent aux fouilleurs de trouver ce qu'ils cherchent sans se perdre dans les rues changeantes. Ses cartes sont les seules à ne pas mentir.
- **Traits** : intuitive, silencieuse, parle par énigmes cartographiques, ne se trompe jamais.
- **Voix** : basse, comme si elle lisait une carte à haute voix (« La rue que tu cherches n'existe pas au nord. Elle existe à l'ouest, mais seulement les jours pairs. La nuit, elle est au sud. Suis la carte. Pas les pavés. »).
- **Relations** : Restaurateur Ruines `NPC_PEN_24` (voisin sous le Porche — il répare ce qu'elle cartographie) ; Receleuse Nix `NPC_PEN_01` (échange cartes contre artefacts) ; Fantôme des Ruines `NPC_PEN_00` (a « senti » sa présence sous la Bibliothèque — n'en parle jamais).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_04_01` | K0 | cartes, ruines | Vente de cartes des ruines de Penwether — fiables à 94% | — |
| 2 | `QI_PEN_04_02` | K0 | cecite, perception | Elle est aveugle mais « sent » les structures — elle ne sait pas expliquer comment | — |
| 3 | `QI_PEN_04_03` | K0 | porche, effondre | Le Porche Effondré : un point d'ancrage structural de la ville | — |
| 4 | `QI_PEN_04_04` | K1 | rues, mensonge | Ses cartes montrent le vrai plan de Penwether — celui que les rues cachent aux yeux | `AFF>=65` |
| 5 | `QI_PEN_04_05` | K1 | strates, sensation | Elle sent les strates du serveur sous la ville — comme des courants sous la terre | `AFF>=70` |
| 6 | `QI_PEN_04_06` | K1 | carte, profonde | Elle a une carte de la strate -12 — elle ne l'a montrée à personne | — |
| 7 | `QI_PEN_04_07` | K2 | necropole, cartes | Ses cartes de la Nécropole Antique montrent des salles qui n'existent pas — mais qu'elle « sent » exister | `AFF>=85` |
| 8 | `QI_PEN_04_08` | K2 | carte, fantome | Une carte qu'elle a tracée en dormant montre l'emplacement exact du Fantôme `NPC_PEN_00` | `AFF>=88` |
| 9 | `QI_PEN_04_09` | K3 | serveur, squelette | Elle a cartographié le « squelette » du serveur sous Penwether — la carte est une faille de sécurité | JAMAIS — déflection : *(elle pose ses doigts sur la carte et la déchire lentement)* « Certaines cartes ne sont pas faites pour être lues. Elles sont faites pour être senties. Et ce que je sens là-dessous… ce n'est pas une ville. C'est une fondation. Et les fondations, on ne les montre pas aux invités. » |
| 10 | `QI_PEN_04_10` | KX | *(hors-sujet)* | « Suis la carte. Pas les mots. Les mots mentent. Les cartes, non. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : vend `CARTE_RUINES_PEN` (navigation fiable), `CARTE_NECROPOLE` (salles cachées), `CARTE_STRATE` (accès strates basses).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (ses cartes montrent la vérité structurelle) et de **🔮 Fil méta — La Ville Fantôme** (elle peut cartographier le squelette serveur).
- Donneur de `QST_PEN_CARTE_01` (lui rapporter des relevés de terrain dans les Ruines Noires).

## 5. Intégration Bot

- **Accueil** (`!parler maude`) : *« Approche. Pose ta main sur la carte. Ne regarde pas. Sens. Ce que tu sens, c'est la ville réelle. L'autre, celle que tu vois, n'est qu'une façade. »*
- `!cartes maude` (catalogue) ; `!carte_guide maude [lieu]` (commande de carte personnalisée).
