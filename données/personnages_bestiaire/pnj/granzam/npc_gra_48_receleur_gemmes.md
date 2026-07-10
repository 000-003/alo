# ⛏️ Receleur Gemmes — `NPC_GRA_48`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_48` |
| **Nom affiché** | Receleur Gemmes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Banque (caché) |
| **Niveau / HP / MP** | 55 / 4 200 / 5 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Receleur de gemmes « sensibles » — des pierres que le marché officiel ne peut pas vendre. Il opère depuis une cave cachée sous la Banque de Granzam, accessible par un passage dérobé derrière la salle des coffres. C'est lui qui a fourni la gemme noire à Marla (`NPC_GRA_02`) et le sel des Profondeurs au Cuisinier (`NPC_GRA_42`). Il sait que certaines gemmes « voient » et il les revend à des clients discrets. Il est en contact avec Bomil d'Alne (`NPC_ALN_93`), Torvin de Swilvane (`NPC_SWI_93`) et Ilka de Gathel (`NPC_GAT_33`). Le Banquier (`NPC_GRA_30`) connaît son existence et ferme les yeux. Lié au fil **💎 La Gemme Qui Voit** : il est le principal distributeur des gemmes-observatrices.
- **Traits** : mystérieux, calculateur, dangereux, élégant.
- **Voix** : Voix feutrée, rapide, toujours à la limite du chuchotement. « Une gemme, ça se vend. Une gemme qui voit, ça se négocie. Le prix n'est pas le même. »
- **Relations** : `NPC_GRA_30` (Banquier — complice) ; `NPC_GRA_02` (Marla — cliente régulière) ; `NPC_GRA_35` (Alchimiste — sait ce qu'il fait) ; `NPC_GRA_42` (Cuisinier — lui a vendu le sel) ; `NPC_ALN_93` (Bomil — comptoir gemmes à Alne) ; `NPC_SWI_93` (Torvin — contact Leprechaun) ; `NPC_GAT_33` (Ilka — acheteuse Gathel).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_48_01` | K0 | bijouterie, officiel | Vente de bijoux et gemmes « de contrebande légère » | — |
| 2 | `QI_GRA_48_02` | K0 | cave, acces | Accès par la Banque — entrée discrète, « sur rendez-vous » | — |
| 3 | `QI_GRA_48_03` | K0 | prix, noir | Tarifs du marché noir — 2 à 5 fois le prix officiel | — |
| 4 | `QI_GRA_48_04` | K1 | gemme, noire | Il a vendu une gemme noire à Marla — « elle voit des choses » | `AFF>=60` |
| 5 | `QI_GRA_48_05` | K1 | ceil, cardinal | « La gemme voit ce que le Cardinal voit. Et le Cardinal voit tout. » | `AFF>=65` |
| 6 | `QI_GRA_48_06` | K1 | reseau, alne_swilvane | Il travaille avec Bomil (`NPC_ALN_93`), Torvin (`NPC_SWI_93`) et Ilka (`NPC_GAT_33`) | — |
| 7 | `QI_GRA_48_07` | K2 | cave, sous_banque | Sa cave est directement sous la salle des coffres — il entend la respiration | `AFF>=85` |
| 8 | `QI_GRA_48_08` | K2 | gemme, observation | Les gemmes « qui voient » sont des gemmes du Cardinal — il les détourne avant qu'elles soient activées | `QUEST:QST_GRA_RECELEUR_GEMMES` |
| 9 | `QI_GRA_48_09` | K3 | reseau, surveillance | Le Receleur est un « nœud de collecte » du Cardinal — il distribue les gemmes-observatrices volontairement pour étendre le réseau de surveillance à tout Alfheim, en échange d'une protection et d'un accès aux données qu'elles collectent | JAMAIS — déflection : *(il ferme un tiroir, clé tourne)* « Je ne vends pas des gemmes. Je vends des regards. Et toi, tu regardes trop. » |
| 10 | `QI_GRA_48_10` | KX | *(tout le reste)* | *(il examine une gemme à la loupe)* « Belle pierre. Elle te plaît ? Elle plaît à tout le monde. C'est pour ça qu'elle est dangereuse. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : gemmes « sensibles » et bijoux de contrebande.
- Porteur du fil **💎 La Gemme Qui Voit** (distribution des gemmes-observatrices).
- Donneur de `QST_GRA_RECELEUR_GEMMES` : enquête sur le trafic de gemmes qui voient.

## 5. Intégration Bot

- **Accueil** (`!parler receleur`) : *Dans une cave faiblement éclairée, assis derrière une table couverte de velours noir.* « Entre. Ferme la trappe. Ici, les murs ont des yeux — littéralement. »
- `!buy black_gem` actif (Banque, accès caché).
- `NPC_SECRET_PROBED` slot 9 : hook « nœud de collecte du réseau de gemmes » pour l'orchestrateur.
