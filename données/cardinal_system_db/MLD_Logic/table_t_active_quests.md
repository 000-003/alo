# Table MLD : T_ACTIVE_QUESTS

> Quêtes en cours par avatar. Chaque joueur peut avoir jusqu'à 10 quêtes actives simultanément (5 quêtes de localité + 3 daily + 2 T5/légendaire). Les quêtes terminées sont historisées.

## 1. Structure SQL

```sql
CREATE TABLE T_ACTIVE_QUESTS (
    avatar_uuid         UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid) ON DELETE CASCADE,
    quest_id            VARCHAR(50) NOT NULL REFERENCES T_QUESTS_DICT(quest_id),

    -- Progression
    current_step        INT NOT NULL DEFAULT 1,
    progress_status     VARCHAR(20) NOT NULL DEFAULT 'in_progress'
                            CHECK (progress_status IN ('in_progress','completed','failed','abandoned')),
    progress_data       JSONB DEFAULT '{}',      -- contexte variable (ex: « 3/5 loups tués »)

    -- Chronologie
    accepted_at         TIMESTAMP NOT NULL DEFAULT NOW(),
    completed_at        TIMESTAMP,
    deadline_at         TIMESTAMP,               -- NULL pour les quêtes sans timer

    -- Récompenses
    xp_reward           INT,
    yrd_reward          INT,
    item_reward         JSONB,                   -- [{"item_id": "...", "qty": N}, ...]

    PRIMARY KEY (avatar_uuid, quest_id)
);

CREATE INDEX idx_active_quests_status ON T_ACTIVE_QUESTS(avatar_uuid, progress_status);

CREATE TABLE T_QUEST_HISTORY (
    history_uuid        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avatar_uuid         UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid),
    quest_id            VARCHAR(50) NOT NULL,
    progress_status     VARCHAR(20) NOT NULL,
    completed_at        TIMESTAMP NOT NULL DEFAULT NOW(),
    xp_earned           INT NOT NULL DEFAULT 0,
    yrd_earned          INT NOT NULL DEFAULT 0,
    items_earned        JSONB
);

CREATE INDEX idx_quest_history_avatar ON T_QUEST_HISTORY(avatar_uuid, completed_at DESC);
```

## 2. Indexation et Optimisation

- **Index** `idx_active_quests_status` : rendre les quêtes actives d'un joueur en une requête (`!quetes`).
- **Index** `idx_quest_history_avatar` : historique des quêtes accomplies (statut RP, statistiques).

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| Q1 | **Plafond** | INSERT refusé si l'avatar a déjà 10 quêtes actives (`progress_status = 'in_progress'`) |
| Q2 | **Progression** | UPDATE `current_step` ⇒ `progress_data` mis à jour ; si `current_step` ≥ étapes totales (lecture sur `T_QUESTS_DICT`) ⇒ auto-complétion : `progress_status = 'completed'`, récompenses distribuées (`SYS_GRANT_ITEM` pour les items, credit XP/Yrds), écriture dans `T_QUEST_HISTORY` |
| Q3 | **Deadline** | Les quêtes daily expirent à la maintenance du lendemain 6h UTC (cron) ⇒ `progress_status = 'failed'` |
| Q4 | **Lock de quête T5** | Les quêtes T5 (`QST_T5_*`) ne peuvent être acceptées que si le prérequis skill T4 est maîtrisé (vérification sur `T_AVATAR_SKILLS.proficiency_exp`). Les légendaires (`QST_LEG_*`) vérifient les prérequis de quête via `T_QUEST_HISTORY` |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Accepter / lister | `!quetes`, `!accept_quest [QST_ID]` | `!sys_quest_grant [Avatar_ID] [QST_ID]` | `SYS_GRANT_QUEST` |
| Suivi / abandon | `!quest_info [QST_ID]`, `!abandon_quest [QST_ID]` | `!sys_quest_set [QST_ID] [Step]` | `SYS_SET_QUEST_STEP` |
| Terminer | (auto par trigger Q2) | `!sys_quest_complete [QST_ID]` | `SYS_COMPLETE_QUEST` |
