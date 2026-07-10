# ⛏️ Vétéran des Convois — `NPC_GRA_95`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_95` |
| **Nom affiché** | Vétéran des Convois |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte des Convois |
| **Niveau / HP / MP** | 32 / 3 000 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Ancien chef de convoi qui escortait les caravanes de minerai entre Granzam et les cités voisines. Il a pris sa retraite après que son dernier convoi a été attaqué par des « créatures de pierre » qui sortaient de la montagne — des entités qu'il n'avait jamais vues en trente ans de route. Il est le seul survivant. Depuis, il ne quitte plus la Porte des Convois. Il sait que la montagne cache quelque chose sous les routes commerciales — des galeries qui s'ouvrent la nuit et avalent les caravanes. **Angle** : Ce que la montagne cache.
- **Traits** : marqué, cicatrices de pierre sur le visage, boite, voix cassée.
- **Voix** : Cassée, comme un roc qui se fend. Des pauses entre les mots. « J'ai vu la montagne s'ouvrir. J'ai vu des pierres marcher. J'ai vu des hommes disparaître dans le granit. Et toi, tu veux savoir ce qu'elle cache ? »
- **Relations** : `NPC_GRA_76` (Veilleur de Nuit — lui a rapporté des pas au rempart) ; `NPC_GRA_90` (Réfugié Salamander — a vu les mêmes créatures dans les Steppes) ; `NPC_GRA_50` (Éclaireur — a noté des mouvements dans les galeries nocturnes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_95_01` | K0 | convoi, securite | La sécurisation des convois — itinéraires, dangers | — |
| 2 | `QI_GRA_95_02` | K0 | routes, commerciales | Les routes commerciales de Granzam — destinations, durées | — |
| 3 | `QI_GRA_95_03` | K0 | veteran, experience | Son expérience de trente ans de convois — récits | — |
| 4 | `QI_GRA_95_04` | K1 | attaque, pierre | Son dernier convoi attaqué par des « créatures de pierre » — il est le seul survivant | `AFF>=60` |
| 5 | `QI_GRA_95_05` | K1 | galeries, nocturnes | Des galeries s'ouvrent la nuit sur les routes — « la montagne avale les caravanes » | `AFF>=65` |
| 6 | `QI_GRA_95_06` | K1 | eclaireur, confirmation | L'Éclaireur `NPC_GRA_50` a vu les mêmes galeries depuis les remparts | — |
| 7 | `QI_GRA_95_07` | K2 | creatures, description | Les créatures étaient faites de granit et de calcite — elles ne saignaient pas, elles s'effritaient | `AFF>=85` |
| 8 | `QI_GRA_95_08` | K2 | route, strate_47 | Les galeries nocturnes mènent toutes vers la strate −47 — « un niveau qui n'existe pas sur les cartes » | `QUEST:QST_GRA_CONVOIS_PERDUS` |
| 9 | `QI_GRA_95_09` | K3 | creatures, mainteneurs | Les « créatures de pierre » sont des golems de maintenance du Cardinal — des scripts de défense du seed qui protègent le Cœur de Granit `NPC_GRA_00` en éliminant les caravanes qui s'approchent trop près de strates sensibles. La montagne « cache » le serveur minier | JAMAIS — déflection : *(il crache par terre)* « C'étaient des monstres. Des vrais. La montagne est vivante et elle a faim. J'veux plus en parler. » |
| 10 | `QI_GRA_95_10` | KX | *(hors sujet)* | *(il regarde la route)* « La poussière, le granit, le soleil. C'est tout ce qu'il reste quand t'as perdu ton convoi. La poussière. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!conseil_convoi <destination>` (conseils de sécurité routière).
- Porteur du fil **🏔️ Le Poids de la Montagne** (golems de maintenance = défense du seed).
- Donneur de `QST_GRA_CONVOIS_PERDUS` : enquête sur les disparitions de caravanes.

## 5. Intégration Bot

- **Accueil** (`!parler veteran_convois`) : *Assis devant la Porte des Convois, une canne à la main, il regarde la route poussiéreuse.* « T'as une caravane ? T'as une escort ? T'as une prière ? Parce que la montagne, elle prend ce qu'elle veut. »
- `!conseil_convoi <destination>` actif à la Porte des Convois.
- `NPC_SECRET_PROBED` slot 9 : hook « golems de maintenance / défense du seed minéral » pour l'orchestrateur.
