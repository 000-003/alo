# Table : T_BANK_VAULTS

```sql
CREATE TABLE T_BANK_VAULTS (
    vault_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_type      VARCHAR(10) NOT NULL CHECK (owner_type IN ('avatar','guild','marriage')),
    owner_id        UUID NOT NULL,
    yrds_stored     BIGINT DEFAULT 0 CHECK (yrds_stored >= 0),
    max_slots       INT DEFAULT 50,
    items_stored    JSONB DEFAULT '[]'::jsonb,
    access_level    VARCHAR(20) DEFAULT 'owner_only',
    last_accessed   TIMESTAMP DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_bank_owner ON T_BANK_VAULTS(owner_type, owner_id);
```
