# Table MLD : T_QUESTS_DICT

> Générateur de Quêtes. Source de vérité pour toutes les quêtes du jeu, référencées par `T_ACTIVE_QUESTS` et `T_QUEST_HISTORY`.

## 1. Structure SQL

```sql
CREATE TABLE T_QUESTS_DICT (
    quest_id            VARCHAR(50) PRIMARY KEY,
    title               VARCHAR(100) NOT NULL,
    quest_type          VARCHAR(10) NOT NULL CHECK (quest_type IN ('main','side','daily','faction','tutorial','legendary','t5')),
    min_level           INT DEFAULT 1,
    recommended_level   INT,
    zone_id             VARCHAR(50) REFERENCES T_ZONES(zone_id),
    giver_npc_id        VARCHAR(50) REFERENCES T_NPC(npc_id),
    objective_json      JSONB NOT NULL,
    total_steps         INT NOT NULL DEFAULT 1,
    reward_xp           INT DEFAULT 0,
    reward_yrds         INT DEFAULT 0,
    reward_items        JSONB DEFAULT '[]'::jsonb,
    reward_title_id     VARCHAR(30) REFERENCES T_TITLES(title_id),
    prerequisites       JSONB DEFAULT '{}'::jsonb,   -- {min_level, quest_done, min_affinity_tier, qi_unlocked, topic_flag, requires_married, requires_home} (D-SOC-3)
    is_repeatable       BOOLEAN DEFAULT FALSE,
    is_hidden           BOOLEAN DEFAULT FALSE,
    has_deadline        BOOLEAN DEFAULT FALSE,
    deadline_hours      INT,
    description         TEXT,
    lore_text           TEXT
);

CREATE INDEX idx_quests_type ON T_QUESTS_DICT(quest_type);
CREATE INDEX idx_quests_zone ON T_QUESTS_DICT(zone_id);
CREATE INDEX idx_quests_level ON T_QUESTS_DICT(min_level);
```

## 2. Indexation et Optimisation

- **Index** `quest_type` : `!quetes` filtre par type.
- **Index** `zone_id` : quêtes disponibles dans la zone courante (`!quest_board`).
- **Index** `min_level` : ordre de découverte par niveau.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| Q1 | **Récompenses T5/Legendaire** | `quest_type IN ('t5','legendary')` ⇒ au moins 1 `reward_title_id` ou `reward_items` non vide. Plancher balance sheet v2.0 respecté |
| Q2 | **Objectif structuré** | `objective_json` contient obligatoirement `type` + `target` + `count` pour les quêtes de chasse/collecte |
| Q3 | **Quête daily** | `quest_type = 'daily'` ⇒ `is_repeatable = TRUE`, `has_deadline = TRUE`, `deadline_hours = 24` |
| Q4 | **Side-quest sociale (D-SOC-3)** | `prerequisites` peut porter des conditions relationnelles, évaluées à l'affichage `!quest_board` du PNJ donneur : `min_affinity_tier` (lu sur `T_NPC_RELATIONS`), `qi_unlocked` (lu sur `T_NPC_KNOWLEDGE_UNLOCKS`), `topic_flag`, `requires_married`, `requires_home`. Prérequis non rempli ⇒ la quête **n'apparaît pas** (`is_hidden` effectif) |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Liste / accepter | `!quest_board`, `!accept_quest [QST_ID]` | `!sys_quest_info [QST_ID]` | `SYS_GET_QUEST_INFO` |
