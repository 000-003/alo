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

## Coffre conjugal (`owner_type='marriage'`, D-SOC-8)

- `owner_id` = `T_MARRIAGES.marriage_uuid` ; créé à l'activation du mariage (M4).
- `max_slots` **doublé** vs le coffre personnel (« inventaire commun donc doublé », PE) ; `access_level='all_members'` restreint aux deux conjoints.
- Le **solde** `yrds_stored` est le « solde commun » dépensable par les deux (`!joint_pay`).
- La **provenance** des dépôts n'est pas stockée ici mais dans `T_MARRIAGE_ASSETS` : c'est elle qui permet, au divorce, que « chacun reparte avec ce qu'il a apporté » (M5). Ce coffre est vidé puis clos à la séparation.
