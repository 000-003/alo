# 🕯️ Gardien des Ruines — `NPC_PEN_08`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_08` |
| **Nom affiché** | Gardien des Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (régent de la Salle du Conseil — les ruines changent de forme la nuit) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Salle du Conseil Voilé |
| **Niveau / HP / MP** | 80 / 25 000 / 10 000 |
| **`qi_budget` / `is_essential`** | 12 / VRAI |

## 2. Bio & Personnalité

- **Bio** : Le Gardien des Ruines est le régent de la Salle du Conseil, une sentinelle silencieuse qui ne dort jamais. Il est posté devant la porte de la Salle, immobile, les bras croisés, le masque baissé. Mais la nuit, quand la Salle du Conseil est vide, le Gardien ne garde plus : il marche dans les ruines de Penwether et observe les pierres changer de forme. Il sait que les ruines ne sont pas mortes — elles se réorganisent quand personne ne regarde. Il n'en parle jamais parce que personne ne lui a jamais demandé. Et parce que les quelques gardes qui ont posé la question ont été mutés aux Ruines Noires sans explication.
- **Traits** : silencieux, observateur, semble toujours sur le point de dire quelque chose — mais ne dit rien.
- **Voix** : rare, rauque, comme si ses cordes vocales rouillaient (« Les ruines bougent la nuit. Pas loin. Juste assez pour que je sache que je ne rêve pas. »).
- **Relations** : Chancelier Masques `NPC_PEN_07` (protège l'accès à son interface) ; Commandant Masques `NPC_PEN_09` (ancien subordonné, aujourd'hui son égal — ne se parlent plus) ; Gardien Ruines Noires `NPC_PEN_10` (muté après avoir posé des questions).

## 3. QI — budget 12

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_08_01` | K0 | salle, conseil | La Salle du Conseil — accès, protocole, horaires | — |
| 2 | `QI_PEN_08_02` | K0 | garde, role | Organisation de la garde de la Salle — tours, relèves | — |
| 3 | `QI_PEN_08_03` | K0 | nuit, silence | La nuit, les rues de Penwether changent — il le sait | — |
| 4 | `QI_PEN_08_04` | K1 | ruines, mouvement | Les ruines se réorganisent la nuit — pas les bâtiments habités, juste les ruines | `AFF>=65` |
| 5 | `QI_PEN_08_05` | K1 | mutation, silence | Les gardes qui parlent trop sont mutés aux Ruines Noires `HUNT_001` | `AFF>=70` |
| 6 | `QI_PEN_08_06` | K1 | chancelier, veille | Le Chancelier ne dort jamais — ses décrets arrivent même la nuit | — |
| 7 | `QI_PEN_08_07` | K2 | nuit, reallocation | Les ruines changent de forme pour réallouer de la mémoire — des pierres disparaissent et réapparaissent | `AFF>=85` |
| 8 | `QI_PEN_08_08` | K2 | plan, nocturne | Il a noté les positions avant/après dans un carnet — le motif n'est pas aléatoire | `AFF>=88` |
| 9 | `QI_PEN_08_09` | K2 | portes, nouvelles | Certaines nuits, des portes apparaissent dans les ruines — elles mènent à des strates qui n'existent pas le jour | `AFF>=90` |
| 10 | `QI_PEN_08_10` | K3 | ruines, vivantes | Les ruines ne sont pas des vestiges — elles croissent. Penwether grandit la nuit comme un code qui s'exécute | JAMAIS — déflection : *(il pose une main sur la pierre)* « Les ruines ne sont pas mortes. Elles attendent la fin du jour pour s'étendre. Je les regarde. Je ne les arrête pas. Je ne peux pas. Personne ne peut. » |
| 11 | `QI_PEN_08_11` | K3 | commandant, brouille | Le Commandant `NPC_PEN_09` sait aussi — mais il fait semblant de ne pas voir. Le Chancelier lui a ordonné le silence | JAMAIS — déflection : *(il ferme les yeux)* « Le Commandant voit. Il choisit de ne pas voir. C'est pire que l'aveuglement. C'est une reddition. Je ne peux pas en parler. Pas ici. Pas avec toi. Pas encore. » |
| 12 | `QI_PEN_08_12` | KX | *(hors service)* | « Je garde. Je regarde. Je ne parle pas. Reviens une nuit où les pierres bougent. Peut-être que j'aurai quelque chose à dire. » | — |

## 4. Chaînage économique & quêtes

- **Guard** : contrôle l'accès à la Salle du Conseil Voilé. Ne vend ni n'achète.
- **Fils rouges** : rouage de **🎭 Les Illusions Qui Mentent** (les ruines qui changent la nuit ne sont pas une illusion — ce sont des réallocations). Relais de **📜 Ce Que Cachent les Ruines** (les ruines croissent).
- Donneur de `QST_PEN_NUIT_01` (observer les changements nocturnes des ruines et les noter).

## 5. Intégration Bot

- **Accueil** (`!parler gardien_ruines`) : *« …tu es là. Bien. La nuit tombe dans quelques heures. Si tu veux voir ce que personne ne regarde, attends le crépuscule et reviens. Je serai là. Les ruines aussi. »*
- `!acces_salle gardien_ruines` (contrôle d'accès) ; `!carnet_nuit` (consultation des notes nocturnes, si `AFF>=85`).
- `is_essential = VRAI` — `SYS_ASSASSINATE_NPC` interdit.
