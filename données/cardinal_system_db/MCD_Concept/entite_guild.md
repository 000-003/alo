# Entité MCD : GUILD (Guilde / Faction)

## 1. Définition Conceptuelle — Cardinal System / The Seed

La **Guilde** est l'organisation sociale fondamentale d'ALfheim Online. Dans ALO,
les guildes ont une importance stratégique cruciale car elles sont liées au système
de **territoire racial** : chaque race possède un territoire d'origine, et les guildes
sont les instruments de conquête et de défense de ces territoires.

Une guilde est fondée par un joueur (Leader) avec un coût en Yrds. Elle possède :
- Un **trésor commun** alimenté par les taxes et contributions
- Un **coffre de guilde** (Guild Vault) pour stocker des items partagés
- Un **système de rangs** hiérarchique (Recruit → Member → Officer → Vice-Leader → Leader)
- Une **allégeance raciale** héritée de la race du fondateur
- Des **quêtes de guilde** et des **boss de guilde** spécifiques

Le système de taxation permet au leader de fixer un pourcentage prélevé automatiquement
sur les gains des membres (0-30%). Ce système alimente le trésor de guilde utilisable
pour acheter un QG, des améliorations collectives, ou financer des raids.

Le nombre max de membres est de 50 par guilde (scalable par le GM).

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `guild_uuid` | UUID | PK, NOT NULL | Identifiant unique de la guilde |
| `guild_name` | VARCHAR(30) | UNIQUE, NOT NULL | Nom de la guilde |
| `guild_tag` | VARCHAR(5) | UNIQUE, NOT NULL | Tag court (affiché avant le nom) |
| `guild_motto` | VARCHAR(100) | NULL | Devise de la guilde |
| `guild_description` | TEXT | NULL | Description publique |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de fondation |

### 2.2 Leadership
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `leader_avatar_uuid` | UUID | FK → AVATAR, NOT NULL | Avatar du chef de guilde |
| `vice_leader_uuid` | UUID | FK → AVATAR, NULL | Avatar du vice-chef |
| `founded_by_uuid` | UUID | FK → AVATAR, NOT NULL | Avatar fondateur (historique) |

### 2.3 Membres
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `member_count` | INT | NOT NULL, DEFAULT 1 | Nombre de membres actuels |
| `max_members` | INT | NOT NULL, DEFAULT 50 | Capacité max (upgradeable) |
| `recruitment_status` | ENUM('open','invite_only','closed') | DEFAULT 'invite_only' | Mode de recrutement |
| `min_level_required` | INT | DEFAULT 1 | Niveau minimum pour postuler |

### 2.4 Allégeance & Territoire
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `race_allegiance` | VARCHAR(20) | FK → RACE, NOT NULL | Race dominante de la guilde |
| `headquarters_zone_id` | VARCHAR(50) | FK → ZONE, NULL | Zone du quartier général |
| `territory_zones` | JSON | NULL | Liste des zones contrôlées |
| `territory_count` | INT | DEFAULT 0 | Nombre de territoires contrôlés |

### 2.5 Économie
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `treasury_yrd` | BIGINT | NOT NULL, DEFAULT 0 | Yrds dans le trésor de guilde |
| `tax_rate` | FLOAT | NOT NULL, DEFAULT 0.0 | Taux de taxe sur les gains (0.0-0.30) |
| `total_yrd_collected` | BIGINT | DEFAULT 0 | Total historique des taxes collectées |
| `guild_vault_uuid` | UUID | FK → BANK_VAULT, NULL | Coffre-fort de la guilde |

### 2.6 Statistiques
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `guild_level` | INT | NOT NULL, DEFAULT 1 | Niveau de la guilde (XP collective) |
| `guild_xp` | BIGINT | NOT NULL, DEFAULT 0 | XP accumulé par la guilde |
| `total_monsters_killed` | BIGINT | DEFAULT 0 | Monstres tués par tous les membres |
| `total_bosses_killed` | INT | DEFAULT 0 | Boss tués par la guilde |
| `total_pvp_wins` | INT | DEFAULT 0 | Victoires PvP collectives |
| `total_quests_completed` | INT | DEFAULT 0 | Quêtes terminées collectivement |
| `reputation_score` | INT | DEFAULT 0 | Réputation de la guilde (-1000 à +1000) |

### 2.7 WhatsApp
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `wa_group_id` | VARCHAR(30) | NULL | ID du groupe WhatsApp de la guilde |
| `guild_icon_emoji` | VARCHAR(10) | NULL | Emoji de la guilde |

### 2.8 État
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `is_active` | BOOLEAN | DEFAULT TRUE | Guilde active ou dissoute |
| `dissolved_at` | TIMESTAMP | NULL | Date de dissolution |
| `is_at_war` | BOOLEAN | DEFAULT FALSE | En guerre contre une autre guilde |
| `alliance_guild_uuid` | UUID | FK → GUILD, NULL | Guilde alliée (alliance 1:1 simplifiée) |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Guild | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Dirigée par** | AVATAR (leader) | (1,1) | (0,1) | 1 guilde a 1 leader ; 1 avatar lead 0 ou 1 guilde |
| **Contient** | AVATAR (membres) | (0,n) | (0,1) | 1 guilde a 0 à n membres ; 1 avatar est dans 0 ou 1 guilde |
| **Alliée à** | RACE | (1,1) | (0,n) | 1 guilde a 1 allégeance ; 1 race a 0 à n guildes |
| **Basée dans** | ZONE | (0,1) | (0,n) | 1 guilde a 0 ou 1 QG ; 1 zone accueille 0 à n QG |
| **Possède** | BANK_VAULT | (0,1) | (0,1) | 1 guilde a 0 ou 1 coffre ; 1 coffre de guilde pour 1 guilde |
| **Diplomatie** | GUILD (via DIPLOMACY) | (0,n) | (0,n) | Relation n:n via T_DIPLOMACY |
| **Participe** | QUEST (raids de guilde) | (0,n) | (0,n) | Relation n:n |