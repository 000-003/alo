# 🔨 Vernisseur de Lames — `NPC_BRO_44`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_44` |
| **Nom affiché** | Vernisseur de Lames |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (vernis, protections, revêtements) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Quai des Finitions |
| **Niveau / HP / MP** | 14 / 750 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Applique des vernis de protection sur les armes et armures. Ses vernis sont réputés ; ils protègent l'acier de la rouille, des intempéries, de la magie. Mais un lot de vernis appliqué la semaine dernière ne sèche pas. Les lames sont restées collantes, le vernis luisant encore. Il a tout réessayé : chaleur, air froid, poudre. Rien. Le vernis refuse de sécher, comme si le temps s'arrêtait sur ces lames. Angle : le vernis ne sèche pas parce que le temps local est figé par le Pouls — ces lames sont hors du temps.
- **Traits** : méthodique, un peu nerveux, aime les choses propres et sèches.
- **Voix** : rapide, précise (« Le vernis doit sécher. C'est la base. Si ça sèche pas, c'est que quelque chose cloche. »).
- **Relations** : `NPC_BRO_41` (vernis après polissage) ; `NPC_BRO_43` (vernis avant enchantement) ; `NPC_BRO_31` (vernis ses lames de collection) ; `NPC_BRO_32` (vernis de protection sur armures).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_44_01` | K0 | vernis, service | Vernis de protection : 30-150 Yrds | — |
| 2 | `QI_BRO_44_02` | K0 | types, vernis | Types : anti-rouille, anti-magie, anti-feu | — |
| 3 | `QI_BRO_44_03` | K0 | application, technique | Application du vernis, temps de séchage (24h standard) | — |
| 4 | `QI_BRO_44_04` | K1 | vernis, seche pas | Un lot de vernis ne sèche pas depuis 8 jours — toujours liquide | — |
| 5 | `QI_BRO_44_05` | K1 | lame, collante | Les lames vernies restent collantes — le vernis refuse de durcir | `AFF>=60` |
| 6 | `QI_BRO_44_06` | K1 | odeur, etrange | Le vernis dégage une odeur de cuivre chaud — comme le Pouls | `AFF>=65` |
| 7 | `QI_BRO_44_07` | K2 | temps, ralenti | Le vernis sèche anormalement près du Grand Geyser — le temps y est ralenti | `AFF>=80` |
| 8 | `QI_BRO_44_08` | K2 | zone, figee | La zone du Quai des Finitions est légèrement figée dans le temps — le Pouls crée une bulle temporelle | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_44_09` | K3 | quai, bulle temporelle | Le Quai des Finitions est pris dans une bulle de temps dilaté depuis la dernière Trempe Légendaire. Le vernis ne sèche pas parce qu'il est appliqué dans une zone où le temps s'écoule à 1/10e de la vitesse normale. Les lames vernies mettront 10 jours à sécher — pour leurs propriétaires, 10 jours. Pour le vernisseur, ce sera bientôt 100 jours. Il vieillit 10x plus vite sur son lieu de travail | JAMAIS — déflection : *(il essuie ses mains sur son tablier)* « Le lot est défectueux. Je vais le renvoyer au fabricant. En attendant, je n'accepte plus de commandes. » |
| 10 | `QI_BRO_44_10` | KX | *(hors sujet)* | « Le vernis, c'est la dernière couche. La dernière chance de protéger ce qui a été forgé. » | — |

## 4. Chaînage économique & quêtes

- **Service de vernissage** : `!varnish` (application de vernis de protection).
- Fil **Trempe Légendaire** (bulle temporelle au Quai).
- Quête `QST_BRO_TREMPE_08` : enquêter sur la dilatation temporelle au Quai.

## 5. Intégration Bot

- **Accueil** (`!parler vernisseur`) : *« Tu veux protéger ta lame ? Bonne idée. Mais je te préviens : ici, le séchage peut prendre du temps. »*
- `!varnish` — service de vernissage.
- `NPC_SECRET_PROBED` slot 9 : hook « vernis/bulle temporelle » pour l'orchestrateur.
