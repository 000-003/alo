# ⛏️ Intendant du Conseil — `NPC_GRA_87`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_87` |
| **Nom affiché** | Intendant du Conseil |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 20 / 1 300 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Trésorier et intendant de la Salle du Conseil. Il gère les fonds de la cité, les caisses de gemmes et les réserves de minerai. Depuis un mois, il a remarqué que l'or de la caisse du Conseil tintinnabule anormalement — les pièces sonnent « mou », comme si elles étaient en plomb recouvert d'une pellicule d'or. Il a fait analyser discrètement une pièce par le Marchand Leprechaun (`NPC_GRA_91`), qui a confirmé : l'or est falsifié. Mais personne ne peut entrer dans la chambre forte sauf lui et le Vice-Chancelier (`NPC_GRA_27`). **Angle** : Un or qui tintinnabule étrangement.
- **Traits** : méticuleux, honnête, inquiet, collectionneur de pièces.
- **Voix** : Précise, comptable, un peu sèche. « L'or ne ment pas. Le son non plus. Et le son de cette pièce… il ment. »
- **Relations** : `NPC_GRA_27` (Vice-Chancelier — seul autre accès à la chambre) ; `NPC_GRA_91` (Marchand Leprechaun — a expertisé les pièces) ; `NPC_GRA_88` (Ombre du Conseil — le surveille).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_87_01` | K0 | intendant, tresor | Gestion du trésor de Granzam — budget, réserves | — |
| 2 | `QI_GRA_87_02` | K0 | or, monnaie | La monnaie de Granzam — pièces de granit, d'or, de mithril | — |
| 3 | `QI_GRA_87_03` | K0 | granzam, finances | Les finances de la cité — impôts, taxes minières | — |
| 4 | `QI_GRA_87_04` | K1 | piece, son mou | Des pièces d'or sonnent « mou » — comme du plomb doré | `AFF>=60` |
| 5 | `QI_GRA_87_05` | K1 | leprechaun, analyse | Le Marchand Leprechaun `NPC_GRA_91` a confirmé la falsification | `AFF>=65` |
| 6 | `QI_GRA_87_06` | K1 | chambre, acces | Seuls lui et le Vice-Chancelier ont la clé de la chambre forte | — |
| 7 | `QI_GRA_87_07` | K2 | vice_chancelier, fonds | Le Vice-Chancelier `NPC_GRA_27` a fait un retrait important il y a deux mois — « pour un projet du Conseil » | `AFF>=85` |
| 8 | `QI_GRA_87_08` | K2 | plomb, origine | Le plomb sous l'or vient de la Mine de Mithril — un minerai de rebut | `QUEST:QST_GRA_OR_FALSIFIE` |
| 9 | `QI_GRA_87_09` | K3 | or, seed, duplication | L'or falsifié est créé par duplication de seed — quelqu'un utilise le Cœur de Granit `NPC_GRA_00` pour dupliquer des ressources en copiant la signature de seed des pièces originales. Le plomb est le matériau hôte, la pellicule d'or est une impression de seed. Le Vice-Chancelier finance quelque chose avec cette fausse monnaie | JAMAIS — déflection : *(il referme le coffre à clé)* « Je me suis trompé. Les pièces sont bonnes. La réverbération de la salle, sans doute. Tout va bien. » |
| 10 | `QI_GRA_87_10` | KX | *(hors sujet)* | *(il compte des pièces sur son bureau)* « L'or, ça s'compte. Les secrets, ça se compte pas. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!change <montant>` (change de devises — gemmes, or, mithril).
- Porteur du fil **🔒 Le Coffre Qui Respire** (fausse monnaie liée au Vice-Chancelier).
- Donneur de `QST_GRA_OR_FALSIFIE` : enquête sur la falsification de l'or du Conseil.

## 5. Intégration Bot

- **Accueil** (`!parler intendant`) : *Assis derrière un bureau de granit couvert de registres, il soupèse une pièce.* « L'or de Granzam est pur. Pur. Je le garantis. » *Il te regarde.* « Tu veux changer quelque chose ? »
- `!change <montant>` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « duplication de seed / fausse monnaie » pour l'orchestrateur.
