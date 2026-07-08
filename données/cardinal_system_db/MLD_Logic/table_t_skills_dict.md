# Table MLD : T_SKILLS_DICT

## 1. Structure SQL : T_SKILLS_DICT
Registre Cardinal des Skills. Contient: skill_id, name, type (Magic, OSS), hit_count, mp_cost, cast_frames.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).