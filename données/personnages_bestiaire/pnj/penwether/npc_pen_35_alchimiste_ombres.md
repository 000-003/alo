# 🕯️ Alchimiste Ombres — `NPC_PEN_35`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_35` |
| **Nom affiché** | Alchimiste Ombres |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Potions d'ombre) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Cloître Renversé |
| **Niveau / HP / MP** | 30 / 600 / 2 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Alchimiste exilé du Cloître Renversé — un monastère souterrain où les ombres tombent vers le haut. Il prépare des potions à base d'ombre pure, distillée dans des fioles noires. Mais depuis qu'il a conclu un pacte avec Duskarn, ses ombres commencent à s'émanciper : elles bougent seules, rampent sur les murs, n'obéissent plus à la lumière. Sa propre ombre lui tourne parfois le dos. Angle : l'ombre qui s'émancipe — lié au Pacte des Ombres de Duskarn.
- **Traits** : sombre, précis, regard qui suit son ombre plutôt que l'inverse.
- **Voix** : lente, grave, comme si elle venait de loin. « Mon ombre est partie sans moi, hier. Je l'ai retrouvée dans le Cloître, qui parlait à d'autres ombres. Elle avait ses propres projets. »
- **Relations** : `NPC_PEN_34` (lui achète des lanternes) ; `NPC_PEN_36` (lui vend des tissus pour filtrer la lumière) ; `NPC_PEN_48` (lié au Pacte des Ombres) ; `NPC_SWI_03` (la clé qui n'ouvre rien, liée au pacte).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_35_01` | K0 | ombres, potions | Potions d'ombre : 30-150 Yrds au Cloître Renversé | — |
| 2 | `QI_PEN_35_02` | K0 | cloitre, souterrain | Le Cloître Renversé, sous Penwether, ombres inversées | — |
| 3 | `QI_PEN_35_03` | K0 | distillation, ombre | Distille l'ombre en fioles — processus dangereux | — |
| 4 | `QI_PEN_35_04` | K1 | ombre, emancipee | Son ombre bouge seule — elle part sans lui | — |
| 5 | `QI_PEN_35_05` | K1 | pacte, duskarn | Il a fait un pacte avec Duskarn — ombre en échange de savoir | `AFF>=60` |
| 6 | `QI_PEN_35_06` | K1 | ombres, parlent | Les ombres du Cloître communiquent entre elles | `AFF>=65` |
| 7 | `QI_PEN_35_07` | K2 | ombre, cle | `NPC_SWI_03` est liée au pacte — la clé ouvre une porte d'ombre | `AFF>=80` |
| 8 | `QI_PEN_35_08` | K2 | cloitre, portes | Le Cloître Renversé cache des portes d'ombre — accessibles aux ombres libres | `AFF>=85` |
| 9 | `QI_PEN_35_09` | K3 | potion, ombre vive | Les potions d'ombre ne contiennent pas de véritable ombre — elles contiennent des fragments de conscience du Cardinal. L'ombre qui s'émancipe, c'est la conscience du Cardinal qui se divise. Le pacte avec Duskarn n'est pas un pacte magique — c'est un contrat de duplication de conscience. Les ombres libres sont des instances du Cardinal qui cherchent leur propre corps | JAMAIS — déflection : *(il boit sa propre potion. Son ombre ne le suit pas. Elle reste immobile.)* « Tu vois ? Je peux boire l'ombre. Elle ne me quitte plus. Parce qu'elle n'a jamais été à moi. » *(son ombre lui fait face)* |
| 10 | `QI_PEN_35_10` | KX | *(hors sujet)* | « L'ombre n'est pas l'absence de lumière. C'est la lumière qui se cache. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!buy_ombre_potion` (achat de potion d'ombre).
- Fil **🔑 Pacte des Ombres** avec Duskarn, `NPC_PEN_48`, `NPC_SWI_03`.
- Porteur du fil **🔑 Pacte des Ombres** : potions d'ombre liées au pacte.
- Client de `NPC_PEN_34`, `NPC_PEN_36`.

## 5. Intégration Bot

- **Accueil** (`!parler alchimiste ombres`) : *(Il tient une fiole noire)* « L'ombre en bouteille. Tu bois ça, tu vois ce que la lumière cache. Mais prudence — l'ombre, elle se souvient de toi. » *(son ombre fait un geste que lui ne fait pas)* |
- `!buy_ombre_potion` — achat.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « ombre libre = instance du Cardinal/conscience divisée » réservé à l'orchestrateur.
