# 🔨 Plongeur des Canaux — `NPC_BRO_29`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_29` |
| **Nom affiché** | Plongeur des Canaux |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (objets récupérés des canaux) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Canaux de Refroidissement |
| **Niveau / HP / MP** | 18 / 1 100 / 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Plonge dans les canaux pour récupérer tout ce qui tombe au fond : pièces, outils, armes, os. Il a un don pour trouver des objets que personne n'a jamais perdus — comme s'ils l'attendaient. Son étal est un bric-à-brac d'objets couverts de mousse et de rouille. Mais récemment, une pièce qu'il a remontée s'est mise à tourner toute seule sur sa table. Et elle tourne encore. Angle : la pièce qui tourne seule vient du fond du temps, pas du fond de l'eau.
- **Traits** : essoufflé, yeux rougis par l'eau, collectionneur, superstitieux.
- **Voix** : haletante, entre deux expectorations (« Faut descendre loin. Là où l'eau est noire. Là où l'eau se souvient. »).
- **Relations** : `NPC_BRO_25` (pêche dans ses canaux) ; `NPC_BRO_28` (lui achète des ingrédients immergés) ; `NPC_BRO_26` (lui indique les endroits profonds) ; `NPC_BRO_27` (se baigne là où le plongeur travaille).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_29_01` | K0 | objets, canaux | Catalogue d'objets trouvés dans les canaux (20-200 Yrds) | — |
| 2 | `QI_BRO_29_02` | K0 | plongee, technique | Techniques de plongée, dangers des canaux, courants | — |
| 3 | `QI_BRO_29_03` | K0 | profondeur, canaux | Les canaux font 15 à 50 mètres de profondeur selon les sections | — |
| 4 | `QI_BRO_29_04` | K1 | piece, tourne | Une pièce remontée du canal 7 tourne seule sur sa table — sans raison | — |
| 5 | `QI_BRO_29_05` | K1 | bruit, fond | Au fond du canal 7, il entend des enclos battre sous l'eau | `AFF>=60` |
| 6 | `QI_BRO_29_06` | K1 | objet, pas perdu | Il trouve des objets qui n'ont jamais appartenu à personne — comme fabriqués par l'eau elle-même | `AFF>=65` |
| 7 | `QI_BRO_29_07` | K2 | piece, origine | La pièce qui tourne porte un millésime : « An 0 de la Première Forge » — impossible | `AFF>=80` |
| 8 | `QI_BRO_29_08` | K2 | fosse, lumiere | Au fond du canal 7, une lumière bleue cligne au rythme du Pouls | `AFF>=85+QUEST:QST_BRO_EAUX_01` |
| 9 | `QI_BRO_29_09` | K3 | piece, fragment temps | La pièce qui tourne seule est un fragment temporel — un « battement » du Pouls solidifié tombé dans l'eau. Chaque rotation est un cycle de forge dans le passé. La pièce compte le temps des forges ancestrales | JAMAIS — déflection : *(il attrape la pièce et la serre dans son poing)* « C'est une pièce. Juste une pièce. Les pièces tournent quand on les pose sur une surface pas droite. Regarde ailleurs. » |
| 10 | `QI_BRO_29_10` | KX | *(hors sujet)* | « Tout finit au fond. Les pièces, les épées, les secrets. » | — |

## 4. Chaînage économique & quêtes

- **Marchand d'objets immergés** : `!buy_diver_items` (objets rares, reliques aquatiques).
- Fil **Pacte des Eaux** + **Le Pouls** (pièce temporelle, lumière bleue).
- Quête `QST_BRO_EAUX_03` : plonger au canal 7 pour découvrir la source bleue.

## 5. Intégration Bot

- **Accueil** (`!parler plongeur`) : *« Tu perds quelque chose ? Je le retrouve. À moins que l'eau veuille le garder. »*
- `!buy_diver_items` — catalogue d'objets.
- `NPC_SECRET_PROBED` slot 9 : hook « pièce/fragment temporel » pour l'orchestrateur.
