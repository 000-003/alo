# Table : T_TITLES

```sql
CREATE TABLE T_TITLES (
    title_id        VARCHAR(30) PRIMARY KEY,
    name            VARCHAR(50) NOT NULL,
    description     TEXT NOT NULL,
    rarity          VARCHAR(15) NOT NULL,
    stat_bonus      JSONB DEFAULT '{}'::jsonb,
    visual_effect   VARCHAR(100),
    unlock_type     VARCHAR(20) NOT NULL,
    is_permanent    BOOLEAN DEFAULT TRUE,
    max_holders     INT DEFAULT 0
);

CREATE TABLE T_PLAYER_TITLES (
    avatar_id       UUID REFERENCES T_AVATARS(avatar_id) ON DELETE CASCADE,
    title_id        VARCHAR(30) REFERENCES T_TITLES(title_id),
    is_active       BOOLEAN DEFAULT FALSE,
    earned_at       TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (avatar_id, title_id)
);

-- Contrainte : un seul titre actif par joueur
CREATE UNIQUE INDEX idx_active_title ON T_PLAYER_TITLES(avatar_id) WHERE is_active = TRUE;
```

## Titres sociaux (seed SOC-2, étape 43)

Récompenses des side-quests d'affinité les plus intimes (`unlock_type = 'quest'`).

| title_id | name | rarity | stat_bonus | unlock (quête donneuse) |
|---|---|---|---|---|
| `TITLE_FILLEUL_FONTAINE` | Filleul de la Fontaine | rare | `{}` (honorifique) | side-quest d'affinité Archipel d'Écume (Morgane `NPC_UND_11`) |
| `TITLE_GARDIEN_SILENCE` | Gardien du Silence | epic | `{}` (honorifique) | side-quest d'affinité `confidant` (Archiviste Sans Nom `NPC_PEN_06`) |

> Titres **honorifiques** (aucun bonus de stat — le prestige est narratif, cohérent avec la nature relationnelle du lot). Portés via `!titre_set` (existant). Référencés en `reward_title_id` par leurs fiches de quête SOC-2.
