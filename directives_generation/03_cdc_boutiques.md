# 🏪 CDC-SHP-01 — Boutiques & Inventaires différenciés par zone (D35 + D36)

> **Destinataire** : modèle générateur délégué. Document autoporteur : tout ce qui n'y figure pas est INTERDIT.
> **Objectif PE** : chaque boutique de chaque ville vend des **articles différents**, qui varient selon la zone et **ses besoins** (ce qu'elle produit est abondant et moins cher ; ce qui lui manque est importé et plus cher ; ce qui contredit sa culture est absent).
> **Dépendances dures** : le roster PNJ de la ville (lot 2.x livré) + les lots items I-1 et I-2 (`02_cdc_items.md`). **Ne pas démarrer une ville dont une dépendance manque.**

---

## 0. RÈGLES D'OR (D37 — violations = lot refusé)

1. **1 boutique = 1 PNJ** de `role_type` `MERCHANT` ou `BLACK_MARKET` du roster de la ville (`_index_pnj.md`). Aucune boutique sans propriétaire, aucun PNJ marchand sans boutique.
2. **1 boutique = 1 fichier** : `données/game_design/boutiques/<ville>/shop_<ville>_<nn>_<slug>.md` · ID : `SHOP_<VILLE>_<NN>` où `<VILLE>_<NN>` = exactement ceux du PNJ propriétaire (ex. Vieux Cort `NPC_SWI_21` → `SHOP_SWI_21`).
3. **Ne référencer que des `Item_ID` existants** (lots livrés : `ARM_TET_*`, `CSM_*`, `WPN_*`, `MAT_*`). Un article souhaité dont l'item n'existe pas → ligne dans l'annexe `[BESOIN_ITEM]` de l'index de ville, JAMAIS dans l'inventaire.
4. **Ne jamais modifier** les fiches PNJ, les tables MLD, l'atlas, les commandes. Seuls livrables : fichiers boutiques + `_index_boutiques_<ville>.md`.
5. Prix : ceux de la fiche item, modulés UNIQUEMENT par §3-R4. Jamais inventés.
6. Aucun code. Markdown seul. Français.

---

## 1. Contrat de fiche boutique (D35) — gabarit à copier

```markdown
# <émoji ville> <Enseigne> — `SHOP_<VILLE>_<NN>`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_<VILLE>_<NN>` |
| **Propriétaire** | <Nom> `NPC_<VILLE>_<NN>` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | `ZONE_XXX_XXX_NNN` — <ville>, <sous-lieu du roster> |
| **Type** | <BOUTIQUE | ÉTAL | MARCHÉ NOIR | TAVERNE> |
| **Accès** | <libre | AFF>=n | quête | nuit uniquement> |

## 2. Inventaire (<n> articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `XXX_XXX_NNN` | <nom> | T<n> | <prix modulé §3-R4> | LOCAL / IMPORT <ville source> | <n ou ∞> | <jour/semaine> | <— ou AFF>=n> |

## 3. Politique de rachat
- **Rachète** : <catégorie(s) de MAT_*/junk conforme à la spécialité> à 25% de la valeur.
- **Refuse** : <objets liés, objets volés (sauf MARCHÉ NOIR), catégorie absente §2-D36>.

## 4. Ancrage zonal
<2-4 phrases : pourquoi CE stock dans CETTE ville — filière locale, besoin comblé, manque assumé. Citer ≥1 PNJ fournisseur ou client par son ID.>

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_<VILLE>_<NN>` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
```

---

## 2. D36 — Matrice de différenciation zonale (imposée)

| Ville | PRODUIT (local, −20%) | BESOIN (import, +40%) | ABSENT (jamais en rayon) | 3 signatures minimum |
|---|---|---|---|---|
| **Alne** 🌳 | services, cartes, parchemins, généraliste T1-T2 des 9 races | spécialités raciales T3+ | armes de guerre T4 (marché noir Kael `NPC_ALN_07` uniquement) | Poivre d'Alne · cartes d'Alba · sève d'Yggdrasil |
| **Gattan** 🔥 | plaque, armes lourdes, anti-HEAT, verre volcanique | bois, herbes fraîches, tissus légers | équipement de vol Sylph (embargo de guerre) | Heaume de Basalte · bière « Haleine de Logi » · œufs de salamandre |
| **Voulg** ⚒️ | surplus militaire, explosifs, gemmes de feu, équipement d'arène | nourriture de garnison, potions de soin | luxe, cosmétique | obus de Bôm · ragoût de lave · lame d'arène |
| **Swilvane** 🍃 | rapières/dagues, équipement de vol, potions MP, plumes | minerai et métal (Brokkheim), viande rouge | plaque lourde (culture du vol) | cristal de brise · truite du Zéphyr · ailes d'apparat |
| **Freelia** 🐾 | arcs, cuirs, familiers et dressage, viande de savane | métal forgé, parchemins | cages et pièges à bêtes (tabou racial) | sifflet de dressage · arc des Collines · baume pour griffes |
| **Archipel** 🌊 | potions de soin (meilleures du monde), anti-OXYGEN, perles, poisson | métal (rouille), cuir sec | torches, armes de feu | perle vivante · élixir des Lagunes · écaille abyssale |
| **Lioda** 🎭 | instruments, parchemins de buff musical, cosmétique de scène | armes et armures (peuple non guerrier) | armes lourdes | luth des Prairies Chantantes · partition de buff · masque de scène |
| **Duskarn** 🌑 | dagues, antidotes ET venins, vision nocturne | nourriture (canyon stérile), bois | objets de lumière sacrée | fiole d'obscurité · dague du crépuscule · élixir noctambule |
| **Granzam** ⛏️ | gemmes, outils de minage, maille, lances de phalange | herbes, poisson, tissus fins | équipement de vol (les Gnomes volent mal) | gemme de Granzam · lance de phalange · granit gravé |
| **Brokkheim** 🔨 | forge fine T3-T4, **mithril (exclusivité mondiale, D15)**, enchantements, outils de craft | denrées alimentaires, cuirs bruts | contrefaçons, rabais (fierté artisanale : jamais de −20% ici, même en LOCAL) | lingot de mithril · marteau de maître · rune de forge |
| **Penwether** 🕯️ | reliques, antiquités, parchemins anciens, illusion | tout article « neuf » courant | équipement T1 neuf (ici, tout a déjà vécu) | relique authentifiée · boîte de Tenebris · lanterne des ruines |

*(Voulg et Alne comprises : 11 localités marchandes ; les zones annexes passent par les marchands 10-19 du roster de leur ville-mère.)*

## 3. Règles d'inventaire (mesurables — c'est ce qui sera recetté)

- **R1 — Panier universel** : 6 articles autorisés dans toutes les villes, à l'épicier/taverne UNIQUEMENT : potion de soin mineure, potion de mana mineure, ration de voyage, antidote standard, parchemin de retour, torche. L'index du lot I-1 tague ces 6 items `[UNIVERSEL]`. **Exception** : Archipel ne vend pas de torche (D36).
- **R2 — Exclusivité intra-ville** : hors panier universel, un `Item_ID` apparaît dans **une seule** boutique de la ville.
- **R3 — Exclusivité mondiale** : chaque ville détient **≥10 `Item_ID` introuvables dans toute autre ville** (ses signatures et produits locaux). Liste récapitulée dans l'index de ville.
- **R4 — Prix modulés** : LOCAL = prix fiche −20% · IMPORT = prix fiche +40% (nommer la ville source, qui doit PRODUIRE cet article dans sa colonne D36) · arrondi aux 5 Yrds · plancher anti-arbitrage : prix de vente boutique ≥ 2× la valeur de revente (25%). Brokkheim : jamais de −20%.
- **R5 — Taille** : 6-12 articles (BLACK_MARKET : 4-8, accès conditionné AFF ou quête, peut vendre les « ABSENT » de sa ville — c'est sa raison d'être).
- **R6 — Tiers** : T1-T2 libres · T3 ≤4 par boutique · T4 ≤2 par VILLE, toujours sous condition (titre, AFF>=80, quête) · **T5 jamais en boutique** (D13).
- **R7 — Rachat** : chaque `MAT_*` du lot I-3 doit être racheté par ≥1 boutique de la ville de son territoire (le chasseur local vend toujours ses drops quelque part).
- **R8 — Cohérence PNJ** : l'inventaire matérialise la spécialité déjà écrite au roster (Vieux Cort vend des rapières et dagues, pas des marteaux). En cas de conflit roster/matrice : le roster gagne, noter l'écart dans `[QUESTIONS_LOT]`.

## 4. Livraison par ville (ordre imposé)

| Lot | Ville | Prérequis |
|---|---|---|
| C-1 | Gattan (25 MERCHANT + 2 BLACK_MARKET) | I-1 + I-2 livrés |
| C-2 | Alne (25 + 6) | I-1 + I-2 |
| C-3 | Swilvane (28 + 2) | I-1 + I-2 |
| C-4 | Voulg (~24 + 4) | I-1 + I-2 |
| C-5… | chaque nouvelle ville, dans l'ordre des lots PNJ 2.6→2.12 | roster livré + I-1/I-2 |

Chaque lot livre : N fiches boutiques + `_index_boutiques_<ville>.md` contenant : table récapitulative (SHOP_ID | PNJ | Sous-lieu | Nb articles | Nb LOCAL/IMPORT), la **liste des ≥10 exclusifs mondiaux (R3)**, la preuve R2 (aucun doublon intra-ville), et les annexes `[BESOIN_ITEM]` / `[QUESTIONS_LOT]`.

## 5. Checklist de recette (Architecte)

1. Nb de boutiques = nb exact de MERCHANT + BLACK_MARKET du roster.
2. R1-R8 vérifiées ; matrice D36 respectée (sondage : 3 boutiques au hasard).
3. Zéro `Item_ID` inexistant ; zéro prix hors modulation.
4. Chaque boutique cite ≥1 fournisseur/client PNJ par ID (chaînage éco).
5. `[BESOIN_ITEM]` consolidé → alimente le lot items suivant.

## 6. Note d'architecture (hors périmètre générateur)

La table **`T_SHOPS`** (`cardinal_system_db/MLD_Logic/table_t_shops.md`) est créée par l'Architecte et fait foi pour le schéma (`SHOP_ID`, `owner_npc_id`, `zone_id`, `access_rule`, lignes d'inventaire ; `T_NPC.shop_ref` → `T_SHOPS.SHOP_ID`). Les commandes `!shop_list`/`!buy`/`!sell`/`!sys_market_price`/`SYS_SET_SHOP_PRICES` existent déjà ; `!sys_shop_restock` + `SYS_SHOP_RESTOCK` seront actées par l'Architecte à la recette du lot C-1 (règle de complétude). **Le générateur ne touche à rien de tout cela.**
