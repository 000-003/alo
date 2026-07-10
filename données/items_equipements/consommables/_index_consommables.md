# 🧪 INDEX — Lot I-1 Consommables (`CSM_*`) + Annexe Portage

> **Lot CDC-ITM-01, I-1.** Gabarit de référence : `armures/tete/_index_armures_tete.md` (D13-D15). Produit à l'étape 14.
> **Couverture : 100/100 consommables `CSM_*` + 30/30 portage (`BAG`/`HRN`/`BELT`).**

## Convention & structure

- **ID séquentiel strict** par sous-famille : `CSM_POT_001-040`, `CSM_NOU_001-035`, `CSM_PAR_001-015`, `CSM_CRI_001-010`.
- **Nommage fichier** : `csm_<sous>_<nnn>_<slug>.md` (minuscules, sans accents, underscores).
- **Gabarit** : 5 sections (Identification Cardinal / Effet / Acquisition & Chaînage éco / Lore Argo / Intégration Bot).
- Junk v1 archivé dans `ressources_brutes/deprecated_v1/consommables/` (102 fichiers, dont `cons_*`, `csm_pot_*` non séquentiels, et les 3 fiches lore ancien format `crystals_system` / `world_tree_droplet` / `familiar_heart`). **Rien supprimé.**

## Grille de valeurs (fermée, CDC §3)

| Tier | Niveau | Prix potion/parch. (Yrds) | Effet soin HP | Cristal = ×3 prix potion |
|---|---|---|---|---|
| T1 | 1-8 | 20-80 | 50-120 | — |
| T2 | 10-18 | 90-300 | 200-400 | — |
| T3 | 20-30 | 350-900 | 600-1 000 | 1 350-1 500 |
| T4 | 32-42 | 1 200-2 400 | 1 500-2 500 | 4 500-5 400 |

Buffs : +5% (mineur, 30 min) / +10% (majeur, 1 h). Revente 25%.

---

## 1. Potions — `CSM_POT_001-040`

| Plage | Bloc | Détail |
|---|---|---|
| 001-010 | Soins HP | T1→T4 + 2 régénérations (009, 010) |
| 011-018 | Mana MP | T1→T4 + régén (015) + affines Lioda/Undine/Gnome (016/017/018) |
| 019-026 | Antidotes / dissipations | poison (019, 020), brûlure+HEAT (021), gel (022), **Vacarme Imp (023)**, malédiction (024), purge totale (025), dissipation magique (026) |
| 027-034 | Buffs | STR (027, 031), AGI (028, 032), VIT (029), INT (030), résist. feu (033), résist. glace (034) |
| 035-040 | **Anti-jauges D12** | HEAT (035 T3, 036 T2) · OXYGEN (037 Coralia, 038 T4) · DOT (039, 040) |

## 2. Nourriture — `CSM_NOU_001-035`

| Plage | Bloc | Détail |
|---|---|---|
| 001-009 | **Plats signature raciaux** (1/race) | Salamander (STR), Sylph (AGI), Cait Sith (VIT), Puca (INT), Undine (INT), Imp (STR), Gnome (VIT), Leprechaun (résist. feu), Spriggan (INT) |
| 010-018 | Rations neutres T1 | pain, fromage, viande séchée, pomme, ration de campagne, galette, poisson fumé, soupe, biscuit — rassasiement (régén hors combat) |
| 019-027 | Taverne (buff mineur +5%/30 min) | affines Leprechaun (019, 025), Cait Sith (021), Spriggan (024), Puca (026), Imp (027) ; neutres (020, 022, 023) |
| 028-035 | Cuisine premium (buff majeur +10%/1 h) | Chef Aubin `NPC_ALN_47` (028, 029, 031, 034) + filet (030), rôti Spriggan (032), curry Salamander (033), grand cru Yggdrasil (035) |

## 3. Parchemins — `CSM_PAR_001-015`

| Plage | Bloc | Détail |
|---|---|---|
| 001-005 | Retour | Alne (001), cité natale de race (002), rappel dernière ville (003), guilde (004), sortie de donjon (005) |
| 006-010 | Utilitaires | identification (006), réparation mineure/majeure (007, 008), déliage mineur (009), purification d'objet (010) |
| 011-015 | Skill consommable T1-T2 | boule de feu (011, Salamander), soin (012, Undine), éclair (013), bouclier (014, Gnome), bourrasque (015, Sylph) |

## 4. Cristaux — `CSM_CRI_001-010`

| Plage | Bloc | Détail |
|---|---|---|
| 001-004 | Soin / mana instantanés | ignorent le cooldown des potions ; soin T3/T4 (001, 002), mana T3/T4 (003, 004) |
| 005-007 | Téléportation | ville visitée (005), corridor de groupe (006), fuite d'urgence (007) — inutilisables en Anti-Crystal Zone |
| 008-010 | Enregistrement / rappel | marquage (008), pierre de rappel (009), ralliement de groupe (010) |

## 5. Annexe Portage (CDC §4-bis) — `données/items_equipements/portage/`

**Aucune stat de combat. Aucun bonus.** Slots `gear_back` (BAG **XOR** HRN) et `gear_belt`.

| Famille | Plage | Fonction | Tiers |
|---|---|---|---|
| Sacs `BAG` | `BAG_001-012` | Stockage **+30** (items/conso/matériaux, jamais d'armes) + accès rapide | T1×3 (variantes Freelia/Swilvane/Granzam), T2×3, T3×3 (variantes Undine/Gattan), T4×3 |
| Sangles `HRN` | `HRN_001-009` | Armes au dos : **2** (T1) / **3** (T2) / **4** (T3) — aucun stockage | T1×3, T2×3, T3×3 |
| Ceintures `BELT` | `BELT_001-009` | **2 fourreaux** (flancs G/D) — distincte de `ARM_TAI_*` | T1×3, T2×3, T3×3 |

---

## Décompte racial (checklist §6.3 — ≥3 consommables signature par race)

| Race | Consommables affins | Total |
|---|---|---|
| Salamander | POT_027/033/036, PAR_011, NOU_001/033 | **6** ✅ |
| Undine | POT_017/030/034/037/038, PAR_012, NOU_005 | **7** ✅ |
| Sylph | POT_028/032, PAR_015, NOU_002 | **4** ✅ |
| Gnome | POT_018/029, PAR_014, NOU_007 | **4** ✅ |
| Cait Sith | POT_032, NOU_003/021 | **3** ✅ |
| Puca | POT_016, NOU_004/026 | **3** ✅ |
| Imp | POT_023, NOU_006/027 | **3** ✅ |
| Leprechaun | NOU_008/019/025 | **3** ✅ |
| Spriggan | NOU_009/024/032 | **3** ✅ |

**Anti-jauges D12** (checklist §6.4 — ≥2 potions/jauge) : HEAT = POT_035, POT_036 ✅ · OXYGEN = POT_037, POT_038 ✅ · DOT = POT_039, POT_040 ✅.

## `[VÉRIFIÉ]`

- Aucun ID de zone/mob/boss inventé. PNJ cités **vérifiés existants** : Coralia `NPC_UND_07`, Chef Aubin `NPC_ALN_47`, Vosk `NPC_GAT_96`, Ison `NPC_ALN_66`.

## `[QUESTIONS_LOT]`

1. **Matériaux de recette** : les ingrédients sont nommés en clair (Herbe-de-vie, Fleur-de-lune, Racine d'ambre, Éclat de saphir brut, Piment-de-braise, Cuir souple/épais, Papier-rune, Encre-de-seiche, Gemme/Poudre de gemme de Granzam, Mithril de Brokkheim, Larme d'Yggdrasil…). Leurs `MAT_*` seront assignés au **lot I-3 Matériaux** (contrat éco §77 du CDC) ; à recroiser à ce moment-là (les herbes de ces recettes doivent figurer dans `MAT_HRB_*`, les gemmes dans `MAT_GEM_*`, cuirs dans `MAT_CUI_*`, minerais/mithril dans `MAT_MIN_*`).
2. **Artefacts uniques hors périmètre** : `world_tree_droplet` (objet de résurrection, 100 000 Yrds) et `familiar_heart` (artefact de sauvegarde de familier Cait Sith, lié au fil méta « Premier Familier » de Freelia D32) ont été archivés car ils **ne rentrent pas dans l'allocation fermée `CSM_*`** (pas de slot résurrection ni artefact de quête dans le §2). → à cadrer dans une piste future « artefacts uniques / objets de quête » (hors CDC-ITM-01).
3. ✅ **`!accept_rally` / `!enter_portal`** (APURÉ étape 21, 2026-07-09) : `!accept_rally` actée dans `whatsapp_commands_list.md` §17 (`!enter_portal` y figurait déjà). Résolution d'effet côté IA : `SYS_GROUP_RECALL` (`CSM_CRI_010`) et `SYS_OPEN_CORRIDOR` (`CSM_CRI_006`) en §8 ; équivalents GM `!sys_recall_party` / `!sys_open_corridor` §1. Commande générique **`!use [Item_ID]`** aussi actée (§5) — les 100 fiches `CSM_*` l'employaient sans définition maître.
