# Entité : Haut-Fait (Achievement)

## Définition Conceptuelle
Un Achievement est une récompense débloquée par l'accomplissement d'un exploit spécifique. Les achievements sont permanents et confèrent des titres, des bonus passifs ou des items cosmétiques.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| achievement_id | VARCHAR(30) | PK | Ex: `ACH_FIRST_BOSS`, `ACH_MASTER_FORGE` |
| name | VARCHAR(100) | NOT NULL | Nom du haut-fait |
| description | TEXT | NOT NULL | Description de la condition de déblocage |
| category | ENUM('combat','exploration','social','craft','quest','legendary') | NOT NULL | Catégorie |
| condition_type | VARCHAR(50) | NOT NULL | Type de condition (kill_count, level_reached, zone_discovered, etc.) |
| condition_value | INT | NOT NULL | Valeur cible (ex: tuer 100 mobs, atteindre Lv.50) |
| reward_title_id | VARCHAR(30) | FK → T_TITLES, NULL | Titre débloqué |
| reward_item_id | VARCHAR(30) | FK → T_ITEMS_DICT, NULL | Item récompense |
| reward_yrds | INT | DEFAULT 0 | Yrds de récompense |
| reward_exp | INT | DEFAULT 0 | EXP bonus |
| rarity | ENUM('bronze','silver','gold','platinum','legendary') | NOT NULL | Rareté du haut-fait |
| is_hidden | BOOLEAN | DEFAULT FALSE | Si TRUE, invisible tant que non débloqué |

## Relations
- Achievement (0,n) → Avatar : Un achievement peut être débloqué par 0 à n joueurs
