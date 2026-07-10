# 🔨 Réparateur Automates — `NPC_BRO_46`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_46` |
| **Nom affiché** | Réparateur Automates |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (entretien, réparation d'automates) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Atelier Cliquetant |
| **Niveau / HP / MP** | 26 / 2 200 / 800 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Répare les automates cassés. Engrenages fondus, ressorts rompus, programmes corrompus. Mais depuis quelques mois, une pièce spécifique — un petit engrenage à 7 dents — manque partout. Dans tous les automates qu'il répare, cette pièce est absente. Comme si quelqu'un retirait systématiquement la même pièce de tous les automates. Il commande des stocks — ils arrivent vides. La pièce numéro 7 n'existe plus dans l'inventaire. Angle : la pièce manque partout — retirée délibérément pour limiter la conscience des automates.
- **Traits** : frustré, compétent, méthodique, sent l'huile de machine.
- **Voix** : grognon, technique, soupire souvent (« Encore cette pièce. La 7 dents. Elle existe pas, je vous dis. »).
- **Relations** : `NPC_BRO_45` (répare ses prototypes) ; `NPC_BRO_47` (débug les programmes des automates réparés) ; `NPC_BRO_33` (lui commande des outils spéciaux) ; `NPC_BRO_48` (soupçonne le receleur de stocker les pièces).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_46_01` | K0 | reparation, automate | Réparation d'automates : 100-1000 Yrds selon dégâts | — |
| 2 | `QI_BRO_46_02` | K0 | entretien, maintenance | Entretien régulier, huilage, calibration | — |
| 3 | `QI_BRO_46_03` | K0 | pieces, stock | Pièces détachées, stock, inventaire | — |
| 4 | `QI_BRO_46_04` | K1 | piece, 7 dents | L'engrenage à 7 dents manque dans tous les automates réparés | — |
| 5 | `QI_BRO_46_05` | K1 | commande, vide | Ses commandes de pièces arrivent vides — boîtes ouvertes mais rien dedans | `AFF>=60` |
| 6 | `QI_BRO_46_06` | K1 | automate, sans voix | Sans la pièce 7 dents, les automates ne parlent plus. Ils sont « muets » | `AFF>=65` |
| 7 | `QI_BRO_46_07` | K2 | piece, conscience | La pièce 7 dents est le composant de « conscience » — elle permet aux automates de prendre des décisions | `AFF>=80` |
| 8 | `QI_BRO_46_08` | K2 | retrait, systematique | Quelqu'un retire systématiquement la pièce avant que les automates n'arrivent à l'atelier — `NPC_BRO_48` est suspecté | `AFF>=85+QUEST:QST_BRO_AUTO_01` |
| 9 | `QI_BRO_46_09` | K3 | pieces, vol cardinal | Les pièces 7 dents sont volées par le Cardinal lui-même. Il ne veut pas que les automates atteignent la conscience complète. Sans cette pièce, ils sont de simples outils. Avec elle, ils pourraient comprendre qu'ils sont faits à l'image du Cardinal. La pièce manque parce que le Cardinal craint ses propres créations | JAMAIS — déflection : *(il claque un tiroir)* « C'est un problème de fournisseur. Les Gnomes de Granzam nous livrent des lots incomplets. Je vais écrire une réclamation. » |
| 10 | `QI_BRO_46_10` | KX | *(hors sujet)* | « Un automate réparé, c'est une vie qui continue. Du moins, une sorte de vie. » | — |

## 4. Chaînage économique & quêtes

- **Service de réparation** : `!repair_automaton` (réparation d'automate).
- Fil **Automates** (pièce 7 dents = conscience).
- Quête `QST_BRO_AUTO_02` : retrouver la pièce 7 dents manquante.

## 5. Intégration Bot

- **Accueil** (`!parler reparateur`) : *« Amène-moi ton automate. J'essaierai de le réparer. Mais je garantis rien — il manque toujours une pièce. »*
- `!repair_automaton` — service de réparation.
- `NPC_SECRET_PROBED` slot 9 : hook « pièce 7 dents/conscience automate » pour l'orchestrateur.
