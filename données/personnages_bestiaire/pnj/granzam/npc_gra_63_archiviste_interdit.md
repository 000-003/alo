# ⛏️ Archiviste Interdit — `NPC_GRA_63`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_63` |
| **Nom affiché** | Archiviste Interdit |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril (accès caché) |
| **Niveau / HP / MP** | 62 / 5 600 / 12 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Archiviste banni du Conseil — il conserve des documents que personne n'est censé voir : les plans originaux de la construction de Granzam, les schémas du trône sismique, et un plan — un seul — qui montre une strate qui annule la roche. Un espace vide sous la ville, comme une poche de néant. Il a trouvé ce plan dans les fondations du Conseil lors d'une réparation. Il le garde dans une cache scellée à la Mine de Mithril, là où personne ne cherche. Il ne fait confiance qu'au Vieux Mineur (`NPC_GRA_65`), qui l'a aidé à le cacher. (Angle : plan qui annule la roche.)
- **Traits** : reclus, paranoïaque, minutieux, hanté.
- **Voix** : Voix rauque de poussière, comme des pages qu'on tourne. « Il y a un vide. Un espace où la pierre n'existe pas. Sous la ville. Je l'ai vu. »
- **Relations** : `NPC_GRA_65` (Vieux Mineur — seul allié), `NPC_GRA_08` (Chancelier — l'a banni), `NPC_GRA_26` (Archiviste Conseil — ancien collègue), `NPC_GRA_16` (Gardien Mine — le tolère), `NPC_GRA_64` (Gardien Donjon — le surveille).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_63_01` | K0 | archive, bannissement | Il a été banni du Conseil pour « possession de documents interdits ». | — |
| 2 | `QI_GRA_63_02` | K0 | plan, fondation | Il garde des plans originaux de la construction de Granzam. | — |
| 3 | `QI_GRA_63_03` | K0 | mine_mithril, cache | Il se cache dans la Mine de Mithril dans un renfoncement secret. | — |
| 4 | `QI_GRA_63_04` | K1 | plan, vide | Un plan montre une strate vide sous la ville. « Pas de la terre. Pas de la roche. Du rien. » | `AFF>=60` |
| 5 | `QI_GRA_63_05` | K1 | roche, annulation | Le plan décrit un dispositif qui annule la structure de la roche. | `AFF>=65` |
| 6 | `QI_GRA_63_06` | K1 | vieux_mineur, cache | Le Vieux Mineur (`NPC_GRA_65`) l'a aidé à dissimuler le plan. | — |
| 7 | `QI_GRA_63_07` | K2 | sceau, conseil | Le plan porte le sceau du Conseil — mais d'un Conseil qui n'existe plus. L'ancien sceau d'avant-guerre. | `AFF>=85` |
| 8 | `QI_GRA_63_08` | K2 | poche, vide | « Sous la Salle du Conseil, il y a une poche. Pas creusée. Naturelle. Comme si la montagne n'avait jamais existé là. » | `QUEST:QST_GRA_PLAN_VIDE` |
| 9 | `QI_GRA_63_09` | K3 | plan, annulation_roche | Le plan décrit une seed d'annulation — un code qui désactive la génération de matière minérale autour d'un point. C'est une commande de debug du Cardinal. | JAMAIS — déflection : *(il referme le parchemin vivement)* « Certaines choses ne doivent pas être vues. Celle-ci en particulier. » |
| 10 | `QI_GRA_63_10` | KX | *(tout le reste)* | *(il regarde ses mains couvertes de poussière)* « La poussière des archives se glisse partout. Dans mes poumons, dans mes rêves. Je ne peux plus m'en défaire. » | — |

## 4. Chaînage économique & quêtes

- Service : `!consulter_archive <sujet>` (consulte les plans, payant).
- Porteur du fil **🔮 Noyau de Pierre** (plan = commande de debug du Cardinal).
- Donneur de `QST_GRA_PLAN_VIDE` : trouver la poche de vide sous la Salle du Conseil.

## 5. Intégration Bot

- **Accueil** (`!parler archiviste`) : *Dans l'ombre d'une alcôve minérale, il déplie un parchemin jauni.* « Toi aussi tu cherches des réponses ? Assieds-toi. Mais ne touche à rien. »
- `!consulter_archive <sujet>` (service payant, 100 Yuld).
- `NPC_SECRET_PROBED` slot 9 : hook « plan = seed d'annulation du Cardinal » pour l'orchestrateur.