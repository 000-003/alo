# Table MLD : T_NPC_KNOWLEDGE (+ T_NPC_KNOWLEDGE_UNLOCKS)

> **19ᵉ table du MLD** (étape 5, lot 2.0). Stocke l'**enveloppe informationnelle** de chaque PNJ
> (protocole QI, décisions D17-D18 — voir `the_seed_engine/system_mechanics/npc_knowledge_protocol.md`).
> Source de vérité des sections « Quantité Informationnelle » des fiches `personnages_bestiaire/pnj/`.

## 1. Structure Logique : T_NPC_KNOWLEDGE

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `qi_id` | Texte | **PK** — format `QI_<VILLE>_<NN>_<n>` | Ex : `QI_GAT_26_07` (7ᵉ slot de `NPC_GAT_26`) |
| `npc_id` | Texte | FK → `T_NPC.npc_id`, NOT NULL | PNJ propriétaire de l'enveloppe |
| `k_level` | Énum | `K0` / `K1` / `K2` / `K3` / `KX`, NOT NULL | Niveau de confidentialité (§1.1 du protocole) |
| `topic_tags` | Texte[] | NOT NULL sauf `KX` | Mots-clés de matching (normalisés minuscules, sans accents) |
| `content` | Texte | NOT NULL | L'information elle-même (K0-K3) ou la **ligne d'ignorance** (KX) |
| `unlock_condition` | Texte | NOT NULL si `K2`, sinon NULL | Grammaire §1.3 : `AFF>=70`, `QUEST:…`, `PAY:…`, `TITLE:…`, `RACE:…`, `ITEM:…`, composables par `+` |
| `deflection_line` | Texte | NOT NULL si `K3`, sinon NULL | Réplique scriptée renvoyée quand le secret est sondé (jamais générée) |

## 2. Structure Logique : T_NPC_KNOWLEDGE_UNLOCKS

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `avatar_id` | UUID | FK → `T_AVATARS.avatar_id`, **PK composite** | Joueur ayant rempli la condition |
| `qi_id` | Texte | FK → `T_NPC_KNOWLEDGE.qi_id`, **PK composite** | Slot débloqué |
| `unlocked_at` | Horodatage | défaut MAINTENANT | Trace d'audit (et de facturation pour `PAY:`) |

## 3. Indexation et Optimisation

- **Index** sur `T_NPC_KNOWLEDGE(npc_id, k_level)` : chargement de l'enveloppe à chaque `!parler` / `!demander`.
- **Index GIN** sur `topic_tags` : matching sujet → slots en une requête.
- **Index** sur `T_NPC_KNOWLEDGE_UNLOCKS(avatar_id)` : résolution du scope personnel avant injection LLM.

## 4. Triggers / Procédures Stockées (contrats d'intégrité)

| # | Contrat | Comportement |
|---|---|---|
| T1 | **Budget dur (D17)** | Un `npc_id` possède au plus 12 slots, dont **exactement un** `KX` — INSERT au-delà rejeté |
| T2 | **K3 défléchi** | INSERT d'un slot `K3` sans `deflection_line` rejeté (le bot doit toujours avoir une réplique scriptée) |
| T3 | **Pare-feu (D18/I1)** | Vue d'injection `V_NPC_LLM_SCOPE(avatar_id, npc_id)` : K0 + K1 + (K2 ∩ unlocks de l'avatar) **uniquement** — les couches de génération n'ont pas accès en lecture aux `content` K3 |
| T4 | **Sonde de secret** | SELECT d'un slot K3 par le pipeline de dialogue ⇒ émission `NPC_SECRET_PROBED(npc_id, avatar_id, qi_id)` vers l'orchestrateur IA |
| T5 | **Paiement atomique** | Déblocage `PAY:<N>` : débit `T_AVATARS.yrds` et INSERT unlock dans la même transaction (aucune info gratuite en cas d'échec du débit) |

## 5. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Dialogue dans le scope | `!parler`, `!demander` | — | `SYS_NPC_DIALOGUE(NPC_ID, Avatar_ID, Topic, Knowledge_Scope)` |
| Audit d'enveloppe | — | `!sys_npc_info [NPC_ID]` | `SYS_NPC_KNOWLEDGE_CHECK(NPC_ID)` |
| Déblocage manuel | — | `!sys_npc_unlock [NPC_ID] [QI_ID] [Avatar]` | `SYS_NPC_KNOWLEDGE_UNLOCK(NPC_ID, QI_ID, Avatar_ID)` |
