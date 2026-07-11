# Table MLD : T_COMBAT_SESSIONS

> Combat asynchrone WhatsApp. Le système verrouille l'état de l'avatar pendant le calcul des I-frames et des dégâts (persona §2.2).

## 1. Structure SQL

```sql
CREATE TABLE T_COMBAT_SESSIONS (
    session_uuid        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avatar_uuid         UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid),
    zone_id             VARCHAR(50) NOT NULL REFERENCES T_ZONES(zone_id),

    -- Adversaire
    enemy_type          VARCHAR(10) NOT NULL CHECK (enemy_type IN ('mob','player','boss')),
    enemy_id            VARCHAR(50) NOT NULL,           -- MOB_*, NPC_*, autre avatar_uuid
    enemy_name          VARCHAR(32),

    -- État du combat
    turn_number         INT NOT NULL DEFAULT 0,
    turn_state          VARCHAR(20) NOT NULL DEFAULT 'avatar_action'
                            CHECK (turn_state IN ('avatar_action','enemy_action','calculating','resolving','ended')),
    combat_log_json     JSONB NOT NULL DEFAULT '[]',       -- historique des actions

    -- Verrou anti-race (persona §2.2)
    locked_until        TIMESTAMP,
    locked_by           VARCHAR(50),                       -- UUID de la transaction/requête

    -- Deadlines
    started_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    last_action_at      TIMESTAMP NOT NULL DEFAULT NOW(),
    timeout_at          TIMESTAMP,                          -- NOW() + 5min (abandon si inactif)
    ended_at            TIMESTAMP,

    -- Résultat
    outcome             VARCHAR(10) CHECK (outcome IN ('victory','defeat','flee','timeout','draw')),
    xp_gained           INT DEFAULT 0,
    yrd_gained          INT DEFAULT 0
);

CREATE INDEX idx_combat_avatar ON T_COMBAT_SESSIONS(avatar_uuid);
CREATE INDEX idx_combat_zone ON T_COMBAT_SESSIONS(zone_id);
CREATE INDEX idx_combat_locked ON T_COMBAT_SESSIONS(locked_until) WHERE locked_until IS NOT NULL;

CREATE TABLE T_COMBAT_ACTIONS (
    action_uuid      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_uuid     UUID NOT NULL REFERENCES T_COMBAT_SESSIONS(session_uuid) ON DELETE CASCADE,
    turn_number      INT NOT NULL,
    actor            VARCHAR(10) NOT NULL CHECK (actor IN ('avatar','enemy')),
    action_type      VARCHAR(20) NOT NULL CHECK (action_type IN ('attack','skill','magic','item','defend','flee','buff')),
    skill_id         VARCHAR(30),                               -- MAG_*, OSS_*, CSM_*
    damage_dealt     INT DEFAULT 0,
    healing_done     INT DEFAULT 0,
    status_applied   VARCHAR(30),
    roll_dice        INT,                                        -- résultat du jet (1-100)
    narrative_text   TEXT,
    created_at       TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_combat_actions_session ON T_COMBAT_ACTIONS(session_uuid);
```

## 2. Indexation et Optimisation

- **Index** sur `avatar_uuid` : retrouver le combat en cours au message du joueur (clé primaire pour le bot).
- **Index partiel** sur `locked_until` : requête de nettoyage des verrous expirés (cron 30s).
- **Index** sur `T_COMBAT_ACTIONS(session_uuid)` : rejouer le log de combat pour `!combat_log`.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| C1 | **Verrou d'état** | INSERT / UPDATE sur `turn_state = 'calculating'` ⇒ `locked_until` = NOW() + 2s ; tout message entrant pour cet avatar est mis en attente jusqu'à déverrouillage (anti-race, persona §2.2) |
| C2 | **Timeout** | `timeout_at` = `started_at + 5min` ; passé ce délai, le joueur perd par abandon (outcome = 'timeout'). Un cron check périodique (30s) ferme les sessions expirées |
| C3 | **Pénalité de mort** | outcome = 'defeat' ⇒ exécute la pénalité selon `pk_karma` (T8 de `T_INVENTORY`) + décompte Remain Light (30s au sol en PvP, perte 30% Yrds portés) |
| C4 | **Anti-duplication** | `locked_by` stocke l'UUID de la transaction en cours et bloque tout second UPDATE concurrent sur la même session |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Engager / attaquer / fuir | `!kill [MOB_ID]`, `!attack [Avatar_ID]`, `!flee` | `!sys_combat_end`, `!sys_combat_set` | `SYS_INITIATE_COMBAT`, `SYS_RESOLVE_TURN` |
| Compétence / magie | `!skill [Skill_ID]`, `!magic [MAG_ID]`, `!use [Item_ID]` | — | `SYS_EXECUTE_SKILL` |
| Log / statut | `!combat_log`, `!hp`, `!mp` | `!sys_combat_state` | `SYS_GET_COMBAT_STATE` |
