# 🔨 Gardien Atelier — `NPC_BRO_16`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_16` |
| **Nom affiché** | Gardien Atelier |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `GUARD` (Gardien de l'Atelier Englouti — DUN_001) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Englouti |
| **Niveau / HP / MP** | 60 / 12 000 / 3 500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Le Gardien de l'Atelier Englouti monte la garde à l'entrée de l'ancien atelier — une section de la Forge-Mère effondrée il y a des cycles, aujourd'hui devenue un donjon. Personne ne se souvient de ce qui a causé l'effondrement. Le Gardien est là pour empêcher les curieux d'entrer… et pour empêcher ce qui vit dedans de sortir. Il entend des grattements dans la pierre, des coups d'enclume sans forgeron.
- **Traits** : nerveux, superstitieux, allume des cierges devant une petite statue de Brokk I ; parle tout seul pour se rassurer.
- **Voix** : tendue. « T'entends ? Les enclumes. Y a personne là-dedans depuis cent cycles. Mais les enclumes, elles frappent encore. »
- **Relations** : Commandant Gardes `NPC_BRO_09` (supérieur — lui a interdit d'y aller) ; Cartographe Atelier `NPC_BRO_17` (lui vend des cartes de la zone, même s'il n'y va jamais) ; Concierge Forge-Mère `NPC_BRO_20` (se plaint que la poussière de l'atelier remonte dans les conduits).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_16_01` | K0 | atelier, effondr | Il garde l'entrée de l'Atelier Englouti — un donjon (DUN_001) sous la Forge-Mère | — |
| 2 | `QI_BRO_16_02` | K0 | enclumes, fantomes | Des bruits d'enclume viennent des profondeurs — personne ne forge là-dedans | — |
| 3 | `QI_BRO_16_03` | K0 | effondrement, cause | Personne ne se souvient de ce qui a causé l'effondrement — il y a des cycles | — |
| 4 | `QI_BRO_16_04` | K1 | statue, brokk I | Il a une petite statue de Brokk I devant laquelle il allume un cierge chaque soir | `AFF>=60` |
| 5 | `QI_BRO_16_05` | K1 | grattements, murs | Il entend des grattements dans les murs — pas des rats, quelque chose de plus régulier | `AFF>=65` |
| 6 | `QI_BRO_16_06` | K1 | cartes, atelier | Le Cartographe `NPC_BRO_17` lui a vendu une carte — mais la carte montre des salles qui n'existent pas | — |
| 7 | `QI_BRO_16_07` | K2 | enclume, automatique | Un jour, le bruit d'enclume a suivi un rythme — le même que le Pouls `NPC_BRO_00` | `AFF>=85` |
| 8 | `QI_BRO_16_08` | K2 | effondrement, cause | L'effondrement n'était pas un accident — les piliers ont été coupés proprement, comme par un outil de précision | `QUEST:QST_BRO_ATELIER_01` |
| 9 | `QI_BRO_16_09` | K3 | dessous, pouls | L'Atelier Englouti s'est effondré sur une chambre secrète — une extension du niveau −7 où le Pouls `NPC_BRO_00` résonne plus fort. Les enclumes fantômes sont le Pouls qui frappe à travers les décombres | JAMAIS — déflection : *(il se signe)* « J'entre pas. J'entrerai pas. Même le Commandant `NPC_BRO_09` m'a dit de pas y aller. Y a des choses qui doivent rester enterrées. Et celles qui forgent sous terre, elles doivent y rester aussi. » |
| 10 | `QI_BRO_16_10` | KX | *(hors sujet)* | *(il compte les secondes entre chaque bruit d'enclume)* | — |

## 4. Chaînage économique & quêtes

- **Guard** : `!dungeon_access_bro_001` (accès donjon DUN_001).
- Connecté au fil **🔨 Le Pouls** via les enclumes fantômes.
- Donneur de `QST_BRO_ATELIER_01` (quête d'exploration de l'Atelier Englouti).

## 5. Intégration Bot

- **Accueil** (`!parler gardien atelier`) : *(il se tourne vers toi, les yeux plissés. Un bruit d'enclume résonne au loin.)* « T'entends ? … Tu veux entrer là-dedans ? T'es fou ou t'as un suicide programmé ? » |
- `!dungeon_access_bro_001` (accès DUN_001).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2).
- `NPC_SECRET_PROBED` slot 9 : hook « chambre secrète du Pouls sous l'atelier » réservé à l'orchestrateur.
