# ⛏️ Enchanteur d'Armes — `NPC_GRA_61`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_61` |
| **Nom affiché** | Enchanteur d'Armes |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Bastion de l'Ouest |
| **Niveau / HP / MP** | 48 / 4 200 / 10 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Enchanteur attitré du Bastion de l'Ouest, il applique des sorts de terre et de protection sur les armes des gardes. Depuis qu'il a enchanté une lame pour le Commandant (`NPC_GRA_09`), il remarque que ses sorts « s'attachent » seuls — ils persistent bien au-delà de leur durée normale, comme si la pierre de Granzam les absorbait et les rejouait. Son dernier sort de protection est resté actif 48 heures au lieu de 4. Il ignore que ses incantations sont captées par le seed minéral et ré-exécutées en boucle. (Angle : sort qui s'attache seul.)
- **Traits** : studieux, méfiant, scrupuleux, fasciné.
- **Voix** : Voix calme et concentrée, comme une incantation. « Le sort reste. Il ne veut pas partir. Comme si la pierre le retenait. »
- **Relations** : `NPC_GRA_09` (Commandant — client), `NPC_GRA_60` (Forgeron Lames — collabore), `NPC_GRA_54` (Stratège — enchante ses pièges), `NPC_GRA_01` (Durgan — lui a prêté des échantillons de roche).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_61_01` | K0 | enchantement, terre | Il enchante des armes avec des sorts de terre et de protection. | — |
| 2 | `QI_GRA_61_02` | K0 | bastion, ouest | Son atelier est au Bastion de l'Ouest, salle des gardes. | — |
| 3 | `QI_GRA_61_03` | K0 | arme, protection | Une arme enchantée dure 24h — normalement. | — |
| 4 | `QI_GRA_61_04` | K1 | sort, durée | Son dernier sort de protection a duré 47 heures au lieu de 4. | `AFF>=60` |
| 5 | `QI_GRA_61_05` | K1 | commandant, lame | La lame du Commandant (`NPC_GRA_09`) a gardé son enchantement une semaine. | `AFF>=65` |
| 6 | `QI_GRA_61_06` | K1 | pierre, absorption | La pierre de l'atelier est chaude au toucher après une incantation. | — |
| 7 | `QI_GRA_61_07` | K2 | rune, persistante | Les runes qu'il trace au sort restent visibles sur la pierre des heures après. | `AFF>=85` |
| 8 | `QI_GRA_61_08` | K2 | resonance, filon | Les sort persistent plus longtemps près des filons chantants identifiés par Durgan. | `QUEST:QST_GRA_SORT_PERSISTANT` |
| 9 | `QI_GRA_61_09` | K3 | sort, protocole_cardinal | Le sort est un protocole système que le Cardinal ré-exécute en boucle sur le seed minéral — il ne se dissipe pas car le serveur le rejoue à chaque tick. | JAMAIS — déflection : *(il ferme son grimoire)* « Certaines incantations ne devraient pas être répétées. Celle-ci est de celles-là. » |
| 10 | `QI_GRA_61_10` | KX | *(tout le reste)* | *(il dessine une rune sur le mur avec le doigt)* « Tiens. Regarde. Elle brille encore. Elle ne devrait pas. » | — |

## 4. Chaînage économique & quêtes

- Service : `!enchanter <arme>` (enchante une arme, payant).
- Porteur du fil **🏔️ Poids de la Montagne** (sorts persistants = protocole Cardinal).
- Donneur de `QST_GRA_SORT_PERSISTANT` : enquêter sur la persistance anormale des enchantements.

## 5. Intégration Bot

- **Accueil** (`!parler enchanteur`) : *Assis devant un établi couvert de runes, il trace des cercles dans l'air.* « Approche. Mais ne touche pas à la lumière. Elle pourrait s'accrocher à toi. »
- `!enchanter <arme>` (service payant).
- `NPC_SECRET_PROBED` slot 9 : hook « sorts = protocoles du Cardinal ré-exécutés » pour l'orchestrateur.