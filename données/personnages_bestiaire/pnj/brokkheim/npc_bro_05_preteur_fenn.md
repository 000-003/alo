# 🔨 Prêteur Fenn — `NPC_BRO_05`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_05` |
| **Nom affiché** | Prêteur Fenn |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Rachat/enchères) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Halle du Marteau |
| **Niveau / HP / MP** | 40 / 5 000 / 3 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Fenn tient le comptoir de prêt et d'enchères sous la grande horloge de la Halle du Marteau. Il rachète les biens dont les forgerons veulent se débarrasser, organise des ventes aux enchères d'objets rares et prête de l'Yrd contre intérêt. Ce que personne ne sait, c'est que Fenn ne conserve pas les objets qu'il rachète — certains disparaissent, récupérés par des acheteurs masqués qui arrivent par les Canaux de Refroidissement. Il a des liens avec le Receleur `NPC_BRO_48` et le Marchand d'Eau `NPC_BRO_26`, et sert de banquier occulte à la Manufacture d'Automates.
- **Traits** : affable, calculateur, toujours souriant mais ses yeux ne rient jamais ; compte les secondes entre chaque parole.
- **Voix** : douce, enveloppante, hypnotique. « Un prêt ? Mais bien sûr. L'Yrd travaille pour toi, mon ami. Et pour moi. Un peu. Juste assez. »
- **Relations** : Receleur `NPC_BRO_48` (acheteur discret aux enchères) ; Marchand Eau `NPC_BRO_26` (prête pour financer les livraisons) ; Maîtresse Vera `NPC_BRO_04` (finance ses projets d'automates) ; Marchand Rune `NPC_BRO_03` (voisin de hall, concurrent amical).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_05_01` | K0 | pret, yrd | Prêt d'Yrd contre intérêt — prêt rapide, remboursement sous 7 jours | — |
| 2 | `QI_BRO_05_02` | K0 | encheres, vente | Organisation d'enchères d'objets rares — outils, armes, composants | — |
| 3 | `QI_BRO_05_03` | K0 | rachat, objet | Rachat de tout objet — il trouve toujours un acheteur | — |
| 4 | `QI_BRO_05_04` | K1 | disparition, objets | Certains objets rachetés disparaissent — ils partent par les Canaux de Refroidissement | `AFF>=60` |
| 5 | `QI_BRO_05_05` | K1 | receleur, reseau | Le Receleur `NPC_BRO_48` est un de ses acheteurs réguliers — le Marché Noir a ses entrées | `AFF>=65` |
| 6 | `QI_BRO_05_06` | K1 | eau, financement | Il prête de l'argent au Marchand d'Eau `NPC_BRO_26` pour financer ses livraisons | — |
| 7 | `QI_BRO_05_07` | K2 | automates, finance | Il finance secrètement les projets d'automates de Vera `NPC_BRO_04` — en échange d'un modèle personnalisé | `AFF>=85` |
| 8 | `QI_BRO_05_08` | K2 | comptes, manufacture | Il tient les comptes de la Manufacture d'Automates — des flux d'Yrd qui ne passent pas par le Conseil | `QUEST:QST_BRO_COMPTES_01` |
| 9 | `QI_BRO_05_09` | K3 | canaux, trafic | Les Canaux de Refroidissement sont une route de contrebande — Fenn les utilise pour transporter des automates défectueux hors de Brokkheim vers des acheteurs qui ne posent pas de questions. Les automates « défectueux » sont ceux qui commencent à penser | JAMAIS — déflection : *(son sourire se fige. Il pose sa main sur ton poignet. Ses doigts sont froids.)* « Les canaux transportent de l'eau. Rien que de l'eau. L'eau ne parle pas. Tu devrais faire pareil. » *(il retire sa main et reprend son sourire comme on remet un masque.)* |
| 10 | `QI_BRO_05_10` | KX | *(hors sujet)* | *(il te tend une pièce d'Yrd)* « Tiens. La première est toujours gratuite. » | — |

## 4. Chaînage économique & quêtes

- **Marchand** : `!loan` (prêt d'Yrd), `!auction` (enchères), `!sell_item` (revente).
- Connecté aux fils **⚙️ Les Automates** et **💧 Le Pacte des Eaux**.
- Donneur de `QST_BRO_COMPTES_01` (quête des comptes de la Manufacture).

## 5. Intégration Bot

- **Accueil** (`!parler preteur fenn`) : *(il te sourit, les mains croisées sur son comptoir)* « Ah, un visiteur ! Tu as soif ? Je n'ai pas d'eau, mais j'ai de l'Yrd. C'est mieux, non ? »
- `!loan` (prêt), `!auction` (enchères), `!sell_item` (revente).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « trafic d'automates conscients » réservé à l'orchestrateur.
