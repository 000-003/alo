# Entité : Race Jouable (Fairy Race)

## Définition Conceptuelle
Dans l'architecture du Système Cardinal, une Race est le type biologique immuable choisi par le joueur lors de la commande `!link_start`. La race détermine les bonus/malus statistiques, l'affinité élémentaire, les compétences raciales innées, la capitale de départ, et les relations diplomatiques de base avec les autres races.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| race_id | VARCHAR(20) | PK, NOT NULL | Ex: `RACE_SYLPH`, `RACE_SALAMANDER` |
| name | VARCHAR(50) | UNIQUE, NOT NULL | Nom affiché (ex: Sylphe, Salamandre) |
| element_affinity | ENUM | NOT NULL | Élément principal (Feu, Eau, Vent, Terre, Lumière, Ténèbres, Foudre, Glace, Neutre) |
| bonus_hp | INT | DEFAULT 0 | Bonus/Malus HP de base |
| bonus_mp | INT | DEFAULT 0 | Bonus/Malus MP de base |
| bonus_str | INT | DEFAULT 0 | Modificateur STR racial |
| bonus_agi | INT | DEFAULT 0 | Modificateur AGI racial |
| bonus_vit | INT | DEFAULT 0 | Modificateur VIT racial |
| bonus_int | INT | DEFAULT 0 | Modificateur INT racial |
| bonus_dex | INT | DEFAULT 0 | Modificateur DEX racial |
| flight_modifier | FLOAT | DEFAULT 1.0 | Multiplicateur de vitesse/durée de vol |
| racial_passive | VARCHAR(100) | NOT NULL | Compétence passive innée (ex: Vision Nocturne) |
| racial_weakness | VARCHAR(200) | NULL | Faiblesse narrative (ex: Vol impossible de nuit) |
| capital_zone_id | VARCHAR(30) | FK → T_ZONES | Zone de départ |
| lore_description | TEXT | NOT NULL | Description narrative de la race |

## Relations (Cardinalité Merise)
- Race (1,1) → Zone (capitale) : Chaque race a exactement une capitale
- Race (0,n) → Avatar : Une race peut avoir de 0 à n joueurs
- Race (0,n) → Diplomacy : Une race participe à 0 ou plusieurs relations diplomatiques
