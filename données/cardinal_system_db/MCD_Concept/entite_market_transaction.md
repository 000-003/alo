# Entité MCD : MARKET_TRANSACTION (Transaction Économique Yrd)

## 1. Définition Conceptuelle — Cardinal System / The Seed

La **Market Transaction** enregistre toute activité commerciale entre joueurs dans
ALfheim Online. Le marché d'ALO fonctionne comme un **Auction House** (hôtel des ventes)
accessible depuis les NPC marchands dans les villes et capitales.

Le système économique repose sur les **Yrds** (monnaie d'ALfheim), avec :
- **Vente directe** : Le vendeur fixe un prix, le premier acheteur l'obtient
- **Enchère** : Les joueurs enchérissent pendant une durée limitée
- **Trade direct** : Échange P2P entre deux joueurs dans la même zone
- **Achat NPC** : Achat chez un PNJ (prix fixe du dictionnaire)
- **Vente NPC** : Vente à un PNJ (prix fixe, généralement inférieur)

Le marché prélève une **taxe** de 5% sur chaque transaction réussie (configurable).
Les guildes qui contrôlent le territoire de la ville du marché reçoivent une partie
de cette taxe dans leur trésor.

Un système anti-inflation surveille les prix moyens et empêche les transactions
abusives (dump/pump de marché).

---

## 2. Attributs Exhaustifs

### 2.1 Identifiants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `transaction_uuid` | UUID | PK, NOT NULL | Identifiant unique de la transaction |
| `listing_uuid` | UUID | UNIQUE, NULL | ID de la mise en vente (NULL pour trade/NPC) |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT NOW() | Date de création |
| `completed_at` | TIMESTAMP | NULL | Date de complétion |

### 2.2 Participants
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `seller_avatar_uuid` | UUID | FK → AVATAR, NULL | Vendeur (NULL si achat NPC) |
| `buyer_avatar_uuid` | UUID | FK → AVATAR, NULL | Acheteur (NULL si vente NPC ou en attente) |
| `seller_npc_id` | VARCHAR(50) | FK → NPC, NULL | NPC vendeur (si achat NPC) |

### 2.3 Objet de la Transaction
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `item_instance_uuid` | UUID | FK → INVENTORY_INSTANCE, NOT NULL | Instance d'item échangée |
| `item_id` | VARCHAR(50) | FK → ITEM_DATA, NOT NULL | Template de l'item (dénormalisé pour historique) |
| `item_quantity` | INT | NOT NULL, DEFAULT 1 | Quantité échangée |

### 2.4 Prix
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `transaction_type` | ENUM('direct_sale','auction','trade_p2p','buy_npc','sell_npc') | NOT NULL | Type de transaction |
| `asking_price_yrd` | BIGINT | NOT NULL | Prix demandé par le vendeur |
| `final_price_yrd` | BIGINT | NULL | Prix final (peut différer si enchère) |
| `tax_amount_yrd` | BIGINT | DEFAULT 0 | Montant de la taxe prélevée |
| `tax_rate` | FLOAT | DEFAULT 0.05 | Taux de taxe appliqué |
| `guild_tax_recipient` | UUID | FK → GUILD, NULL | Guilde recevant la part de taxe territoriale |

### 2.5 Enchères
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `is_auction` | BOOLEAN | DEFAULT FALSE | Transaction de type enchère |
| `auction_start_price` | BIGINT | DEFAULT 0 | Prix de départ de l'enchère |
| `auction_current_bid` | BIGINT | DEFAULT 0 | Enchère actuelle |
| `auction_bid_count` | INT | DEFAULT 0 | Nombre d'enchères reçues |
| `auction_end_at` | TIMESTAMP | NULL | Date de fin de l'enchère |
| `auction_bidders` | JSON | NULL | Historique des enchérisseurs |

### 2.6 État
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `status` | ENUM('listed','sold','cancelled','expired','pending_trade','trade_completed') | NOT NULL, DEFAULT 'listed' | Statut de la transaction |
| `listing_duration_hours` | INT | DEFAULT 48 | Durée de mise en vente |
| `expires_at` | TIMESTAMP | NULL | Date d'expiration de la mise en vente |
| `zone_id` | VARCHAR(50) | FK → ZONE, NULL | Zone où la transaction a lieu |

### 2.7 Métadonnées
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| `cancellation_reason` | VARCHAR(100) | NULL | Raison d'annulation |
| `is_flagged` | BOOLEAN | DEFAULT FALSE | Transaction suspecte (anti-cheat) |
| `flag_reason` | VARCHAR(200) | NULL | Raison du flag |

---

## 3. Cardinalités et Relations (Notation Merise)

| Relation | Entité liée | Cardinalité Transaction | Cardinalité Cible | Description |
|---|---|---|---|---|
| **Vendeur** | AVATAR | (0,1) | (0,n) | 1 transaction a 0 ou 1 vendeur joueur |
| **Acheteur** | AVATAR | (0,1) | (0,n) | 1 transaction a 0 ou 1 acheteur joueur |
| **Concerne** | INVENTORY_INSTANCE | (1,1) | (0,n) | 1 transaction concerne 1 instance d'item |
| **Template de** | ITEM_DATA | (1,1) | (0,n) | 1 transaction référence 1 item data |
| **Lieu** | ZONE | (0,1) | (0,n) | 1 transaction a lieu dans 0 ou 1 zone |
| **Taxe vers** | GUILD | (0,1) | (0,n) | 1 transaction paie la taxe à 0 ou 1 guilde |
| **Via NPC** | NPC | (0,1) | (0,n) | 1 transaction implique 0 ou 1 NPC marchand |