# Table MLD : T_ITEMS_DICT

## 1. Structure SQL : T_ITEMS_DICT
Dictionnaire des items immuables. Contient: item_id, name, type, rarity, base_atk, base_def, weight, str_req, drop_rate.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).