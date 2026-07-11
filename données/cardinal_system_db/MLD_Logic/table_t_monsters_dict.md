# Table MLD : T_MONSTERS_DICT

> Registre du bestiaire The Seed. Source de vérité des fiches `personnages_bestiaire/mobs/`.

## 1. Structure SQL

```sql
CREATE TABLE T_MONSTERS_DICT (
    monster_id          VARCHAR(30) PRIMARY KEY,
    name                VARCHAR(100) NOT NULL,
    level               INT NOT NULL CHECK (level BETWEEN 1 AND 100),
    family              VARCHAR(50),
    base_hp             INT NOT NULL,
    base_mp             INT DEFAULT 0,
    base_atk            INT NOT NULL,
    base_def            INT NOT NULL,
    base_agi            INT DEFAULT 10,
    element             VARCHAR(20),
    weakness            VARCHAR(100),
    resistance          VARCHAR(100),
    immune              VARCHAR(100),
    exp_yield           INT NOT NULL DEFAULT 0,
    bounty_yrds         INT NOT NULL DEFAULT 0,
    is_boss             BOOLEAN DEFAULT FALSE,
    is_flying           BOOLEAN DEFAULT FALSE,
    aggression_range    INT DEFAULT 10,
    spawn_behavior      VARCHAR(50) DEFAULT 'passive',
    lore_text           TEXT
);

CREATE INDEX idx_monsters_level ON T_MONSTERS_DICT(level);
CREATE INDEX idx_monsters_family ON T_MONSTERS_DICT(family);
CREATE INDEX idx_monsters_boss ON T_MONSTERS_DICT(is_boss) WHERE is_boss = TRUE;
CREATE INDEX idx_monsters_element ON T_MONSTERS_DICT(element);
```

## 2. Indexation et Optimisation

- **Index** sur `level` : filtre de zone de chasse (`!hunt`).
- **Index partiel** `boss` : réservation de raid / spawn programmé.
- **Index** sur `element` : faiblesses élémentaires (calcul de dégâts).

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| M1 | **EXP/Yrds cohérents** | `exp_yield` = `level` × 15-25 (formule balance sheet v2.0). `bounty_yrds` = `level` × 2-5 |
| M2 | **Boss tag** | `is_boss = TRUE` ⇒ `aggression_range >= 20`, `exp_yield` ×10 |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Info mob | `!mob_info [MOB_ID]` | `!sys_mob_info [MOB_ID]` | `SYS_GET_MOB_INFO` |
