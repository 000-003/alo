# Entité MCD : MONSTER_DATA (Données de Base d'un Monstre)

## 1. Définition Conceptuelle — Cardinal System / The Seed

Le **Monster Data** est le template immuable définissant les propriétés d'un type de
monstre dans ALfheim Online. Tout comme Item Data est le blueprint d'un item,
Monster Data est le blueprint d'un mob. The Seed l'utilise pour instancier des
combats via le système de spawn.

Les monstres d'ALO suivent une classification stricte :
- **Normal** : Mob standard, apparaît en groupe, XP modérée
- **Elite** : Mob renforcé, nécessite 2-3 joueurs
- **Mini-Boss** : Mob rare avec mécanique spéciale, bon loot
- **Field Boss** : Boss de zone en monde ouvert, combat de groupe
- **Dungeon Boss** : Boss de donjon, mécanique de raid
- **World Boss** : Boss d'événement global, tout le serveur
- **Event** : Mob d'événement temporaire

Chaque monstre a des **affinités élémentaires** (faiblesses et résistances),
un **patron de comportement** (agressif, passif, territorial, nocturne),
et une **table de loot** associée qui détermine les récompenses.

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `monster_id` | VARCHAR(50) | PK, NOT NULL | Identifiant unique (ex: `MOB_WOLF_FROST_03`) |
| `monster_name` | VARCHAR(80) | NOT NULL | Nom affiché en combat |
| `monster_name_jp` | VARCHAR(80) | NULL | Nom japonais (lore) |
| `description` | TEXT | NULL | Description bestiaire |
| `lore_text` | TEXT | NULL | Texte de lore (encyclopédie) |

### 2.2 Classification
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `monster_type` | ENUM('beast','undead','demon','elemental','humanoid','dragon','insect','plant','golem','spirit','aquatic') | NOT NULL | Type biologique |
| `monster_rank` | ENUM('normal','elite','mini_boss','field_boss','dungeon_boss','world_boss','event') | NOT NULL, DEFAULT 'normal' | Rang de puissance |
| `monster_tier` | INT | NOT NULL, DEFAULT 1 | Tier de difficulté (1-10) |
| `level` | INT | NOT NULL | Niveau du monstre |
| `is_flying` | BOOLEAN | DEFAULT FALSE | Monstre volant |
| `is_aquatic` | BOOLEAN | DEFAULT FALSE | Monstre aquatique |
| `is_nocturnal` | BOOLEAN | DEFAULT FALSE | Actif uniquement la nuit |

### 2.3 Stats de Combat
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `hp_max` | INT | NOT NULL | Points de vie maximum |
| `mp_max` | INT | DEFAULT 0 | Points de mana (pour casters) |
| `atk_physical` | INT | NOT NULL | Attaque physique |
| `atk_magical` | INT | DEFAULT 0 | Attaque magique |
| `def_physical` | INT | NOT NULL | Défense physique |
| `def_magical` | INT | DEFAULT 0 | Défense magique |
| `speed` | INT | NOT NULL, DEFAULT 10 | Vitesse (détermine l'ordre de tour) |
| `accuracy` | INT | DEFAULT 80 | Précision (%) |
| `evasion` | INT | DEFAULT 5 | Esquive (%) |
| `critical_rate` | FLOAT | DEFAULT 0.05 | Taux critique (0.0-1.0) |

### 2.4 Affinités Élémentaires
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `element_type` | ENUM('none','fire','ice','wind','earth','lightning','dark','holy','water') | DEFAULT 'none' | Élément principal |
| `weakness_element` | ENUM('none','fire','ice','wind','earth','lightning','dark','holy','water') | DEFAULT 'none' | Faiblesse élémentaire (x2 dégâts) |
| `resistance_element` | ENUM('none','fire','ice','wind','earth','lightning','dark','holy','water') | DEFAULT 'none' | Résistance élémentaire (x0.5 dégâts) |
| `immunity_element` | ENUM('none','fire','ice','wind','earth','lightning','dark','holy','water') | DEFAULT 'none' | Immunité élémentaire (x0 dégâts) |

### 2.5 Comportement IA
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `behavior` | ENUM('passive','neutral','aggressive','territorial','fleeing','guardian','patrol') | NOT NULL, DEFAULT 'neutral' | Patron de comportement |
| `aggro_range` | INT | DEFAULT 5 | Distance d'aggro (cases) |
| `leash_range` | INT | DEFAULT 20 | Distance max avant reset |
| `skill_ids` | JSON | NULL | Liste des skills utilisables par le monstre |
| `skill_pattern` | JSON | NULL | Pattern d'utilisation des skills (priorités, conditions) |
| `enrage_hp_percent` | FLOAT | DEFAULT 0.0 | % HP déclenchant le mode enrage (0 = jamais) |
| `enrage_atk_multiplier` | FLOAT | DEFAULT 1.5 | Multiplicateur d'ATK en mode enrage |
| `can_call_allies` | BOOLEAN | DEFAULT FALSE | Peut appeler des alliés en combat |

### 2.6 Récompenses
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `xp_reward` | INT | NOT NULL | XP donné au vainqueur |
| `yrd_reward_min` | INT | NOT NULL, DEFAULT 0 | Yrds minimum droppés |
| `yrd_reward_max` | INT | NOT NULL, DEFAULT 0 | Yrds maximum droppés |
| `loot_table_id` | VARCHAR(50) | FK → LOOT_TABLE, NULL | Référence à la table de loot |
| `skill_xp_reward` | INT | DEFAULT 0 | XP de proficiency de skill donné |

### 2.7 Spawn
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `default_zone_ids` | JSON | NULL | Zones de spawn par défaut |
| `spawn_weight` | INT | DEFAULT 100 | Poids relatif dans la table de spawn |
| `max_simultaneous` | INT | DEFAULT 5 | Nombre max en même temps dans une zone |
| `respawn_time_seconds` | INT | DEFAULT 300 | Temps de respawn après mort |

### 2.8 Visuel & Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `icon_emoji` | VARCHAR(10) | NULL | Emoji du monstre dans WhatsApp |
| `size` | ENUM('tiny','small','medium','large','huge','colossal') | DEFAULT 'medium' | Taille du monstre |
| `is_tameable` | BOOLEAN | DEFAULT FALSE | Apprivoisable (Beast Taming) |
| `tame_difficulty` | INT | DEFAULT 0 | Difficulté d'apprivoisement (1-100) |
| `encyclopedia_id` | VARCHAR(100) | FK → ENCYCLOPEDIA, NULL | Entrée encyclopédie associée |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date d'ajout |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Monster | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Spawne dans** | ZONE (via SPAWN_TABLE) | (0,n) | (0,n) | Relation n:n via tables de spawn |
| **Drop** | ITEM_DATA (via LOOT_TABLE) | (0,n) | (0,n) | Relation n:n via tables de loot |
| **Combattu dans** | COMBAT_INSTANCE | (0,n) | (1,n) | 1 monstre est dans 0 à n combats |
| **Apprivoisable en** | PET_FAMILIAR | (0,n) | (1,1) | 1 monstre peut devenir 0 à n familiers |
| **Documenté dans** | ENCYCLOPEDIA | (0,1) | (0,n) | 1 monstre a 0 ou 1 entrée encyclopédie |
| **Utilise** | SKILL | (0,n) | (0,n) | Relation n:n via skill_ids (JSON) |