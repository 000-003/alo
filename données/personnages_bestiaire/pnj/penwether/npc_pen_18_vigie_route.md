# 🕯️ Vigie de la Route — `NPC_PEN_18`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_18` |
| **Nom affiché** | Vigie de la Route |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (ROUTE — garde la Route Aérienne PEN-ALN) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Route Aérienne PEN-ALN |
| **Niveau / HP / MP** | 58 / 15 000 / 6 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : La Vigie de la Route monte la garde sur la Route Aérienne qui relie Penwether à Alne. C'est un poste solitaire — perché sur un îlot rocheux à mi-chemin, il veille au trafic aérien, contrôle les cargaisons, et vérifie les identités des voyageurs. Il voit passer des marchands, des chasseurs, des réfugiés, et parfois des ombres qui ne devraient pas être là. Il est le premier à remarquer que des voyageurs entrent d'un côté sans sortir de l'autre. Il note tout dans un registre qu'il espère ne jamais devoir montrer à personne.
- **Traits** : solitaire, consciencieux, développe une paranoïa justifiée.
- **Voix** : fatiguée, portée par le vent d'altitude (« Un de plus qui passe. Celui-ci, je l'ai déjà vu passer dans l'autre sens hier. Mais il ne se souvenait pas de moi. Bizarre, non ? »).
- **Relations** : Marchand Vol `NPC_PEN_19` (voisin sur l'îlot voisin — lui achète des potions contre le mal d'altitude) ; Commandant Masques `NPC_PEN_09` (son supérieur — reçoit ses ordres par messager, pas par l'Autre voix, heureusement).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_18_01` | K0 | route, aerienne | La Route Aérienne PEN-ALN — fonctionnement, horaires, taxes | — |
| 2 | `QI_PEN_18_02` | K0 | trafic, controle | Contrôle des voyageurs et des marchandises | — |
| 3 | `QI_PEN_18_03` | K0 | ilot, vigie | Vie sur l'îlot de vigie — ravitaillement, relève | — |
| 4 | `QI_PEN_18_04` | K1 | disparitions, route | Des voyageurs entrent dans la route sans en sortir — ou inversement | `AFF>=65` |
| 5 | `QI_PEN_18_05` | K1 | doubles, voyageurs | Certains voyageurs passent plusieurs fois — identiques mais sans souvenirs | `AFF>=70` |
| 6 | `QI_PEN_18_06` | K1 | alne, distance | Il n'est jamais allé à Alne — personne de son poste n'y est allé | — |
| 7 | `QI_PEN_18_07` | K2 | boucle, temporelle | La Route Aérienne pourrait être une boucle — ceux qui la parcourent reviennent sans le savoir | `AFF>=85` |
| 8 | `QI_PEN_18_08` | K2 | registre, disparus | Son registre montre que le nombre de voyageurs entrants est supérieur aux sortants depuis 6 mois | `AFF>=88` |
| 9 | `QI_PEN_18_09` | K3 | route, dimension | La Route Aérienne n'est pas un chemin — c'est un « tuyau de transfert » entre deux serveurs | JAMAIS — déflection : *(il regarde le ciel)* « La route ne va nulle part. Elle relie deux points qui ne sont pas dans le même monde. Penwether et Alne ne sont pas séparées par la distance. Elles sont séparées par une compilation. La route est un pont entre deux programmes qui ne devraient pas communiquer. » |
| 10 | `QI_PEN_18_10` | KX | *(hors-sujet)* | « Tu veux mon avis ? La route aérienne, c'est une veine. Et les veines, ça saigne. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : contrôle le trafic sur la Route Aérienne. Délivre les laissez-passer.
- **Fils rouges** : rouage de **🔮 Fil méta — La Ville Fantôme** (la route est un tuyau de transfert entre serveurs). Relais de **📜 Ce Que Cachent les Ruines** (les voyageurs qui disparaissent).
- Donneur de `QST_PEN_ROUTE_01` (enquêter sur le registre des disparus de la Route Aérienne).

## 5. Intégration Bot

- **Accueil** (`!parler vigie_route`) : *« Bienvenue sur la Route Aérienne. Nom, origine, destination, motif du voyage. Et ne me dis pas que tu es touriste — personne ne fait du tourisme sur une route qui mène nulle part. »*
- `!laissez_passer vigie` (demande d'autorisation de transit) ; `!registre_route` (consultation du registre des passages).
