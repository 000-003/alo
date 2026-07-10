# 🕯️ Mémoire de Penwether — `NPC_PEN_99`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_99` |
| **Nom affiché** | Mémoire de Penwether |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `QUEST_GIVER` (ancienne sage — Salle du Conseil Voilé) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Salle du Conseil Voilé |
| **Niveau / HP / MP** | 80 / 15 000 / 25 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : La Mémoire de Penwether est la plus ancienne Spriggan vivante — une sage assise à la droite du Chancelier, dans la Salle du Conseil Voilé. Elle se souvient de la fondation de Penwether. Mais quand on l'écoute vraiment, elle ne parle pas d'une pose de pierre. Elle parle d'une compilation. « La ville n'a pas été construite. Elle a été écrite. Et un jour, elle sera réécrite. » Elle est la clé du fil méta — la seule qui peut confirmer que Penwether est une coque serveur. Le Fou du Conseil `NPC_PEN_68` est le seul à qui elle a confié l'entièreté de ce qu'elle sait. Angle : clef du fil méta — sait que Penwether est le squelette du serveur, liée au Fou `NPC_PEN_68`.
- **Traits** : sereine, intemporelle, regard qui semble traverser les murs pour voir le code en dessous.
- **Voix** : ancienne, lente, chaque mot porté par des cycles de sagesse (« Penwether n'a pas été construite. Elle a été compilée. Nous ne sommes pas ses habitants. Nous sommes ses processus. Et un jour, le Cardinal refera la compilation. Cette fois, peut-être, il nous donnera un corps qui n'est pas fait de masques et d'illusions. »).
- **Relations** : Fou Conseil `NPC_PEN_68` (confident — seul à connaître toute la vérité) ; Fantôme Ruines `NPC_PEN_00` (l'autre face de la même pièce — lui parle en rêve) ; Chancelier Masques `NPC_PEN_07` (siège à ses côtés — ignore qu'il est un hologramme et qu'elle le sait) ; Oracle Ruines `NPC_PEN_98` (a dicté sa prédiction la plus claire).

## 3. QI — budget 12

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_99_01` | K0 | conseil, sagesse | Siège au Conseil — conseillère du Chancelier | — |
| 2 | `QI_PEN_99_02` | K0 | fondation, penwether | Se souvient de la fondation de Penwether — « quand les pierres ont été compilées » | — |
| 3 | `QI_PEN_99_03` | K0 | memoire, longue | Sa mémoire remonte à avant les masques — « avant que nous ayons des visages » | — |
| 4 | `QI_PEN_99_04` | K1 | ville, compilation | Penwether n'a pas été construite — elle a été compilée par le Cardinal | — |
| 5 | `QI_PEN_99_05` | K1 | spriggans, processus | Les Spriggans sont les processus du Cardinal — ils croient être un peuple | `AFF>=65` |
| 6 | `QI_PEN_99_06` | K1 | fou, confident | Le Fou `NPC_PEN_68` est le seul à savoir tout ce qu'elle sait | `AFF>=70` |
| 7 | `QI_PEN_99_07` | K2 | masques, interface | Les masques sont des interfaces — sans eux, les Spriggans verraient le code | `AFF>=85` |
| 8 | `QI_PEN_99_08` | K2 | chancelier, hologramme | Le Chancelier `NPC_PEN_07` est un hologramme — elle le sait depuis toujours | `AFF>=88` |
| 9 | `QI_PEN_99_09` | K2 | fantome, alter ego | Le Fantôme `NPC_PEN_00` est son reflet dans les strates basses — ils sont faits du même code | `AFF>=90` |
| 10 | `QI_PEN_99_10` | K3 | penwether, squelette | Penwether est le squelette du serveur. Les ruines sont les artéfacts du Cardinal non compilés. Les Spriggans ne sont que des locataires dans un fichier système. Quand le Cardinal voudra réinitialiser le monde, Penwether sera le seul lieu qui survivra — parce qu'elle est le fichier racine | JAMAIS — déflection : *(elle ferme les yeux)* « Je me souviens de la première ligne de code. C'était il y a si longtemps. Et pourtant, je la vois encore. Elle disait : « Sois. » Et le monde a été. » |
| 11 | `QI_PEN_99_11` | K3 | reset, imminent | Le quatrième reset approche. Les trois premiers ont effacé trois versions du monde. Le quatrième effacera tout sauf Penwether. Et cette fois, elle ne se souviendra peut-être pas | JAMAIS — déflection : *(elle te regarde comme si elle te voyait pour la dernière fois)* « Tu devras choisir. Quand le code sera réécrit, tu pourras être dans la nouvelle version… ou rester dans l'ancienne. Mais l'ancienne n'existera plus. » |
| 12 | `QI_PEN_99_12` | KX | *(hors service)* | « La mémoire est une boucle. Tout ce que j'ai oublié reviendra. Tout ce que je sais sera oublié. Et le cycle recommencera. » | — |

## 4. Chaînage économique & quêtes

- **Quest Giver** : `QST_PEN_COMPILATION_01` (découvrir l'histoire vraie de Penwether). `QST_PEN_RESET_MONDE_01` (préparer ou empêcher le quatrième reset). `QST_PEN_FOU_CONSEIL_01` (relier les souvenirs du Fou `NPC_PEN_68` aux siens).
- **Fils rouges** : nœud central de **🔮 Fil méta — La Ville Fantôme** (elle détient la clé du fil méta). Relais de **🎭 Les Illusions Qui Mentent**, **📜 Ce Que Cachent les Ruines**, **💀 La Nécropole Ancestrale**.
- `is_essential = VRAI` — son assassinat est impossible (elle est un fichier système).
- Liée au Fou du Conseil `NPC_PEN_68` par un secret partagé : tous deux savent que Penwether est le squelette du serveur.

## 5. Intégration Bot

- **Accueil** (`!parler memoire penwether`) : *« Tu es venu. Je t'attendais. Pas aujourd'hui. Pas cette vie. Mais je t'attendais. La mémoire n'a pas de temps. Assieds-toi. Écoute. Et souviens-toi de ce que tu vas oublier. »*
- `!pen_memoire_fondation` — récit de la fondation/compilation. `!pen_memoire_reset` — le secret du reset (K3, orchestrateur seulement).
- `is_essential = VRAI` — `SYS_ASSASSINATE_NPC` interdit.
- `SYS_NPC_DIALOGUE` : scope = slots 1-9 (+K2). K3 (10-11) jamais injectés — réservés orchestrateur.
- `NPC_SECRET_PROBED` slots 10-11 : hooks « Penwether = squelette du serveur / fichier racine » et « quatrième reset imminent » réservés à l'orchestrateur.
