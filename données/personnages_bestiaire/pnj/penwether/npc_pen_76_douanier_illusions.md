# 🕯️ Douanier des Illusions — `NPC_PEN_76`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_76` |
| **Nom affiché** | Douanier des Illusions |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (registre illusoire de la Porte) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Porte de Penwether |
| **Niveau / HP / MP** | 30 / 3 200 / 4 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Douanier des Illusions enregistre les noms des entrants dans un grand registre à la couverture de cuire pâle. Il note le nom que chaque visiteur donne — mais il sait que la plupart sont faux. Penwether est une ville de masques, et les noms y sont aussi changeants que les rues. Lui-même ne se souvient pas de son vrai nom. Il croit l'avoir écrit dans le registre, quelque part, mais les pages se réécrivent toutes seules. Angle : il enregistre des noms faux — mais un nom vrai est inscrit, le sien, qu'il ne trouve plus.
- **Traits** : méticuleux, distrait, une angoisse sourde derrière le masque.
- **Voix** : monocorde, comme s'il lisait une liste déjà écrite (« Nom ? …Merci. Origine ? …C'est noté. Prochain. »).
- **Relations** : Gardien Porte `NPC_PEN_75` (collègue — voit les mêmes ombres sans masque) ; Veilleur Nuit `NPC_PEN_77` (lui raconte les bruits des remparts) ; Chancelier Masques `NPC_PEN_07` (supérieur — n'a jamais posé les yeux sur lui).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_76_01` | K0 | registre, noms | Enregistre les noms des entrants dans le grand registre | — |
| 2 | `QI_PEN_76_02` | K0 | noms, faux | La plupart des noms sont faux — les visiteurs portent des masques de nom | — |
| 3 | `QI_PEN_76_03` | K0 | registre, pages | Le registre a des pages qui changent de contenu chaque nuit | — |
| 4 | `QI_PEN_76_04` | K1 | nom, vrai | Il a oublié son vrai nom — il est écrit dans le registre, quelque part | — |
| 5 | `QI_PEN_76_05` | K1 | ombres, registre | Les ombres sans masque `NPC_PEN_75` ne laissent pas de trace dans le registre | `AFF>=60` |
| 6 | `QI_PEN_76_06` | K1 | pages, blanches | Certaines pages sont blanches le matin — réécrites la veille | `AFF>=65` |
| 7 | `QI_PEN_76_07` | K2 | nom, efface | Son nom est effacé chaque nuit par le registre lui-même | `AFF>=80` |
| 8 | `QI_PEN_76_08` | K2 | registre, vivant | Le registre est une entité — il écrit tout seul les noms des morts de la Nécropole | `AFF>=85` |
| 9 | `QI_PEN_76_09` | K3 | registre, systeme | Le registre est le journal des processus du Cardinal pour Penwether. Chaque nom inscrit est un thread alloué. Les « noms faux » sont des joueurs. Les pages blanches sont des processus tués. Son vrai nom n'a jamais existé — il est un PNJ système dont l'identité est « Douanier Illusions » et rien d'autre | JAMAIS — déflection : *(il feuillette le registre, de plus en plus vite)* « Il est là. Je l'ai écrit. Je l'ai vu. C'est mon nom. Il était là. » *(il claque le registre)* « …Passe. Prochain. » |
| 10 | `QI_PEN_76_10` | KX | *(hors sujet)* | « Un nom, c'est tout ce qu'on a. Sans nom, on est une page blanche. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!pen_douane_inscription [nom]` — inscription au registre (quête `QST_PEN_NOM_VRAI_01` pour retrouver son propre nom).
- **Fils rouges** : rouage de **🎭 Les Illusions Qui Mentent** (les noms sont des illusions civiques) et de **🔮 Fil méta — La Ville Fantôme** (le registre est un log système).
- Le « vrai nom » est récupérable via une quête qui mène à la Bibliothèque Enterrée `NPC_PEN_29`.

## 5. Intégration Bot

- **Accueil** (`!parler douanier illusions`) : *« Nom ? …Bien. Origine ? …C'est tout. Prochain. »*
- `!pen_douane_recherche [nom]` — chercher un nom dans le registre.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « registre = journal des processus du Cardinal » réservé à l'orchestrateur.
