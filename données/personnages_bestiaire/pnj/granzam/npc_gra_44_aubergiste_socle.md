# ⛏️ Aubergiste du Socle — `NPC_GRA_44`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_44` |
| **Nom affiché** | Aubergiste du Socle |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Grande Halle |
| **Niveau / HP / MP** | 32 / 2 400 / 520 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Tient l'auberge attenante au Socle — six chambres, une suite, des lits de camp pour les mineurs de passage. Frère du Tavernier (`NPC_GRA_40`). Depuis un mois, la chambre 4 sent le fer. Pas de la rouille — du fer frais, comme une forge. Il a changé les draps, lessivé le sol, aéré trois jours. L'odeur revient. Un client a dit que le mur « saignait » en rêve. L'Aubergiste a bouché la chambre et dit qu'elle est en travaux. Lié au fil **🔒 Le Coffre Qui Respire** : la chambre 4 est au-dessus de la veine de fer qui passe sous la Banque — l'odeur remonte par les fissures.
- **Traits** : accueillant, pragmatique, discret, prudent.
- **Voix** : Voix d'aubergiste — professionnelle, rassurante. « Une chambre pour la nuit ? La 3 est libre. La 4 est en travaux. Depuis un mois. »
- **Relations** : `NPC_GRA_40` (Tavernier — frère) ; `NPC_GRA_41` (Serveuse — employée) ; `NPC_GRA_30` (Banquier — lui a proposé de déménager l'auberge) ; `NPC_GRA_37` (Marchand Charpente — lui a fourni les poutres).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_44_01` | K0 | auberge, chambre | Location de chambres — 30 Yuld/nuit, petit-déjeuner inclus | — |
| 2 | `QI_GRA_44_02` | K0 | etage, disposition | Disposition de l'auberge — 6 chambres, salle commune | — |
| 3 | `QI_GRA_44_03` | K0 | confort, service | Services — bain chaud, repas, coffre personnel | — |
| 4 | `QI_GRA_44_04` | K1 | chambre_4, odeur | La chambre 4 sent le fer frais — comme une forge | `AFF>=60` |
| 5 | `QI_GRA_44_05` | K1 | nettoyage, echec | Il a tout nettoyé — l'odeur revient en une journée | `AFF>=65` |
| 6 | `QI_GRA_44_06` | K1 | reve, sang | Un client a dit que le mur de la chambre 4 saignait dans son rêve | — |
| 7 | `QI_GRA_44_07` | K2 | veine, sous_sol | Sous l'auberge passe une veine de fer qui relie la Banque | `AFF>=85` |
| 8 | `QI_GRA_44_08` | K2 | banquier, proposition | Le Banquier (`NPC_GRA_30`) lui a proposé de racheter l'auberge « pour la déplacer » | `QUEST:QST_GRA_CHAMBRE_FER` |
| 9 | `QI_GRA_44_09` | K3 | flux, donnees_fer | L'odeur de fer est une saturation de données ferreuses dans la roche — le flux d'information du Cardinal `NPC_GRA_00` traverse la veine de fer comme un conduit et s'infiltre dans la maçonnerie de l'auberge, et l'odeur est la signature physique de ce transfert | JAMAIS — déflection : *(il vous tient par l'épaule)* « La 4 ? Elle n'existe pas. Tu as rêvé. Tout le monde rêve de la 4. Prends la 3. » |
| 10 | `QI_GRA_44_10` | KX | *(tout le reste)* | *(il remet une clé sur le râtelier)* « L'auberge est pleine. Désolé. Réessaie demain. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!chambre <num>` (location pour la nuit).
- Porteur du fil **🔒 Le Coffre Qui Respire** (chambre 4 au-dessus de la veine de fer).
- Donneur de `QST_GRA_CHAMBRE_FER` : enquête sur la chambre qui sent le fer.

## 5. Intégration Bot

- **Accueil** (`!parler aubergiste`) : *Derrière le comptoir de l'auberge, il feuillette un registre.* « Une chambre ? J'ai de la place. Enfin, presque toutes. La 4 est… réservée. Depuis longtemps. »
- `!chambre <num>` actif à la Grande Halle (Auberge du Socle).
- `NPC_SECRET_PROBED` slot 9 : hook « saturation de données ferreuses » pour l'orchestrateur.
