# 🧩 CDC-NLU-01 — Couche de compréhension locale (Intent + NER)

> **Type** : cahier des charges P3 (implémentation IA — feu vert PE). Front-end de compréhension : transforme le **message brut du joueur** en **(intention + entités résolues en IDs)**, **entièrement en local**, en **< 25 ms**, **sans API**.
> **Source intégrée** : `etude_deepseek.md` §3-5, §9 (encodeurs ONNX, bootstrapping). Cette couche = les **Agents #1 (Intent) + #2 (NER)** de l'étude DeepSeek, réconciliés avec l'architecture `13_`/`14_`/`15_`.
> **Position** : couche **C1 locale** exclusivement. En amont du dispatcher (`18_`) et des spécialistes (`17_`). Ne génère jamais de texte, n'appelle jamais d'API, n'écrit jamais l'état.
> **Décision clé** : la **compréhension** se fait avec des **encodeurs** (MiniLM/BERT-tiny), **pas** des décodeurs (LLM). Un encodeur classe une intention en 5-25 ms/50-120 Mo ; un LLM 1B mettrait 300-800 ms/1-2 Go pour un résultat moins fiable sur cette tâche. **Le décodeur est réservé à la génération (`17_`), jamais à la compréhension.**

---

## 1. Objet & contrat de sortie

Entrée : `message_brut` (texte WhatsApp) + `contexte_min` (joueur, lieu courant).
Sortie contractuelle unique :

```
{
  intent      : ENUM,        // classe d'intention
  confidence  : float,       // 0..1
  entities    : [ { type, span, resolved_id | value } ],
  route       : "commande" | "moteur" | "spécialiste:<S>" | "unknown"
}
```

Cette sortie alimente le **dispatcher** (`18_`) qui aiguille : commande `!` → moteur L1 ; action de jeu → L1 (+ narration) ; dialogue/lore → spécialiste narratif ; `unknown` → gabarit « je n'ai pas compris ».

---

## 2. Agent Intent Classifier

| Champ | Valeur |
|---|---|
| **Modèle** | MiniLM-L6 (sentence-transformers) + tête de classification |
| **Runtime** | **ONNX Runtime arm64** (`onnxruntime-node`), quantization **INT8** |
| **Taille / RAM** | ~90 Mo ONNX / ~120 Mo runtime |
| **Latence (4c ARM)** | 10-15 ms |
| **Chargement** | au démarrage, inférence **synchrone** |

**Classes d'intention** — alignées sur la taxonomie de commandes existante (`whatsapp_commands_list.md`), pour que chaque intention mappe une commande `!*` :

```
MOVE · BUY · SELL · TALK · ATTACK · USE_SKILL · INVENTORY · EQUIP
QUEST · PARTY · GUILD · CRAFT · VAULT · MAIL · LORE_QUERY · SYSTEM · UNKNOWN
```

- `TALK` / `LORE_QUERY` → spécialistes narratifs (`17_`).
- `MOVE`/`BUY`/`SELL`/`ATTACK`/`USE_SKILL`/`INVENTORY`/`EQUIP`/`CRAFT`/`VAULT`… → moteur L1 (`19_`) + narration éventuelle.
- `UNKNOWN` ou `confidence < 0.7` → **fallback regex**, puis gabarit de non-compréhension.

---

## 3. Agent NER (Entity Extractor)

| Champ | Valeur |
|---|---|
| **Modèle** | BERT-tiny + tête de token-classification (+ CRF) |
| **Runtime** | ONNX Runtime arm64, INT8 |
| **Taille / RAM** | ~17 Mo ONNX / ~50 Mo runtime |
| **Latence** | 5-8 ms |

**Tags** : `B/I-ITEM · B/I-NPC · B/I-ZONE · B/I-SKILL · B/I-PLAYER · B-QUANTITY · B-PRICE`.

**Résolution en IDs canoniques (D71)** — étape critique : le NER extrait des *mentions* (« 3 potions HP », « le Marché Noir ») ; un **résolveur lexical** les mappe vers des **IDs réels** (`CSM_POT_HP_B`, `NPC_VOU_93`) via un **index nom→ID** dérivé du corpus/RAG (`15_`). Une mention non résolue → entité `resolved_id = null` (le moteur/spécialiste demandera une clarification, jamais n'invente).

---

## 4. Pipeline complet

```
message_brut
   └─ 0. REGEX (jour-1)   : capture les patterns évidents (commandes, verbes d'action) → route directe
   └─ 1. INTENT           : MiniLM → {intent, confidence}
   └─ 2. NER              : BERT-tiny → mentions taggées
   └─ 3. RÉSOLUTION D'ID   : mentions → IDs canoniques (index nom→ID issu du corpus/RAG)
   └─ 4. ROUTE            : intent + entités → aiguillage dispatcher
   └─ (fallback)          : confidence < 0.7 → regex ; UNKNOWN → gabarit non-compréhension
```

Latence cumulée typique : **~15-25 ms**, 100 % local, parallélisable sur les 4 cœurs.

---

## 5. Bootstrapping & entraînement (plan DeepSeek §9, adopté)

Le jeu **fonctionne dès le jour 1 sans aucun modèle** (regex), puis les modèles montent en précision sur les vrais messages.

| Phase | Quand | Contenu |
|---|---|---|
| **P1 — Règles pures** | Jour 1 | ~50-500 patterns regex → couverture ~60 % ; **aucun ML requis** |
| **P2 — Collecte** | Semaines 1-2 | tous les messages loggés (`T_WHATSAPP_LOGS`) ; regex classent avec confiance ; les 10 % à faible confiance → correction manuelle |
| **P3 — Premier modèle** | Semaine 3 | ~500 exemples nettoyés → entraînement **BERT-tiny/MiniLM sur CPU (~5 min)** ; coexiste avec regex (fallback si conf. < 0.7) |
| **P4 — Raffinement** | Mois 2 | cas de divergence regex/modèle → +500 exemples → ré-entraînement → couverture > 95 % |

**Volumes cibles** : intent ~3 000 messages · NER ~1 500 phrases annotées. **Ré-entraînement < 1 h** à chaque évolution du jeu (petits modèles).

---

## 6. Garde-fous & fallback

| Risque | Mitigation |
|---|---|
| Modèle sous-performe sur phrase complexe | fallback regex immédiat + gabarit « je n'ai pas compris » |
| Entité non résolue en ID | demande de clarification (jamais d'invention d'ID — D71) |
| Confiance basse | seuil 0.7 → regex ; sinon `UNKNOWN` |
| Évolution du jeu (nouveaux items/skills) | index nom→ID régénéré depuis le corpus ; ré-entraînement rapide |
| ONNX Runtime instable | conteneur Docker + `systemd restart always` |

---

## 7. Intégration & budget

- **Runtime unique ONNX** partagé avec les embeddings du RAG (`15_`) et le MLP de comportement de mob (`19_`) → un seul `onnxruntime-node` chargé.
- **RAM** : Intent ~120 Mo + NER ~50 Mo + runtime ~150 Mo (mutualisé). Négligeable sur les ~20 Go libres.
- **Sans état** : lit le contexte minimal depuis L1, ne stocke rien.

---

## 8. Décisions actées

- **D-NLU-1** : compréhension = **encodeurs** (MiniLM intent + BERT-tiny NER) via **ONNX Runtime INT8**, jamais un décodeur LLM.
- **D-NLU-2** : sortie contractuelle `{intent, confidence, entities[], route}` ; les intentions **mappent la taxonomie de commandes existante**.
- **D-NLU-3** : **résolution obligatoire des entités en IDs canoniques (D71)** via index nom→ID dérivé du corpus/RAG ; non résolu → clarification, jamais invention.
- **D-NLU-4** : **regex jour-1** (fonctionne sans modèle) → bootstrapping progressif ; fallback regex si `confidence < 0.7`.
- **D-NLU-5** : runtime ONNX **mutualisé** (intent + NER + embeddings RAG + MLP mob) ; 100 % local C1, sans état.
- **Complétude commandes** : aucune commande nouvelle (la NLU *traduit vers* les `!*` existantes).
