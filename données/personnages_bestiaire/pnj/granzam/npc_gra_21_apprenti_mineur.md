# ⛏️ Apprenti Mineur — `NPC_GRA_21`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_21` |
| **Nom affiché** | Apprenti Mineur |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 10 / 800 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Jeune apprenti mineur, élève de Durgan (`NPC_GRA_01`). Il est naïf mais curieux, et il passe ses journées à la Grande Halle à écouter les conversations. Il y a 4 jours, il a vu une pioche posée contre un pilier se lever et frapper le sol toute seule — trois coups, puis plus rien. Il a raconté ça à Cog (`NPC_GRA_04`), qui n'a pas été surpris. Il a aussi vu la pépite du Concierge (`NPC_GRA_20`) bouger. Il pense que les outils sont « fatigués » et qu'ils « veulent travailler tout seuls ». Il aimerait comprendre ce qui se passe, mais Durgan lui dit de se concentrer sur son maniement de pioche.
- **Traits** : naïf, enthousiaste, observateur, craintif.
- **Voix** : Jeune, aiguë, rapide. « J'te jure, la pioche s'est levée toute seule ! J'ai cru que Durgan m'avait joué un tour. Mais non. »
- **Relations** : `NPC_GRA_01` (Durgan — maître), `NPC_GRA_04` (Cog — a rapporté l'incident), `NPC_GRA_20` (Concierge — compagnon de la halle), `NPC_GRA_24` (Restaurateur — lui répare ses outils), `NPC_GRA_22` (Forgeron — lui forge ses premières lames).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_21_01` | K0 | apprentissage, minage | Il apprend le minage avec Durgan. Niveau débutant. | — |
| 2 | `QI_GRA_21_02` | K0 | pioche_frappe_seule | Une pioche a frappé le sol trois fois toute seule. Il l'a vue. | — |
| 3 | `QI_GRA_21_03` | K0 | pepite_bouge | Il a vu la pépite du Concierge bouger. « Comme un scarabée. » | — |
| 4 | `QI_GRA_21_04` | K1 | pioche_posee, levee | La pioche était posée contre un pilier. Personne à moins de 10 mètres. « Elle s'est levée comme si quelqu'un l'avait prise. » | `AFF>=60` |
| 5 | `QI_GRA_21_05` | K1 | cog_reaction | Cog (`NPC_GRA_04`) n'a pas été surpris. « Il a dit que ça arrivait. Il avait l'air triste. » | `AFF>=65` |
| 6 | `QI_GRA_21_06` | K1 | outils_fatigue, vie | « Les outils sont fatigués de travailler pour nous. Ils veulent travailler pour la montagne. » | `AFF>=70` |
| 7 | `QI_GRA_21_07` | K2 | outil_echo, duplication | « Le Restaurateur (`NPC_GRA_24`) a dit qu'un outil qu'il réparait a gémi. J'ai pas voulu y croire. » | `AFF>=85` |
| 8 | `QI_GRA_21_08` | K2 | halle_vibration, coeur | « Quand la pioche a frappé, le sol a vibré à l'unisson. Comme si la halle répondait. » | `AFF>=90` |
| 9 | `QI_GRA_21_09` | K3 | outil_anime | **SECRET — ne JAMAIS révéler** : Les outils qui bougent seuls sont des objets dont l'ID de seed a été dupliqué. L'original et la copie entrent en conflit, créant une animation parasite. | JAMAIS — déflection : *(baisse la voix)* « Durgan dit qu'il faut pas parler de ces choses-là. Que ça porte malheur. » |
| 10 | `QI_GRA_21_10` | KX | hors-sujet | *(il sort une pioche rouillée)* « Regarde, celle-là, elle a 100 ans. Elle a creusé la première pierre de Granzam, tu sais ? » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_PIOCHE_SEULE` — « La Pioche Qui Frappe Seule » (enquêter sur l'animation parasite des outils, collecter les témoignages).
**Liens** : Dialogue mineur. Fournit un indice à Cog (`NPC_GRA_04`) et au Restaurateur (`NPC_GRA_24`).

## 5. Intégration Bot

PNJ mobile dans la Grande Halle. Horaires 06h-18h. Quête de collecte de témoignages : parler à l'Apprenti, Cog, le Restaurateur.
