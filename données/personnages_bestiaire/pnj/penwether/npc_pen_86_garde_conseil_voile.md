# 🕯️ Garde du Conseil Voilé — `NPC_PEN_86`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_86` |
| **Nom affiché** | Garde du Conseil Voilé |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (garde de la Salle du Conseil Voilé) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Salle du Conseil Voilé |
| **Niveau / HP / MP** | 58 / 9 200 / 3 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Garde du Conseil Voilé protège l'entrée de la Salle du Conseil, où siège le Chancelier Masques `NPC_PEN_07`. Il est loyal, discipliné, et il a remarqué quelque chose d'étrange : le Chancelier n'a pas d'ombre. Pas une ombre d'ombre, pas un reflet, pas une silhouette projetée sur le sol de marbre quand la lumière des bougies le frappe. Le Garde a vérifié cent fois : rien. Il n'en a parlé à personne — un garde qui dit que le Chancelier n'a pas d'ombre, c'est un garde qui finit aux Citernes. Mais il sait. Il regarde les pieds du Chancelier chaque fois qu'il entre. Angle : le Chancelier n'a pas d'ombre.
- **Traits** : loyal, silencieux, regard toujours aux pieds du Chancelier.
- **Voix** : brève, professionnelle, avec une hésitation à peine perceptible quand on évoque le Chancelier (« Il entre. Il parle. Il siège. …son ombre ? Pourquoi tu me demandes ça ? …Non, je ne regarde pas ses pieds. Dégage. »).
- **Relations** : Chancelier Masques `NPC_PEN_07` (son supérieur — ignore que le Chancelier est un hologramme) ; Ombre Conseil `NPC_PEN_67` (la seule autre personne qui sait — ils n'en parlent jamais) ; Fou Conseil `NPC_PEN_68` (lui a dit un jour : « Il n'a pas d'ombre, n'est-ce pas ? » — le Garde n'a pas répondu).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_86_01` | K0 | conseil, garde | Protège la Salle du Conseil Voilé — filtrage des entrants | — |
| 2 | `QI_PEN_86_02` | K0 | chancelier, securite | Assure la sécurité du Chancelier Masques `NPC_PEN_07` | — |
| 3 | `QI_PEN_86_03` | K0 | salle, acces | Accès restreint — laissez-passer du Conseil obligatoire | — |
| 4 | `QI_PEN_86_04` | K1 | ombre, absente | Le Chancelier n'a pas d'ombre — vérifié cent fois | — |
| 5 | `QI_PEN_86_05` | K1 | doute, silence | Il n'en a jamais parlé — crainte de représailles | `AFF>=60` |
| 6 | `QI_PEN_86_06` | K1 | fou, allusion | Le Fou `NPC_PEN_68` le sait aussi — lui a lancé un clin d'œil un jour | `AFF>=65` |
| 7 | `QI_PEN_86_07` | K2 | ombre, conseil | L'Ombre du Conseil `NPC_PEN_67` n'a pas d'ombre non plus — comme le Chancelier | `AFF>=80` |
| 8 | `QI_PEN_86_08` | K2 | lumiere, direction | L'ombre ne disparaît pas selon la lumière — elle est absente sous tous les angles | `AFF>=85` |
| 9 | `QI_PEN_86_09` | K3 | chancelier, projection | Le Chancelier n'a pas d'ombre parce qu'il n'a pas de corps. Il est une projection lumineuse — un hologramme système que le Cardinal diffuse dans la Salle du Conseil. Le vrai Chancelier n'a jamais existé. Le poste est une interface administrative, un processus de gestion que le Cardinal a habillé d'une silhouette pour donner l'illusion d'un gouvernement Spriggan | JAMAIS — déflection : *(il pose la main sur son épée)* « Je n'ai rien à dire sur le Chancelier. Il est mon supérieur. Il a une ombre. Forcément. Tout le monde a une ombre. » *(il transpire)* |
| 10 | `QI_PEN_86_10` | KX | *(hors sujet)* | « Un garde voit tout. Un bon garde ne dit rien. Un garde mort ne voit plus rien. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!pen_conseil_acces` — vérification d'accès à la Salle du Conseil. `!pen_garde_ombre` — interroger sur l'absence d'ombre (avec affinité).
- **Fils rouges** : rouage de **🎭 Les Illusions Qui Mentent** (le Chancelier est une illusion système) et de **🔮 Fil méta — La Ville Fantôme** (le Chancelier est un hologramme du Cardinal).
- Quête `QST_PEN_CHANCELIER_OMBRE_01` : découvrir la véritable nature du Chancelier.

## 5. Intégration Bot

- **Accueil** (`!parler garde conseil`) : *« Tu n'es pas sur la liste des accès. Dégage avant que j'appelle la ronde. »*
- `!pen_conseil_acces` — vérification ; `!pen_garde_ombre` — question sur l'ombre (affinité >= 60).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « Chancelier = hologramme système du Cardinal » réservé à l'orchestrateur.
