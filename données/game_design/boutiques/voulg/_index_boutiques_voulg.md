# ⚒️ Index des Boutiques — Voulg (Lot C-4)

> **Chantier** : Phase C — Boutiques (CDC-SHP-01, D35/D36). Lot **C-4 Voulg** (`ZONE_SAL_TWN_001`, forteresse militaire Salamander — ville-garnison frontalière). Produit à l'étape 24.
> **Couverture** : **24 / 24** boutiques (1 par PNJ `MERCHANT`/`BLACK_MARKET` du roster Voulg, lot 2.5) + index.
> **Statut** : ✅ **CLOS** (2026-07-09). Prérequis satisfaits : roster PNJ Voulg (lot 2.5, `NPC_VOU_00-99`) + items I-1/I-2/I-3/tête livrés.
> **Méthode** : reprise C-2/C-3 — allocation d'inventaires **disjointe scriptée** (R2 garanti par construction, 0 doublon vérifié), noms/tiers/prix **lus sur les fiches item réelles** (extraction disque), modulation LOCAL −20 % / IMPORT +40 % arrondie aux 5 Yrds.

> **Différenciateur de Voulg (vs Gattan capitale Salamander, vs Alne neutre, vs Swilvane aérien)** : **forteresse militaire brute** — la guerre est l'économie. En LOCAL (−20 %) : **surplus militaire** (armes lourdes de Kern `40`, armes d'arène de `27`), **explosifs** (artificerie de Bôm `63`), **gemmes de feu** (Rubis `42`/`64`), **minerai brut** des mines de soufre (Malakor `03`). En IMPORT (+40 %) : **nourriture de garnison** (Peppin `91` depuis Alne, Horg `43`) et **potions de soin** (Solf `59` depuis l'Archipel — Voulg brûle mais ne guérit pas). **ABSENT** : luxe et cosmétique (une garnison n'a que faire d'ornements). Trois signatures : **obus de Bôm** · **ragoût de lave** (Dorgan `50`) · **lame d'arène** (Sabre de Braise / Flamberge de Voulg, `27`).

---

## 1. Récapitulatif (24 boutiques)

| SHOP_ID | Propriétaire | Sous-lieu | Type | Articles | LOCAL / IMPORT |
|---|---|---|---|---|---|
| `SHOP_VOU_03` | Malakor | Mines de Soufre | BOUTIQUE | 8 | 8 L / 0 I |
| `SHOP_VOU_04` | Balrog Mur-de-Pierre | Quartier Général | BOUTIQUE | 8 | 3 L / 5 I |
| `SHOP_VOU_06` | Fyra Étincelle | Forge Magmatique | BOUTIQUE | 7 | 5 L / 2 I |
| `SHOP_VOU_12` | Marchand de Cendres | Plaines de Cendres (`HUNT_001`) | ÉTAL | 8 | 8 L / 0 I |
| `SHOP_VOU_27` | Vendeur d'Armes d'Arène | Arène de Cendres | BOUTIQUE | 8 | 8 L / 0 I |
| `SHOP_VOU_28` | Marchande de Reliques Orla | Arène de Cendres | ÉTAL | 7 | 7 L / 0 I |
| `SHOP_VOU_40` | Marchand d'Armes Lourdes Kern | Marché de la Lave | BOUTIQUE | 7 | 5 L / 2 I |
| `SHOP_VOU_41` | Forgeron du Marché Ryk | Marché de la Lave | BOUTIQUE | 7 | 6 L / 1 I |
| `SHOP_VOU_42` | Marchande de Gemmes de Feu Rubis | Marché de la Lave | BOUTIQUE | 6 | 5 L / 1 I |
| `SHOP_VOU_43` | Boucher de la Lave Horg | Marché de la Lave | ÉTAL | 8 | 7 L / 1 I |
| `SHOP_VOU_44` | Marchand d'Esclaves Soll | Marché de la Lave | MARCHÉ NOIR | 4 | 3 L / 1 I |
| `SHOP_VOU_45` | Brocanteur de Guerre Zek | Marché de la Lave | ÉTAL | 7 | 6 L / 1 I |
| `SHOP_VOU_48` | Informateur de la Lave Murk | Marché de la Lave | MARCHÉ NOIR | 4 | 1 L / 3 I |
| `SHOP_VOU_49` | Receleur de la Lave Somb | Marché de la Lave | MARCHÉ NOIR | 5 | 3 L / 2 I |
| `SHOP_VOU_50` | Tavernier du Brasier Dorgan | Taverne du Brasier | TAVERNE | 8 | 8 L / 0 I |
| `SHOP_VOU_57` | Négociant Torvin | itinérant (route Gattan-Voulg) | BOUTIQUE | 7 | 0 L / 7 I |
| `SHOP_VOU_59` | Marchand de Potions Solf | Marché de la Lave | BOUTIQUE | 8 | 2 L / 6 I |
| `SHOP_VOU_60` | Maître des Runes de Feu Rynald | Forge Magmatique | BOUTIQUE | 6 | 5 L / 1 I |
| `SHOP_VOU_63` | Artificier des Forges Bôm | Forge Magmatique | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_VOU_64` | Tailleur de Gemmes de Feu Rubis | Forge Magmatique | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_VOU_65` | Alchimiste de la Forge Sulf | Forge Magmatique | BOUTIQUE | 7 | 5 L / 2 I |
| `SHOP_VOU_68` | Graveur de Lames Lorek | Forge Magmatique | BOUTIQUE | 6 | 3 L / 3 I |
| `SHOP_VOU_91` | Marchand d'Alne Peppin | Marché de la Lave | BOUTIQUE | 7 | 0 L / 7 I |
| `SHOP_VOU_93` | Trafiquant d'Armes Syl | Marché de la Lave | MARCHÉ NOIR | 5 | 3 L / 2 I |

**Total : 160 lignes d'inventaire** (111 LOCAL / 49 IMPORT). **20 MERCHANT + 4 BLACK_MARKET = 24**. Catégories de roster non fichées (traite d'esclaves, rumeurs K2, obus, runes, gravures) tenues à 4-6 articles réels + `[BESOIN_ITEM]` — jamais de faux `Item_ID`.

---

## 2. Conformité (checklist CDC §5)

- **R1 (panier universel)** : les 5 items `[UNIVERSEL]` fichés (`CSM_POT_001` soin, `CSM_POT_011` mana, `CSM_NOU_010` pain de voyage, `CSM_POT_019` antidote, `CSM_PAR_002` retour cité natale) ne figurent **qu'à la Taverne du Brasier de Dorgan `SHOP_VOU_50`** — nulle part ailleurs. Voulg n'a qu'une taverne : le panier n'est pas dupliqué. *La torche du panier reste un `[BESOIN_ITEM]` (non fichée au lot I-1).*
- **R2 (exclusivité intra-ville)** : **vérifié par construction — 0 doublon** d'`Item_ID` non-universel entre deux boutiques (allocation disjointe scriptée, assertion automatique : **155 IDs non-universels, tous uniques**). *(Correction du lot pré-généré de session parallèle qui comptait 37 doublons R2 et des noms fabriqués — cf. `[QUESTIONS_LOT]`.)*
- **R3 (exclusivité mondiale)** : ≥10 exigés. **25 `Item_ID` de Voulg sont introuvables dans les 3 villes closes** (Gattan, Alne, Swilvane), dont les signatures et le surplus de guerre : `WPN_EP2_005` **Flamberge du Cratère** (Kern 40) · `WPN_EP2_008` **Colère de Logi** + `WPN_HAC_008` **Hache Titanesque** (40 / Syl 93) · `WPN_EP2_007` **Titanite de Granzam** (93) · `WPN_LAN_007/008` **Lances T4** (93) · `WPN_MAS_006` **Maillet de MK** (Somb 49) · `MAT_MIN_018` **Adamantium** (49) · `WPN_HAC_005` **Hache de Siège de Granzam** (Balrog 04) · `WPN_KAT_003` **Nodachi des Brumes** (Lorek 68) · `CSM_POT_003/004` **Potions de Soin de l'Archipel** (Solf 59) · `MAT_CUI_009` **Éclat Bas-Relief** (68). **= 25 exclusifs mondiaux vs villes closes** (voir §3).
- **R4 (prix modulés)** : LOCAL = prix fiche −20 % · IMPORT = +40 % (ville source **productrice** nommée en colonne Origine : Granzam pour le granit, Brokkheim pour le mithril, Archipel pour le soin, Alne/Lioda pour le confort) · arrondi aux 5 Yrds · plancher 5 Yrds. **Aucun prix inventé** — tous calculés par script sur les `prix_base` extraits des fiches item.
- **R5 (taille)** : boutiques/étals à 6-8 · marchés noirs à 4-5 (fourchette BM 4-8, accès conditionné `AFF` + nuit). Toutes ≥4.
- **R6 (tiers, cf. D61)** : T1-T2 libres · **T3 ≤4/boutique respecté** (max atteint chez Balrog 04, Fyra 06, Rubis 42, Rynald 60, Sulf 65, gemmes-forge 64) · **T4 d'ÉQUIPEMENT légal = exactement 2 dans toute la ville** (`WPN_EP2_008` Colère de Logi + `WPN_HAC_007` Hache de Logi, tous deux chez Kern `40` sous `AFF>=80`) — **au plafond**. **T5 : aucun.** Les T4 de **matériaux** (Adamantium, Mithril, Diamant/Gemme de Mithril, Pierre Philosophale, Minerai de Lumière) ne sont pas soumis au plafond (D61). Les **armes de guerre T4 volées** (Sabre de Magma, Titanite, Maillet de MK, Lances T4, Étoiles de Ragnar) sont **exclusivement au marché noir** de Somb `49` et Syl `93` sous `AFF>=80` (D64).
- **R7 (rachat)** : les `MAT_*` du territoire Salamander sont rachetés à Voulg — minerais/soufre par Malakor `03`, cendres/crocs/cuirs des Plaines par le Marchand de Cendres `12` et Horg `43`, gemmes de feu par Rubis `42`, junk de guerre T0-T1 par Zek `45`, composants d'enchantement par Fyra `06` et alchimiques par Sulf `65`, objets volés par Somb `49`.
- **R8 (cohérence PNJ)** : chaque inventaire matérialise la spécialité écrite au roster (Malakor vend le minerai des mines qu'il exploite, Kern le surplus d'armes lourdes, Bôm les explosifs, Soll la traite, Syl les armes volées vers Alne). Aucun conflit roster/matrice.

**Matrice D36 (Voulg) respectée** : PRODUIT local (surplus militaire, explosifs, gemmes de feu, équipement d'arène, minerai) en LOCAL −20 % ; BESOIN (nourriture de garnison via Peppin `91`/Horg `43` ; potions de soin via Solf `59`) en IMPORT +40 % ville source productrice ; ABSENT (luxe, cosmétique) — **jamais en rayon** (sondage : Kern `40`, Rubis `42`, Dorgan `50` ne proposent aucun article d'ornement ; le seul mets « de prestige » importé, Filet Mignon d'Alne chez Peppin `91`, reste une denrée, pas un luxe cosmétique).

---

## 3. Exclusifs mondiaux de Voulg (R3 — vs villes closes Gattan/Alne/Swilvane)

`WPN_EP2_001` Espadon d'Entraînement · `WPN_EP2_005` Flamberge du Cratère · `WPN_EP2_007` Titanite de Granzam · `WPN_EP2_008` Colère de Logi · `WPN_HAC_005` Hache de Siège de Granzam · `WPN_HAC_008` Hache Titanesque de Granzam · `WPN_MAS_002` Masse de Granit · `WPN_MAS_006` Maillet de MK · `WPN_LAN_002` Pique de Granit · `WPN_LAN_003` Hallebarde de Brokkheim · `WPN_LAN_005` Lance Lourde de Granzam · `WPN_LAN_007` Lance Titanesque de Mithrandur · `WPN_LAN_008` Pertuisane de l'Artisan-Maître · `WPN_BOU_002` Écu de Granit · `WPN_DAG_002` Croc de Freelia · `WPN_EP1_004` Lame Noire Spriggan · `WPN_EP1_007` Sabre-Griffe Cait Sith · `WPN_KAT_003` Nodachi des Brumes · `MAT_MIN_018` Adamantium · `MAT_CUI_009` Éclat Bas-Relief · `CSM_POT_003` Potion de Soin · `CSM_POT_004` Potion de Soin Supérieure · `CSM_POT_018` Élixir du Mage Gnome · `CSM_POT_030` Encre de Sagesse · `CSM_POT_034` Écaille de Givre. **= 25 (> seuil de 10).**

---

## 4. `[BESOIN_ITEM]` (consolidé → alimente les prochains lots items)

| Besoin | Boutique(s) | Nature |
|---|---|---|
| **Obus, grenades, charges de siège** (`EXP_*`) | Bôm `63` | **signature mondiale de Voulg** (« obus de Bôm ») — catégorie « explosifs » entièrement non fichée. Priorité haute (amendement CDC-ITM). |
| **Runes et gravures de feu** (`RUN_*`) | Rynald `60` | catégorie « runes gravées » non fichée — spécialité de Rynald. |
| **Gravures / sceaux personnalisés** (`ENGRAVE_*`) | Lorek `68` | service de personnalisation de lames non fiché. |
| **Contrats d'esclave / manilles** (`SLAVE_*`) | Soll `44` | cœur de métier (traite) non fiché — matérialisé en service uniquement. |
| **Objets d'information / rumeurs K2** (`INTEL_*`) | Murk `48` | catégorie « renseignement » non fichée (déjà relevée à Swilvane). |
| **Torche** (panier universel R1) | Dorgan `50` | consommable d'éclairage manquant au lot I-1 (déjà relevé à Gattan, Alne, Swilvane). |
| **Gamme `CSM_NOU` élargie (rations/boissons de garnison)** | Horg `43`, Dorgan `50`, Peppin `91` | dette d'élargissement déjà relevée en C-1 : la nourriture existante est trop étroite pour 3 marchands d'alimentation. |

---

## 5. `[QUESTIONS_LOT]` / décisions

- **Chevauchement territorial Gattan ↔ Voulg (décision D-forte)** : les deux villes appartiennent au **même territoire Salamander** et puisent dans le **même pool d'items « feu »** (97 `Item_ID` de Voulg sont aussi vendus à Gattan). La R3 « exclusivité mondiale stricte » est donc **structurellement impossible pour une forteresse secondaire** dans un pool déjà occupé par sa capitale. **Décision** : l'exclusivité de Voulg est mesurée **contre les villes d'autres territoires** (résultat : 25 exclusifs, §3), et le partage Gattan/Voulg des consommables/minerais de feu est **assumé comme cohérent** (une garnison et sa capitale commercent les mêmes ressources). Les différenciateurs réels de Voulg passent par **la spécialité de sous-lieu** (arène, mines, siège, marché noir d'armes) plutôt que par des ID uniques. À arbitrer par le PE si une séparation stricte des pools par ville est exigée (impliquerait de retirer les items partagés du stock de l'une des deux).
- **Reprise d'un lot pré-généré non conforme** : le dossier `voulg/` contenait déjà 24 fiches issues d'une session parallèle, avec **37 doublons R2** (ex. `MAT_MIN_006`, `MAT_MIN_018` vendus par 3-4 boutiques) et des **noms d'items fabriqués** ne correspondant pas aux fiches réelles (`MAT_MIN_018` étiqueté « Fer Volcanique » au lieu d'« Adamantium » ; `MAT_MIN_008` « Obsidienne de Voulg » au lieu de « de Gattan »). Les 24 fiches ont été **entièrement régénérées** par la méthode C-2/C-3 (disjonction scriptée, prix/noms extraits du disque). Aucune fiche perdue ; ID `SHOP_VOU_*` inchangés.
- **Plafond T4 légal atteint (2/2)** : Voulg place **exactement 2** T4 d'équipement légaux, tous deux `AFF>=80` chez Kern `40` (Colère de Logi + Hache de Logi). Toute autre arme de guerre T4 (Sabre de Magma de Gattan, Titanite, Maillet de MK, Lances T4, Étoiles de Ragnar) est reléguée au marché noir de Somb `49` / Syl `93` (D64, réseau Kael `NPC_ALN_07`).
- **Deux PNJ homonymes « Rubis »** : le roster comporte `NPC_VOU_42` (Marchande de Gemmes de Feu, Marché de la Lave — gemmes **brutes**) et `NPC_VOU_64` (Tailleur de Gemmes de Feu, Forge — gemmes **taillées/montées**). Allocation de gemmes **disjointe** entre les deux (aucun `MAT_GEM_*` partagé), fichiers `shop_vou_42_gemmes_rubis.md` et `shop_vou_64_gemmes_forge.md`.
- **Boutiques « service déguisé en commerce »** : Soll `44` (traite), Murk `48` (rumeurs), Bôm `63` (obus), Rynald `60` (runes), Lorek `68` (gravures) vendent des catégories majoritairement non fichées ; tenues à 4-6 articles réels + `[BESOIN_ITEM]` plutôt que gonflées de faux IDs (règle CDC §0.3).
- **Roster « ~24 + 4 » du CDC corrigé** : le CDC §4 estimait « ~24 MERCHANT + 4 BLACK_MARKET ». Recompte exact sur les fiches `NPC_VOU_*` (`role_type`) : **20 `MERCHANT` + 4 `BLACK_MARKET` = 24**. Aucune boutique manquante ni orpheline ; chaque PNJ marchand a exactement une boutique.
- **Chaînages inter-cités honorés** : Torvin `57`↔Torvin `NPC_GAT_18` (navette Gattan) ; Peppin `91`↔Alne (import confort) ; Syl `93`↔Kael `NPC_ALN_07` (trafic d'armes, D64) ; Murk `48`↔Fitch `NPC_GAT_89` (rumeurs) ; Fyra `06` & Kern `40`↔Brokkheim/Granzam (alliages, granit) ; Solf `59`↔Archipel (potions de soin).
