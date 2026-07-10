# 🕯️ Gardien des Terres Grises — `NPC_PEN_13`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_13` |
| **Nom affiché** | Gardien des Terres Grises |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (HUNT_002 — garde les Terres Grises) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Terres Grises |
| **Niveau / HP / MP** | 62 / 17 000 / 6 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien des Terres Grises est posté à l'entrée de cette zone désolée, une étendue de cendres et de roches où les couleurs semblent avoir été délavées par un reset qui aurait mal pris. Les Terres Grises (HUNT_002) sont une zone tampon entre Penwether et la Nécropole Antique — un « vide de compilation » où les assets n'ont pas été chargés correctement. Le Gardien filtre les entrants, s'assure que personne ne rapporte de « parasites de strate » en ville, et tient un registre des disparitions. Il est le premier à remarquer que les Terres Grises s'étendent.
- **Traits** : méfiant, procédurier, sent la cendre.
- **Voix** : plate, comme les Terres qu'il garde (« Les Terres Grises ne pardonnent pas. Tu entres, tu signes. Tu sors, tu signes. Si tu ne sors pas, on signe ton nom sur la liste des disparus. »).
- **Relations** : Pisteur Terres Grises `NPC_PEN_14` (travail en binôme — le Gardien filtre, le Pisteur traque) ; Marchand de Pierres `NPC_PEN_15` (lui signale les zones à accès restreint) ; Commandant Masques `NPC_PEN_09` (son supérieur hiérarchique — reçoit ses ordres par l'Autre voix).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_13_01` | K0 | terres, grises | Les Terres Grises — zone de chasse, accès réglementé | — |
| 2 | `QI_PEN_13_02` | K0 | garde, filtrage | Procédure d'entrée et de sortie des Terres Grises | — |
| 3 | `QI_PEN_13_03` | K0 | disparitions, registre | Registre des disparus dans les Terres Grises | — |
| 4 | `QI_PEN_13_04` | K1 | reset, mauvais | Les Terres Grises sont un « artifact de reset » — des couleurs qui n'ont pas survécu | `AFF>=65` |
| 5 | `QI_PEN_13_05` | K1 | expansion, lente | Les Terres Grises s'étendent chaque mois — Penwether rétrécit à la marge | `AFF>=70` |
| 6 | `QI_PEN_13_06` | K1 | parasites, strate | Certains chasseurs reviennent avec des « parasites » — des fragments d'autres strates accrochés à leur équipement | — |
| 7 | `QI_PEN_13_07` | K2 | coeur, gris | Au centre des Terres Grises, il y a une zone où les couleurs n'ont jamais existé — un vide de compilation | `AFF>=85` |
| 8 | `QI_PEN_13_08` | K2 | disparus, epargnes | Certains disparus reviennent après des semaines — ils ne se souviennent de rien et parlent un langage qui n'existe pas | `AFF>=88` |
| 9 | `QI_PEN_13_09` | K3 | expansion, cause | Les Terres Grises s'étendent parce que le Cardinal « désalloue » la mémoire de Penwether au profit d'autres zones | JAMAIS — déflection : *(il regarde l'horizon gris)* « La ville rétrécit. Les Terres grises gagnent. Le Cardinal a besoin de place ailleurs. Pour quoi ? Je ne sais pas. Je ne veux pas savoir. Je garde. C'est tout. » |
| 10 | `QI_PEN_13_10` | KX | *(hors-sujet)* | « Tu veux mon avis ? Les Terres Grises, c'est la couleur du monde qui s'efface. Profite des couleurs tant qu'il y en a. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : contrôle l'accès aux Terres Grises. Délivre les permis de chasse.
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les Terres Grises sont un artifact de reset). Relais de **🔮 Fil méta — La Ville Fantôme** (le Cardinal désalloue Penwether).
- Donneur de `QST_PEN_GRIS_01` (enquêter sur un disparu revenu des Terres Grises).

## 5. Intégration Bot

- **Accueil** (`!parler gardien_tg`) : *« Tu veux entrer dans les Terres Grises ? Signe ici. Et ici. Et là. Non, pas là. Bon. Tu sais lire ? Tant mieux. Parce que les Terres Grises, elles écrivent leur propre histoire, et c'est rarement une bonne nouvelle. »*
- `!permis_chasse` (demande de permis) ; `!registre_gris` (liste des disparus récents).
