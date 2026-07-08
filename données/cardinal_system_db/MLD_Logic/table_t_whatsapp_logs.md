# Table MLD : T_WHATSAPP_LOGS

## 1. Structure SQL : T_WHATSAPP_LOGS
Tracking I/O. Contient: log_uuid, whatsapp_id, incoming_msg, bot_response, response_time_ms, created_at.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).