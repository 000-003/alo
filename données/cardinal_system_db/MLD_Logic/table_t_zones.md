# Table MLD : T_ZONES

> Registre des zones de la map d'ALO. Source de vérité du graphe de navigation.

## 1. Structure SQL

```sql
CREATE TABLE T_ZONES (
    zone_id             VARCHAR(50) PRIMARY KEY,
    zone_name           VARCHAR(100) NOT NULL,
    zone_type           VARCHAR(10) NOT NULL CHECK (zone_type IN ('CAP','TWN','HUNT','DUN','RAID','ROUTE','FLD','TOP','HUB','FLR')),
    territory_race      VARCHAR(20) REFERENCES T_RACES(race_id),
    is_safe_zone        BOOLEAN NOT NULL DEFAULT FALSE,
    is_pvp_zone         BOOLEAN NOT NULL DEFAULT FALSE,
    min_level           INT DEFAULT 1,
    max_level           INT DEFAULT 100,
    flight_allowed      BOOLEAN DEFAULT TRUE,
    weather_enabled     BOOLEAN DEFAULT TRUE,
    connected_zones     JSONB DEFAULT '[]'::jsonb,
    description         TEXT
);

CREATE INDEX idx_zones_type ON T_ZONES(zone_type);
CREATE INDEX idx_zones_race ON T_ZONES(territory_race);
CREATE INDEX idx_zones_level ON T_ZONES(min_level, max_level);
```

## 2. Indexation et Optimisation

- **Index** `zone_type` : requêtes de `!map` / `!where`.
- **Index** `territory_race` : territorialité des races (`!guild_info`, bonus territoriaux).
- **Index** `(min_level, max_level)` : filtre zones adaptées au niveau.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| Z1 | **Safe zone** | `is_safe_zone = TRUE` ⇒ `is_pvp_zone = FALSE`, combat et PvP interdits |
| Z2 | **Zone_type cohérent** | `CAP` / `TWN` = safe zones ; `HUNT` / `DUN` / `FLD` = PvP possible ; `ROUTE` = vol obligatoire ; `RAID` = boss uniquement |
| Z3 | **Connected zones sync** | Tout INSERT/UPDATE/DELETE sur `T_ZONE_LINKS` régénère `connected_zones` des zones concernées (trigger T5 de T_ZONE_LINKS) |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Info zone | `!where`, `!map` | `!sys_zone_info [Zone_ID]` | `SYS_GET_ZONE_INFO`, `SYS_REVEAL_MAP` |
| Verrouillage | — | `!sys_zone_lock [Zone_ID]` | `SYS_LOCK_ZONE` |
