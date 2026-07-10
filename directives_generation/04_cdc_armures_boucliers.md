# 🛡️ CDC-ARM-01 — Armures par slot (4 lots × 100) — D38 (amendé PE : 5 slots portés, pas plus)

> **Destinataire** : modèle générateur délégué. Document autoporteur : tout ce qui n'y figure pas est INTERDIT. Règles d'or **D37** applicables en totalité (cf. `02_cdc_items.md` §0 : 1 item = 1 fichier, ID séquentiels, jamais de fichier maître, junk → `deprecated_v1/`, manques → `[BESOIN_*]`).
> **Modèle à copier** : le lot tête `ARM_TET_001-100` (`données/items_equipements/armures/tete/` + son `_index_armures_tete.md`). Ce lot est la **référence absolue** de forme et de fond — s'en écarter = non conforme.

---

## 1. D38 — Taxonomie par SLOT (décision d'architecture, amendée par directive PE 2026-07-08)

**L'équipement porté du personnage = exactement 5 slots d'armure : tête, torse, bras, taille, jambes — PAS PLUS.** Les mains (saisie d'objets : armes, boucliers, torches) et le dos (sac de stockage) sont **dissociés** de l'équipement porté (cf. `table_t_avatars.md`, contrats A1-A3). L'armurerie est organisée **par slot**, la matière (Tissu/Cuir/Maille/Plaque) étant un **attribut** de fiche — jamais un dossier.

1. **Dossiers actifs** : `tete/` (✅ fait), `torse/`, `jambes/`, `bras/`, `taille/`.
2. **Dossiers matière dépréciés** : `cuir/`, `maille/`, `plaque/`, `tissu/`, `robes_magiques/` → contenu intégral déplacé vers `ressources_brutes/deprecated_v1/armures_matiere/`. Les robes magiques deviennent des **torses de classe Tissu** dans le lot A-1.
3. **Les boucliers ne sont PAS une armure** : ce sont des objets **saisis en main** (`hand_off`) — famille d'armes `WPN_BOU_*` du lot I-2 (`02_cdc_items.md`). Le dossier `armures/boucliers_armure/` (vide) est supprimé du périmètre.

## 2. Lots et plages d'ID (fermées)

| Lot | Slot | Dossier cible | Plage | Junk à archiver d'abord |
|---|---|---|---|---|
| A-1 | Torse | `armures/torse/` | `ARM_TOR_001-100` | 57 fichiers + `robes_magiques/` (2) + matières |
| A-2 | Jambes | `armures/jambes/` | `ARM_JAM_001-100` | 29 fichiers |
| A-3 | Bras | `armures/bras/` | `ARM_BRA_001-100` | 34 fichiers |
| A-4 | Taille | `armures/taille/` | `ARM_TAI_001-100` | 20 fichiers |

**Répartition des 100 (identique au lot tête, D13)** : 9 races × 9 items (2×T1, 2×T2, 2×T3, 2×T4, 1×T5 craft-titre **lié**) + 9 neutres/monde + 9 drops de boss de donjon (8%) + 1 légendaire serveur (Yggdrasil). Mithril de Brokkheim + gemmes de Granzam obligatoires dans les T4/T5 de toutes les races (D15). Ordre des blocs raciaux : celui du lot tête (Sylph, Salamander, Undine, …).

## 3. Grilles de valeurs (fermées) — DEF par slot et par tier

| Tier | Tête (réf.) | **Torse** | **Jambes** | **Bras** | **Taille** |
|---|---|---|---|---|---|
| T1 | 7-15 | 11-24 | 8-18 | 6-12 | 4-9 |
| T2 | 20-36 | 32-58 | 24-43 | 16-29 | 12-22 |
| T3 | 40-70 | 64-112 | 48-84 | 32-56 | 24-42 |
| T4 | 85-120 | 136-192 | 102-144 | 68-96 | 51-72 |
| T5 | 126-200 | 200-320 | 151-240 | 100-160 | 76-120 |

- **Prix, niveaux, durabilité, revente 25%** : grille du lot tête, inchangée (T1 150-400 Yrds → T4 9 000-20 000 ; T5 jamais vendable en boutique). Le torse peut monter à +30% du plafond de prix de son tier (pièce maîtresse) ; la taille descend à −30%.
- **Pénalité de vol par classe** (D13) : Tissu 0% · Cuir 0/−1% · Maille −1/−2% · Plaque −3/−6%.
- **Bonus** : 1 stat max en T1-T2, 2 max en T3+, jamais de % avant T3. Anti-jauges D12 : ≥1 pièce anti-HEAT (Salamander), ≥1 anti-OXYGEN (Undine) par lot, comme `ARM_TET_014`/`ARM_TET_024`.

## 4. Gabarit de fiche

Celui du lot tête, à l'identique (5 sections : Identification Cardinal / Statistiques / Acquisition & Chaînage économique / Lore Encyclopédie d'Argo / Intégration Bot). Une substitution : `Slot` = Torse / Jambes / Bras / Taille.
Recettes : matériaux `MAT_*` du lot I-3 (s'il n'est pas livré : nommer le matériau en clair + le consigner en `[BESOIN_ITEM]`). Sources boutique : nommer la ville, JAMAIS un `SHOP_ID` (les boutiques référencent les items, pas l'inverse).

## 5. Index et checklist de recette

Chaque lot livre `_index_armures_<slot>.md` calqué sur `_index_armures_tete.md`. Recette (Architecte) :
1. 100 fichiers exacts par lot (A-1 → A-4), séquence 001-100 sans trou ; junk archivé AVANT (dossiers matière vidés au lot A-1).
2. Zéro valeur hors grilles §3 ; répartition 81+9+9+1 exacte ; T5 tous liés.
3. Mithril + gemmes présents dans chaque bloc racial T4/T5 ; ≥1 anti-HEAT et ≥1 anti-OXYGEN.
4. Chaque item : source d'acquisition résoluble (boutique de ville D36, craft PNJ existant, drop `MOB_*`/`BOSS_*` par plages D6).
