# ⛏️ Vendeur Boucliers — `NPC_GRA_34`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_34` |
| **Nom affiché** | Vendeur Boucliers |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Bastion Ouest |
| **Niveau / HP / MP** | 38 / 4 800 / 950 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Vendeur spécialisé dans les boucliers-tours — la spécialité défensive gnome. Ses boucliers sont réputés infranchissables. Depuis une semaine, un bouclier-tour exposé en vitrine bloque les rayons de lumière sans raison : la lumière ne passe pas à travers, alors que le bouclier est en plein jour. Pire, la zone derrière lui est plus froide. Il a déplacé le bouclier, l'a rangé à l'arrière-boutique. Le lendemain, il était de retour en vitrine, et la lumière ne passait toujours pas. Lié au fil **🔒 Le Coffre Qui Respire** : le bouclier absorbe la lumière comme la Banque absorbe le son — une propriété de la pierre qui « respire ».
- **Traits** : commerçant, orgueilleux, superstitieux, matinal.
- **Voix** : Forte, commerciale, fière de sa marchandise. « Un bouclier gnome, ça arrête tout. Même la lumière. Surtout la lumière. »
- **Relations** : `NPC_GRA_33` (Armurier Adjoint — collègue) ; `NPC_GRA_03` (Bofrik — concurrent amical) ; `NPC_GRA_30` (Banquier — lui a prêté une salle de stockage).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_34_01` | K0 | bouclier, vente | Vente de boucliers-tours — modèle standard, renforcé, d'élite | — |
| 2 | `QI_GRA_34_02` | K0 | prix, gamme | Prix : 400-1 500 Yuld selon le modèle | — |
| 3 | `QI_GRA_34_03` | K0 | defense, technique | Techniques défensives gnomes — le mur de granit | — |
| 4 | `QI_GRA_34_04` | K1 | bouclier, lumiere | Un bouclier en vitrine bloque la lumière du jour | `AFF>=60` |
| 5 | `QI_GRA_34_05` | K1 | froid, zone | La zone derrière le bouclier est anormalement froide | `AFF>=65` |
| 6 | `QI_GRA_34_06` | K1 | deplacement, retour | Il l'a rangé à l'arrière — il est revenu en vitrine | — |
| 7 | `QI_GRA_34_07` | K2 | absorption, pierre | Le bouclier semble absorber l'énergie — chaleur, lumière, son | `AFF>=85` |
| 8 | `QI_GRA_34_08` | K2 | banque, similitude | Le Banquier (`NPC_GRA_30`) a dit que la même chose arrive dans la salle des coffres — « le son disparaît » | `QUEST:QST_GRA_BOUCLIER_ABSORBE` |
| 9 | `QI_GRA_34_09` | K3 | blindage, noyau | Le bouclier est forgé avec du minerai de la strate de la Banque — il a absorbé une propriété du Noyau de Pierre `NPC_GRA_75` : un « vide de données » qui se manifeste par l'absorption d'énergie lumineuse et thermique | JAMAIS — déflection : *(il tapote le bouclier)* « Celui-ci n'est pas à vendre. Il est à… comprendre. Et je n'ai pas encore compris. » |
| 10 | `QI_GRA_34_10` | KX | *(tout le reste)* | *(il pose un bouclier contre le mur)* « La meilleure défense, c'est un mur. Nous, on les forge. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : boucliers-tours gnomes.
- Porteur du fil **🔒 Le Coffre Qui Respire** (bouclier absorbe la lumière).
- Donneur de `QST_GRA_BOUCLIER_ABSORBE` : enquête sur le bouclier qui mange la lumière.

## 5. Intégration Bot

- **Accueil** (`!parler vendeur_boucliers`) : *Appuyé contre un bouclier-tour en exposition.* « Frappe. Je te jure, tu ne le traverses pas. »
- `!buy shield` actif au Bastion Ouest.
- `NPC_SECRET_PROBED` slot 9 : hook « bouclier à vide de données » pour l'orchestrateur.
