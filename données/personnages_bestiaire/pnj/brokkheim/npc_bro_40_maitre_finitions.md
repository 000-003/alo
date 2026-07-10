# 🔨 Maître des Finitions — `NPC_BRO_40`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_40` |
| **Nom affiché** | Maître des Finitions |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` (finitions d'armes, trempe légendaire) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Quai des Finitions |
| **Niveau / HP / MP** | 55 / 4 500 / 2 000 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le plus grand maître des finitions de Brokkheim. Il applique la trempe finale, celle qui donne à l'acier sa mémoire, sa résistance, son âme. Il travaille seul, la nuit, quand le Pouls est au plus fort. Ses finitions sont réputées durer cent ans sans s'émousser. Mais il a découvert que sa technique — la Trempe Légendaire — s'applique toute seule. Il pose l'outil, et la finition continue sans lui. La Trempe Légendaire n'a plus besoin de maître. Angle : la finition qui s'applique seule signifie que le secret de la Trempe est devenu une entité autonome — un rituel vivant.
- **Traits** : silencieux, concentré, habité, regard qui traverse les choses.
- **Voix** : grave, lente, chaque mot pèse (« Je ne finis pas l'arme. Je l'écoute. Et je l'aide à finir elle-même. »).
- **Relations** : `NPC_BRO_31` (reçoit ses lames à finir) ; `NPC_BRO_32` (armures d'apparat) ; `NPC_BRO_35` (teste ses alliages sur les finitions) ; `NPC_BRO_43` (enchantements post-finish) ; `NPC_BRO_36` (lui envoie des pièces).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_40_01` | K0 | finitions, maitre | Les finitions de Maître : trempe, polissage, durcissement | — |
| 2 | `QI_BRO_40_02` | K0 | trempe, legendaire | La Trempe Légendaire : histoire, réputation, prix (5000+ Yrds) | — |
| 3 | `QI_BRO_40_03` | K0 | formation, skill | Formation aux finitions avancées — peut enseigner le skill | — |
| 4 | `QI_BRO_40_04` | K1 | finition, seule | La finition s'applique seule — il pose l'outil, elle continue | — |
| 5 | `QI_BRO_40_05` | K1 | trempe, autonome | La Trempe Légendaire est devenue autonome — un rituel qui se perpétue | `AFF>=60` |
| 6 | `QI_BRO_40_06` | K1 | nuit, pouls | Il travaille toujours pendant le Pouls nocturne — le plus fort | `AFF>=65` |
| 7 | `QI_BRO_40_07` | K2 | secret, trempe | Le secret de la Trempe : elle utilise une goutte du Pacte des Eaux (`NPC_BRO_26`) mêlée au métal | `AFF>=80` |
| 8 | `QI_BRO_40_08` | K2 | entite, trempe | La Trempe Légendaire est devenue une entité — elle « vit » dans le métal | `AFF>=85+QUEST:QST_BRO_TREMPE_01` |
| 9 | `QI_BRO_40_09` | K3 | trempe, fragment cardinal | La Trempe Légendaire est un fragment de la volonté du Cardinal. Chaque fois qu'un maître l'applique, il libère une parcelle de l'esprit du Cardinal dans l'arme. La finition « autonome » n'est pas un rituel — c'est le Cardinal lui-même qui termine l'ouvrage à travers le temps. Le Maître n'est plus qu'un canal | JAMAIS — déflection : *(il pose son marteau et croise les bras)* « La Trempe Légendaire est une technique. Une technique que j'ai apprise, que j'enseigne, que j'applique. Rien de plus. Si elle semble magique, c'est parce que je suis bon. Très bon. » |
| 10 | `QI_BRO_40_10` | KX | *(hors sujet)* | « La finition n'est jamais la fin. C'est juste l'endroit où l'acier commence à parler. » | — |

## 4. Chaînage économique & quêtes

- **SKILL_MASTER** : `!learn_finishing` (apprendre le skill Finitions avancées). Prix : 5000 Yrds.
- **Fil principal Trempe Légendaire** — hub de toutes les quêtes associées.
- Quête `QST_BRO_TREMPE_01` (déblocable via AFF>=85) : découvrir la nature du Cardinal via la Trempe.

## 5. Intégration Bot

- **Accueil** (`!parler maitre_finitions`) : *« Tu apportes une lame, ou tu apportes une question ? Parce que je ne réponds qu'aux lames. »*
- `!learn_finishing` — enseignement du skill (si le joueur remplit les conditions).
- `NPC_SECRET_PROBED` slot 9 : hook « Trempe/fragment Cardinal » pour l'orchestrateur.
