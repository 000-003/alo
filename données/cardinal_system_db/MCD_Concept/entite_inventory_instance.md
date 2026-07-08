# Entité MCD : INVENTORY_INSTANCE (Instance d'Item Possédée)

## 1. Définition Conceptuelle — Cardinal System / The Seed

L'**Inventory Instance** est la matérialisation concrète d'un Item Data dans le monde
d'ALfheim. Quand un joueur loot une épée, achète une potion ou craft un bouclier,
The Seed crée une **instance** liée au template (Item Data) mais possédant ses propres
propriétés mutables : durabilité restante, enchantements appliqués, nombre d'améliorations.

Ce système "template → instance" est fondamental :
- Le template `WPN_SWORD_IRON_01` définit : ATK=15, Durabilité max=100
- L'instance `inv_abc123` possédée par Kirito a : durabilité_restante=73, enchantement="Fire+2"

Les instances existent dans plusieurs conteneurs possibles :
- **Inventaire personnel** d'un avatar
- **Coffre-fort personnel** (Bank Vault)
- **Coffre de guilde** (Guild Vault)
- **En vente** sur le marché
- **Au sol** (drop temporaire dans une zone)

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `instance_uuid` | UUID | PK, NOT NULL | Identifiant unique de cette instance |
| `item_id` | VARCHAR(50) | FK → ITEM_DATA, NOT NULL | Référence au template |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de création de l'instance |

### 2.2 Propriétaire & Localisation
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `owner_avatar_uuid` | UUID | FK → AVATAR, NULL | Avatar propriétaire (NULL si au sol/marché) |
| `container_type` | ENUM('inventory','equipment','bank_personal','bank_guild','market','ground','mail','npc_shop') | NOT NULL, DEFAULT 'inventory' | Où se trouve l'item |
| `container_ref_uuid` | UUID | NULL | Référence au conteneur (bank_uuid, guild_uuid, mail_uuid, etc.) |
| `slot_index` | INT | NULL | Position dans l'inventaire (tri) |

### 2.3 État Mutable
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `durability_current` | INT | NOT NULL | Durabilité restante (0 = cassé) |
| `is_broken` | BOOLEAN | DEFAULT FALSE | Item cassé (inutilisable jusqu'à réparation) |
| `is_equipped` | BOOLEAN | DEFAULT FALSE | Actuellement équipé sur un slot |
| `equipped_slot` | ENUM('main_hand','off_hand','head','body','legs','feet','accessory_1','accessory_2','none') | DEFAULT 'none' | Slot d'équipement actuel |
| `stack_count` | INT | NOT NULL, DEFAULT 1 | Nombre d'items dans la pile (pour stackables) |
| `is_locked` | BOOLEAN | DEFAULT FALSE | Verrouillé (anti-vente accidentelle) |
| `is_soulbound` | BOOLEAN | DEFAULT FALSE | Lié à l'âme (non échangeable après équip) |

### 2.4 Améliorations & Enchantements
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `upgrade_level` | INT | DEFAULT 0 | Niveau d'amélioration (+1 à +10) |
| `enchantments` | JSON | NULL | Liste des enchantements appliqués |
| `gem_sockets` | JSON | NULL | Gemmes insérées (slots et types) |
| `custom_name` | VARCHAR(50) | NULL | Nom personnalisé donné par le joueur |
| `crafter_avatar_uuid` | UUID | FK → AVATAR, NULL | Avatar qui a crafté cet item (NULL si drop) |

### 2.5 Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `obtained_method` | ENUM('drop','craft','quest','purchase_npc','purchase_market','trade','mail','gm_gift','daily_reward') | NOT NULL | Comment l'item a été obtenu |
| `obtained_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Quand l'item a été obtenu |
| `last_used_at` | TIMESTAMP | NULL | Dernière utilisation (consommable) |
| `total_damage_dealt` | BIGINT | DEFAULT 0 | Dégâts totaux infligés avec cet item (stats) |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Instance | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Basé sur** | ITEM_DATA | (1,1) | (0,n) | Une instance est basée sur 1 template ; un template a 0 à n instances |
| **Possédé par** | AVATAR | (0,1) | (0,n) | Une instance est possédée par 0 ou 1 avatar ; un avatar a 0 à n instances |
| **Stocké dans** | BANK_VAULT | (0,1) | (0,n) | Une instance est dans 0 ou 1 coffre ; un coffre contient 0 à n instances |
| **Listé sur** | MARKET_TRANSACTION | (0,1) | (1,1) | Une instance est listée sur 0 ou 1 vente ; une vente concerne 1 instance |
| **Crafté par** | AVATAR | (0,1) | (0,n) | Une instance est craftée par 0 ou 1 avatar |
| **Attaché à** | MAIL | (0,1) | (0,n) | Une instance est attachée à 0 ou 1 mail |