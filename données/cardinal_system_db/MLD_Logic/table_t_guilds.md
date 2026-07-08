# Table MLD : T_GUILDS

## 1. Structure SQL : T_GUILDS
Table des guildes/lords. Contient: guild_uuid, guild_name, leader_avatar_uuid, treasury_yrds, tax_rate, race_allegiance.

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).