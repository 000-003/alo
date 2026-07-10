# ⛏️ Huissier du Conseil — `NPC_GRA_28`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_28` |
| **Nom affiché** | Huissier du Conseil |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Salle du Conseil |
| **Niveau / HP / MP** | 18 / 1 100 / 280 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Huissier cérémoniel de la Salle du Conseil, il annonce les visiteurs et maintient le protocole. Il sert le Conseil depuis quarante ans et connaît chaque recoin protocolaire. Depuis peu, il remarque que certains visiteurs n'ont pas d'ombre de poussière — comme s'ils traversaient les murs sans soulever un grain de granit. Il en a parlé à l'Archiviste (`NPC_GRA_26`) et au Vice-Chancelier (`NPC_GRA_27`), mais aucun n'a su lui expliquer. Lié au fil **🔒 Le Coffre Qui Respire** : les visiteurs sans ombre viennent du sous-sol de la Banque.
- **Traits** : cérémonieux, formaliste, observateur, discrets troubles.
- **Voix** : Voix de stentor protocolaire, mais qui faiblit quand il parle des ombres. « Annonce-toi, voyageur. La Pierre entend ton nom. »
- **Relations** : `NPC_GRA_26` (Archiviste — confident) ; `NPC_GRA_27` (Vice-Chancelier — supérieur) ; `NPC_GRA_30` (Banquier — lui a signalé des allées et venues nocturnes).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_28_01` | K0 | conseil, protocole | Annonce des visiteurs, règles de la Salle du Conseil | — |
| 2 | `QI_GRA_28_02` | K0 | horaire, seance | Horaires des séances du Conseil — jours pairs, 14h-18h | — |
| 3 | `QI_GRA_28_03` | K0 | granzam, etiquette | Étiquette de Granzam — usage du marteau de cérémonie | — |
| 4 | `QI_GRA_28_04` | K1 | ombre, absence | Certains visiteurs n'ont pas d'ombre de poussière sur leurs bottes | `AFF>=60` |
| 5 | `QI_GRA_28_05` | K1 | mur, traversee | Il a vu un visiteur « sortir » d'un mur de la Salle du Conseil à minuit | `AFF>=65` |
| 6 | `QI_GRA_28_06` | K1 | banquier, nuit | Le Banquier (`NPC_GRA_30`) est venu un soir — « pour un dépôt tardif » | — |
| 7 | `QI_GRA_28_07` | K2 | sous_sol, banque | Les visiteurs sans ombre viennent tous du côté de la Banque — jamais de l'entrée principale | `AFF>=85` |
| 8 | `QI_GRA_28_08` | K2 | coffre, battement | Il a senti le sol vibrer à l'heure de la fermeture de la Banque — « comme un battement de cœur » | `QUEST:QST_GRA_HUISSIER_OMBRE` |
| 9 | `QI_GRA_28_09` | K3 | crypte, acces | Les visiteurs sans ombre sont des émissaires d'une crypte sous la Banque — une salle qui « respire » et qui communique avec le Cœur de Granit `NPC_GRA_00` par un réseau de failles | JAMAIS — déflection : *(il ajuste son col, regarde autour de lui)* « Je n'ai rien dit. Le Conseil n'aime pas qu'on parle des visiteurs sans nom. » |
| 10 | `QI_GRA_28_10` | KX | *(tout le reste)* | *(il frappe le sol de son bâton)* « La Salle du Conseil n'est pas un bazar. Protocole. » | — |

## 4. Chaînage économique & quêtes

- **Service** : `!annoncer <joueur>` (protocole d'accès au Conseil).
- Porteur du fil **🔒 Le Coffre Qui Respire** (visiteurs sans ombre).
- Donneur de `QST_GRA_HUISSIER_OMBRE` : enquête sur les visiteurs nocturnes.

## 5. Intégration Bot

- **Accueil** (`!parler huissier`) : *Droit comme un piquet devant la porte de la Salle du Conseil, bâton cérémoniel à la main.* « Nomme-toi, et la Pierre t'entendra. »
- `!annoncer <joueur>` actif à la Salle du Conseil.
- `NPC_SECRET_PROBED` slot 9 : hook « crypte respirante sous la Banque » pour l'orchestrateur.
