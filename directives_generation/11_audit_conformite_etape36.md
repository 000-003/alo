# 🔍 AUDIT DE CONFORMITÉ FINAL — Rapport d'étape 36 (2026-07-10)

> **Chantier transverse** : audit de conformité post-livraison (11 CDC livrés, étapes 1-35).
> **Objet** : détecter et résoudre les violations de conformité résiduelles — junk co-résident, doublons d'ID, ID fantômes, gabarits divergents, séquences incomplètes.
> **Principe** : rien n'est supprimé — tout junk part en `ressources_brutes/deprecated_v1/` (pattern établi). Chaque résolution est vérifiée mécaniquement (comptage, `comm`, `grep` de références).

---

## 1. Synthèse exécutive

| # | Défaut | Gravité | Statut | Fichiers |
|---|---|---|---|---|
| A | Junk d'armures co-résident dans les 5 dossiers de slot actifs | 🔴 Haute | ✅ RÉSOLU | 240 archivés |
| B | Lot faune legacy `mobs_sauvages/` en doublon d'ID avec `monstres/` | 🔴 Haute | ✅ RÉSOLU | 223 archivés |
| C | Dossier parasite `items_equipements/skills/` (300 skills en doublon d'ID) | 🔴 Haute | ✅ RÉSOLU | 303 archivés |
| D | Index de slot `taille` manquant | 🟠 Moyenne | ✅ RÉSOLU | 1 créé |
| E | ID fantôme `ZONE_JOT_DUN_001` | 🟢 Faux positif | ✅ VÉRIFIÉ SAIN | 0 |
| F | Variance de gabarit (lot `taille`, casse de nom de fichier armures) | 🟡 Cosmétique | 📝 DOCUMENTÉ (D71) | — |

**Bilan** : 766 fichiers non conformes archivés (rien perdu, 0 ID unique sacrifié). **0 collision d'ID résiduelle** (MOB/OSS/MAG/PAS/ARM, vérifié par titre). Corpus actif ramené de ~3 865 à **3 406** fichiers markdown conformes.

---

## 2. Finding A — Junk d'armures co-résident 🔴 → ✅

**Constat** : les étapes 26-27 ont créé les lots conformes `ARM_<SLOT>_001-100` mais **sans archiver** les données pré-générées qu'elles remplaçaient (violation de la directive « remplacer, pas compléter »). Résultat : chaque dossier de slot contenait le lot conforme **plus** du junk.

| Slot | Total avant | Conforme conservé | Junk archivé | Détail junk |
|---|---|---|---|---|
| tête | 201 | 100 (`arm_tet_*`, lot D13 indexé, plus riche) | **100** | lot doublon `ARM_TET_*.md` (UPPER_BARE) — même espace d'ID |
| torse | 158 | 100 (`ARM_TOR_*`) | **57** | 16 hash `arm_NNN_HEX` + 39 `arm_canon_*` (noms dégénérés, `legerère`, `:`) + 2 strays |
| jambes | 130 | 100 (`ARM_JAM_*`) | **29** | 13 hash + 12 canon + 4 strays |
| bras | 135 | 100 (`ARM_BRA_*`) | **34** | 6 hash + 24 canon + 4 strays |
| taille | 120 | 100 (`ARM_TAI_*`) | **20** | 5 hash + 12 canon + 3 strays |

Ces chiffres de junk (57/29/34/20) **correspondent exactement** aux valeurs relevées dans `alo_context.md` (chantier armures) — confirmant qu'il s'agit précisément du junk non archivé des étapes 26-27.

**Résolution** : junk → `deprecated_v1/armures_junk/<slot>/`. Vérifié après coup : chaque slot = **100 fiches (séquence `_001`→`_100` complète, 0 manquant) + 1 index**. Aucune référence live vers le junk (les renvois inter-fiches utilisent l'`Item_ID` interne `ARM_<SLOT>_NNN`, uniforme dans tous les lots — 0 renvoi par nom de fichier).

---

## 3. Finding B — Faune legacy en doublon d'ID 🔴 → ✅

**Constat** : le lot faune conforme (étape 28, **256 fiches**) vit dans `personnages_bestiaire/monstres/` (20/territoire × 9 + neutre 20 + air 6 + axe vertical). Le dossier `personnages_bestiaire/mobs_sauvages/` (223 fichiers) est du **legacy pré-étape-28** jamais archivé, composé de :
- **100 fiches hash-junk `MOB_CANON_NNN_HEX`** (0 référence live) ;
- **172 fiches `zones_neutres/`** (dont les canon-hash ci-dessus) — le « junk zones_neutres » signalé au contexte ;
- **doublons `mob_<race>_NNN_slug`** dont l'`Item_ID` (`MOB_SAL_001`, `MOB_SYL_001`…) **collisionne** avec le lot autoritaire `monstres/` (chaque ID présent dans les deux dossiers) ;
- **orphelins `mob_<race>_N`** sans `Item_ID` (0 référence) ;
- doublons legacy `mob_cat_*` (préfixe `MOB_CAT` déprécié, renommé `MOB_CAI` par D41).

**Test de sûreté** : sur les 128 ID distincts de `mobs_sauvages/`, **0 ID est à la fois référencé live ET absent de `monstres/`** — donc archiver le dossier entier laisse toutes les références valides (elles résolvent vers `monstres/`) et **élimine les collisions**.

**Résolution** : `mobs_sauvages/` (223) → `deprecated_v1/mobs_sauvages_legacy/`. Faune autoritaire = `monstres/` (259 fiches). Vérifié : **0 collision d'ID MOB en titre** dans les dossiers actifs.

---

## 4. Finding C — Dossier parasite `items_equipements/skills/` 🔴 → ✅

**Constat** : l'index autoritaire `competences_magie/_index_skills.md` (étape 19) qualifie explicitement `items_equipements/skills/` de **« dossier parasite »** et note l'archivage de ses variantes `SKL_*` (100). Mais les **300 doublons `OSS_*`/`MAG_*`/`PAS_*`** (+ 3 sous-index) y étaient restés. Intersection d'ID : **300 communs, 0 unique** à l'un ou l'autre dossier → duplication intégrale de l'espace d'ID.

**Autorité** : le lot canonique est `competences_magie/` (`magies/<école>/`, `oss/<arme>/`, `passives/<domaine>/` — conventions de l'index). Seule référence de chemin vers le parasite = la note de junk de l'index lui-même.

**Résolution** : `items_equipements/skills/` (303) → `deprecated_v1/skills_parasite_oss_mag_pas/`. 300 collisions d'ID skill éliminées. Lot autoritaire `competences_magie/` intact (~300 fiches + index maître).

---

## 5. Finding D — Index `taille` manquant 🟠 → ✅

Les slots tête/torse/jambes/bras avaient leur `_index_armures_<slot>.md` ; **`taille` n'en avait aucun**. Créé : `armures/taille/_index_armures_taille.md` (couverture 100/100, grille de valeurs, organisation par bloc de ville, registre complet 001-100, rappel de complétude bot).

---

## 6. Finding E — ID fantôme `ZONE_JOT_DUN_001` 🟢 (faux positif)

4 occurrences détectées, **toutes en notes de résolution de l'étape 34** (barré `~~ZONE_JOT_DUN_001~~ ✅ RÉSOLU`, « et non `ZONE_JOT_DUN_001` »). **Aucun renvoi live.** L'ancrage réel (`ZONE_JOT_RAID_001` / `ZONE_JOT_FLD_001`, atlas maître) est en place. Pas de défaut — l'étape 34 avait bien fait son travail.

---

## 7. Finding F — Variances de gabarit 🟡 (documenté, non bloquant)

- **Lot `taille`** : gabarit délégué simplifié (labels sous-famille EN `Cloth/Leather/Maille/Chain`, sections `Fabrication`/`Usage` sans accents) + **rampe de tiers plate** (T1×20/T2×30/T3×35/T4×15, **pas de T5 ni de légendaire**) au lieu de la structure raciale D14. Structurellement complet, cohérent en interne. Réharmonisation possible au futur audit de gabarit si le PE l'exige.
- **Casse de nom de fichier armures** : `tête` = `arm_tet_NNN_slug.md` (minuscules, étape 4/D13) ; torse/jambes/bras/taille = `ARM_<SLOT>_NNN.md` (UPPER bare, étapes 26-27). **`Item_ID` interne uniforme** `ARM_<SLOT>_NNN` dans tous les lots ; **0 renvoi par nom de fichier** (tout se résout par ID). Impact purement cosmétique.

### Décision actée

- **D71** : la **clé canonique** d'un item/entité est son `Item_ID` interne (uniforme, séquentiel), **jamais le nom de fichier**. La casse/le slug du nom de fichier est non autoritatif ; les divergences cosmétiques héritées (armures tête vs autres slots) ne sont pas corrigées en masse (churn/risque nuls pour gain structurel nul). Tout futur chargeur (bot P3) indexe par `Item_ID`.

---

## 8. Observations résiduelles (hors périmètre, pour mémoire)

- **Corpus source SAO** (light novels / manga `.md`, Anna's Archive) présent en double dans deux racines `ressources_brutes/` — matériel de référence hors données de jeu, non traité.
- **Deux racines `deprecated_v1`** (`./ressources_brutes/deprecated_v1` et `./données/ressources_brutes/deprecated_v1`) coexistent. Les archives de cette étape suivent le pattern établi (`données/ressources_brutes/deprecated_v1/`). Consolidation possible mais non urgente.
- Chantiers PE ouverts inchangés : **équilibrage économique** (prix/drop rates), récompenses fines des quêtes T5/légendaires, arbitrage `ZONE_ROUTE_LUGRU`.

---

## 9. Bilan de conformité post-audit

| Catégorie | Lot autoritaire | Statut |
|---|---|---|
| PNJ | 12 rosters × 100 (00-99, 0 doublon) + canoniques | ✅ |
| Armures | 5 slots × 100 (`ARM_<SLOT>_001-100`) + 5 index | ✅ (junk purgé) |
| Skills | `competences_magie/` 300 (MAG/OSS/PAS) + index | ✅ (parasite purgé) |
| Faune | `monstres/` 256 (plages D6) | ✅ (legacy purgé) |
| Armes / Matériaux / Consommables / Flore / Tenues | `WPN`/`MAT`/`CSM`/`FLO`/`OFT` | ✅ |
| Quêtes | 57 (33 localité + 20 T5 + 4 légendaires) | ✅ |
| Boutiques | 11 villes | ✅ |
| Boss axe vertical | `BOSS_YGG/JOT/AIN_*` + index | ✅ |

**0 collision d'ID en titre** (MOB/OSS/MAG/PAS/ARM). Corpus actif = **3 406 `.md`** conformes ; **766 fichiers non conformes archivés** cette étape (rien perdu).
