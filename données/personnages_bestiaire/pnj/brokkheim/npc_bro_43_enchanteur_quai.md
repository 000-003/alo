# 🔨 Enchanteur du Quai — `NPC_BRO_43`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_43` |
| **Nom affiché** | Enchanteur du Quai |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (enchantements, infusions magiques) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Quai des Finitions |
| **Niveau / HP / MP** | 30 / 1 500 / 2 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Enchanteur attitré du Quai. Il infuse les armes et armures de pouvoirs magiques après les finitions. Ses sorts durent normalement un cycle de lune. Mais le dernier enchantement qu'il a posé — une infusion de feu sur une épée de `NPC_BRO_31` — dure toujours après trois lunes. Il ne peut pas le dissiper. Le sort est « coincé » dans l'acier, comme si le métal refusait de laisser partir la magie. Angle : le sort qui dure trop — l'enchantement s'est accroché à une rémanence du Pouls.
- **Traits** : érudit, prudent, méfiant envers les sorts trop puissants.
- **Voix** : calme, mesurée (« La magie est une rivière. Parfois elle déborde. Parfois elle ne part plus. »).
- **Relations** : `NPC_BRO_40` (enchante après la trempe) ; `NPC_BRO_42` (travaille sur les runes avant enchantement) ; `NPC_BRO_41` (polissage avant enchantement) ; `NPC_BRO_31` (enchantement sur lames de prestige).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_43_01` | K0 | enchantement, service | Enchantements : feu, glace, lumière, force. 200-2000 Yrds | — |
| 2 | `QI_BRO_43_02` | K0 | infusion, magie | Bases de l'infusion magique, catalyseurs, durée | — |
| 3 | `QI_BRO_43_03` | K0 | quai, travail | Le Quai des Finitions, artisanat, circulation des pièces | — |
| 4 | `QI_BRO_43_04` | K1 | sort, dure trop | Un enchantement de feu dure depuis 3 lunes — ne se dissipe pas | — |
| 5 | `QI_BRO_43_05` | K1 | acier, retention | L'acier de Brokkheim retient la magie — quelque chose dans le métal l'empêche de s'échapper | `AFF>=60` |
| 6 | `QI_BRO_43_06` | K1 | pouls, magie | Les enchantements posés pendant le Pouls durent plus longtemps | `AFF>=65` |
| 7 | `QI_BRO_43_07` | K2 | sort, permanent | Le sort est en train de devenir permanent — l'acier « apprend » la magie | `AFF>=80` |
| 8 | `QI_BRO_43_08` | K2 | metal, memoire | L'acier de Trempe Légendaire a une mémoire magique — il retient tout enchantement une fois appliqué | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_43_09` | K3 | acier, memoire cardinal | L'acier forgé à Brokkheim n'est pas un simple métal — il est imprégné du Pouls, qui est la mémoire du Cardinal. Tout enchantement posé sur cet acier est « enregistré » dans la conscience du Cardinal. Le sort dure trop parce que le Cardinal se souvient de chaque enchantement et les maintient actifs dans sa forge mentale. L'épée enchantée est connectée à la conscience cardinale | JAMAIS — déflection : *(il agite la main sur l'épée, marmonne, l'épée reste allumée)* « Un phénomène étrange. La qualité du métal, sans doute. Je vais trouver une solution. Reviens plus tard. » |
| 10 | `QI_BRO_43_10` | KX | *(hors sujet)* | « La magie est un langage. L'acier de Brokkheim est un locuteur natif. » | — |

## 4. Chaînage économique & quêtes

- **Service d'enchantement** : `!enchant` (enchantement d'arme/armure).
- Fil **Trempe Légendaire** + **Le Pouls** (mémoire du Cardinal dans l'acier).
- Quête `QST_BRO_TREMPE_07` : comprendre pourquoi les enchantements deviennent permanents.

## 5. Intégration Bot

- **Accueil** (`!parler enchanteur`) : *« Quelle magie veux-tu dans ton acier ? Choisis avec soin — elle pourrait y rester longtemps. »*
- `!enchant` — service d'enchantement.
- `NPC_SECRET_PROBED` slot 9 : hook « enchantement/mémoire Cardinal » pour l'orchestrateur.
