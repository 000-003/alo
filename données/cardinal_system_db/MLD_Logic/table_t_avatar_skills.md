# Table MLD : T_AVATAR_SKILLS

> Liaison N:M entre avatars et compétences. Gère l'apprentissage, la maîtrise et les plafonds passives.

## 1. Structure SQL

```sql
CREATE TABLE T_AVATAR_SKILLS (
    avatar_uuid         UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid) ON DELETE CASCADE,
    skill_id            VARCHAR(30) NOT NULL REFERENCES T_SKILLS_DICT(skill_id),

    -- Maîtrise
    mastery_rank        INT NOT NULL DEFAULT 1 CHECK (mastery_rank BETWEEN 1 AND 3),
    proficiency_exp     BIGINT NOT NULL DEFAULT 0,
    is_equipped         BOOLEAN NOT NULL DEFAULT FALSE,

    -- Apprentissage
    learned_at          TIMESTAMP NOT NULL DEFAULT NOW(),
    taught_by           VARCHAR(50),                        -- NPC_ID du SKILL_MASTER ou 'scroll' ou 'quest'
    source_type         VARCHAR(10) NOT NULL CHECK (source_type IN ('npc','quest','scroll','gm')),

    -- Plafond passives (D62)
    equipped_slot       INT,                                -- slot d'emplacement passif 1-2 par domaine

    PRIMARY KEY (avatar_uuid, skill_id),
    CONSTRAINT chk_max_equipped_passives CHECK (
        NOT (skill_id LIKE 'PAS_%' AND is_equipped = TRUE
             AND (SELECT COUNT(*) FROM T_AVATAR_SKILLS sub
                  WHERE sub.avatar_uuid = avatar_uuid
                    AND sub.skill_id LIKE 'PAS_%'
                    AND sub.is_equipped = TRUE) > 8)
    )
);

CREATE INDEX idx_avatar_skills_equipped ON T_AVATAR_SKILLS(avatar_uuid, is_equipped) WHERE is_equipped = TRUE;
CREATE INDEX idx_avatar_skills_domain ON T_AVATAR_SKILLS(avatar_uuid, skill_id);
```

## 2. Indexation et Optimisation

- **Index partiel** `idx_avatar_skills_equipped` : calcul des stats au combat — seules les compétences équipées sont chargées.
- **Index** `idx_avatar_skills_domain` : requête `!skills` par domaine (magie / OSS / passive).

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| S1 | **Apprentissage par source** | `source_type = 'npc'` ⇒ `taught_by` doit référencer un `NPC_ID` avec `role_type = 'SKILL_MASTER'` (vérifié sur `T_NPC`). `source_type = 'quest'` ⇒ `taught_by` commence par `QST_`. `source_type = 'gm'` ⇒ pas de vérification |
| S2 | **Plafond passives (D62)** | La CHECK constraint `chk_max_equipped_passives` limite à 8 passives équipées (2/domaine × 4 domaines : CBT, CRA, EXP, SOC). L'UPDATE is_equipped = TRUE est refusé si le plafond est atteint |
| S3 | **Prérequis T5** | INSERT d'un skill T5 (skill_id finissant par `_010` ou `_T5`) vérifié : `proficiency_exp` du T4 précédent ≥ seuil (5 000 pour magies, 7 500 pour OSS). Sinon refusé |
| S4 | **Maîtrise** | `mastery_rank` = 1 (appris) → 2 (maîtrisé, 10 000 EXP de compétence) → 3 (parfait, 25 000 EXP). Chaque rang débloque +5% d'efficacité |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Apprendre / équiper | `!learn_skill [Skill_ID]`, `!equip_skill [Skill_ID]` | `!sys_grant_skill [Avatar_ID] [Skill_ID]` | `SYS_GRANT_SPELL`, `SYS_GRANT_OSS`, `SYS_GRANT_PASSIVE` |
| Liste / oublier | `!skills`, `!forget_skill [Skill_ID]` | `!sys_skill_state` | `SYS_REVOKE_SKILL` |
| Maîtrise | `!skill_info [Skill_ID]` | — | `SYS_SET_SKILL_MASTERY` |
