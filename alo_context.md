# 🧠 ALO_CONTEXT — Cache d'État Critique (à lire en premier après /clear)

> **Rôle** : synthèse de l'état actuel du projet pour reprise instantanée. Mis à jour à CHAQUE modification.
> **Dernière mise à jour** : 2026-07-08 — Étape 7 lot 2.3 Alne : **✅ CLOS — 100/100 fiches** (`NPC_ALN_00-99`) dans `pnj/alne/`, gabarit D17, émoji 🌳, budget 12 pour hubs (00, 01, 08, 09, 99) sinon 10, répartition QI 3/3/2/1/1 (12 → 3/3/3/2/1). Notables `01-07` refichés canon ; 6 fils rouges distribués (aucun résolu) ; 13 liens inter-cités Gattan honorés + 4 réservés (Helka/Swilvane→91, Zarn/Undine→92, Ilka/Granzam→93). Quête `QST_NEU_LESSIVE_01` créée (`game_design/quetes/`). Commandes propagées : `whatsapp_commands_list.md` §21 (Joueur/GM) + `ai_orchestrator_commands.md` §14 (IA). [antérieur : étape 6/6-bis Gattan 100+Canoniques 10 clos.]

## Directives actives (non négociables)

1. **Toute exécution est conditionnée par `system_persona_architecte.md`** (Architecte Créateur Primaire : décisions fortes sans demander validation, profondeur 200%, chaînage technique).
2. **ZÉRO CODE** — livrables markdown uniquement (données + spécifications).
3. **Modifications purement structurelles** (tables, ID, liaisons, taxonomies) — pas de prose narrative en masse.
4. Travail par étapes : s'arrêter en fin d'étape, noter l'avancée dans `alo_progression.md` + mettre à jour ce fichier. L'utilisateur fait /clear entre les étapes.
5. Règle de complétude : **tout ajout ⇒ équivalents commandes** Joueur `!*` / GM `!sys_*` / IA `SYS_*`, propagés dans toutes les couches concernées.
6. Le graphe de zones reste **symétrique** ; toute nouvelle zone passe d'abord par l'atlas.

## Environnement

- Projet : `/home/user1808/Bureau/alo` (pas un dépôt git, Linux/Kali, shell zsh).
- Aucune dépendance logicielle : projet 100% markdown (bot Node.js = hors périmètre, backlog P3).
- Mémoire persistante Claude : `~/.claude/projects/-home-user1808-Bureau-alo/memory/`.

## Documents maîtres (source de vérité)

| Fichier | Rôle |
|---|---|
| `system_persona_architecte.md` | Gouvernance |
| `cahier_des_charges.md` | Spécification, décisions D1–D12, backlog (P1/P1-bis ✅, P2/P3 ⏳) |
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
- **Tables MLD** : 18. `T_ZONE_LINKS` prime sur `T_ZONES.connected_zones` (D9). Périphérie CAP sans fiche cartographique (cas Undine) ⇒ mobs 001-004 rattachés à HUNT_001 (contrat T2 de `T_SPAWN_TABLES`).
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
| Autres slots armure (torse 57 junk, jambes 29, bras 34, taille 20, boucliers_armure 0, cuir/maille/plaque/tissu/robes ≤6) | ⏳ |
| Accessoires (anneaux 5, capes 2, ceintures 3, colliers 4) | ⏳ |
| Armes (154 junk racine + familles ≤11) | ⏳ |
| PNJ (185 junk racine ; gardes/queteurs/lords 0) | ✅ Lot 2.1 Gattan (100) / 2.2 Canoniques (10) / **2.3 Alne (100 + `QST_NEU_LESSIVE_01`)**. Reste Swilvane→Penwether ⏳ |
| Skills (magies par école ≤10 sauf support 141 junk ; oss ≤4 ; passives 11) | ⏳ |
| Faune (mobs par territoire ≤6 ; zones_neutres 172 junk) | ⏳ |
| Flore (15 racine ; sous-dossiers par race 0) | ⏳ |
| Consommables 93 / Matériaux 190 (audit conformité à faire) | ⏳ |

`SYS_GRANT_ITEM(Avatar_ID, Item_ID, Qty)` ajouté à `ai_orchestrator_commands.md` §5 (équivalent IA de `!sys_give`).

## Point ouvert

- Arbitrage `ZONE_ROUTE_LUGRU` (corridor souterrain cité par la fiche Lugru, hors atlas — relevé à l'étape 2, non bloquant).

## Prochaine étape

**Lot 2.4 Swilvane** (capitale Sylph, `ZONE_SYL_CAP_001`) — **roster d'abord** (00-99, gabarit D16/D20 dans `_index_pnj.md`), puis production des 100 fiches au gabarit D17 (5 sections, QI 3/3/2/1/1, K3 « JAMAIS + déflection », budget 12 pour hubs sinon 10), émoji propre à Swilvane (ex. 🍃), stats grilles §2.6/D15. Méthode éprouvée sur Alne : produire par tranches de sous-lieu, mettre à jour `alo_context.md` + `_index_pnj.md` (compteur X/100) à chaque tranche, propager toute NOUVELLE commande dans `whatsapp_commands_list.md` + `ai_orchestrator_commands.md`. **Liens réservés à activer côté Swilvane** : Aeliss `NPC_ALN_91`↔Helka/Swilvane (`QST_SYL_HELKA_01`). Vérifier le canon fandom éventuel de Swilvane avant de figer les notables `01-07`.

*(Lot 2.3 Alne clos : 100 fiches `NPC_ALN_00-99`, `QST_NEU_LESSIVE_01`, commandes §21/§14. Les K3 des PNJ méta 00/35/81/98/99 = réservés orchestrateur, jamais confirmés, 1 révélation méta max/session.)*
