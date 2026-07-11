# Index du Lot SOC-3 — Items de Décoration de Logement

> **Lot** : SOC-3 (CDC-SOC-01 §3) · **Table maître** : `T_ITEMS_DICT` (`item_type='DEC'`, trigger I4) — **non modifiée**.
> **Buffs** : logés dans `T_PROPERTIES.deco_buffs`, activés par `!decorate`, actifs **uniquement dans le logement** (jamais en extérieur/combat).
> **Invariants I4 respectés sur les 36 fiches** : non équipable · `base_atk = base_def = 0` · buff passif **≤ +5 %** (ou 0 % cosmétique).
> **Total : 36 fiches** (cible ≥ 30 atteinte).

---

## 1. Tableau récapitulatif

| Item_ID | Nom | Type | Tier | Buff (portée logement) | Source | Prix (achat / revente) |
|---|---|---|---|---|---|---|
| `DEC_FUR_001` | Lit de Plumes de Sylphe | FUR | T2 | `rest_hp_regen` +5 % | Craft Sylph (Swilvane) · `MAT_DRP_012` | 1 800 / 450 |
| `DEC_FUR_002` | Bibliothèque de Chêne | FUR | T2 | `rest_mp_regen` +3 % | Craft menuisier · `MAT_WOD_002` | 1 200 / 300 |
| `DEC_FUR_003` | Grande Table de Frêne | FUR | T2 | `rest_exp` +2 % | Craft ébéniste · `MAT_WOD_004` | 1 000 / 250 |
| `DEC_FUR_004` | Fauteuil de Lecture | FUR | T1 | cosmétique 0 % | Craft tapissier · `MAT_CUI_014` | 400 / 100 |
| `DEC_FUR_005` | Âtre de Pierre de Granzam | FUR | T3 | `rest_hp_regen` +4 % | Craft Gnome (Granzam) · `MAT_MIN_009` | 4 500 / 1 125 |
| `DEC_FUR_006` | Armoire Laquée Cait Sith | FUR | T2 | cosmétique 0 % | Craft Cait Sith (Freelia) · `MAT_WOD_014` | 1 400 / 350 |
| `DEC_FUR_007` | Établi Pliant de Leprechaun | FUR | T3 | `craft_cost` −4 % | Craft Leprechaun (Brokkheim) · `MAT_CUI_005` | 6 000 / 1 500 |
| `DEC_FUR_008` | Berceau Runique | FUR | T2 | `rest_mp_regen` +2 % | Craft runiste · `MAT_WOD_003` + `DIV_RUN_006` | 1 600 / 400 |
| `DEC_LGT_001` | Lanterne de Feu-Follet | LGT | T2 | `rest_mp_regen` +3 % | Loot `MOB_LEP_003` / `MOB_SPR_003` | 900 / 225 |
| `DEC_LGT_002` | Lustre de Cristal de Brise | LGT | T3 | `rest_exp` +2 % | Craft Sylph · `MAT_MIN_007` | 5 000 / 1 250 |
| `DEC_LGT_003` | Brasero de Salamander | LGT | T3 | `rest_hp_regen` +5 % | Craft Salamander (Gattan) · `MAT_DRP_016` | 4 800 / 1 200 |
| `DEC_LGT_004` | Bougeoir d'Ambre | LGT | T1 | cosmétique 0 % | Achat (verrier, article de série) | 300 / 75 |
| `DEC_LGT_005` | Globe Luminescent d'Abysse | LGT | T4 | `rest_mp_regen` +4 % | Craft Undine · `MAT_DRP_010` | 16 000 / 4 000 |
| `DEC_PLT_001` | Bonsaï d'If | PLT | T1 | `rest_hp_regen` +2 % | Craft horticulteur · `MAT_WOD_001` | 500 / 125 |
| `DEC_PLT_002` | Jardinière de Fleurs de Lune | PLT | T2 | `rest_mp_regen` +3 % | Craft horticulteur · `MAT_HRB_008` | 1 100 / 275 |
| `DEC_PLT_003` | Carré d'Herbes Aromatiques | PLT | T2 | `craft_cost` −3 % | Craft herboriste · `MAT_HRB_005` | 1 500 / 375 |
| `DEC_PLT_004` | Bassin de Nénuphars de Cristal | PLT | T4 | `rest_mp_regen` +5 % | Craft Undine · `MAT_GEM_004` | 18 000 / 4 500 |
| `DEC_PLT_005` | Lotus Flottant Doré | PLT | T2 | `rest_exp` +2 % | Craft Puca (Lioda) · `MAT_HRB_018` | 1 200 / 300 |
| `DEC_PLT_006` | Ronce Lumineuse d'Yggdrasil | PLT | T5 | `rest_hp_regen` +5 % | Loot/craft prestige · `MAT_DRP_019` | 90 000 / 22 500 |
| `DEC_RUG_001` | Tapis Tissé des Steppes | RUG | T1 | `rest_hp_regen` +2 % | Craft Cait Sith · `MAT_HRB_005` | 450 / 112 |
| `DEC_RUG_002` | Tenture Héraldique de Guilde | RUG | T2 | cosmétique 0 % | Craft héraldiste · `MAT_HRB_001` | 1 000 / 250 |
| `DEC_RUG_003` | Descente de Lit en Peau d'Ours | RUG | T2 | `rest_hp_regen` +3 % | Loot+tannage · `MAT_CUI_017` | 1 700 / 425 |
| `DEC_RUG_004` | Tapisserie de Fils de Mithril | RUG | T4 | `rest_mp_regen` +4 % | Craft lissier · `MAT_HRB_012` | 20 000 / 5 000 |
| `DEC_RUG_005` | Bannière de la Grande Forge | RUG | T3 | `craft_cost` −3 % | Confrérie Salamander/Leprechaun · `MAT_DRP_016` | 5 500 / 1 375 |
| `DEC_TRO_001` | Râtelier d'Armes Poli | TRO | T2 | cosmétique 0 % | Craft armurier · `MAT_WOD_018` | 1 300 / 325 |
| `DEC_TRO_002` | Tête de Roi-Taupe Empaillée | TRO | T3 | `rest_hp_regen` +3 % | Loot `MOB_GNO_024` | 6 500 / 1 625 |
| `DEC_TRO_003` | Crâne de Kraken Juvénile | TRO | T4 | `rest_mp_regen` +4 % | Loot `MOB_UND_021` | 17 000 / 4 250 |
| `DEC_TRO_004` | Écaille de Dragon Spectral sous Verre | TRO | T5 | `rest_exp` +3 % | Loot `MOB_SPR_024` | 100 000 / 25 000 |
| `DEC_TRO_005` | Plume de Phénix Montée | TRO | T5 | `rest_hp_regen` +5 % | Loot `MOB_SYL_023` | 110 000 / 27 500 |
| `DEC_FON_001` | Fontaine d'Undine | FON | T4 | `rest_mp_regen` +5 % | Craft Undine (Archipel) · `MAT_GEM_004` | 22 000 / 5 500 |
| `DEC_FON_002` | Vasque de Larmes de Puca | FON | T3 | `rest_exp` +3 % | Craft Puca (Lioda) · `MAT_DRP_014` | 7 000 / 1 750 |
| `DEC_FON_003` | Source Thermale Miniature | FON | T3 | `rest_hp_regen` +4 % | Craft Salamander (Gattan) · `MAT_MIN_020` | 6 800 / 1 700 |
| `DEC_STA_001` | Totem de Granit Gnome | STA | T3 | `rest_hp_regen` +4 % | Craft Gnome (Granzam) · `MAT_MIN_009` | 5 000 / 1 250 |
| `DEC_STA_002` | Statue de la Déesse-Mère | STA | T4 | `rest_exp` +3 % | Craft statuaire · `MAT_HRB_015` | 15 000 / 3 750 |
| `DEC_STA_003` | Gargouille Veilleuse d'Imp | STA | T2 | cosmétique 0 % | Craft Imp (Duskarn) · `MAT_MIN_008` | 1 400 / 350 |
| `DEC_STA_004` | Idole Primordiale | STA | T5 | `rest_hp_regen` +5 % | Loot/craft prestige · `MAT_DRP_020` | 120 000 / 30 000 |

---

## 2. Total par type

| Type | Libellé | Nombre |
|---|---|---:|
| FUR | Mobilier | 8 |
| LGT | Éclairage | 5 |
| PLT | Plante / Jardin | 6 |
| RUG | Tapis / Tenture | 5 |
| TRO | Trophée | 5 |
| FON | Fontaine | 3 |
| STA | Statue | 4 |
| **Total** | | **36** |

## 3. Répartition des buffs (tous ≤ +5 % — invariant I4 vérifié)

| Buff | Occurrences | Valeurs employées |
|---|---:|---|
| `rest_hp_regen_pct` | 11 | +2 %, +3 %, +4 %, +5 % |
| `rest_mp_regen_pct` | 9 | +2 %, +3 %, +4 %, +5 % |
| `rest_exp_pct` | 7 | +2 %, +3 % |
| `craft_cost_pct` (réduction frais) | 3 | −3 %, −4 % |
| `comfort_cosmetic` (0 %) | 6 | +0 % (lore pur) |

> **Règle de cumul (à câbler dans `T_PROPERTIES.deco_buffs`)** : les buffs de **même catégorie** sont **plafonnés à ±5 % cumulés** par logement (un second objet de même famille ne dépasse jamais le plafond). Les catégories différentes se cumulent librement, chacune dans sa limite de +5 %. Les objets cosmétiques (0 %) sont sans plafond.
> **Rappel portée** : `deco_buffs` n'est lu qu'à l'intérieur du logement (`!rest`, séjour dans le groupe HOME). Aucun effet en extérieur, en combat, ni dans un logement tiers.

## 4. Répartition par tier / rareté

| Tier | Rareté | Nombre | Fourchette de prix |
|---|---|---:|---|
| T1 | Commun | 4 | 300 – 500 ¥ |
| T2 | Peu commun | 13 | 900 – 1 800 ¥ |
| T3 | Rare | 7 | 4 500 – 7 000 ¥ |
| T4 | Épique | 6 | 15 000 – 22 000 ¥ |
| T5 | Légendaire | 4 | 90 000 – 120 000 ¥ (ventes exceptionnelles) |

> Prix calés sur la logique balance sheet v2.0 (revente = 25 % de l'achat, conforme au trigger I1 `buy_price ≥ resale ×4`). Les T5 (reliques Yggdrasil/Cœur du Monde, trophées de boss) sont volontairement des gold-sinks de prestige de fin de jeu, cohérents avec l'immobilier `manor`/`estate`.

## 5. Variété raciale

Fontaine/nénuphars/globe **Undine**, brasero/source thermale **Salamander**, totem/âtre **Gnome**, lit/lustre **Sylph**, armoire/tapis **Cait Sith**, établi/bannière **Leprechaun**, vasque/lotus **Puca**, gargouille **Imp**, écaille **Spriggan** — les 9 races racines sont représentées, plus des pièces pan-raciales (Déesse-Mère, reliques primordiales).

---

## 6. `[BESOIN_*]` — dépendances

- **Aucun `[BESOIN_MAT]` bloquant.** Tous les matériaux (`MAT_*`, `DIV_*`) et mobs (`MOB_*`) référencés dans les recettes/sources ont été **vérifiés existants** dans `données/items_equipements/materiaux/` et `données/personnages_bestiaire/monstres/`.
  - Substitution effectuée : la « rune de berceuse » initialement pressentie pour `DEC_FUR_008` a été remplacée par **`DIV_RUN_006` (Rune de Mana)**, réelle et cohérente avec le buff MP.
  - `DEC_LGT_004` (Bougeoir d'Ambre) : aucun matériau « ambre » n'existe au catalogue → traité comme **article de série acheté fini** (pas de recette joueur), donc pas de `[BESOIN_MAT]`.

- **`[BESOIN_SCHEMA: clé deco_buffs]`** *(non bloquant, note d'intégration)* — les clés de buff employées (`rest_hp_regen_pct`, `rest_mp_regen_pct`, `rest_exp_pct`, `craft_cost_pct`, `comfort_cosmetic`) sont proposées pour le JSONB `T_PROPERTIES.deco_buffs` ; à figer dans le contrat du moteur déterministe L1 (le buff s'ajoute à `rest_regen_pct` / à la table d'EXP de repos / aux frais de craft). La table maître n'est **pas** modifiée par ce lot.
- **`[BESOIN_COMMANDE]`** : nul — `!decorate`, `!sys_give`, `SYS_GRANT_ITEM` sont des faces existantes (cf. `table_t_properties.md` §5 et CDC-SOC-01 §4).
