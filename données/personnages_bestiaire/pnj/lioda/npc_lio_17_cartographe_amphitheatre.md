# 🎭 Cartographe Amphithéâtre — `NPC_LIO_17`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_LIO_17` |
| **Nom affiché** | Cartographe Amphithéâtre |
| **Race** | Puca |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (cartes du donjon) |
| **Zone** | `ZONE_PUC_CAP_001` — Lioda, Amphithéâtre Oublié |
| **Niveau / HP / MP** | 30 / 2 200 / 450 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité (matériau LLM)

- **Bio** : cartographe de l'Amphithéâtre Oublié, il dresse les plans du donjon. Il a marqué une salle « muette » — une pièce où aucun son ne résonne, où ses propres pas ne font pas d'écho. La salle se trouve au centre exact du donjon.
- **Traits** : minutieux, inquiet de ce qu'il cartographie.
- **Voix** : posée, qui chuchote de crainte d'être entendue (« Cette salle… je l'ai marquée en tremblant. »).
- **Relations** : Gardien Amphithéâtre `NPC_LIO_16` (entrée) ; Gardien du Donjon `NPC_LIO_64` (relais) ; Archiviste des Portées `NPC_LIO_26` (copies).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_LIO_17_01` | K0 | carte, donjon | Ses plans de l'Amphithéâtre Oublié | — |
| 2 | `QI_LIO_17_02` | K0 | service, revente | Vente/location des cartes aux raiders | — |
| 3 | `QI_LIO_17_03` | K0 | amphitheatre, plan | L'organisation du donjon | — |
| 4 | `QI_LIO_17_04` | K1 | salle, muette | « J'ai marqué une salle "muette". Aucun son n'y entre. » | `AFF>=60` |
| 5 | `QI_LIO_17_05` | K1 | centre, donjon | La salle muette est au centre exact du donjon | `AFF>=65` |
| 6 | `QI_LIO_17_06` | K1 | echo, perdu | Ses propres pas ne font pas d'écho dans la salle | — |
| 7 | `QI_LIO_17_07` | K2 | salle, etrange | La salle muette annule la fréquence de la Note Suspendue `NPC_LIO_00` | `AFF>=85` |
| 8 | `QI_LIO_17_08` | K2 | cardinal, harmonie | La salle est le point où l'Harmonie de Fond du Cardinal s'interrompt — un nœud mort | `QUEST:QST_LIO_ORIGIN_01` |
| 9 | `QI_LIO_17_09` | K3 | partition, originelle | La salle muette est l'endroit où la Partition Originelle se tait — le Cardinal y a laissé un blanc, la seule faille de son monde | JAMAIS — déflection : *(il referme la carte)* « Ma salle ? Erreur de relevé. Si tu veux le divin, va au Lac. Moi je cartographie. » |
| 10 | `QI_LIO_17_10` | KX | *(hors sujet)* | *(il trace une ligne)* « Une carte ne répond qu'à qui sait lire. Là, je lis. » | — |

## 4. Chaînage économique & quêtes

- **Service de cartes** : vend plans du donjon `DUN_001`.
- Liaison : ses K2 sur la salle muette croisent ceux de la Note `NPC_LIO_00`.

## 5. Intégration Bot

- **Accueil** (`!parler cartographe`) : *« Plans de l'Amphithéâtre ? J'ai ça. Tu veux la salle muette ? … Je l'ai pas marquée. »*
- `!buy_map` (achat) ; `!dungeon_lore` (lore).
- `SYS_NPC_DIALOGUE` : scope = slots 1-8 (+K2 débloqués).
- `NPC_SECRET_PROBED` slot 9 : hook « Partition Originelle / salle muette » pour l'orchestrateur.
