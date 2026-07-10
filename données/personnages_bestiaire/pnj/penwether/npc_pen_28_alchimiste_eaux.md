# 🕯️ Alchimiste Eaux — `NPC_PEN_28`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_28` |
| **Nom affiché** | Alchimiste Eaux |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Potions des Eaux Grises) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Citernes Antiques |
| **Niveau / HP / MP** | 12 / 500 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Alchimiste qui utilise l'eau grise des Citernes comme base pour ses potions. Il a découvert par hasard qu'une de ses potions — bue au bon moment — montre la ville telle qu'elle est vraiment : les illusions tombent, les fausses façades s'effacent, les masques disparaissent. Il garde cette potion secrète. Il ne sait pas si ce qu'il voit est réel ou une autre illusion. Angle : potion montre la vraie ville.
- **Traits** : paranoïaque, méticuleux, collectionne les fioles vides.
- **Voix** : murmurée, précise. « Si tu bois ça, tu verras Penwether sans son maquillage. Mais est-ce que tu veux voir ça ? Moi, j'ai arrêté d'en boire. »
- **Relations** : `NPC_PEN_25` (lui fournit des ingrédients) ; `NPC_PEN_26` (teste les propriétés de son eau) ; `NPC_PEN_27` (client, achète des potions de relaxation) ; `NPC_PEN_46` (lui achète des potions de détection d'illusions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_28_01` | K0 | alchimie, eau | Potions à base d'eau des Citernes : 15-50 Yrds | — |
| 2 | `QI_PEN_28_02` | K0 | potions, soin | Potions de soin, de mana, de vision nocturne | — |
| 3 | `QI_PEN_28_03` | K0 | eau, grise | Utilise l'eau grise comme base — elle stabilise les ingrédients | — |
| 4 | `QI_PEN_28_04` | K1 | potion, verite | Une potion montre la ville réelle — les illusions disparaissent | — |
| 5 | `QI_PEN_28_05` | K1 | secret, garde | Il garde la formule secrète — ne la vend pas | `AFF>=60` |
| 6 | `QI_PEN_28_06` | K1 | vision, doute | Il ne sait pas si la vision est réelle ou une autre illusion | `AFF>=65` |
| 7 | `QI_PEN_28_07` | K2 | ingredient, faille | L'ingrédient clé vient des failles sous les Citernes — un lichen qui pousse sur les parois | `AFF>=80` |
| 8 | `QI_PEN_28_08` | K2 | potion, duree | La potion dure de plus en plus longtemps — l'illusion rétrécit | `AFF>=85` |
| 9 | `QI_PEN_28_09` | K3 | potion, code | La potion ne révèle pas la ville réelle — elle désactive temporairement les illusions du Cardinal. Chaque dose est une micro-désactivation du code qui masque la vérité. La formule est une séquence de désactivation. Si quelqu'un la reverse, il peut désactiver toutes les illusions de Penwether d'un coup | JAMAIS — déflection : *(il vide une fiole dans l'eau)* « J'ai oublié la formule. Vraiment. Je me souviens juste que ça marche. Et que ça fait mal quand ça s'arrête. » *(il frotte ses yeux)* |
| 10 | `QI_PEN_28_10` | KX | *(hors sujet)* | « L'eau grise garde les secrets. Et les potions les libèrent. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_potion_pen` (achat de potions).
- Fil **🎭 Illusions** (potion qui montre la vérité).
- Client/Fournisseur de `NPC_PEN_25`, `NPC_PEN_26`, `NPC_PEN_27`, `NPC_PEN_46`.

## 5. Intégration Bot

- **Accueil** (`!parler alchimiste eaux`) : *(Il agite une fiole d'eau grise)* « Tu veux une potion de soin ? J'ai ça. Tu veux autre chose ? J'ai ça aussi. Mais tu dois me dire pourquoi. » |
- `!buy_potion_pen` — achat de potions.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « potion = désactivation d'illusions/révélation du code Cardinal » réservé à l'orchestrateur.
