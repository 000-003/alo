# ⚒️ Changeur Lave Yrd, Change Monnaie — `NPC_VOU_46`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_VOU_46` |
| **Nom affiché** | Changeur Lave Yrd |
| **Race** | Salamandre |
| **Rôle** (`T_NPC.role_type`) | `SERVICE` (changeur de monnaie) |
| **Zone** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Niveau / HP / MP** | 24 / 1 800 / 1 400 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité (matériau LLM)

- **Bio** : Yrd change la monnaie au Marché de la Lave. Toutes les devises des cités passent entre ses doigts — Yrds d'Alne, marks de Gattan, couronnes, pièces d'argent. Il a remarqué qu'une pièce frappée à Voulg n'a pas de cours à Gattan — ce qui est absurde, puisque Voulg et Gattan commercent officiellement. Quelqu'un a délibérément exclu cette pièce du marché gattanais. Et quelqu'un d'autre stocke des milliers de ces pièces dans des entrepôts secrets sous le marché. Yrd a compris que la monnaie est une arme.
- **Traits** : calme, calculateur, silencieux.
- **Voix** : posée, professionnelle (« Le cours du mark est stable aujourd'hui. La pièce de Voulg ? Elle n'a pas cours à Gattan. Pourquoi ? Pose la question à ceux qui frappent la monnaie. »).
- **Relations** : Horg `NPC_VOU_43` (échange viande contre pièces) ; Somb `NPC_VOU_49` (trafic de lingots) ; Serkan `NPC_VOU_31` (soupçonné de financer le stock de pièces).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_VOU_46_01` | K0 | change, taux | Les taux de change entre les monnaies des cités | — |
| 2 | `QI_VOU_46_02` | K0 | monnaies, cours | Les pièces en circulation, leur valeur | — |
| 3 | `QI_VOU_46_03` | K0 | marche, transactions | Les transactions financières au Marché de la Lave | — |
| 4 | `QI_VOU_46_04` | K1 | piece, voulg | Une pièce frappée à Voulg avec un cours inexistant à Gattan | `AFF>=60` |
| 5 | `QI_VOU_46_05` | K1 | cours, artificiel | Le cours de cette pièce est fixé artificiellement haut — par qui ? | `AFF>=65` |
| 6 | `QI_VOU_46_06` | K1 | stock, cache | Quelqu'un stocke massivement ces pièces — pour un retrait futur | — |
| 7 | `QI_VOU_46_07` | K2 | commanditaire, piece | Le commanditaire du stock est un officier du QG — Serkan `NPC_VOU_31` a accès aux fonds | `AFF>=85+QUEST:QST_SAL_FINANCE_01` |
| 8 | `QI_VOU_46_08` | K2 | lingots, echange | Les pièces sont échangées contre des lingots de Ryk `NPC_VOU_41` — la forge comme banque | `AFF>=90` |
| 9 | `QI_VOU_46_09` | K3 | monnaie, guerre | La pièce de Voulg sans cours à Gattan est une monnaie de guerre — frappée en prévision d'une invasion de Gattan, où elle remplacera la monnaie gattanaise après la conquête | JAMAIS — déflection : *(il fait tomber la pièce dans un sac)* « La devise de Voulg est stable. Les cours sont ceux du marché. Une pièce sans cours à Gattan ? C'est une pièce de collection. Rien de plus. La guerre ? Je change de la monnaie, pas des rumeurs. » |
| 10 | `QI_VOU_46_10` | KX | *(hors sujet)* | « L'argent n'a pas d'odeur. Et moi je n'ai pas d'opinion. » | — |

## 4. Chaînage économique & quêtes

- **Change** : `!exchange` (changer de la monnaie entre cités). Point d'entrée du **fil « Chaîne brisée »** (préparation économique de guerre).
- Donneur de `QST_SAL_FINANCE_01`.

## 5. Intégration Bot

- **Accueil** (`!parler yrd`) : *« Tu veux changer des Yrds ? Des marks gattanais ? Des couronnes ? J'ai le cours du jour. »*
- `!exchange` (change).
- `NPC_SECRET_PROBED` slot 9 : hook « monnaie de guerre / invasion Gattan » pour l'orchestrateur.
