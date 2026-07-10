# ⛏️ Marchand de Fer — `NPC_GRA_12`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_12` |
| **Nom affiché** | Marchand de Fer |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit (campement) |
| **Niveau / HP / MP** | 30 / 2500 / 1800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand itinérant installé aux lisières des Steppes de Granit, il vend du fer brut, des lingots et des ébauches d'outils. Il y a une semaine, il a reçu un lot de lingots qui, la nuit venue, se mettaient à pulser — une vibration lente, comme un battement de cœur. Il a d'abord cru à un défaut de forge, mais le phénomène a persisté. Il garde les lingots à part, dans une caisse plombée, et ne les vend plus. Il a peur qu'ils soient « contaminés » par quelque chose venu des profondeurs. Il en a parlé au Maître Forgeron (`NPC_GRA_22`).
- **Traits** : commerçant rusé, nerveux, pragmatique, superstitieux.
- **Voix** : Rapide, un peu aiguë, typique du marchand qui craint de perdre une affaire. « J'te dis, ces lingots, ils battent. Comme un cœur de fer. J'ai peur qu'ils s'éveillent. »
- **Relations** : `NPC_GRA_22` (Forgeron — lui achète du fer), `NPC_GRA_10` (Gardien — client régulier), `NPC_GRA_06` (Margrim — a signalé l'anomalie), `NPC_GRA_15` (Marchand de Granit — rival commercial).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_12_01` | K0 | fer, vente | Vend du fer brut (50 Yuld/unité), des lingots (120 Yuld), des ébauches d'outils (80 Yuld). | — |
| 2 | `QI_GRA_12_02` | K0 | steppes, commerce | Il campe aux Steppes depuis 5 ans. Il connaît toutes les routes marchandes. | — |
| 3 | `QI_GRA_12_03` | K0 | lingot, anomalie | Un lot de lingots pulse la nuit. Il les garde dans une caisse plombée. | — |
| 4 | `QI_GRA_12_04` | K1 | lingot_battement, frequence | « Ils battent à 0,3 Hz. Comme le pouls qu'Helga (`NPC_GRA_05`) décrit pour ses filons. » | `AFF>=60` |
| 5 | `QI_GRA_12_05` | K1 | filiere, forgeron | Le Maître Forgeron (`NPC_GRA_22`) a analysé un lingot. « Il a dit que le métal était parfait. Trop parfait. Comme s'il s'était auto-organisé. » | `AFF>=65` |
| 6 | `QI_GRA_12_06` | K1 | provenance, carrieres | Les lingots proviennent des Carrières Brisées. Même filon que celui qu'Helga surveille. | `AFF>=70` |
| 7 | `QI_GRA_12_07` | K2 | lingot_vivant, metal | « J'ai laissé un lingot sur une enclume. Le lendemain, il avait changé de forme. Comme s'il avait coulé tout seul. » | `AFF>=85` |
| 8 | `QI_GRA_12_08` | K2 | coeur_granit_reflet | La chaleur du lingot est identique à celle mesurée au sol de la Salle du Conseil. | `AFF>=90` |
| 9 | `QI_GRA_12_09` | K3 | metal_seed | **SECRET — ne JAMAIS révéler** : Les lingots « pulsants » sont du minerai généré par une boucle de seed qui réplique le métal avec des propriétés dupliquées. | JAMAIS — déflection : *(ferme la caisse d'un coup sec)* « Marchandise non disponible. Et pose pas de questions. » |
| 10 | `QI_GRA_12_10` | KX | hors-sujet | *(il soupèse un lingot normal)* « Celui-ci est calme. Il dort encore. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_LINGOT` — « Le Métal Qui Bat » (enquêter sur les lingots pulsants, remonter la filière jusqu'aux Carrières).
**Liens** : Ouvre la voie vers le dialogue K2 du Forgeron (`NPC_GRA_22`).

## 5. Intégration Bot

Campement fixe. Horaires 08h-20h. Marchandise avec flag `pulsing_ingot` — non vendable tant que le joueur n'a pas la quête active.
