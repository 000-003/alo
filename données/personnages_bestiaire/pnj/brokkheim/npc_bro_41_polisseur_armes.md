# 🔨 Polisseur d'Armes — `NPC_BRO_41`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_41` |
| **Nom affiché** | Polisseur d'Armes |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (polissage, lustrage, miroitage) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Quai des Finitions |
| **Niveau / HP / MP** | 16 / 800 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Polisseur attitré du Quai des Finitions. Il rend les lames tellement brillantes qu'elles reflètent parfaitement le visage qu'on y pose. Mais depuis quelque temps, le reflet dans ses lames montre autre chose — des pièces vides, des endroits où le polisseur n'est jamais allé, des gens qu'il ne connaît pas. Parfois, le reflet bouge avant la personne. Angle : le reflet montre autre chose — les lames polies sont des fenêtres sur des ailleurs.
- **Traits** : perfectionniste, troublé par les reflets, fait des cauchemars de miroirs.
- **Voix** : douce, rêveuse, parfois effrayée (« Regarde pas trop longtemps. Le reflet finit par regarder à son tour. »).
- **Relations** : `NPC_BRO_40` (polissage avant finition) ; `NPC_BRO_31` (polit ses lames de prestige) ; `NPC_BRO_44` (vernis après polissage) ; `NPC_BRO_32` (polit les heaumes d'apparat).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_41_01` | K0 | polissage, service | Polissage d'armes : 20-100 Yrds selon taille | — |
| 2 | `QI_BRO_41_02` | K0 | technique, miroir | Techniques de polissage miroir, abrasifs, huiles | — |
| 3 | `QI_BRO_41_03` | K0 | entretien, lame | Conseils d'entretien après polissage | — |
| 4 | `QI_BRO_41_04` | K1 | reflet, autre | Le reflet dans ses lames montre des endroits inconnus | — |
| 5 | `QI_BRO_41_05` | K1 | reflet, bouge | Le reflet bouche avant la personne — décalage d'une seconde | `AFF>=60` |
| 6 | `QI_BRO_41_06` | K1 | lendemain, reflet | Le reflet montre parfois le lendemain — il a vu quelqu'un arriver avant qu'il n'arrive | `AFF>=65` |
| 7 | `QI_BRO_41_07` | K2 | lame, fenetre | Les lames polies sont des fenêtres vers d'autres moments — polir ouvre le temps | `AFF>=80` |
| 8 | `QI_BRO_41_08` | K2 | pouls, polissage | Le polissage parfait n'est possible que pendant le Pouls — la vibration aide | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_41_09` | K3 | reflet, cardinal | Chaque lame polie à Brokkheim est un œil du Cardinal. À travers le reflet, le Cardinal observe tous les porteurs de lames. Le décalage temporel — voir avant que ça n'arrive — c'est le Cardinal qui regarde depuis le futur, et le reflet montre ce que ses yeux ont déjà vu | JAMAIS — déflection : *(il retourne la lame contre le mur)* « Le polissage est parfait. Trop parfait. C'est dérangeant. Mais c'est mon métier. Si tu veux une lame moins brillante, va voir ailleurs. » |
| 10 | `QI_BRO_41_10` | KX | *(hors sujet)* | « Le reflet le plus fidèle est celui qu'on ne regarde pas. » | — |

## 4. Chaînage économique & quêtes

- **Service de polissage** : `!polish` (polissage d'arme, buff d'apparence temporaire).
- Fil **Trempe Légendaire** + **Le Pouls** (reflets temporels).
- Quête `QST_BRO_TREMPE_05` : enquêter sur le décalage temporel des reflets.

## 5. Intégration Bot

- **Accueil** (`!parler polisseur`) : *« Tu veux voir ton reflet ? Attention, tu risques de ne pas reconnaître ce qui te regarde. »*
- `!polish` — service de polissage.
- `NPC_SECRET_PROBED` slot 9 : hook « reflet/œil du Cardinal » pour l'orchestrateur.
