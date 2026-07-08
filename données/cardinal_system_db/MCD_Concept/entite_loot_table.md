# Entité : Table de Loot (Loot Table)

## Définition Conceptuelle
Chaque monstre possède une table de loot définissant les items qu'il peut dropper à sa mort, avec un taux de drop individuel. Le Last Attack Bonus accorde un item supplémentaire exclusif.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| loot_id | UUID | PK | Identifiant unique |
| monster_id | VARCHAR(30) | FK → T_MONSTERS_DICT, NOT NULL | Monstre source |
| item_id | VARCHAR(30) | FK → T_ITEMS_DICT, NOT NULL | Item droppé |
| drop_rate | FLOAT | NOT NULL, CHECK(0-100) | Taux de drop en % |
| min_quantity | INT | DEFAULT 1 | Quantité min |
| max_quantity | INT | DEFAULT 1 | Quantité max |
| is_last_attack_bonus | BOOLEAN | DEFAULT FALSE | Si TRUE, uniquement pour le Last Attack |
| level_requirement | INT | DEFAULT 0 | Niveau min du joueur pour voir ce drop |
