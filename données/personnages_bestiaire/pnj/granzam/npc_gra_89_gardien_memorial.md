# ⛏️ Gardien du Mémorial — `NPC_GRA_89`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_89` |
| **Nom affiché** | Gardien du Mémorial |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 15 / 900 / 250 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien du Mémorial des Mineurs, une stèle de granit dans la Grande Halle où sont gravés les noms de tous les mineurs morts dans les galeries. Il entretient la flamme éternelle de cristal, polit les noms, ajoute les nouveaux. Depuis deux mois, certains noms résonnent — il les entend la nuit, murmurés par la pierre. Il a gratté le granit autour d'un nom : il était chaud. En touchant les lettres, il a entendu une voix : « Je suis encore là. » **Angle** : Un nom qui résonne.
- **Traits** : dévoué, doux, solitaire, entend la pierre.
- **Voix** : Calme, posée, comme une prière continue. « Chaque nom a été un mineur. Chaque mineur a été une vie. Et certaines vies… ne veulent pas partir. »
- **Relations** : `NPC_GRA_85` (Fossoyeur — lui donne les noms des nouveaux morts) ; `NPC_GRA_97` (Mémorial des Fondations — partage le même lien aux pierres gravées) ; `NPC_GRA_84` (Nécromancien — vient parfois « consulter » le mémorial).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_89_01` | K0 | memorial, stèle | Le Mémorial des Mineurs — histoire, inscriptions | — |
| 2 | `QI_GRA_89_02` | K0 | granzam, hommage | Les hommages aux morts de la mine à Granzam | — |
| 3 | `QI_GRA_89_03` | K0 | names, gravure | La gravure des noms — art du burin sur granit | — |
| 4 | `QI_GRA_89_04` | K1 | nom, resonance | Un nom gravé résonne — il l'a entendu prononcé par la pierre | `AFF>=60` |
| 5 | `QI_GRA_89_05` | K1 | lettre, chaleur | Les lettres de certains noms sont chaudes au toucher | `AFF>=65` |
| 6 | `QI_GRA_89_06` | K1 | voix, memorial | Il a touché le nom d'un mineur mort en −47 — il a entendu « je suis encore là » | — |
| 7 | `QI_GRA_89_07` | K2 | noms, plusieurs | Cinq noms sont chauds maintenant — tous des morts de la strate −47 | `AFF>=85` |
| 8 | `QI_GRA_89_08` | K2 | necromancien, consultation | Le Nécromancien `NPC_GRA_84` vient lire les noms chauds — « il cherche quelque chose » | `QUEST:QST_GRA_NOMS_RESONNANTS` |
| 9 | `QI_GRA_89_09` | K3 | memorial, seed, sauvegarde | Le mémorial est un point de sauvegarde de seed — chaque nom est lié à la seed d'âme du défunt stockée dans le Cœur de Granit `NPC_GRA_00`. Les noms chauds sont ceux dont la seed est encore active : les morts dont l'âme n'a pas été effacée du serveur. Ce sont des sauvegardes zombies | JAMAIS — déflection : *(il recule d'un pas)* « Les pierres sont froides. Les noms sont froids. Tout va bien. Laisse le mémorial tranquille. » |
| 10 | `QI_GRA_89_10` | KX | *(hors sujet)* | *(il passe un chiffon sur la stèle)* « La poussière de granit, ça s'essuie. Les noms, non. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!memorial <nom>` (vérifier si un nom figure sur la stèle).
- Porteur du fil **💎 La Gemme Qui Voit** (graves = points de sauvegarde de seed).
- Donneur de `QST_GRA_NOMS_RESONNANTS` : enquête sur les noms chauds du mémorial.

## 5. Intégration Bot

- **Accueil** (`!parler gardien_memorial`) : *Debout devant la stèle de granit, il passe un chiffon sur les noms gravés.* « Chaque nom est une histoire. Certaines ne sont pas finies. »
- `!memorial <nom>` actif dans la Grande Halle.
- `NPC_SECRET_PROBED` slot 9 : hook « mémorial = sauvegarde de seed d'âme » pour l'orchestrateur.
