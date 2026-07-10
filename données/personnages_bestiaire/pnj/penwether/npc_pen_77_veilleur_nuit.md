# 🕯️ Veilleur de Nuit — `NPC_PEN_77`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_77` |
| **Nom affiché** | Veilleur de Nuit |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (ronde de nuit des remparts) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Remparts |
| **Niveau / HP / MP** | 50 / 7 800 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Veilleur de Nuit patrouille les remparts de Penwether entre le coucher et l'aube. Il connaît chaque pierre, chaque créneau, chaque endroit où l'ombre est plus épaisse qu'elle ne devrait. Depuis des cycles, il entend des pas dans les ruines en contrebas — des pas qui ne sont pas des pas de Spriggans. Des pas d'« anciens ». Il n'est jamais descendu voir. On ne descend pas voir. Les anciens ne sont pas des Spriggans et ils ne sont pas morts : ils sont « avant » — avant les masques, avant la ville, avant le monde. Angle : pas d'anciens dans les ruines — il les entend chaque nuit.
- **Traits** : silencieux, nerveux, sursaute au moindre bruit.
- **Voix** : basse, tendue (« T'as entendu ? …Non. T'entends pas. T'es pas assez vieux. Les anciens, ils marchent dans les ruines. Ils marchent et ils cherchent… quelque chose. »).
- **Relations** : Veilleur Jour `NPC_PEN_78` (relève le matin — ne lui dit jamais ce qu'il a entendu) ; Gardien Porte `NPC_PEN_75` (se croise à la relève) ; Fou du Conseil `NPC_PEN_68` (un des rares à qui il a parlé des bruits — le Fou les appelle « les pas du compilateur »).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_77_01` | K0 | ronde, nuit | Patrouille les remparts de la tombée à l'aube | — |
| 2 | `QI_PEN_77_02` | K0 | remparts, etat | Connaît l'état des remparts — fissures, pierres descellées | — |
| 3 | `QI_PEN_77_03` | K0 | ruines, visibilité | Depuis les remparts, on voit les ruines — certaines bougent la nuit | — |
| 4 | `QI_PEN_77_04` | K1 | bruits, ruines | Entend des pas dans les ruines — pas de Spriggan | — |
| 5 | `QI_PEN_77_05` | K1 | anciens, identification | Les « anciens » ne sont pas des Spriggans — ils étaient là avant | `AFF>=60` |
| 6 | `QI_PEN_77_06` | K1 | fou, conseil | Le Fou `NPC_PEN_68` connaît les bruits — les appelle « pas du compilateur » | `AFF>=65` |
| 7 | `QI_PEN_77_07` | K2 | traces, pas | Les traces des anciens disparaissent au lever du jour — comme si la nuit les effaçait | `AFF>=80` |
| 8 | `QI_PEN_77_08` | K2 | ruines, resonance | Les ruines résonnent sous les pas des anciens — un son qui n'est pas dans l'air mais dans la tête | `AFF>=85` |
| 9 | `QI_PEN_77_09` | K3 | anciens, compilation | Les « anciens » ne sont pas des entités — ce sont des boucles de compilation rémanentes. Les pas qu'il entend sont les itérations d'un programme qui n'a jamais terminé son exécution. Les ruines sont son code source. Chaque nuit, le Cardinal rejoue la compilation dans les ruines, et les « pas » sont les threads qui n'ont pas trouvé leur sortie | JAMAIS — déflection : *(il saisit sa lance, regard fixe)* « Je n'ai rien entendu. Rien. Les ruines sont silencieuses. Elles l'ont toujours été. » *(il serre la lance jusqu'à ce que ses jointures blanchissent)* |
| 10 | `QI_PEN_77_10` | KX | *(hors sujet)* | « La nuit porte conseil. Mais pas ici. Ici, la nuit porte des pas. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!pen_remparts_rapport` — rapport de ronde nocturne. Déclencheur de quête `QST_PEN_ANCIENS_01` (enquêter sur les pas dans les ruines).
- **Fils rouges** : rouage de **📜 Ce Que Cachent les Ruines** (les ruines préexistent au monde) et de **🔮 Fil méta — La Ville Fantôme** (les pas sont les échos de la compilation).
- Relais entre le Fou du Conseil `NPC_PEN_68` et la réalité des ruines.

## 5. Intégration Bot

- **Accueil** (`!parler veilleur nuit`) : *« T'as pas entendu ? …Non. Bien. Continue comme ça. Tu dormiras mieux. »*
- `!pen_remparts_ecoute` — écouter les bruits des ruines (déclenche quête).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « pas des anciens = boucles de compilation du Cardinal » réservé à l'orchestrateur.
