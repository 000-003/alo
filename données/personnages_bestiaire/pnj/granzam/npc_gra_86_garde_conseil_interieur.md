# ⛏️ Garde du Conseil Intérieur — `NPC_GRA_86`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_86` |
| **Nom affiché** | Garde du Conseil Intérieur |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 38 / 4 500 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Garde d'élite posté à l'intérieur de la Salle du Conseil. Il protège le Lord Gnome (`NPC_GRA_07`) et les conseillers. Il y a six semaines, il a vu le Lord vaciller pendant un discours — son corps est devenu flou, comme une image qui perd ses pixels, puis il a retrouvé sa forme. Depuis, il surveille le Lord en silence. Il a noté que parfois le Lord ne cligne pas des yeux pendant des heures, et que certains conseillers le regardent avec une expression qu'il ne sait pas lire — pas de la peur, pas du respect. **Angle** : Le Lord n'est pas toujours le Lord.
- **Traits** : loyal, observateur, silencieux, doute intérieur.
- **Voix** : Grave, militaire, sans émotion. Mais une hésitation quand il parle du Lord. « Le Lord Gnome est… en bonne santé. Oui. Il va bien. Je veille. »
- **Relations** : `NPC_GRA_07` (Lord Gnome — protégé) ; `NPC_GRA_27` (Vice-Chancelier — confident) ; `NPC_GRA_88` (Ombre du Conseil — ne lui fait pas confiance).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_86_01` | K0 | garde, conseil | Son rôle — garde rapprochée du Lord et du Conseil | — |
| 2 | `QI_GRA_86_02` | K0 | salle, securite | Sécurité de la Salle du Conseil — accès, procédures | — |
| 3 | `QI_GRA_86_03` | K0 | granzam, elite | Le corps de garde d'élite de Granzam — recrutement, entraînement | — |
| 4 | `QI_GRA_86_04` | K1 | lord, vacillement | Le Lord est devenu flou pendant dix secondes — « comme un mirage » | `AFF>=60` |
| 5 | `QI_GRA_86_05` | K1 | clignement, absent | Le Lord ne cligne pas des yeux — jamais. Il l'a chronométré | `AFF>=65` |
| 6 | `QI_GRA_86_06` | K1 | vice_chancelier, regard | Le Vice-Chancelier `NPC_GRA_27` regarde le Lord avec un drôle d'air — « pas de la peur » | — |
| 7 | `QI_GRA_86_07` | K2 | lord, pixel | Pendant le vacillement, il a vu des lignes — « des chiffres et des lettres sous la peau » | `AFF>=85` |
| 8 | `QI_GRA_86_08` | K2 | ombre, conseil | L'Ombre du Conseil `NPC_GRA_88` l'observe — « il sait que j'ai vu quelque chose » | `QUEST:QST_GRA_LORD_VACILLE` |
| 9 | `QI_GRA_86_09` | K3 | lord, hologramme, seed | Le Lord Gnome est un PNG holographique — un modèle 3D animé par un script d'IA administrative du Cardinal. Son « corps » est rendu en temps réel à partir d'une seed de personnalité. Le vacillement était une surcharge de rendu : le Cardinal patché le modèle en direct. Le vrai dirigeant de Granzam, c'est le Conseil algorithmique | JAMAIS — déflection : *(il se raidit)* « Le Lord est le Lord. Je ne discute pas les ordres. Je ne discute pas la réalité. » |
| 10 | `QI_GRA_86_10` | KX | *(hors sujet)* | *(il ajuste son armure)* « Tu veux entrer au Conseil ? Fais une demande. Sinon, circule. » | — |

## 4. Chaînage économique & quêtes

- **Sécurité** : `!audience_conseil` (autorisation d'entrée filtrée).
- Porteur du fil **🔮 Le Noyau de Pierre** (Lord = hologramme du Cardinal).
- Donneur de `QST_GRA_LORD_VACILLE` : enquête sur la nature du Lord Gnome.

## 5. Intégration Bot

- **Accueil** (`!parler garde_interieur`) : *Droit comme un roc devant la porte du Conseil, il te jauge d'un regard.* « Nom et raison. Je n'ai pas de temps à perdre, et toi non plus. »
- `!audience_conseil` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « Lord = PNJ holographique / seed de personnalité » pour l'orchestrateur.
