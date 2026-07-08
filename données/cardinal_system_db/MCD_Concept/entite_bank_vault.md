# Entité : Coffre-Fort (Bank Vault)

## Définition Conceptuelle
Chaque joueur possède un coffre-fort personnel, et chaque guilde un coffre de guilde. Le coffre stocke des Yrds et des items en sécurité (non perdus à la mort).

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| vault_id | UUID | PK | Identifiant unique |
| owner_type | ENUM('avatar','guild','marriage') | NOT NULL | Type de propriétaire |
| owner_id | UUID | NOT NULL | ID du propriétaire (avatar_id ou guild_id) |
| yrds_stored | BIGINT | DEFAULT 0 | Yrds en banque |
| max_slots | INT | DEFAULT 50 | Capacité en items |
| items_stored | JSON | NULL | Items [{item_instance_id, quantity}] |
| access_level | ENUM('owner_only','officers','all_members') | DEFAULT 'owner_only' | Qui peut accéder |
| last_accessed | TIMESTAMP | DEFAULT NOW() | Dernier accès |
