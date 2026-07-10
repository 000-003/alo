# ⛏️ Instructeur des Novices — `NPC_GRA_96`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_96` |
| **Nom affiché** | Instructeur des Novices |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit |
| **Niveau / HP / MP** | 35 / 2 800 / 1 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître instructeur des nouveaux mineurs. Il forme les novices à écouter la roche, à lire les veines, à respecter la montagne. Ses méthodes sont anciennes — il fait poser l'oreille contre la pierre pendant une heure avant de donner le premier coup de pioche. « La roche te dit où frapper. » Depuis trois mois, ses élèves entendent la roche trop bien — ils décrivent des voix, des chants, des pulsations. L'un d'eux a pleuré en disant que « la montagne avait parlé de la fin du monde ». L'Instructeur sait que ses élèves captent le Cœur de Granit (`NPC_GRA_00`). **Angle** : Des élèves qui entendent la roche.
- **Traits** : patient, exigeant, voix grave, mains énormes.
- **Voix** : Forte, enseignante, avec des grondements. « Pose l'oreille. Respire. Écoute. Si tu n'entends rien, la roche n'a pas confiance. Recommence. »
- **Relations** : `NPC_GRA_01` (Contremaître Durgan — ami, lui envoie des élèves prometteurs) ; `NPC_GRA_05` (Helga — lui a prêté une gemme d'écoute) ; `NPC_GRA_06` (Margrim — a entendu parler des « élèves qui entendent trop »).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_96_01` | K0 | minage, apprentissage | L'apprentissage du minage — méthodes, outils, sécurité | — |
| 2 | `QI_GRA_96_02` | K0 | steppes, entrainement | L'entraînement dans les Steppes de Granit — parcours, épreuves | — |
| 3 | `QI_GRA_96_03` | K0 | gnome, tradition | Les traditions gnomes de transmission du métier de mineur | — |
| 4 | `QI_GRA_96_04` | K1 | eleves, voix | Ses élèves entendent des voix dans la pierre — « la montagne parle » | `AFF>=60` |
| 5 | `QI_GRA_96_05` | K1 | pulsation, detection | Ils décrivent tous une pulsation — un battement régulier sous la roche | `AFF>=65` |
| 6 | `QI_GRA_96_06` | K1 | helga, gemme_prêt | Helga `NPC_GRA_05` lui a prêté une gemme qui amplifie le son de la roche | — |
| 7 | `QI_GRA_96_07` | K2 | voix, fin_du_monde | Un élève a entendu « la fin du monde » — une prophétie de destruction de la montagne | `AFF>=85` |
| 8 | `QI_GRA_96_08` | K2 | coeur, pulsation | La pulsation vient du sous-sol du Conseil — « les élèves captent le même battement que Margrim » | `QUEST:QST_GRA_VOIX_ROCHES` |
| 9 | `QI_GRA_96_09` | K3 | coeur, seed, eleves | Les élèves les plus sensibles captent le seed du Cœur de Granit `NPC_GRA_00` via la résonance des strates — ils « entendent » littéralement les données du serveur minier qui traversent la roche. La « voix de la fin du monde » est un message d'erreur du Cardinal annonçant une corruption de seed | JAMAIS — déflection : *(il serre le poing)* « Les élèves ont de l'imagination. La montagne ne parle pas. C'est le vent dans les failles. Rien d'autre. » |
| 10 | `QI_GRA_96_10` | KX | *(hors sujet)* | *(il tend une pioche à un élève)* « Frappe là. Juste là. Tu verras, la pierre s'ouvre. » | — |

## 4. Chaînage économique & quêtes

- **Entraînement** : `!minage_apprentissage` (buff Minage +15% pendant 1h).
- Porteur du fil **🔮 Le Noyau de Pierre** (les élèves captent le seed).
- Donneur de `QST_GRA_VOIX_ROCHES` : enquête sur les voix dans la pierre.

## 5. Intégration Bot

- **Accueil** (`!parler instructeur`) : *Debout au milieu des Steppes, il tient une pioche comme un sceptre.* « Nouveau ? Pose ton oreille contre la roche. Dis-moi ce que tu entends. Rien ? Alors écoute mieux. »
- `!minage_apprentissage` actif dans les Steppes de Granit.
- `NPC_SECRET_PROBED` slot 9 : hook « élèves = capteurs biologiques du seed » pour l'orchestrateur.
