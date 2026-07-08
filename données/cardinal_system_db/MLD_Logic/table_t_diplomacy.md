# Table : T_DIPLOMACY

```sql
CREATE TABLE T_DIPLOMACY (
    diplomacy_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    race_a_id       VARCHAR(20) NOT NULL REFERENCES T_RACES(race_id),
    race_b_id       VARCHAR(20) NOT NULL REFERENCES T_RACES(race_id),
    status          VARCHAR(20) DEFAULT 'neutral' CHECK (status IN ('neutral','allied','at_war','truce','vassalized')),
    pk_karma_mod    FLOAT DEFAULT 1.0,
    trade_tax       FLOAT DEFAULT 0.0 CHECK (trade_tax BETWEEN 0 AND 0.5),
    started_at      TIMESTAMP DEFAULT NOW(),
    expires_at      TIMESTAMP,
    trigger_reason  TEXT,
    UNIQUE(race_a_id, race_b_id)
);
```
