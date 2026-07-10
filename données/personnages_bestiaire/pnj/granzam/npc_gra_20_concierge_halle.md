# ⛏️ Concierge Halle — `NPC_GRA_20`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_20` |
| **Nom affiché** | Concierge Halle |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 15 / 1200 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Concierge de la Grande Halle des Minerais, le cœur commercial de Granzam. Il balaie, nettoie et entretient l'espace. Depuis quelques jours, il trouve une pépite d'or qui roule toute seule au milieu de la halle — chaque matin, elle est au même endroit, comme si quelqu'un la posait. Mais il n'y a personne. La pépite est chaude au toucher. Il l'a mise dans un tiroir fermé à clé ; le lendemain, elle était de nouveau au milieu de la halle. Il croit à une farce, mais l'Apprenti (`NPC_GRA_21`) a vu la pépite bouger « comme un insecte ». Lié au fil ⛏️ Le Filonant.
- **Traits** : simple, travailleur, perplexe, amusé.
- **Voix** : Enjouée, un peu essoufflée. « J'ai mis la pépite sous clé. Et le lendemain, elle était là, au milieu, qui brillait au soleil. Comme si elle m'attendait. »
- **Relations** : `NPC_GRA_21` (Apprenti — témoin), `NPC_GRA_01` (Durgan — client de la halle), `NPC_GRA_04` (Cog — lui a acheté un balai), `NPC_GRA_22` (Forgeron — livre ses commandes à la halle).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_20_01` | K0 | grande_halle, entretien | La Grande Halle est le marché central de Granzam. 50 étals. | — |
| 2 | `QI_GRA_20_02` | K0 | pepite_roulante, or | Une pépite d'or apparaît chaque matin au milieu de la halle. | — |
| 3 | `QI_GRA_20_03` | K0 | pepite_chaude, toucher | La pépite est anormalement chaude. « Brûlante, même. » | — |
| 4 | `QI_GRA_20_04` | K1 | tiroir_ferme, reapparition | Il l'a enfermée dans un tiroir fermé à clé. Le lendemain, elle était dehors. | `AFF>=60` |
| 5 | `QI_GRA_20_05` | K1 | apprenti_temoin | L'Apprenti (`NPC_GRA_21`) a vu la pépite bouger « comme une araignée ». | `AFF>=65` |
| 6 | `QI_GRA_20_06` | K1 | pepite_veine, filon | « J'ai montré la pépite à Durgan (`NPC_GRA_01`). Il a dit qu'elle venait du filon chantant. » | `AFF>=70` |
| 7 | `QI_GRA_20_07` | K2 | pepite_duplication, seed | « J'ai gardé la pépite une journée. Le soir, il y en avait deux. » | `AFF>=85` |
| 8 | `QI_GRA_20_08` | K2 | grande_halle_pouls | « Le sol de la halle est chaud à l'endroit où la pépite apparaît. Comme si la pierre avait de la fièvre. » | `AFF>=90` |
| 9 | `QI_GRA_20_09` | K3 | pepite_spawn | **SECRET — ne JAMAIS révéler** : La pépite est un point de spawn de seed mal configuré. Le serveur tente de générer une ressource au même endroit chaque cycle. | JAMAIS — déflection : *(rit)* « C'est une pépite chanceuse. Je vais la garder. » |
| 10 | `QI_GRA_20_10` | KX | hors-sujet | *(brandit son balai)* « Tu veux que je te montre mon balai magique ? Il ramasse tout seul — non je rigole. Mais ma pépite, elle, je rigole pas. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_PEPITE` — « La Pépite Vagabonde » (enquêter sur la pépite, découvrir le spawn de seed défectueux).
**Liens** : Secondaire. Fournit un indice sur la duplication des ressources aux Carrières.

## 5. Intégration Bot

PNJ mobile dans la Grande Halle. Horaires 05h-21h. État `state:pepite_compteur` (nombre de fois que la pépite est apparue).
