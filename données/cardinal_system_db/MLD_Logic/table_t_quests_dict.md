# Table MLD : T_QUESTS_DICT

## 1. Structure SQL : T_QUESTS_DICT
Générateur de Quêtes. Contient: quest_id, title, min_level, objective_json, reward_yrds, reward_item_id.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).