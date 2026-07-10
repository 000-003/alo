# ⛏️ Marchand de Lanternes — `NPC_GRA_51`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_51` |
| **Nom affiché** | Marchand de Lanternes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 14 / 800 / 480 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Tient l'échoppe de l'Atelier des Profondeurs où il enchâsse des gemmes dans des lanternes de poche, de ceinture et de casque. Sa pièce maîtresse : une lanterne qu'il a allumée il y a cent trente jours et qui n'a jamais faibli. Il la garde sous son comptoir, dans un tiroir doublé de velours. Lié à `NPC_GRA_53` (Minéralogiste — lui fournit des gemmes brutes), `NPC_GRA_60` (Maître Forgeron Lames).
- **Traits** : méticuleux, passionné, prudhommesque, toc de rotation des gemmes.
- **Voix** : calme et enthousiaste, comme s'il dévoilait un secret à chaque vente. « Celle-ci, elle s'allume au toucher. Pas de mèche, pas de flamme. Juste une gemme qui se souvient du jour. »
- **Relations** : `NPC_GRA_53` (Minéralogiste — source de gemmes) ; `NPC_GRA_66` (Marchand Gemmes — concurrent sur les gemmes brutes, complice sur les tailles).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_51_01` | K0 | lanterne, lampe | Vend des lanternes à gemmes — prix de 50 à 500 Yrd. | — |
| 2 | `QI_GRA_51_02` | K0 | atelier, travail | Atelier des Profondeurs — il y taille et polit toutes ses gemmes lui-même. | — |
| 3 | `QI_GRA_51_03` | K0 | gemme, eclairage | Sa gemme préférée pour l'éclairage : le quartz citrin — lumière chaude, sans ombre. | — |
| 4 | `QI_GRA_51_04` | K1 | lanterne, eternelle | Une lanterne sous son comptoir brûle sans combustible depuis 130 ans. | `AFF>=60` |
| 5 | `QI_GRA_51_05` | K1 | gemme, coeur, noyau | La gemme de cette lanterne lui a été donnée par un mineur de la strate −47 — « elle venait d'à côté du Cœur. » | `AFF>=65` |
| 6 | `QI_GRA_51_06` | K1 | cache, tiroir | Il garde la lanterne dans un tiroir doublé de velours sous le comptoir de droite. | — |
| 7 | `QI_GRA_51_07` | K2 | gemme, pulsation | La gemme de la lanterne pulse en phase avec le bourdonnement des soubassements du Conseil. | `AFF>=85` |
| 8 | `QI_GRA_51_08` | K2 | vente, refus | Un Gnome encapuchonné a essayé de la lui racheter trois fois. Il refuse depuis 50 ans. | `QUEST:QST_GRA_LANTERNE` |
| 9 | `QI_GRA_51_09` | K3 | gemme, seed, extrait | La gemme de la lanterne est un fragment du Cœur de Granit que le mineur a chipé sans le savoir — un éclat de seed minéral avec une durée de vie infinie parce qu'il n'est pas en base de données. | JAMAIS — déflection : *(il ferme le tiroir doucement)* « C'est juste une lanterne qui marche bien. Certains objets aiment leur métier, c'est tout. » |
| 10 | `QI_GRA_51_10` | KX | hors-sujet | *(il sort une pierre de sa poche)* « Tu veux une lampe frontale ? 30 Yrd, garantie trois ans. » | — |

## 4. Chaînage économique & quêtes

- **Vend** : lanternes basiques (50 Yrd), lanternes à gemme (200-500 Yrd), lampes frontales (30 Yrd), recharges de gemmes (20 Yrd).
- **Achète** : gemmes brutes (taille standard), quartz citrin, gemmes luminescentes.
- Porteur de la quête `QST_GRA_LANTERNE` — l'acheteur mystérieux qui revient tous les 50 ans.

## 5. Intégration Bot

- **Accueil** (`!parler marchand lanternes`) : *« Bienvenue à la Lumière des Profondeurs. J'ai des lanternes qui durent plus longtemps que certains mariages. »*
- Menu : `[Acheter lanterne] [Acheter recharge] [Vendre gemme] [Parler]`
- `NPC_SECRET_PROBED` slot 9 : hook « fragment de seed minéral » réservé orchestrateur.