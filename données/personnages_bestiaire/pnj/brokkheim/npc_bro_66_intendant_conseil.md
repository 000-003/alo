# 🔨 Intendant Conseil — `NPC_BRO_66`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_BRO_66` |
| **Nom affiché** | Intendant Conseil |
| **Race** | Leprechaun |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (gestion du trésor du Conseil) |
| **Zone** | `ZONE_LEP_CAP_001` — Brokkheim, Conseil Guildes (chambre du trésor) |
| **Niveau / HP / MP** | 32 / 2 500 / 600 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Il gère le trésor du Conseil — les impôts des forges, les taxes marchandes, les fonds secrets. Depuis trois lunes, les pièces d'or dans le coffre du fond tintent la nuit, sans que personne les touche. Il a cru à des rats jusqu'à ce qu'il voie une pièce sonner en parfait rythme avec le Pouls de la forge-mère `NPC_BRO_71`. Il a retiré les pièces qui tintent et les garde dans une bourse à part.
- **Traits** : comptable maniaque, intégrité visible, panique intérieure.
- **Voix** : précise, énonce les chiffres comme des verdicts.
- **Relations** : Dame Compagnie `NPC_BRO_65` (prépare les budgets du Lord avec elle) ; Marchand Charbon `NPC_BRO_52` (vérifie ses déclarations de ventes) ; Ombre Conseil `NPC_BRO_67` (l'observe en silence — déteste ça).

## 3. QI budget 10 = 3K0/3K1/2K2/1K3/1KX

| # | QI_ID | Niv | Sujet | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_BRO_66_01` | K0 | tresor, gestion | La gestion du trésor : recettes, dépenses, équilibre budgétaire | — |
| 2 | `QI_BRO_66_02` | K0 | impots, forges | Le système d'imposition des forges de Brokkheim (taux, assiette, exemptions) | — |
| 3 | `QI_BRO_66_03` | K0 | intendant, metier | Le métier d'intendant : chiffres, discrétion, probité | — |
| 4 | `QI_BRO_66_04` | K1 | pieces, tintent | Des pièces tintent seules dans le coffre du fond — il les a mises de côté | `AFF>=60` |
| 5 | `QI_BRO_66_05` | K1 | pieces, pouls | Les pièces tintent au rythme du Pouls de `NPC_BRO_71` — parfait synchronicité | — |
| 6 | `QI_BRO_66_06` | K1 | pieces, origine | Les pièces qui tintent viennent toutes du même lot — frappées il y a cent ans, année de la fondation | `AFF>=70` |
| 7 | `QI_BRO_66_07` | K2 | fonds, disparus | Un fonds secret a été prélevé du trésor le mois du premier tintement — personne n'a signé le bon de retrait | `AFF>=80` |
| 8 | `QI_BRO_66_08` | K2 | ombre, prelevement | L'Ombre `NPC_BRO_67` était présent le soir du prélèvement — il l'a « senti » plus que vu | `AFF>=90` |
| 9 | `QI_BRO_66_09` | K3 | pieces, mémoire | Les pièces tintent parce qu'elles contiennent une trace de mithril cardinal — fondues dans la même coulée que l'Enclume. Le trésor du Conseil est frappé avec le métal de l'Enclume : chaque pièce est un éclat du Cardinal, et elles s'appellent entre elles par le Pouls | JAMAIS — déflection : *(il referme le coffre, clé tournée deux fois)* « Les métaux précieux tintent. C'est leur nature. Certains alliages sonnent plus longtemps que d'autres — c'est de la métallurgie, pas un message. » |
| 10 | `QI_BRO_66_10` | KX | *(tout le reste)* | « Les comptes sont clairs. Le trésor est équilibré. Si tu veux vérifier, prends rendez-vous avec l'auditeur. » | — |

## 4. Chaînage économique & quêtes

- Service : gestion financière, change de monnaie, audit.
- K3 : les pièces = fragments de l'Enclume — fil Enclume + Pouls.
- `QST_BRO_TRESOR_01` : enquêter sur le fonds prélevé et les pièces qui tintent.

## 5. Intégration Bot

- **Accueil** (`!parler intendant`) : *« L'or se compte, se garde, se dépense. Il ne parle pas — sauf celui-là. »*
- `!tresor_brokkheim` : état des finances publiques (données économiques serveur).
