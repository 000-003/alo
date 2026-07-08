# Table MLD : T_UNLOCKED_LORE

## 1. Structure SQL : T_UNLOCKED_LORE
Table de liaison gérant la progression des découvertes de l'encyclopédie de chaque joueur (Système de Brouillard de Guerre et Wiki dynamique).

```sql
CREATE TABLE T_UNLOCKED_LORE (
  unlock_uuid UUID PRIMARY KEY,
  avatar_uuid UUID REFERENCES T_AVATARS(avatar_uuid) ON DELETE CASCADE,
  knowledge_id VARCHAR(100) REFERENCES T_ENCYCLOPEDIA_DICT(knowledge_id),
  unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  discovery_method VARCHAR(50) -- (ex: "Killed Boss", "Explored Zone", "Bought from Info Broker")
);
```

## 2. Indexation et Optimisation
- Index composé sur `(avatar_uuid, knowledge_id)` pour vérifier instantanément via un `UNIQUE CONSTRAINT` si le joueur possède l'information quand il tape `!wiki [Entité]`.

## 3. Triggers / Procédures Stockées
- **Event_Listener_OnKill** : Lorsqu'un joueur tue un monstre pour la première fois, un trigger insère la ligne correspondante dans cette table pour débloquer sa fiche bestiaire.
- **Event_Listener_OnZoneEnter** : Même mécanique pour la topographie de la carte.
