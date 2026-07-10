# 🕯️ Receleur Ruines — `NPC_PEN_48`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_PEN_48` |
| **Nom affiché** | Receleur Ruines |
| **Race** | Spriggan |
| **Rôle** (`T_NPC.role_type`) | `BLACK_MARKET` (Antiquités volées) |
| **Zone** | `ZONE_SPR_CAP_001` — Penwether, Bibliothèque Enterrée (cache) |
| **Niveau / HP / MP** | 32 / 1 800 / 1 200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Receleur opérant depuis une cache dans la Bibliothèque Enterrée. Il achète et revend des antiquités volées — des pièces que les fouilleurs ne devraient pas avoir trouvées. Mais il a une pièce spéciale : une pièce de monnaie qui parle. Elle murmure des choses. Des secrets. Les accords du Pacte des Ombres. Des transactions du Cardinal. Il l'a mise dans une poche doublée de plomb, mais elle continue de parler à travers le tissu. Il a peur de ce qu'elle sait. Il ne la vendra jamais. Il l'écoute. Angle : pièce qui parle — lié au Pacte des Ombres.
- **Traits** : méfiant, ombreux, parle aux murs avant de parler aux gens.
- **Voix** : chuchotée, rapide. « J'ai des pièces. Des vraies. Des qui viennent de là où tu penses. Et j'en ai une qui vient d'où tu ne penses pas. Celle-là, elle raconte des histoires. »
- **Relations** : `NPC_PEN_29` (cache dans sa bibliothèque — elle ne sait pas) ; `NPC_PEN_31` (lui achète des antiquités) ; `NPC_PEN_37` (lui achète des reliques) ; `NPC_PEN_45` (lui vend des trouvailles) ; `NPC_PEN_35` (lié au Pacte des Ombres) ; `NPC_PEN_47` (soupçonné de voler ses colis) ; `NPC_PEN_49` (client discret) ; `NPC_SWI_03` (la clé qui n'ouvre rien, liée au pacte).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu | Condition |
|---|---|---|---|---|---|
| 1 | `QI_PEN_48_01` | K0 | receleur, objets | Marché noir d'antiquités volées depuis la Bibliothèque Enterrée | — |
| 2 | `QI_PEN_48_02` | K0 | cache, bibliotheque | Cache dans la Bibliothèque Enterrée — accès par une trappe sous les rayonnages | — |
| 3 | `QI_PEN_48_03` | K0 | prix, objets | Prix variables — 50-2000 Yrds selon la rareté | — |
| 4 | `QI_PEN_48_04` | K1 | piece, parle | Une pièce de monnaie qui murmure des secrets | — |
| 5 | `QI_PEN_48_05` | K1 | poche, plomb | Garde la pièce dans une poche doublée de plomb — elle parle à travers | `AFF>=60` |
| 6 | `QI_PEN_48_06` | K1 | pacte, ombres | La pièce raconte les accords du Pacte des Ombres | `AFF>=65` |
| 7 | `QI_PEN_48_07` | K2 | piece, cardinal | La pièce contient un enregistrement des transactions du Cardinal | `AFF>=80` |
| 8 | `QI_PEN_48_08` | K2 | piece, cle | La pièce et `NPC_SWI_03` sont liées — la clé ouvre ce que la pièce décrit | `AFF>=85` |
| 9 | `QI_PEN_48_09` | K3 | piece, ledger | La pièce n'est pas une pièce — c'est un fragment du registre des transactions du Cardinal. Chaque mot qu'elle murmure est une ligne de la comptabilité du serveur. Le Pacte des Ombres n'est pas un pacte magique : c'est le protocole d'accord entre instances du Cardinal. La pièce est un enregistrement des transactions illicites du serveur avec Duskarn | JAMAIS — déflection : *(il sort la pièce de sa poche, la tient entre ses doigts. Elle brille d'une lueur noire.)* « Tu veux l'entendre ? *(la pièce murmure)* …Non. Pas toi. Pas maintenant. *(il la rempoche)* Elle est à moi. Mes secrets. Mes affaires. » |
| 10 | `QI_PEN_48_10` | KX | *(hors sujet)* | « La meilleure marchandise est celle que personne ne devrait posséder. » | — |

## 4. Chaînage économique & quêtes

- **BLACK_MARKET** : `!buy_black_pen` (achat au marché noir), `!sell_hot_pen` (vente d'objets volés).
- Fil **🔑 Pacte des Ombres** avec `NPC_PEN_35`, `NPC_SWI_03`, Duskarn.
- Porteur du fil **🔑 Pacte des Ombres** : pièce qui parle = protocole d'accord du Cardinal.
- Client/Fournisseur de `NPC_PEN_31`, `NPC_PEN_37`, `NPC_PEN_45`, `NPC_PEN_49`, `NPC_PEN_29` (cache).

## 5. Intégration Bot

- **Accueil** (`!parler receleur ruines`) : *(Il émerge de l'ombre entre deux rayonnages)* « T'as des choses à vendre ou tu veux acheter ? Dans les deux cas, parle pas trop fort. Les livres ont des oreilles. » *(une pièce murmure dans sa poche)* |
- `!buy_black_pen` — achat, `!sell_hot_pen` — vente.
- `SYS_NPC_DIALOGUE` : scope = slots 1-8.
- `NPC_SECRET_PROBED` slot 9 : hook « pièce = registre des transactions du Cardinal/Protocole d'accord Duskarn » réservé à l'orchestrateur.
