# ⛏️ Veilleur de Jour — `NPC_GRA_77`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_77` |
| **Nom affiché** | Veilleur de Jour |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Porte de Granzam |
| **Niveau / HP / MP** | 18 / 1 000 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien diurne de la Porte de Granzam. Il accueille les voyageurs, vérifie les laissez-passer et oriente les nouveaux arrivants. Depuis un mois, il remarque une ombre qui n'appartient à personne — une silhouette sombre qui se tient près de la herse à midi, quand le soleil est au zénith et que les ombres devraient être inexistantes. Elle n'a pas de maître. Il l'a montrée au Maréchal (`NPC_GRA_75`) et au Guide (`NPC_GRA_79`), mais eux ne voient qu'un pilier. **Angle** : Une ombre sans maître.
- **Traits** : affable, observateur, légèrement inquiet, bonne mémoire des visages.
- **Voix** : Enthousiaste et claire, avec une pointe d'inquiétude quand il parle de l'ombre. « Bienvenue à Granzam ! Pose ta charge, souffle un peu… et ne regarde pas le pilier de gauche. »
- **Relations** : `NPC_GRA_75` (Maréchal des Sabots — collègue) ; `NPC_GRA_76` (Veilleur de Nuit — relève) ; `NPC_GRA_79` (Guide des Visiteurs — lui envoie les nouveaux).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_77_01` | K0 | accueil, visiteurs | Accueil des visiteurs — procédure, registre d'entrée | — |
| 2 | `QI_GRA_77_02` | K0 | granzam, porte jour | La vie à la Porte de Granzam pendant la journée | — |
| 3 | `QI_GRA_77_03` | K0 | laissez_passer | Types de laissez-passer — commerce, pèlerinage, mine | — |
| 4 | `QI_GRA_77_04` | K1 | ombre, pilier | Une ombre apparaît sur le pilier gauche à midi — sans personne pour la projeter | `AFF>=60` |
| 5 | `QI_GRA_77_05` | K1 | marechal, aveugle | Le Maréchal ne voit rien quand il lui montre l'ombre | `AFF>=65` |
| 6 | `QI_GRA_77_06` | K1 | guide, temoin | Le Guide `NPC_GRA_79` a vu l'ombre bouger — « comme un drap qu'on retire » | — |
| 7 | `QI_GRA_77_07` | K2 | ombre, independante | L'ombre se déplace parfois — elle change de pilier d'un jour à l'autre | `AFF>=85` |
| 8 | `QI_GRA_77_08` | K2 | trace, absence | Il a touché l'ombre — sa main est passée au travers, mais elle était froide | `QUEST:QST_GRA_OMBRE_MAITRE` |
| 9 | `QI_GRA_77_09` | K3 | ombre, faille, rendu | L'ombre est un défaut de rendu du client de jeu — un artefact graphique généré par un plantage du moteur d'ombres portées. Le Cardinal ne peut pas la supprimer car elle est liée à un objet « père » supprimé. C'est un vestige visuel de la version beta du décor | JAMAIS — déflection : *(il rit jaune)* « C'est juste un pilier. Les piliers ont des ombres. Tout le monde sait ça. Même quand y a pas de soleil. C'est… normal. » |
| 10 | `QI_GRA_77_10` | KX | *(hors sujet)* | *(il désigne la herse)* « Belle porte, hein ? Fer forgé, mithril incrusté. Dix mille heures de travail. » | — |

## 4. Chaînage économique & quêtes

- **Accueil** : `!laissez_passer` (délivrance de laissez-passer temporaires).
- Porteur du fil **💎 La Gemme Qui Voit** (l'ombre pourrait être liée à une gemme de surveillance).
- Donneur de `QST_GRA_OMBRE_MAITRE` : enquête sur l'ombre sans maître.

## 5. Intégration Bot

- **Accueil** (`!parler veilleur_jour`) : *Debout près de la herse, un registre à la main, souriant.* « Bienvenue à Granzam, la cité qui ne dort jamais… enfin, si, elle dort. Mais l'accueil est ouvert ! »
- `!laissez_passer` actif à la Porte de Granzam.
- `NPC_SECRET_PROBED` slot 9 : hook « artefact graphique beta / ombre résiduelle » pour l'orchestrateur.
