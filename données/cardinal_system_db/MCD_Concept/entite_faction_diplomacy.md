# Entité : Diplomatie entre Factions (Faction Diplomacy)

## Définition Conceptuelle
La Diplomatie régit les relations entre les 9 races d'ALfheim. L'IA Cardinal peut déclencher des guerres, des alliances ou des trêves dynamiquement.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| diplomacy_id | UUID | PK | Identifiant unique |
| race_a_id | VARCHAR(20) | FK → T_RACES, NOT NULL | Première faction |
| race_b_id | VARCHAR(20) | FK → T_RACES, NOT NULL | Seconde faction |
| status | ENUM('neutral','allied','at_war','truce','vassalized') | DEFAULT 'neutral' | État actuel |
| pk_karma_modifier | FLOAT | DEFAULT 1.0 | Modificateur de Karma PK (0 = aucune pénalité en guerre) |
| trade_tax | FLOAT | DEFAULT 0.0 | Taxe sur le commerce entre les deux races (0-50%) |
| started_at | TIMESTAMP | DEFAULT NOW() | Début de la relation |
| expires_at | TIMESTAMP | NULL | Fin prévue (NULL = permanent) |
| trigger_reason | TEXT | NULL | Raison narrative de la relation |

## Relations
- Diplomacy (1,1) → Race_A et Race_B : Relation entre exactement deux races
