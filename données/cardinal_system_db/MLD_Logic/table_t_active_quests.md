# Table MLD : T_ACTIVE_QUESTS

## 1. Structure SQL : T_ACTIVE_QUESTS
Quêtes en cours. Contient: avatar_uuid, quest_id, progress_status, accepted_at.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).