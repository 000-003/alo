# 🧠 ALO_CONTEXT — Cache d'État Critique (à lire en premier après /clear)

> **Rôle** : synthèse de l'état actuel du projet pour reprise instantanée. Mis à jour à CHAQUE modification.
> **Dernière mise à jour** : 2026-07-11 — **✅ ÉTAPE 45 : AUDIT DE CONFORMITÉ DU BOT.** Audit lecture-seule du code `bot/` (50 fichiers, ~2 400 lignes) contre les CDC 13-21 → rapport **`directives_generation/22_audit_conformite_bot_etape45.md`** (AUDIT-BOT-01). Verdict : **direction saine (P0+P1 partiel, frontière déterministe respectée au runtime, templates/dégradation/stack conformes, 0 secret), 3 violations de contrat 🔴** — R1 verrou D22 absent du pipeline QI (schéma accepte K3, seed sans filtre, lectures sans clause `k_level` ; inoffensif par accident : table vide car parseur QI cassé — verrouiller AVANT de le réparer), R2 `combat.onnx` = résolution de dégâts ML entraînée+chargée (D-DET-1 ; dormant, jamais appelé), R3 économie sans verrou anti-dup (contrôles hors transaction → exploit de duplication). +7 écarts majeurs (M1 `SYS_*` absent, M2 `generate()`/load-balancer absents, M3 LLM sans grounding, M4 R0 non implémenté, M5 gazetteer absent, M6 ONNX morts, M7 seuils/taxonomie) + 11 mineurs. Ordre de correction recommandé au PE : **R1→R3→R2→M2→M1/M4→M5/M7→M6**. `bot/` intact, CDC inchangés (D-P3-1). **Addendum 45-bis (contre-audit, même jour)** : le PE a corrigé en parallèle (13 fichiers, worktree non commité) → **R2 ✅ et R3 ✅ clos proprement** ; **R1 ⚠️ partiel** (filtre lecture ajouté mais bug nR1 : `k_level` VARCHAR comparé à `2` → exclut tout, fail-closed silencieux ; ingestion + CHECK schéma + gating L1 toujours ouverts) ; M2/M4/M5/M7 avancés (`generate()` par rôle créé, déplacement écrit l'état, gazetteer branché, seuils 0.7 + LORE_QUERY), M6/h3 clos. **3 régressions nouvelles : nR1 (filtre K), nR2 (quotas jamais réapprovisionnés hors 429), nR3 (`run_all.sh` → train_combat.py supprimé)**. Priorités : nR1 → R1-ingestion/CHECK → nR2 → nR3 → M1/M3.
> **Historique proche** : ÉTAPE 44 — **RÉGULARISATION P3.** Le PE a lancé lui-même l'implémentation du bot (travail parallèle nocturne) : `bot/` = Node.js 20 + `whatsapp-web.js` + PostgreSQL/Redis + ONNX (modèles intent/NER/combat entraînés) + Docker/nginx/systemd, structuré selon les CDC 16-20. Officialisé : **CDC §11** (chantier P3 propriété PE, CDC 13-21 = contrat de conformité du code, D-P3-1/2), persona §5.1 amendé (« zéro code » reste valable pour les livrables ACP **hors `bot/`** ; intervention ACP dans `bot/` = demande PE explicite). CDC §9/§10 réalignés (P2 renflouement ✅ CLOS, table de conformité mise à jour). Dépôt git remis à niveau : commit `1940f57` (étapes 38-43, 176 fichiers) + commit bot/régularisation ; `bot/.gitignore` vérifié (0 secret versionné : `.env`, `wa_session/`, `node_modules/`, `.onnx` exclus).
> **Historique proche** : ÉTAPE 43 (2026-07-10) — **SYSTÈMES SOCIAUX & MÉMOIRE RELATIONNELLE PNJ.** 4 nouvelles tables MLD (`T_NPC_RELATIONS`, `T_PROPERTIES`, `T_MARRIAGES`+`T_MARRIAGE_ASSETS`, `T_JOBS_DICT`+`T_AVATAR_JOB`), CDC-SOC-01 (`21_cdc_systemes_sociaux.md`, D-SOC-1→14), `marriage_housing_system.md` **v2.0** (supersede le legacy prose), persona amendé §5. Réponse PE « mémoire d'interaction PNJ » = arête creuse `T_NPC_RELATIONS` (compteur d'échanges + affinité) + `T_NPC_KNOWLEDGE_UNLOCKS` (infos débloquées) + side-quests via `prerequisites`. Housing achat/location + checkpoint sûr + prérequis mariage ; mariage homme+femme monogame à séparation par provenance ; emploi salarié ; rejoindre guilde. Commandes propagées (WA §15/§10/§20/§23, IA §10/§2). **Arbitrage PE : Anneau d'Engagement = item de service dédié `MSC_ENG_001`** (sans stat, lié, consommé cérémonie ; ancienne bague `ACC_ANN_003` dépréciée/redirigée) ; **auberge exploitable = backlog** (aubergiste `JOB_HOS_001` = PNJ pour l'instant). **Contenu CDC-SOC délégué & livré (addendum 43-ter)** : **124 fiches** — SOC-1 emplois **66** (`game_design/emplois/`), SOC-2 side-quests d'affinité **22** (`game_design/quetes/qst_*_aff_*`), SOC-3 décorations **36** (`items_equipements/decoration/`, `item_type='DEC'`), SOC-4 cadeaux de noces (`wedding_gift_table.md`). Réconcilié : `T_ITEMS_DICT` (enum DEC + I4), `T_PROPERTIES` P7, `T_JOBS` §2, `_index_quetes.md` 57→79, +2 titres `T_TITLES`. Backlog mineur : auberge exploitable, 2 taverniers dédiés, peuplement `T_GUILDS`.
> **Historique** : **✅ PROJET ALO TERMINÉ + AUDIT CONFORMITÉ (étape 36) + ÉQUILIBRAGE ÉCONOMIQUE (étape 37) + ÉTUDES/CDC IA (38-42).** Tous les lots des 11 CDC livrés : PNJ 1 100, Items 731, Boutiques 302, Armures 500, Faune 256, Flore 100, Quêtes 57, Tenues 55, Micro-familles 65, Index complets. **Étape 36** : 766 fichiers non conformes archivés, 0 collision d'ID. **Étape 37** : équilibrage économique — balance sheet v2.0 (prix réels calibrés), drop rates formalisés, récompenses T5 (5 000→8 000 EXP + 500 Yrds) et légendaires (8-10k→50k EXP + 2-5k Yrds + titres), 28 fichiers modifiés. Rapport : `directives_generation/12_equilibrage_economique.md`. **Tous les chantiers transverses sont clos.**

## Directives actives (non négociables)

1. **Toute exécution est conditionnée par `system_persona_architecte.md`** (Architecte Créateur Primaire : décisions fortes sans demander validation, profondeur 200%, chaînage technique).
2. **ZÉRO CODE** — livrables markdown uniquement (données + spécifications).
3. **Modifications purement structurelles** (tables, ID, liaisons, taxonomies) — pas de prose narrative en masse.
4. Travail par étapes : s'arrêter en fin d'étape, noter l'avancée dans `alo_progression.md` + mettre à jour ce fichier. L'utilisateur fait /clear entre les étapes.
5. Règle de complétude : **tout ajout ⇒ équivalents commandes** Joueur `!*` / GM `!sys_*` / IA `SYS_*`, propagés dans toutes les couches concernées.
6. Le graphe de zones reste **symétrique** ; toute nouvelle zone passe d'abord par l'atlas.

## Environnement

- Projet : `/home/user1808/Bureau/alo` (**dépôt git**, branche `main`, remote `origin` — correction étape 44 ; Linux/Kali, shell zsh).
- Corpus données : 100% markdown. **Chantier P3 actif : `bot/` (code Node.js, propriété PE — CDC §11)** ; les livrables ACP restent markdown/spéc sauf demande PE explicite sur `bot/`.
- Mémoire persistante Claude : `~/.claude/projects/-home-user1808-Bureau-alo/memory/`.

## Documents maîtres (source de vérité)

| Fichier | Rôle |
|---|---|
| `system_persona_architecte.md` | Gouvernance |
| `cahier_des_charges.md` | **v1.1** — Spécification, décisions D1–D12 **+ D66 (non-autorité du pré-généré)**, **§10 Chantier de renflouement conforme** (table d'état : ✅ validé vs ⏳/🚧 pré-généré à régénérer) |
| `README.md` | Vue d'ensemble, conventions, état d'avancement |
| `données/cartographie/atlas_monde_liaisons.md` | **ATLAS MAÎTRE** : ID zones, graphe, taxonomie groupes WA |
| `données/cardinal_system_db/MLD_Logic/table_t_zone_links.md` | **Source de vérité du graphe** (80 liaisons seed, D9) |
| `données/the_seed_engine/system_mechanics/zone_movement_protocol.md` | Protocole déplacement R0–R10 |
| `données/the_seed_engine/whatsapp_commands_list.md` | Commandes Joueur/GM (dont `!respirer`, `!sys_env_set`) |
| `données/the_seed_engine/ai_orchestrator_commands.md` | Commandes IA (dont `SYS_SET_ENV_HAZARD`) |

## Structure de données active

- **Conventions ID** : `ZONE_<SEC>_<TYPE>_<NNN>` ; PNJ `NPC_<VILLE>_<NN>` (capitale 01-07, zones annexes 10+, D7) ; mobs `MOB_<SEC>_<NNN>` par plages (D6 : 001-004 périphérie CAP, 010-013 HUNT_001, 020-026 HUNT_002 avec 025 mini-boss / 026 boss zone, 030-034 réservée donjons) ; boss donjon `BOSS_<SEC>_DUN_001` ; mobs aériens `MOB_AIR_001-004` partagés par les 9 routes (D8).
- **Monde** : 9 territoires radiaux autour d'Alne (`ZONE_NEU_CAP_001`) ; gabarit CAP + HUNT_001 + HUNT_002 + DUN_001 + ROUTE. Anneau frontalier via paires HUNT_002. Axe vertical Yggdrasil/Jötunheimr/New Aincrad (D3).
- **Invariant R0** : 1 joueur = 1 groupe LOCATION/INSTANCE ; HUB/GUILD/PARTY/SYSTEM jamais auto-quittés.
- **Tables MLD** : **23** (19 + 4 sociales étape 43 : `T_NPC_RELATIONS`, `T_PROPERTIES`, `T_MARRIAGES`, `T_JOBS`). `T_ZONE_LINKS` prime sur `T_ZONES.connected_zones` (D9).
- **Pilier social (D-SOC-1→14, étape 43)** : mémoire PNJ = arête creuse créée à la 1ʳᵉ interaction (jamais à l'inscription) ; affinité [−100,+100]→5 paliers ; mariage homme+femme monogame, séparation par provenance (`T_MARRIAGE_ASSETS`) ; housing achat/location, checkpoint sûr (`!home_return`), prérequis mariage ; emploi salarié unique ; guilde rejoignable. Frontière déterministe L1 = seul écrivain. Périphérie CAP sans fiche cartographique (cas Undine) ⇒ mobs 001-004 rattachés à HUNT_001 (contrat T2 de `T_SPAWN_TABLES`).
- **Jauges environnementales (D12)** : paramètres unifiés `OXYGEN` / `HEAT` / `DOT` — Joueur `!respirer`, GM `!sys_env_set`, IA `SYS_SET_ENV_HAZARD`.

## Fiches de zones — couverture : ✅ 9/9 territoires complets (étape 3)

| Territoire | Capitale | Notes |
|---|---|---|
| Sylph | Swilvane | complet |
| Salamander | Gattan (D1 ; Voulg = TWN_001) | complet — Caldeira d'Obsidienne (`BOSS_SAL_DUN_001` Logi, jauge de Surchauffe D11), route, `NPC_GAT_01-07` actés (étape 3) |
| Cait Sith | Freelia | complet |
| Puca | Lioda | complet |
| Imp | Duskarn | complet |
| Gnome | Granzam | complet |
| Leprechaun | Brokkheim | complet |
| Spriggan | Penwether | complet |
| Undine | Archipel d'Écume (**CAP = fiche lore `geographie_villes` uniquement**) | complet — Lac Cristallin, Marais de Brume, Gouffre de Léviathan (Tier 5 sous-marin, `BOSS_UND_DUN_001` Jörmun, jauge d'Apnée D11), route (étape 3) |

Chaque donjon territorial (9/9) a une mécanique signature WhatsApp (D10+D11) — ex : Vacarme anti-MAJUSCULES (Imp), Surchauffe anti-spam (Salamander), Apnée = économie de messages (Undine).

## CHANTIER EN COURS — Renflouement massif « ≥100 unités par type d'objet » (directive PE, 2026-07-07)

Directive : chaque type d'objet (PNJ, armes, skills, équipements par slot, faune, flore) doit compter **au moins 100 fichiers** ; 1 unité = 1 fichier fandom, précision persona 200%, cohérence SAO. Les données auto-générées héritées (ID à hash, lore d'une ligne, zéro chaînage éco) sont **non conformes** : les remplacer, pas les compléter — archives dans `ressources_brutes/deprecated_v1/`.

**Gabarit acté (D13-D15, voir `tete/_index_armures_tete.md`)** : ID séquentiel strict (`ARM_TET_001`…) ; 5 sections (Identification / Statistiques / Acquisition & chaînage éco / Lore / Intégration Bot) ; répartition 100 = 9 races×9 (2×T1→2×T4 + 1×T5 craft-titre lié) + 9 neutres/monde + 9 drops boss donjon (8%) + 1 légendaire serveur ; grille prix T1 150-400 → T4 9k-20k Yrds, revente 25% ; mithril Brokkheim + gemmes Granzam dans les T4/T5 de toutes races.

| Lot | État |
|---|---|
| Équipements tête (`ARM_TET_001-100` + index) | ✅ 100/100 (étape 4, lot 1) |
| Autres slots armure (torse/jambes/bras/taille) | ✅ **4×100 (étapes 26-27)** — junk co-résident (57/29/34/20) **archivé étape 36** ; index `taille` créé (étape 36). Chaque slot = 100 conformes + index |
| Accessoires (anneaux 5, capes 2, ceintures 3, colliers 4) | ⏳ |
| Armes (junk v1 archivé : 205 fiches) | ✅ **Lot I-2 `WPN_*` 100/100 (étape 16)** — voir ligne dédiée |
| PNJ (185 junk racine archivé) | ✅ **Phase A COMPLÈTE** : Lot 2.1 Gattan (100) / 2.2 Canoniques (10) / 2.3 Alne (100) / 2.4 Swilvane (100) / 2.5 Voulg (100) / 2.6 Freelia (100) / 2.7 Archipel (100) / 2.8 Lioda (100) / 2.9 Duskarn (100) / 2.10 Granzam (100) / 2.11 Brokkheim (100) / 2.12 Penwether (100) = **1200 PNJ D17** |
| **Skills** `MAG_`/`OSS_`/`PAS_` (I-4, 300) | ✅ **300/300 (étape 19)** — S-1 magies 100 (10 écoles×10) / S-2 OSS 100 (10 familles) / S-3 passives 100 (CBT40/CRA25/EXP20/SOC15) ; junk archivé (309 fiches à l'étape 19, + **dossier parasite `items_equipements/skills/` 303 doublons OSS/MAG/PAS archivé étape 36** — 300 collisions d'ID éliminées, lot autoritaire = `competences_magie/`) ; canon préservé (Starburst, Revive, Mother's Rosario…) ; index `_index_skills.md`. `[BESOIN_COMMANDE]` : `SYS_GRANT_PASSIVE` à propager |
| Faune (`MOB_*` par territoire) | ✅ **256 (étape 28)** dans `personnages_bestiaire/monstres/` — legacy `mobs_sauvages/` (223 : hash `MOB_CANON`, zones_neutres 172, doublons d'ID) **archivé étape 36** (0 collision résiduelle) |
| Flore (15 racine ; sous-dossiers par race 0) | ⏳ |
| **Consommables** `CSM_*` (I-1) + annexe portage | ✅ **100/100 + 30/30 (étape 14)** — 90 `cons_*` junk archivés |
| **Armes** `WPN_*` (I-2, 100 / 13 familles) | ✅ **100/100 (étape 16)** — 205 junk `wpn_*` archivés ; 4 légendaires T5 liés ; index `_index_armes.md` |
| **Matériaux** `MAT_*` (I-3, 100 / 5 familles) | ✅ **100/100 (étape 18)** — lot pré-généré non conforme **normalisé** (renommage §0.4, recettes `Entre dans`→Item_ID réels, prix gemmes T4 sur grille, sources `xxx`→`MOB_*`/`BOSS_*`/`ZONE_*`, bot standardisé) ; junk `mat_*` déjà archivé ; index `_index_materiaux.md` + cross-walk ingrédients nommés. Gap connu : aucune famille « bois » à l'allocation §2 |

`SYS_GRANT_ITEM(Avatar_ID, Item_ID, Qty)` ajouté à `ai_orchestrator_commands.md` §5 (équivalent IA de `!sys_give`).

## ÉTAPE 10-bis (session parallèle, 2026-07-08) — Audit & CDC de délégation ✅

- **`directives_generation/`** créé : `00_audit_completude.md` (audit disque : 7 villes PNJ à zéro, boutiques = néant structurel, items junk hors lot tête) · `01_cadrage_pnj.md` (quotas de rôles **D34** + grille de recette des lots 2.6-2.12) · `02_cdc_items.md` (CDC-ITM-01 : 3×100 — `CSM_*`/`WPN_*`/`MAT_*`) · `03_cdc_boutiques.md` (CDC-SHP-01 : contrat **D35**, matrice zonale **D36**, règles R1-R8).
- **`table_t_shops.md`** actée (MLD 19ᵉ table) : `T_SHOPS` + `T_SHOP_ITEMS`, résout `T_NPC.shop_ref` ; `!sys_shop_restock`/`SYS_SHOP_RESTOCK` à propager à la recette du lot boutiques C-1.
- **D34-D37 consommées par cette étape** (D30-D33 laissées libres pour le lot 2.6 Freelia, en production parallèle). Protocole générateur délégué = **D37** (jamais de fichier maître, jamais d'ID hors plage, manques en `[BESOIN_*]`).
- Ordre d'exécution délégable : **I-1 consommables** (sans dépendance) → I-2 armes → I-3 matériaux → boutiques C-1 Gattan (dès I-1+I-2), puis 1 lot boutiques par ville livrée.
- Dette relevée : `QST_SYL_HELKA_01` promise (lot 2.4) toujours non créée.

## ÉTAPE 10-ter (session parallèle, 2026-07-08) — CDC restants + entité Avatar ✅

- `directives_generation/` **complet (00-09)** : + `04` armures/boucliers (D38 : taxonomie par SLOT, 5×100), `05` accessoires (D39, 100), `06` skills (D40 : magies 10 écoles ×10, OSS 100, passives 100), `07` faune (D41 : 249 sur plages D6, `MOB_CAT_*`→`MOB_CAI_*`), `08` flore (D42 : 100 nodes → `MAT_HRB_*`), `09` quêtes (D43 : 34 dont dette `QST_SYL_HELKA_01` en premier).
- Amendement I-2 : `WPN_BOU_*` supprimé (boucliers = slot armure D38) — épées 1M 14, arcs 12, jet 6.
- **D44 Avatar** : `T_AVATARS` slots typés complets (ring_1/2, neck, belt, back) + `inventory_capacity` évolutive (32 + niveau + ceinture + sacs `!sew` + passives, plafond 160) ; `T_INVENTORY` refondue (piles ×99, `is_bound`, triggers anti-dup/capacité/mort).
- **D38-D44 consommées.** Ordre de délégation : I-1 consommables (immédiat) → I-2/I-3 → boutiques C-1+ ∥ armures ∥ skills ∥ faune → flore → quêtes (dernier, le plus exigeant).

## ÉTAPE 10-quater (session parallèle, 2026-07-08) — Correction PE : 5 slots portés ✅

- **Modèle personnage (PE, prime sur D44 v1)** : équipement porté = **5 slots d'armure** (tête/torse/bras/taille/jambes), **PAS PLUS** ; mains = saisie (`hand_main`/`hand_off` : arme, bouclier `WPN_BOU_*`, torche) ; dos = sac `BAG_001-012` (capacité +6/+12/+20/+30, conteneur sans stat). Formule capacité : `30 + niveau + sac + passives PAS_EXP, plafond 160`.
- Cascade : `T_AVATARS`/`T_INVENTORY` refaits ; CDC-ARM = 4 lots (boucliers retirés) ; CDC-ITM : `WPN_BOU` restauré + annexe sacs 4-bis ; **CDC-ACC gelé (D39 caduque, dérogation ≥100 pour les accessoires)**.

## ÉTAPE 10-quinquies (session parallèle, 2026-07-08) — Système de port + tenue par défaut ✅

- **D45 Système de port (dissocié des 5 slots d'armure)** : ceinture `BELT_*` = 2 armes à portée (flancs G/D, dégainage instantané) ; dos = conteneur EXCLUSIF, sac `BAG_*` (+30 stockage, items/consommables **sans armes**, accès rapide sans commande) **XOR** sangle `HRN_*` (2-4 armes au dos) ; inventaire **virtuel** de base (sac facultatif) `30+niveau+passives` plafond 130 (160 avec sac) ; armes portées uniquement (mains/ceinture/sangle → surplus en banque) ; retrait virtuel = `!fetch`. Aucun item de port n'a de stat.
- **D46 Tenue par défaut** : à la création, haut `OFT_TOP_*` (torse) + bas `OFT_BOT_*` (jambes) en variante régionale selon la ville d'apparition ; bas = pantalon/short (tous) ou robe (femmes seules) ; T0 rachetable, remplacée par la 1re armure. CDC : `10_cdc_tenue_defaut.md`.
- Cascade : `T_AVATARS`/`T_INVENTORY` (storage_zone, triggers T5-T8, contrats A1-A6) ; CDC-ITM annexe 4-bis = sacs+sangles+ceintures ; §22 commandes + `SYS_SET_LOADOUT`. `directives_generation/` = 11 docs (00-10).

## Point ouvert

- Arbitrage `ZONE_ROUTE_LUGRU` (corridor souterrain cité par la fiche Lugru, hors atlas — relevé à l'étape 2, non bloquant).

## Prochaine étape

**Phase données CLOSE (CDC §10 ✅) — phase P3 OUVERTE (CDC §11, chantier PE `bot/`).** Front (a) **audit de conformité du bot : ✅ FAIT (étape 45)** — rapport `directives_generation/22_audit_conformite_bot_etape45.md` ; la correction des findings (R1 verrou K3, R3 anti-dup éco, R2 combat.onnx, puis M1-M7) relève du **PE** (ou demande PE explicite à l'ACP, D-P3-1). Fronts restants au choix du PE : (b) backlog documentaire mineur : accessoires (dérogation D39 à arbitrer), auberge exploitable + 2 taverniers + peuplement `T_GUILDS`, `!sys_rag_reindex`/`SYS_RAG_REINDEX` en `[BESOIN_COMMANDE]`, arbitrage `ZONE_ROUTE_LUGRU` ; (c) audit CGU des API gratuites avant lancement public (réserve étape 39) ; (d) contre-audit après corrections PE.

**Historique de l'état pré-44** : Tous les lots des 11 CDC sont livrés + Phase C régénérée (C-6 à C-11). Boutiques 11/11 villes (étape 25), **6 villes régénérées (Archipel/Brokkheim/Duskarn/Granzam/Lioda/Penwether) — 160 boutiques, 1 128 articles, 0 Item_ID fabriqué, 0 doublon R2**, armures 5/5 slots (26-27), faune/flore/quêtes/tenues/micro-familles (28-31), index + résolutions (32). Il ne reste **aucune dette structurelle à l'intérieur d'un lot livré**.

**Dettes/chantiers restants (hors directive PE actuelle — à arbitrer par le PE)** :
- **Boss d'axe vertical : ✅ APURÉ (étape 35)** — Yggdrasil `BOSS_YGG_001`, Jötunheimr `BOSS_JOT_001`, New Aincrad `BOSS_AIN_001/027/074/075/100` + gabarit paramétrique (index `_index_boss_axe_vertical.md`). 200 junk `boss_palier_*` archivés. Plus aucun `[TODO]` d'axe vertical.
- **Récompenses de quêtes T5/légendaires non finement chiffrées** (EXP forfaitaire 5 000 / 8-10 000, pas de drop secondaire) — équilibrage économique possible.
- Amendements items mineurs : gamme `CSM_NOU` à élargir si besoin ; arbitrage `ZONE_ROUTE_LUGRU` (non bloquant, cf. Point ouvert).
- **Audit de conformité final : ✅ APURÉ (étape 36)** — 766 fichiers non conformes archivés (junk armures 240 + faune legacy 223 + parasite skills 303), **0 collision d'ID résiduelle** (MOB/OSS/MAG/PAS/ARM), index `taille` créé, **D71** (clé canonique = `Item_ID`). Rapport : `directives_generation/11_audit_conformite_etape36.md`. Reste documenté non bloquant : variance de gabarit lot `taille` (rampe plate, pas de T5), casse de nom de fichier armures (cosmétique, D71).
- ~~**Équilibrage économique** (prix/drop rates, récompenses fines T5/légendaires) — **seul chantier transverse restant**.~~ ✅ **CLOS (étape 37)** — grille calibrée, balance sheet v2.0, 28 fichiers modifiés. Rapport : `directives_generation/12_equilibrage_economique.md`.
- **Piste P3 « architecture IA du bot » étudiée (étapes 38-39)** : deux livrables. `13_etude_architecture_multi_ia.md` — constellation de 10 spécialistes mono-tâche (S0-S9), frontière déterministe absolue (combat/éco jamais neuronaux), RAG sur les 3 400 fiches = cerveau partagé, tiering Haiku/Sonnet/Opus (D-IA-1→6). `14_architecture_hybride_orchestration.md` — **stack hybride 100 % GRATUIT prêt à l'expansion** : cascade 4 couches — C1 local / **C2 = 2 meilleures API gratuites (Groq + Gemini Flash)** / **C3 = pool des autres API gratuites (Cerebras, Cloudflare, OpenRouter `:free`, Mistral, HuggingFace, GitHub Models)** / C4 dégradé déterministe ; **aucun palier payant** (option réversible par config). Désengorgement par diversification de quotas (budget effectif = Σ fournisseurs C2+C3) + load-balancer *quota-aware* + failover en cascade. **Statelessness stricte** + sharding par lieu = clé anti-refonte ; interface agnostique `generate(role,prompt,contexte,politique)` (D-IA-7→12). Réserve : auditer CGU des tiers gratuits (commercial/données) avant lancement public. **Loi actée** : décomposer *distribue* le travail (n'en réduit pas le total) → expansion additive par config/capacité, jamais réécriture. `15_cdc_rag.md` — **CDC-RAG-01** (fondation) : chunking par section de gabarit, schéma de métadonnées (clé `entity_id` D71), **exclusion K3/méta/secret à l'ingestion** (verrou D22 = propriété de l'index), gating K0/K1/K2 via L1, contrat de récupération borné par spécialiste, injection attribuée, RAG local C1 (embedding small CPU + `sqlite-vec`), anti-hallucination (grounding + validation ID aval L1). Décisions **D-RAG-1→9** ; `!sys_rag_reindex`/`SYS_RAG_REINDEX` en `[BESOIN_COMMANDE]`. **Jeu de CDC d'implémentation complet (étape 41, intègre `etude_deepseek.md`)** : `16_cdc_nlu_locale.md` (compréhension = encodeurs ONNX MiniLM/BERT-tiny, pas de LLM ; résolution d'entités en IDs D71 ; bootstrapping regex→BERT-tiny), `17_cdc_specialistes_narratifs.md` (S2-S7, **dialogue à 2 modes** retrieval-local/génératif-API, Template Engine 90 %), `18_cdc_orchestration_runtime.md` (interface agnostique `generate()`, load-balancer *quota-aware*, boucle `SYS_*`, stack ONNX+Node+Redis ~4 Go/24, feuille de route P0-P6), `19_cdc_moteur_deterministe.md` (L1 combat/Dijkstra+R0/éco/inventaire/quêtes + **contrat `SYS_*` validation 6 étapes, L1 seul écrivain, hallucination d'ID rejetée** + exception ML comportement de mob). Décisions **D-NLU/SPE/ORC/DET-***. Ordre d'implé : déterministe+RAG avant génératif. **`20_cdc_selection_modeles.md` (étape 42)** : comparaison des modèles, **correction majeure = franciser** (les choix DeepSeek sont anglophones, corpus FR) ; `multilingual-e5-small` = embedding unique (RAG+dialogue+intent) ; gazetteer nom→ID > BERT-tiny pour les entités ; Behavior Tree *authored* > MLP pour le comportement mob (contrôle designer D10/D11) ; génération priorité FR (Mistral + Gemini Flash) ; repli local Qwen2.5-1.5B/Gemma-2-2B. Décisions **D-MOD-1→6** ; tout substituable par config. Reste markdown/spéc ; implémentation Node.js = décision PE séparée.

**Dette de commandes : ✅ APURÉE** (étape 21) — étapes 33-34 n'ont introduit aucune commande (déblocage via `!learn_skill`/`SYS_GRANT_SPELL`/`SYS_GRANT_OSS`/`SYS_GRANT_ITEM`/`!titre_set`/`!forge` existants).

*(Phase A COMPLÈTE — 12 rosters × 100 PNJ. Rappel : les K3 méta réservés orchestrateur, jamais confirmés, 1 révélation méta max/session.)*
