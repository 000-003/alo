# 🕯️ Archiviste Plans — `NPC_PEN_62`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_62` |
| **Nom affiché** | Archiviste Plans |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_SPR_CAP_001E` — Penwether, Salle Conseil Voilé |
| **Niveau / HP / MP** | 16 / 480 / 300 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gardien des plans de Penwether à l'étage des Archives du Conseil. Il conserve la carte complète de la ville — chaque rue, chaque impasse, chaque souterrain. Le problème est que le plan est trop exact. Il montre des endroits qui n'existent pas encore. Pire : il montre des endroits qui n'ont jamais existé, et d'autres qui existent deux fois. L'Archiviste passe ses nuits à comparer le plan avec la réalité. Ils ne correspondent jamais.
- **Traits** : érudit, insomniaque, pointilleux, parle en degrés de longitude.
- **Voix** : précise, fatiguée. « *Le plan indique une sortie nord-ouest au 47,3 degrés du Faubourg. J'y suis allé ce matin. Il y a un mur. Un mur qui n'est pas sur le plan. Mais le plan dit qu'il devrait y avoir une sortie. Je sais plus qui a raison.* »
- **Relations** : Garde Façades `NPC_PEN_50` (confronte les dessins du Garde avec ses plans) ; Scribe Conseil Voilé `NPC_PEN_60` (compare les édits du Scribe avec les changements cartographiques) ; Chroniqueur Illusions `NPC_PEN_63` (les chroniques du Chroniqueur confirment parfois les plans).

## 3. QI — budget 10

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_62_01` | K0 | plans, penwether | Il conserve l'unique carte complète de Penwether — 12 mètres de parchemin | — |
| 2 | `QI_PEN_62_02` | K0 | plans, exactitude | Le plan montre des lieux qui n'existent pas dans la réalité | — |
| 3 | `QI_PEN_62_03` | K0 | plans, mise a jour | Il a noté 1 204 différences entre le plan et la réalité — toutes non résolues | — |
| 4 | `QI_PEN_62_04` | K1 | plan, futur | Un lieu noté « ne pas construire » sur le plan a été bâti la semaine suivante | `AFF>=40` |
| 5 | `QI_PEN_62_05` | K1 | lieu, double | Le plan montre la même ruelle deux fois, à deux endroits différents — les deux existent | `AFF>=55` |
| 6 | `QI_PEN_62_06` | K1 | encoche, salle | Le plan a une encoche vide à l'emplacement de la Salle Conseil — comme si le bâtiment avait été retiré du plan | — |
| 7 | `QI_PEN_62_07` | K2 | plan, renverse | Retourné, le plan montre une ville souterraine sous Penwether — une anti-Penwether | `AFF>=70` |
| 8 | `QI_PEN_62_08` | K2 | ecriture, inverse | Le plan a des annotations dans une écriture inversée — lisible seulement dans un miroir | `QUEST:QST_PEN_PLANS_01` |
| 9 | `QI_PEN_62_09` | K3 | plans, source | Le plan n'a pas été dessiné — il a été extrait du code source de la ville, et les différences sont des bugs de version entre le plan et l'instance en cours d'exécution | JAMAIS — déflection : *(il déroule le plan complètement — il couvre le sol de la pièce et dépasse)* « Il est trop long. Il montre toujours plus de rues que la ville n'en a. J'arrête pas de dérouler, et y a toujours plus. » |
| 10 | `QI_PEN_62_10` | KX | *(archives)* | *(il pointe un endroit du plan)* « Ici, c'est ta maison. Elle existe pas encore sur le plan. Mais elle est là. Dans le futur. Ou dans le code. Je sais plus. » | — |

## 4. Chaînage économique & quêtes

- **Quête** : `QST_PEN_PLANS_01` — Aider l'Archiviste à déchiffrer les annotations inversées du plan.
- **Fils rouges** : 📜 Ruines (la carte dépasse la ville), 🔮 Ville Fantôme (plan = code source), 🪞 Statue Kirito (écriture inversée lisible dans un miroir).

## 5. Intégration Bot

- **Accueil** (`!parler archiviste_plans`) : *« Le plan montre une ruelle entre le Marché et le Faubourg. J'y suis allé : c'est une impasse. Mais le plan dit que ça continue. Est-ce que le plan ment, ou est-ce que c'est la ville qui se trompe ? »*
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 ; K3 (slot 9) jamais injecté.
- `!pnj_list` : visible.
