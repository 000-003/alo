# 🌐 ÉTUDE DÉTAILLÉE — Architecture hybride « Local + API gratuites + Fallback + RAG », prête à l'expansion

> **Type** : étude d'architecture P3 (implémentation technique — feu vert PE requis avant réalisation). Prolonge et raffine `13_etude_architecture_multi_ia.md`.
> **Objectif posé par le PE** : concevoir dès maintenant pour l'**expansion** (au-delà des ~300 joueurs actuels) afin d'**éviter une refonte future** ; **désengorger les voies** en décentralisant la charge sur des backends hétérogènes.
> **Loi de conception (corrigée)** : décomposer en agents ne *réduit* pas le travail total — ça le **distribue**, le rend **sans état**, donc **extensible par ajout de capacité, jamais par réécriture**. Le gain n'est pas « moins de tokens » mais « aucun goulot unique + expansion sans refonte ».
> **Invariants hérités (13)** : frontière déterministe absolue (combat/éco/déplacement/jauges hors IA) · RAG = cerveau factuel partagé · verrou méta D22 côté récupération · orchestrateur agnostique au fournisseur · l'IA propose `SYS_*`, le moteur L1 valide et écrit.

---

## 0. Pourquoi l'hybride, et pourquoi « penser loin » ne coûte presque rien ici

Le piège classique : sur-ingénierie (10 microservices pour 300 joueurs = YAGNI). La sortie : **on conçoit les *coutures* pour 10 agents et 4 backends, on n'en *instancie* que ce dont on a besoin.** Une couture (interface stateless, politique de backend, clé de sharding) est **gratuite à dessiner** ; un microservice est cher à faire tourner. D'où la règle :

> **« Câble 10 rôles dans les contrats, déploie-en 4 ; fractionner = basculer un rôle d'un backend partagé vers sa propre politique, par configuration, pas par refonte. »**

C'est ce qui réconcilie « penser loin » et « ne pas sur-construire ».

---

## 1. Les 4 couches de backend

L'hybride n'est pas « local OU API » : c'est une **cascade de 4 couches**, du moins cher/plus fiable au plus coûteux, chaque spécialiste ayant sa propre traversée.

| Couche | Backend | Coût | Fiabilité | Concurrence | Rôle |
|---|---|---|---|---|---|
| **C1 — Local (Oracle ARM)** | moteur L1 + RAG + embeddings + petits modèles 1-3B (Ollama) | 0 $ | ✅ maîtrisée, sans réseau | limitée (4 cœurs, sérielle) | déterministe + tâches courtes/parallélisables |
| **C2 — 2 meilleures API gratuites** | **Groq** (Llama 3.3 70B, ultra-rapide, tool-calling) + **Gemini Flash** (capable, tool use natif) | 0 $ | 🟡 rate-limité, pas de SLA | ✅ élevée | raisonnement, narration, orchestration |
| **C3 — Pool des autres API gratuites** | **Cerebras** · **Cloudflare Workers AI** · **OpenRouter** (`:free`) · **Mistral** (tier expér.) · **HuggingFace Inference** · **GitHub Models** | 0 $ | 🟡 rate-limité, pas de SLA | ✅ | débordement de quota des 2 primaires C2 |
| **C4 — Dégradé déterministe** | gabarits pré-écrits dans L1 | 0 $ | ✅ absolue | ✅ | dernier recours : le jeu tourne, moins littéraire |

**Le principe de désengorgement** : la charge n'attaque jamais **une** file, elle **descend la cascade**. Tant que C1/C2 absorbent, C3 n'est pas sollicité ; C4 garantit que rien ne bloque jamais. **Toute la cascade est gratuite** — aucun palier payant.

### 1-bis. La politique « 100 % gratuit » — décision PE + honnêteté d'Architecte

**Décision actée** : stack **entièrement gratuit**, C2 (2 meilleures) + C3 (le reste) + C4, **sans aucun palier payant**. Trois raisons rendent ce choix **viable à l'échelle actuelle** : (a) le budget gratuit effectif = **Σ de tous les fournisseurs** (2 en C2 + 5-6 en C3) → un plafond agrégé large ; (b) le failover en cascade rend la saturation *simultanée* de tous les fournisseurs très improbable ; (c) C4 garantit qu'au pire absolu, **le jeu tourne** (narration en gabarit), jamais d'arrêt.

**Réserves à connaître (ne pas ignorer, ne pas bloquer)** :
- **CGU / usage commercial** : plusieurs tiers gratuits **interdisent la production/le commercial** et/ou **s'entraînent sur les données**. À **auditer fournisseur par fournisseur** avant lancement public (leurs conditions bougent — non garanties ici).
- **Pas de SLA** : plafond qualité = **meilleur modèle gratuit** (Groq 70B / Gemini Flash), largement suffisant pour un RPG textuel WhatsApp ; mais aucune garantie de disponibilité.
- **Porte de sortie non destructive** : grâce à l'interface agnostique (§10, D-IA-11), **ajouter un backend payant plus tard = éditer une politique**, pas une refonte. Le payant reste un **interrupteur de configuration**, désactivé par défaut — jamais une dépendance. « Entièrement gratuit » est donc un **choix réversible sans coût de réécriture**.

---

## 2. Placement des spécialistes sur les couches (matrice rôle × backend)

Ordre de préférence par spécialiste = sa **politique de backend**. C'est le cœur de la diversification de quotas (§3).

Colonnes **Primaire/Secondaire = C2** (Groq/Gemini) ou C1 ; colonne **Fallback = pool C3** (autres API gratuites) ; **Dégradé = C4** déterministe. Aucun payant nulle part.

| Spécialiste (cf. 13) | Primaire | Secondaire | Fallback C3 | Dégradé C4 | Justification du placement |
|---|---|---|---|---|---|
| S0 Routeur | **C1 local 1B** | Groq | Cloudflare | règles pures | volume énorme, latence critique, tâche simple → local |
| S8 Modération | **C1 local 1B** | Cloudflare | HuggingFace | règles (liste noire) | volume, binaire, données sensibles → reste local |
| RAG (embeddings) | **C1 local** | — | — | recherche lexicale | déterministe, jamais délocalisé |
| S6 Combat (narration) | **C1 local 3B** ou Cloudflare | Groq | Cerebras | gabarit épique fixe | très haut volume, faible enjeu → décentralisé |
| S1 NL→`SYS_*` | Groq | Gemini | Cerebras (strict) | refus poli | structuré, court, doit être fiable |
| S2 PNJ mineur | Groq | Gemini | Cerebras | ligne générique | volume, enjeu modéré |
| S2 PNJ notable/canon | Gemini | Groq | OpenRouter (`:free` gros modèle) | ligne canon fixe | voix signature → escalade qualité **dans le gratuit** |
| S3 GM ambiance | **Gemini** | Groq | OpenRouter | description fixe | « sense of wonder » |
| S4 Quête | Groq | Gemini | OpenRouter | étape brute | embranchements |
| S5 Marchand | Groq | local 3B | Cloudflare | menu transactionnel | transactionnel |
| S7 Q&R lore | Groq | Gemini | Cerebras | extrait RAG brut | RAG fait le gros |
| **Orchestrateur (L4, tours complexes)** | **Groq 70B** | Gemini Flash | Cerebras → OpenRouter | routage par règles | le plus puissant, sur les 10-20 % de tours durs |

**Observation clé** : les primaires sont **volontairement répartis** (local, Groq, Gemini) et les fallbacks **étalés sur tout le pool C3** (Cloudflare, Cerebras, OpenRouter, HuggingFace…). Aucune file ne porte tout → **le budget gratuit effectif = Σ des budgets de TOUS les fournisseurs C2+C3**, pas celui d'un seul. C'est ce qui rend le « tout gratuit » tenable : plus il y a de rôles étalés sur de fournisseurs distincts, plus le plafond agrégé monte.

---

## 3. Le mécanisme de désengorgement (le cœur de la demande PE)

Trois briques combinées transforment « plusieurs agents » en « voies désengorgées » :

### 3.1 Diversification de quotas
Assigner des **primaires différents** aux spécialistes (S3→Gemini, S1→Groq, S6→local…) répartit la charge. Si Groq plafonne, seuls les rôles Groq basculent — les rôles Gemini continuent. **Plus il y a de rôles répartis sur des fournisseurs distincts, plus le plafond agrégé est haut et plus la saturation d'un fournisseur est indolore.** *(C'est ici que l'intuition du PE se vérifie : la décentralisation repousse le mur, même à gros débit.)*

### 3.2 Load-balancer *quota-aware* (par fournisseur)
Un **seau à jetons** (token bucket) par fournisseur suit le budget restant (req/min, req/jour). Le routeur choisit le **premier backend de la politique ayant du budget** ; il **anticipe** le mur (bascule à 90 % du quota, pas à 100 %) → jamais de rafale de 429.

### 3.3 Circuit breaker + failover en cascade
Sur `429` / timeout / erreur : le backend est **court-circuité** (ouvert quelques secondes), le routeur descend la politique. Santé = passive (taux d'erreur) + active (ping périodique). Un fournisseur qui revient est **réintégré** progressivement.

```
requête spécialiste
   └─ politique = [primaire, secondaire, fallback, dégradé]
        pour chaque backend :
          si budget(backend) > seuil ET circuit(backend) fermé :
             tenter → succès ? renvoyer
                      429/erreur ? ouvrir circuit, backend suivant
        → si C2 (primaire+secondaire) épuisés → pool C3 (autres API gratuites, en rotation)
        → si tout le pool gratuit épuisé/indisponible → C4 gabarit déterministe
```

---

## 4. Dégradation gracieuse à 4 niveaux (propriété émergente, pas ajoutée)

Chaque spécialiste dégrade **indépendamment**. Un pic sur S3 (GM) ne touche pas S2 (PNJ). C'est l'isolation des pannes de la décomposition — mais désormais **chiffrée par couche** :

| Niveau | État du monde | Coût |
|---|---|---|
| C2 primaire (ex. Groq) | pleine richesse narrative | 0 $ |
| C2 secondaire (ex. Gemini) | richesse quasi identique (autre fournisseur) | 0 $ |
| C3 pool gratuit (Cerebras/Cloudflare/OpenRouter…) | richesse maintenue, encore un autre fournisseur free | 0 $ |
| C4 déterministe | **le jeu tourne**, narration en gabarit | 0 $ |

**Aucune « petite IA » n'est un point de défaillance du *gameplay*.** Au pire le lieu « respire » moins ; jamais injouable. (Le seul vital = L1 déterministe, local, sans réseau.)

---

## 5. Le RAG dans l'hybride

- **Local, partagé, répliquable.** Index d'embeddings (modèle multilingue *small*, CPU) + magasin vectoriel (`sqlite-vec`/`pgvector`) sur C1. Chunking par **section de gabarit** (D17/D67/D68) ; métadonnées de filtrage : préfixe d'ID, zone, tier, ville.
- **Nourrit toutes les couches** : chaque spécialiste, quel que soit son backend, reçoit **les mêmes passages** → cohérence factuelle garantie malgré l'hétérogénéité des modèles.
- **Ce qui ne sort JAMAIS d'aucun fournisseur** : (a) les slots **K3 méta** (verrou D22 — jamais récupérés, donc jamais injectés) ; (b) données joueur identifiantes au-delà du strict nécessaire (§13). Le secret n'est pas « caché par consigne » — il n'entre pas dans le contexte.
- **À l'expansion** : l'index se **réplique** par instance (lecture seule) ou se **shard par territoire**. Aucune réécriture — c'est une donnée, pas du code.

---

## 6. Statelessness & scale-out horizontal — LE point anti-refonte

**Aucun spécialiste ne détient d'état.** Tout l'état vit dans L1 (tables MLD : `T_AVATARS`, `T_INVENTORY`, `T_WA_GROUPS`, `T_ZONE_LINKS`, `T_SHOPS`…) + le cache de session (Map/Redis). Un agent = une fonction pure `f(prompt figé, contexte injecté) → texte | SYS_*`.

Conséquence directe : on **ajoute de la capacité sans rien réécrire** —
- ajouter un fournisseur gratuit = une ligne dans une politique de backend ;
- ajouter une instance Oracle = elle lit la même base, sert d'autres lieux ;
- fractionner un rôle = basculer sa politique de « géré par l'agent polyvalent » vers « backend dédié ».

**C'est précisément ce qui évite la refonte.** La refonte n'arrive que si l'état est *dans* les agents (couplage) — ici il n'y est jamais.

---

## 7. Sharding par lieu — la clé de partition déjà présente

Le monde est **déjà** découpé : 1 territoire = 1 groupe WhatsApp (D76) = une clé de partition naturelle (13 territoires, atlas §2-bis / `T_WA_GROUPS`) — la zone (`ZONE_*`, état L1) reste une sous-clé disponible pour un partitionnement plus fin. Passage mono→multi-instance =
- router les territoires `A-M` sur l'instance 1, `N-Z` sur l'instance 2 (base partagée ou répliquée) ;
- l'invariant R0 v2 (1 joueur = 1 territoire) garantit qu'un joueur est traité par **une** instance à la fois → pas de conflit d'état.

Le sharding est **conçu d'avance** (clé existante), **activé plus tard** (config). Zéro refonte.

---

## 8. Budget de latence en hybride

WhatsApp asynchrone → tolérance large (1-5 s confort, 10 s ok). L'hybride ne dégrade pas la latence si l'on **parallélise** :

| Étape | Latence | Parallélisable ? |
|---|---|---|
| Dispatcher (règles) | < 5 ms | — |
| S8 modération (C1) ∥ RAG (C1) | ~50-300 ms | ✅ lancés ensemble |
| Appel spécialiste (C2 primaire) | ~0,5-3,5 s | — |
| **Failover** (si 429) | +~0,3-1 s | rare (anticipé §3.2) |
| C4 dégradé | < 10 ms | — |

Le failover ne coûte de la latence **que sur le rare tour qui touche le mur** — que le load-balancer *quota-aware* cherche justement à éviter.

---

## 9. Modèle de consommation honnête (300 → 3 000 → 30 000)

**Le total de tokens/jour croît ~linéairement avec les joueurs (travail conservé).** Ce que l'hybride change, c'est **où** ce total tombe et **combien** il coûte l'unité :

| Échelle | Absorbé par | Coût | Ce qui change | Ce qui reste |
|---|---|---|---|---|
| **~300** | C1 local + C2 (2 primaires) | **0 $** | rien | interfaces, contrats, cœur déterministe |
| **~3 000** | C1 + C2 + C3 en rotation (Σ quotas free) | **0 $** | on ajoute des fournisseurs gratuits à la politique ; on scinde 1-2 rôles | idem |
| **~30 000** | multi-instances shardées ; **tout le pool gratuit C2+C3 en rotation** | **0 $ tant que Σ quotas free tient** ; sinon **option** payant en C3 par config (D-IA-11), non activée par défaut | on ajoute instances + fournisseurs gratuits ; le payant reste un **interrupteur**, pas une dépendance | **idem — aucune réécriture** |

**Le levier de « budget » unitaire** (indépendant de l'échelle) : cache de prompt par lieu (~0,1× en lecture là où le fournisseur le supporte), bon dimensionnement (modèle léger local/Cloudflare ≠ Groq 70B pour *classer* une intention), dispatcher qui évite l'IA sur >70 % des messages. Décomposer **améliore** le cache (prompts figés courts) et **économise le quota gratuit** — donc à gros débit, la **consommation de quota par tour baisse** même si le total monte.

---

## 10. L'interface agnostique au fournisseur — l'unique abstraction anti-refonte

Un seul contrat, derrière lequel tout backend se branche :

```
generate(role, prompt_figé, contexte_injecté, politique) -> { texte | SYS_*[] }
   politique = liste ordonnée de backends + budgets + gabarit de repli
```

- Le moteur L1 et les spécialistes **ne connaissent jamais** « Groq » ou « Gemini » — seulement un `role` et une `politique`.
- Changer de fournisseur = éditer la politique. **Migrer 300→30 000 = éditer des politiques + ajouter des instances.** Le code métier ne bouge pas.

**C'est la seule pièce qu'il faut absolument bien concevoir dès le jour 1.** Tout le reste (nombre d'agents, choix de fournisseurs, sharding) se change ensuite par configuration.

---

## 11. Comptabilité de quotas & santé

- **Seau à jetons par fournisseur** (req/min + req/jour + tokens/min si le fournisseur les borne).
- **Circuit breaker** par backend (états fermé/ouvert/demi-ouvert).
- **Tableau de bord** : budget restant par fournisseur, taux de failover, latence p50/p95 par spécialiste, part C1/C2/C3/C4. → permet de *voir* la congestion avant qu'elle morde et d'ajouter un fournisseur au bon moment.

---

## 12. Cohérence entre modèles hétérogènes

Risque de l'hybride : Groq, Gemini, Llama local, Claude ne « parlent » pas pareil. Trois absorbeurs de variance :
1. **RAG partagé** → mêmes faits injectés partout.
2. **Contrats de sortie stricts** → S1/S4/S5 renvoient du `SYS_*` **structuré** (tool use / schéma), validé par L1 ; un modèle qui dérive est **rejeté**, pas exécuté.
3. **Gabarits de rôle figés** → le ton d'un spécialiste est cadré par son prompt système, pas par le modèle sous-jacent.

La variance de style résiduelle est **acceptable** (un PNJ peut sonner légèrement différent selon le backend) ; la variance **factuelle ou d'état est impossible** (RAG + validation `SYS_*`).

---

## 13. Sécurité & données à travers des fournisseurs gratuits

- **Beaucoup de tiers gratuits s'entraînent sur les données / les journalisent** → à vérifier dans leurs CGU (elles bougent). Règle : **ne jamais envoyer à un fournisseur gratuit** ce qui est sensible.
- **Ce qui ne quitte pas C1** : K3 méta (déjà par D22), identifiants joueur réels, secrets serveur. Les spécialistes reçoivent des **pseudos/IDs de jeu**, pas de PII.
- **Modération (S8) en local** : ne pas exposer les messages bruts des joueurs à un tiers gratuit.
- **Frontière déterministe** : aucune entrée joueur ne franchit vers l'état sans `SYS_*` validé → un prompt injecté ne peut ni dup, ni révéler (le secret n'est pas dans le contexte).

---

## 14. Chemin d'expansion sans refonte — récapitulatif

| Levier d'expansion | Action | Type |
|---|---|---|
| Plus de joueurs, même fournisseurs | rien (cascade absorbe) | automatique |
| Un fournisseur sature | ajouter un fournisseur à la politique | **config** |
| Qualité d'un rôle insuffisante | scinder le rôle → sa propre politique | **config** |
| Débit dépasse Σ quotas free | activer l'option payant en C3 (interrupteur config, off par défaut) | **config** |
| Charge dépasse une instance | ajouter une instance + sharder par lieu | **capacité** |
| Nouveau territoire/monde | ajouter des fiches → RAG à jour | **données** |

**Aucune ligne n'exige une réécriture.** C'est l'objectif du PE atteint : concevoir les coutures maintenant (stateless + agnostique + sharding-ready) rend l'expansion **additive**, jamais destructive.

---

## 15. Décisions actées

- **D-IA-7** : **échelle de départ ~300 joueurs**, **conçue pour l'expansion** — coutures dimensionnées pour N agents / M fournisseurs, mais **déploiement initial réduit** (« câble 10, déploie 4 »).
- **D-IA-8** *(révisée — stack 100 % gratuit, décision PE)* : **cascade de 4 couches entièrement gratuite** — C1 local / **C2 = 2 meilleures API gratuites (Groq + Gemini Flash)** / **C3 = pool des autres API gratuites (Cerebras, Cloudflare Workers AI, OpenRouter `:free`, Mistral, HuggingFace, GitHub Models…)** / C4 dégradé déterministe. **Aucun palier payant.** Le payant reste une **option de configuration** (D-IA-11), désactivée par défaut, jamais une dépendance — « entièrement gratuit » est donc réversible sans réécriture.
- **D-IA-9** : **désengorgement par diversification de quotas** — primaires répartis sur fournisseurs distincts ; budget gratuit effectif = Σ fournisseurs. Load-balancer *quota-aware* + circuit breaker + failover en cascade.
- **D-IA-10** : **statelessness stricte** de tous les spécialistes ; état exclusivement en L1/base → scale-out horizontal par ajout d'instances, sharding par lieu (clé `ZONE_*`/`T_WA_GROUPS` déjà existante).
- **D-IA-11** : **interface agnostique au fournisseur** `generate(role, prompt, contexte, politique)` = l'unique abstraction à figer dès le jour 1 ; tout changement de fournisseur/échelle passe par configuration de politique.
- **D-IA-12** : **données sensibles jamais délocalisées** — K3 (D22), PII, modération restent en C1 ; les fournisseurs gratuits ne voient que des IDs de jeu.
- **Loi de conception actée** : « décomposer distribue le travail, ne le réduit pas ; le gain est l'absence de goulot unique + l'expansion sans refonte, obtenus par distribution + statelessness + cache. »

---

## 16. Prochaine marche (si le PE valide)

Livrables structurels suivants (markdown, zéro code jusqu'au feu vert d'implémentation) :
1. **CDC du RAG** : format d'index, chunking par section de gabarit, schéma de métadonnées, contrat d'injection par spécialiste.
2. **Contrats des spécialistes déployés au départ (4)** + **politiques de backend** de chacun (table C1→C4 + budgets).
3. **Spéc de l'interface `generate(...)`** agnostique + format d'une politique de backend.
4. **Spéc du load-balancer quota-aware** (seaux à jetons, circuit breaker, seuils).
5. **Matrice de dégradation** : gabarit C4 par spécialiste.
6. *(Implémentation Node.js — décision PE séparée.)*
