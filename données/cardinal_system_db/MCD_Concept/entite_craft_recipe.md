# Entité : Recette d'Artisanat (Craft Recipe)

## Définition Conceptuelle
Une Recette est un schéma de fabrication permettant de transformer des matériaux bruts en items équipables, consommables ou décoratifs. Les recettes sont associées à un métier (Forge, Alchimie, Couture) et nécessitent un niveau de maîtrise minimum.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| recipe_id | VARCHAR(30) | PK | Ex: `REC_FORGE_MITHRIL_SWORD` |
| name | VARCHAR(100) | NOT NULL | Nom de la recette |
| craft_type | ENUM('forge','alchemy','sewing','cooking','enchanting') | NOT NULL | Métier requis |
| skill_level_required | ENUM('beginner','intermediate','advanced','expert','master') | NOT NULL | Rang de maîtrise minimum |
| ingredients | JSON | NOT NULL | Liste [{item_id, quantity}] |
| result_item_id | VARCHAR(30) | FK → T_ITEMS_DICT | Item produit |
| result_quantity | INT | DEFAULT 1 | Quantité produite |
| success_rate_base | FLOAT | DEFAULT 0.8 | Taux de réussite de base (modifié par DEX) |
| craft_time_seconds | INT | DEFAULT 10 | Temps de fabrication |
| yrd_cost | INT | DEFAULT 0 | Coût en Yrds (frais de forge, etc.) |
| unlock_condition | VARCHAR(200) | NULL | Comment débloquer la recette (quête, PNJ, drop) |

## Relations
- Recette (1,1) → Item_Data (résultat) : Produit exactement un type d'item
- Recette (1,n) → Item_Data (ingrédients) : Nécessite 1 à n matériaux
