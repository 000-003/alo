# Table : T_SPAWN_TABLES

```sql
CREATE TABLE T_SPAWN_TABLES (
    spawn_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    zone_id         VARCHAR(30) NOT NULL REFERENCES T_ZONES(zone_id),
    monster_id      VARCHAR(30) NOT NULL REFERENCES T_MONSTERS_DICT(monster_id),
    spawn_rate      FLOAT NOT NULL CHECK (spawn_rate BETWEEN 0 AND 100),
    min_level       INT DEFAULT 1,
    max_level       INT DEFAULT 100,
    max_concurrent  INT DEFAULT 5,
    time_condition  VARCHAR(15) DEFAULT 'always',
    weather_cond    VARCHAR(15) DEFAULT 'any',
    is_boss         BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_spawn_zone ON T_SPAWN_TABLES(zone_id);

-- Contrainte : le total des spawn_rate par zone ne doit pas dépasser 100
-- (Vérifiée au niveau applicatif par le contrôleur Node.js)
```

## Variant de créature commune (D79)

Le pattern P5 (variant de créature, cf. `directives_generation/23_etude_patterns_rarete_drop.md`) **n'ajoute aucune ligne à cette table**. Un Variant est une promotion résolue par L1 **au moment de l'instanciation** d'un mob depuis une ligne existante (`is_boss = FALSE`) — roll 5% par défaut (`SYS_SET_VARIANT_RATE`/`!sys_variant_rate`), stats de la fiche mob multipliées, loot existant garanti. `monster_id`, `spawn_rate` et le budget ≤100% par zone restent exactement ceux déjà écrits ici. La persistance de l'état « Variant actif » pour la durée du combat est un détail d'implémentation (table d'instance runtime, hors `T_SPAWN_TABLES`) — périmètre `bot/` (P3).
