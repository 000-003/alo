# Entité MCD : ITEM_DATA (Données de Base d'Objet)

## 1. Définition Conceptuelle — Cardinal System / The Seed

L'**Item Data** représente le modèle immuable (template) d'un objet dans ALfheim Online.
C'est le "blueprint" stocké dans The Seed à partir duquel sont instanciées les copies
individuelles (Item Instance) que les joueurs possèdent. Un Item Data définit les propriétés
de base (stats, type, rareté, poids) mais ne contient AUCUNE donnée de possession.

Le système distingue strictement :
- **Item Data** = dictionnaire/catalogue (cette entité) — immuable, défini par les GMs
- **Inventory Instance** = copie possédée par un joueur — mutable (durabilité, enchantements)

Les Items sont classés par type (arme, armure, consommable, matériau, clé, recette) et par
rareté selon le système de couleurs SAO/ALO : Common → Uncommon → Rare → Epic → Legendary → Unique.

Le poids (`weight`) est critique dans ALO car il impacte directement la vitesse de vol
et la capacité de l'inventaire. Chaque race a un poids max portable différent.

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `item_id` | VARCHAR(50) | PK, NOT NULL | Identifiant unique (ex: `WPN_SWORD_IRON_01`) |
| `item_name` | VARCHAR(100) | NOT NULL, UNIQUE | Nom affiché in-game |
| `item_name_jp` | VARCHAR(100) | NULL | Nom japonais (lore ALO) |
| `description` | TEXT | NULL | Description affichée dans le tooltip |
| `lore_text` | TEXT | NULL | Texte de lore caché (encyclopédie) |

### 2.2 Classification
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `item_type` | ENUM('weapon','armor','shield','accessory','consumable','material','key_item','recipe','scroll','furniture','mount_item','quest_item') | NOT NULL | Type principal |
| `item_subtype` | VARCHAR(30) | NULL | Sous-type (ex: pour weapon → 'sword','axe','bow','staff','dagger','spear','katana','mace') |
| `rarity` | ENUM('common','uncommon','rare','epic','legendary','unique') | NOT NULL, DEFAULT 'common' | Rareté (affecte la couleur du nom) |
| `tier` | INT | NOT NULL, DEFAULT 1 | Tier de puissance (1-10) |
| `is_tradeable` | BOOLEAN | DEFAULT TRUE | Échangeable entre joueurs / vendable au marché |
| `is_droppable` | BOOLEAN | DEFAULT TRUE | Peut être lâché (drop) à la mort |
| `is_quest_item` | BOOLEAN | DEFAULT FALSE | Item de quête (non destructible) |
| `is_consumable` | BOOLEAN | DEFAULT FALSE | Disparaît après utilisation |
| `is_stackable` | BOOLEAN | DEFAULT FALSE | Empilable en pile dans l'inventaire |
| `max_stack_size` | INT | DEFAULT 1 | Taille max de la pile (1 si non stackable) |

### 2.3 Statistiques de Combat (pour armes/armures)
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `atk_physical` | INT | DEFAULT 0 | Bonus attaque physique |
| `atk_magical` | INT | DEFAULT 0 | Bonus attaque magique |
| `def_physical` | INT | DEFAULT 0 | Bonus défense physique |
| `def_magical` | INT | DEFAULT 0 | Bonus défense magique |
| `stat_bonus_str` | INT | DEFAULT 0 | Bonus STR quand équipé |
| `stat_bonus_agi` | INT | DEFAULT 0 | Bonus AGI quand équipé |
| `stat_bonus_vit` | INT | DEFAULT 0 | Bonus VIT quand équipé |
| `stat_bonus_int` | INT | DEFAULT 0 | Bonus INT quand équipé |
| `stat_bonus_dex` | INT | DEFAULT 0 | Bonus DEX quand équipé |
| `stat_bonus_luk` | INT | DEFAULT 0 | Bonus LUK quand équipé |
| `hp_bonus` | INT | DEFAULT 0 | Bonus HP max |
| `mp_bonus` | INT | DEFAULT 0 | Bonus MP max |
| `critical_rate_bonus` | FLOAT | DEFAULT 0.0 | Bonus taux critique (%) |
| `speed_bonus` | FLOAT | DEFAULT 0.0 | Bonus vitesse (%) |

### 2.4 Propriétés Physiques
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `weight` | FLOAT | NOT NULL, DEFAULT 1.0 | Poids en kg (impacte la vitesse de vol) |
| `durability_max` | INT | DEFAULT 100 | Durabilité maximale (0 = incassable) |
| `attack_range` | ENUM('melee','mid','long') | DEFAULT 'melee' | Portée pour les armes |
| `attack_speed` | FLOAT | DEFAULT 1.0 | Vitesse d'attaque (multiplicateur) |

### 2.5 Prérequis
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `required_level` | INT | DEFAULT 1 | Niveau minimum pour équiper |
| `required_str` | INT | DEFAULT 0 | STR minimum pour équiper |
| `required_agi` | INT | DEFAULT 0 | AGI minimum pour équiper |
| `required_dex` | INT | DEFAULT 0 | DEX minimum pour équiper |
| `required_race` | VARCHAR(20) | NULL | Race requise (NULL = toutes les races) |
| `required_skill_id` | VARCHAR(50) | NULL | Skill requis pour utiliser |

### 2.6 Effets Spéciaux
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `on_use_effect` | JSON | NULL | Effet à l'utilisation (pour consommables) |
| `on_equip_effect` | JSON | NULL | Effet passif quand équipé |
| `elemental_type` | ENUM('none','fire','ice','wind','earth','lightning','dark','holy','water') | DEFAULT 'none' | Élément de l'item |
| `elemental_power` | INT | DEFAULT 0 | Puissance élémentaire |
| `special_ability` | TEXT | NULL | Description de la capacité spéciale |

### 2.7 Économie
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `buy_price_yrd` | INT | DEFAULT 0 | Prix d'achat chez NPC |
| `sell_price_yrd` | INT | DEFAULT 0 | Prix de vente chez NPC |
| `market_base_price` | INT | DEFAULT 0 | Prix de base au marché (référence) |

### 2.8 Visuel & Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `icon_emoji` | VARCHAR(10) | NULL | Emoji affiché dans WhatsApp |
| `equip_slot` | ENUM('main_hand','off_hand','head','body','legs','feet','accessory','none') | DEFAULT 'none' | Slot d'équipement |
| `craft_source` | BOOLEAN | DEFAULT FALSE | Obtenable uniquement par craft |
| `drop_source` | BOOLEAN | DEFAULT TRUE | Obtenable par drop de monstre |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de création dans le dictionnaire |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité ItemData | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Instancie** | INVENTORY_INSTANCE | (0,n) | (1,1) | Un ItemData génère 0 à n instances ; une instance référence 1 ItemData |
| **Droppé par** | LOOT_TABLE | (0,n) | (0,n) | Un item apparaît dans 0 à n tables de loot |
| **Ingrédient de** | CRAFT_RECIPE (via liaison) | (0,n) | (0,n) | Un item est ingrédient de 0 à n recettes |
| **Résultat de** | CRAFT_RECIPE | (0,n) | (1,1) | Un item est le résultat de 0 à n recettes |
| **Vendu par** | NPC (via liaison) | (0,n) | (0,n) | Un item est vendu par 0 à n NPC |
| **Requis par** | QUEST (via liaison) | (0,n) | (0,n) | Un item est requis pour 0 à n quêtes |
| **Récompense de** | QUEST | (0,n) | (0,n) | Un item est récompense de 0 à n quêtes |
| **Stocké dans** | BANK_VAULT (via liaison) | (0,n) | (0,n) | Un item peut être dans 0 à n coffres |