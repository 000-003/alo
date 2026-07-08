# Entité MCD : ZONE (Zone Topographique d'Alfheim)

## 1. Définition Conceptuelle — Cardinal System / The Seed

Une **Zone** représente une unité géographique du monde d'ALfheim Online. Le monde d'ALO
est structuré autour de l'Arbre-Monde Yggdrasil, avec 9 territoires raciaux répartis
à sa base, des zones neutres, des donjons, et des étages aériens menant au sommet.

Chaque zone est **mappée à un groupe WhatsApp** : quand un joueur entre dans une zone
via `!enter_zone`, il est automatiquement ajouté au groupe WhatsApp correspondant et
retiré de son ancien groupe de localisation. C'est le mécanisme fondamental du jeu.

Les zones ont des propriétés cruciales :
- **Safe Zone** (ville, auberge) : PvP interdit, régénération accélérée
- **Field Zone** (plaines, forêts) : PvP possible, monstres errants
- **Dungeon Zone** : Instances avec monstres plus forts et meilleur loot
- **Raid Zone** : Boss spéciaux nécessitant un groupe (Party)
- **Territory Zone** : Zone conquérable par une guilde/race

La météo, le cycle jour/nuit, et les événements spéciaux modifient dynamiquement
les propriétés des zones (spawn rates, visibilité, bonus/malus élémentaires).

Les zones sont connectées entre elles par un graphe de voisinage : on ne peut entrer
que dans une zone adjacente (sauf téléportation).

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `zone_id` | VARCHAR(50) | PK, NOT NULL | Identifiant unique (ex: `SYLPH_CAPITAL_SWILVANE`) |
| `zone_name` | VARCHAR(80) | NOT NULL, UNIQUE | Nom affiché in-game |
| `zone_name_jp` | VARCHAR(80) | NULL | Nom japonais (lore) |
| `description` | TEXT | NOT NULL | Description narrative de la zone |
| `flavor_text` | TEXT | NULL | Texte d'ambiance affiché à l'entrée |

### 2.2 Classification
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `zone_type` | ENUM('capital','town','village','field','forest','mountain','desert','swamp','dungeon','raid','boss_room','sky_zone','underwater','neutral_hub') | NOT NULL | Type de zone |
| `zone_tier` | INT | NOT NULL, DEFAULT 1 | Tier de difficulté (1-10) |
| `recommended_level_min` | INT | NOT NULL, DEFAULT 1 | Niveau recommandé minimum |
| `recommended_level_max` | INT | NOT NULL, DEFAULT 100 | Niveau recommandé maximum |
| `is_safe_zone` | BOOLEAN | DEFAULT FALSE | PvP interdit, regen accélérée |
| `is_dungeon` | BOOLEAN | DEFAULT FALSE | Instance de donjon |
| `is_instanced` | BOOLEAN | DEFAULT FALSE | Instance séparée par groupe |
| `is_pvp_forced` | BOOLEAN | DEFAULT FALSE | PvP obligatoire (arène, etc.) |
| `is_accessible` | BOOLEAN | DEFAULT TRUE | Zone accessible (peut être verrouillée par quête/événement) |
| `is_hidden` | BOOLEAN | DEFAULT FALSE | Zone secrète (non visible sur la carte sans découverte) |

### 2.3 Territoire & Race
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `territory_race` | VARCHAR(20) | FK → RACE, NULL | Race souveraine (NULL si neutre) |
| `controlling_guild_uuid` | UUID | FK → GUILD, NULL | Guilde qui contrôle la zone (conquête) |
| `race_bonus_active` | BOOLEAN | DEFAULT FALSE | Bonus actif pour la race souveraine |
| `race_bonus_type` | JSON | NULL | Détail des bonus raciaux dans cette zone |

### 2.4 Connectivité (Graphe de Voisinage)
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `connected_zones` | JSON | NOT NULL | Liste des zone_id adjacentes accessibles |
| `teleport_gate` | BOOLEAN | DEFAULT FALSE | Possède une porte de téléportation |
| `teleport_destinations` | JSON | NULL | Destinations de téléportation disponibles |
| `requires_flight` | BOOLEAN | DEFAULT FALSE | Nécessite le vol pour y accéder |
| `requires_key_item` | VARCHAR(50) | FK → ITEM_DATA, NULL | Item clé requis pour entrer |
| `entry_cost_yrd` | INT | DEFAULT 0 | Coût d'entrée en Yrds |

### 2.5 Environnement
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `default_weather` | ENUM('clear','cloudy','rain','storm','snow','fog','sandstorm','volcanic_ash','magical_aura') | DEFAULT 'clear' | Météo par défaut |
| `day_night_cycle` | BOOLEAN | DEFAULT TRUE | Cycle jour/nuit actif |
| `ambient_light_level` | FLOAT | DEFAULT 1.0 | Luminosité (0.0 = noir total, 1.0 = plein jour) |
| `terrain_type` | ENUM('grass','stone','sand','water','ice','lava','void','cloud','crystal') | DEFAULT 'grass' | Type de terrain |
| `altitude_level` | INT | DEFAULT 0 | Altitude de la zone (impact sur le vol) |
| `environmental_hazard` | JSON | NULL | Dangers environnementaux (poison, lave, froid) |

### 2.6 Spawn & PNJ
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `max_monsters_active` | INT | DEFAULT 10 | Nombre max de monstres actifs simultanément |
| `respawn_interval_min` | INT | DEFAULT 300 | Intervalle de respawn minimum (secondes) |
| `has_npc_shop` | BOOLEAN | DEFAULT FALSE | Présence d'un marchand NPC |
| `has_inn` | BOOLEAN | DEFAULT FALSE | Présence d'une auberge (regen bonus) |
| `has_forge` | BOOLEAN | DEFAULT FALSE | Présence d'une forge (craft) |
| `has_quest_board` | BOOLEAN | DEFAULT FALSE | Présence d'un tableau de quêtes |

### 2.7 WhatsApp Mapping
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `wa_group_id` | VARCHAR(30) | FK → WA_GROUP, NULL | ID du groupe WhatsApp associé |
| `wa_group_name` | VARCHAR(50) | NULL | Nom du groupe WhatsApp |
| `max_players_in_zone` | INT | DEFAULT 200 | Capacité max du groupe WhatsApp |

### 2.8 Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `icon_emoji` | VARCHAR(10) | NULL | Emoji de la zone |
| `map_x` | INT | DEFAULT 0 | Coordonnée X sur la carte |
| `map_y` | INT | DEFAULT 0 | Coordonnée Y sur la carte |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de création |
| `last_event_at` | TIMESTAMP | NULL | Dernier événement dans la zone |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Zone | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Contient** | AVATAR | (0,n) | (1,1) | Une zone contient 0 à n avatars ; un avatar est dans 1 zone |
| **Appartient à** | RACE (territoire) | (0,1) | (0,n) | 1 zone appartient à 0 ou 1 race ; 1 race a 0 à n zones |
| **Contrôlée par** | GUILD | (0,1) | (0,n) | 1 zone contrôlée par 0 ou 1 guilde |
| **Héberge** | NPC | (0,n) | (1,1) | 1 zone héberge 0 à n NPC |
| **Connectée à** | ZONE (auto-ref) | (0,n) | (0,n) | Graphe de voisinage (symétrique) |
| **Mappée à** | WA_GROUP | (0,1) | (0,1) | 1 zone est mappée à 0 ou 1 groupe WA |
| **Spawn** | SPAWN_TABLE | (0,n) | (1,1) | 1 zone a 0 à n tables de spawn |
| **Météo** | WEATHER_STATE | (0,1) | (1,1) | 1 zone a 0 ou 1 état météo actif |
| **Quêtes locales** | QUEST | (0,n) | (0,n) | Relation n:n via zone de quête |