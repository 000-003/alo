# Table MLD : T_ZONES

## 1. Structure SQL : T_ZONES
Map d'ALO. Contient: zone_id, zone_name, territory_race, is_safe_zone, weather_state, connected_zones (JSON).

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).