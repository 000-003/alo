# 🌳 Index des Boutiques — Alne (Lot C-2)

> **Chantier** : Phase C — Boutiques (CDC-SHP-01, D35/D36). Lot **C-2 Alne** (`ZONE_NEU_CAP_001`, capitale neutre cosmopolite). Produit à l'étape 22.
> **Couverture** : **31 / 31** boutiques (1 par PNJ `MERCHANT`/`BLACK_MARKET` du roster Alne, lot 2.3) + index.
> **Statut** : ✅ **CLOS** (2026-07-09). Prérequis satisfaits : roster PNJ Alne (lot 2.3, `NPC_ALN_00-99`) + items I-1/I-2/I-3 livrés.

> **Différenciateur d'Alne (vs Gattan, forge mono-race)** : capitale **neutre cosmopolite** — c'est LE lieu où l'on trouve un peu de tout (généraliste T1-T2 des 9 races en LOCAL), tandis que les **spécialités raciales T3+** y sont importées (+40 %). Les **armes de guerre T4** sont ABSENTES du marché légal : seul le renégat Kael `NPC_ALN_07` les écoule (contrebande). Trois signatures mondiales : **Poivre d'Alne**, **cartes d'Alba**, **sève d'Yggdrasil**.

---

## 1. Récapitulatif (31 boutiques)

| SHOP_ID | Propriétaire | Sous-lieu | Type | Articles | LOCAL / IMPORT |
|---|---|---|---|---|---|
| `SHOP_ALN_02` | Kaelen Cœur-de-Fer | Quartier des Forges | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_ALN_05` | Lyra Nuage-Danse | Marché Circulaire | ÉTAL | 6 | 3 L / 3 I |
| `SHOP_ALN_15` | Botaniste Yssa | Racines d'Yggdrasil | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_18` | Cartographe Alba | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_22` | Lingua | Grande Bibliothèque de l'Arbre | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_ALN_26` | Grède | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_27` | Milla aux Neuf Fils | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_28` | Herboriste Ophrys | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_29` | Marchand Peppin | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_30` | Boucher Halle | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_31` | Maraîchère Vinn | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_32` | Éleveur Pako | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_33` | Libraire Osk | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_34` | Joaillière Vireth | Marché Circulaire | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_ALN_35` | Antiquaire Doss | Marché Circulaire | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_ALN_39` | Runiste Vael | Quartier des Forges | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_ALN_45` | Sommelier Dranz | Auberge de l'Arbre Pâle | BOUTIQUE | 6 | 1 L / 5 I |
| `SHOP_ALN_47` | Chef Aubin | Auberge de l'Arbre Pâle | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_ALN_48` | Tenancier Krebs | Taverne du Sous-Sol | TAVERNE | 6 | 6 L / 0 I |
| `SHOP_ALN_66` | Tailleur Ison | Marché Circulaire | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_ALN_78` | Fleuriste Dahlia | Place de la Fontaine Centrale | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_79` | Rôtisseur Grett | Marché Circulaire | ÉTAL | 6 | 1 L / 5 I |
| `SHOP_ALN_85` | Breloquière Sim | Marché Circulaire | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_ALN_86` | Colporteuse Anse | Débarcadère aérien (itinérante) | ÉTAL | 6 | 0 L / 6 I |
| `SHOP_ALN_93` | Bomil l'Émigré | Quartier des Forges | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_ALN_07` | Kael le Renégat | Ruelle sombre du Dôme | MARCHÉ NOIR | 6 | 0 L / 6 I |
| `SHOP_ALN_53` | Usurière Sept-Doigts | Le Tapis Volant | MARCHÉ NOIR | 4 | 0 L / 4 I |
| `SHOP_ALN_55` | Receleuse Morne | Ruelle sombre du Dôme | MARCHÉ NOIR | 4 | 0 L / 4 I |
| `SHOP_ALN_56` | Faussaire Quill | Ruelle sombre du Dôme | MARCHÉ NOIR | 4 | 0 L / 4 I |
| `SHOP_ALN_57` | Contrebandier Rask | Ruelle sombre du Dôme | MARCHÉ NOIR | 6 | 0 L / 6 I |
| `SHOP_ALN_58` | Informatrice Wisp | Ruelle sombre du Dôme | MARCHÉ NOIR | 4 | 0 L / 4 I |

**Total : 178 lignes d'inventaire** (105 LOCAL / 73 IMPORT). BOUTIQUE/ÉTAL/TAVERNE = 6 articles ; MARCHÉ NOIR = 4-6 (R5 : 4-8).

---

## 2. Conformité (checklist CDC §5)

- **R1 (panier universel)** : les 5 items `[UNIVERSEL]` disponibles au lot (`CSM_POT_001` soin, `CSM_POT_011` mana, `CSM_POT_019` antidote, `CSM_NOU_010` pain de voyage, `CSM_PAR_001` retour Alne) ne figurent **qu'à la Taverne du Sous-Sol de Krebs `SHOP_ALN_48`** — nulle part ailleurs. *La torche du panier reste un `[BESOIN_ITEM]` (non fichée au lot I-1).* Alne ne dispose d'aucun autre épicier/taverne : le panier n'est donc pas dupliqué.
- **R2 (exclusivité intra-ville)** : **vérifié par construction — 0 doublon** d'`Item_ID` non-universel entre deux boutiques (allocation disjointe scriptée, contrôle automatique).
- **R3 (exclusivité mondiale)** : ≥10 exigés. **Signatures & exclusifs d'Alne** (introuvables ailleurs) : `MAT_DRP_019` Essence/**sève d'Yggdrasil** (Yssa 15) · `ARM_TET_090` Béret du **Cartographe** (Alba 18) · `CSM_NOU_013` **Pomme des Vergers d'Alne** (Peppin 29) · `CSM_NOU_030` **Filet Mignon d'Alne** (Halle 30) · `CSM_NOU_029` **Banquet des Neuf Races** (Aubin 47) · `CSM_NOU_035` **Grand Cru d'Yggdrasil** (Dranz 45) · `ARM_TET_082` Capuche du **Pèlerin d'Alne** (Milla 27) · `ARM_TET_083` Casque du **Garde de Caravane** (Ison 66) · `ARM_TET_084` Heaume du **Mercenaire des Neuf Vents** (Doss 35) · `ARM_TET_085` Chapeau de l'**Encyclopédiste** (Lingua 22). **= 10+ exclusifs** ; plus la carte d'Alba et le Poivre d'Alne (signatures en `[BESOIN_ITEM]`).
- **R4 (prix modulés)** : LOCAL = prix fiche −20 % · IMPORT = +40 % (ville source **productrice** de l'article nommée en colonne Origine) · arrondi aux 5 Yrds · plancher anti-arbitrage respecté (prix ≥ 2× revente). Aucun prix inventé.
- **R5 (taille)** : 26 boutiques à 6 · marchés noirs à 4-6 (fourchette 4-8).
- **R6 (tiers, cf. D61)** : T1-T2 libres · T3 ≤4/boutique **respecté** (max = 4 chez Sept-Doigts `53` et Morne `55`, biens saisis/recélés) · **T4 d'ÉQUIPEMENT légal = exactement 1 dans toute la ville** (`WPN_BOU_006` Aegis de Mithril chez Kaelen `02`, sous `AFF>=80`) — largement sous le plafond de 2 · **T5 : aucun**. Les T4 de **matériaux/consommables** (mithril brut, gemmes, cristaux, anti-jauges) ne sont pas soumis au plafond (D61). **Armes de guerre T4 = marché noir Kael `07` uniquement** (voir D64).
- **R7 (rachat)** : les `MAT_*` des territoires sont rachetés à Alne (carrefour neutre) — cuirs/os/bêtes par Halle `30`, Pako `32`, Sim `85` ; herbes/fleurs par Yssa `15`, Ophrys `28`, Vinn `31`, Dahlia `78` ; minerais/gemmes par Kaelen `02`, Vireth `34`, Vael `39`, Bomil `93`.
- **R8 (cohérence PNJ)** : chaque inventaire matérialise la spécialité écrite au roster (le forgeron Kaelen vend de la forge, la fleuriste Dahlia des fleurs, le faussaire Quill des laissez-passer). Aucun conflit roster/matrice.

**Matrice D36 (Alne) respectée** : PRODUIT local (services, parchemins, cartes, généraliste T1-T2 des 9 races) en LOCAL −20 % ; BESOIN (spécialités raciales T3+ : forge Brokkheim, gemmes Granzam, vol Swilvane, boissons Lioda, anti-jauges…) en IMPORT +40 % ville source ; ABSENT (armes de guerre T4) hors marché légal, réservé au renégat Kael `07`.

---

## 3. `[BESOIN_ITEM]` (consolidé → alimente les prochains lots items)

| Besoin | Boutique(s) concernée(s) | Nature |
|---|---|---|
| **Torche** (panier universel R1) | Krebs `48` | consommable d'éclairage manquant au lot I-1 (déjà relevé à Gattan) |
| **Cartes / atlas** (signature « cartes d'Alba ») | Alba `18` | catégorie « carte du monde » non fichée (piste objets d'information) |
| **Poivre d'Alne** (signature) | Peppin `29` | condiment/épice signature — manque au lot I-1 |
| **Capes & tenues des 9 races** | Ison `66`, Milla `27` | slot cape/tenue par défaut (`OFT_*`/capes) non produit (CDC-ITM annexe / D46) |
| **Familiers & objets de dressage** | Pako `32` | catégorie entière non fichée (piste « familiers », écho fil Freelia D32) |
| **Boissons / vins fins** | Dranz `45` | la gamme `CSM_NOU`/boissons est trop étroite pour une cave premium — **élargir `CSM_NOU`** (dette déjà ouverte) |

---

## 4. `[QUESTIONS_LOT]` / décisions

- **D64** : **Armes de guerre T4 au marché noir (résolution du conflit R6 ↔ D36)**. La matrice D36 fait de Kael `NPC_ALN_07` l'**unique** débouché d'Alne pour les armes de guerre T4 (ABSENT du marché légal), alors que R6 plafonne l'équipement T4 à 2/ville. Résolution (cohérente avec D61 de Gattan) : **le plafond R6 T4≤2/ville s'applique au marché LÉGAL** ; le marché noir est par définition l'exception (R5 : « peut vendre les ABSENT de sa ville »). Les armes T4 de Kael sont **toutes** verrouillées `AFF>=80` + stock 1/mensuel, ce qui préserve l'équilibre. Marché légal d'Alne : **1 seul** T4 d'équipement (Aegis de Mithril, Kaelen). À confirmer PE ; sinon, réduire l'arsenal de Kael à 2 pièces.
- **Herbes/flore d'Alne classées LOCAL** : les 4 herboristes (Yssa `15` flore de l'Arbre, Ophrys `28` cosmopolite, Vinn `31` potagère, Dahlia `78` florale) vendent en LOCAL −20 % — cohérent avec le statut de carrefour neutre où toute la flore afflue et s'agrège. Allocations d'IDs strictement disjointes entre elles.
- **Roster « 25 + 6 » du CDC confirmé exact** : 25 `MERCHANT` + 6 `BLACK_MARKET` = **31** (contrairement à Gattan où le CDC sous-estimait). Aucune boutique manquante ni orpheline ; chaque PNJ marchand a exactement une boutique.
- **Kaelen `02` & Elara `03` canon** : Kaelen (forgeron ultime canon) tenu en `MERCHANT` d'importation forge ; la healer Elara `03` est `SERVICE` (résurrection/soin) — pas de boutique, conforme au roster.
