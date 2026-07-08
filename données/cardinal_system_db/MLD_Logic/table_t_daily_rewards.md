# Table : T_DAILY_REWARDS

```sql
CREATE TABLE T_DAILY_REWARDS (
    daily_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avatar_id       UUID NOT NULL REFERENCES T_AVATARS(avatar_id),
    login_date      DATE NOT NULL,
    streak_count    INT DEFAULT 1,
    reward_yrds     INT NOT NULL,
    reward_item     VARCHAR(30) REFERENCES T_ITEMS_DICT(item_id),
    reward_exp      INT DEFAULT 0,
    claimed_at      TIMESTAMP DEFAULT NOW(),
    UNIQUE(avatar_id, login_date)
);

-- Table de calendrier des récompenses par streak
CREATE TABLE T_DAILY_CALENDAR (
    day_number      INT PRIMARY KEY,
    reward_yrds     INT NOT NULL,
    reward_item     VARCHAR(30) REFERENCES T_ITEMS_DICT(item_id),
    reward_exp      INT DEFAULT 0
);

INSERT INTO T_DAILY_CALENDAR VALUES
(1, 100, NULL, 50),
(2, 150, NULL, 75),
(3, 200, NULL, 100),
(4, 300, NULL, 150),
(5, 500, NULL, 200),
(6, 750, NULL, 300),
(7, 1000, 'CSM_POT_HP_B', 500),
(14, 2500, 'CSM_POT_HP_A', 1000),
(21, 5000, 'ITEM_CRYSTAL_TELEPORT', 2000),
(28, 10000, 'ITEM_CRYSTAL_CORRIDOR', 5000),
(30, 25000, 'CSM_POT_HP_S', 10000);
```
