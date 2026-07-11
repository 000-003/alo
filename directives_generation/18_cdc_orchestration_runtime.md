# ⚙️ CDC-ORC-01 — Orchestration & runtime (interface, politiques, load-balancer, stack)

> **Type** : cahier des charges P3 (implémentation IA — feu vert PE). La **plomberie** qui relie NLU (`16_`), spécialistes (`17_`), RAG (`15_`) et moteur L1 (`19_`) : l'interface agnostique, le dispatcher, le load-balancer *quota-aware*, la boucle d'orchestration `SYS_*`, la stack technique et le budget RAM.
> **Sources intégrées** : `14_` (cascade C1-C4, désengorgement), `etude_deepseek.md` §6-8, §12 (stack ONNX+Node+Redis, budget RAM, cycle de requête, feuille de route).
> **Invariant** : le métier ne connaît jamais un fournisseur — seulement un `role` et une `politique`. Changer de fournisseur ou d'échelle = éditer une politique (D-IA-11). L1 reste le seul écrivain de l'état.

---

## 1. L'interface agnostique — l'unique abstraction anti-refonte

```
generate(role, prompt_figé, contexte, politique) -> { texte | SYS_*[] }

   role        : identifiant du spécialiste (S2…S7, orchestrateur)
   prompt_figé : prompt système du rôle (mis en cache)
   contexte    : bloc <contexte_recupere> du RAG (15_) + état de tour
   politique   : liste ordonnée de backends + budgets + gabarit de repli C4
```

C'est la **seule pièce à figer parfaitement dès le jour 1**. Tout le reste (nombre d'agents, fournisseurs, sharding) se change ensuite par configuration.

---

## 2. Format d'une politique de backend

```
politique(role) = [
  { couche: C1, backend: "local:onnx" | "local:ollama-3b", budget: cpu },
  { couche: C2, backend: "groq",   modèle: "llama-3.3-70b", quota: {rpm, rpd} },
  { couche: C2, backend: "gemini", modèle: "flash",          quota: {rpm, rpd} },
  { couche: C3, backend: "cerebras" | "cloudflare" | "openrouter:free" | … },
  { couche: C4, backend: "template", gabarit: "<clé de gabarit>" }
]
```

Le load-balancer descend cette liste jusqu'au premier backend disponible (§3). **Aucun palier payant** par défaut (D-IA-8) ; l'ajout d'un backend payant = une ligne C3 supplémentaire, **désactivée par défaut**.

---

## 3. Load-balancer *quota-aware* + circuit breaker + failover

Le cœur du désengorgement (`14_` §3), spécifié :

- **Seau à jetons par fournisseur** : suit `rpm`/`rpd` (et `tpm` si borné). Le routeur **anticipe le mur** — bascule au backend suivant dès **90 %** du quota consommé, jamais à 100 %.
- **Circuit breaker par backend** : états `fermé / ouvert / demi-ouvert`. Sur `429`/timeout/erreur → **ouvert** quelques secondes → backend suivant. Ré-intégration progressive (demi-ouvert).
- **Failover en cascade** :

```
pour chaque backend de politique(role) :
   si budget(backend) > 90% consommé  → suivant
   si circuit(backend) ouvert          → suivant
   tenter :
      succès ? → renvoyer
      erreur ? → ouvrir circuit, suivant
→ C2 (Groq+Gemini) épuisés → pool C3 (Cerebras/Cloudflare/OpenRouter…)
→ tout le gratuit épuisé/down → C4 gabarit déterministe (le jeu tourne)
```

- **Diversification** : primaires répartis (S3→Gemini, S1→Groq, S6→local) → **budget effectif = Σ de tous les fournisseurs C2+C3**. Plus de rôles étalés = plafond agrégé plus haut.

---

## 4. Le dispatcher (aiguillage)

```
message → NLU (16_) → {intent, entities, route}
   ├─ commande "!" / action de jeu → moteur L1 (19_)  [+ narration S6/template]
   ├─ TALK        → sélecteur de mode (17_ §1) → S2 (retrieval | génératif)
   ├─ LORE_QUERY  → S7
   ├─ contexte quête → S4
   ├─ achat/vente → S5
   ├─ ambiance    → S3
   └─ UNKNOWN     → gabarit non-compréhension
```

Objectif (`13_` D-IA-2) : **> 70 % des messages routés sans appel LLM payant** (regex + actions déterministes + template + retrieval local).

---

## 5. La boucle d'orchestration `SYS_*` (tours complexes)

Pour les 10-20 % de tours qui tissent plusieurs systèmes (quête + éco + déblocage), l'**orchestrateur** (modèle le plus puissant, C2) fonctionne en **tool-calling** :

```
1. orchestrateur reçoit intention + contexte RAG
2. émet un ou plusieurs SYS_*  (proposition)
3. L1 VALIDE chaque SYS_* (ID réel D71, prérequis, budget) → exécute ou rejette
4. L1 renvoie le résultat (chiffres, état)
5. un spécialiste narratif (17_) habille le résultat
```

L'orchestrateur ne touche jamais l'état : il **propose**, L1 **dispose**. La taxonomie `SYS_*` existante *est* l'ensemble d'outils.

---

## 6. Stack technique & budget RAM (DeepSeek §6-7, intégré)

```
ORACLE ARM Ampere A1 · Ubuntu 24.04 arm64
┌───────────┬────────┬──────────────────────────────┐
│PostgreSQL │ Redis  │ Node.js (Express + wa-web/ws) │
│ (tables   │ (file/ │  ├─ dispatcher                │
│  MLD)     │ cache) │  ├─ moteur L1 (19_)           │
└───────────┴────────┴──────────────────────────────┘
        │
   ONNX Runtime arm64 (onnxruntime-node, INT8) — chargé au démarrage
   ├─ intent.onnx  (MiniLM 22M)     — 16_
   ├─ ner.onnx     (BERT-tiny 4M)   — 16_
   ├─ embed.onnx   (small multiling.)— RAG 15_
   └─ mob.onnx     (MLP <1M)         — 19_
        │
   Clients API gratuites (C2/C3) : Groq · Gemini · Cerebras · Cloudflare · OpenRouter · …
   (uniquement pour la génération narrative des spécialistes 17_)
```

| Composante | RAM est. |
|---|---|
| OS + PostgreSQL + Node + Redis + cache | ~3,2 Go |
| ONNX Runtime + intent + NER + embeddings RAG + MLP mob | ~0,5 Go |
| Index vectoriel RAG (`15_`) | ~0,1-0,3 Go |
| **Total local** | **~4 Go / 24** → ~20 Go libres |

La **génération** ne consomme **aucune RAM locale** (délocalisée en API gratuite). Marge pour ajouter un décodeur local (Qwen 2.5-0.5B, +1 Go) si besoin d'un fallback génératif hors-ligne.

---

## 7. Cycle de requête (exemples, DeepSeek §8)

**Achat (100 % local, ~16 ms)** : message → intent BUY → NER item+qty → L1 vérifie (existe/stock/solde) → écrit (inventaire/stock/Yrds) → template → envoi. **Zéro API.**

**Dialogue riche (~1-3 s)** : message → intent TALK → NER npc → RAG (K0-K2) → S2 génératif (C2) → habillage → envoi. **1 appel API gratuit.**

---

## 8. Observabilité

Tableau de bord minimal : budget restant par fournisseur, taux de failover, part C1/C2/C3/C4, latence p50/p95 par spécialiste, taux de fallback NLU (regex vs modèle). → permet de **voir la congestion avant qu'elle morde** et d'ajouter un fournisseur au bon moment.

---

## 9. Feuille de route d'implémentation (P0-P6, DeepSeek §12 adaptée)

| Phase | Livrable |
|---|---|
| **P0 — Fondation** | Node.js + PostgreSQL (tables MLD) + Redis + ONNX Runtime chargé (agents stub) |
| **P1 — Moteur L1** (`19_`) | combat/mouvement/éco/inventaire/quêtes déterministes + contrat `SYS_*` (validation/exécution) |
| **P2 — RAG** (`15_`) | index des ~3 400 fiches (chunking par section, exclusion K3), `retrieve()` |
| **P3 — NLU** (`16_`) | regex jour-1 → collecte → intent+NER ONNX ; couverture > 80 % |
| **P4 — Template Engine + retrieval dialogue** (`17_`) | gabarits 90 % + ranker/SQL sur répliques K0-K2 |
| **P5 — Orchestration** (`18_`) | interface `generate` + politiques + load-balancer quota-aware + boucle `SYS_*` + 1er fournisseur C2 |
| **P6 — Spécialistes génératifs + expansion** | S2-S7 génératifs sur C2/C3 ; diversification de quotas ; monitoring ; sharding par lieu si besoin |

Ordre imposé : **le déterministe (L1) et le RAG avant le génératif** — le jeu doit tourner (mode dégradé) avant d'être enrichi.

---

## 10. Décisions actées

- **D-ORC-1** : **interface agnostique** `generate(role, prompt, contexte, politique)` = seule abstraction figée jour-1 ; changement fournisseur/échelle = config de politique.
- **D-ORC-2** : **politique de backend** = liste ordonnée C1→C4 + budgets + gabarit C4 ; aucun palier payant par défaut (interrupteur config).
- **D-ORC-3** : **load-balancer *quota-aware*** (seaux à jetons, bascule 90 %) + circuit breaker + failover en cascade ; diversification de quotas → budget effectif = Σ fournisseurs.
- **D-ORC-4** : **dispatcher** vise > 70 % des messages sans LLM payant (regex + déterministe + template + retrieval local).
- **D-ORC-5** : **boucle d'orchestration `SYS_*`** en tool-calling ; l'orchestrateur propose, L1 valide/exécute (seul écrivain).
- **D-ORC-6** : **runtime ONNX mutualisé** (intent/NER/embeddings/MLP) ; génération délocalisée = 0 RAM locale ; ~4 Go/24 utilisés.
- **D-ORC-7** : **ordre d'implémentation** déterministe+RAG avant génératif (le jeu tourne dégradé avant enrichissement).
