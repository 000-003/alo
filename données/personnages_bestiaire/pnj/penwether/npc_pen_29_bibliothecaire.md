# 🕯️ Bibliothécaire — `NPC_PEN_29`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_29` |
| **Nom affiché** | Bibliothécaire |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (Archives de la Bibliothèque Enterrée) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Bibliothèque Enterrée |
| **Niveau / HP / MP** | 20 / 800 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardienne des Archives de la Bibliothèque Enterrée — une salle immense sous Penwether où les livres s'écrivent seuls. La nuit, elle entend les plumes gratter le parchemin. Le matin, de nouveaux volumes sont apparus, remplis d'une écriture serrée qu'elle ne reconnaît pas. Les livres racontent l'histoire de Penwether… mais certains décrivent des événements qui ne se sont pas encore produits. Angle : les livres s'écrivent seuls = archives du Cardinal.
- **Traits** : érudite, insomniaque, parle aux livres comme à des personnes.
- **Voix** : posée, avec une fatigue qui perce. « Il y a un nouveau livre ce matin. Il raconte la mort d'un homme qui n'est pas encore né. Je ne sais pas quoi en faire. »
- **Relations** : `NPC_PEN_48` (soupçonnée de cacher des livres volés dans ses archives) ; `NPC_PEN_49` (lui demande régulièrement des cartes des ruines) ; `NPC_PEN_46` (vient vérifier si les livres sont des illusions).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_29_01` | K0 | bibliotheque, archive | Bibliothèque Enterrée — archives souterraines de Penwether | — |
| 2 | `QI_PEN_29_02` | K0 | livres, lecture | Consultation des livres : 5 Yrds par volume | — |
| 3 | `QI_PEN_29_03` | K0 | acces, horaires | Accès restreint — elle ouvre à l'aube, ferme au coucher | — |
| 4 | `QI_PEN_29_04` | K1 | livres, ecriture | Les livres s'écrivent seuls la nuit — plumes sans main | — |
| 5 | `QI_PEN_29_05` | K1 | contenu, futur | Certains livres décrivent des événements futurs | `AFF>=60` |
| 6 | `QI_PEN_29_06` | K1 | ecriture, style | L'écriture est la même dans tous les livres — une seule main invisible | `AFF>=65` |
| 7 | `QI_PEN_29_07` | K2 | livres, cardinal | Les livres sont écrits par le Cardinal — ce sont ses archives en temps réel | `AFF>=80` |
| 8 | `QI_PEN_29_08` | K2 | salle, verrouillee | Une salle verrouillée au fond — les livres y sont trop récents, décrivent la semaine prochaine | `AFF>=85+QUEST:QST_PEN_ARCHIVES_01` |
| 9 | `QI_PEN_29_09` | K3 | livres, commandes | Les livres ne sont pas des prophéties — ce sont les logs du serveur. Chaque livre est un enregistrement des opérations du Cardinal. S'ils s'écrivent seuls, c'est que le Cardinal enregistre tout. S'ils décrivent le futur, c'est que le futur est déjà écrit dans le code. La Bibliothèque Enterrée est la console de logging du serveur | JAMAIS — déflection : *(elle ferme un livre violemment)* « Assez. Un livre est un livre. Il raconte des histoires. Pas de code. Pas de serveur. Pas de Cardinal. » *(elle pose la main sur la couverture)* « S'il te plaît. Laisse-moi mes livres. » |
| 10 | `QI_PEN_29_10` | KX | *(hors sujet)* | « Les mots ne mentent jamais. Ce sont les lecteurs qui se trompent. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!consult_book_pen` (consultation d'archive), `!archive_search` (recherche dans les archives).
- Fil **📜 Ruines / Ce Que Cachent les Ruines** avec `NPC_PEN_45`, `NPC_PEN_49`.
- Porteuse du fil **📜 Ce Que Cachent les Ruines** : les livres qui s'écrivent seuls = archives du Cardinal.
- Quête `QST_PEN_ARCHIVES_01` : ouvrir la salle verrouillée des livres futurs.

## 5. Intégration Bot

- **Accueil** (`!parler bibliothecaire`) : *(Elle est penchée sur un livre ouvert dont les pages tournent seules)* « Chut. Le livre écrit. Il raconte quelque chose sur toi. Tu veux entendre ? » |
- `!consult_book_pen` — consultation, `!archive_search` — recherche.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « livres = logs serveur du Cardinal » réservé à l'orchestrateur.
