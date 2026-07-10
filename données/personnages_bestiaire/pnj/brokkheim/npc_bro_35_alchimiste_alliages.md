# 🔨 Alchimiste des Alliages — `NPC_BRO_35`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_35` |
| **Nom affiché** | Alchimiste des Alliages |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (alliages rares, métaux composites) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 24 / 1 300 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Alchimiste des métaux, spécialiste des alliages rares. Il combine l'acier, le cuivre, le mithril et des poudres d'os de lave pour créer des composites aux propriétés uniques. Son dernier alliage, le « Cuivre-Souffle », change de couleur au contact de l'air. Mais parfois, l'alliage « respire » — il se dilate et se contracte comme un poumon de métal. Angle : l'alliage qui respire est vivant — une forme de métal organique forgé accidentellement par le Pouls.
- **Traits** : obsessionnel, baragouine des formules, doigts brûlés, passion contagieuse.
- **Voix** : rapide, hachée, technique (« Le cuivre et le mithril, 7:3, température du geyser, pas une seconde de plus — et là, regarde, il respire ! »).
- **Relations** : `NPC_BRO_33` (lui achète outils de test) ; `NPC_BRO_37` (lui fournit métaux de base) ; `NPC_BRO_40` (teste ses alliages sur les finitions) ; `NPC_BRO_36` (forgeron ambulant, teste ses alliages en conditions réelles).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_35_01` | K0 | alliages, catalogue | Alliages rares : Cuivre-Souffle, Acier-Mémoire, Bronze-Chant | — |
| 2 | `QI_BRO_35_02` | K0 | metaux, base | Métaux de base : cuivre, étain, fer, mithril | — |
| 3 | `QI_BRO_35_03` | K0 | alchimie, metal | Principes de l'alchimie des métaux — fusion, trempe, alliages | — |
| 4 | `QI_BRO_35_04` | K1 | alliage, respire | Le Cuivre-Souffle se dilate et se contracte — comme une respiration | — |
| 5 | `QI_BRO_35_05` | K1 | pouls, alliage | Les alliages forgés pendant le Pouls sont plus « actifs » | `AFF>=60` |
| 6 | `QI_BRO_35_06` | K1 | test, forcenerie | Un test de forge a fait « crier » l'alliage — un son qui n'était pas du métal | `AFF>=65` |
| 7 | `QI_BRO_35_07` | K2 | metal, organique | Le Cuivre-Souffle contient une structure cellulaire — du métal organique | `AFF>=80` |
| 8 | `QI_BRO_35_08` | K2 | secret, trempe | La Trempe Légendaire (`NPC_BRO_40`) utilise son alliage pour les finitions — c'est le secret de la durabilité | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_35_09` | K3 | alliage, sang forge | Le Cuivre-Souffle n'est pas un alliage — c'est le « sang » du Pouls solidifié, un sous-produit du battement de la forge cardinale. Chaque fois qu'on le forge, on lui redonne vie. L'alliage respire parce que le Pouls respire à travers lui | JAMAIS — déflection : *(il éteint brusquement son four)* « C'est de la science. De la simple science des métaux. Rien de mystique. Regarde les proportions, c'est tout. » |
| 10 | `QI_BRO_35_10` | KX | *(hors sujet)* | « Le métal vit. Il naît, il respire, il meurt. Et parfois, il renaît. » | — |

## 4. Chaînage économique & quêtes

- **Marchand d'alliages** : `!buy_alloys` (alliages rares, métaux spéciaux).
- Fil **Le Pouls** (alliage = sang du Pouls) + **Trempe Légendaire**.
- Quête `QST_BRO_TREMPE_01` : comprendre la nature du Cuivre-Souffle.

## 5. Intégration Bot

- **Accueil** (`!parler alliages`) : *« Ne touche pas à ça tant que c'est chaud. Ou froid. En fait, ne touche pas. »*
- `!buy_alloys` — catalogue des alliages.
- `NPC_SECRET_PROBED` slot 9 : hook « Cuivre-Souffle/sang Pouls » pour l'orchestrateur.
