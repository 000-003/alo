# ⛏️ Marchand de Minerais Rares — `NPC_GRA_67`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_67` |
| **Nom affiché** | Marchand de Minerais Rares |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 40 / 3 000 / 6 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Spécialiste des minerais rares — argent noir, fer lunaire, obsidienne de fond de faille. Il tient son étal à la Grande Halle depuis quarante ans. Il y a deux mois, il a reçu un lot d'échantillons d'un mineur qui n'est jamais revenu. Les minerais brillaient sans source de lumière : posés sur l'étal, ils éclairaient le comptoir comme une lampe. Il a tenté de les vendre, mais chaque fois qu'un client s'approchait, la lumière faiblissait — comme si les minerais « se cachaient ». Il les a gardés dans une boîte plombée. (Angle : brille sans lampe.)
- **Traits** : prudent, expérimenté, méfiant, taciturne.
- **Voix** : Voix de marchand fatigué, monocorde. « J'ai vu des pierres rares. Mais des pierres qui allument la nuit toutes seules ? Jamais. Et ça me plaît pas. »
- **Relations** : `NPC_GRA_02` (Marla — concurrente collègue), `NPC_GRA_12` (Marchand Fer — collègue), `NPC_GRA_35` (Alchimiste — lui analyse les échantillons), `NPC_GRA_31` (Marchand Fer Fin — collègue), `NPC_GRA_68` (Marchand Mithril — client et rival).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_67_01` | K0 | minerais_rares, vente | Il vend des minerais rares. Prix : 500-4000 Yuld. | — |
| 2 | `QI_GRA_67_02` | K0 | grande_halle, stand | Son stand est dans l'aile est de la Grande Halle. | — |
| 3 | `QI_GRA_67_03` | K0 | argent, fer_lunaire | Il a de l'argent, du fer lunaire, de l'obsidienne de faille. | — |
| 4 | `QI_GRA_67_04` | K1 | minerai_noyau, lueur | Un lot de minerais brille sans lampe. « Comme s'ils avaient une lumière intérieure. » | `AFF>=60` |
| 5 | `QI_GRA_67_05` | K1 | lumiere, cache | La lumière faiblit quand un client s'approche. Les minerais « se cachent ». | `AFF>=65` |
| 6 | `QI_GRA_67_06` | K1 | boite_plombee | Il a gardé les minerais dans une boîte plombée. « Au cas où. » | — |
| 7 | `QI_GRA_67_07` | K2 | provenance, sans_nom | Le mineur qui a livré les échantillons n'est jamais revenu chercher son paiement. | `AFF>=85` |
| 8 | `QI_GRA_67_08` | K2 | minerai, meme_strate | L'Alchimiste (`NPC_GRA_35`) a confirmé : les minerais proviennent de la strate −47 — la strate du Noyau. | `QUEST:QST_GRA_MINERAIS_LUMIERE` |
| 9 | `QI_GRA_67_09` | K3 | minerai_lumineux, seed | Les minerais brillent car ils sont encore « connectés » au seed de génération — ils émettent la lumière résiduelle du Noyau de Pierre (`NPC_GRA_00`). | JAMAIS — déflection : *(il tapote la boîte plombée)* « Ceux-là, on les vend pas. On les regarde pas longtemps non plus. » |
| 10 | `QI_GRA_67_10` | KX | *(tout le reste)* | *(il sort une pépite d'obsidienne de sa poche)* « Regarde. Elle brille à peine maintenant. Mais la nuit, elle éclaire toute la pièce. Inquiétant. » | — |

## 4. Chaînage économique & quêtes

- Marchand : achète et vend des minerais rares.
- Porteur du fil **💎 Gemme Qui Voit** (minerais lumineux = résidus du seed).
- Donneur de `QST_GRA_MINERAIS_LUMIERE` : enquêter sur l'origine des minerais auto-lumineux.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_minerais_rares`) : *Penché sous son comptoir, il en sort une boîte de plomb.* « T'as de l'argent à dépenser ? J'ai des choses. Des choses qui brillent un peu trop. »
- `!acheter_minerai <type>` / `!vendre_minerai <minerai>` (commerce).
- `NPC_SECRET_PROBED` slot 9 : hook « minerais lumineux = résidus du Noyau de Pierre » pour l'orchestrateur.