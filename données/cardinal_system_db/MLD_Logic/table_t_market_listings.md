# Table MLD : T_MARKET_LISTINGS

## 1. Structure SQL : T_MARKET_LISTINGS
Hôtel des Ventes (Trade). Contient: listing_uuid, seller_uuid, instance_uuid, price_yrd, listed_at, status (active, sold).

## 2. Indexation et Optimisation
Index critiques pour garantir la scalabilité lors des requêtes asynchrones depuis WhatsApp.

## 3. Triggers / Procédures Stockées
Mécaniques backend de contrôle d'intégrité (Anti-cheat, anti-duplication).