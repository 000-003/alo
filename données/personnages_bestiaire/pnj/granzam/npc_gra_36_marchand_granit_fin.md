# ⛏️ Marchand Granit Fin — `NPC_GRA_36`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_36` |
| **Nom affiché** | Marchand Granit Fin |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Carrières Brisées |
| **Niveau / HP / MP** | 30 / 2 100 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Tailleur et marchand de granit décoratif — dalles, colonnes, sculptures. Il fournit les bâtisseurs de la ville. Il a extrait un bloc de granit noir des Carrières Brisées la semaine dernière. Le soir, le bloc pulse d'une lumière ambrée faible, juste assez pour qu'on le voie dans le noir. Il l'a gardé sous une bâche. La lueur traverse la toile. Il a peur que les autorités le confisquent. Lié au fil **🔮 Le Noyau de Pierre** : le bloc est un fragment du Cœur, remonté par l'érosion des strates.
- **Traits** : discret, craintif, bon commerçant, fier de son travail.
- **Voix** : Grave, hésitante. « Le granit de Granzam est le meilleur d'Alfheim. Mais celui-ci… celui-ci est différent. »
- **Relations** : `NPC_GRA_56` (Sentinelle Carrières — lui a signalé le bloc) ; `NPC_GRA_35` (Alchimiste — a examiné un échantillon) ; `NPC_GRA_75` (Maréchal — il a peur qu'il le découvre).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_36_01` | K0 | granit, vente | Vente de granit décoratif — dalles, colonnes, sculptures | — |
| 2 | `QI_GRA_36_02` | K0 | carriere, extraction | Extraction — Carrières Brisées, filon de granit noir | — |
| 3 | `QI_GRA_36_03` | K0 | prix, livraison | Prix : 80-600 Yuld le bloc selon la qualité | — |
| 4 | `QI_GRA_36_04` | K1 | bloc, lueur | Un bloc de granit noir pulse d'une lumière ambrée la nuit | `AFF>=60` |
| 5 | `QI_GRA_36_05` | K1 | bache, lumiere | La lueur traverse la bâche — visible à 10 mètres | `AFF>=65` |
| 6 | `QI_GRA_36_06` | K1 | sentinelle, signal | La Sentinelle (`NPC_GRA_56`) a vu la lueur et l'a prévenu | — |
| 7 | `QI_GRA_36_07` | K2 | coeur, fragment | L'Alchimiste (`NPC_GRA_35`) a dit que le bloc ressemble à un fragment du Cœur | `AFF>=85` |
| 8 | `QI_GRA_36_08` | K2 | strate, remontee | Le bloc vient d'une strate profonde — remonté par un glissement de terrain | `QUEST:QST_GRA_BLOC_PULSE` |
| 9 | `QI_GRA_36_09` | K3 | fragment, coeur_granit | Le bloc est un éclat du Cœur de Granit `NPC_GRA_00` — éjecté par une purge de données du Cardinal, il contient une copie partielle de la seed matérielle | JAMAIS — déflection : *(il rabat la bâche d'un geste sec)* « Rien à voir. Du granit. Juste du granit. Va-t'en. » |
| 10 | `QI_GRA_36_10` | KX | *(tout le reste)* | *(il tapote une dalle)* « Le granit, ça dure. C'est pour ça qu'on l'aime. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : granit décoratif.
- Porteur du fil **🔮 Le Noyau de Pierre** (fragment du Cœur).
- Donneur de `QST_GRA_BLOC_PULSE` : enquête sur le bloc qui luit.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_granit`) : *Soulève un coin de bâche, jette un coup d'œil en dessous, la replace.* « Le granit fin, c'est ici. Mais prends celui de gauche. Pas celui du fond. »
- `!buy stone` actif aux Carrières Brisées.
- `NPC_SECRET_PROBED` slot 9 : hook « éclat de seed matérielle » pour l'orchestrateur.
