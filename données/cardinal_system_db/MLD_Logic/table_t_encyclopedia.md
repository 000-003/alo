# Table MLD : T_ENCYCLOPEDIA_DICT + T_UNLOCKED_LORE

> Dictionnaire des connaissances du monde (bestiaire, géographie, histoire, personnages). Système de Brouillard de Guerre et Wiki dynamique.

## 1. Structure SQL

```sql
CREATE TABLE T_ENCYCLOPEDIA_DICT (
    knowledge_id        VARCHAR(100) PRIMARY KEY,
    category            VARCHAR(20) NOT NULL CHECK (category IN ('bestiary','geography','history','character','item','skill','faction','event')),
    title               VARCHAR(200) NOT NULL,
    content             TEXT NOT NULL,
    unlock_condition    VARCHAR(200),
    is_secret           BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE INDEX idx_encyclopedia_cat ON T_ENCYCLOPEDIA_DICT(category);

CREATE TABLE T_UNLOCKED_LORE (
    unlock_uuid         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    avatar_uuid         UUID NOT NULL REFERENCES T_AVATARS(avatar_uuid) ON DELETE CASCADE,
    knowledge_id        VARCHAR(100) NOT NULL REFERENCES T_ENCYCLOPEDIA_DICT(knowledge_id),
    unlocked_at         TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    discovery_method    VARCHAR(50),
    UNIQUE (avatar_uuid, knowledge_id)
);

CREATE INDEX idx_lore_avatar ON T_UNLOCKED_LORE(avatar_uuid, knowledge_id);
```

## 2. Indexation et Optimisation

- **Index** `category` : filtres `!wiki [catégorie]`.
- **Index composé** `(avatar_uuid, knowledge_id)` : vérification instantanée de déblocage.

## 3. Triggers / Procédures Stockées

| # | Contrat | Comportement |
|---|---|---|
| E1 | **Déblocage automatique** | Premier kill d'un monstre ⇒ INSERT `T_UNLOCKED_LORE` pour sa fiche bestiaire. Première entrée de zone ⇒ fiche géographie |
| E2 | **Secret caché** | `is_secret = TRUE` ⇒ ne peut être débloqué que par quête, exploration ou `PAY:` — jamais automatiquement |

## 4. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Consulter | `!wiki [sujet]` | — | `SYS_GET_WIKI_ENTRY` |
| Débloquer | — | — | `SYS_UNLOCK_LORE` |
