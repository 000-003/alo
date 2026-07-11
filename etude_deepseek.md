# Étude d'architecture IA embarquée — Projet ALfheim Online (Cardinal System)

**Cible** : Oracle Cloud Free Tier (ARM Ampere A1, 4 cœurs, 24 Go RAM, 0 GPU)
**Objet** : Multi-agents neuronaux frugaux pour un Game Master complet

---

## 1. Contrainte matérielle Oracle Free — chiffres clés

```
Instance ARM Ampere A1
┌──────────────────────────────┬────────────┐
│ Cœurs                        │ 4 (ARM v8) │
│ RAM                          │ 24 Go      │
│ GPU                          │ ❌ Aucun   │
│ Stockage                     │ 200 Go     │
│ Bande passante               │ 10 Gbps    │
├──────────────────────────────┼────────────┤
│ PostgreSQL (47 tables, seed) │ ~800 Mo    │
│ Node.js + dépendances        │ ~400 Mo    │
│ OS + cache disque            │ ~2 Go      │
│ Disponible pour l'IA        │ ~20 Go RAM │
└──────────────────────────────┴────────────┘
```

Toute inférence est CPU-only. Les performances ARM pour l'inférence sont ~3-5× plus lentes qu'un x86 équivalent.

---

## 2. Arbre des décisions : ce qui mérite un modèle

```
ACTIONS JOUEUR
│
├─ Déterministe (code pur, 0 IA)
│  • Combat : DMG = ATK²/(ATK+DEF) × multiplicateurs
│  • Mouvement : Dijkstra sur graphe 52 zones
│  • Achat/vente : prix × quantité, stock, taxes
│  • Inventaire : CRUD + contraintes de poids/équipement
│  • XP/Niveaux : seuils précalculés
│  • Quêtes : suivi d'étapes, conditions objectives
│  → Temps : < 1 ms
│
├─ Classifieur / Extracteur (BERT ≤ 110M, CPU OK)
│  • Compréhension message → intention + entités
│  → Temps : 10-25 ms
│
├─ Recommandation / Scoring (MLP ou BERT)
│  • PNJ : réponse appropriée (retrieval ranker)
│  • Combat NPC : sélection d'action
│  • Économie dynamique : ajustement prix (règle linéaire)
│  → Temps : 5-30 ms
│
└─ Génération de texte (difficile en CPU)
   • Dialogues riches, narratif de quête
   → 300 ms - 30 s selon modèle. API externe recommandée
```

---

## 3. Catalogue de modèles disponibles — performances ARM

| Modèle | Type | Param. | RAM | Latence ARM (4c) | Usage |
|--------|------|--------|-----|-----------------|-------|
| **BERT-tiny** | Encoder | 4 M | ~50 Mo | 5-8 ms | NER, extraction |
| **MiniLM-L6** | Encoder | 22 M | ~90 Mo | 10-15 ms | Classification, embeddings |
| **DistilBERT** | Encoder | 67 M | ~260 Mo | 15-25 ms | Classification robuste |
| **BERT-base** | Encoder | 110 M | ~440 Mo | 25-40 ms | Si précision extrême nécessaire |
| **MLP 3-layer** | Dense | < 1 M | ~5 Mo | 1-3 ms | Combat NPC, scoring simple |
| **DistilGPT2** | Decoder | 82 M | ~330 Mo | 200-400 ms | Génération faible qualité |
| **Qwen 2.5-0.5B** | Decoder | 500 M | ~1 Go (Q4) | 300-500 ms | Génération correcte |
| **Phi-3-mini** | Decoder | 3.8 B | ~7 Go (Q4) | 3-5 s | Trop lourd |
| **TinyLLaMA 1.1B** | Decoder | 1.1 B | ~2.2 Go (Q4) | 500-800 ms | Génération passable |

**Stratégie** : Encoders en priorité. Décoder uniquement si indispensable, et via API si possible.

---

## 4. Architecture à 4 micro-modèles

```
                    ┌──────────────────┐
                    │   Message brut   │
                    │  "je veux 3     │
                    │   potions HP     │
                    │   au Marché     │
                    │   Noir"         │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │  Agent #1        │
                    │  Intent          │  MiniLM-L6  (22M)
                    │  Classifier      │  10-15 ms
                    │                  │
                    │ Sortie : BUY     │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │  Agent #2        │
                    │  Entity          │  BERT-tiny  (4M)
                    │  Extraction      │  5-8 ms
                    │  (NER)           │
                    │                  │
                    │ Sortie :         │
                    │ item=CSM_POT_HP  │
                    │ qty=3            │
                    │ npc=MARCHE_NOIR  │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────────┐
              │              │                  │
     ┌────────▼─────┐ ┌─────▼───────┐ ┌────────▼──────┐
     │ Agent #3a    │ │ Agent #3b   │ │ Agent #3c     │
     │ Dialogue PNJ │ │ Combat NPC  │ │ Moteur règles │
     │ MiniLM-Retr. │ │ MLP 3-layer │ │ Déterministe  │
     │ 22M / 15ms   │ │ < 1M / 2ms  │ │ < 1ms          │
     └──────────────┘ └─────────────┘ └───────────────┘
              │              │              │
              └──────────────┼──────────────┘
                             │
                    ┌────────▼─────────┐
                    │  Agent #4        │
                    │  Template Engine │  → 0 modèle
                    │  + API Gemini    │  Génération
                    │  (optionnel)     │  narrative
                    └──────────────────┘
```

---

## 5. Fiches détaillées par agent

### Agent #1 — Intent Classifier

| Champ | Valeur |
|-------|--------|
| **Modèle** | MiniLM-L6 (sentence-transformers) + classification head |
| **Taille** | ~90 Mo en ONNX |
| **RAM runtime** | ~120 Mo |
| **Latence** | 10-15 ms (4c ARM) |
| **Format** | ONNX Runtime (binding Node.js) |
| **Classes** | `MOVE, BUY, SELL, TALK, ATTACK, USE_SKILL, INVENTORY, QUEST, PARTY, GUILD, CRAFT, VAULT, MAIL, SYSTEM, UNKNOWN` |
| **Data d'entraînement** | ~3 000 messages étiquetés |
| **Bootstrapping** | 500 patterns regex → génération auto → correction manuelle |
| **Fallback** | Règles regex quand confidence < 0.7 |

### Agent #2 — Entity Extractor (NER)

| Champ | Valeur |
|-------|--------|
| **Modèle** | BERT-tiny + token classification head |
| **Taille** | ~17 Mo en ONNX |
| **RAM runtime** | ~50 Mo |
| **Latence** | 5-8 ms |
| **Tags** | `B-ITEM, I-ITEM, B-NPC, I-NPC, B-ZONE, I-ZONE, B-SKILL, I-SKILL, B-PLAYER, I-PLAYER, B-QUANTITY, B-PRICE` |
| **Data** | ~1 500 phrases annotées |
| **Pipeline** | Tokenizer WordPiece → BERT → Linear → CRF → entités |

### Agent #3a — Dialogue PNJ (retrieval-based)

| Champ | Valeur |
|-------|--------|
| **Modèle** | MiniLM-L6 pour embeddings + index ANN (faiss/annoy) |
| **Taille** | ~90 Mo (modèle) + ~50 Mo (index) |
| **RAM runtime** | ~200 Mo |
| **Latence** | Embedding 15 ms + ANN search 2 ms = ~17 ms |
| **Principe** | Chaque PNJ a ~50 réponses candidates encodées. À l'inférence, on encode le message joueur et on cherche la réponse la plus proche via similarité cosinus. |
| **Données** | ~50-200 paires (contexte → réponse) par PNJ, stockées dans `t_npc_knowledge` |
| **Alternative** | Requête SQL directe sur `t_npc_knowledge` avec filtres (level, tags, zone) → 0 ML, 0.1 ms |

### Agent #3b — Combat NPC (sélection d'action)

| Champ | Valeur |
|-------|--------|
| **Modèle** | MLP 3 couches (128 → 64 → n_skills) |
| **Taille** | < 1 Mo |
| **RAM runtime** | ~5 Mo |
| **Latence** | 1-3 ms |
| **Features** (entrée) | `[hp_ratio, mp_ratio, nb_allies, nb_enemies, distance, buffs_count, debuffs_count, cooldowns_mask, player_level_diff, aggro_mode]` |
| **Sortie** | `[skill_1_prob, ..., skill_n_prob, FLEE_prob, DEFEND_prob]` |
| **Data d'entraînement** | ~10 000 combats simulés |
| **Méthode** | Imitation learning : on exécute un MJ déterministe optimal, on enregistre, on entraîne le MLP à reproduire |

### Agent #4 — Génération narrative

| Approche | Latence | Qualité | RAM | Coût |
|----------|:-------:|:-------:|:---:|:----:|
| **Templates purs** | < 1 ms | Faible | 0 | Gratuit |
| **DistilGPT2 (82M)** | 200-400 ms | Faible-moyen | 330 Mo | Gratuit |
| **Qwen 2.5-0.5B (Q4)** | 300-500 ms | Moyenne | 1 Go | Gratuit |
| **API Gemini Free** | 2-5 s | Haute | 0 | Gratuit |
| **Puter.js (500+ modèles)** | 2-10 s | Haute | 0 | Gratuit |

**Recommandation** : Templates pour 90% des cas standards + API Gemini pour les moments narratifs importants (dialogues de quêtes, événements, légendaires).

---

## 6. Budget RAM consolidé

```
┌──────────────────────────────────┬────────────┐
│ Composante                       │ RAM (est.) │
├──────────────────────────────────┼────────────┤
│ Ubuntu Server ARM minimal        │ ~800 Mo    │
│ PostgreSQL 15 + 47 tables + seed │ ~800 Mo    │
│ Node.js (backend Express)        │ ~400 Mo    │
│ Redis (file d'attente / cache)   │ ~200 Mo    │
│ Buffer/cache disque              │ ~1 Go      │
├──────────────────────────────────┼────────────┤
│ ONNX Runtime (bibliothèque)      │ ~150 Mo    │
│ Agent #1 — Intent (MiniLM)       │ ~120 Mo    │
│ Agent #2 — NER (BERT-tiny)       │ ~50 Mo     │
│ Agent #3a — Dialogue (MiniLM)    │ ~200 Mo    │
│ Agent #3b — Combat (MLP)         │ ~5 Mo      │
│ Agent #4 — Template engine       │ 0 Mo       │
├──────────────────────────────────┼────────────┤
│ TOTAL ESTIMÉ                     │ ~3.7 Go    │
│ RESTANT (libre)                  │ ~20 Go     │
└──────────────────────────────────┴────────────┘
```

On pourrait ajouter Qwen 2.5-0.5B (+1 Go) dans la marge si nécessaire.

---

## 7. Stack technique

```
                    ORACLE CLOUD — ARM Ampere A1
                    Ubuntu 24.04 ARM64
                    ─────────────────────────────────

┌──────────┐  ┌──────────┐  ┌───────────────────────┐
│PostgreSQL│  │  Redis   │  │      Node.js          │
│   15     │  │    7     │  │  Express + ws + wa-web │
└──────────┘  └──────────┘  └───────────┬───────────┘
                                        │
              ┌─────────────────────────▼───────────┐
              │       ONNX Runtime (arm64)          │
              │  Binding Node.js (onnxruntime-node) │
              │                                     │
              │  intent.onnx  ← MiniLM-L6 (22M)     │
              │  ner.onnx     ← BERT-tiny (4M)      │
              │  embed.onnx   ← MiniLM-L6 (22M)     │
              │  combat.onnx  ← MLP-3 (< 1M)        │
              │                                     │
              │  Chargés au démarrage               │
              │  Inférence synchrone                │
              └──────────────────┬──────────────────┘
                                 │
              ┌──────────────────▼──────────────────┐
              │    API externes (Gemini / Puter.js) │
              │    Uniquement pour génération       │
              │    narrative haut de gamme          │
              └─────────────────────────────────────┘
```

**Pourquoi ONNX Runtime :**
- Compilation avec intrinsics ARM (optimisé pour CPU ARM)
- Binding Node.js officiel (`onnxruntime-node`)
- Quantization INT8 intégrée (÷4 en taille, perte négligeable)
- Runtime unique pour BERT, MiniLM, et MLP
- Export depuis PyTorch / transformers / scikit-learn

---

## 8. Cycle de vie d'une requête (cas d'usage : achat)

```
T0    Message joueur : "je veux 3 potions HP"
      ↓
T0+1ms   Agent #1 (Intent) → BUY (confidence 0.97)
      ↓
T0+10ms  Agent #2 (NER) → item=CSM_POT_HP_B, qty=3
      ↓
T0+12ms  Vérification déterministe :
         • Item existe en base ? → OUI (t_items_dict)
         • En stock ? → OUI (stock=12)  
         • Solde suffisant ? → OUI (500 Yrds, prix=360)
      ↓
T0+14ms  Mise à jour base :
         • T_INVENTORY +3 potions
         • Stock -3
         • Yrds -360
      ↓
T0+15ms  Template Engine : "3× Potion HP B ajoutées. Stock restant : 9."
      ↓
T0+16ms  Message WhatsApp envoyé au joueur
```

**Temps total : ~16 ms.** Aucune génération, tout en local.

Cas avec dialogue PNJ (plus long) :

```
T0    Message : "parle moi du Marché Noir"
T0+1ms   Intent → TALK
T0+10ms  NER → npc=NPC_VOU_93
T0+30ms  Agent #3a → embedding + ANN search → meilleure réponse
T0+35ms  Template → réponse formatée
T0+40ms  Envoi
```

**Avec génération API :** +2-5s si on appelle Gemini pour enrichir la réponse.

---

## 9. Données d'entraînement — Stratégie de bootstrapping

```
Phase 1 (Day 1) — Règles pures
  • 50 patterns regex → coverage ~60%
  • Ex: /achat|acheter|je veux.*potion/ → intent=BUY
  • Pas de ML → pas de données d'entraînement
  • Le bot fonctionne dès le jour 1

Phase 2 (Week 1-2) — Collecte des vrais messages
  • Tous les messages joueurs sont loggés dans T_WHATSAPP_LOGS
  • Les regex classent automatiquement (confiance associée)
  • On filtre les 10% à faible confiance pour correction manuelle

Phase 3 (Week 3) — Premier modèle (BERT-tiny)
  • ~500 exemples nettoyés → entraînement BERT-tiny sur CPU
  • Le modèle co-existe avec les regex (fallback si confiance < 0.7)
  • Temps d'entraînement : ~5 min sur 4c ARM

Phase 4 (Month 2) — Raffinement
  • Collecte des cas où regex + modèle divergent
  +500 exemples → ré-entraînement → coverage > 95%

Volume total de données nécessaire :
  • Intent classifier : ~3 000 messages
  • NER : ~1 500 phrases annotées
  • Combat MLP : ~10 000 états simulés (générés automatiquement)
  • Dialogue : 0 si utilisation de t_npc_knowledge en SQL
```

---

## 10. Risques et mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| BERT-tiny sous-performe sur phrases complexes | Classification erronée → action inattendue | Fallback regex immediat + template "je n'ai pas compris" |
| ARM plus lent que prévu | Latence ×3-4 vs x86 | Les modèles font < 25 ms même sur ARM ; ONNX optimisé |
| Pas assez de données d'entraînement | Précision < 80% | Les regex couvrent 60% dès le jour 1 ; amélioration progressive |
| Évolution du jeu (nouveaux items, skills) | Modèle obsolète | Ré-entraînement < 1h sur CPU (petits modèles = rapides) |
| Modèle dialogue insuffisant | Réponses PNJ hors-sujet | Fallback SQL sur t_npc_knowledge en 0.1 ms ; l'ANN ranker est un bonus |
| Combat temps réel | Latence 2-3 ms critique | MLP < 1M paramètres → < 1 ms. Alternative : arbre de décision scikit-learn → 0.1 ms |
| API Gemini down | Plus de génération narrative | Fallback templates en local (qualité moindre mais jeu continue) |
| ONNX Runtime ARM instable | Crash du processus | Conteneurisation Docker + systemd restart toujours |

---

## 11. Comparaison avec l'approche full API Gemini

| Critère | Full API Gemini | Multi-agents locaux (cette étude) |
|---------|:--------------:|:--------------------------------:|
| Coût récurrent | Gratuit (60 req/min) | 0 |
| Latence moyenne | 2-5 s (réseau + inference) | 10-25 ms |
| Dépendance externe | Totale (Gemini/Mistral/Puter) | Aucune |
| Qualité narrative | Haute | Faible-moyenne (templates) |
| Robustesse coupe réseau | ❌ Jeu bloqué | ✅ Continue |
| Rate limiting | 60 req/min Gemini Free | Illimité |
| Vie privée | Données envoyées à Google | 100% local |
| Compréhension jeu | Généraliste (hallucinations possibles) | Modèles entraînés sur vos données |
| Maintenance | Aucune | Ré-entraînement à chaque évolution |
| Génération de texte | Haute | Templates + API (hybride) |

---

## 12. Plan d'implémentation (phases)

| Phase | Durée | Livrable |
|-------|-------|----------|
| **P0 — Fondation** | 1 semaine | Backend Node.js squelettique + PostgreSQL + ONNX Runtime chargé avec agents stub |
| **P1 — Agent #3b Combat** | 1 semaine | MLP entraîné sur combats simulés. Tests unitaires de latence (< 2 ms) |
| **P2 — Agents #1 + #2** | 2 semaines | Patterns regex → collecte données → BERT-tiny NER + MiniLM intent. Coverage > 80% |
| **P3 — Agent #3a Dialogue** | 1 semaine | Index ANN sur t_npc_knowledge. Fallback SQL. Tests A/B |
| **P4 — Template Engine** | 3 jours | Système de templates Jinja2-like pour 90% des réponses |
| **P5 — API Bridge** | 3 jours | Pont Gemini/Puter.js pour la génération narrative haut de gamme uniquement |
| **P6 — Production** | 1 semaine | Déploiement Oracle Free, monitoring, logs, métriques de latence |

---

## 13. Conclusion

| Critère | Verdict |
|---------|:-------:|
| **Faisable sur Oracle Free ?** | ✅ Oui, large |
| **RAM totale utilisée** | ~3.7 Go sur 24 Go |
| **Latence max (hors génération)** | ~25 ms par message |
| **Qualité compréhension** | 90-95% (vs 98-99% GPU) |
| **Complexité dev** | Modérée (ONNX + Node.js) |
| **Pas de dépendance API** | ✅ Possible. Jeu entier en local. |
| **Génération narrative** | Templates seuls (faible) ; hybride API (bon) |
| **Temps total implémentation** | ~1 mois temps plein |

**Ce qu'on gagne vs full API :**
- 0 coût, 0 latence réseau, 0 rate limiting
- Pas de downtime externe
- Temps de réponse constant < 25 ms

**Ce qu'on perd :**
- Qualité narrative inférieure (les templates ne remplacent pas Gemini)
- Maintenance des modèles (ré-entraînement nécessaire si le jeu évolue)
- Pas d'improvisation créative du GM

**Verdict final** : Les 4 micro-modèles (Intent 22M, NER 4M, Dialogue 22M, Combat < 1M) tiennent confortablement dans Oracle Free avec une latence < 25 ms. **C'est la bonne architecture.** La génération narrative reste le maillon faible — solution hybride : templates pour le quotidien, Gemini/KeylessAI pour les moments importants.
