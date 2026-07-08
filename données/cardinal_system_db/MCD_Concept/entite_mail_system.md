# Entité : Messagerie Asynchrone (Mail System)

## Définition Conceptuelle
Le système de courrier permet aux joueurs d'envoyer des messages, des Yrds et des items à d'autres joueurs même hors ligne. Le bot délivre le colis quand le destinataire se connecte.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| mail_id | UUID | PK | Identifiant unique |
| sender_avatar_id | UUID | FK → T_AVATARS, NOT NULL | Expéditeur |
| recipient_avatar_id | UUID | FK → T_AVATARS, NOT NULL | Destinataire |
| subject | VARCHAR(100) | NOT NULL | Objet du message |
| body | TEXT | NULL | Corps du message |
| attached_yrds | INT | DEFAULT 0 | Yrds joints |
| attached_item_id | VARCHAR(30) | FK → T_ITEMS_DICT, NULL | Item joint |
| attached_item_qty | INT | DEFAULT 0 | Quantité de l'item joint |
| status | ENUM('unread','read','claimed','expired') | DEFAULT 'unread' | État |
| sent_at | TIMESTAMP | DEFAULT NOW() | Date d'envoi |
| expires_at | TIMESTAMP | NULL | Date d'expiration (30 jours par défaut) |
