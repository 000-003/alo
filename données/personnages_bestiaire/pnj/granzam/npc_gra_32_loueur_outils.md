# ⛏️ Loueur d'Outils — `NPC_GRA_32`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_32` |
| **Nom affiché** | Loueur d'Outils |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Atelier des Profondeurs |
| **Niveau / HP / MP** | 16 / 950 / 220 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Loue pioches, pelles, casques et lanternes aux mineurs qui descendent dans les Profondeurs. Ses outils sont robustes, entretenus — mais une pioche en particulier revient toujours. Elle est marquée d'une rayure rouge. Chaque client qui l'emporte fait un cauchemar : il creuse dans le noir, et la roche saigne. Le Loueur a récupéré la pioche, l'a rangée au fond de l'atelier. Le lendemain, elle était accrochée au mur avec les autres. Lié au fil **🔥 Rivalité de Sang** : la rayure rouge est du sang d'un Leprechaun — un ancien conflit à la mine.
- **Traits** : serviable, nerveux, superstitieux, taiseux.
- **Voix** : Voix rapide, mal à l'aise. « Choisis ta pioche. Celle-ci ? Non, pas celle-ci. Pas celle avec la rayure. »
- **Relations** : `NPC_GRA_34` (Vendeur Boucliers — lui a prêté une hache) ; `NPC_GRA_33` (Armurier Adjoint — lui vend des réparations) ; `NPC_GRA_56` (Sentinelle Carrières — lui a raconté l'histoire de la pioche).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_32_01` | K0 | location, pioche | Location de pioches — 20 Yuld/jour, caution 50 Yuld | — |
| 2 | `QI_GRA_32_02` | K0 | outil, catalogue | Catalogue des outils disponibles — pioche, pelle, pic, lanterne | — |
| 3 | `QI_GRA_32_03` | K0 | entretien, reparation | Entretien des outils — affûtage, manche, gemme de lanterne | — |
| 4 | `QI_GRA_32_04` | K1 | pioche, rouge | Une pioche marquée d'une rayure rouge ne cesse de revenir | `AFF>=60` |
| 5 | `QI_GRA_32_05` | K1 | cauchemar, sang | Les locataires de cette pioche font des cauchemars de roche qui saigne | `AFF>=65` |
| 6 | `QI_GRA_32_06` | K1 | sentinelle, histoire | La Sentinelle (`NPC_GRA_56`) a dit que la rayure est du sang Leprechaun | — |
| 7 | `QI_GRA_32_07` | K2 | conflit, mine | Il y a 50 ans, un mineur Leprechaun est mort dans un éboulement — sa pioche n'a jamais été retrouvée | `AFF>=85` |
| 8 | `QI_GRA_32_08` | K2 | pioche, deplacement | Il range la pioche au fond — elle revient toujours sur le mur | `QUEST:QST_GRA_PIOCHE_MAUDITE` |
| 9 | `QI_GRA_32_09` | K3 | objet_maudit, attachment | La pioche est « liée » au mineur mort — un attachement d'âme du Cardinal qui ne peut pas résoudre le conflit de territoire non résolu entre Gnomes et Leprechauns, et qui se manifeste dans le jeu par cette boucle d'objet | JAMAIS — déflection : *(il décroche la pioche du mur, la retourne — la rayure rouge brille)* « Celle-là n'est pas à louer. Pas à toi. Pas à personne. Elle a déjà un propriétaire. » |
| 10 | `QI_GRA_32_10` | KX | *(tout le reste)* | *(il asticote une lame)* « Un outil, ça se respecte. Sinon, il te le rend. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : location d'outils de minage.
- Porteur du fil **🔥 Rivalité de Sang** (pioche maudite du conflit Leprechaun).
- Donneur de `QST_GRA_PIOCHE_MAUDITE` : enquête sur la pioche qui revient toujours.

## 5. Intégration Bot

- **Accueil** (`!parler loueur`) : *Range des pioches sur un râtelier.* « Besoin de creuser ? J'ai ce qu'il faut. Sauf celle-ci. Celle-ci, elle creuse toute seule. »
- `!rent_outil <type>` actif à l'Atelier des Profondeurs.
- `NPC_SECRET_PROBED` slot 9 : hook « pioche à attachement d'âme » pour l'orchestrateur.
