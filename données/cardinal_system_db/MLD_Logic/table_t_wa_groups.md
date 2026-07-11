# Table : T_WA_GROUPS (Mapping Territoire ↔ Groupe WhatsApp)

> **v2 (D76, étape 48)** : un groupe `location` porte un **TERRITOIRE** (13 — registre maître : atlas §2-bis),
> ancré par le `zone_id` de sa zone d'ancrage. La position exacte du joueur est `T_AVATARS.current_zone_id` (L1).
> Aligné sur le schéma implémenté (`schema.sql` : `avatar_uuid`, procédure `sync_player_groups()`).

```sql
CREATE TABLE T_WA_GROUPS (
    wa_group_id     VARCHAR(50) PRIMARY KEY,
    zone_id         VARCHAR(30) REFERENCES T_ZONES(zone_id),  -- zone d'ancrage du territoire (groupes 'location'), NULL sinon
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
    avatar_uuid     UUID REFERENCES T_AVATARS(avatar_uuid) ON DELETE CASCADE,
    wa_group_id     VARCHAR(50) REFERENCES T_WA_GROUPS(wa_group_id) ON DELETE CASCADE,
    joined_at       TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (avatar_uuid, wa_group_id)
);

-- Procédure : synchronisation par retrait (protocole R0/R1 v2.0)
-- Un joueur doit être dans : (a) tous les groupes permanents (community_hub — jamais
-- retirés ici), (b) le groupe du territoire correspondant à sa zone actuelle.
-- Les groupes de territoire ('location') sont mutuellement exclusifs. Idempotente :
-- sert aussi de résolution de désynchronisation (SYS_SYNC_PRESENCE).
CREATE OR REPLACE FUNCTION sync_player_groups(p_avatar_uuid UUID, p_current_zone_id VARCHAR(50)) RETURNS VOID AS $$
DECLARE
    v_territory_group VARCHAR(50);
BEGIN
    -- Groupe de territoire de la zone actuelle (résolution via zone d'ancrage / mapping territoire)
    SELECT wa_group_id INTO v_territory_group
    FROM T_WA_GROUPS
    WHERE zone_id = p_current_zone_id AND group_type = 'location'
    LIMIT 1;

    -- Retirer tous les groupes de territoire sauf celui autorisé
    DELETE FROM T_WA_PRESENCE
    WHERE avatar_uuid = p_avatar_uuid
      AND wa_group_id IN (
          SELECT wa_group_id FROM T_WA_GROUPS WHERE group_type = 'location'
      )
      AND wa_group_id IS DISTINCT FROM v_territory_group;

    -- Ajouter au groupe de territoire (si existant)
    IF v_territory_group IS NOT NULL THEN
        INSERT INTO T_WA_PRESENCE (avatar_uuid, wa_group_id)
        VALUES (p_avatar_uuid, v_territory_group)
        ON CONFLICT DO NOTHING;
    END IF;

    -- Les groupes permanents (community_hub, raciaux) et sociaux (guild_hall,
    -- private_party, housing, system) ne sont jamais retirés par cette procédure.
END;
$$ LANGUAGE plpgsql;
```

**Contrats** :
- La résolution zone → territoire vit dans l'atlas §2-bis (reflet code : `TERRITORY_ZONES`, `bot/src/services/zone-groups.js`) ; seule la **zone d'ancrage** porte une ligne `T_WA_GROUPS` de type `location` (13 lignes permanentes).
- L'écriture de `T_AVATARS.current_zone_id` (validation R3/R4 comprise) précède l'appel à `sync_player_groups()` — les deux forment une opération indivisible (protocole §3).
- L'ancienne procédure v1 `move_player_to_zone()` (un groupe par zone) est **supersédée** par ce couple écriture L1 + `sync_player_groups()`.
