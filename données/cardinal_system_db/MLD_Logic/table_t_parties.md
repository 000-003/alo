# Table : T_PARTIES & T_PARTY_MEMBERS

```sql
CREATE TABLE T_PARTIES (
    party_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    leader_id       UUID NOT NULL REFERENCES T_AVATARS(avatar_id),
    name            VARCHAR(50),
    max_members     INT DEFAULT 7,
    status          VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active','disbanded')),
    shared_exp      BOOLEAN DEFAULT TRUE,
    loot_rule       VARCHAR(20) DEFAULT 'round_robin',
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE TABLE T_PARTY_MEMBERS (
    party_id        UUID REFERENCES T_PARTIES(party_id) ON DELETE CASCADE,
    avatar_id       UUID REFERENCES T_AVATARS(avatar_id) ON DELETE CASCADE,
    joined_at       TIMESTAMP DEFAULT NOW(),
    role            VARCHAR(20) DEFAULT 'member',
    PRIMARY KEY (party_id, avatar_id)
);

CREATE INDEX idx_party_leader ON T_PARTIES(leader_id);
CREATE INDEX idx_party_member ON T_PARTY_MEMBERS(avatar_id);
```
