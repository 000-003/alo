# ⛏️ Acolyte de Roche — `NPC_GRA_82`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_82` |
| **Nom affiché** | Acolyte de Roche |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Autel de Résurrection |
| **Niveau / HP / MP** | 10 / 500 / 100 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Jeune novice de l'Autel de Résurrection. Il s'occupe des tâches ingrates : nettoyer la pierre, apporter la craie à la Prêtresse (`NPC_GRA_81`), préparer les encens minéraux. Depuis son premier mois, il entend des pas qui résonnent dans l'autel vide — des pas lents, réguliers, qui traversent la salle de part en part, sans corps pour les produire. Il a posé des pierres par terre pour marquer les trajectoires. Les pas les déplacent. **Angle** : Des pas sans corps.
- **Traits** : nerveux, dévoué, impressionnable, entend des choses.
- **Voix** : Jeune, hésitante, parfois aiguë quand il est effrayé. « Tu… tu entends ça ? Non ? Pourtant ils sont là. Les pas. Ils marchent. »
- **Relations** : `NPC_GRA_80` (Prêtre — supérieur) ; `NPC_GRA_81` (Prêtresse — lui fournit la craie) ; `NPC_GRA_83` (Vestale — lui donne ses tâches).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_82_01` | K0 | acolyte, novice | Sa formation — nettoyage, encens, préparation des rites | — |
| 2 | `QI_GRA_82_02` | K0 | autel, entretien | L'entretien quotidien de l'Autel de Résurrection | — |
| 3 | `QI_GRA_82_03` | K0 | granzam, clergé | Hiérarchie du clergé de la pierre à Granzam | — |
| 4 | `QI_GRA_82_04` | K1 | pas, entite | Des pas traversent l'autel la nuit — jamais de jour | `AFF>=60` |
| 5 | `QI_GRA_82_05` | K1 | pierres, deplacees | Il a posé des repères — les pierres sont déplacées chaque matin | `AFF>=65` |
| 6 | `QI_GRA_82_06` | K1 | pretresse, ouie | La Prêtresse `NPC_GRA_81` a hoché la tête quand il lui en a parlé — elle les entend aussi | — |
| 7 | `QI_GRA_82_07` | K2 | trajectoire, autel | Les pas forment un cercle autour de l'autel — exactement le périmètre du socle | `AFF>=85` |
| 8 | `QI_GRA_82_08` | K2 | pas, coeur | Les pas viennent du sous-sol — ils montent par les fondations de l'autel | `QUEST:QST_GRA_PAS_AUTEL` |
| 9 | `QI_GRA_82_09` | K3 | pas, seed, fantome | Les pas sont ceux d'un prêtre supprimé de la base de données — un NPC retiré du jeu il y a trois ans, mais dont le script de marche continue de s'exécuter sur le serveur, lié à l'autel comme point d'ancrage | JAMAIS — déflection : *(il pâlit)* « C'est une vieille histoire. Le Prêtre dit que ce sont les âmes des mineurs. Mais j'ai regardé dans les registres. Le rythme des pas correspond à un seul homme. Un prêtre radié. » |
| 10 | `QI_GRA_82_10` | KX | *(hors sujet)* | *(il frotte une tache sur l'autel)* « La pierre, ça se nettoie. Les taches, ça part toujours. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!preparer_autel` (buff temps de résurrection réduit de 10%).
- Porteur du fil **⛏️ Le Filonant** (script de NPC supprimé qui persiste).
- Donneur de `QST_GRA_PAS_AUTEL` : enquête sur les pas sans corps.

## 5. Intégration Bot

- **Accueil** (`!parler acolyte`) : *Un jeune Gnome frotte nerveusement une tache sur l'autel. Il sursaute quand tu l'appelles.* « Hein ? Quoi ? Oh, un visiteur. Désolé, je suis… distrait. »
- `!preparer_autel` actif à l'Autel de Résurrection.
- `NPC_SECRET_PROBED` slot 9 : hook « script résiduel de NPC supprimé » pour l'orchestrateur.
