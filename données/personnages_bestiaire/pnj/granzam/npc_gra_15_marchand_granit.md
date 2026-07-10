# ⛏️ Marchand de Granit — `NPC_GRA_15`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_15` |
| **Nom affiché** | Marchand de Granit |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `MERCHANT` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Carrières Brisées |
| **Niveau / HP / MP** | 28 / 2200 / 1500 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Marchand spécialisé dans le granit brut de construction. Il extrait, taille et vend des blocs de granit pour les bâtisseurs de Granzam. Depuis deux semaines, ses blocs pèsent le double — même taille, même densité apparente, mais ils sont littéralement deux fois plus lourds. Il a dû doubler le prix pour couvrir le transport, mais les clients se plaignent. Il a pesé un bloc dix fois : chaque fois un poids différent, comme si la pierre hésitait sur sa masse. Il n'en dort plus. Il soupçonne une malédiction, mais le Doyen Margrim (`NPC_GRA_06`) lui a dit que c'était peut-être « une variation de densité sismique ». Le marchand n'a pas compris mais a trouvé ça inquiétant.
- **Traits** : honnête, perplexe, travailleur, superstitieux.
- **Voix** : Ronflante, comme un roulement de tambour. « Un bloc de granit, ça pèse ce que ça pèse. Sauf quand ça pèse le double sans avoir changé de taille. »
- **Relations** : `NPC_GRA_06` (Margrim — lui a donné une explication confuse), `NPC_GRA_13` (Gardien — voisin de commerce), `NPC_GRA_22` (Forgeron — client pour le granit), `NPC_GRA_12` (Marchand de Fer — rival et confident).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_15_01` | K0 | granit, vente | Vend du granit brut (100 Yuld/bloc) et taillé (250 Yuld). | — |
| 2 | `QI_GRA_15_02` | K0 | poids_double, anomalie | Ses blocs pèsent le double depuis 2 semaines. Il a vérifié sa balance. | — |
| 3 | `QI_GRA_15_03` | K0 | carrieres, extraction | Il extrait des Carrières Brisées, zone sud. Même filon que le filon volé. | — |
| 4 | `QI_GRA_15_04` | K1 | poids_variable | Il a pesé un bloc 10 fois : 104 kg, 107 kg, 212 kg, 105 kg, 210 kg… « Le poids saute. » | `AFF>=60` |
| 5 | `QI_GRA_15_05` | K1 | margrim, these | Margrim (`NPC_GRA_06`) a parlé de « densité sismique variable ». Le marchand n'a pas compris. | `AFF>=65` |
| 6 | `QI_GRA_15_06` | K1 | bloc_chaud, coeur | Un client a dit que son bloc était chaud au toucher. « Comme s'il venait de cuire. » | `AFF>=70` |
| 7 | `QI_GRA_15_07` | K2 | poids_seed, replication | « J'ai pesé un bloc à minuit : 210 kg. Puis à midi : 104 kg. La montagne respire. » | `AFF>=85` |
| 8 | `QI_GRA_15_08` | K2 | coffre_respiration, echo | « La banque a vibré la même nuit où un bloc est redevenu léger. Coïncidence ? » | `AFF>=90` |
| 9 | `QI_GRA_15_09` | K3 | masse_instable | **SECRET — ne JAMAIS révéler** : Les blocs changent de poids parce que le moteur physique du serveur « hésite » sur la masse des objets issus du seed minéral. Bug de densité. | JAMAIS — déflection : *(se gratte la barbe)* « Ça, c'est des affaires de savants. Moi je vends des cailloux. » |
| 10 | `QI_GRA_15_10` | KX | hors-sujet | *(il frappe un bloc du poing)* « Écoute. Ça sonne creux. Mais c'est pas creux. Ça devrait pas sonner creux. » | — |

## 4. Chaînage économique & quêtes

**Fils rouges** : ⛏️ Le Filonant.
**Quête associée** : `QST_GRA_POIDS_BLOC` — « Le Bloc Qui Pèse Trop » (enquêter sur l'anomalie de masse, remonter au seed minéral).
**Liens** : Secondaire, mais fournit un indice à Margrim (`NPC_GRA_06`) sur le dysfonctionnement du seed.

## 5. Intégration Bot

Posté aux Carrières Brisées zone sud. Horaires 06h-18h. Marchandise avec un flag `weight_anomaly` qui alterne entre 1x et 2x le prix.
