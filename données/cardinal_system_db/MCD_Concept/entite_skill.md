# Entité MCD : SKILL / Original Sword Skill (OSS)

## 1. Définition Conceptuelle — Cardinal System / The Seed

Un **Skill** dans ALfheim Online représente une compétence que l'avatar peut apprendre
et maîtriser. Contrairement à SAO où les Sword Skills étaient prédominantes, ALO propose
un système hybride mêlant :

- **Sword Skills** (combat physique) — héritage du système Aincrad
- **Magie** (9 écoles raciales) — chaque race a sa spécialité magique
- **Skills passifs** — augmentations permanentes (Night Vision, Detection, Sprint)
- **Skills de craft** — Forgeron, Alchimiste, Cuisinier, Tailleur
- **Skills de support** — Chant, Premiers soins, Beast Taming
- **Unique Skills** — Compétences uniques (1 par serveur, événements spéciaux)

Le système de proficiency (maîtrise) est basé sur l'utilisation : plus on utilise un skill,
plus il monte en niveau, débloquant de nouvelles variations et réduisant les cooldowns.
Le niveau max d'un skill est 1000 (Master). La montée est logarithmique.

Chaque race a des affinités magiques innées qui modifient les coûts en MP et l'efficacité
des sorts de leur école. Les Undine excellent en magie de l'eau/soin, les Salamanders en
feu offensif, les Cait Sith en Beast Taming, etc.

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `skill_id` | VARCHAR(50) | PK, NOT NULL | Identifiant unique (ex: `MAGIC_FIRE_FIREBALL_01`) |
| `skill_name` | VARCHAR(80) | NOT NULL, UNIQUE | Nom du skill affiché |
| `skill_name_jp` | VARCHAR(80) | NULL | Nom japonais (lore) |
| `description` | TEXT | NOT NULL | Description complète du skill |
| `incantation` | VARCHAR(200) | NULL | Incantation magique (pour les sorts) |

### 2.2 Classification
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `skill_category` | ENUM('sword_skill','magic','passive','craft','support','movement','unique') | NOT NULL | Catégorie principale |
| `skill_subcategory` | VARCHAR(30) | NULL | Sous-catégorie (ex: 'fire_magic', 'healing', 'smithing') |
| `magic_school` | ENUM('fire','water','wind','earth','lightning','dark','holy','illusion','none') | DEFAULT 'none' | École de magie |
| `weapon_required` | ENUM('sword','axe','bow','staff','dagger','spear','katana','mace','fist','any','none') | DEFAULT 'none' | Arme requise pour Sword Skills |
| `tier` | INT | NOT NULL, DEFAULT 1 | Tier du skill (1-5, détermine la puissance de base) |

### 2.3 Effets et Stats
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `base_damage` | INT | DEFAULT 0 | Dégâts de base (scaling avec stats) |
| `damage_scaling_stat` | ENUM('str','agi','int','dex','none') | DEFAULT 'none' | Stat qui scale les dégâts |
| `damage_scaling_ratio` | FLOAT | DEFAULT 1.0 | Ratio de scaling (1.5 = 150% de la stat) |
| `heal_amount` | INT | DEFAULT 0 | Montant de soin de base |
| `mp_cost` | INT | DEFAULT 0 | Coût en MP |
| `stamina_cost` | INT | DEFAULT 0 | Coût en stamina |
| `hp_cost` | INT | DEFAULT 0 | Coût en HP (skills sombres) |
| `cooldown_seconds` | INT | DEFAULT 0 | Temps de recharge en secondes |
| `cast_time_seconds` | FLOAT | DEFAULT 0.0 | Temps d'incantation en secondes |
| `duration_seconds` | INT | DEFAULT 0 | Durée d'effet (pour buffs/dots) |
| `aoe_radius` | INT | DEFAULT 0 | Rayon de zone d'effet (0 = single target) |
| `max_targets` | INT | DEFAULT 1 | Nombre max de cibles |
| `range_type` | ENUM('self','melee','mid','long','unlimited') | DEFAULT 'melee' | Portée du skill |

### 2.4 Effets de Statut
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `applies_buff_id` | VARCHAR(50) | FK → BUFF_DEBUFF, NULL | Buff/debuff appliqué par ce skill |
| `buff_apply_chance` | FLOAT | DEFAULT 1.0 | Chance d'appliquer le statut (0.0-1.0) |
| `elemental_type` | ENUM('none','fire','ice','wind','earth','lightning','dark','holy','water') | DEFAULT 'none' | Élément du skill |

### 2.5 Prérequis d'Apprentissage
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `required_level` | INT | DEFAULT 1 | Niveau minimum de l'avatar |
| `required_race` | VARCHAR(20) | NULL | Race requise (NULL = universel) |
| `required_skill_id` | VARCHAR(50) | NULL | Skill prérequis (chaîne de skills) |
| `required_skill_level` | INT | DEFAULT 0 | Niveau requis du skill prérequis |
| `learn_method` | ENUM('auto','trainer_npc','scroll','quest','discovery','racial_innate') | NOT NULL | Comment ce skill est appris |
| `learn_cost_yrd` | INT | DEFAULT 0 | Coût d'apprentissage chez un trainer |

### 2.6 Progression
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `max_proficiency` | INT | NOT NULL, DEFAULT 1000 | Niveau max de maîtrise |
| `xp_per_use` | INT | DEFAULT 1 | XP de proficiency gagné par utilisation |
| `proficiency_scaling` | JSON | NULL | Bonus par palier de proficiency (ex: 250, 500, 750, 1000) |

### 2.7 Restrictions PvP & Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `usable_in_pvp` | BOOLEAN | DEFAULT TRUE | Utilisable en PvP |
| `usable_in_safe_zone` | BOOLEAN | DEFAULT TRUE | Utilisable en safe zone |
| `usable_while_flying` | BOOLEAN | DEFAULT TRUE | Utilisable en vol |
| `is_toggle` | BOOLEAN | DEFAULT FALSE | Skill toggle (on/off) vs one-shot |
| `icon_emoji` | VARCHAR(10) | NULL | Emoji représentatif dans WhatsApp |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date d'ajout au dictionnaire |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Skill | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Maîtrisé par** | AVATAR (via T_AVATAR_SKILLS) | (0,n) | (0,n) | Relation n:n avec niveau de proficiency |
| **Associé à** | RACE | (0,n) | (0,n) | Un skill peut être racial ; une race a 0 à n skills exclusifs |
| **Applique** | BUFF_DEBUFF | (0,1) | (0,n) | Un skill applique 0 ou 1 altération d'état |
| **Prérequis de** | SKILL (auto-référence) | (0,n) | (0,1) | Un skill peut nécessiter 0 ou 1 skill prérequis |
| **Enseigné par** | NPC | (0,n) | (0,n) | Un skill est enseigné par 0 à n NPC trainers |
| **Utilisable par** | PET_FAMILIAR | (0,n) | (0,n) | Certains skills sont utilisables par les familiers |