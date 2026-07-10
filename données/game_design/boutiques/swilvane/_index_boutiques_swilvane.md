# 🍃 Index des Boutiques — Swilvane (Lot C-3)

> **Chantier** : Phase C — Boutiques (CDC-SHP-01, D35/D36). Lot **C-3 Swilvane** (`ZONE_SYL_CAP_001`, capitale raciale Sylph — cité verticale du vent). Produit à l'étape 23.
> **Couverture** : **30 / 30** boutiques (1 par PNJ `MERCHANT`/`BLACK_MARKET` du roster Swilvane, lot 2.4) + index.
> **Statut** : ✅ **CLOS** (2026-07-09). Prérequis satisfaits : roster PNJ Swilvane (lot 2.4, `NPC_SWI_00-99`) + items I-1/I-2/I-3/tête livrés.

> **Différenciateur de Swilvane (vs Gattan forge/plaque, vs Alne neutre)** : **capitale du vent et du vol** — armes légères (rapières/dagues du Zéphyr), équipement de vol (coiffes Sylph, sacs de toile), **meilleures potions MP du monde** et plumes en LOCAL (−20 %) ; le **minerai et le métal de Brokkheim** ainsi que la **viande rouge** sont importés (+40 %) ; la **plaque lourde est ABSENTE** (culture du vol, honneur du duel aérien). Trois signatures mondiales : **cristal de brise** · **Truite du Zéphyr** · **ailes d'apparat**.

---

## 1. Récapitulatif (30 boutiques)

| SHOP_ID | Propriétaire | Sous-lieu | Type | Articles | LOCAL / IMPORT |
|---|---|---|---|---|---|
| `SHOP_SWI_03` | Tenebris le Vagabond | Taverne de l'Érable | BOUTIQUE | 5 | 1 L / 4 I |
| `SHOP_SWI_04` | Faelan Chant-Fleuri | Ascenseur Éolien | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_SWI_05` | Brokkr Marteau-Feuille | Forge des Brises | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_SWI_12` | Cueilleuse Meryl | Prairies de Sylvain | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_SWI_15` | Trappeur Borg | Forêt de Lugru | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_SWI_19` | Marchand Pipo | Route Aérienne (Îlot n°1) | ÉTAL | 6 | 5 L / 1 I |
| `SHOP_SWI_20` | Brelane | Place du Marché | ÉTAL | 6 | 0 L / 6 I |
| `SHOP_SWI_21` | Vieux Cort | Place du Marché | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_SWI_22` | Miren | Place du Marché | ÉTAL | 5 | 5 L / 0 I |
| `SHOP_SWI_23` | Perrin | Place du Marché | ÉTAL | 5 | 4 L / 1 I |
| `SHOP_SWI_24` | Belle | Place du Marché | BOUTIQUE | 6 | 2 L / 4 I |
| `SHOP_SWI_25` | Agathe | Place du Marché | ÉTAL | 5 | 0 L / 5 I |
| `SHOP_SWI_26` | Hob | Place du Marché | ÉTAL | 5 | 1 L / 4 I |
| `SHOP_SWI_27` | Tam | Place du Marché | BOUTIQUE | 5 | 4 L / 1 I |
| `SHOP_SWI_45` | Chiffonnier Pik | Les Racines | ÉTAL | 5 | 5 L / 0 I |
| `SHOP_SWI_50` | Tavernier Bram | Taverne de l'Érable | TAVERNE | 6 | 6 L / 0 I |
| `SHOP_SWI_57` | Brocanteur Zol | Taverne de l'Érable | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_SWI_59` | Négociant Venn | Débarcadère (itinérant) | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_SWI_61` | Herboriste Nael | Jardin Suspendu | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_SWI_62` | Apothicaire Solm | Jardin Suspendu | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_SWI_63` | Ailier Thal | Atelier Ailé | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_SWI_64` | Teinturière Iris | Atelier Ailé | ÉTAL | 5 | 5 L / 0 I |
| `SHOP_SWI_65` | Plumassier Volm | Atelier Ailé | ÉTAL | 4 | 4 L / 0 I |
| `SHOP_SWI_68` | Parfumeuse Rose | Jardin Suspendu | ÉTAL | 5 | 5 L / 0 I |
| `SHOP_SWI_69` | Vannier Henn | Jardin Suspendu | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_SWI_73` | Scribe Olm | Bibliothèque des Courants | BOUTIQUE | 5 | 5 L / 0 I |
| `SHOP_SWI_91` | Helka l'Exilée | Taverne de l'Érable | BOUTIQUE | 4 | 0 L / 4 I |
| `SHOP_SWI_93` | Marchand Torvin | Place du Marché | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_SWI_42` | Receleur Somb | Les Racines | MARCHÉ NOIR | 6 | 0 L / 6 I |
| `SHOP_SWI_48` | Informateur Murk | Les Racines | MARCHÉ NOIR | 4 | 1 L / 3 I |

**Total : 164 lignes d'inventaire** (107 LOCAL / 57 IMPORT). 28 MERCHANT + 2 BLACK_MARKET. Boutiques thématiques à catégorie non fichée (laiterie, cartes, parfums, teintures, gacha, rumeurs) tenues à 4-5 articles réels + `[BESOIN_ITEM]` — jamais de faux `Item_ID`.

---

## 2. Conformité (checklist CDC §5)

- **R1 (panier universel)** : les 5 items `[UNIVERSEL]` fichés (`CSM_POT_001` soin, `CSM_POT_011` mana, `CSM_NOU_010` pain de voyage, `CSM_POT_019` antidote, `CSM_PAR_002` retour cité natale) ne figurent **qu'à la Taverne de l'Érable de Bram `SHOP_SWI_50`** — nulle part ailleurs (Pipo `19` vend le mana à partir de `CSM_POT_012`, jamais le mineur). *La torche du panier reste un `[BESOIN_ITEM]` (non fichée au lot I-1).* Swilvane n'a qu'une taverne : le panier n'est pas dupliqué.
- **R2 (exclusivité intra-ville)** : **vérifié par construction — 0 doublon** d'`Item_ID` non-universel entre deux boutiques (allocation disjointe scriptée, contrôle automatique : 159 IDs non-universels, tous uniques).
- **R3 (exclusivité mondiale)** : ≥10 exigés. **Signatures & produits Sylph** (introuvables ailleurs) : `MAT_MIN_007` **Cristal de Brise** (Belle 24) · `MAT_GEM_003` **Gemme de Brise** (Belle 24) · `MAT_DRP_012` **Plume de Sylphe** (Volm 65) · `CSM_NOU_002` **Truite Grillée du Zéphyr** (Perrin 23) · `CSM_POT_028` **Élixir de Célérité Sylphe** (Faelan 04) · `WPN_RAP_002` Rapière du Zéphyr · `WPN_DAG_003` Stylet du Zéphyr · `WPN_DAG_005` Lame Furtive du Zéphyr (Cort 21) · `WPN_EP1_002` Lame du Vent Sylphe · `WPN_ARC_004` Arc du Vent Sylphe · `WPN_EP1_010` Faucon d'Émeraude (Brokkr 05) · `ARM_TET_001/002/003/005/006/007` ligne de coiffes de vol Sylph (Thal 63) · `BAG_002` **Sac de Toile de Swilvane** (Henn 69). **= 20+ exclusifs mondiaux.**
- **R4 (prix modulés)** : LOCAL = prix fiche −20 % · IMPORT = +40 % (ville source **productrice** nommée en colonne Origine) · arrondi aux 5 Yrds · plancher 5 Yrds (herbes/junk). Aucun prix inventé — tous lus sur les fiches item réelles.
- **R5 (taille)** : boutiques/étals à 4-6 · marchés noirs à 4-6 (fourchette 4-8, accès conditionné `AFF` + nuit).
- **R6 (tiers, cf. D61)** : T1-T2 libres · T3 ≤4/boutique **respecté** · **T4 d'ÉQUIPEMENT légal = exactement 2 dans toute la ville** (`WPN_EP1_010` Faucon d'Émeraude chez Brokkr `05` + `ARM_TET_007` Diadème du Zéphyr Éternel chez Thal `63`, tous deux `AFF>=80`) — **au plafond**. **T5 : aucun.** Les T4 de matériaux/consommables (mithril, gemmes, élixir de mana) ne sont pas soumis au plafond (D61). **Armes/coiffe de vol T4 volées = marché noir Somb `42` uniquement** (D64).
- **R7 (rachat)** : les `MAT_*` du territoire Sylph sont rachetés à Swilvane — herbes par Meryl `12`, Nael `61`, Iris `64`, Rose `68` ; peaux/plumes par Borg `15`, Volm `65`, Hob `26` ; cristaux de brise par Belle `24` ; junk par Pik `45` ; métal importé revendu par Venn `59` et Torvin `93`.
- **R8 (cohérence PNJ)** : chaque inventaire matérialise la spécialité écrite au roster (Cort vend rapières/dagues, Volm des plumes, Torvin des gemmes de Granzam). Aucun conflit roster/matrice.

**Matrice D36 (Swilvane) respectée** : PRODUIT local (rapières/dagues, équipement de vol, potions MP, plumes) en LOCAL −20 % ; BESOIN (minerai/métal Brokkheim via Venn `59` + Torvin `93` ; viande rouge via Hob `26`) en IMPORT +40 % ville source ; ABSENT (plaque lourde, armes lourdes) — **jamais en rayon dans aucune boutique** (sondage : Cort `21`, Brokkr `05`, Brelane `20` refusent explicitement la plaque).

---

## 3. `[BESOIN_ITEM]` (consolidé → alimente les prochains lots items)

| Besoin | Boutique(s) concernée(s) | Nature |
|---|---|---|
| **Ailes cosmétiques d'apparat** (`WING_*`) | Thal `63`, Volm `65` | **signature mondiale de Swilvane** — catégorie « ailes/cosmétique de vol » entièrement non fichée |
| **Torche** (panier universel R1) | Bram `50` | consommable d'éclairage manquant au lot I-1 (déjà relevé à Gattan et Alne) |
| **Bière de feu « Haleine de Logi »** | Helka `91` | boisson signature — dette d'élargissement `CSM_NOU`/boissons |
| **Teintures d'ailes et de capes** (`DYE_*`) | Iris `64` | produit fini (pigment appliqué) non fiché |
| **Parfums raciaux** (`PERF_*`) | Rose `68` | produit fini non fiché |
| **Cartes des courants aériens / atlas** | Tam `27` | catégorie « carte du monde » non fichée (déjà relevée à Alne) |
| **Produits laitiers fins** (lait de chèvre, fromages affinés) | Miren `22` | sous-catégorie laitière non fichée au lot I-1 |
| **Fruits frais exotiques** | Agathe `25` | catégorie « fruit » non fichée |
| **Boîtes de reliques / gacha** (`GACHA_*`) | Tenebris `03` | mécanique gacha non fichée (accroche roster) |
| **Objets d'information / rumeurs K2** (`INTEL_*`) | Murk `48` | catégorie « objet d'information » non fichée |

---

## 4. `[QUESTIONS_LOT]` / décisions

- **Plafond T4 légal atteint (2/2)** : Swilvane place **exactement 2** T4 d'équipement légaux, les deux `AFF>=80` (arme de vol signature Faucon d'Émeraude + coiffe de vol Diadème du Zéphyr). Conforme à R6/D61. Toute autre pièce T4 de vol (Rapière Faucon-du-Ciel, Baguette du Zéphyr Supérieur, Casque de la Garde Sylvane) est reléguée au marché noir de Somb `42` (D64).
- **Signature « ailes d'apparat » non matérialisable** : c'est la seule des 3 signatures D36 de Swilvane sans objet fiché. Priorité haute pour l'amendement CDC-ITM (proposition : micro-famille `WING_*` cosmétique de dos, sans stat, sur le modèle D45/D46). En attendant, Thal `63` et Volm `65` vendent le **matériau** (coiffes de vol + plumes), pas le produit cosmétique final.
- **Boutiques « service déguisé en commerce »** : Murk `48` (rumeurs) et Miren `22`/Tam `27`/Rose `68`/Iris `64` vendent des catégories majoritairement non fichées ; tenues à 4-5 articles réels + `[BESOIN_ITEM]` plutôt que gonflées de faux IDs (règle CDC §0.3). Toutes ≥4 articles (R5 mini respecté).
- **Roster « 28 + 2 » du CDC confirmé exact** : 28 `MERCHANT` + 2 `BLACK_MARKET` = **30** (recompté sur les fiches `NPC_SWI_*`, `role_type`). Aucune boutique manquante ni orpheline ; chaque PNJ marchand a exactement une boutique. Notables marchands canon : Brokkr `05` (forgeron), Faelan `04`, Tenebris `03` (Spriggan) — tenus `MERCHANT`, conformes au roster.
- **Chaînages inter-cités honorés** : Torvin `93`→Belle `24` (gemmes Granzam) ; Venn `59`↔Anse `NPC_ALN_86` (route Alne) ; Somb `42`↔Snyk `NPC_GAT_80` (recel) ; Murk `48`↔Fitch `NPC_GAT_89` (rumeurs) ; Helka `91`↔`NPC_GAT_54` (exil) ; Agathe `25`↔Rosza `NPC_GAT_45` (import).
