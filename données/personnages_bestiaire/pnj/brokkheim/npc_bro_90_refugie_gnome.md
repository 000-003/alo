# 🔨 Réfugié Gnome — `NPC_BRO_90`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_90` |
| **Nom affiché** | Réfugié Gnome |
| **Race** | Gnome |
| **Rôle** | `SERVICE` |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Vallée Geysers |
| **Niveau / HP / MP** | 10 / 700 / 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Gnome ayant fui Granzam après que les tensions avec Brokkheim ont éclaté. Il s'est réfugié dans la Vallée des Geysers, vivant de la vapeur et des champignons qui y poussent. Il sait que les gemmes de Granzam « voient » — elles sont taillées avec des propriétés divinatoires. Angle : Sait gemme voit. Fil Rivalité Mineurs.
- **Traits** : Méfiant, maigre, tousse de la vapeur.
- **Voix** : Faible, hachée. « Les gemmes voient. Elles ont vu ce que Granzam prépare. »
- **Relations :** `NPC_BRO_87` (espion — le connaît de Granzam, ne lui fait pas confiance), `NPC_BRO_93` (trafiquant rival — lui vend des infos), `NPC_BRO_98` (oracle — voisine de geysers).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_90_01` | K0 | refuge, geysers | Vie dans la Vallée des Geysers, cueillette de champignons | — |
| 2 | `QI_BRO_90_02` | K0 | granzam, fuite | A fui Granzam après un conflit de clans miniers | — |
| 3 | `QI_BRO_90_03` | K0 | gemmes, divination | Les gemmes de Granzam ont des propriétés divinatoires | — |
| 4 | `QI_BRO_90_04` | K1 | gemmes, voient | Les gemmes taillées par les maîtres-gnomes gardent la mémoire de ce qu'elles ont vu | `AFF>=55` |
| 5 | `QI_BRO_90_05` | K1 | granzam, menace | Granzam prépare une expédition souterraine vers le Pouls | `AFF>=65` |
| 6 | `QI_BRO_90_06` | K1 | espion, presence | Il sait que `NPC_BRO_87` est un espion — il l'a reconnu | — |
| 7 | `QI_BRO_90_07` | K2 | gemme, seeau | Une gemme de Granzam porte le sceau du Cardinal — elle voit le serveur | `AFF>=80` |
| 8 | `QI_BRO_90_08` | K2 | cristal, mithril | Les gnomes ont trouvé comment lier gemme et mithril — arme de divination | `AFF>=85` |
| 9 | `QI_BRO_90_09` | K3 | gemmes, cardinal | Les gemmes de Granzam sont des fragments d'un œil du Cardinal — taillés pour voir à travers les couches du serveur. Granzam sait lire le code source à travers elles | JAMAIS — déflection : *(il serre une gemme dans sa main, la gemme s'assombrit)* « Elle te regarde. Ne la regarde pas en retour. » |
| 10 | `QI_BRO_90_10` | KX | *(hors sujet)* | « Les gnomes ne cassent pas la pierre. Ils écoutent ce qu'elle leur dit. » | — |

## 4. Chaînage économique & quêtes

- **SERVICE** : `!refuge_trade` — échange de champignons, infos sur Granzam.
- Hook gemme voit : `QST_BRO_GEM_VOYANTE`.

## 5. Intégration Bot

- **Accueil :** *(il sursaute à votre approche)* « Ah ! Toi. T'es pas gnome. Bon. Tant mieux. Ou tant pis. »