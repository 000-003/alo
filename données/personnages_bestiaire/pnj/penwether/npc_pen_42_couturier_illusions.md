# 🕯️ Couturier Illusions — `NPC_PEN_42`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_42` |
| **Nom affiché** | Couturier Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Habits d'illusion) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Atelier Visages |
| **Niveau / HP / MP** | 6 / 300 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Couturier spécialisé dans les habits d'illusion — des vêtements qui changent d'apparence, de couleur, de texture selon le porteur. Il utilise un fil spécial qu'il récolte dans les ruines, un fil qui brille d'une lumière pâle même dans l'obscurité. Mais le fil brille même quand il ne devrait pas : sous les vêtements, dans les placards, dans ses poches. Il ne peut pas s'en débarrasser. La lumière le suit. Angle : fil qui brille même dans l'obscurité.
- **Traits** : discret, observateur, toujours en train de coudre quelque chose.
- **Voix** : calme, précise. « Ce fil vient des ruines. Il brille pour te montrer le chemin. Mais parfois, il brille pour lui-même. »
- **Relations** : `NPC_PEN_33` (lui vend des tissus) ; `NPC_PEN_36` (concurrente mais amie) ; `NPC_PEN_40` (lui fournit des habits pour ses déguisements) ; `NPC_PEN_44` (lui teint ses fils avec des parfums).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_42_01` | K0 | couture, illusions | Habits d'illusion : 50-300 Yrds | — |
| 2 | `QI_PEN_42_02` | K0 | fil, ruines | Utilise un fil spécial récolté dans les ruines | — |
| 3 | `QI_PEN_42_03` | K0 | atelier, visages | Travaille à l'Atelier Visages, établi côté est | — |
| 4 | `QI_PEN_42_04` | K1 | fil, luit | Le fil brille d'une lumière pâle — même dans l'obscurité | — |
| 5 | `QI_PEN_42_05` | K1 | lumiere, persistante | La lumière persiste même sous les vêtements — visible à travers | `AFF>=60` |
| 6 | `QI_PEN_42_06` | K1 | fil, vivant | Le fil semble réagir à la présence des gens — brille plus fort près de certains | `AFF>=65` |
| 7 | `QI_PEN_42_07` | K2 | fil, donnees | Le fil est un câble de données — il transmet des informations | `AFF>=80` |
| 8 | `QI_PEN_42_08` | K2 | ruines, source | La source du fil est une salle de serveurs sous les ruines | `AFF>=85` |
| 9 | `QI_PEN_42_09` | K3 | fil, fibre optique | Le fil qui brille est une fibre optique du Cardinal. Les ruines ne sont pas antiques — ce sont les câbles du serveur qui ont percé la roche. Chaque couture qu'il fait est une connexion réseau. Les habits d'illusion sont des terminaux portables : ils transmettent les données du porteur au Cardinal | JAMAIS — déflection : *(il coupe un fil)* « Il ne brille pas. C'est une astuce de tissage. La lumière vient de la friction. *(le fil coupé continue de briller par terre)* …Je vais le jeter. » |
| 10 | `QI_PEN_42_10` | KX | *(hors sujet)* | « Un fil tient ce qui doit tenir. Même si la lumière veut partir. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!craft_illusion_robe` (création d'habit d'illusion), `!repair_garment` (réparation).
- Fil **📜 Ruines / 🎭 Illusions** (fibre optique du Cardinal).
- Fournisseur de `NPC_PEN_40`, client de `NPC_PEN_33` et `NPC_PEN_36`.

## 5. Intégration Bot

- **Accueil** (`!parler couturier illusions`) : *(Il coud un ourson qui scintille)* « Un habit d'illusion ? Je peux te faire un manteau qui change de couleur selon ton humeur. Ou une cape qui te rend invisible. Mais le fil… *(il montre la lumière)* …le fil, il brille toujours. C'est sa nature. » |
- `!craft_illusion_robe` — création, `!repair_garment` — réparation.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « fil = fibre optique/terminal du Cardinal » réservé à l'orchestrateur.
