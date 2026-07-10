# ⛏️ Gardien du Donjon — `NPC_GRA_64`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_64` |
| **Nom affiché** | Gardien du Donjon |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril |
| **Niveau / HP / MP** | 60 / 9 800 / 3 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien de l'entrée de la Mine de Mithril, il contrôle les allées et venues des mineurs et marchands. Il y a quatre nuits, alors qu'il faisait sa ronde au fond du puits −40, il a entendu un son venu des profondeurs : un craquement sec, comme de la pierre qui se fend, suivi d'un bourdonnement grave. Il s'est approché de la paroi et a vu une fissure lumineuse — une veine noire qui pulsait d'une lueur ambrée. Depuis, il entend un grattement incessant dans les murs de la mine. Il n'en a parlé qu'au Gardien de la Mine (`NPC_GRA_16`), qui l'a traité de fou. (Angle : a entendu le noyau fissuré.)
- **Traits** : méfiant, attentif, courageux, tourmenté par ce qu'il a entendu.
- **Voix** : Grave, hésitante, comme s'il parlait en se retournant sans cesse. « La mine craque la nuit. Quelque chose pousse vers le haut. Quelque chose dans le cœur de la roche. »
- **Relations** : `NPC_GRA_16` (Gardien Mine — supérieur), `NPC_GRA_63` (Archiviste — le tolère dans la cache), `NPC_GRA_64` (lui-même), `NPC_GRA_68` (Marchand Mithril — le croise chaque jour), `NPC_GRA_06` (Margrim — lui a demandé de l'écouter).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_64_01` | K0 | mine_mithril, garde | Il garde l'entrée de la Mine de Mithril. | — |
| 2 | `QI_GRA_64_02` | K0 | profondeur, rotation | Il descend au fond du puits −40 une fois par nuit. | — |
| 3 | `QI_GRA_64_03` | K0 | grattement, mur | Il entend des grattements dans les murs de la mine. | — |
| 4 | `QI_GRA_64_04` | K1 | fissure, lueur | Il a vu une fissure noire qui pulsait d'une lueur ambrée au fond du puits. | `AFF>=60` |
| 5 | `QI_GRA_64_05` | K1 | craquement, son | Il a entendu un craquement sec suivi d'un bourdonnement grave. | `AFF>=65` |
| 6 | `QI_GRA_64_06` | K1 | gardien_mine, doute | Le Gardien de la Mine (`NPC_GRA_16`) l'a traité de fou. « Il ne veut pas descendre voir. » | — |
| 7 | `QI_GRA_64_07` | K2 | fissure, martellement | La fissure s'agrandit chaque nuit. Il a mesuré 3 cm de plus en une semaine. | `AFF>=85` |
| 8 | `QI_GRA_64_08` | K2 | vibration, noyau | La veine noire vibre à la même fréquence que le bourdonnement du Conseil. | `QUEST:QST_GRA_FISSURE_MINE` |
| 9 | `QI_GRA_64_09` | K3 | noyau, fissure_seed | Le craquement qu'il a entendu est une corruption du seed matériel — le Noyau de Pierre (`NPC_GRA_00`) se fissure et saigne dans la mine. Le seed est en train de se corrompre. | JAMAIS — déflection : *(il recule d'un pas)* « La fissure. Il ne faut pas en parler trop fort. Elle pourrait t'entendre. » |
| 10 | `QI_GRA_64_10` | KX | *(tout le reste)* | *(il pose la main sur le mur de la mine)* « Écoute. Tu l'entends avec l'oreille ou c'est dans ta tête ? Moi, je l'entends dans mes os maintenant. » | — |

## 4. Chaînage économique & quêtes

- Porteur du fil **🔮 Noyau de Pierre** (fissure = corruption du seed).
- Donneur de `QST_GRA_FISSURE_MINE` : enquêter sur la fissure lumineuse dans la Mine de Mithril.

## 5. Intégration Bot

- **Accueil** (`!parler gardien_donjon`) : *Adossé au mur de la mine, il sursaute quand vous approchez.* « T'as entendu ? Non ? Tant mieux. Une fois que tu l'entends, tu ne l'oublies plus. »
- `!fissure <maj>` (donne l'état de la fissure).
- `NPC_SECRET_PROBED` slot 9 : hook « corruption du seed = fissure du Noyau de Pierre » pour l'orchestrateur.