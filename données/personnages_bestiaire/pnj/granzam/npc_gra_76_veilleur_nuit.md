# ⛏️ Veilleur de Nuit — `NPC_GRA_76`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_76` |
| **Nom affiché** | Veilleur de Nuit |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `GUARD` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte de Granzam |
| **Niveau / HP / MP** | 32 / 3 200 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien de la Porte de Granzam pendant la nuit. Il verrouille l'entrée principale à minuit et n'ouvre qu'aux voyageurs dûment enregistrés. Depuis deux semaines, il entend des pas qui grimpent seuls sur le rempart ouest — des pas qui montent mais ne redescendent jamais. Il a inspecté la zone trois fois : aucune trace, aucune embrasure forcée. Il en a parlé au Maréchal des Sabots (`NPC_GRA_75`) et au Veilleur de Jour (`NPC_GRA_77`), mais aucun des deux n'a rien remarqué. **Angle** : Des pas qui grimpent seuls.
- **Traits** : méfiant, silencieux, insomniaque, oreille fine.
- **Voix** : Voix rauque, chuchotée, comme s'il parlait à travers une porte close. « La nuit, la pierre parle. Les pas, c'est son langage. »
- **Relations** : `NPC_GRA_75` (Maréchal des Sabots — collègue de la Porte) ; `NPC_GRA_77` (Veilleur de Jour — relève) ; `NPC_GRA_50` (Éclaireur des Remparts — a comparé les observations nocturnes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_76_01` | K0 | porte, horaires | La Porte ferme à minuit, rouvre à l'aube — aucun passe-droit | — |
| 2 | `QI_GRA_76_02` | K0 | granzam, securite | Les procédures de sécurité nocturnes de Granzam | — |
| 3 | `QI_GRA_76_03` | K0 | rempart, ouest | Description du rempart ouest — le plus sombre, aucune torche | — |
| 4 | `QI_GRA_76_04` | K1 | pas, seuls | Des pas montent le rempart ouest toutes les nuits vers 2h — jamais de descente | `AFF>=60` |
| 5 | `QI_GRA_76_05` | K1 | inspection, traces | Il a inspecté trois fois — zéro trace, zéro poussière déplacée | `AFF>=65` |
| 6 | `QI_GRA_76_06` | K1 | marechal, fer | Le Maréchal `NPC_GRA_75` lui a dit que ses fers « sonnent creux » la nuit | — |
| 7 | `QI_GRA_76_07` | K2 | pas, rythme | Les pas ont un rythme régulier — comme une patrouille — mais il n'y a personne | `AFF>=85` |
| 8 | `QI_GRA_76_08` | K2 | eclaireur, confirmation | L'Éclaireur `NPC_GRA_50` a aussi vu des formes sur le rempart depuis les steppes — qui disparaissent en touchant le mur | `QUEST:QST_GRA_PAS_SEULS` |
| 9 | `QI_GRA_76_09` | K3 | seed, echo, marcheur | Les pas sont un écho de seed — le Cardinal rejoue des séquences de pathfinding de PNJ supprimés, des « fantômes de mobs » qui n'existent plus dans la base de données mais dont les scripts de déplacement tournent encore en boucle sur le serveur | JAMAIS — déflection : *(il serre sa lance)* « J'ai rien entendu. La nuit, on entend toujours des trucs. Faut pas leur prêter attention. » |
| 10 | `QI_GRA_76_10` | KX | *(hors sujet)* | *(il regarde l'horizon sombre)* « La nuit porte conseil, dit-on. Moi j'dis qu'elle porte des pas. » | — |

## 4. Chaînage économique & quêtes

- **Sécurité** : autorisation d'entrée nocturne (moyennant frais de « dérogation »).
- Porteur du fil **⛏️ Le Filonant** (échos de seed, fantômes de scripts).
- Donneur de `QST_GRA_PAS_SEULS` : enquête sur les pas sans corps.

## 5. Intégration Bot

- **Accueil** (`!parler veilleur_nuit`) : *Adossé à la herse, les yeux fixés sur l'obscurité.* « La Porte est fermée. Reviens à l'aube… à moins que tu aies une bonne raison d'entrer. »
- `!derogation_nocturne` (frais d'entrée nocturne).
- `NPC_SECRET_PROBED` slot 9 : hook « fantômes de script / pathfinding résiduel » pour l'orchestrateur.
