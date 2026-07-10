# ⛏️ Marchand Charpente — `NPC_GRA_37`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_37` |
| **Nom affiché** | Marchand Charpente |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Steppes de Granit |
| **Niveau / HP / MP** | 25 / 1 600 / 380 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Importateur de bois de sapin des Steppes de Granit — un arbre rare qui pousse sur la roche, au bois presque aussi dur que la pierre. Ses poutres soutiennent les bâtiments de Granzam. Il a reçu une livraison la semaine dernière. La nuit, les poutres craquent. Toutes seules. Sans poids, sans vent, sans rien. Il a vérifié la qualité du bois : il est parfait, sec, sans insecte. Mais chaque soir vers minuit, un craquement sec parcourt le stock. Lié au fil **🏔️ Le Poids de la Montagne** : le bois réagit à la pression des strates — il « parle » quand la montagne bouge.
- **Traits** : solide, pratique, terre-à-terre, insomniaque.
- **Voix** : Râpeuse, comme du bois frotté. « Le sapin des Steppes, y a pas plus solide. Sauf quand il craque sans raison. Là, j'avoue, ça me rend nerveux. »
- **Relations** : `NPC_GRA_36` (Marchand Granit — client mutuel) ; `NPC_GRA_44` (Aubergiste — lui achète des poutres) ; `NPC_GRA_26` (Archiviste — lui a prêté une carte des Steppes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_37_01` | K0 | bois, vente | Vente de poutres en sapin des Steppes — 60-200 Yuld | — |
| 2 | `QI_GRA_37_02` | K0 | steppe, foret | La forêt des Steppes de Granit — accès, coupe, permis | — |
| 3 | `QI_GRA_37_03` | K0 | livraison, delai | Délais de livraison — 3-5 jours, volume limité | — |
| 4 | `QI_GRA_37_04` | K1 | poutre, craquement | Ses poutres craquent la nuit sans raison apparente | `AFF>=60` |
| 5 | `QI_GRA_37_05` | K1 | minuit, regulier | Les craquements commencent toujours vers minuit pile | `AFF>=65` |
| 6 | `QI_GRA_37_06` | K1 | qualite, sechage | Il a vérifié le séchage — bois parfait, pas d'humidité | — |
| 7 | `QI_GRA_37_07` | K2 | montagne, pression | L'Archiviste (`NPC_GRA_26`) a dit que le bois réagit aux mouvements des strates | `AFF>=85` |
| 8 | `QI_GRA_37_08` | K2 | carte, faille | La carte des Steppes montre une faille géologique sous la zone de coupe | `QUEST:QST_GRA_BOIS_QUI_CRAQUE` |
| 9 | `QI_GRA_37_09` | K3 | resonance, strate | Le bois de sapin des Steppes est « accordé » à la résonance des strates — il se contracte et se détend avec les pulsations du Cœur `NPC_GRA_00` à travers la roche, et les craquements sont des micro-séismes inaudibles pour les humains | JAMAIS — déflection : *(il frappe une poutre du poing)* « Elle craque. Tu l'entends ? C'est la montagne qui parle. Pas moi. » |
| 10 | `QI_GRA_37_10` | KX | *(tout le reste)* | *(il scie une planche sans vous regarder)* « Le bois, ça travaille. Comme nous. » | — |

## 4. Chaînage économique & quêtes

- **Vente** : poutres en sapin des Steppes.
- Porteur du fil **🏔️ Le Poids de la Montagne** (bois qui résonne avec les strates).
- Donneur de `QST_GRA_BOIS_QUI_CRAQUE` : enquête sur le bois qui craque la nuit.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_charpente`) : *Adossé à une pile de poutres, il en tâte une du doigt.* « Solide. Mais la nuit, elle pleure. »
- `!buy wood` actif aux Steppes de Granit.
- `NPC_SECRET_PROBED` slot 9 : hook « bois accordé aux strates » pour l'orchestrateur.
