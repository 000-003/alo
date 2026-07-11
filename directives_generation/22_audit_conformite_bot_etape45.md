# 🔍 AUDIT-BOT-01 — Audit de conformité du code `bot/` contre les CDC 13-21 (étape 45)

> **Type** : rapport d'audit P3 (étape 45, 2026-07-11). Périmètre : `bot/` (50 fichiers versionnés, ~2 400 lignes JS/Python) + chaîne de peuplement (`scripts/seed-generator.js`, `schema.sql`, `seed*.sql`, `rebuild.sh`) en tant que dépendances directes du bot.
> **Cadre** : CDC §11 + **D-P3-1** — `bot/` est propriété PE ; **tout écart constaté est un point d'audit, pas une mise à jour tacite des CDC**. Ce rapport ne modifie aucun fichier de `bot/`. La correction relève du PE (ou d'une demande PE explicite à l'ACP).
> **Référentiel** : CDC 15 (RAG/D22), 16 (NLU), 17 (spécialistes), 18 (orchestration/`generate()`), 19 (moteur déterministe L1/`SYS_*`), 20 (modèles), + persona §2.2/§5.3, D71, R0.
> **Méthode** : lecture intégrale des sources (`src/`, `training/`, conf déploiement), traçage des appels (grep d'usage réel de chaque module), vérification croisée schéma/seed, contrôle d'hygiène git.

---

## 0. Verdict général

**Le chantier est sain dans sa direction, non conforme dans trois contrats.** Le code correspond à la phase **P0 + P1 partiel** de la feuille de route (CDC 18 §9) — l'ordre imposé « déterministe avant génératif » (D-ORC-7) est respecté : L1 est du code pur, le LLM ne produit que du texte et n'écrit jamais l'état, le jeu tourne API coupée (`USE_API=false` par défaut). Le Template Engine (D-SPE-2) et la cascade de repli existent.

**Mais 3 violations de contrat (🔴 R1-R3) doivent être corrigées avant d'avancer**, dont une sur le verrou D22 — la propriété de sécurité la plus importante du projet — aujourd'hui inoffensive **par accident uniquement**.

| CDC | Verdict | Synthèse |
|---|---|---|
| **15 — RAG** | 🔴 **non conforme** | pas de RAG au sens CDC (pas d'index vectoriel, pas de chunking, pas de métadonnées) ; **verrou D22 absent du pipeline** (R1). Phase P2 non entamée — acceptable — mais le pipeline de connaissance PNJ existant viole D-RAG-2/4 |
| **16 — NLU** | 🟠 partiel | mode « regex jour-1 » conforme D-NLU-4 ✅ ; mais modèles ONNX livrés non branchés, seuil 0.3 ≠ 0.7, taxonomie d'intentions divergente, résolution nom→ID absente (M5) |
| **17 — Spécialistes** | 🟠 partiel | Template Engine ✅ ; embryon de dialogue 2 modes ✅ ; mais LLM appelé **sans grounding RAG**, sans contexte attribué, sans anti-injection (M3) |
| **18 — Orchestration** | 🟠 partiel | stack conforme ✅ (Node 20/Express/wa-web.js/PG/ONNX/Docker/nginx/systemd) ; `generate(role,…,politique)` **absent**, pas de load-balancer quota-aware, pas de circuit breaker, Gemini configuré mais non câblé (M2) |
| **19 — Moteur L1** | 🔴 **non conforme** | résolution runtime déterministe ✅ ; mais `combat.onnx` = **régression de dégâts ML** entraînée+chargée (R2, ligne rouge D-DET-1), économie **sans verrou anti-dup** (R3), pipeline `SYS_*` inexistant (M1), R0 non implémenté (M4) |
| **20 — Modèles** | 🟠 partiel | esprit « FR d'abord » présent (prompts FR, Mistral dans la cascade) ; mais TF-IDF/bag-of-words maison au lieu de `multilingual-e5-small` (D-MOD-2), pas de gazetteer (D-MOD-3), IDs de modèles API périmés (m4) |
| **21 — Social** | ⚪ hors périmètre code | rien d'implémenté (PARTY/GUILD = « prochaine mise à jour ») — conforme à la feuille de route, aucune dette |
| **Hygiène dépôt (CDC §11)** | ✅ conforme | `.env`/`wa_session/`/`.onnx` non versionnés (0 secret côté `bot/`) ; réserve : `rebuild.sh` **racine** (h3) |

---

## 1. 🔴 Violations de contrat (à corriger avant toute suite P2+)

### R1 — Verrou D22 : K3 peut atteindre le contexte narratif ; il n'existe aucun verrou structurel

**Contrat** : D-RAG-2 — « le verrou D22 est une **propriété de l'index**, pas une consigne de prompt » ; K3 **jamais stocké** dans ce qui est servi au narratif ; D-RAG-4 — K2 servi **uniquement si débloqué** (état L1).

**Constat** (chaîne complète) :
1. `schema.sql:725` — `T_NPC_KNOWLEDGE.k_level CHECK (… 'K3','KX')` : la table **qui alimente le dialogue** accepte K3 par conception.
2. `scripts/seed-generator.js:226-247` — le parseur de table QI pousse `parts[2]` (le niveau K) **tel quel**, sans aucun filtre d'exclusion K3/secret/méta.
3. `bot/src/services/rag.js:43` — `SELECT content, k_level FROM t_npc_knowledge WHERE npc_id=$1 ORDER BY k_level ASC LIMIT 3` : **aucune clause `k_level`**. Un PNJ à 3 slots K0/K1/K3 sert son K3 au joueur. Même sans K3, le K2 est servi **sans gating** (`SYS_NPC_KNOWLEDGE_UNLOCK` n'existe nulle part).
4. `bot/src/handlers/dialogue.js:51-53` — même requête de repli (`LIMIT 1`), même absence de filtre.

**Pourquoi ce n'est pas exploitable aujourd'hui** : le regex du parseur QI ne matche pas le gabarit réel des fiches → `T_NPC_KNOWLEDGE` est **vide** (0 INSERT dans `seed_data.sql`). La sécurité du secret serveur repose donc sur **un bug de parsing**. Le jour où le PE répare le parseur (étape naturelle de P2), les K3 des 1 200 PNJ partent en base et de là dans les réponses — exactement le scénario que D-RAG-2 interdit.

**Attendu** : (a) exclusion **à l'ingestion** dans `seed-generator.js` (drop de toute ligne `K3`/`KX` + fils méta + `secret_note`) ; (b) contrainte structurelle — `CHECK (k_level IN ('K0','K1','K2'))` sur la table servie au narratif (le K3 vit ailleurs, côté orchestration L1 uniquement, ou nulle part en base) ; (c) clause `k_level <= niveau_débloqué` dans **toutes** les requêtes de lecture, le niveau venant de l'état L1. Belt-and-suspenders, comme spécifié.

### R2 — `combat.onnx` : une résolution de combat par ML existe, est entraînée et chargée au démarrage (ligne rouge D-DET-1)

**Contrat** : D-DET-1 — la **résolution** de combat = code pur, 0 IA ; « y mettre un réseau = un bug déguisé ». La seule exception ML est le **comportement** de mob (D-DET-3), et encore, le CDC 20 (D-MOD-4) lui préfère un Behavior Tree *authored*.

**Constat** :
- `bot/training/train_combat.py` entraîne un **RandomForestRegressor qui prédit les dégâts** (`y_damage`) sur 10 000 combats simulés, exporté en `models/combat.onnx`.
- `bot/src/models/combat.js` (`predictDamage`) exécute ce modèle via ONNX.
- `bot/src/models/loader.js` le **charge au démarrage** ; `/health` le rapporte comme composant du système.

**Circonstance atténuante décisive** : `predictDamage` n'est **appelé nulle part** (grep d'usage vide) — la résolution runtime réelle est `engine/combat.js` (`ATK²/(ATK+DEF)`, déterministe ✅). La frontière est donc respectée **en production**. Mais l'artefact entraîné + branché au loader est exactement le « bug déguisé » du CDC : un refactor bien intentionné peut le mettre en service en une ligne.

**Attendu** : supprimer `combat.onnx`, `train_combat.py`, `src/models/combat.js` (et leur chargement), **ou** les requalifier explicitement et exclusivement en *politique de comportement de mob* (D-DET-3), avec un nom qui ne dit pas « damage ». Noter qu'un prédicteur de *dégâts* ne peut pas devenir un sélecteur d'*action* — la sortie n'est pas la bonne : en l'état, ce modèle n'a **aucun usage légal** dans l'architecture.

### R3 — Économie : contrôles hors transaction, aucun verrou d'avatar → exploit de duplication possible (D-DET-2 étape 4, D-DET-4, persona §2.2)

**Contrat** : validation `SYS_*` étape 4 = **LOCK** (verrou d'état de l'avatar, anti-duplication) ; D-DET-4 — locking + transactions atomiques ; persona §2.2 — verrouiller l'état pendant le calcul « afin d'éviter les exploits de duplication ».

**Constat** (`bot/src/engine/economy.js`) :
- `buyItem` : le contrôle de solde (`canAfford`, l.40) s'exécute **hors transaction**, puis l'UPDATE débite sans garde (`SET yrd_balance = yrd_balance - $1` sans `WHERE yrd_balance >= $1`, sans `SELECT … FOR UPDATE`). Deux messages « achète » simultanés (trivial sur WhatsApp) passent tous deux le contrôle → **solde négatif**.
- `sellItem` : même schéma — la quantité d'inventaire est lue hors transaction (l.94-99), puis `UPDATE quantity = $1` avec une valeur calculée sur la lecture périmée → deux ventes concurrentes de la même pile **dupliquent les Yrds**.
- Aucun mécanisme de verrou par avatar (ni Redis — dépendance déclarée mais jamais connectée — ni Map, contrairement au combat qui a l'embryon `activeCombats`).

**Attendu** : au minimum `SELECT … FOR UPDATE` sur l'avatar et la ligne d'inventaire **dans** la transaction, ou UPDATE conditionnels (`WHERE yrd_balance >= $1` / `WHERE quantity >= $1` + test du rowCount) ; à terme, le verrou d'avatar générique de l'étape 4 du pipeline `SYS_*` (M1). Les transactions BEGIN/COMMIT/ROLLBACK existantes donnent l'atomicité ✅ mais pas l'isolation des contrôles.

---

## 2. 🟠 Écarts majeurs (dette d'architecture, à résorber au plus tard à la phase indiquée)

### M1 — Pipeline `SYS_*` inexistant (D-DET-2, D-ORC-5) — *bloquant pour P5*
Aucune validation en 6 étapes (existence D71 → prérequis → autorisation D22 → lock → exécution atomique → résultat), aucun registre `SYS_*`. Acceptable en P1 (aucune IA ne « propose » encore d'action d'état), mais c'est **le** contrat central : à implémenter avant le premier spécialiste génératif émetteur de `SYS_*`. Le verrou d'avatar de R3 devrait naître ici.

### M2 — Interface `generate(role, prompt_figé, contexte, politique)` absente (D-ORC-1) — *« seule pièce à figer dès le jour 1 »*
`services/llm.js` a une bonne base (abstraction fournisseur, failover séquentiel, repli gabarits) mais : pas de notion de **rôle**, pas de **politique par rôle** (liste C1→C4 configurable), pas de seaux à jetons rpm/rpd (bascule à 90 %), pas de circuit breaker — le failover ne réagit qu'aux erreurs, il n'anticipe pas les murs de quota (D-ORC-3). **`GEMINI_API_KEY` existe en config mais aucun provider Gemini n'est câblé** dans `PROVIDERS`. L'ordre statique `groq→mistral→openrouter→huggingface` ignore la priorité FR par rôle narratif (D-MOD-5). Plus le code grossit autour de `llm.js` tel quel, plus la mise en conformité coûtera — c'est précisément l'anti-pattern que D-ORC-1 voulait éviter.

### M3 — Génération sans grounding : le LLM répond au joueur sans contexte RAG, sans attribution, sans anti-injection (D-SPE-5, D-RAG-6/8)
`enhanceDialogue` (`llm.js:170-181`) : prompt = 1 ligne de persona + **le message brut du joueur**, réponse renvoyée telle quelle. Aucun bloc `<contexte_recupere>`, aucune citation `[entity_id · section]`, aucune règle « je ne sais pas », aucune défense contre l'injection de prompt (un joueur peut réécrire le rôle du PNJ). Tant que `USE_API=false`, dormant ; dès l'activation, non conforme. À traiter avec P2 (le RAG réel) — le grounding est la condition d'activation de l'API, pas une option.

### M4 — R0 non implémenté ; le déplacement n'écrit pas l'état
`handlers/movement.js` : Dijkstra sur `T_ZONE_LINKS` ✅ (bonne source de vérité, D9), mais `current_zone_id` n'est **jamais mis à jour**, aucune gestion des groupes WhatsApp (1 joueur = 1 groupe LOCATION — l'invariant maître R0), pas de distinction adjacence/voyage, pas de coût MP réellement débité. Le déplacement est aujourd'hui une simulation narrative. Incomplétude P1 assumée plutôt que violation — mais R0 doit être le **premier** invariant du moteur de mouvement quand il écrira l'état, et la brique groupes WA (add/remove du joueur) n'existe nulle part dans `services/whatsapp.js`.

### M5 — Résolution nom→ID absente (D-NLU-3, D-MOD-3)
Le « NER » (`models/ner.js`) n'extrait que les IDs canoniques tapés littéralement (`CSM_POT_HP_001`) + 4 mots-clés codés en dur. « Achète 3 potions » → `buy_fail_notfound` : **le joueur doit connaître les IDs internes**, inversion complète du contrat. Le gazetteer (aho-corasick + fuzzy sur l'index nom→ID dérivé du corpus) est le chaînon manquant n°1 de l'expérience joueur ; il est aussi prérequis du dialogue (« parle au forgeron » ne résout que 4 métiers).

### M6 — Modèles ONNX livrés, chargés, jamais appelés ; NLU réelle = mots-clés
`intent.onnx` (TF-IDF+LogReg), `ner.onnx`, `embed.onnx`, `combat.onnx` sont entraînés (`training/`), versionnés en artefacts `.npy`/`.json`, chargés par `loader.js`… et **aucune inférence n'est branchée** : `classifyIntent` = score de mots-clés maison, `extractEntitiesNER` retombe inconditionnellement sur les regex, `embed.js` = bag-of-words 64d maison, `semanticSearch` = code mort. Le mode « regex jour-1 » est conforme (D-NLU-4) ; livrer des modèles morts ne l'est pas — RAM consommée, `/health` menteur (« 4/4 chargés » ≠ utilisés), et les choix d'entraînement (TF-IDF anglophone-agnostique, embed maison) ne correspondent pas à D-MOD-2 (`multilingual-e5-small` mutualisé). Décision attendue : brancher OU débrancher, mais pas l'entre-deux.

### M7 — Seuils et taxonomie d'intentions divergents (D-NLU-2, CDC 16 §2)
- Seuil de repli : CDC = `confidence < 0.7` → regex ; code = `0.3` (`router.js:44`, `message-handler.js:27`), et la « confiance » du classifieur mots-clés (`score×2`) n'est pas calibrée.
- Classes : le CDC en fixe 17 mappées sur les commandes `!*` ; le code omet `EQUIP`/`VAULT`/`MAIL`/`LORE_QUERY`/`SYSTEM` et ajoute `EMOTE`/`WHISPER`/`STATUS`/`SOCIAL`. **`LORE_QUERY` manquant = S7 (Q&R lore) non routable** — toute question lore part en dialogue PNJ ou en échec.

---

## 3. 🟡 Points mineurs & hygiène

| # | Constat | Référence |
|---|---|---|
| m1 | **Redis** : dépendance npm + config, jamais connecté (ni file, ni cache, ni lock). À câbler (locks R3/M1, état de combat) ou retirer | CDC 18 §6 |
| m2 | **`tests/` vide** — « déterminisme → testable unitairement » (D-DET-4) : 0 test. Le moteur L1 est pourtant la partie triviale à tester | CDC 19 §5 |
| m3 | **État de combat en Map mémoire** (`activeCombats`) : perdu au restart, incompatible sharding par lieu (D-IA-10). Persona §2.2 autorise Map pour le *lock*, pas comme unique persistance d'un combat en cours | CDC 18 |
| m4 | **IDs de modèles API périmés** : Groq `llama3-70b-8192` (décommissionné ; CDC cite `llama-3.3-70b`), URL HuggingFace `api-inference` dépréciée. La réserve D-MOD (« revérifier au lancement ») s'applique dès maintenant | CDC 20 §5 |
| m5 | **Formule de combat** : base `ATK²/(ATK+DEF)` ✅ mais multiplicateur `attacker.level/defender.level` **brut** (niv. 50 vs mob niv. 1 → ×50 dégâts — l'entraînement `train_combat.py` utilise, lui, `1+(Δniv)×0.05` borné, plus sain) ; pas de hit/miss, I-frames, crit, élément, jauges D11/D12 ; mort sans pénalité « Remain Light » ; Yrds de kill = `exp×0.3` forfaitaire (le `bounty_yrds` de `T_MONSTERS_DICT` est ignoré — la grille étape 37 ne s'applique pas) | CDC 19 §1 |
| m6 | **Recherche de monstre par `ILIKE %…%`** (`handlers/combat.js:23`) : « attaque loup » peut matcher n'importe quel monstre du dictionnaire **globalement, sans filtre de zone** — on peut engager un mob d'un autre territoire. Le spawn/zone (`T_SPAWN_TABLES`) n'est pas consulté | CDC 19 |
| m7 | **API HTTP sans authentification** (`/api/message` accepte n'importe quel `playerId`, `/api/stats` compte toutes les tables) et exposée via nginx 443. Acceptable en dev ; à verrouiller avant tout lancement (rejoint la réserve CGU/lancement public de l'étape 39) | CDC §11 |
| m8 | **Fallback `playerId` universel** `…-000000000001` (index.js:125, message-handler.js:22) : tout inconnu joue le même avatar fantôme — surprenant à plusieurs ; le flux « création d'avatar » (`createPlayer` existe dans `services/player.js`) n'est jamais appelé | CDC 19 |
| h1 | **Hygiène git `bot/` ✅** : `.env`, `wa_session/`, `models/*.onnx`, `node_modules/` non versionnés ; 0 secret dans les 50 fichiers trackés (confirme étape 44.5). `training/venv/` (17 000+ fichiers) est hors git mais pollue le disque — candidat `.gitignore` explicite | D-P3-2 |
| h2 | **Mot de passe DB par défaut en dur** : `config.js:16` (`'0000'`) et `.env.example`. Dev local acceptable ; à durcir avant exposition | CDC §11 |
| h3 | **`rebuild.sh` (racine, versionné) contient `echo 0000 \| sudo -S`** — un mot de passe **sudo** en clair dans le dépôt. Hors périmètre `bot/` mais c'est le fichier qui peuple sa base. À purger (le mot de passe, pas le script) | hygiène dépôt |

---

## 4. ✅ Conformités constatées (à préserver)

1. **Frontière déterministe respectée au runtime** : `engine/{combat,economy,movement}.js` = code pur ; aucune IA ne décide un chiffre d'état en production ; le LLM ne produit que du texte (D-DET-1 de facto — réserve R2 sur l'artefact dormant).
2. **Template Engine** (`services/template.js`) : gabarits paramétriques, `render()` robuste (placeholders manquants neutralisés), chemin nominal de ~100 % des réponses actuelles — D-SPE-2 ✅, et la couche C4 existe donc déjà.
3. **Dégradation gracieuse** : le serveur démarre sans DB, sans WhatsApp, sans modèles, sans API (init try/catch par composant) ; `USE_API=false` par défaut ; cascade `getDialogueResponse → DB → LLM → défaut par rôle` = l'esprit du dialogue 2 modes (D-SPE-1) et de D-DET-4 (« le jeu tourne même IA down »).
4. **Stack** conforme CDC 18 §6 : Node 20 ESM + Express + `whatsapp-web.js` + PostgreSQL (tables MLD réelles : `t_avatars`, `t_zone_links`, `t_shops`…) + `onnxruntime-node` + Docker/nginx(TLS)/systemd. Budget RAM trivialement tenu.
5. **Ordre de la feuille de route** (D-ORC-7) : P0 ✅, P1 entamé, aucun génératif branché par défaut — le déterministe précède bien le génératif.
6. **Dijkstra sur `T_ZONE_LINKS`** (source de vérité D9) avec `requires_flight` honoré — le bon graphe, la bonne priorité.
7. **Transactions SQL** BEGIN/COMMIT/ROLLBACK + requêtes systématiquement **paramétrées** ($1…) — pas d'injection SQL détectée sur l'ensemble des requêtes lues.
8. **Hygiène git** : 0 secret versionné côté `bot/` (D-P3-2 ✅).

---

## 5. Position sur la feuille de route P0-P6 (CDC 18 §9)

| Phase | État constaté |
|---|---|
| P0 Fondation | ✅ (Node+PG+ONNX chargé ; Redis déclaré non câblé) |
| P1 Moteur L1 | 🚧 ~50 % — combat/éco/mouvement partiels (R3, M4, m5), quêtes lecture seule, **pipeline `SYS_*` absent** (M1) |
| P2 RAG | ❌ non entamé (le module `rag.js` actuel est un cache SQL, pas l'index CDC 15) — **c'est ici que R1 doit être réglé, avant l'ingestion** |
| P3 NLU | 🚧 stade « regex jour-1 » conforme ; modèles entraînés non branchés (M6), gazetteer absent (M5) |
| P4 Templates + retrieval | 🚧 templates ✅ ; retrieval de répliques K0-K2 réel dépend de P2 |
| P5 Orchestration | ❌ (`generate()` M2, load-balancer, boucle `SYS_*`) |
| P6 Spécialistes génératifs | ❌ (embryon `enhanceDialogue` dormant, non conforme M3 — ne pas activer avant P2/P5) |

## 6. Ordre de correction recommandé (au PE)

1. **R1** — verrou K3 structurel (ingestion + CHECK + clauses de lecture) : *avant* de réparer le parseur QI, pas après.
2. **R3** — verrous/UPDATE conditionnels sur l'économie : 30 lignes, ferme un exploit réel dès aujourd'hui.
3. **R2** — supprimer/requalifier `combat.onnx` et sa chaîne : une décision, dix minutes.
4. **M2** — figer `generate(role, prompt, contexte, politique)` maintenant, tant que `llm.js` est petit (c'est le « jour 1 » de D-ORC-1).
5. **M1/M4** — pipeline `SYS_*` + écriture réelle du déplacement sous R0 (fin de P1).
6. **M5/M7** — gazetteer nom→ID + réalignement taxonomie/seuils (débloque l'UX joueur).
7. **M6** — trancher : brancher les ONNX (en passant à e5-small, D-MOD-2) ou les retirer du dépôt/loader.

---

*Rapport établi en lecture seule (D-P3-1). Aucun fichier de `bot/` modifié. Les CDC 13-21 restent inchangés — aucun écart constaté ne justifie d'amendement du référentiel : sur chaque divergence, c'est le code qui doit converger vers le CDC, à l'exception d'aucune.*

---

# ADDENDUM 45-bis — Contre-audit après la vague corrective PE (2026-07-11, 13h37-13h40)

> Le PE a appliqué une vague de correctifs dans `bot/` (13 fichiers modifiés, 3 supprimés, 1 créé — non commitée au moment du contre-audit) répondant à R1-R3 et M2/M4/M5/M6/M7/h3. Re-vérification par diff intégral contre l'état audité (`HEAD`).

## 1. Re-verdict par finding

| Finding | Re-verdict | Constat |
|---|---|---|
| **R1 verrou D22** | ⚠️ **PARTIEL + bug nR1** | Filtre `k_level` ajouté aux 2 lectures (`rag.js`, `dialogue.js`) ✅ dans l'intention… mais **bugué** (nR1 ci-dessous, fail-closed). **L'ingestion (`seed-generator.js`) et le CHECK du schéma sont inchangés** : le cœur du contrat (« le verrou est une propriété de l'index ») reste ouvert. Gating K2 codé en dur (`knowledgeLevel: 2` constant) — toujours pas lié à l'état de déblocage L1 (D-RAG-4) |
| **R2 combat.onnx** | ✅ **CLOS** | `src/models/combat.js`, `training/train_combat.py`, `combat_feature_names.json` supprimés ; `combat.onnx` retiré de `models/` ; `loader.js` réduit à un stub explicite (« Modèles ONNX : désactivés — moteur déterministe uniquement ») ; `/health` ne ment plus. Résidus cosmétiques : `config.js:38` (`MODEL_COMBAT`), et **nR3** (run_all.sh cassé) |
| **R3 anti-dup éco** | ✅ **CLOS** | `buyItem`/`sellItem` : `SELECT … FOR UPDATE` sur avatar **et** ligne d'inventaire, UPDATE/DELETE **conditionnels** (`AND yrd_balance >= $` / `AND quantity >= $`) avec test de `rowCount`, contrôles et crédit déplacés **dans** la transaction, ordre de verrouillage cohérent (avatar→inventaire, pas de deadlock). Conforme au contrat. Nit : `newBalance: total` dans le retour de vente (libellé trompeur, sans effet de jeu) |
| **M2 `generate()`** | 🚧 avancé | **`generate(role, prompt, context, policy)` existe** avec table `ROLES` (priorité de backends par rôle — Mistral premier sur DIALOGUE/COMBAT ✓ D-MOD-5 — system prompt, température, gabarits C4 par rôle) + compteurs de quota et coupure sur 429. Manque : **Gemini toujours non câblé**, quotas fictifs sans rpm/rpd réels ni bascule à 90 %, et **bug nR2** |
| **M3 grounding** | 🚧 structurel | Slot `context.ragContext` prévu dans `callProvider` (bloc « Contexte récupéré ») ✅ — mais **aucun appelant ne le renseigne** (`dialogue.js` appelle `enhanceDialogue` sans contexte). Pas d'anti-injection. Dormant (`USE_API=false`) |
| **M4 R0/état** | 🚧 avancé | `handleMove` **écrit désormais `current_zone_id`** + débite les MP par UPDATE conditionnel (`mp_current >= coût`) ✅. Reste : aucun contrôle d'adjacence ni de temps de trajet (déplacement multi-sauts **instantané** vers toute zone atteignable), et la gestion des groupes WhatsApp (le R0 proprement dit) toujours absente |
| **M5 gazetteer** | ✅ substantiel | **`services/gazetteer.js` créé** (index items/PNJ/zones chargé de la DB au démarrage, normalisation d'accents, appariement exact/inclusion/mots communs) et branché dans le NER (PNJ/zones systématiques, items derrière 3 mots-clés). Limites : pas de tolérance aux pluriels (« 3 potion**s** de soin » ne résout pas « Potion de soin » — il manque le fuzzy Levenshtein du CDC), monstres non couverts (le ILIKE global m6 demeure) |
| **M6 ONNX morts** | ✅ clos (par retrait) | Le PE a tranché « débrancher » : loader stub, plus aucune inférence fantôme, `/health` honnête. Résidus inertes : `embed.js`/`intent.js` maison, artefacts `.npy`, dépendance `onnxruntime-node` dans package.json |
| **M7 seuils/taxonomie** | ✅ largement | Seuil **0.7** appliqué aux deux endroits ✓ ; **`LORE_QUERY` ajouté et routé vers `retrieveLore`** avec repli « connaissances limitées » (esprit S7 ✓) ; `VAULT`/`MAIL`/`EQUIP` ajoutés (stubs assumés). `SYSTEM` manque encore (mineur) |
| **h3 rebuild.sh** | ✅ clos | `echo 0000 \|` purgé (nit : `sudo -S` sans pipe lit stdin — un simple `sudo` suffirait) |
| m1/m2/m3/m5/m6/m7/m8/h2, **m4** | ❌ inchangés | Notamment **m4** : `llama3-70b-8192` (décommissionné) figure encore 2× dans `ROLES`, et l'URL HF `api-inference` dépréciée demeure |

## 2. 🐞 Régressions introduites par la vague corrective (nouvelles)

### nR1 — Le filtre `k_level` compare un VARCHAR à `2` → il exclut TOUT, y compris K0/K1
`k_level` est un `VARCHAR(2)` (`'K0'`…`'KX'`, schema.sql:725). Les nouvelles requêtes passent le paramètre **numérique `2`** (`rag.js` : `context.knowledgeLevel || 2` ; `dialogue.js` : `[npc.npc_id, 2]`). Postgres résout `k_level <= '2'` en comparaison **lexicographique** : `'K0' > '2'` dans toute collation courante (chiffres avant lettres) → **aucune ligne ne passe jamais le filtre**. Fail-closed pour D22 (rien ne fuite) mais la connaissance PNJ K0/K1/K2 ne sera **jamais servie** le jour où la table sera peuplée — panne silencieuse (aucune erreur SQL, résultat vide). **Correctif attendu** : `k_level IN ('K0','K1','K2')`, ou paramètre `'K2'` (l'ordre lexicographique `'K0'<'K1'<'K2'<'K3'<'KX'` fonctionne, lui).

### nR2 — Les seaux de quota ne se remplissent jamais hors 429 → providers écartés définitivement
`llm.js` : `quotaRemaining[name]` est **décrémenté à chaque succès** (l.103) mais n'est réinitialisé **que** par le `setTimeout` du chemin 429 (l.162). Après 60 appels Groq réussis **sans jamais** rencontrer de 429, Groq est écarté pour toujours (jusqu'au restart) — puis Mistral après 50, etc., jusqu'à la cascade complète vers les gabarits. Il manque le **réapprovisionnement périodique** du seau à jetons (D-ORC-3 : fenêtre rpm glissante).

### nR3 — `training/run_all.sh` casse : il appelle `train_combat.py` supprimé
`run_all.sh:26` + `set -euo pipefail` → le pipeline d'entraînement **s'arrête en erreur** avant `train_embed.py`. Retirer la ligne (et l'écho « Combat prediction... »).

## 3. Bilan du contre-audit

**2 des 3 rouges sont clos proprement (R2, R3) — travail conforme au contrat.** Le rouge restant est **R1** : la vague n'a traité que la lecture (et avec le bug nR1) ; l'exigence centrale — exclusion K3 **à l'ingestion** (`seed-generator.js`) + contrainte structurelle sur la table + gating K2 par l'état L1 — est intacte. Priorités suivantes recommandées : **nR1 → R1-ingestion/CHECK → nR2 → nR3**, puis reprise de l'ordre initial (M1 pipeline `SYS_*`, M3 grounding avant activation API, M4-R0 groupes WA, m4 IDs de modèles).

*Contre-audit en lecture seule (D-P3-1) — `bot/` non modifié par l'ACP ; l'état contre-audité est le worktree PE non commité du 2026-07-11 13h40.*

---

# ADDENDUM 45-quater — Contre-audit de la vague 3 PE (commit `8f608f9`, 14h06)

> Vague massive : M1 (pipeline `SYS_*` + registre 5 commandes), M3 (sanitizer + grounding), M4-R0 (adjacence + groupes), P2 (index vectoriel), Gemini, quotas configurables, mineurs combat/gazetteer. **Rappel préalable : la vague 2 (`3ddf391`) est vérifiée conforme — R1 structurel ✅, nR1-nR4 ✅ : les 3 rouges de l'audit initial sont clos.**

## 1. Verdict vague 3 : bonne architecture, exécution non conforme au SCHÉMA — ~70 % du nouveau code est mort à l'exécution

Le squelette est juste (pipeline 6 étapes dans l'ordre du CDC 19 §2 ; grounding `ragContext` réellement transmis par `dialogue.js` ; sanitizer branché dans `generate()` ; Gemini câblé proprement ; quotas par env ; **adjacence stricte du déplacement** — fini la téléportation multi-sauts ; `levelRatio` borné ×3). Mais le code a été écrit **contre un schéma supposé, sans vérifier `schema.sql`** : la majorité des nouvelles écritures échouent à la première requête. Et le pipeline `SYS_*` a **deux trous d'autorisation**.

## 2. 🔴 Nouveaux findings critiques

### nR5 — Autorisation `SYS_*` : deux trous (étape 3 du pipeline vidée de son sens)
1. **`!sys_*` joueur → source `'gm'` sans contrôle d'identité** : `message-handler.js#handleSysCommand` exécute toute commande `!sys_grant_item …` tapée par **n'importe quel joueur WhatsApp** avec `source='gm'`. Aucune liste de GM, aucun contrôle. Combiné à m8/m7 (avatar fantôme, API sans auth) : escalade de privilèges totale.
2. **Post-parsing de TOUTES les réponses en source `'system'`** : `executePipelineCommands(db, response, 'system')` scanne la réponse finale — y compris le texte joueur **écho** par `EMOTE`/`WHISPER` (`/me SYS_GRANT_ITEM(player_id=…, item_id=…, quantity=…)` → réécrit dans la réponse → parsé → exécuté en `'system'`, la source la plus privilégiée, sans passer par le LLM ni l'API).

**Aujourd'hui bloqué PAR ACCIDENT** : les 5 commandes échouent sur les incohérences de schéma (nR6) — exactement l'anti-pattern du R1 v1 (« la sécurité repose sur un bug »). **Attendu** : (a) source `'gm'` conditionnée à une liste d'identités GM vérifiée (téléphone/UUID) ; (b) les propositions issues de texte généré/écho reçoivent une source dédiée à droits minimaux (ex. `'npc_dialogue'`) avec allowlist par commande ; (c) ne **jamais** parser de `SYS_*` dans du contenu qui reprend le texte du joueur (strip à la sanitization, ou pipeline appliqué au seul flux LLM).

### nR6 — Registre `SYS_*` codé contre un schéma imaginaire : **5 commandes sur 5 inopérantes**
| Commande | Erreur bloquante |
|---|---|
| `SYS_GRANT_ITEM` | `ON CONFLICT (avatar_uuid, item_id)` : **aucune contrainte unique** sur cette paire (`T_INVENTORY` PK = `instance_uuid`) → 42P10 systématique |
| `SYS_ADVANCE_QUEST` | colonnes `progress`/`is_completed`/`objectives_total` inexistantes (réel : `current_step`/`progress_status`, total dans `T_QUESTS_DICT.total_steps`) |
| `SYS_NPC_KNOWLEDGE_UNLOCK` | table réelle = `(avatar_uuid, qi_id)` — pas de `npc_id`/`k_level` ; **et accepte `'K3'`** en niveau valide (interdit D22 : K3 ne se débloque jamais) |
| `SYS_SET_ENV_HAZARD` | `T_WEATHER` n'a ni `weather_type` ni `duration_minutes` ni `intensity` ; PK = `zone_id` seul ; et les hazards (`toxic_fog`…) ignorent les paramètres unifiés **D12 `OXYGEN`/`HEAT`/`DOT`** |
| `SYS_SHOP_RESTOCK` | `T_SHOP_ITEMS` n'a ni `npc_id` ni `base_quantity`/`current_stock`/`last_restock` (réel : clé `shop_id`, colonne `stock`) |

### nR7 — Le combat est cassé à 100 %
`handlers/combat.js` filtre désormais `… AND zone_id = $2` sur `T_MONSTERS_DICT` **qui n'a pas de colonne `zone_id`** → erreur SQL sur **chaque** `attaque` → « ❌ Une erreur est survenue ». L'intention (mob de la zone courante) est la bonne, mais la liaison zone↔mob passe par **`T_SPAWN_TABLES`** (contrat T2, plages D6), pas par le dictionnaire. La persistance `t_combat_sessions` est également inopérante (colonnes `session_id`/`monster_id`/`status`/`turn_count` vs réelles `session_uuid` UUID/`enemy_type`+`enemy_id` NOT NULL/`outcome`/`turn_number`) — silencieuse, elle, car try/catch.

### nR8 — Gazetteer HS : régression sur un acquis de la vague 2
`loadGazetteer` ajoute `SELECT … species, zone_id FROM t_monsters_dict` (colonnes inexistantes) **dans le même `Promise.all`** que items/PNJ/zones → **tout le chargement échoue** → la résolution nom→ID (M5, qui fonctionnait) est morte : « parle au forgeron », « achète potion » ne résolvent plus rien. Même cause dans `training/build-embeddings.js` (`t_npc_knowledge.id` au lieu de `qi_id`, `species`) → le script d'indexation **aborte à la 2ᵉ source** : l'« index vectoriel 3 400 chunks » annoncé ne peut pas se construire. Et `zone-groups.js` (`group_id`/`is_official` vs réels `wa_group_id`/…) → cache toujours vide, message de groupe jamais affiché.

## 3. 🟠 Nouveaux findings majeurs

- **nR9 — Étape LOCK inopérante** : `pg_advisory_xact_lock` est appelé via `db.query` sur le **pool** (autocommit) → le verrou, lié à la transaction, est **relâché immédiatement**, et `def.execute()` part sur d'autres connexions. Il faut un client dédié + `BEGIN…COMMIT` englobant le lock **et** l'exécution (ou `pg_advisory_lock/unlock` sur la même connexion).
- **nR10 — `is_secret` indexé sans filtre** : `build-embeddings.js` ingère `t_encyclopedia_dict` **sans `WHERE is_secret = FALSE`** (la métadonnée est stockée mais jamais filtrée par `search()`) → symétrique du R1 : l'exclusion doit être **à l'ingestion**. Latent (table vide + script cassé), même schéma de risque.

## 4. 🟡 Mineurs vague 3
Embeddings stockés en `FLOAT[]` jamais relus (`search()` ré-embedde à la volée — le stockage est du poids mort) ; sanitizer **anglophone uniquement** (« ignore les instructions précédentes » passe) ; `travelTime` affiché mais non appliqué (arrivée instantanée) ; l'« index vectoriel » = requêtes sur tables DB avec le bag-of-words 64d maison, pas le chunking par section des fiches ni e5-small (P2/CDC 15 reste devant) ; gating K2 par état L1 toujours absent des lectures (la table `t_npc_knowledge_unlocks` n'est consultée nulle part).

## 5. Bilan cumulé & recommandation

| Vague | Verdict |
|---|---|
| 1 (13h37) | R2/R3 clos, R1 partiel, 3 régressions |
| 2 (13h52) | **R1 clos structurellement, nR1-nR4 corrigés — état sain** |
| 3 (14h06) | Architecture ✓, exécution ✗ : **nR5-nR8 rouges** (2 trous d'autorisation + schéma imaginaire + combat cassé + gazetteer en régression), nR9-nR10 majeurs |

**Cause racine de la vague 3 : coder sans lire `schema.sql`.** Recommandations : (1) corriger nR7/nR8 en priorité (le jeu de base — combat, résolution de noms — est cassé, c'est pire qu'avant la vague) ; (2) nR5 avant toute mise en service du pipeline (autorisation par identité + jamais de parsing sur écho joueur) ; (3) réaligner le registre sur le schéma réel (nR6) et englober lock+exécution dans une transaction (nR9) ; (4) **m2 devient critique** : un test d'intégration minimal qui exécute chaque `SYS_*` et chaque handler contre la base réelle aurait attrapé 100 % de nR6-nR8 — `tests/` est toujours vide.

---

# ADDENDUM 45-quinquies — Contre-audit de la vague 4 PE (commit `a0c5830`, 14h20) — vérifié PAR EXÉCUTION

> Vague annonçant « nR5-nR10 clos, m2 tests posés ». Contre-audit par diff **et, pour la première fois, par exécution** : suite d'intégration du PE lancée (**27/27 ✅**) + 3 sondes ciblées sur ses angles morts.

## 1. Re-verdict nR5-nR10

| Finding | Re-verdict | Preuve |
|---|---|---|
| **nR5-b (écho joueur)** | ✅ clos | post-parsing global retiré de `message-handler` ; `executePipelineCommands` ne scanne plus que la **sortie LLM** (`dialogue.js`, `rag.js` L3) — EMOTE/WHISPER ne passent plus au pipeline |
| **nR5-a (GM sans contrôle)** | ⚠️ intention ✅, **cassé (nR11)** | contrôle `isGm()` ajouté… sur `t_avatars.role` **qui n'existe pas** (aucune colonne de rôle dans `T_AVATARS`). Sonde : `!sys_grant_item …` → *« ❌ Une erreur est survenue : la colonne « role » n'existe pas »*. Fail-closed (personne ne passe), mais la fonction GM est inutilisable et `err.message` fuit au joueur |
| **nR6 (schéma imaginaire)** | ✅ largement clos | 5 commandes réécrites sur les colonnes réelles (`instance_uuid`, `current_step`/`progress_status`, `qi_id`, `current_weather`/PK `zone_id`, `shop_id`/`stock`) ; K3 rejeté au déblocage ✅ (D22). **Reliquat** : `SYS_ADVANCE_QUEST` termine la quête à `current_step >= 10` **codé en dur** au lieu du `total_steps` réel de `T_QUESTS_DICT` (bug logique) ; hazards = météo générique, les jauges D12 `OXYGEN`/`HEAT`/`DOT` restent non modélisées |
| **nR7 (combat)** | ✅ code / ❌ **données (nR13)** | requête corrigée (JOIN `t_spawn_tables` — la bonne table)… mais **`T_SPAWN_TABLES` contient 0 ligne** (ni seed ni seed-generator ne la peuplent). Sonde : `attaque <monstre réel>` → *« n'est pas dans ta zone actuelle »* pour tout monstre. **Le combat reste 100 % inopérant** — c'est désormais une dette de peuplement, pas de code |
| **nR8 (gazetteer)** | ✅ clos | colonnes réelles (`family`/`element`), `mobIndex` ajouté, chargement vérifié en test ; `zone-groups.js` corrigé (`wa_group_id`) — table vide, dégradation propre |
| **nR9 (lock)** | ✅ clos | client dédié + `BEGIN` → `pg_advisory_xact_lock` → `execute(client)` → `COMMIT`/`ROLLBACK` → `release` : le verrou couvre réellement l'exécution |
| **nR10 (is_secret)** | ✅ clos | `WHERE is_secret = FALSE` à l'ingestion (la métadonnée n'est même plus stockée) |
| **m2 (tests)** | ✅ posé | `tests/integration.mjs` : 27 tests handlers + pipeline + D71. **Exécutés par l'ACP : 27/27 ✅.** |

## 2. Nouveaux findings (vague 4)

- **nR11 🟠 — `t_avatars.role` n'existe pas** : le contrôle GM plante en SQL (fail-closed, vérifié par sonde). Il faut soit une colonne/flag GM au MLD (décision de données — à acter proprement : `T_AVATARS` est une table du MLD ACP), soit une **allowlist de téléphones GM en config** (plus simple, pas de migration). Corriger aussi la fuite d'`err.message` vers le joueur.
- **nR12 🟡 — `build-embeddings.js` casse encore** : la source monsters sélectionne `loot_table_id` **inexistant** → le script s'arrête en erreur après les 6 premières sources. (3ᵉ itération du même pattern schéma.)
- **nR13 🟠 — `T_SPAWN_TABLES` vide = combat mort** : le `seed-generator.js` ne produit aucune ligne de spawn (les plages D6 des fiches faune ne sont pas parsées). Sans peuplement, aucune attaque ne peut aboutir. **C'est LE bloqueur gameplay n°1 restant.**
- 🟡 Qualité seed : noms de monstres avec artefacts de parsing (ex. *« Chevalier d Argent — »* : apostrophe perdue + tiret cadratin) — le parseur de fiches mérite une passe.
- 🟡 Angles morts de la suite de tests = exactement les 3 zones restées cassées (chemin GM, combat avec monstre réel, build d'embeddings). Ajouter ces 3 cas.

## 3. Bilan cumulé après 4 vagues

| | État |
|---|---|
| Rouges audit initial (R1-R3) | ✅ **tous clos** (vague 2) |
| Rouges vague 3 (nR5-nR8) | nR5-b/nR6/nR8 ✅ · nR5-a ⚠️ (nR11) · nR7 ✅ code / ❌ données (nR13) |
| Majeurs vague 3 (nR9-nR10) | ✅ clos |
| **Restant prioritaire** | **nR13** (peupler `T_SPAWN_TABLES` — débloquant gameplay), **nR11** (GM par allowlist config ou colonne actée au MLD), `SYS_ADVANCE_QUEST` total en dur, nR12, source LLM='system' à restreindre (allowlist par source dédiée), M3-sanitizer FR, gating K2/L1 en lecture, P2 RAG réel (fiches+e5), parseur QI, D12 jauges |

*Contre-audit exécuté en lecture seule sur `bot/` (D-P3-1) ; seule la suite de tests du PE et 3 sondes en lecture ont été exécutées contre la base de dev.*

---

# ADDENDUM 45-sexies — Contre-audit de la vague 4.2 PE (commit `b633101`, 14h32) — par diff + exécution

> Vague annonçant « nR11-nR13 clos ». Vérifié : diff intégral + suite d'intégration (**27 ✅ / 3 ❌** — la suite est désormais honnête : 2 rouges = résidus réels, 1 rouge = test mal écrit) + sondes ACP.

## 1. Re-verdict

| Finding | Re-verdict | Preuve |
|---|---|---|
| **nR11 (GM)** | ⚠️ **moitié** | Refus fail-closed **propre** ✅ : sonde `!sys_grant_item` avec téléphone inconnu → *« ❌ Accès refusé »* (plus d'erreur SQL, plus de fuite). **Mais le chemin d'acceptation est cassé (nR11-b)** : `message-handler.js:133` appelle `handleSysCommand(db, routing, playerId, null)` — le `phoneNumber` reçu par `processMessage` n'est **jamais transmis** → même avec `GM_PHONES` configuré, aucun GM WhatsApp ne peut s'authentifier. Le repli `_playerId.includes(p)` ne matchera jamais un UUID — et il est **dangereux** : une entrée courte type `"0000"` dans `GM_PHONES` ferait matcher l'UUID de test tout-zéros (GM accidentel). `GM_PHONES` absent de `.env`/`.env.example` (non documenté) |
| **nR12 (build-embeddings)** | ✅ code | `loot_table_id` retiré ; toutes les colonnes des 7 sources existent désormais dans le schéma. Exécution du build encore à faire (index vide) |
| **nR13 (spawns)** | ✅ code / ❌ **non appliqué** | `parseSpawns()` correct (9 colonnes alignées, `spawn_id` en DEFAULT) — mais `seed_data.sql` **non régénéré** (0 ligne T_SPAWN_TABLES dedans) et base **non re-seedée** : la suite du PE échoue elle-même (« t_spawn_tables est vide — relancer seed-generator »). **Le combat reste inopérant tant que le re-seed n'est pas exécuté.** Qualité du mapping : tout mob → `HUNT_001` de son territoire (les plages D6 HUNT_002/donjons ne sont pas différenciées), `air` → SYL (D8 voudrait les 9 routes), `yggdrasil`/fichiers racine → NEU par défaut — fonctionnel pour débloquer, **non conforme D6/D8** (dette de données de 2ᵉ ordre) |
| Reliquat quêtes | ✅ clos | `SYS_ADVANCE_QUEST` lit `total_steps` réel via JOIN `t_quests_dict` (défaut 10 si NULL) |
| Reliquat sanitizer FR | ✅ posé | 4 motifs FR ajoutés (ignore/désormais/tiens pas compte/tu es maintenant) — couverture basique, mieux que rien |
| Reliquat noms seed | ✅ | trailing `─`/espaces nettoyés dans `parseMonsters` |
| Tests | ✅ honnêtes, 1 mal écrit | 3 tests ajoutés ; les 2 échecs spawn/combat pointent le vrai résidu. Le test GM échoue **pour une mauvaise raison** : il envoie `!sys_help`, que le classifieur mots-clés détourne en `HELP` (substring « help ») avant même le routage SYS — et `sys_help` early-return **avant** le contrôle GM de toute façon. À réécrire avec `!sys_grant_item …` + téléphone hors liste (le vrai chemin refuse correctement, vérifié par sonde) |

## 2. Voie de sortie (actions courtes et exactes)

1. **Appliquer nR13** : régénérer `seed_data.sql` (`node scripts/seed-generator.js`) + re-seed (`rebuild.sh`) → la suite passe au vert spawn/combat, **le combat démarre enfin**.
2. **nR11-b** : passer `phoneNumber` à `handleSysCommand` (1 ligne, `message-handler.js:133` — le paramètre arrive déjà dans `processMessage`) ; **supprimer** le repli `_playerId.includes(p)` ; documenter `GM_PHONES` dans `.env.example`.
3. Réécrire le test GM (`!sys_grant_item` + téléphone hors liste) ; ajouter un test « GM accepté » avec un téléphone de test dans l'allowlist.
4. Lancer `build-embeddings.js` après re-seed (nR12 exécution).

## 3. Fond restant après 4.2 (inchangé)
Source LLM=`'system'` sur-privilégiée (allowlist par source dédiée) · gating K2 par `t_npc_knowledge_unlocks` jamais consulté en lecture · P2 RAG réel (chunking des fiches + e5, CDC 15) · parseur QI (T_NPC_KNOWLEDGE toujours vide) · jauges D12 (`OXYGEN`/`HEAT`/`DOT`) non modélisées · spawns conformes D6/D8 (2ᵉ passe) · API HTTP sans auth · Redis non câblé · HF `api-inference` déprécié · avatar fantôme universel · mot de passe DB défaut.
