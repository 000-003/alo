# 🔨 Garde Conseil Int — `NPC_BRO_86`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_86` |
| **Nom affiché** | Garde Conseil Int |
| **Race** | Leprechaun |
| **Rôle** | `GUARD` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes |
| **Niveau / HP / MP** | 22 / 1600 / 350 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde personnel du Lord Leprechaun et des membres du Conseil des Guildes. Il a accès aux couloirs intérieurs. Il a remarqué que le Lord clignote par moments — une déformation holographique brève, comme si sa matière première perdait la connexion. Angle : Lord clignote.
- **Traits** : Loyal, silencieux, yeux perçants.
- **Voix** : Nette, autoritaire. « Le Conseil siège. Personne ne passe. »
- **Relations :** `NPC_BRO_07` (Lord Leprechaun — protégé), `NPC_BRO_92` (courtier Alne — le voit entrer au Conseil), `NPC_BRO_99` (Mémoire — assiste parfois).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_86_01` | K0 | conseil, guildes | Le Conseil des Guildes gère la production de Brokkheim | — |
| 2 | `QI_BRO_86_02` | K0 | securite, interieure | Sécurité intérieure : accès restreint aux membres du Conseil | — |
| 3 | `QI_BRO_86_03` | K0 | lord, presence | Le Lord Leprechaun assiste à tous les conseils | — |
| 4 | `QI_BRO_86_04` | K1 | lord, clignote | Le Lord clignote comme une flamme quand il parle du Pouls | `AFF>=60` |
| 5 | `QI_BRO_86_05` | K1 | hologramme, lord | Le Lord est peut-être un hologramme — il ne mange pas, ne boit pas | — |
| 6 | `QI_BRO_86_06` | K1 | granzam, infiltration | Des gnomes ont tenté d'accéder au Conseil — il les a repoussés | `AFF>=65` |
| 7 | `QI_BRO_86_07` | K2 | salle, secrete | Derrière la salle du Conseil, une porte qu'il n'a jamais ouverte | `AFF>=80` |
| 8 | `QI_BRO_86_08` | K2 | lord, pietre | Le Lord a des moments d'absence — comme si quelqu'un d'autre prenait le contrôle | `AFF>=85` |
| 9 | `QI_BRO_86_09` | K3 | lord, interface | Le Lord n'est pas un Leprechaun — c'est une interface entre le Pouls (processeur) et le Conseil. Il clignote quand le Pouls surchauffe et que la connexion serveur vacille | JAMAIS — déflection : *(il pose la main sur son épée)* « Le Lord est le Lord. Je ne discute pas ce que je vois. Je le protège. » |
| 10 | `QI_BRO_86_10` | KX | *(hors sujet)* | « Les murs du Conseil ont des oreilles. Et des dents. » | — |

## 4. Chaînage économique & quêtes

- **GUARD** : `!check_council` — vérifie les accréditations pour entrer au Conseil.

## 5. Intégration Bot

- **Accueil :** *(bras croisés)* « Accréditation ? Non ? Alors dehors. »