# ⛏️ Marchand de Mithril — `NPC_GRA_68`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_68` |
| **Nom affiché** | Marchand de Mithril |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Mine de Mithril |
| **Niveau / HP / MP** | 42 / 3 400 / 5 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Seul marchand autorisé à vendre du mithril à Granzam — une exclusivité concédée par le Conseil (décret D15). Il travaille à l'entrée de la Mine de Mithril, où il pèse et vend le minerai aux forgerons de la ville. Depuis qu'il a reçu un lingot du fond du puits −45, il a remarqué que le poids du mithril varie : un lingot de même taille pèse 2 kg un jour, 1,7 kg le lendemain. Il a pesé vingt fois le même lingot : jamais le même résultat. Il ignore que c'est la corruption du seed qui fait fluctuer la densité du métal. Il ne vend ce lingot qu'à des clients de confiance — comme le Maître Forgeron Lames (`NPC_GRA_60`). (Angle : lingot qui ne pèse rien.)
- **Traits** : commerçant, discret, prudent, mystifié.
- **Voix** : Voix léprée, comme s'il comptait toujours. « Le mithril est le métal le plus stable du monde. Sauf quand il décide de flotter. »
- **Relations** : `NPC_GRA_60` (Forgeron Lames — meilleur client), `NPC_GRA_16` (Gardien Mine — le laisse opérer), `NPC_GRA_64` (Gardien Donjon — collègue de site), `NPC_GRA_03` (Bofrik — client occasionnel), `NPC_GRA_22` (Maître Forgeron — client).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_68_01` | K0 | mithril, vente | Il vend du mithril. Prix : 2000 Yuld/kg. | — |
| 2 | `QI_GRA_68_02` | K0 | exclusivite, D15 | Il a l'exclusivité de la vente de mithril par décret D15 du Conseil. | — |
| 3 | `QI_GRA_68_03` | K0 | mine_mithril, entree | Il tient son comptoir à l'entrée de la Mine de Mithril. | — |
| 4 | `QI_GRA_68_04` | K1 | poids, variable | Un même lingot pèse différemment chaque jour. | `AFF>=60` |
| 5 | `QI_GRA_68_05` | K1 | lingot, fluctuation | Il a pesé le même lingot vingt fois : vingt résultats différents. | `AFF>=65` |
| 6 | `QI_GRA_68_06` | K1 | forgeron_lames, confident | Le Maître Forgeron Lames (`NPC_GRA_60`) a aussi remarqué. « Le métal est instable. » | — |
| 7 | `QI_GRA_68_07` | K2 | correction, cardinal | La fluctuation suit un cycle de 24h. Le poids est stable à minuit pile. | `AFF>=85` |
| 8 | `QI_GRA_68_08` | K2 | mine_profonde, -45 | Plus le métal vient de profondeur, plus la fluctuation est forte. | `QUEST:QST_GRA_POIDS_MITHRIL` |
| 9 | `QI_GRA_68_09` | K3 | mithril, densite_seed | La densité du mithril fluctue car sa génération est en conflit avec la corruption du seed — il est partiellement « re-généré » à chaque tick serveur. | JAMAIS — déflection : *(il range le lingot sous son comptoir)* « Le mithril est capricieux. Il a ses humeurs. Je ne les commente pas. » |
| 10 | `QI_GRA_68_10` | KX | *(tout le reste)* | *(il soupèse un lingot)* « Aujourd'hui il pèse 2,1 kg. Hier 1,8 kg. Demain… qui sait ? » | — |

## 4. Chaînage économique & quêtes

- Marchand : achète et vend du mithril.
- Porteur du fil **⛏️ Le Filonan** (mithril fluctuant = corruption seed).
- Donneur de `QST_GRA_POIDS_MITHRIL` : enquêter sur la variation de poids du mithril.

## 5. Intégration Bot

- **Accueil** (`!parler marchand_mithril`) : *Une balance en pierre devant lui, il tient un lingot comme s'il suspectait un tour.*.  « Tu veux du mithril ? Prends-le. Mais vérifie le poids deux jours de suite. Tu verras ce que je veux dire. »
- `!acheter_mithril <poids>` / `!vendre_mithril <lingot>` (commerce).
- `NPC_SECRET_PROBED` slot 9 : hook « mithril fluctuant = seed en conflit de génération » pour l'orchestrateur.