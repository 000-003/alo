# Table : T_TITLES

```sql
CREATE TABLE T_TITLES (
    title_id        VARCHAR(30) PRIMARY KEY,
    name            VARCHAR(50) NOT NULL,
    description     TEXT NOT NULL,
    rarity          VARCHAR(15) NOT NULL,
    stat_bonus      JSONB DEFAULT '{}'::jsonb,
    visual_effect   VARCHAR(100),
    unlock_type     VARCHAR(20) NOT NULL,
    is_permanent    BOOLEAN DEFAULT TRUE,
    max_holders     INT DEFAULT 0
);

CREATE TABLE T_PLAYER_TITLES (
    avatar_id       UUID REFERENCES T_AVATARS(avatar_id) ON DELETE CASCADE,
    title_id        VARCHAR(30) REFERENCES T_TITLES(title_id),
    is_active       BOOLEAN DEFAULT FALSE,
    earned_at       TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (avatar_id, title_id)
);

-- Contrainte : un seul titre actif par joueur
CREATE UNIQUE INDEX idx_active_title ON T_PLAYER_TITLES(avatar_id) WHERE is_active = TRUE;
```
