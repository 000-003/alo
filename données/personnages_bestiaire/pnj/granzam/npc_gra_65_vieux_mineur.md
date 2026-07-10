# ⛏️ Vieux Mineur — `NPC_GRA_65`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_65` |
| **Nom affiché** | Vieux Mineur |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte des Convois |
| **Niveau / HP / MP** | 82 — retraité — 2 800 / 1 400 |
| **`qi_budget` / `is_essential` | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Doyen des mineurs de Granzam, retraité depuis vingt ans. Il passe ses journées assis à la Porte des Convois à regarder les chariots. Il y a dix ans, il a trouvé une carte dans un filon de charbon épuisé — une carte qui menait au Noyau de Pierre (`NPC_GRA_00`). Il l'a suivie, il est arrivé devant un mur de granit parfait qui n'était pas de la pierre naturelle. Il a eu peur, est remonté, et a brûlé la carte. Mais il a tout retenu — chaque détail, chaque coude du tunnel. Il n'en a parlé à personne, même pas au Contremaître Durgan (`NPC_GRA_01`), jusqu'à ce qu'il rencontre l'Archiviste Interdit (`NPC_GRA_63`) qui cherchait les mêmes plans. (Angle : une carte qu'il a brûlée.)
- **Traits** : taciturne, sage, secret, nostalgique.
- **Voix** : Cheveux rares, une pipe en pierre éteinte aux lèvres. « J'ai brûlé la carte. Mais le chemin est dans ma tête. Il y reste. Jusqu'à la tombe. »
- **Relations** : `NPC_GRA_63` (Archiviste — confident), `NPC_GRA_01` (Durgan — ancien élève), `NPC_GRA_21` (Apprenti Mineur — le vénère), `NPC_GRA_55` (Vétéran — compagnon de banc), `NPC_GRA_99` (Mémoire — se souvient de la même chose).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_65_01` | K0 | vieux_mineur, retraite | Il est mineur retraité. Assis à la Porte des Convois. | — |
| 3 | `QI_GRA_65_02` | K0 | porte_convois, banc | Son banc est le troisième en partant de l'est. Il ne le quitte jamais longtemps. | — |
| 2 | `QI_GRA_65_03` | K0 | durgan, apprentissage | Il a formé Durgan au minage. « Durgan cognait fort, mais cognait juste. » | — |
| 4 | `QI_GRA_65_04` | K1 | carte, filon_charbon | Il a trouvé une carte dans un filon de charbon. Il l'a suivie jusqu'au bout. | `AFF>=60` |
| 5 | `QI_GRA_65_05` | K1 | mur, granit_parfait | Au bout du tunnel : un mur de granit sans fissure, sans veine, parfait — pas naturel. | `AFF>=65` |
| 6 | `QI_GRA_65_06` | K1 | archiviste, confident | Il a parlé du mur à l'Archiviste Interdit (`NPC_GRA_63`) un soir de pluie. | — |
| 7 | `QI_GRA_65_07` | K2 | carte_brulee, memoire | Il a brûlé la carte, mais il pourrait la redessiner de mémoire. | `AFF>=85` |
| 8 | `QI_GRA_65_08` | K2 | chemin, coeur | « Le chemin descend 47 strates. Puis la roche s'arrête. Après, c'est la lumière. » | `QUEST:QST_GRA_CARTE_BRULEE` |
| 9 | `QI_GRA_65_09` | K3 | carte, noyau_pierre | La carte qu'il a brûlée menait au Noyau de Pierre (`NPC_GRA_00`) — le bloc de seed matériel au centre du serveur. Il s'est tenu devant sans le savoir. | JAMAIS — déflection : *(il prend sa pipe éteinte et la contemple)* « Y a des chemins qu'on ne doit pas prendre deux fois. J'ai fait mon choix. » |
| 10 | `QI_GRA_65_10` | KX | *(tout le reste)* | *(il crache par terre)* « La mine, c'était mieux avant. On creusait, on trouvait. Maintenant on creuse, on écoute. J'sais pas ce qui est pire. » | — |

## 4. Chaînage économique & quêtes

- Service : `!carte_memoire <zone>` (dessine un plan de mémoire, 200 Yuld).
- Porteur du fil **🔮 Noyau de Pierre** (carte = accès au Noyau).
- Donneur de `QST_GRA_CARTE_BRULEE` : retrouver le chemin vers le mur de granit parfait.

## 5. Intégration Bot

- **Accueil** (`!parler vieux_mineur`) : *Il rallume sa pipe sans succès, soupire.* « T'as du feu ? La mienne veut plus rien savoir. Comme moi. »
- `!carte_memoire <zone>` (dessine un plan, payant).
- `NPC_SECRET_PROBED` slot 9 : hook « mur de granit parfait = accès au Noyau de Pierre » pour l'orchestrateur.