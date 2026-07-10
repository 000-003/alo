# 🔨 Sylla — `NPC_BRO_02`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_02` |
| **Nom affiché** | Sylla |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Enchantements armes) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Quai des Finitions |
| **Niveau / HP / MP** | 35 / 4 200 / 6 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Sylla est la seule enchanteuse du Quai des Finitions — une Leprechaun silencieuse qui travaille dans un atelier qui sent l'ozone et la pierre humide. Ses doigts sont couverts de cicatrices fines, comme des partitions gravées dans la peau. On dit qu'elle n'utilise pas de parchemins d'enchantement : elle écrit les runes directement dans le métal en frappant avec un marteau d'os — une technique qu'elle refuse d'expliquer. Elle reçoit régulièrement des lames de Nilsa `NPC_BRO_06`, mais les deux femmes ne se parlent presque jamais : leurs ateliers sont séparés par un canal de refroidissement, et le bruit de l'eau couvre tout.
- **Traits** : réservée, précise, secrète, méticuleuse ; elle observe les clients avant de les servir.
- **Voix** : voix basse, presque inaudible dans le bruit des canaux. « Montre ta lame. Ne parle pas. Les mots abîment le tranchant. »
- **Relations** : Apprentie Nilsa `NPC_BRO_06` (son atelier voisin, elles partagent un canal) ; Brokk IX `NPC_BRO_01` (lui fournit des ébauches brutes) ; Marchand Rune `NPC_BRO_03` (achète ses encres rares) ; Marchand Eau `NPC_BRO_26` (fil Le Pacte des Eaux — ses trempes ont besoin d'eau pure).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_02_01` | K0 | enchantement, runes | Sylla enchante les armes en frappant les runes dans le métal — pas de parchemin | — |
| 2 | `QI_BRO_02_02` | K0 | atelier, quai | Son atelier est sur le Quai des Finitions, côté est, juste avant le canal de refroidissement | — |
| 3 | `QI_BRO_02_03` | K0 | prix, enchantement | Les prix dépendent de la lame — elle refuse d'enchanter les armes qu'elle juge « indignes » | — |
| 4 | `QI_BRO_02_04` | K1 | marteau, os | Son marteau est en os — elle ne dit pas de quel animal ni où elle l'a trouvé | `AFF>=60` |
| 5 | `QI_BRO_02_05` | K1 | nilsa, lames | Nilsa lui apporte des lames brutes — elles ne se parlent pas, mais les lames parlent pour elles | `AFF>=65` |
| 6 | `QI_BRO_02_06` | K1 | marins, eau | Des marins du Marchand d'Eau livrent des barils d'eau pure à son atelier la nuit | — |
| 7 | `QI_BRO_02_07` | K2 | runes, dictionnaire | Certaines runes qu'elle frappe ne sont dans aucun dictionnaire — elle les a apprises « du métal lui-même » | `AFF>=85` |
| 8 | `QI_BRO_02_08` | K2 | cicatrices, doigts | Les cicatrices sur ses doigts forment des motifs — quelqu'un qui sait lire les runes reconnaîtrait une phrase | `QUEST:QST_BRO_EAU_01` |
| 9 | `QI_BRO_02_09` | K3 | methode, secret | Sa méthode n'est pas un enchantement — elle réveille l'histoire du métal. Chaque objet a une mémoire de forge, et elle la libère par les coups | JAMAIS — déflection : *(elle pose le marteau. Ses doigts saignent un peu.)* « Les mots sont des cages. Le métal est libre. Ne me demande plus d'expliquer ce que tu peux voir si tu taisais ta bouche. » |
| 10 | `QI_BRO_02_10` | KX | *(hors sujet)* | *(elle se tourne vers son enclume et reprend son travail)* | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!enchant_weapon` (enchantement d'armes), `!rune_reading` (lecture de runes).
- Connectée au fil **💧 Le Pacte des Eaux** via `NPC_BRO_26`.
- Donneuse de `QST_BRO_EAU_01` (quête d'enquête sur les runes hors-dictionnaire).

## 5. Intégration Bot

- **Accueil** (`!parler sylla`) : *(elle examine ta lame. Elle ne la touche pas. Elle l'écoute.)* « … Pose-la là. Reviens dans trois coups d'enclume. »
- `!enchant_weapon` (enchantement), `!rune_reading` (inspection runique).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « mémoire du métal » réservé à l'orchestrateur.
