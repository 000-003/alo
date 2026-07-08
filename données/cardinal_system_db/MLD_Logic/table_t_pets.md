# Table : T_PETS

```sql
CREATE TABLE T_PETS (
    pet_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id        UUID NOT NULL REFERENCES T_AVATARS(avatar_id) ON DELETE CASCADE,
    species_id      VARCHAR(30) NOT NULL REFERENCES T_MONSTERS_DICT(monster_id),
    nickname        VARCHAR(30),
    level           INT DEFAULT 1 CHECK (level BETWEEN 1 AND 100),
    hp_current      INT NOT NULL,
    hp_max          INT NOT NULL,
    atk             INT NOT NULL,
    def             INT NOT NULL,
    agi             INT NOT NULL,
    loyalty         INT DEFAULT 50 CHECK (loyalty BETWEEN 0 AND 100),
    hunger          INT DEFAULT 100 CHECK (hunger BETWEEN 0 AND 100),
    status          VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active','resting','dead','egg')),
    is_summoned     BOOLEAN DEFAULT FALSE,
    abilities       JSONB,
    tamed_at        TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_pet_owner ON T_PETS(owner_id);

-- Trigger : un joueur ne peut avoir qu'un seul familier invoqué à la fois
CREATE OR REPLACE FUNCTION check_single_summon() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_summoned = TRUE THEN
        UPDATE T_PETS SET is_summoned = FALSE WHERE owner_id = NEW.owner_id AND pet_id != NEW.pet_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_single_summon BEFORE UPDATE ON T_PETS
FOR EACH ROW EXECUTE FUNCTION check_single_summon();
```
