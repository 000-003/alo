# Entité MCD : AVATAR (Fluctlight Player)

## 1. Définition Conceptuelle — Cardinal System / The Seed

L'**Avatar** est l'incarnation numérique d'un joueur réel dans le monde d'ALfheim Online.
Chaque Fluctlight (conscience) connectée via WhatsApp se voit attribuer un Avatar unique
lié à son identifiant téléphonique. L'Avatar est le nœud central du graphe de données :
il possède des items, maîtrise des skills, appartient à une race, rejoint une guilde,
explore des zones et participe à des combats. The Seed gère son cycle de vie complet,
de la création (première connexion `!start`) jusqu'à la mort permanente éventuelle
(mode Remain Light → suppression après 24h si non ressuscité).

L'Avatar est soumis au **système de karma PK** : tuer un joueur innocent réduit le karma,
ce qui influence les interactions avec les NPC, l'accès à certaines zones safe, et la
visibilité du statut "orange/red player" dans les groupes WhatsApp.

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `avatar_uuid` | UUID | PK, NOT NULL | Identifiant unique généré par The Seed |
| `whatsapp_phone` | VARCHAR(20) | UNIQUE, NOT NULL | Numéro WhatsApp du joueur (format E.164) |
| `avatar_name` | VARCHAR(32) | UNIQUE, NOT NULL | Nom affiché in-game (immutable après création) |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de création du Fluctlight |
| `last_login_at` | TIMESTAMP | NULL | Dernière activité WhatsApp détectée |

### 2.2 Race & Apparence
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `race_id` | VARCHAR(20) | FK → RACE, NOT NULL | Race choisie à la création (immutable) |
| `gender` | ENUM('male','female','neutral') | NOT NULL | Genre de l'avatar |
| `wing_color` | VARCHAR(7) | DEFAULT '#FFFFFF' | Couleur des ailes (hex) |
| `appearance_data` | JSON | NULL | Données d'apparence (cheveux, yeux, taille) |

### 2.3 Statistiques Primaires (Level & XP)
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `level` | INT | NOT NULL, DEFAULT 1 | Niveau actuel (1-100) |
| `current_xp` | BIGINT | NOT NULL, DEFAULT 0 | XP accumulé dans le niveau actuel |
| `total_xp` | BIGINT | NOT NULL, DEFAULT 0 | XP total depuis la création |

### 2.4 Points de Vie & Mana
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `hp_current` | INT | NOT NULL | Points de vie actuels |
| `hp_max` | INT | NOT NULL | Points de vie maximum (base + bonus raciaux + équipement) |
| `mp_current` | INT | NOT NULL | Points de mana actuels |
| `mp_max` | INT | NOT NULL | Points de mana maximum |
| `stamina_current` | INT | NOT NULL, DEFAULT 100 | Endurance (vol, course, craft) |
| `stamina_max` | INT | NOT NULL, DEFAULT 100 | Endurance maximale |

### 2.5 Stats de Combat (6 stats primaires)
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `stat_str` | INT | NOT NULL, DEFAULT 1 | Force — dégâts physiques, poids portables |
| `stat_agi` | INT | NOT NULL, DEFAULT 1 | Agilité — esquive, vitesse d'attaque, vitesse de vol |
| `stat_vit` | INT | NOT NULL, DEFAULT 1 | Vitalité — HP max, régénération HP |
| `stat_int` | INT | NOT NULL, DEFAULT 1 | Intelligence — dégâts magiques, MP max |
| `stat_dex` | INT | NOT NULL, DEFAULT 1 | Dextérité — précision, critique, craft |
| `stat_luk` | INT | NOT NULL, DEFAULT 1 | Chance — loot rate, critique, craft rareté |
| `stat_points_available` | INT | NOT NULL, DEFAULT 0 | Points de stats non distribués |

### 2.6 Économie
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `yrd_balance` | BIGINT | NOT NULL, DEFAULT 100 | Yrds (monnaie) en poche |
| `total_yrd_earned` | BIGINT | NOT NULL, DEFAULT 0 | Total Yrds gagnés (stats) |
| `total_yrd_spent` | BIGINT | NOT NULL, DEFAULT 0 | Total Yrds dépensés (stats) |

### 2.7 Positionnement & Mouvement
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `current_zone_id` | VARCHAR(50) | FK → ZONE, NOT NULL | Zone actuelle de l'avatar |
| `current_wa_group_id` | VARCHAR(30) | FK → WA_GROUP, NULL | ID du groupe WhatsApp de localisation actuel |
| `is_flying` | BOOLEAN | DEFAULT FALSE | En vol ou au sol |
| `flight_altitude` | INT | DEFAULT 0 | Altitude de vol (0-1000m) |

### 2.8 PvP & Karma
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `pk_karma` | INT | NOT NULL, DEFAULT 0 | Karma PK (-1000 à +1000). Négatif = orange/red player |
| `pk_kills` | INT | NOT NULL, DEFAULT 0 | Nombre de joueurs tués |
| `pk_deaths` | INT | NOT NULL, DEFAULT 0 | Nombre de morts PvP |
| `player_status` | ENUM('green','orange','red') | DEFAULT 'green' | Statut PvP visible |
| `pvp_enabled` | BOOLEAN | DEFAULT FALSE | Mode PvP activé manuellement |

### 2.9 État Vital
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `is_alive` | BOOLEAN | NOT NULL, DEFAULT TRUE | Vivant ou mort |
| `is_remain_light` | BOOLEAN | DEFAULT FALSE | Mode Remain Light (mort, en attente de résurrection) |
| `remain_light_expires_at` | TIMESTAMP | NULL | Expiration du Remain Light (suppression définitive) |
| `is_in_combat` | BOOLEAN | DEFAULT FALSE | Flag de verrouillage combat |
| `is_resting` | BOOLEAN | DEFAULT FALSE | En repos (auberge → regen bonus) |
| `is_banned` | BOOLEAN | DEFAULT FALSE | Banni par les GMs |
| `ban_reason` | TEXT | NULL | Raison du ban |

### 2.10 Guilde
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `guild_uuid` | UUID | FK → GUILD, NULL | Guilde actuelle (NULL si sans guilde) |
| `guild_rank` | ENUM('recruit','member','officer','vice_leader','leader') | NULL | Rang dans la guilde |
| `guild_joined_at` | TIMESTAMP | NULL | Date d'entrée dans la guilde |

### 2.11 Équipement Actif (Slots)
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `equip_main_hand` | UUID | FK → INVENTORY, NULL | Arme principale |
| `equip_off_hand` | UUID | FK → INVENTORY, NULL | Bouclier / arme secondaire |
| `equip_head` | UUID | FK → INVENTORY, NULL | Casque / Chapeau (Tête) |
| `equip_torso` | UUID | FK → INVENTORY, NULL | Armure / Robe (Torse) |
| `equip_arms` | UUID | FK → INVENTORY, NULL | Gantelets / Brassards (Bras) |
| `equip_waist` | UUID | FK → INVENTORY, NULL | Ceinture / Écharpe (Taille) |
| `equip_legs` | UUID | FK → INVENTORY, NULL | Jambières / Bottes (Jambes) |
| `equip_accessory_1` | UUID | FK → INVENTORY, NULL | Accessoire 1 (bague, amulette) |
| `equip_accessory_2` | UUID | FK → INVENTORY, NULL | Accessoire 2 |

### 2.12 Titre & Cosmétique
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `active_title_id` | UUID | FK → TITLE, NULL | Titre affiché actuellement |
| `bio_text` | VARCHAR(200) | NULL | Bio personnalisée du profil |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Avatar | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Appartient à** | RACE | (1,1) | (0,n) | Un avatar a exactement 1 race ; une race a 0 à n avatars |
| **Possède** | INVENTORY_INSTANCE | (0,n) | (1,1) | Un avatar possède 0 à n items ; un item appartient à 1 avatar |
| **Maîtrise** | SKILL (via table liaison) | (0,n) | (0,n) | Relation n:n via T_AVATAR_SKILLS |
| **Appartient à** | GUILD | (0,1) | (0,n) | Un avatar est dans 0 ou 1 guilde ; une guilde a 0 à n membres |
| **Se trouve dans** | ZONE | (1,1) | (0,n) | Un avatar est dans 1 zone ; une zone contient 0 à n avatars |
| **Participe à** | COMBAT_INSTANCE | (0,1) | (1,n) | Un avatar est dans 0 ou 1 combat ; un combat implique 1 à n avatars |
| **Possède** | PET_FAMILIAR | (0,n) | (1,1) | Un avatar a 0 à n familiers ; un familier a 1 maître |
| **A complété** | QUEST (via liaison) | (0,n) | (0,n) | Relation n:n via T_ACTIVE_QUESTS |
| **A débloqué** | ACHIEVEMENT (via liaison) | (0,n) | (0,n) | Relation n:n via T_AVATAR_ACHIEVEMENTS |
| **Subit** | BUFF_DEBUFF (via liaison) | (0,n) | (0,n) | Relation n:n via T_STATUS_EFFECTS |
| **A débloqué** | TITLE (via liaison) | (0,n) | (0,n) | Relation n:n via T_AVATAR_TITLES |
| **Connecté via** | WHATSAPP_SESSION | (1,1) | (1,1) | Relation 1:1 bijective |
| **Présent dans** | WA_GROUP (via liaison) | (0,n) | (0,n) | Un avatar est dans 0 à n groupes WA |
| **Envoie/reçoit** | MAIL | (0,n) | (1,1) | Un avatar envoie/reçoit 0 à n mails |
| **A un** | BANK_VAULT | (1,1) | (1,1) | Un avatar a exactement 1 coffre personnel |
| **A un** | DAILY_LOGIN | (0,n) | (1,1) | Un avatar a 0 à n entrées de login quotidien |
| **Porte** | TITLE | (0,1) | (0,n) | Un avatar porte 0 ou 1 titre actif |