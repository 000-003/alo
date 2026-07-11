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
