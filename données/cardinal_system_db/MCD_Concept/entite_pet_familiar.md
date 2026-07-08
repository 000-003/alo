# Entité : Familier (Pet / Beast Taming)

## Définition Conceptuelle
Un Familier est une créature apprivoisée par un joueur via la commande `!tame`. Les Cait Sith ont un bonus de +30% au taux de capture. Le familier combat aux côtés du joueur, peut être nourri, soigné, et ressuscité.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| pet_id | UUID | PK | Identifiant unique |
| owner_avatar_id | UUID | FK → T_AVATARS, NOT NULL | Propriétaire |
| species_id | VARCHAR(30) | FK → T_MONSTERS_DICT | Espèce de base du familier |
| nickname | VARCHAR(30) | NULL | Nom donné par le joueur (ex: Pina) |
| level | INT | DEFAULT 1 | Niveau du familier (max: niveau du joueur) |
| hp_current | INT | NOT NULL | HP actuels |
| hp_max | INT | NOT NULL | HP maximaux |
| atk | INT | NOT NULL | Force d'attaque |
| def | INT | NOT NULL | Défense |
| agi | INT | NOT NULL | Agilité |
| loyalty | INT | DEFAULT 50 | Loyauté (0-100). < 20 = fuite possible |
| hunger | INT | DEFAULT 100 | Faim (0-100). 0 = pénalité ATK -50% |
| status | ENUM('active','resting','dead','egg') | DEFAULT 'active' | État |
| is_summoned | BOOLEAN | DEFAULT FALSE | Si le familier est actuellement invoqué |
| tamed_at | TIMESTAMP | DEFAULT NOW() | Date d'apprivoisement |
| abilities | JSON | NULL | Compétences spéciales du familier |

## Relations
- Familier (1,1) → Avatar : Chaque familier a un propriétaire unique
- Familier (1,1) → Monster_Data : Chaque familier est basé sur un monstre du dictionnaire
