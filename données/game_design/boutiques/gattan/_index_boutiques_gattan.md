# 🔥 Index des Boutiques — Gattan (Lot C-1)

> **Chantier** : Phase C — Boutiques (CDC-SHP-01, D35/D36). Lot **C-1 Gattan** (`ZONE_SAL_CAP_001`). Produit à l'étape 20.
> **Couverture** : **29 / 29** boutiques (1 par PNJ `MERCHANT`/`BLACK_MARKET` du roster) + index.
> **Statut** : ✅ **CLOS** (2026-07-09). Prérequis satisfaits : rosters PNJ Gattan (lot 2.1) + items I-1/I-2/I-3 livrés. Ancien lot boutiques v1 (31 fichiers partiels/doublons d'une session antérieure) archivé dans `ressources_brutes/deprecated_v1/boutiques_gattan_v1/` — rien supprimé.

> ⚠️ **Note de reprise (étape 20)** : une session antérieure avait produit 6 fiches partielles (dont 2 doublons d'ID `SHOP_GAT_07`/`62` et des thèmes incohérents pour Motte/Vosk). Le roster réel compte **29** PNJ marchands (27 `MERCHANT` + 2 `BLACK_MARKET`), pas « 25+2 » comme l'estimait le CDC §4 (R8 : le roster prime). Le lot a été **régénéré intégralement** avec allocation d'inventaires **disjointe** (R2 garantie par construction).

---

## 1. Récapitulatif (29 boutiques)

| SHOP_ID | Propriétaire | Sous-lieu | Type | Articles | LOCAL / IMPORT |
|---|---|---|---|---|---|
| `SHOP_GAT_01` | Kagemune | Grande Forge | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_02` | Graz | Quartier Militaire | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_03` | Mortis | Ruelle des Alchimistes | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_04` | Pyra | Enclos aux Familiers | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_GAT_07` | Ferro le Colporteur | Porte de la Ville | ÉTAL | 6 | 5 L / 1 I |
| `SHOP_GAT_12` | Kolm | Comptoir de la Désolation | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_GAT_19` | Magda | Camp Avancé | ÉTAL | 6 | 5 L / 1 I |
| `SHOP_GAT_20` | Ignis | Marché Central | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_23` | Orim | Grande Forge | ÉTAL | 6 | 3 L / 3 I |
| `SHOP_GAT_24` | Tessa | Atelier des Runes | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_35` | Zela | Intendance Militaire | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_42` | Grum | Taverne « La Braise Joyeuse » | TAVERNE | 6 | 4 L / 2 I |
| `SHOP_GAT_44` | Kargh | Place du Dragon | ÉTAL | 6 | 2 L / 4 I |
| `SHOP_GAT_45` | Rosza | Place du Dragon | BOUTIQUE | 6 | 6 L / 0 I |
| `SHOP_GAT_46` | Vekka | Ruelle des Tisserands | BOUTIQUE | 6 | 3 L / 3 I |
| `SHOP_GAT_47` | Solman | Halle du Verrier | BOUTIQUE | 6 | 1 L / 5 I |
| `SHOP_GAT_48` | Onya | Échoppe de la Bijoutière | BOUTIQUE | 6 | 0 L / 6 I |
| `SHOP_GAT_52` | Ossik | Étal aux Œufs | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_GAT_54` | Helka | Brasserie de la Braise | ÉTAL | 6 | 3 L / 3 I |
| `SHOP_GAT_55` | Danna | Rôtisserie du Dragon | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_GAT_56` | Salvia | Ruelle des Herboristes | ÉTAL | 6 | 0 L / 6 I |
| `SHOP_GAT_57` | Pim | Souffleries de Fioles | ÉTAL | 6 | 6 L / 0 I |
| `SHOP_GAT_59` | Coff | Comptoir des Cendres | BOUTIQUE | 6 | 1 L / 5 I |
| `SHOP_GAT_62` | Rikko « Boum-Boum » | Atelier de l'Artificier | BOUTIQUE | 6 | 4 L / 2 I |
| `SHOP_GAT_63` | Vess | Cabinet des Venins | BOUTIQUE | 6 | 5 L / 1 I |
| `SHOP_GAT_80` | Snyk | Bas-Fonds | MARCHÉ NOIR | 4 | 0 L / 4 I |
| `SHOP_GAT_83` | Motte | Ruelle des Chiffonniers | ÉTAL | 6 | 0 L / 6 I |
| `SHOP_GAT_89` | Fitch | Bas-Fonds | MARCHÉ NOIR | 4 | 0 L / 4 I |
| `SHOP_GAT_96` | Vosk | Atelier du Tailleur | BOUTIQUE | 6 | 6 L / 0 I |

**Total : 170 lignes d'inventaire.** BOUTIQUE/ÉTAL = 6 articles ; MARCHÉ NOIR = 4 (R5 : 4-8).

---

## 2. Conformité (checklist CDC §5)

- **R1 (panier universel)** : les 6 items `[UNIVERSEL]` (soin/mana/antidote mineurs, pain de voyage, parchemin de retour) n'apparaissent qu'à l'épicier (Rosza `45`), au colporteur (Ferro `07`) et à la taverne (Grum `42`). *La torche du panier reste un `[BESOIN_ITEM]`.*
- **R2 (exclusivité intra-ville)** : **vérifié — 0 doublon** d'`Item_ID` non-universel entre deux boutiques (allocation disjointe par construction).
- **R3 (exclusivité mondiale)** : ≥10 exigés → Gattan détient largement plus. **Signatures exclusives** : `ARM_TET_012` Heaume de Basalte · `WPN_EP1_009` Sabre de Magma · `WPN_EP2_002` Flamberge de Voulg · `CSM_POT_035` Potion Anti-Surchauffe · `CSM_NOU_001` Ragoût de Lave · `CSM_NOU_033` Curry de Braise · `MAT_MIN_008` Obsidienne de Gattan · `MAT_MIN_020` Feu Infernal · `MAT_GEM_002` Gemme d'Obsidienne · `MAT_GEM_005` Rubis de Feu · `WPN_BOU_004` Pavois de Braise · `WPN_MAS_004` Masse de Lave (+ toute la gamme d'armes/armures Salamander).
- **R4 (prix modulés)** : LOCAL = prix fiche −20 % · IMPORT = +40 % (ville source nommée, productrice de l'article en D36) · arrondi aux 5 Yrds · plancher anti-arbitrage respecté (prix ≥ 2× revente). Aucun `−20 %` interdit (Brokkheim n'est pas concerné ici).
- **R5 (taille)** : 27 boutiques à 6 · 2 marchés noirs à 4 (dans la fourchette 4-8).
- **R6 (tiers)** : voir **D61** ci-dessous. T4 **d'équipement** = **exactement 2** dans toute la ville (`ARM_TET_017`, `WPN_EP1_009`), tous deux sous condition `AFF>=80`. Aucune boutique d'équipement > 4 articles T3. **T5 : aucun** (jamais en boutique).
- **R7 (rachat)** : les `MAT_*` du territoire Salamander sont rachetés — cuirs/os par Motte `83` & Kargh `44`, drops ignés par Coff `59` & Orim `23`, glandes/venins par Vess `63`.
- **R8 (cohérence PNJ)** : chaque inventaire matérialise la spécialité du roster ; conflits notés en §5.

**Matrice D36 respectée** : PRODUIT local (plaque/armes lourdes Salamander, anti-HEAT, obsidienne/verre volcanique) en LOCAL −20 % ; BESOIN (herbes fraîches → Salvia `56`/Fitch `89` ; tissus légers → Vekka `46` ; nourriture importée) en IMPORT +40 % ; ABSENT (équipement de vol Sylph) hors rayon (embargo, cité en politique de rachat).

---

## 3. `[BESOIN_ITEM]` (consolidé → alimente le prochain lot items)

| Besoin | Boutique(s) concernée(s) | Nature |
|---|---|---|
| **Torche** (panier universel R1) | Rosza `45`, Ferro `07`, Grum `42` | consommable d'éclairage manquant au lot I-1 |
| **Œuf de salamandre** (signature) | Ossik `52` | ingrédient/familier — ni `CSM_*` ni item de dressage |
| **Bière « Haleine de Logi »** (signature) | Helka `54`, Grum `42` | boisson à buff — manque au lot I-1 (nourriture) |
| **Items de dressage / familiers** | Pyra `04` | catégorie entière non fichée (piste « familiers ») |
| **Obus / explosifs finis** | Rikko `62` | arme consommable — partagée avec Voulg (C-4) |
| **Verrerie / objets de verre volcanique** | Solman `47` | catégorie décorative non fichée |
| **Variété de nourriture & boissons** | Magda `19`, Helka `54`, Grum `42`, Danna `55` | le lot I-1 (35 `CSM_NOU`) est trop étroit pour 8 marchands d'alimentation par ville — **élargir la gamme `CSM_NOU`** |

---

## 4. `[QUESTIONS_LOT]` / décisions

- **D61** : **Les plafonds de tiers R6 (T3 ≤4/boutique, T4 ≤2/ville) s'appliquent à l'ÉQUIPEMENT** (armes `WPN_*` / armures `ARM_*`), pas aux **matériaux** ni aux **consommables**, qui sont des commodités tarifées à la grille mais non soumises à la rareté-puissance de l'équipement. Justification : un prospecteur (Kolm) ou un pâtissier (Ossik) vendant 5 articles T3 de matière/nourriture n'introduit aucun pic de puissance ; restreindre le négoce de matières à 2 T4/ville étoufferait l'économie de craft (mithril, gemmes). Interprétation cohérente pour R6a et R6b. À confirmer par le PE ; sinon, retirer les `MAT_*` T3/T4 des rayons.
- **Roster « 25+2 » du CDC** : réel = **27 MERCHANT + 2 BLACK_MARKET = 29** (le CDC §4 sous-estimait ; Motte `83` et Vosk `96` sont `MERCHANT`, Snyk `80` et Fitch `89` sont `BLACK_MARKET`). Aucune boutique manquante ni orpheline.
- **Retheme Motte/Vosk** (R8) : les fiches v1 faisaient de Motte la chiffonnière un marchand de minerai brut et de Vosk le tailleur un herboriste — incohérent. Corrigé : Motte `83` = récupération de **cuirs/os** (rebuts du front), Vosk `96` = **portage & coiffes de tissu**. Conforme au rôle du roster.
- ✅ **Dette de commandes APURÉE (étape 21, 2026-07-09)** : `!sys_shop_restock [SHOP_ID]` actée dans `whatsapp_commands_list.md` §1 et `SYS_SHOP_RESTOCK(Shop_ID)` dans `ai_orchestrator_commands.md` §11 (pas de face joueur — anti-exploit). Consolidation groupée avec `SYS_GRANT_PASSIVE`/`!learn_skill`, `!accept_rally`, `!use`.
