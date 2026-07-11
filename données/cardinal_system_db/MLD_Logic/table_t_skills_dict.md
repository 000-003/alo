# Table MLD : T_SKILLS_DICT

> Registre Cardinal des Skills. Référence pour les magies (MAG), techniques d'OSS (OSS) et passives (PAS).

## 1. Structure SQL

```sql
CREATE TABLE T_SKILLS_DICT (
    skill_id            VARCHAR(30) PRIMARY KEY,
    name                VARCHAR(100) NOT NULL,
    skill_type          VARCHAR(3) NOT NULL CHECK (skill_type IN ('MAG','OSS','PAS')),
    domain              VARCHAR(3) NOT NULL CHECK (domain IN ('CBT','CRA','EXP','SOC')),
    tier                INT NOT NULL DEFAULT 1 CHECK (tier BETWEEN 1 AND 5),
    hit_count           INT DEFAULT 1,
    mp_cost             INT DEFAULT 0,
    cast_frames         INT DEFAULT 30,
    cooldown_sec        INT DEFAULT 0,
    base_damage         INT DEFAULT 0,
    base_healing        INT DEFAULT 0,
    stat_scaling        VARCHAR(20),
    description         TEXT,
    unlock_requirement  VARCHAR(200),
    max_mastery         INT NOT NULL DEFAULT 3 CHECK (max_mastery BETWEEN 1 AND 3),
    is_equippable       BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_skills_type ON T_SKILLS_DICT(skill_type);
CREATE INDEX idx_skills_domain ON T_SKILLS_DICT(domain);
CREATE INDEX idx_skills_tier ON T_SKILLS_DICT(tier);
```

## 2. Indexation et Optimisation

- **Index** `skill_type` : filtrage Magie / OSS / Passive dans `!skills`.
- **Index** `domain` : 4 domaines D62 pour le plafond de passives.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| S1 | **Tier cohérent** | T1-T3 disponibles PNJ / quête ; T4 = maîtrise préalable + quest ; T5 = craft-titre exclusif |
| S2 | **Passive domain** | `skill_type = 'PAS'` ⇒ domain obligatoire et `mp_cost = 0`, `cast_frames = 0` |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Info skill | `!skill_info [Skill_ID]` | `!sys_skill_info [Skill_ID]` | `SYS_GET_SKILL_INFO` |
