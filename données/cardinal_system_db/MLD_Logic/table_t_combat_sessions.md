# Table MLD : T_COMBAT_SESSIONS

## 1. Structure SQL : T_COMBAT_SESSIONS
Combat Asynchrone WhatsApp. Contient: session_uuid, player_uuid, enemy_id (mob ou player), combat_log_json, turn_state, locked_until_timestamp.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).