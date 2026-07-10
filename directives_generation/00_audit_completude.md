# 🔍 AUDIT DE COMPLÉTUDE — Données de jeu ALO (2026-07-08, étape 10)

> **Auteur** : Architecte Créateur Primaire. **Méthode** : comptage exhaustif disque (fichiers réels, pas les déclarations d'index). **Objet** : établir ce qui manque pour que chaque zone possède un PNJ de chaque rôle et des boutiques aux articles différenciés, puis cadrer la production déléguée (CDC 01-03 de ce dossier).

---

## 1. Synthèse exécutive

| Volet | Couverture réelle | Verdict |
|---|---|---|
| PNJ — villes fichées | 5/12 localités (Gattan, Alne, Swilvane, Voulg = 400 fiches + 21 canoniques) | 🚧 **7 villes à zéro** → 700 fiches à produire |
| PNJ — couverture des rôles | 7/7 `role_type` présents dans chaque ville fichée | ✅ acquis, mais quotas jamais formalisés → **D34** |
| Boutiques | **0 inventaire structuré** sur ~120 PNJ marchands existants | 🔴 chantier entier → **CDC-SHP-01** |
| Items vendables | 1 seule famille conforme (tête 100/100) ; 36 autres familles junk ou vides | 🔴 bloquant pour les boutiques → **CDC-ITM-01** |
| Quêtes | 1 fiche (`QST_NEU_LESSIVE_01`) ; `QST_SYL_HELKA_01` promise, non créée | 🟠 dette, hors périmètre immédiat |

**Chemin critique** : PNJ des 7 villes (rosters = liste des marchands) → items (les rayons) → boutiques (les inventaires). Les boutiques sont le **dernier** maillon : impossible de les produire avant.

---

## 2. Volet PNJ — état par localité

| Localité | Zone | Fiches | État |
|---|---|---|---|
| Gattan (Salamander) | `ZONE_SAL_CAP_001` | 100/100 | ✅ lot 2.1 |
| Canoniques errants | — | 21 | ✅ lot 2.2 |
| Alne (neutre) | `ZONE_NEU_CAP_001` | 100/100 | ✅ lot 2.3 |
| Swilvane (Sylph) | `ZONE_SYL_CAP_001` | 100/100 | ✅ lot 2.4 |
| Voulg (Salamander) | `ZONE_SAL_TWN_001` | 100/100 | ✅ lot 2.5 (vérifié disque à cet audit) |
| **Freelia** (Cait Sith) | `ZONE_CAI_CAP_001` | **0** | ⏳ lot 2.6 |
| **Archipel d'Écume** (Undine) | `ZONE_UND_CAP_001` | **0** | ⏳ lot 2.7 |
| **Lioda** (Puca) | `ZONE_PUC_CAP_001` | **0** | ⏳ lot 2.8 |
| **Duskarn** (Imp) | `ZONE_IMP_CAP_001` | **0** | ⏳ lot 2.9 |
| **Granzam** (Gnome) | `ZONE_GNO_CAP_001` | **0** | ⏳ lot 2.10 |
| **Brokkheim** (Leprechaun) | `ZONE_LEP_CAP_001` | **0** | ⏳ lot 2.11 |
| **Penwether** (Spriggan) | `ZONE_SPR_CAP_001` | **0** | ⏳ lot 2.12 |

### Distribution des rôles observée (villes fichées)

| `role_type` | Gattan | Alne | Swilvane | Voulg | Lecture |
|---|---|---|---|---|---|
| MERCHANT | 25 | 25 | 28 | ~24 | stable 20-28 |
| SERVICE | ~44 | 46 | 46 | ~46 | stable 40-48 |
| GUARD | ~9 | 6 | 12 | ~11 | 6-12 |
| QUEST_GIVER | ~8 | 11 | 7 | ~9 | 6-11 |
| SKILL_MASTER | 4 | 6 | 4 | 3 | 3-6 |
| LORD | 2 | 1 | 1 | 1 | 1-2 |
| BLACK_MARKET | 2 | 6 | 2 | 4 | 2-6 |

→ Tous les rôles sont couverts partout. Ces fourchettes deviennent des **quotas contraignants (D34)** dans `01_cadrage_pnj.md`, pour que la production en cours ne puisse pas livrer une ville sans SKILL_MASTER ou sans BLACK_MARKET.

### Non-conformités relevées (non bloquantes)

1. **Gattan, fiches ~78-99** : en-tête « Identification » au format liste (pré-D17) au lieu du format table. Fond conforme, forme divergente. → retrofit P3, ne pas confier au générateur délégué.
2. `alo_context.md` avait un retard d'une étape sur `alo_progression.md` (corrigé à l'étape 10).

---

## 3. Volet Boutiques — constat : néant structurel

1. **Aucune table d'inventaire** : `T_NPC.shop_ref` (colonne existante, `table_t_npc.md` ligne 18) ne pointe vers **rien** — aucune table `T_SHOPS`, aucun fichier d'inventaire nulle part dans `données/`.
2. **Les fiches MERCHANT ne vendent rien de concret** : la section 4 « Chaînage économique » nomme la spécialité (« armes légères — rapières, dagues ») et une commande (`!armes cort`) mais **zéro Item_ID, zéro prix, zéro stock**. Exemple type : `npc_swi_21_vieux_cort.md`.
3. **`!shop_list` / `!buy` / `!sell`** (commandes actées, `whatsapp_commands_list.md` ligne 68) sont donc **non résolubles** : le bot n'a aucune donnée à afficher.
4. Volume à produire : ~120 boutiques sur les villes fichées (MERCHANT + BLACK_MARKET), **~290 à terme** sur les 12 localités.

→ Résolu par **D35** (contrat de fiche boutique + table `T_SHOPS`) et **D36** (matrice de différenciation zonale : ce que chaque ville produit, importe, interdit) dans `03_cdc_boutiques.md`.

---

## 4. Volet Items — les rayons sont vides

Comptage disque vs objectif « ≥100 unités conformes par type » (directive PE 2026-07-07). Les fichiers hérités v1 (ID hash, lore 1 ligne, zéro chaînage) sont **junk = à remplacer, pas à compléter**.

| Famille | Réel | Conforme ? | Priorité boutiques |
|---|---|---|---|
| Armures tête | 100 | ✅ gabarit D13-D15 | référence |
| Consommables (potions 9 / nourriture 0 / parchemins 0 / cristaux 0) | 9 | ❌ | 🔴 **P1** — toute boutique en vend |
| Armes (13 familles, 51 fichiers au total, légendaires 0) | 51 | ❌ junk | 🔴 **P1** |
| Matériaux (minerais 3, herbes 3, gemmes 2, cuirs_os 2, drops 3) | 13 | ❌ | 🟠 **P2** — rachat des drops |
| Armures autres slots (torse 57, jambes 29, bras 34, taille 20…) | ~190 | ❌ junk | 🟠 P2 |
| Accessoires (anneaux 5, capes 2, ceintures 3, colliers 4) | 14 | ❌ | ⚫ **hors périmètre** (directive PE 5 slots — cf. `05_cdc_accessoires.md`, junk à archiver) |

→ Résolu par `02_cdc_items.md` : 3 lots de 100 (consommables, armes, matériaux) au gabarit éprouvé du lot tête. Les slots d'armure restants suivent le même CDC par simple substitution de paramètres (déjà cadré par D13-D15).

---

## 5. Volet Quêtes (dette relevée, hors périmètre CDC)

- 1 seule fiche : `game_design/quetes/qst_neu_lessive_01.md`.
- `QST_SYL_HELKA_01` **promise** par le lot 2.4 (`_index_pnj.md` ligne 394) et jamais créée.
- ~31 QUEST_GIVER fichés sans aucune fiche quête associée. Pas d'objectif chiffré acté → backlog P2, à cadrer après les boutiques.

---

## 6. Séquencement de production (chemin critique)

```
PHASE A — PNJ (7 lots, 2.6→2.12)        → cadrage : 01_cadrage_pnj.md (production DÉJÀ EN COURS, lot 2.6 démarré)
   chaque lot livre : roster D20/D34 + 100 fiches D17
PHASE B — Items (3 lots de 100)          → CDC : 02_cdc_items.md
   B1 consommables · B2 armes · B3 matériaux   (peut courir EN PARALLÈLE de A)
PHASE C — Boutiques (12 lots, 1/localité) → CDC : 03_cdc_boutiques.md
   dépend : roster de la ville (A) + lots B1-B2 livrés
```

Chaque CDC est **autoporteur** : gabarits copy-paste, vocabulaire fermé, interdits explicites, checklist de validation — calibré pour un modèle générateur de moindre capacité (D37 : il ne touche **jamais** aux fichiers maîtres et ne crée **jamais** d'ID hors des plages qui lui sont allouées).
