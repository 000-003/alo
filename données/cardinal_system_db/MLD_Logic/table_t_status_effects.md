# Table : T_STATUS_EFFECTS (Actifs sur les Avatars)

```sql
CREATE TABLE T_STATUS_EFFECTS_DICT (
    effect_id       VARCHAR(30) PRIMARY KEY,
    name            VARCHAR(50) NOT NULL,
    type            VARCHAR(10) NOT NULL CHECK (type IN ('buff','debuff','neutral')),
    stat_modified   VARCHAR(20),
    modifier_value  FLOAT NOT NULL,
    modifier_type   VARCHAR(15) NOT NULL CHECK (modifier_type IN ('flat','percent','multiplier')),
    duration_sec    INT,
    tick_damage     INT DEFAULT 0,
    tick_interval   INT DEFAULT 0,
    is_dispellable  BOOLEAN DEFAULT TRUE,
    max_stacks      INT DEFAULT 1,
    icon_emoji      VARCHAR(10)
);

CREATE TABLE T_ACTIVE_EFFECTS (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    target_type     VARCHAR(10) NOT NULL CHECK (target_type IN ('avatar','monster')),
    target_id       UUID NOT NULL,
    effect_id       VARCHAR(30) REFERENCES T_STATUS_EFFECTS_DICT(effect_id),
    source_id       UUID,
    stacks          INT DEFAULT 1,
    applied_at      TIMESTAMP DEFAULT NOW(),
    expires_at      TIMESTAMP NOT NULL
);

CREATE INDEX idx_active_effects_target ON T_ACTIVE_EFFECTS(target_id);
```
