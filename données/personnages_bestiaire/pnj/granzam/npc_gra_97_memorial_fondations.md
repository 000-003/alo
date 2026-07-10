# ⛏️ Mémorial des Fondations — `NPC_GRA_97`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_97` |
| **Nom affiché** | Mémorial des Fondations |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 12 / 600 / 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien de la Pierre des Fondations, un bloc de granit au centre de la Salle du Conseil qui marque l'emplacement où Granzam a été fondée. Il est le plus vieux serviteur du Conseil — non par l'âge, mais par l'ancienneté : il est là depuis le premier jour. Il connaît chaque nom des fondateurs, chaque étape de construction. Depuis un an, il sent que la pierre des fondations « pèse » — physiquement — comme si elle devenait plus lourde. Il a dû renforcer le plancher deux fois. La pierre n'a pourtant pas changé de taille. **Angle** : Une pierre qui pèse de plus en plus.
- **Traits** : vieux, lent, mémoire prodigieuse, parle à la pierre.
- **Voix** : Faible, craquante, comme du bois sec. « Cette pierre a vu naître Granzam. Elle a vu chaque conseiller, chaque décision. Maintenant, elle ploie. Comme si elle portait trop de mémoire. »
- **Relations** : `NPC_GRA_00` (Cœur de Granit — sait inconsciemment que la pierre est liée au bloc) ; `NPC_GRA_26` (Archiviste — a consulté les plans de fondation) ; `NPC_GRA_89` (Gardien du Mémorial — même fonction, même lien à la mémoire de pierre).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_97_01` | K0 | fondation, granzam | La fondation de Granzam — date, fondateurs, histoire | — |
| 2 | `QI_GRA_97_02` | K0 | pierre, fondations | La Pierre des Fondations — symbole, signification | — |
| 3 | `QI_GRA_97_03` | K0 | conseil, histoire | L'histoire de la Salle du Conseil — construction, rénovations | — |
| 4 | `QI_GRA_97_04` | K1 | pierre, poids | La Pierre des Fondations devient plus lourde — il a dû renforcer le plancher | `AFF>=60` |
| 5 | `QI_GRA_97_05` | K1 | mesure, poids | Il a pesé la pierre — « elle n'a pas changé de masse, mais elle pèse plus » | `AFF>=65` |
| 6 | `QI_GRA_97_06` | K1 | archiviste, plans | L'Archiviste `NPC_GRA_26` lui a montré les plans — la pierre est posée sur une cavité | — |
| 7 | `QI_GRA_97_07` | K2 | cavite, sous_sol | Sous la pierre, les plans montrent une cavité −47 — « la chambre du Cœur » | `AFF>=85` |
| 8 | `QI_GRA_97_08` | K2 | poids, coeur | La pierre pèse parce qu'elle est au-dessus du Cœur « qui grossit ou qui se remplit de données » | `QUEST:QST_GRA_PIERRE_PESE` |
| 9 | `QI_GRA_97_09` | K3 | pierre, seed, stockage | La Pierre des Fondations n'est pas un simple monument — c'est un cache-seed local, un point de stockage physique de la seed matérielle. Elle « pèse » plus lourd car le Cœur de Granit `NPC_GRA_00` y écrit des données de sauvegarde. Chaque décision du Conseil, chaque transaction, chaque mort de mineur est gravée dans la pierre en seed de backup | JAMAIS — déflection : *(il tousse)* « La pierre a toujours été lourde. C'est du granit. Le granit, ça pèse. C'est tout. » |
| 10 | `QI_GRA_97_10` | KX | *(hors sujet)* | *(il pose la main sur la pierre)* « Pose la main. Tu sens ? C'est l'histoire de la cité. Ça pèse. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!histoire_granzam` (récit de la fondation de Granzam).
- Porteur du fil **🔮 Le Noyau de Pierre** (la pierre = cache-seed de backup).
- Donneur de `QST_GRA_PIERRE_PESE` : exploration de la cavité sous la pierre.

## 5. Intégration Bot

- **Accueil** (`!parler memorial_fondations`) : *Un vieux Gnome voûté, la main posée sur un bloc de granit au centre de la salle.* « Pose ta main. Tu sens ? Granzam te parle à travers la pierre. »
- `!histoire_granzam` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « pierre des fondations = cache-seed de backup du monde » pour l'orchestrateur.
