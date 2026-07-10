# ⛏️ Serveuse du Socle — `NPC_GRA_41`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_41` |
| **Nom affiché** | Serveuse du Socle |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 8 / 480 / 120 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Serveuse au Socle depuis cinq ans, elle connaît tous les habitués. Depuis une semaine, elle sert un client qui boit dans le noir. Littéralement — il s'assoit dans le coin sans lumière, commande une bière, la boit dans l'obscurité totale. Elle ne voit jamais son visage, seulement la forme de ses mains sur le verre. Il laisse toujours 50 Yuld de pourboire. Elle en a parlé au Tavernier (`NPC_GRA_40`), qui lui a dit de ne pas y faire attention. Mais elle a remarqué que le client ne laisse pas d'empreintes de pas sur le sol poussiéreux. Lié au fil **💎 La Gemme Qui Voit** : le client est un « observateur » — un émissaire de la gemme qui voit.
- **Traits** : discrète, efficace, curieuse, un peu effrayée.
- **Voix** : Douce, rapide, comme si elle chuchotait toujours. « Je lui sers sa bière. Il boit. Il paie. Mais il n'a pas d'ombre. »
- **Relations** : `NPC_GRA_40` (Tavernier — patron) ; `NPC_GRA_42` (Cuisinier — collègue) ; `NPC_GRA_44` (Aubergiste — lui a prêté une lampe).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_41_01` | K0 | service, taverne | Service à la taverne — commandes, nettoyage | — |
| 2 | `QI_GRA_41_02` | K0 | clients, habitudes | Les habitués du Socle — noms, boisson préférée | — |
| 3 | `QI_GRA_41_03` | K0 | carte, boissons | La carte des boissons — bières, vins de pierre, hydromel | — |
| 4 | `QI_GRA_41_04` | K1 | client, noir | Un client boit dans l'obscurité totale depuis une semaine | `AFF>=60` |
| 5 | `QI_GRA_41_05` | K1 | visage, cache | Elle n'a jamais vu son visage — il est toujours dans l'ombre | `AFF>=65` |
| 6 | `QI_GRA_41_06` | K1 | pourboire, eleve | Il laisse 50 Yuld de pourboire — trop pour une bière | — |
| 7 | `QI_GRA_41_07` | K2 | pas, empreinte | Il ne laisse pas d'empreintes sur le sol poussiéreux | `AFF>=85` |
| 8 | `QI_GRA_41_08` | K2 | tavernier, avertissement | Le Tavernier lui a dit de ne pas y faire attention — « certains clients aiment le noir » | `QUEST:QST_GRA_CLIENT_NOIR` |
| 9 | `QI_GRA_41_09` | K3 | observateur, gemme | Le client est un « observateur » projeté par la Gemme Qui Voit `NPC_GRA_35` — une image sans corps, une donnée du Cardinal qui prend forme pour surveiller les conversations de la taverne | JAMAIS — déflection : *(elle pose un verre sur le comptoir, la main tremblante)* « Il est là ce soir. Dans le coin. Ne le regarde pas. Surtout, ne le regarde pas. » |
| 10 | `QI_GRA_41_10` | KX | *(tout le reste)* | *(elle essuie une table)* « La taverne est pleine ce soir. Sauf le coin noir. Lui, il est toujours libre. » | — |

## 4. Chaînage économique & quêtes

- **Service** : vente de boissons au Socle.
- Porteuse du fil **💎 La Gemme Qui Voit** (client observateur dans le noir).
- Donneuse de `QST_GRA_CLIENT_NOIR` : enquête sur le mystérieux client sans ombre.

## 5. Intégration Bot

- **Accueil** (`!parler serveuse`) : *Plateau à la main, elle vous frôle en passant.* « Installe-toi. Je t'apporte une bière. Et ne regarde pas le coin noir. »
- `!order drink` actif à la Grande Halle (Le Socle).
- `NPC_SECRET_PROBED` slot 9 : hook « observateur projeté par le Cardinal » pour l'orchestrateur.
