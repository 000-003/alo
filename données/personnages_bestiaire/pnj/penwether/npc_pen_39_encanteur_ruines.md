# 🕯️ Encanteur Ruines — `NPC_PEN_39`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_39` |
| **Nom affiché** | Encanteur Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` (Enchères aux ruines) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Marché 7 Façades |
| **Niveau / HP / MP** | 15 / 550 / 700 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Maître des enchères au Marché 7 Façades. Il vend aux plus offrants des lots issus des ruines. Mais depuis quelques temps, des pièces partent sans qu'aucune offre n'ait été faite. Il frappe le marteau, annonce « Vendu ! », et personne n'a parlé. L'acheteur est invisible. L'argent apparaît sur le comptoir. Il continue les enchères parce que c'est son métier, mais il a peur. Angle : pièce part sans offre — acheteur invisible.
- **Traits** : théâtral, observateur, de plus en plus anxieux pendant les ventes.
- **Voix** : tonitruante, avec des blancs gênés. « Une magnifique lampe des ruines ! Qui dit 50 ? 50 !… 50 une fois… deux fois… VENDU ! *(chuchotement)* À personne, apparemment. »
- **Relations** : `NPC_PEN_32` (lui achète des lots de parchemins) ; `NPC_PEN_37` (lui fournit des reliques) ; `NPC_PEN_38` (annonce ses enchères) ; `NPC_PEN_48` (soupçonné d'être l'acheteur invisible).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_39_01` | K0 | encheres, ruines | Enchères d'objets des ruines au Marché 7 Façades | — |
| 2 | `QI_PEN_39_02` | K0 | lots, vente | Vends des lots hétérogènes — prix de départ 20 Yrds | — |
| 3 | `QI_PEN_39_03` | K0 | marteau, crie | Utilise un marteau d'ivoire des ruines, signature sonore | — |
| 4 | `QI_PEN_39_04` | K1 | vente, invisible | Des pièces partent sans offre — achat invisible | — |
| 5 | `QI_PEN_39_05` | K1 | argent, apparait | L'argent apparaît sur le comptoir, personne ne le pose | `AFF>=60` |
| 6 | `QI_PEN_39_06` | K1 | acheteur, inexistant | Il a essayé de ne pas frapper — la pièce est restée invendue 3 fois de suite | `AFF>=65` |
| 7 | `QI_PEN_39_07` | K2 | enchere, simulation | Le marché est simulé — certaines ventes sont des transactions internes du Cardinal | `AFF>=80` |
| 8 | `QI_PEN_39_08` | K2 | acheteur, cardinal | Le Cardinal lui-même achète des pièces par des comptes dormants | `AFF>=85` |
| 9 | `QI_PEN_39_09` | K3 | encheres, purge | Les enchères sans offre sont des purges de données. Le Cardinal retire des objets obsolètes de la simulation en les « vendant » à des comptes vides. L'argent qui apparaît est une compensation générée. L'acheteur invisible est le serveur qui rachète ses propres lignes de code pour les recycler | JAMAIS — déflection : *(il frappe le marteau. Rien ne se passe.)* « Parfois, le marteau ne fait pas de bruit. C'est la fatigue. Trop d'enchères. *(il frappe plus fort — le bruit est sourd)* « Vendu. À qui ? Au silence. » |
| 10 | `QI_PEN_39_10` | KX | *(hors sujet)* | « Une enchère sans offrant, c'est un cadeau du vide. On ne refuse pas un cadeau du vide. » | — |

## 4. Chaînage économique & quêtes

- **Merchant** : `!auction_pen` (enchérir), `!list_lots` (voir les lots).
- Fil **📜 Ruines** (purge de données du Cardinal).
- Client de `NPC_PEN_32`, `NPC_PEN_37`, lié à `NPC_PEN_48`.

## 5. Intégration Bot

- **Accueil** (`!parler encanteur ruines`) : *(Il lève son marteau)* « Enchères aujourd'hui ! Des ruines, des mystères, des affaires ! *(il baisse la voix)* Et si personne n'enchérit, ça part quand même. C'est la règle. » |
- `!auction_pen` — enchérir, `!list_lots` — lots.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « enchères sans offre = purge de données du serveur » réservé à l'orchestrateur.
