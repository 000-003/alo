# Entité MCD : QUEST (Quête Système)

## 1. Définition Conceptuelle — Cardinal System / The Seed

Une **Quête** est une mission scénarisée assignée à un avatar par The Seed. Les quêtes
constituent le moteur narratif d'ALfheim Online et guident la progression des joueurs
à travers le monde. Le système de quêtes d'ALO est structuré en plusieurs types :

- **Main Quest** : Quêtes de l'histoire principale (arc narratif global)
- **Side Quest** : Quêtes secondaires avec lore et récompenses
- **Daily Quest** : Quêtes journalières réinitialisées chaque jour
- **Weekly Quest** : Quêtes hebdomadaires plus difficiles
- **Guild Quest** : Quêtes nécessitant la guilde entière
- **Race Quest** : Quêtes raciales spécifiques
- **Event Quest** : Quêtes d'événements temporaires
- **Hidden Quest** : Quêtes secrètes découvertes par exploration

Chaque quête suit un système d'**objectifs** (kill X monstres, récolter Y items,
parler à Z NPC, explorer une zone) avec un **journal de quête** affiché via `!quest`.

Les quêtes peuvent être **chaînées** : compléter une quête en débloque une autre.
Les quêtes de groupe nécessitent que tous les membres du party soient présents.

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `quest_id` | VARCHAR(50) | PK, NOT NULL | Identifiant unique (ex: `MQ_CHAPTER_01_SYLPH`) |
| `quest_name` | VARCHAR(100) | NOT NULL | Nom de la quête |
| `quest_name_jp` | VARCHAR(100) | NULL | Nom japonais (lore) |
| `description_short` | VARCHAR(200) | NOT NULL | Description courte (liste des quêtes) |
| `description_full` | TEXT | NOT NULL | Description narrative complète |
| `quest_giver_text` | TEXT | NULL | Dialogue du NPC qui donne la quête |
| `completion_text` | TEXT | NULL | Dialogue de complétion |

### 2.2 Classification
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `quest_type` | ENUM('main','side','daily','weekly','guild','race','event','hidden','tutorial') | NOT NULL | Type de quête |
| `quest_tier` | INT | NOT NULL, DEFAULT 1 | Tier de difficulté (1-10) |
| `required_level` | INT | NOT NULL, DEFAULT 1 | Niveau minimum pour accepter |
| `required_race` | VARCHAR(20) | FK → RACE, NULL | Race requise (NULL = universel) |
| `required_guild` | BOOLEAN | DEFAULT FALSE | Nécessite d'être dans une guilde |
| `required_party_size` | INT | DEFAULT 1 | Taille min du party requis |
| `max_party_size` | INT | DEFAULT 1 | Taille max du party autorisée |
| `is_repeatable` | BOOLEAN | DEFAULT FALSE | Peut être refaite |
| `repeat_cooldown_hours` | INT | DEFAULT 0 | Délai avant de pouvoir refaire |
| `is_shareable` | BOOLEAN | DEFAULT FALSE | Partageable avec le party |

### 2.3 Objectifs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `objectives` | JSON | NOT NULL | Liste des objectifs (structuré) |
| `objective_order` | ENUM('sequential','parallel') | DEFAULT 'parallel' | Ordre des objectifs |
| `total_steps` | INT | NOT NULL, DEFAULT 1 | Nombre d'étapes/objectifs |

> Format JSON des objectifs :
> ```json
> [
>   {"type": "kill", "target_id": "MOB_WOLF_01", "count": 5, "description": "Tuez 5 loups"},
>   {"type": "collect", "item_id": "MAT_WOLF_PELT", "count": 3, "description": "Récoltez 3 peaux"},
>   {"type": "talk_npc", "npc_id": "NPC_SMITH_01", "description": "Parlez au forgeron"}
> ]
> ```

### 2.4 Prérequis & Chaînage
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `prerequisite_quest_id` | VARCHAR(50) | FK → QUEST, NULL | Quête prérequise |
| `prerequisite_item_id` | VARCHAR(50) | FK → ITEM_DATA, NULL | Item requis pour débloquer |
| `prerequisite_achievement_id` | UUID | FK → ACHIEVEMENT, NULL | Achievement requis |
| `chain_next_quest_id` | VARCHAR(50) | FK → QUEST, NULL | Quête suivante dans la chaîne |
| `chain_position` | INT | DEFAULT 0 | Position dans la chaîne (0 = standalone) |

### 2.5 Localisation
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `quest_giver_npc_id` | VARCHAR(50) | FK → NPC, NULL | NPC qui donne la quête |
| `quest_zone_id` | VARCHAR(50) | FK → ZONE, NULL | Zone principale de la quête |
| `turn_in_npc_id` | VARCHAR(50) | FK → NPC, NULL | NPC pour rendre la quête |
| `turn_in_zone_id` | VARCHAR(50) | FK → ZONE, NULL | Zone pour rendre la quête |

### 2.6 Récompenses
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `reward_xp` | INT | NOT NULL, DEFAULT 0 | XP donnée à la complétion |
| `reward_yrd` | INT | NOT NULL, DEFAULT 0 | Yrds donnés |
| `reward_items` | JSON | NULL | Items donnés (liste d'item_id + quantité) |
| `reward_skill_id` | VARCHAR(50) | FK → SKILL, NULL | Skill débloqué |
| `reward_title_id` | UUID | FK → TITLE, NULL | Titre débloqué |
| `reward_reputation` | JSON | NULL | Réputation gagnée/perdue (faction → valeur) |
| `reward_choice` | BOOLEAN | DEFAULT FALSE | Le joueur choisit parmi les récompenses |
| `reward_options` | JSON | NULL | Options de récompense si choix |

### 2.7 Limites Temporelles
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `time_limit_minutes` | INT | DEFAULT 0 | Temps limite (0 = illimité) |
| `available_from` | TIMESTAMP | NULL | Date de début de disponibilité |
| `available_until` | TIMESTAMP | NULL | Date de fin de disponibilité |
| `daily_reset_time` | TIME | NULL | Heure de reset pour les dailies |

### 2.8 Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `icon_emoji` | VARCHAR(10) | NULL | Emoji de la quête |
| `difficulty_stars` | INT | DEFAULT 1 | Difficulté affichée (1-5 étoiles) |
| `estimated_duration_min` | INT | DEFAULT 30 | Durée estimée en minutes |
| `is_active` | BOOLEAN | DEFAULT TRUE | Quête active dans le jeu |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de création |
| `updated_at` | TIMESTAMP | NULL | Dernière modification |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Quest | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Acceptée par** | AVATAR (via T_ACTIVE_QUESTS) | (0,n) | (0,n) | Relation n:n avec progression |
| **Donnée par** | NPC | (0,1) | (0,n) | 1 quête donnée par 0 ou 1 NPC ; 1 NPC donne 0 à n quêtes |
| **Se déroule dans** | ZONE | (0,n) | (0,n) | Relation n:n |
| **Requiert** | ITEM_DATA | (0,n) | (0,n) | Items nécessaires pour les objectifs |
| **Récompense** | ITEM_DATA | (0,n) | (0,n) | Items donnés en récompense |
| **Chaînée à** | QUEST (auto-ref) | (0,1) | (0,1) | Chaînage séquentiel |
| **Débloquée par** | ACHIEVEMENT | (0,1) | (0,n) | 1 quête débloquée par 0 ou 1 achievement |
| **Implique** | MONSTER_DATA | (0,n) | (0,n) | Monstres à tuer dans les objectifs |