# Table MLD : T_WHATSAPP_LOGS

> Tracking I/O complet — obligatoire pour déboguer le bot, détecter les schémas d'attaque et auditer les réponses de l'IA.

## 1. Structure SQL

```sql
CREATE TABLE T_WHATSAPP_LOGS (
    log_uuid            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    whatsapp_phone      VARCHAR(20) NOT NULL,
    wa_group_id         VARCHAR(50),                            -- groupe WhatsApp d'origine
    avatar_uuid         UUID REFERENCES T_AVATARS(avatar_uuid),

    -- Message entrant
    incoming_msg        TEXT NOT NULL,
    incoming_msg_type   VARCHAR(20) DEFAULT 'text'
                            CHECK (incoming_msg_type IN ('text','command','image','audio','location','system')),
    received_at         TIMESTAMP NOT NULL DEFAULT NOW(),

    -- Traitement
    intent_classified   VARCHAR(30),                            -- 'combat','movement','shop','social','admin',...
    confidence_score    DECIMAL(3,2),                           -- score de classification 0.00-1.00

    -- Réponse
    bot_response        TEXT,
    response_type       VARCHAR(20)                             -- 'narrative','combat_result','error','system','gm_reply'
                            CHECK (response_type IN ('narrative','combat_result','error','system','gm_reply','ai_action')),
    response_time_ms    INT,                                    -- temps de génération de la réponse
    model_used          VARCHAR(30),                            -- 'puter','keyless','whitelist'

    -- Métriques
    tokens_in           INT DEFAULT 0,
    tokens_out          INT DEFAULT 0,
    api_call_success    BOOLEAN DEFAULT TRUE,
    error_message       TEXT,

    created_at          TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_whatsapp_logs_phone ON T_WHATSAPP_LOGS(whatsapp_phone, created_at DESC);
CREATE INDEX idx_whatsapp_logs_group ON T_WHATSAPP_LOGS(wa_group_id, created_at DESC);
CREATE INDEX idx_whatsapp_logs_intent ON T_WHATSAPP_LOGS(intent_classified);
CREATE INDEX idx_whatsapp_logs_errors ON T_WHATSAPP_LOGS(created_at) WHERE api_call_success = FALSE;

CREATE TABLE T_WHATSAPP_SESSIONS (
    session_uuid        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    whatsapp_phone      VARCHAR(20) NOT NULL UNIQUE,
    avatar_uuid         UUID REFERENCES T_AVATARS(avatar_uuid),
    current_group_id    VARCHAR(50),
    state               VARCHAR(20) NOT NULL DEFAULT 'idle'
                            CHECK (state IN ('idle','in_combat','in_shop','in_dialog','travelling','respawning','gm_mode')),
    state_expires_at    TIMESTAMP,
    last_message_at     TIMESTAMP NOT NULL DEFAULT NOW(),
    message_count_hour  INT DEFAULT 0,
    is_throttled        BOOLEAN DEFAULT FALSE,
    throttle_until      TIMESTAMP,
    created_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_whatsapp_sessions_phone ON T_WHATSAPP_SESSIONS(whatsapp_phone);
CREATE INDEX idx_whatsapp_sessions_state ON T_WHATSAPP_SESSIONS(state);
CREATE INDEX idx_whatsapp_sessions_throttle ON T_WHATSAPP_SESSIONS(throttle_until)
    WHERE is_throttled = TRUE;
```

## 2. Indexation et Optimisation

- **Index cluster** sur `(wa_group_id, created_at DESC)` : rejouer l'historique d'un groupe (audit, restauration narrative).
- **Index partiel** sur les erreurs : alertes ops (cron 1 min).
- **Index** sur `intent_classified` : statistiques d'usage (quel taux de commandes vs narration ?).

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| W1 | **Rate limiting** | À chaque INSERT `T_WHATSAPP_LOGS` pour un phone : `message_count_hour` = count des messages des 60 dernières minutes. Si > 60/h ⇒ `is_throttled = TRUE`, `throttle_until = NOW() + 5min`, réponse « Vous envoyez des messages trop vite. » |
| W2 | **Nettoyage** | Cron quotidien : DELETE logs de plus de 90 jours (sauf les logs d'erreur, conservés 1 an) |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Audit | — | `!sys_logs [phone] [nb]`, `!sys_logs_group [group_id]` | `SYS_QUERY_LOGS` |
| Session | — | `!sys_session_kill [phone]` (forcer un changement d'état) | `SYS_SET_SESSION_STATE` |
| Stats | — | `!sys_usage_stats` | — |
