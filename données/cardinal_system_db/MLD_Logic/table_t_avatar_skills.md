# Table MLD : T_AVATAR_SKILLS

## 1. Structure SQL : T_AVATAR_SKILLS
Liaison N:M. Contient: avatar_uuid, skill_id, mastery_level, proficiency_exp.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).