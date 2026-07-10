# ⛏️ Marchand de Gemmes Fines — `NPC_GRA_66`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_66` |
| **Nom affiché** | Marchand de Gemmes Fines |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 38 / 2 400 / 5 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vendeur de gemmes brutes et taillées à la Grande Halle. Il travaille en lien étroit avec la Négociante Marla (`NPC_GRA_02`) et l'Alchimiste Gemmes (`NPC_GRA_35`). Il a reçu d'un prospecteur inconnu une gemme qui bat — comme un cœur, un pouls régulier. Il l'a gardée dans une vitrine fermée, mais la nuit, il l'entend cogner contre le verre. Il l'a montrée à Marla, qui a pâli : c'est la même substance que la gemme noire de son tiroir. Le Marchand a peur de la revendre, peur de la garder. (Angle : gemme qui bat.)
- **Traits** : nerveux, commerçant, honnête, superstitieux.
- **Voix** : Voix de vendeur, rapide, mais qui faiblit quand il parle de la gemme. « C'est une pièce rare. La plus rare que j'aie jamais vue. Trop rare. »
- **Relations** : `NPC_GRA_02` (Marla — associée), `NPC_GRA_35` (Alchimiste — authentifie ses gemmes), `NPC_GRA_84` (Nécromancien — intéressé par la gemme), `NPC_GRA_48` (Receleur — contact pour les ventes discrètes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_66_01` | K0 | gemme, vente | Il vend des gemmes brutes et taillées. Prix : 100-3000 Yuld. | — |
| 2 | `QI_GRA_66_02` | K0 | grande_halle, commerce | La Grande Halle est le cœur commercial de Granzam. | — |
| 3 | `QI_GRA_66_03` | K0 | marla, association | Il travaille avec Marla (`NPC_GRA_02`) pour les grosses transactions. | — |
| 4 | `QI_GRA_66_04` | K1 | gemme_battante, pouls | Une gemme dans sa vitrine émet un pouls régulier, comme un battement de cœur. | `AFF>=60` |
| 5 | `QI_GRA_66_05` | K1 | nuit, cognement | La gemme cogne contre le verre de la vitrine la nuit. | `AFF>=65` |
| 6 | `QI_GRA_66_06` | K1 | alchimiste, similitude | L'Alchimiste (`NPC_GRA_35`) dit que c'est le même matériau que la gemme noire de Marla. | — |
| 7 | `QI_GRA_66_07` | K2 | pouls, frequence | Le pouls de la gemme est de 72 battements par minute — un pouls humain. | `AFF>=85` |
| 8 | `QI_GRA_66_08` | K2 | provenance, inconnue | Le prospecteur qui la lui a vendue n'avait pas de nom. Il portait un capuchon de pierre. | `QUEST:QST_GRA_GEMME_BAT` |
| 9 | `QI_GRA_66_09` | K3 | gemme_bat, noyau | La gemme qui bat est un fragment du Noyau de Pierre (`NPC_GRA_00`) — elle pulse encore à la fréquence du serveur. | JAMAIS — déflection : *(il ferme le tiroir à clé)* « Je l'achète ? Je la vends ? Ni l'un ni l'autre. Elle reste là. » |
| 10 | `QI_GRA_66_10` | KX | *(tout le reste)* | *(il polir une gemme ordinaire sans y prêter attention)* « Y a des pierres qui valent de l'or. Y en a qui valent des questions. Les miennes valent les deux. » | — |

## 4. Chaînage économique & quêtes

- Marchand : achète et vend des gemmes.
- Porteur du fil **💎 Gemme Qui Voit** (gemme battante = fragment du Noyau).
- Donneur de `QST_GRA_GEMME_BAT` : enquêter sur la gemme qui pulse.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_gemmes`) : *Il aligne des gemmes sur du velours noir.* « Regarde-moi ça. Du rubis de Carrière, du saphir des Steppes. Et celle-ci… celle-ci je ne la vend pas. »
- `!acheter_gemme <type>` / `!vendre_gemme <gemme>` (commerce).
- `NPC_SECRET_PROBED` slot 9 : hook « gemme battante = fragment du Noyau de Pierre » pour l'orchestrateur.