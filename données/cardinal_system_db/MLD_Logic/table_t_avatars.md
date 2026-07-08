# Table : T_AVATARS

```sql
CREATE TABLE T_AVATARS (
    avatar_uuid             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    whatsapp_phone          VARCHAR(20) UNIQUE NOT NULL,
    avatar_name             VARCHAR(32) UNIQUE NOT NULL,
    created_at              TIMESTAMP NOT NULL DEFAULT NOW(),
    last_login_at           TIMESTAMP,
    
    -- Race & Apparence
    race_id                 VARCHAR(20) NOT NULL REFERENCES T_RACES(race_id),
    gender                  VARCHAR(10) NOT NULL CHECK (gender IN ('male','female','neutral')),
    wing_color              VARCHAR(7) DEFAULT '#FFFFFF',
    appearance_data         JSONB,
    
    -- Stats Primaires
    level                   INT NOT NULL DEFAULT 1 CHECK (level BETWEEN 1 AND 100),
    current_xp              BIGINT NOT NULL DEFAULT 0,
    total_xp                BIGINT NOT NULL DEFAULT 0,
    
    -- HP / MP / Stamina
    hp_current              INT NOT NULL,
    hp_max                  INT NOT NULL,
    mp_current              INT NOT NULL,
    mp_max                  INT NOT NULL,
    stamina_current         INT NOT NULL DEFAULT 100,
    stamina_max             INT NOT NULL DEFAULT 100,
    
    -- Stats de Combat
    stat_str                INT NOT NULL DEFAULT 1,
    stat_agi                INT NOT NULL DEFAULT 1,
    stat_vit                INT NOT NULL DEFAULT 1,
    stat_int                INT NOT NULL DEFAULT 1,
    stat_dex                INT NOT NULL DEFAULT 1,
    stat_luk                INT NOT NULL DEFAULT 1,
    stat_points_available   INT NOT NULL DEFAULT 0,
    
    -- Économie
    yrd_balance             BIGINT NOT NULL DEFAULT 100,
    total_yrd_earned        BIGINT NOT NULL DEFAULT 0,
    total_yrd_spent         BIGINT NOT NULL DEFAULT 0,
    
    -- Positionnement
    current_zone_id         VARCHAR(50) NOT NULL REFERENCES T_ZONES(zone_id),
    current_wa_group_id     VARCHAR(50),
    is_flying               BOOLEAN DEFAULT FALSE,
    flight_altitude         INT DEFAULT 0,
    
    -- PvP & Karma
    pk_karma                INT NOT NULL DEFAULT 0,
    pk_kills                INT NOT NULL DEFAULT 0,
    pk_deaths               INT NOT NULL DEFAULT 0,
    player_status           VARCHAR(10) DEFAULT 'green' CHECK (player_status IN ('green','orange','red')),
    pvp_enabled             BOOLEAN DEFAULT FALSE,
    
    -- État Vital
    is_alive                BOOLEAN NOT NULL DEFAULT TRUE,
    is_remain_light         BOOLEAN DEFAULT FALSE,
    remain_light_expires_at TIMESTAMP,
    is_in_combat            BOOLEAN DEFAULT FALSE,
    is_resting              BOOLEAN DEFAULT FALSE,
    is_banned               BOOLEAN DEFAULT FALSE,
    ban_reason              TEXT,
    
    -- Guilde
    guild_uuid              UUID,
    guild_rank              VARCHAR(20),
    guild_joined_at         TIMESTAMP,
    
    -- Équipement Actif (Slots)
    equip_main_hand         UUID,
    equip_off_hand          UUID,
    equip_head              UUID,
    equip_torso             UUID,
    equip_arms              UUID,
    equip_waist             UUID,
    equip_legs              UUID,
    equip_accessory_1       UUID,
    equip_accessory_2       UUID,
    
    -- Titre & Cosmétique
    active_title_id         VARCHAR(30),
    bio_text                VARCHAR(200)
);

CREATE INDEX idx_avatars_whatsapp ON T_AVATARS(whatsapp_phone);
CREATE INDEX idx_avatars_zone ON T_AVATARS(current_zone_id);
CREATE INDEX idx_avatars_group ON T_AVATARS(current_wa_group_id);
CREATE INDEX idx_avatars_guild ON T_AVATARS(guild_uuid);
```