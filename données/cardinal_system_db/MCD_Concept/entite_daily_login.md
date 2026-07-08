# Entité : Récompense Quotidienne (Daily Login Reward)

## Définition Conceptuelle
Chaque jour, le premier `!link_start` ou `!ping` d'un joueur déclenche une récompense quotidienne. Les récompenses s'améliorent avec les jours consécutifs de connexion (streak).

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| daily_id | UUID | PK | Identifiant unique |
| avatar_id | UUID | FK → T_AVATARS, NOT NULL | Joueur concerné |
| login_date | DATE | NOT NULL | Date de connexion |
| streak_count | INT | DEFAULT 1 | Nombre de jours consécutifs |
| reward_yrds | INT | NOT NULL | Yrds octroyés |
| reward_item_id | VARCHAR(30) | FK → T_ITEMS_DICT, NULL | Item bonus (à partir du 7e jour) |
| reward_exp | INT | DEFAULT 0 | EXP bonus |
| claimed_at | TIMESTAMP | DEFAULT NOW() | Heure de réclamation |
