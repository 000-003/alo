# Table MLD : T_INVENTORY

## 1. Structure SQL : T_INVENTORY
Instances des objets possédés. Contient: instance_uuid, avatar_uuid, item_id, current_durability, is_equipped, slot_equipped (main_hand, armor, etc).

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).