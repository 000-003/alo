# 🕯️ Marchand Teintures — `NPC_PEN_53`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_53` |
| **Nom affiché** | Marchand Teintures |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_SPR_CAP_001B` — Penwether, Faubourg Masques |
| **Niveau / HP / MP** | 5 / 140 / 210 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Alchimiste des couleurs, il vend des teintures magiques au Faubourg Masques. Chaque teinture colore les tissus, les masques, ou la peau — mais il a récemment découvert un pot de teinture noire qui ne colore rien. Littéralement. Versée sur une surface, elle tombe à travers, comme si la surface n'existait pas. Il croit que c'est un défaut. En réalité, cette teinture colore le vide — et le vide, ici, est la substance entre les illusions.
- **Traits** : excentrique, taché en permanence, parle avec les mains, collectionne les flacons vides.
- **Voix** : enthousiaste, volubile. « *La couleur, c'est la signature du monde ! Chaque teinture que je fabrique, elle vient d'un endroit différent des ruines. Et celle-ci…* (il montre la noire) *…celle-ci vient de nulle part.* »
- **Relations** : Marchand Voiles `NPC_PEN_52` (client régulier pour les pigments) ; Marchand Bougies `NPC_PEN_51` (échange cire contre pigments) ; Modeleur Argile `NPC_PEN_73` (lui fournit de l'argile teintée).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_53_01` | K0 | teintures, couleurs | Il vend 24 teintures différentes, toutes fabriquées à partir de pigments des ruines | — |
| 2 | `QI_PEN_53_02` | K0 | teinture, noire | La teinture noire n°7 traverse toute surface sans la colorer — elle tombe dans le vide | — |
| 3 | `QI_PEN_53_03` | K0 | ruines, pigments | Chaque niveau des ruines produit des pigments de couleur différente | — |
| 4 | `QI_PEN_53_04` | K1 | teinture, neant | Il a versé la teinture noire sur le sol — elle a traversé 3 étages avant de disparaître | `AFF>=35` |
| 5 | `QI_PEN_53_05` | K1 | couleur, illusion | Les teintures appliquées sur un masque du Marchand Masques Fins `NPC_PEN_57` changent de couleur toutes seules | `AFF>=50` |
| 6 | `QI_PEN_53_06` | K1 | client, incolore | Un client incolore (blanc et noir) a acheté toute la réserve de teinture noire — il n'avait pas de masque | — |
| 7 | `QI_PEN_53_07` | K2 | teinture, strates | La teinture noire, diluée, révèle des motifs sur les murs — des écritures invisibles | `AFF>=70` |
| 8 | `QI_PEN_53_08` | K2 | pigment, origine | Le pigment noir vient d'une poudre ramenée du niveau -6 des ruines — là où il n'y a que du noir | `QUEST:QST_PEN_TEINTURES_01` |
| 9 | `QI_PEN_53_09` | K3 | teinture, vide | La teinture noire ne colore pas le vide — elle *est* le vide. Elle révèle l'absence de matière là où l'illusion a été placée | JAMAIS — déflection : *(il renverse le flacon sur sa main — la teinture traverse sa paume sans laisser de trace)* « Tu vois ? Ma main existe pas. Ou alors c'est la teinture qui existe pas. Je sais plus. » |
| 10 | `QI_PEN_53_10` | KX | *(hors boutique)* | *(il mélange toutes ses teintures dans un seul flacon — le mélange devient blanc)* « Toutes les couleurs du monde, mélangées, ça donne rien. Comme Penwether. » | — |

## 4. Chaînage économique & quêtes

- **Achats** : argile brute (1 po), cire vierge (2 po), poudre de ruine (5 po).
- **Ventes** : Teinture Standard (10 po), Teinture Rare (25 po), Teinture Noire n°7 (50 po — ou quête).
- **Quête** : `QST_PEN_TEINTURES_01` — Explorer le niveau -6 des ruines pour trouver la source du pigment noir.
- **Fils rouges** : 🎭 Illusions (teinture qui traverse l'illusion), 📜 Ruines (pigments des profondeurs), 🔮 Ville Fantôme (vide sous l'illusion).

## 5. Intégration Bot

- **Accueil** (`!parler marchand_teintures`) : *« J'ai des couleurs que même les ruines connaissent pas. Celle-ci, par exemple… elle vient d'un endroit où il y a rien. Alors elle colore rien. Tu veux l'essayer ? »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
