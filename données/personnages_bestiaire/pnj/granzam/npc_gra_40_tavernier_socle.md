# ⛏️ Tavernier du Socle — `NPC_GRA_40`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_40` |
| **Nom affiché** | Tavernier du Socle |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 35 / 2 800 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Patron de la taverne Le Socle, le plus vieil établissement de Granzam. Sa bière de caverne est réputée dans tout Alfheim. Il reçoit les mineurs, les marchands, les voyageurs. Depuis quelques semaines, les convois de bière arrivent avec un goût différent — plus amer, plus métallique. Le brasseur lui jure que la recette n'a pas changé. Le Tavernier a gardé une bouteille, cachée. Il croit que l'eau de brassage vient d'une source contaminée — une source qui passe sous la Banque. Lié au fil **🔒 Le Coffre Qui Respire** : l'eau traverse une salle qui respire sous la Banque avant d'arriver à la brasserie.
- **Traits** : jovial, observateur, bon vivant, méfiant.
- **Voix** : Voix de taverne — chaude, forte, qui couvre le bruit des verres. « La bière de caverne, c'est l'âme de Granzam. Si elle a un goût bizarre, c'est que l'âme a un problème. »
- **Relations** : `NPC_GRA_41` (Serveuse — employée) ; `NPC_GRA_42` (Cuisinier — collègue) ; `NPC_GRA_44` (Aubergiste — frère) ; `NPC_GRA_30` (Banquier — lui a parlé de l'eau).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_40_01` | K0 | taverne, service | Taverne Le Socle — bière de caverne, repas, chambres | — |
| 2 | `QI_GRA_40_02` | K0 | biere, carte | Carte des bières — blonde, brune, ambrée, double | — |
| 3 | `QI_GRA_40_03` | K0 | prix, conso | Prix : 5-15 Yuld le verre, 50 Yuld le pichet | — |
| 4 | `QI_GRA_40_04` | K1 | biere, gout_metal | La bière a un goût métallique depuis deux semaines | `AFF>=60` |
| 5 | `QI_GRA_40_05` | K1 | brasseur, recette | Le brasseur jure que la recette n'a pas changé | `AFF>=65` |
| 6 | `QI_GRA_40_06` | K1 | eau, source | L'eau de brassage vient d'une source sous la ville | — |
| 7 | `QI_GRA_40_07` | K2 | source, banque | La source passe sous la Banque de Granzam — à 15 mètres de la salle des coffres | `AFF>=85` |
| 8 | `QI_GRA_40_08` | K2 | convoi, arrivee | Les convois d'approvisionnement arrivent systématiquement en retard depuis un mois | `QUEST:QST_GRA_BIERE_METAL` |
| 9 | `QI_GRA_40_09` | K3 | eau, contamination_noyau | L'eau de source est contaminée par des micro-particules de roche du Noyau de Pierre `NPC_GRA_75` — la salle respirante sous la Banque filtre les données du Cardinal et rejette des résidus minéraux dans la nappe phréatique | JAMAIS — déflection : *(il essuie un verre, le regarde à la lumière)* « L'eau change. Je le sens. Mais personne ne veut m'écouter. Bois ta bière, et tais-toi. » |
| 10 | `QI_GRA_40_10` | KX | *(tout le reste)* | *(il pousse un pichet vers vous)* « Bois. Ça te fera du bien. Et arrête de poser des questions. » | — |

## 4. Chaînage économique & quêtes

- **Service** : vente de bière et repas.
- Porteur du fil **🔒 Le Coffre Qui Respire** (eau contaminée par la salle sous la Banque).
- Donneur de `QST_GRA_BIERE_METAL` : enquête sur l'eau de brassage.

## 5. Intégration Bot

- **Accueil** (`!parler tavernier`) : *Essuie un verre derrière le comptoir.* « Bienvenue au Socle. La bière est fraîche. Le goût… discutable en ce moment. Mais elle tient chaud. »
- `!buy beer` actif à la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « eau contaminée par résidus du Noyau » pour l'orchestrateur.
