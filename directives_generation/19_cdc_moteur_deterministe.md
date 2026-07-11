# 🛡️ CDC-DET-01 — Moteur déterministe L1 & contrat d'exécution `SYS_*`

> **Type** : cahier des charges P3 (implémentation — feu vert PE). Le **cœur qui exécute et écrit l'état** : la frontière déterministe, les sous-systèmes de jeu, et le **contrat de validation/exécution des `SYS_*`** émis par les spécialistes.
> **Sources intégrées** : `13_`/`14_` (frontière déterministe, `SYS_*` = tool-calling), `etude_deepseek.md` §2 (arbre de décision, formule de combat, Dijkstra, MLP de comportement).
> **Invariant central** : **L1 est le SEUL écrivain de l'état.** Aucune IA n'écrit jamais l'état ; elle **propose** un `SYS_*`, L1 **valide puis exécute** (ou rejette). Locking anti-duplication obligatoire (persona §2.2).

---

## 1. La frontière déterministe (rappel — ligne rouge)

Ces domaines sont **du code pur, 0 IA**. Y mettre un réseau = un bug déguisé.

| Sous-système | Règle | Latence |
|---|---|---|
| **Combat (résolution)** | `DMG = ATK²/(ATK+DEF) × multiplicateurs` (crit, élément, jauges D11/D12) ; hit/miss ; I-frames ; mort | < 1 ms |
| **Mouvement** | Dijkstra sur le graphe de zones (`T_ZONE_LINKS`, source de vérité D9) ; **invariant R0 v2, D76** (1 joueur = 1 groupe TERRITOIRE ; zone exacte = `current_zone_id`, écrite par L1 seul) | < 1 ms |
| **Économie** | `prix × quantité`, stock, taxes, revente 25 % ; grille de tiers (étape 37) | < 1 ms |
| **Inventaire** | CRUD + capacité/port (D44/D45, `T_INVENTORY`) ; triggers **anti-dup**, plafonds | < 1 ms |
| **XP / niveaux** | seuils précalculés | < 1 ms |
| **Quêtes** | suivi d'étapes, conditions objectives, embranchements | < 1 ms |
| **Jauges env.** | `HEAT`/`OXYGEN`/`DOT` (D11/D12) calculées par message/action | < 1 ms |
| **Déblocages** | prérequis (Niveau, quête T5, maîtrise, drop rate) | < 1 ms |

**Règle absolue** : l'IA ne *décide* jamais un chiffre d'état. Elle *habille* un chiffre décidé par L1 (S6) ou *propose* une action que L1 valide (S1/S4/S5/orchestrateur).

---

## 2. Le contrat d'exécution `SYS_*` (le pont IA→état)

Tout `SYS_*` émis par un spécialiste ou l'orchestrateur passe ce **pipeline de validation** avant tout effet :

```
SYS_* proposé
   └─ 1. EXISTENCE  : tous les IDs référencés existent-ils ? (D71 : seuls les vrais Item_ID/NPC/ZONE existent)
   └─ 2. PRÉREQUIS  : conditions objectives remplies ? (niveau, quête, solde, stock, capacité, invariant R0)
   └─ 3. AUTORISATION : la source a-t-elle le droit ? (verrou D22 : SYS_NPC_SECRET_PROBED ≤ 1/session, jamais confirmé)
   └─ 4. LOCK       : verrou d'état de l'avatar (anti-duplication, I-frames)
   └─ 5. EXÉCUTION  : écriture atomique en base (transaction)
   └─ 6. RÉSULTAT   : renvoie l'état résultant (chiffres) au narrateur (S6/17_)
   └─ (échec à toute étape) → REJET (aucun effet) + raison
```

**Conséquence** : une **hallucination d'ID** (spécialiste inventant `ARM_XXX_999`) est **rejetée à l'étape 1** → aucun effet de jeu. C'est le garde-fou final qui rend l'IA générative **sûre**.

**Registre `SYS_*`** (source de vérité = `ai_orchestrator_commands.md`) : `SYS_GRANT_ITEM`, `SYS_GRANT_SPELL/OSS`, `SYS_ADVANCE_QUEST`, `SYS_START_QUEST`, `SYS_NPC_KNOWLEDGE_UNLOCK`, `SYS_NPC_SECRET_PROBED`, `SYS_SET_ENV_HAZARD`, `SYS_ADJUST_SPAWN`, `SYS_SHOP_RESTOCK`, `SYS_SET_FACTION_STANDING`… (+ `SYS_RAG_REINDEX` de `15_`, `SYS_GRANT_PASSIVE` en `[BESOIN_COMMANDE]`).

---

## 3. L'exception ML « comportement de mob » — comportement ≠ résolution

DeepSeek Agent #3b, adopté **avec clarification de la frontière**. Le **choix d'action** d'un mob/PNJ en combat (quel skill lancer, fuir, défendre) est une **politique de comportement**, pas un calcul d'état. Il **peut** être un modèle ML **sans violer la frontière**, car :

- le **choix** (« le mob lance Boule de Feu ») est une *décision de comportement* ;
- la **résolution** de ce choix (dégâts de la Boule de Feu) reste **100 % déterministe** (§1).

| Champ | Valeur |
|---|---|
| Modèle | **MLP 3 couches** (`128→64→n_skills`) **ou arbre de décision** scikit-learn |
| Runtime | ONNX (mutualisé, `18_`) ou règles | 
| Taille / latence | < 1 Mo / 1-3 ms (MLP) ; 0,1 ms (arbre) |
| Entrée | `[hp_ratio, mp_ratio, nb_alliés, nb_ennemis, distance, buffs, debuffs, cooldowns, Δniveau, mode_aggro]` |
| Sortie | distribution sur `[skill_1…skill_n, FLEE, DEFEND]` |
| Entraînement | **imitation learning** : un MJ déterministe optimal joue → on enregistre → le MLP reproduit (~10 000 combats simulés, générés auto) |
| Fallback | arbre de décision / règles si le MLP déçoit |

**Décision de frontière (D-DET-3)** : la **politique de comportement** des PNJ/mobs **peut** être ML (MLP/arbre) — c'est du *comportement*. La **résolution** de l'action choisie **reste déterministe**. La ligne rouge sépare *choisir une action* (ML permis) de *calculer son effet* (jamais ML).

---

## 4. Mapping `SYS_*` ↔ sous-système

| `SYS_*` | Sous-système L1 | Validation clé |
|---|---|---|
| `SYS_GRANT_ITEM` | inventaire | item existe, capacité, anti-dup |
| `SYS_GRANT_SPELL/OSS/PASSIVE` | compétences | prérequis (quête T5, niveau, affinité) |
| `SYS_ADVANCE_QUEST` / `SYS_START_QUEST` | quêtes | étape valide, conditions objectives |
| `SYS_NPC_KNOWLEDGE_UNLOCK` | savoir PNJ | condition de déblocage (K2) |
| `SYS_NPC_SECRET_PROBED` | méta | **D22 : ≤ 1/session, jamais confirmé** |
| `SYS_SET_ENV_HAZARD` | jauges D11/D12 | zone valide, borne 0-100 |
| `SYS_SHOP_RESTOCK` / transaction | économie | stock, solde, prix (grille étape 37) |
| déplacement | mouvement | **R0 v2 (D76)** : liaison existe (`T_ZONE_LINKS`), 1 zone à la fois (état L1) + 1 groupe territoire à la fois (`sync_player_groups()`) |

---

## 5. Robustesse

- **Locking** de l'état de l'avatar pendant le calcul (Redis/Map) → pas d'exploit de duplication (persona §2.2).
- **Transactions atomiques** en base → cohérence.
- **Déterminisme total** → reproductible, testable unitairement (pas de dépendance IA/réseau).
- **Indépendance réseau** : L1 fait tourner le jeu **même si toute la couche IA est down** (dégradation vers C4 templates, `14_`/`17_`).

---

## 6. Décisions actées

- **D-DET-1** : **frontière déterministe absolue** — combat (résolution), mouvement (Dijkstra + R0), économie, inventaire, XP, quêtes, jauges, déblocages = code pur, 0 IA.
- **D-DET-2** : **contrat `SYS_*`** — validation en 6 étapes (existence D71 → prérequis → autorisation D22 → lock → exécution atomique → résultat) ; L1 = **seul écrivain** ; hallucination d'ID rejetée sans effet.
- **D-DET-3** : **comportement de mob ML autorisé** (MLP imitation learning / arbre de décision) car *comportement* ≠ *résolution* ; l'effet de l'action choisie reste déterministe.
- **D-DET-4** : **locking anti-dup + transactions atomiques** ; L1 indépendant du réseau → le jeu tourne même IA down.
- **Complétude commandes** : registre `SYS_*` = source de vérité `ai_orchestrator_commands.md` ; `SYS_RAG_REINDEX` (`15_`) et `SYS_GRANT_PASSIVE` en `[BESOIN_COMMANDE]` à propager à l'implémentation.
