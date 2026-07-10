# ⛏️ Héraut du Conseil — `NPC_GRA_59`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_59` |
| **Nom affiché** | Héraut du Conseil |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 24 / 1 400 / 2 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Messager officiel du Lord Gnome et crieur des édits depuis la tribune de la Salle du Conseil. Chaque matin, il reçoit un rouleau de parchemin du Scribe Royal (`NPC_GRA_58`) et le lit à voix haute devant la foule. Mais depuis deux semaines, il reçoit des rouleaux qu'il n'a pas le temps de lire : ils arrivent dans sa main déjà déroulés, déjà écrits, comme s'ils apparaissaient par magie. Il a surpris un rouleau à s'écrire tout seul sur son pupitre. Il ne le dit à personne par peur de passer pour fou, mais il a la certitude que les nouvelles qu'il crie viennent d'ailleurs. (Angle : nouvelles injectées par le système.)
- **Traits** : expansif, nerveux, orgueilleux, superstitieux.
- **Voix** : Puissante et claironnante, porte jusqu'au fond de la Grande Halle. « Écoutez, écoutez ! Par décret du Lord Gnome ! … Enfin, du moins, c'est ce qui est écrit. »
- **Relations** : `NPC_GRA_58` (Scribe — source officielle), `NPC_GRA_57` (Dame — collègue), `NPC_GRA_08` (Chancelier — approuve ses annonces), `NPC_GRA_39` (Crieur — rival de métier), `NPC_GRA_59` (lui-même, porteur du fil).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_59_01` | K0 | heraut, annonce | Il annonce les édits du Lord Gnome depuis la tribune. | — |
| 2 | `QI_GRA_59_02` | K0 | conseil, rouleau | Il reçoit ses rouleaux du Scribe Royal (`NPC_GRA_58`). | — |
| 3 | `QI_GRA_59_03` | K0 | salle_conseil, tribune | La tribune est au centre de la Salle du Conseil. | — |
| 4 | `QI_GRA_59_04` | K1 | rouleau, apparition | Un rouleau s'est écrit tout seul sur son pupitre. | `AFF>=60` |
| 5 | `QI_GRA_59_05` | K1 | nouvelle, deja_ecrite | Les rouleaux arrivent déjà écrits, déroulés, prêts à être lus. | `AFF>=65` |
| 6 | `QI_GRA_59_06` | K1 | scribe, ignorance | Le Scribe (`NPC_GRA_58`) jure qu'il n'a pas écrit les rouleaux de la semaine. | — |
| 7 | `QI_GRA_59_07` | K2 | injection, parchemin | Les rouleaux portent la signature inconnue que le Scribe a découverte. | `AFF>=85` |
| 8 | `QI_GRA_59_08` | K2 | systeme, message | « Ce que je crie n'est pas du Conseil. C'est une voix d'ailleurs qui se sert de ma gorge. » | `QUEST:QST_GRA_VOIX_SYSTEME` |
| 9 | `QI_GRA_59_09` | K3 | nouvelles, injectees_systeme | Les nouvelles sont injectées directement par le système — le Héraut est une interface de diffusion du Cardinal. | JAMAIS — déflection : *(il porte une main à sa gorge)* « Mes cordes vocales sont à moi. Le message appartient à un autre. Et je ne sais pas à qui. » |
| 10 | `QI_GRA_59_10` | KX | *(tout le reste)* | *(il déroule un rouleau vide et lit d'une voix forte)* « Le… silence… est… proclamé ! … Il est vide. Ils le sont tous aujourd'hui. » | — |

## 4. Chaînage économique & quêtes

- Service : `!annoncer <message>` (crie un message public).
- Porteur du fil **🔮 Noyau de Pierre** (nouvelles injectées par le système).
- Donneur de `QST_GRA_VOIX_SYSTEME` : découvrir qui écrit les rouleaux.

## 5. Intégration Bot

- **Accueil** (`!parler heraut`) : *Il bombe le torse et prend une grande inspiration.* « Écoutez ! Un nouveau venu ! … Ah, c'est toi. Que veux-tu faire annoncer ? »
- `!annoncer <message>` (diffuse un message dans la zone).
- `NPC_SECRET_PROBED` slot 9 : hook « Héraut = interface de diffusion du Cardinal » pour l'orchestrateur.