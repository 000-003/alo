# ⛏️ Palefrenier de Roche — `NPC_GRA_74`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_74` |
| **Nom affiché** | Palefrenier de Roche |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte de Granzam |
| **Niveau / HP / MP** | 26 / 2 000 / 1 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Palefrenier qui s'ocupe des montures — chevaux de pierre, lézards de roche, ânes de mine — à la porte de Granzam. Il les loue aux voyageurs et aux marchands. Depuis qu'un lézard de roche qu'il avait loué à un prospecteur est revenu seul — la selle vide, les yeux blancs — il a remarqué que ses montures refusent de sortir la nuit. L'une d'elles a hennit dans le noir sans raison, un son animal mais trop régulier, trop mécanique, comme une alarme. Le lendemain, le prospesteur était porté disparu. Le Palefrenier n'a pas dormi depis. (Angle : monture qui hennit dans le noir.)
- **Traits** : doux, nerveux, protecteur envers ses bêtes, superstitieux.
- **Voix** : Voix calmante, celle qu'on utilise avec les animaux. « Chut, ma belle. Tu l'as senti hein ? Quelque chose là-dessous. »
- **Relations** : `NPC_GRA_70` (Gardien Porte — collègue), `NPC_GRA_71` (Douanier — voisin de poste), `NPC_GRA_55` (Vétéran — client qui ne part plus), `NPC_GRA_47` (Marchand Itinérant — client régulier).

## 3. Quantité Informationnel (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_74_01` | K0 | monture, location | Il loue des montures de roche. 100 Yuld/jour. | — |
| 2 | `QI_GRA_74_02` | K0 | lezard_roche, cheval_pierre | Il a des lézards de roche et des chevaux de pierre. | — |
| 3 | `QI_GRA_74_03` | K0 | porte, remise | Sa remise est à gauche de la Porte de Granzam. | — |
| 4 | `QI_GRA_74_04` | K1 | lezard, retour_seul | Un lézard loué est revenu seul, la selle vide. Les yeux blancs. | `AFF>=60` |
| 5 | `QI_GRA_74_05` | K1 | hennissement, nuit | Une monture a hennit dans le noir. Un son régulier. « Comme une alarme. » | `AFF>=65` |
| 6 | `QI_GRA_74_06` | K1 | monture, peur | Les montures refusent de sortir la nuit. Elles tremblent dans leur enclos. | — |
| 7 | `QI_GRA_74_07` | K2 | hennissement, periide | Le prospecteur qui a loué le lézard est porté disparu. Retrouvé nulle part. Les registres du Douanier (`NPC_GRA_71`) disent « Jamais sorti ». | `AFF>=85` |
| 8 | `QI_GRA_74_08` | K2 | monture, systeme | « Les bêtes sentent. Elles savent quand quelque chose arrive. Depuis un mois, elles ne dorment plus. » | `QUEST:QST_GRA_MONTURE_HENNIT` |
| 9 | `QI_GRA_74_09` | K3 | monture_hennit, instabilité_seed | Les montures hennissent et refuchent la nuit car elles perçoivent l'instabilité du seed matériel — leurs sens animaux captent les warp du Noyau que les Gnomes ignorent. | JAMAIS — déflection : *(il caresse le lézard)* « Lui, il sait des choses. Il ne peut pas me le dire. Mais il tremble. Et ça suffit pour me faire peur. » |
| 10 | `QI_GRA_74_10` | KX | *(tout le reste)* | *(il essuie le flanc d'un cheval de pierre)* « La pierre est froide. Mais la bête est chaude. Et elle a peur. Pourquoi un rocher aurait peur ? » | — |

## 4. Chaînage économique & quêtes

- Service : `!louer_monture <type>` (loue une monture).
- Porteur du fil **🔮 Noyau de Pierre** (montures = capteurs vivants du seed).
- Donneur de `QST_GRA_MONTURE_HENNIT` : quoi perçoivent les montures la nuit.

## 5. Intégration Bot

- **Accueil** (`!parler palefrenier`) : *Un lézard de roche blotti contre lui, il vous fait signe d'approcher doucement.* « Chut. Il a été nerveux toute la journée. Je crois qu'il sent l'orage. Mais y a pas d'orage. »
- `!louer_monture <type>` (location, payant).
- `NPC_SECRET_PROBED` slot 9 •• hook « montures senseurs du seed warp » pour l'orchestrateur.