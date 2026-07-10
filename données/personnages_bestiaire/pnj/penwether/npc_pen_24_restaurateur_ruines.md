# 🕯️ Restaurateur des Ruines — `NPC_PEN_24`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_24` |
| **Nom affiché** | Restaurateur des Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (réparation des structures ruinées de Penwether) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porche Effondré |
| **Niveau / HP / MP** | 45 / 6 000 / 4 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Restaurateur des Ruines est celui qui répare ce que le temps et les Spriggans cassent. Il consolide les arcs menaçants, rebouche les fissures, remplace les pierres trop abîmées. Il travaille sous le Porche Effondré, à côté de Maude `NPC_PEN_04`, et ses outils sont à la fois physiques et… autres. Il utilise un mortier spécial qu'il prépare lui-même, dont il ne révèle jamais la recette. En vérité, le mortier contient des fragments de code broyé — des résidus de compilation qu'il récupère dans les ruines. Quand il répare un mur, il répare aussi la strate de code qui le sous-tend. Il est le gardien silencieux de l'intégrité structurelle de Penwether — et peut-être du serveur.
- **Traits** : pragmatique, taiseux, ne jure que par la qualité de son mortier.
- **Voix** : bourrue, avec un amour discret des pierres (« Une pierre bien posée, ça dure plus longtemps qu'un Spriggan. Je répare les deux, mais les pierres sont plus reconnaissantes. »).
- **Relations** : Cartographe Maude `NPC_PEN_04` (voisine sous le Porche — elle cartographie, il répare) ; Concierge Marché `NPC_PEN_20` (lui fournit des matériaux de récupération) ; Gardien Ruines `NPC_PEN_08` (échange : le Gardien lui signale les ruines qui bougent la nuit, il les répare au matin).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_24_01` | K0 | reparation, ruines | Services de réparation — maçonnerie, consolidation, restauration | — |
| 2 | `QI_PEN_24_02` | K0 | mortier, recette | Son mortier spécial — plus résistant que le mortier ordinaire | — |
| 3 | `QI_PEN_24_03` | K0 | porche, effondre | Le Porche Effondré — son atelier, son histoire | — |
| 4 | `QI_PEN_24_04` | K1 | mortier, code | Son mortier contient des fragments de code broyé — il répare les structures ET les strates | `AFF>=65` |
| 5 | `QI_PEN_24_05` | K1 | nuit, reparations | Il répare chaque matin ce que les ruines ont réorganisé la nuit | `AFF>=70` |
| 6 | `QI_PEN_24_06` | K1 | gardien, signalements | Le Gardien `NPC_PEN_08` lui signale les pierres qui ont bougé dans la nuit | — |
| 7 | `QI_PEN_24_07` | K2 | code, provenance | Il récupère les fragments de code dans les strates basses — il sait où creuser | `AFF>=85` |
| 8 | `QI_PEN_24_08` | K2 | reparation, impossible | Il a déjà essayé de réparer une ruine qui « saignait » du code — elle a repoussé son mortier | `AFF>=88` |
| 9 | `QI_PEN_24_09` | K3 | ruine, saignante | Les ruines qui « saignent » du code sont des « fuites actives » — des points où le code source du monde suinte dans la réalité | JAMAIS — déflection : *(il serre sa truelle)* « Les ruines qui saignent, on ne les répare pas. On les isole. Parce que ce qui suinte, ce n'est pas du mortier qui peut le boucher. C'est le monde qui fuit par une fissure. Et si tu bouches la fissure du mauvais côté… tu risques d'étouffer le monde. Alors je les laisse suinter. Et je regarde. » |
| 10 | `QI_PEN_24_10` | KX | *(hors-sujet)* | « Une ruine, ça se répare. Un monde, ça se reconstruit. Mais d'abord, il faut que quelqu'un tienne la truelle. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!reparation_ruines [lieu]` (consolidation de structure), `!mortier_restaurateur` (vente de mortier spécial).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les ruines saignent du code source). Relais de **🎭 Les Illusions Qui Mentent** (les ruines qui bougent la nuit).
- Donneur de `QST_PEN_REPARATION_01` (l'aider à réparer une ruine qui saigne).

## 5. Intégration Bot

- **Accueil** (`!parler restaurateur`) : *« Tu as une ruine à réparer ? Ou c'est la ruine qui te répare ? Les deux arrivent plus souvent qu'on ne le croit. Montre-moi la fissure. Je verrai si mon mortier peut faire quelque chose. »*
- `!reparation_ruines` (service de réparation) ; `!mortier` (achat de mortier spécial).
