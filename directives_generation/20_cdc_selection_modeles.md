# 🔬 CDC-MOD-01 — Sélection & comparaison des modèles (supersede les choix de `etude_deepseek.md`)

> **Type** : cahier des charges P3 (implémentation IA — feu vert PE). Compare, tâche par tâche, les modèles proposés par `etude_deepseek.md` et **propose de meilleurs modèles gratuits** implémentables à leur place. **Autoritatif** sur le choix des modèles : supersede les noms cités à titre indicatif dans `15_`/`16_`/`17_`/`19_`.
> **Contrainte** : gratuit · exportable **ONNX / CPU ARM** (couche locale C1) ou via **API gratuite** (couche C2/C3) · faible RAM.
> **Critère directeur — LA correction clé** : **le corpus et les joueurs d'ALO sont FRANCOPHONES.** Les choix de DeepSeek (BERT-tiny, MiniLM-L6-v2, DistilGPT2) sont **anglophones** → sous-performants sur le français. On les remplace par des modèles **multilingues ou français-natifs**. C'est le gain le plus important de ce CDC.

---

## 1. Tableau comparatif — tâche par tâche

| Tâche | Choix DeepSeek | Faiblesse | **Meilleure proposition gratuite** | Pourquoi | Compromis |
|---|---|---|---|---|---|
| **Intent** | MiniLM-L6-v2 (22M, **EN**) | anglophone ; sous-performe en FR | **`multilingual-e5-small`** (embeddings) + tête de classif légère | multilingue FR ; **mutualisé** avec RAG+dialogue (1 modèle pour 3 tâches) | ~118M vs 22M → ~15-30 ms (async OK) |
| **NER / entités** | BERT-tiny (4M, **EN**) + CRF | anglophone ; ignore tes IDs inventés (« Gattan », `CSM_POT_HP`) | **Gazetteer (aho-corasick + fuzzy) sur l'index nom→ID** *(primaire)* + **DistilCamemBERT-NER** *(quantités/génériques)* | le gazetteer **connaît tes IDs exacts** (0 ML, 0,1 ms) ; le NER FR ne gère que la structure | ajouter l'index nom→ID (dérivé du corpus/RAG) |
| **Embeddings (RAG + dialogue)** | MiniLM-L6-v2 (**EN**) + faiss/annoy | anglophone ; 2 modèles séparés | **`multilingual-e5-small`** (ou `-base` si RAM) + **`sqlite-vec`** | multilingue FR ; **un seul modèle** RAG+dialogue+intent ; magasin unifié avec `15_` | e5-base (~278M) meilleur mais +RAM |
| **Comportement de mob** | MLP 3-couches (imitation learning, 10k combats) | boîte noire ; nécessite un dataset ; retire le contrôle au Game Designer | **Behavior Tree / Utility AI *authored*** *(primaire)* + **LightGBM→ONNX** *(option data-driven)* | **contrôle designer** (les mécaniques D10/D11 sont *conçues*, pas apprises) ; 0,1 ms ; interprétable | authoring des patterns (mais tu les as déjà pensés) |
| **Génération narrative (fallback local)** | DistilGPT2 (82M, **EN**) / Qwen0.5B | DistilGPT2 incohérent, anglophone | **Qwen2.5-1.5B-Instruct** ou **Gemma-2-2B-it** (Q4) | multilingues corrects, FR passable ; cohérents | ~1-2 Go RAM, lent CPU → **repli hors-ligne seulement** |
| **Génération narrative (chemin principal, API gratuite)** | Gemini / Puter.js | OK mais incomplet | **Mistral** (FR-natif) + **Gemini Flash** + **Groq (Llama 3.3 70B)** + pool C3 (`14_`) | **Mistral = société française → excellent FR** ; Gemini multilingue fort ; Groq rapide | quotas gratuits (gérés par le load-balancer `18_`) |

---

## 2. Détail & justification par tâche

### 2.1 Intent — mutualiser sur `multilingual-e5-small`
Plutôt qu'un classifieur dédié anglophone, on **encode** le message avec `multilingual-e5-small` (déjà chargé pour le RAG) et on classe via une **tête légère** (régression logistique / MLP 1-couche / plus-proche-centroïde) sur les ~17 intentions. **Un seul modèle d'embedding sert 3 tâches** : récupération RAG (`15_`), dialogue par retrieval (`17_`), classification d'intention (`16_`). DRY, moins de RAM, meilleur français.
*Alternative dédiée* : **DistilCamemBERT** (~68M, FR-natif) fine-tuné classif — un cran meilleur sur le FR ambigu, mais un modèle de plus.

### 2.2 NER / résolution d'entités — le gazetteer bat le NER lourd
Les entités d'ALO sont **tes propres IDs** (items, PNJ, zones), souvent des noms inventés qu'aucun NER pré-entraîné n'a jamais vus. Donc :
- **Primaire = gazetteer** : appariement exact + flou (aho-corasick + Levenshtein/`rapidfuzz`) contre l'**index nom→ID** dérivé du corpus. Connaît `CSM_POT_HP`, `NPC_VOU_93`, `Gattan`. **0 ML, ~0,1 ms, précision maximale** sur le vocabulaire du jeu.
- **Complément = petit NER FR** (**DistilCamemBERT-NER** ou **spaCy `fr_core_news_sm`**, ~15-70 Mo) pour la **structure** (quantités, prix, références génériques « la potion la moins chère »).
Ce couple est **plus rapide ET plus juste** que le BERT-tiny anglophone de DeepSeek pour ce domaine.

### 2.3 Embeddings — un seul modèle multilingue, magasin unifié
**`intfloat/multilingual-e5-small`** (~118M, INT8 ~120-130 Mo, ~15-30 ms ARM) : le meilleur rapport qualité/poids **multilingue FR** pour du CPU. Magasin **`sqlite-vec`** (déjà choisi `15_`) — **pas faiss/annoy séparés**. Si la RAM le permet et qu'on veut plus de qualité : **`multilingual-e5-base`** (~278M) ou **`BGE-M3`** (~568M, multilingue + contexte long, excellent) — à réserver si le retrieval FR montre ses limites.

### 2.4 Comportement de mob — authored > appris
DeepSeek propose un MLP entraîné par imitation. **Mais tes mécaniques de donjon (D10/D11 : Surchauffe, Apnée, Vacarme, tempo, illusions…) sont délibérément *conçues*** — le filtre Game Designer veut **le contrôle** des patterns de boss, pas une boîte noire apprise. Donc :
- **Primaire = Behavior Tree / Utility AI *authored*** (règles de sélection d'action pondérées) — **0 ML, 0,1 ms, designer-contrôlable, débogable, déterministe-adjacent**.
- **Option data-driven = LightGBM → ONNX** (arbres boostés) si un jour on veut apprendre des patterns émergents — plus léger, plus interprétable et moins gourmand en données qu'un MLP.
Rappel frontière (`19_` D-DET-3) : ceci concerne le **comportement** (choisir une action), jamais la **résolution** (déterministe).

### 2.5 Génération narrative — priorité au FRANÇAIS
- **Repli local hors-ligne** (rare, si tout le gratuit est down) : **Qwen2.5-1.5B-Instruct** ou **Gemma-2-2B-it** en Q4 — remplacent avantageusement DistilGPT2 (cohérence + français). ~1-2 Go RAM, lent CPU → **dernier recours seulement**, après C4 templates.
- **Chemin principal (API gratuite, `14_`)** : reclasser par **force en français** —
  1. **Mistral** (`open-mistral`/`ministral`, tier gratuit) — **société française, français excellent** → idéal pour PNJ/quêtes/lore.
  2. **Gemini Flash** — multilingue très fort, tier gratuit généreux.
  3. **Groq (Llama 3.3 70B)** — raisonnement/orchestration, ultra-rapide.
  4. **Pool C3** : Cerebras, Cloudflare, OpenRouter `:free`, HuggingFace, GitHub Models.
Le load-balancer `18_` étale la charge ; **Mistral et Gemini montent dans les politiques des rôles narratifs** (S2/S3/S4/S7) pour la qualité du français.

---

## 3. Budget RAM / latence recalculé (couche locale C1)

| Composante | Modèle retenu | RAM | Latence ARM |
|---|---|---|---|
| Embeddings (RAG + dialogue + intent) | `multilingual-e5-small` (INT8) | ~130 Mo | ~15-30 ms |
| NER structurel | DistilCamemBERT-NER / spaCy `fr_sm` | ~70 Mo | ~10-20 ms |
| Gazetteer (entités→ID) | aho-corasick + rapidfuzz | ~30 Mo | ~0,1-1 ms |
| Comportement de mob | Behavior Tree (règles) / LightGBM | ~5 Mo | ~0,1-3 ms |
| ONNX Runtime (mutualisé) | onnxruntime-node | ~150 Mo | — |
| **Total IA locale** | | **~0,4 Go** | **< 40 ms/message** |

Toujours **~4-5 Go / 24** avec L1+base (`18_`). Le passage au multilingue **coûte un peu de RAM/latence** mais **gagne massivement en qualité française** — arbitrage tranché en faveur du FR (async WhatsApp tolère 40 ms).

---

## 4. Ce qu'on garde de DeepSeek (ses bons choix)
- **ONNX Runtime** comme runtime local unique (INT8, arm64) — excellent, conservé.
- **Encodeurs pour la compréhension** (pas de LLM) — principe conservé, on change juste les modèles (multilingues).
- **Bootstrapping regex→modèle** — conservé.
- **Template Engine pour 90 %** + API pour les moments importants — conservé.
- **Idée de séparer comportement (léger) et résolution (déterministe)** — conservée, on remplace juste le MLP par du authored/LightGBM.

---

## 5. Décisions actées

- **D-MOD-1** : **modèles multilingues / FR-natifs** partout (corpus francophone) — supersede les modèles anglophones de DeepSeek.
- **D-MOD-2** : **`multilingual-e5-small` = modèle d'embedding UNIQUE** partagé par RAG (`15_`), dialogue retrieval (`17_`) et classification d'intention (`16_`) ; magasin `sqlite-vec` unifié. (`-base`/`BGE-M3` en option qualité.)
- **D-MOD-3** : **résolution d'entités = gazetteer (index nom→ID) primaire** + petit NER FR (DistilCamemBERT/spaCy) pour la structure — plus juste et plus rapide que BERT-tiny sur le domaine.
- **D-MOD-4** : **comportement de mob = Behavior Tree / Utility AI *authored*** (contrôle designer, D10/D11) ; LightGBM→ONNX en option data-driven ; jamais un MLP boîte-noire par défaut. Frontière `19_` D-DET-3 inchangée.
- **D-MOD-5** : **génération narrative — priorité au français** : Mistral (FR-natif) et Gemini Flash montent dans les politiques des rôles narratifs ; repli local = Qwen2.5-1.5B / Gemma-2-2B (≠ DistilGPT2).
- **D-MOD-6** : ONNX Runtime, encodeurs-pour-la-compréhension, bootstrapping, Template Engine **conservés** de DeepSeek.
- **Réserve** : identifiants exacts de modèles et quotas gratuits **à revérifier au lancement** (l'offre évolue) ; tout choix reste **substituable par config** (interface agnostique `18_`, D-ORC-1) sans refonte.
