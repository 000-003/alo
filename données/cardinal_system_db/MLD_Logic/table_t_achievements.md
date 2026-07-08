# Table : T_ACHIEVEMENTS

```sql
CREATE TABLE T_ACHIEVEMENTS_DICT (
    achievement_id  VARCHAR(30) PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    description     TEXT NOT NULL,
    category        VARCHAR(20) NOT NULL,
    condition_type  VARCHAR(50) NOT NULL,
    condition_value INT NOT NULL,
    reward_title_id VARCHAR(30) REFERENCES T_TITLES(title_id),
    reward_item_id  VARCHAR(30) REFERENCES T_ITEMS_DICT(item_id),
    reward_yrds     INT DEFAULT 0,
    reward_exp      INT DEFAULT 0,
    rarity          VARCHAR(15) NOT NULL,
    is_hidden       BOOLEAN DEFAULT FALSE
);

CREATE TABLE T_UNLOCKED_ACHIEVEMENTS (
    avatar_id       UUID REFERENCES T_AVATARS(avatar_id) ON DELETE CASCADE,
    achievement_id  VARCHAR(30) REFERENCES T_ACHIEVEMENTS_DICT(achievement_id),
    unlocked_at     TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (avatar_id, achievement_id)
);
```
