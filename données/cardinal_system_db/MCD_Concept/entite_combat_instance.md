# Entité MCD : COMBAT_INSTANCE (Session de Combat PvE/PvP)

## 1. Définition Conceptuelle — Cardinal System / The Seed

La **Combat Instance** est l'entité éphémère créée par The Seed lorsqu'un combat
s'engage dans ALfheim Online. Le combat est **asynchrone par tour** adapté à WhatsApp :
chaque joueur dispose d'un délai (configurable, défaut 5 minutes) pour choisir son
action via des commandes (`!attack`, `!skill [nom]`, `!defend`, `!flee`, `!item [nom]`).

Le système de combat gère :
- **PvE** : Avatar(s) vs Monstre(s) — déclenché par `!hunt` ou spawn aggro
- **PvP** : Avatar vs Avatar — déclenché par `!duel` (consentement) ou `!attack @player` (karma)
- **Raid** : Party vs Boss — combat de groupe avec mécanique avancée
- **GvG** : Guilde vs Guilde — guerre territoriale

Chaque combat maintient un **log JSON** complet des actions, dégâts, soins et effets
pour permettre le replay et l'arbitrage anti-cheat. Le combat verrouille les participants
(ils ne peuvent pas changer de zone, commercer, ou entrer dans un autre combat).

L'ordre des tours est déterminé par le stat AGI des participants.

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `combat_uuid` | UUID | PK, NOT NULL | Identifiant unique de la session |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Début du combat |
| `ended_at` | TIMESTAMP | NULL | Fin du combat |

### 2.2 Classification
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `combat_type` | ENUM('pve_solo','pve_party','pvp_duel','pvp_open','raid_boss','gvg','arena','event') | NOT NULL | Type de combat |
| `zone_id` | VARCHAR(50) | FK → ZONE, NOT NULL | Zone où le combat se déroule |
| `is_instanced` | BOOLEAN | DEFAULT FALSE | Combat instancié (invisible aux autres joueurs) |

### 2.3 Participants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `participants` | JSON | NOT NULL | Liste des participants avec rôle et stats initiales |
| `player_uuids` | JSON | NOT NULL | Liste des avatar_uuid impliqués (côté joueur) |
| `monster_ids` | JSON | NULL | Liste des monster_id impliqués (côté monstres) |
| `party_uuid` | UUID | FK → PARTY, NULL | Party impliqué (si combat de groupe) |
| `player_count` | INT | NOT NULL, DEFAULT 1 | Nombre de joueurs impliqués |
| `monster_count` | INT | DEFAULT 0 | Nombre de monstres impliqués |

### 2.4 État du Combat
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `status` | ENUM('active','player_victory','monster_victory','draw','fled','timeout','aborted') | NOT NULL, DEFAULT 'active' | Statut actuel |
| `current_turn` | INT | NOT NULL, DEFAULT 1 | Tour actuel |
| `max_turns` | INT | DEFAULT 100 | Nombre max de tours (anti-stalemate) |
| `turn_order` | JSON | NOT NULL | Ordre des tours (basé sur AGI) |
| `current_actor_uuid` | VARCHAR(50) | NOT NULL | UUID de l'entité dont c'est le tour |
| `turn_deadline` | TIMESTAMP | NOT NULL | Deadline pour l'action actuelle |
| `turn_timeout_seconds` | INT | DEFAULT 300 | Temps max par tour (5 min par défaut) |

### 2.5 HP/MP Tracker en Temps Réel
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `combat_state` | JSON | NOT NULL | État complet du combat (HP/MP/buffs de chaque participant) |
| `active_buffs` | JSON | NULL | Buffs/debuffs actifs sur chaque participant |

### 2.6 Logs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `combat_log` | JSON | NOT NULL, DEFAULT '[]' | Log détaillé de chaque action |
| `total_damage_dealt` | JSON | NULL | Dégâts totaux par participant |
| `total_healing_done` | JSON | NULL | Soins totaux par participant |
| `total_damage_taken` | JSON | NULL | Dégâts reçus par participant |

### 2.7 Récompenses (après victoire)
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `xp_distributed` | JSON | NULL | XP distribué à chaque joueur |
| `yrd_distributed` | JSON | NULL | Yrds distribués à chaque joueur |
| `loot_dropped` | JSON | NULL | Items lootés et attribution |
| `loot_distribution_mode` | ENUM('random','round_robin','need_greed','leader') | DEFAULT 'random' | Mode de distribution du loot |

### 2.8 Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `difficulty_modifier` | FLOAT | DEFAULT 1.0 | Modificateur de difficulté |
| `weather_modifier` | JSON | NULL | Impact de la météo sur le combat |
| `is_story_combat` | BOOLEAN | DEFAULT FALSE | Combat scénarisé (quête) |
| `wa_message_ids` | JSON | NULL | IDs des messages WhatsApp du combat |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Combat | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Implique** | AVATAR | (1,n) | (0,1) | 1 combat a 1 à n joueurs ; 1 joueur est dans 0 ou 1 combat |
| **Contre** | MONSTER_DATA | (0,n) | (0,n) | 1 combat a 0 à n monstres |
| **Dans** | ZONE | (1,1) | (0,n) | 1 combat a lieu dans 1 zone |
| **Par** | PARTY | (0,1) | (0,n) | 1 combat implique 0 ou 1 party |
| **Utilise** | SKILL | (0,n) | (0,n) | Skills utilisés pendant le combat |
| **Produit** | INVENTORY_INSTANCE (loot) | (0,n) | (0,1) | 1 combat produit 0 à n items lootés |