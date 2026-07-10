# ⛏️ Réfugié Salamander — `NPC_GRA_90`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_90` |
| **Nom affiché** | Réfugié Salamander |
| **Race** | Salamander |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit |
| **Niveau / HP / MP** | 22 / 2 000 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Salamander fuyard de Voulg, réfugié aux Steppes de Granit. Il a été chassé de sa tribu pour avoir refusé de participer à un raid contre les Gnomes — une attaque commanditée par des trafiquants qui voulaient déstabiliser Granzam. Il connaît Balrog (`NPC_VOU_04`), un Salamander resté à Voulg qui l'a aidé à s'enfuir. Depuis son exil, il vit dans une grotte des Steppes, survivant de chasse et de troc avec les Gardes de la Porte. Il craint d'être retrouvé par les émissaires de Voulg. **Angle** : Lié à Balrog `NPC_VOU_04`.
- **Traits** : méfiant, survivant, solitaire, brûlé au visage (cicatrices de lave).
- **Voix** : Rauque, crachotante, comme un feu qui crépite. « Balrog m'a sauvé. Balrog sait des choses. Si tu le vois, dis-lui que la flamme de l'ouest tient encore. »
- **Relations** : `NPC_VOU_04` (Balrog — ami et sauveur à Voulg) ; `NPC_GRA_76` (Veilleur de Nuit — lui apporte de la nourriture) ; `NPC_GRA_91` (Marchand Leprechaun — l'a repéré, sait qu'il est là).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_90_01` | K0 | salamander, refuge | Sa vie de réfugié dans les Steppes de Granit | — |
| 2 | `QI_GRA_90_02` | K0 | voulg, tribu | La tribu Salamander de Voulg — coutumes, hiérarchie | — |
| 3 | `QI_GRA_90_03` | K0 | steppes, survie | La survie dans les Steppes de Granit — gibier, abris, dangers | — |
| 4 | `QI_GRA_90_04` | K1 | balrog, fuite | Balrog `NPC_VOU_04` a organisé sa fuite — « il a ouvert la porte sud » | `AFF>=60` |
| 5 | `QI_GRA_90_05` | K1 | raid, commanditaire | Le raid contre Granzam était commandité par des trafiquants — « des marchands d'ombre » | `AFF>=65` |
| 6 | `QI_GRA_90_06` | K1 | leprechaun, menace | Le Marchand Leprechaun `NPC_GRA_91` l'a repéré — « il sait que je suis là, il va parler » | — |
| 7 | `QI_GRA_90_07` | K2 | balrog, secret | Balrog sait où se trouve le réseau de trafic de gemmes entre Voulg et Granzam | `AFF>=85` |
| 8 | `QI_GRA_90_08` | K2 | trafiquant, reseau | Le trafic passe par les Steppes — des convois de nuit, sans bannière | `QUEST:QST_GRA_SALAMANDER_FUITE` |
| 9 | `QI_GRA_90_09` | K3 | voulg, balrog, seed | Balrog `NPC_VOU_04` n'est pas un simple Salamander — il est un gardien de seed locale pour Voulg, comme le Lord Gnome pour Granzam. Sa vraie nature est un secret que le Cardinal protège | JAMAIS — déflection : *(il crache du feu par les narines)* « Balrog est mort. J'ai rien à dire. Laisse couler. » |
| 10 | `QI_GRA_90_10` | KX | *(hors sujet)* | *(il attise un feu de camp)* « Le feu, ça réchauffe. Ça brûle. Les deux sont vrais. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!recit_voulg` (récit de Voulg, connaissance de la culture Salamander).
- Porteur du fil **🔥 Rivalité de Sang** (tensions Voulg-Granzam, commandité par des trafiquants).
- Donneur de `QST_GRA_SALAMANDER_FUITE` : enquête sur le trafic via les Steppes.

## 5. Intégration Bot

- **Accueil** (`!parler refugie_salamander`) : *Recroquevillé près d'un feu dans les Steppes, il lève un regard méfiant.* « Toi pas de Voulg ? Toi pas de la tribu ? Alors approche. Mais doucement. »
- `!recit_voulg` actif dans les Steppes de Granit.
- `NPC_SECRET_PROBED` slot 9 : hook « Balrog = gardien de seed locale de Voulg » pour l'orchestrateur.
