# Entité : Table de Spawn (Spawn Table)

## Définition Conceptuelle
Chaque zone possède une table de spawn qui détermine quels monstres apparaissent, à quel taux, et sous quelles conditions (jour/nuit, météo). Le total des taux ne doit pas dépasser 100%.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| spawn_id | UUID | PK | Identifiant unique |
| zone_id | VARCHAR(30) | FK → T_ZONES, NOT NULL | Zone associée |
| monster_id | VARCHAR(30) | FK → T_MONSTERS_DICT, NOT NULL | Monstre qui spawn |
| spawn_rate | FLOAT | NOT NULL, CHECK(0-100) | Taux d'apparition en % |
| min_level | INT | DEFAULT 1 | Niveau min du monstre spawné |
| max_level | INT | DEFAULT 100 | Niveau max du monstre spawné |
| max_concurrent | INT | DEFAULT 5 | Nombre max simultanés dans la zone |
| time_condition | ENUM('always','day_only','night_only') | DEFAULT 'always' | Condition temporelle |
| weather_condition | ENUM('any','rain','snow','storm','fog','clear') | DEFAULT 'any' | Condition météo |
| is_boss | BOOLEAN | DEFAULT FALSE | Si TRUE, apparition unique et notifiée |
