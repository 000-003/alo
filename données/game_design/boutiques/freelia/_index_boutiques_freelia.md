# 🐾 Index des Boutiques — Freelia (Lot C-5)

> **Chantier** : Phase C — Boutiques (CDC-SHP-01, D35/D36). Lot **C-5 Freelia** (`ZONE_CAI_CAP_001`, capitale Cait Sith — cité du domptage de familiers). Produit à l'étape 25.
> **Couverture** : **28 / 28** boutiques (1 par PNJ `MERCHANT`/`BLACK_MARKET` du roster Freelia, lot 2.6) + index.
> **Statut** : ✅ **CLOS** (2026-07-10). Prérequis satisfaits : roster PNJ Freelia (lot 2.6, `NPC_FRE_00-99`) + items I-1/I-2/I-3/tête livrés.
> **Méthode** : reprise C-2/C-3/C-4 — allocation d'inventaires **disjointe scriptée** (R2 garanti par construction, 0 doublon vérifié : **163 IDs non-universels tous uniques**, assertion `iid not in used`), noms/tiers/prix **lus sur les fiches item réelles** (extraction disque → `catalog.json`, familles conformes `ARM_TET`/`CSM_*`/`MAT_*`/`WPN_*` uniquement), modulation LOCAL −20 % / IMPORT +40 % arrondie aux 5 Yrds (plancher 5).

> **Différenciateur de Freelia (vs Gattan feu, vs Alne neutre, vs Swilvane aérien, vs Voulg garnison)** : **capitale du domptage de familiers** — la faune est l'économie. En LOCAL (−20 %) : **composants de bête** (crocs/glandes/cornes de Brok `07`, os du Marchand Os `32`, plumes de `33`, écailles de `34`, sang de l'Alchimiste `35`, cuirs/fourrures du Tanneur `31` et des trappeurs `12`/`15`/`68`), **équipement de chasse/dressage** (heaumes à crocs de Gimli `04`, cosmétiques félins de Nox `05`, crocs-armes de l'Éleveur `38`), **viande de gibier** (Boucher `30`, Vendeur de Gibier `69`). En IMPORT (+40 %) : **potions de soin** (via Marchand Itinérant `47` depuis l'Archipel), **gemmes/minerai** (Trafiquant Gnome `93` depuis Granzam), **mithril** (Gimli `04` depuis Brokkheim), **musique & douceurs** (Marchand Puca `91` depuis Lioda). Trois signatures : **Truite Grillée du Zéphyr** (buff AGI, Tavernier `40`) · **Couronne à Crocs** (T4 légal, Gimli `04`) · le **Marché aux Os** (viande de boss qui « repousse », fil rouge Brok `07`/Boucher `30`/Trappeur `15`/Receleur `48`).

---

## 1. Récapitulatif (28 boutiques)

| SHOP_ID | Propriétaire | Sous-lieu | Type | Articles | LOCAL / IMPORT |
|---|---|---|---|---|---|
| `SHOP_FRE_02` | Zephyr le Trappeur | Périphérie (forêt) | MARCHÉ NOIR | 4 | 2 L / 2 I |
| `SHOP_FRE_04` | Gimli Griffe-Fer | Marché aux Crocs | BOUTIQUE | 7 | 6 L / 1 I |
| `SHOP_FRE_05` | Nox le Charmeur | Taverne Le Chat Botté | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_FRE_07` | Brok le Boucher | Marché aux Crocs | ÉTAL | 7 | 7 L / 0 I |
| `SHOP_FRE_12` | Marchand d'Appâts | Savane des Crocs (`HUNT_001`) | ÉTAL | 7 | 7 L / 0 I |
| `SHOP_FRE_15` | Trappeur Collines | Collines de l'Ouest (`HUNT_002`) | BOUTIQUE | 7 | 7 L / 0 I |
| `SHOP_FRE_19` | Marchand Volant | Route Aérienne (Îlot) | BOUTIQUE | 7 | 6 L / 1 I |
| `SHOP_FRE_23` | Vendeur d'Œufs | Ménagerie Royale | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_FRE_27` | Marchand de Souvenirs | Colline aux Souvenirs | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_FRE_30` | Boucher Marché | Marché aux Crocs | ÉTAL | 7 | 7 L / 0 I |
| `SHOP_FRE_31` | Tanneur | Marché aux Crocs | BOUTIQUE | 7 | 7 L / 0 I |
| `SHOP_FRE_32` | Marchand Os | Marché aux Crocs | ÉTAL | 6 | 5 L / 1 I |
| `SHOP_FRE_33` | Marchand Plumes | Marché aux Crocs | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_FRE_34` | Marchand d'Écailles | Marché aux Crocs | BOUTIQUE | 6 | 3 L / 3 I |
| `SHOP_FRE_35` | Alchimiste Sang | Marché aux Crocs | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_FRE_37` | Braconnier Banni | Marché aux Crocs (caché) | MARCHÉ NOIR | 4 | 4 L / 0 I |
| `SHOP_FRE_38` | Éleveur de Worgs | Marché aux Crocs | BOUTIQUE | 5 | 5 L / 0 I |
| `SHOP_FRE_40` | Tavernier Chat Botté | Taverne Le Chat Botté | TAVERNE | 8 | 8 L / 0 I |
| `SHOP_FRE_47` | Marchand Itinérant | itinérant (routes inter-cités) | BOUTIQUE | 7 | 0 L / 7 I |
| `SHOP_FRE_48` | Receleur Marché Noir | Marché aux Crocs (caché) | MARCHÉ NOIR | 4 | 3 L / 1 I |
| `SHOP_FRE_51` | Cartographe Tour | Tour d'Observation | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_FRE_66` | Fournisseur d'Appâts | Marché aux Crocs | BOUTIQUE | 5 | 4 L / 1 I |
| `SHOP_FRE_67` | Marchand de Laisses | Marché aux Crocs | BOUTIQUE | 5 | 5 L / 0 I |
| `SHOP_FRE_68` | Négociant en Fourrures | Marché aux Crocs | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_FRE_69` | Vendeur de Gibier | Marché aux Crocs | ÉTAL | 6 | 2 L / 4 I |
| `SHOP_FRE_84` | Nécromancien des Bêtes | Colline aux Souvenirs (interdit) | MARCHÉ NOIR | 4 | 4 L / 0 I |
| `SHOP_FRE_91` | Marchand Puca | Marché aux Crocs | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_FRE_93` | Trafiquant Gnome | Marché aux Crocs | BOUTIQUE | 7 | 0 L / 7 I |

**Total : 168 lignes d'inventaire** (~113 LOCAL / ~55 IMPORT). **24 MERCHANT + 4 BLACK_MARKET = 28**. Catégories de roster non fichées (appâts vivants, œufs/worgs/spécimens de familier, laisses de dressage, reliques nommées, os runiques, rituels de résurrection, cartes) tenues à 4-6 articles réels + `[BESOIN_ITEM]` — jamais de faux `Item_ID`.

---

## 2. Conformité (checklist CDC §5)

- **R1 (panier universel)** : les 5 items `[UNIVERSEL]` fichés (`CSM_POT_001` soin, `CSM_POT_011` mana, `CSM_NOU_010` pain de voyage, `CSM_POT_019` antidote, `CSM_PAR_002` retour cité natale) ne figurent **qu'à la Taverne Le Chat Botté `SHOP_FRE_40`** — nulle part ailleurs (vérifié par grep). Freelia n'a qu'une taverne : le panier n'est pas dupliqué. *La torche du panier reste un `[BESOIN_ITEM]` (non fichée au lot I-1).*
- **R2 (exclusivité intra-ville)** : **vérifié par construction — 0 doublon** d'`Item_ID` non-universel entre deux boutiques (allocation disjointe scriptée, assertion automatique : **163 IDs non-universels, tous uniques**). *(Correction du lot pré-généré de session parallèle — cf. `[QUESTIONS_LOT]`.)*
- **R3 (exclusivité mondiale)** : ≥10 exigés. **17 `Item_ID` de Freelia sont introuvables dans les 4 villes closes** (Gattan, Alne, Swilvane, Voulg), dont les signatures du domptage : `ARM_TET_029` **Serre-tête du Traqueur** · `ARM_TET_030` **Masque du Chat de Gouttière** (Nox 05) · `ARM_TET_035` **Couronne à Crocs** (T4, Gimli 04) · `ARM_TET_034` **Masque du Prédateur Nocturne** (Braconnier 37) · `ARM_TET_038` **Cornes d'Apprenti** (Laisses 67) · `ARM_TET_039` **Masque de Suie** · `ARM_TET_065` **Bandeau à Grelots** (Nox 05) · `ARM_TET_068` **Couronne d'Accords Mineurs** (Puca 91) · `WPN_ARC_009` **Arc du Roi Béhémoth** (Receleur 48) · `WPN_JET_002` **Shuriken-Griffe** (Éleveur 38) · `WPN_BAG_003` **Baguette de Refrain** · `MAT_CUI_018` **Cuir de Golem** · `MAT_CUI_019` **Écaille de Dragonnet** · `MAT_DRP_007` **Écaille de Léviathan** · `MAT_CUI_004` **Carapace Émaillée** · `CSM_POT_010` **Baume de Régénération Majeur** · `CSM_POT_032` **Vif-Argent des Cimes** (Marchand Volant 19). **= 17 exclusifs mondiaux vs villes closes** (§3).
- **R4 (prix modulés)** : LOCAL = prix fiche −20 % · IMPORT = +40 % (ville source **productrice** nommée en colonne Origine : Brokkheim pour le mithril, Granzam pour les gemmes/granit, Archipel pour le soin, Lioda pour la musique/douceurs, Alne pour le confort, Swilvane/Duskarn/Penwether pour les composants raciaux). Arrondi aux 5 Yrds, plancher 5. **Aucun prix inventé** — tous calculés par script sur les `prix_base` extraits des fiches item (vérifié : 0 prix non-multiple de 5, 0 prix manquant).
- **R5 (taille)** : boutiques/étals à 5-8 · marchés noirs à 4 (fourchette BM 4-8, accès `AFF` + nuit). Toutes ≥4.
- **R6 (tiers, cf. D61)** : T1-T2 libres · **T3 ≤4/boutique respecté** · **T4 d'ÉQUIPEMENT légal = exactement 1 dans toute la ville** (`ARM_TET_035` Couronne à Crocs chez Gimli `04` sous `AFF>=80`) — **sous le plafond de 2**. **T5 : aucun.** Les T4 de **matériaux** (Écaille de Dragonnet, Écaille de Léviathan, Mithril Brut, Diamant de Mithril, Poudre d'Étoile, Essence de Yggdrasil, Plante Primordiale, Os d'Ancien) ne sont pas soumis au plafond (D61). Les **armes/masques T4 volés aux boss** (`WPN_DAG_007` Croc de Skreech, `ARM_TET_034` Masque du Prédateur Nocturne chez le Braconnier `37` ; `WPN_ARC_009` Arc du Roi Béhémoth, `WPN_JET_004` Étoiles de Ragnar chez le Receleur `48`) sont **exclusivement au marché noir** sous `AFF>=80` (D64, réseau Zephyr `02`/Braconnier `37`/Receleur `48`).
- **R7 (rachat)** : les composants de bête du territoire Cait Sith sont rachetés à Freelia — crocs/glandes par Brok `07`, cuirs/fourrures par le Tanneur `31` et les trappeurs `12`/`15`, os par le Marchand Os `32`, plumes par `33`, écailles par `34`, sang par l'Alchimiste `35`, viande par le Boucher `30`, prises volées par le Receleur `48` et le Braconnier `37`.
- **R8 (cohérence PNJ)** : chaque inventaire matérialise la spécialité écrite au roster (Gimli forge l'équipement de monture, Nox vend les cosmétiques d'illusion, Brok achète le loot de monstre, l'Éleveur arme les worgs, le Trafiquant Gnome échange gemmes contre fourrures). Aucun conflit roster/matrice.

**Matrice D36 (Freelia) respectée** : PRODUIT local (composants de bête, équipement de chasse/dressage, viande de gibier) en LOCAL −20 % ; BESOIN (potions de soin via `47`, gemmes/mithril via `93`/`04`, musique via `91`) en IMPORT +40 % ville source productrice ; ABSENT (armes de siège lourdes, explosifs — l'économie de guerre de Voulg) — **jamais en rayon**.

---

## 3. Exclusifs mondiaux de Freelia (R3 — vs villes closes Gattan/Alne/Swilvane/Voulg)

`ARM_TET_029` Serre-tête du Traqueur · `ARM_TET_030` Masque du Chat de Gouttière · `ARM_TET_034` Masque du Prédateur Nocturne · `ARM_TET_035` Couronne à Crocs · `ARM_TET_038` Cornes d'Apprenti · `ARM_TET_039` Masque de Suie · `ARM_TET_065` Bandeau à Grelots · `ARM_TET_068` Couronne d'Accords Mineurs · `CSM_POT_010` Baume de Régénération Majeur · `CSM_POT_032` Vif-Argent des Cimes · `MAT_CUI_004` Carapace Émaillée · `MAT_CUI_018` Cuir de Golem · `MAT_CUI_019` Écaille de Dragonnet · `MAT_DRP_007` Écaille de Léviathan · `WPN_ARC_009` Arc du Roi Béhémoth · `WPN_BAG_003` Baguette de Refrain · `WPN_JET_002` Shuriken-Griffe. **= 17 (> seuil de 10).**

---

## 4. `[BESOIN_ITEM]` (consolidé → alimente les prochains lots items)

| Besoin | Boutique(s) | Nature |
|---|---|---|
| **Barding / selles / harnais de familier** (`MOUNT_*`) | Gimli `04` | équipement de monture non fiché — spécialité de dressage montée. |
| **Œufs de familier vivants** (`EGG_*`) | Vendeur d'Œufs `23` | catégorie « couvée » non fichée — fonds de commerce de la Ménagerie. |
| **Worgs de combat dressés** (`WORG_*`) | Éleveur `38` | familiers vivants non fichés — signature du chenil de combat. |
| **Spécimens vivants d'espèces protégées** (`BEAST_*`) | Braconnier `37` | trafic de faune vivante non fiché — cœur de métier du braconnage. |
| **Appâts vivants / d'élevage prohibés** (`LURE_*`) | Zephyr `02` | appât illégal non fiché. |
| **Laisses / colliers / muselières de dressage** (`TAME_*`) | Marchand de Laisses `67` | équipement de dressage non fiché. |
| **Reliques de familier nommées** (`RELIC_*`) | Souvenirs `27` | souvenirs individualisés non fichés — matérialisés en cristaux-mémoire. |
| **Os gravés / totems runiques** (`BONE_*`) | Marchand Os `32` | artisanat d'os runique non fiché. |
| **Rituels de résurrection noire** (`RITE_*`) | Nécromancien `84` | service interdit non fiché. |
| **Cartes régionales détaillées** (`MAP_*`) | Cartographe `51` | cartographie de zone non fichée. |
| **Torche** (panier universel R1) | Tavernier `40` | consommable d'éclairage manquant au lot I-1 (déjà relevé à Gattan, Alne, Swilvane, Voulg). |
| **Gamme `CSM_NOU` élargie (viandes/gibiers de chasse)** | Boucher `30`, Vendeur de Gibier `69`, Vendeur d'Œufs `23` | dette d'élargissement déjà relevée en C-1/C-4 : la nourriture existante est trop étroite pour 3 marchands d'alimentation animale. |

---

## 5. `[QUESTIONS_LOT]` / décisions

- **Chevauchement territorial Cait Sith (application D65)** : Freelia est la **capitale unique** du territoire Cait Sith (pas de forteresse secondaire dans le corpus actuel), donc le pool « bête/chasse » racial ne se partage avec aucune ville sœur — la R3 s'applique pleinement (17 exclusifs). Les composants génériques (herbes, minerais de base, potions communes) restent partagés avec les autres capitales, ce qui est **assumé cohérent** (D65) : une ressource commune n'est pas un différenciateur. La singularité de Freelia passe par les items de domptage (`ARM_TET` félins, crocs-armes, Arc du Roi Béhémoth) et par la spécialité de sous-lieu (Ménagerie, Marché aux Crocs, Colline aux Souvenirs).
- **Reprise d'un lot pré-généré non conforme** : le dossier `freelia/` contenait déjà 28 fiches d'une session parallèle (bon roster, ID `SHOP_FRE_*` corrects, mais **zone erronée `ZONE_CAI_TWN_001` dans l'index** et défauts type Voulg : doublons R2, noms d'items fabriqués). Les 28 fiches + l'index ont été **entièrement régénérés** par la méthode C-2/C-3/C-4 (disjonction scriptée, prix/noms extraits du disque, zone corrigée `ZONE_CAI_CAP_001`). Aucune fiche perdue ; ID `SHOP_FRE_*` inchangés (1 par PNJ marchand).
- **Plafond T4 légal (1/2)** : Freelia place **1 seul** T4 d'équipement légal (`ARM_TET_035` Couronne à Crocs, `AFF>=80`, Gimli `04`) — sous le plafond de 2. Toute arme/masque de bête T4 (Croc de Skreech, Masque du Prédateur Nocturne, Arc du Roi Béhémoth, Étoiles de Ragnar) est reléguée au marché noir du Braconnier `37` / Receleur `48` (D64).
- **Pools de composants `MAT_CUI`/`MAT_HRB` intégralement consommés** : les 20 cuirs et 25 herbes du catalogue sont **tous** alloués (disjoints) entre les nombreux marchands de composants de Freelia — reflet fidèle d'une capitale dont l'économie *est* la faune. Les shops de composants « exotiques » de deuxième rang (Fournisseur d'Appâts `66`, Négociant en Fourrures `68`) puisent donc dans les `MAT_DRP`/`ARM_TET` libres et les imports, ce qui est cohérent (produits haut de gamme = drops rares + pièces de parade). Amendement suggéré au CDC-ITM : élargir `MAT_CUI` (fourrures nobles) si un futur lot Cait Sith secondaire est ouvert.
- **Boutiques « service déguisé en commerce »** : Vendeur d'Œufs `23`, Éleveur `38`, Braconnier `37`, Marchand de Laisses `67`, Marchand Os `32`, Nécromancien `84`, Cartographe `51`, Zephyr `02` vendent des catégories majoritairement non fichées (familiers vivants, dressage, cartes, rituels) ; tenues à 4-6 articles réels + `[BESOIN_ITEM]` plutôt que gonflées de faux IDs (règle CDC §0.3).
- **Roster « ~24 + 4 » du CDC confirmé exact** : recompte sur les fiches `NPC_FRE_*` (`role_type`) : **24 `MERCHANT` + 4 `BLACK_MARKET` = 28**. Aucune boutique manquante ni orpheline ; chaque PNJ marchand a exactement une boutique.
- **Chaînages inter-cités honorés** : Marchand Itinérant `47`↔Alne/Swilvane (confort) ; Marchand Puca `91`↔Lioda (musique, via Luthien `NPC_SWI_06`) ; Trafiquant Gnome `93`↔Granzam (gemmes) ; Gimli `04`↔Brokkheim (mithril) ; Zephyr `02` & Nox `05`↔réseau Sylph/Spriggan (appâts, illusions) ; fil du Marché aux Os (Brok `07`→Boucher `30`→Trappeur `15`→Receleur `48`).
