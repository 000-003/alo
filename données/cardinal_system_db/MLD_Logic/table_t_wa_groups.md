# Table : T_WA_GROUPS (Mapping Zone ↔ Groupe WhatsApp)

```sql
CREATE TABLE T_WA_GROUPS (
    wa_group_id     VARCHAR(50) PRIMARY KEY,
    zone_id         VARCHAR(30) REFERENCES T_ZONES(zone_id),
    group_type      VARCHAR(20) NOT NULL CHECK (group_type IN ('community_hub','location','dungeon_instance','private_party','housing','guild_hall','arena','system')),
    group_name      VARCHAR(100) NOT NULL,
    group_desc      TEXT,
    max_participants INT DEFAULT 256,
    current_count   INT DEFAULT 0,
    is_active       BOOLEAN DEFAULT TRUE,
    is_ephemeral    BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_wa_zone ON T_WA_GROUPS(zone_id);
CREATE INDEX idx_wa_type ON T_WA_GROUPS(group_type);

-- Table de présence : quel joueur est dans quel groupe
CREATE TABLE T_WA_PRESENCE (
    avatar_id       UUID REFERENCES T_AVATARS(avatar_id) ON DELETE CASCADE,
    wa_group_id     VARCHAR(50) REFERENCES T_WA_GROUPS(wa_group_id) ON DELETE CASCADE,
    joined_at       TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (avatar_id, wa_group_id)
);

-- Procédure : Protocole d'Exclusion Mutuelle des Zones
CREATE OR REPLACE FUNCTION move_player_to_zone(p_avatar_id UUID, p_new_zone_id VARCHAR) RETURNS VOID AS $$
DECLARE
    v_new_group VARCHAR(50);
    v_in_combat BOOLEAN;
BEGIN
    SELECT EXISTS(SELECT 1 FROM T_COMBAT_SESSIONS WHERE avatar_id = p_avatar_id AND status = 'active') INTO v_in_combat;
    IF v_in_combat THEN RAISE EXCEPTION 'Impossible de se déplacer en combat.'; END IF;
    
    SELECT wa_group_id INTO v_new_group FROM T_WA_GROUPS WHERE zone_id = p_new_zone_id AND group_type = 'location' LIMIT 1;
    IF v_new_group IS NULL THEN RAISE EXCEPTION 'Zone inexistante.'; END IF;
    
    -- Retirer le joueur de TOUS les groupes de type 'location'
    DELETE FROM T_WA_PRESENCE WHERE avatar_id = p_avatar_id AND wa_group_id IN (SELECT wa_group_id FROM T_WA_GROUPS WHERE group_type = 'location');
    
    -- Ajouter au nouveau groupe
    INSERT INTO T_WA_PRESENCE (avatar_id, wa_group_id) VALUES (p_avatar_id, v_new_group);
    
    -- Mettre à jour la zone du joueur
    UPDATE T_AVATARS SET current_zone_id = p_new_zone_id, updated_at = NOW() WHERE avatar_id = p_avatar_id;
END;
$$ LANGUAGE plpgsql;
```
