# Entité : Groupe WhatsApp (Zone Mapping)

## Définition Conceptuelle
Chaque lieu du monde d'ALfheim est associé à un groupe WhatsApp réel géré par le bot. Cette entité est la clé de voûte de l'architecture physique du jeu : **1 Lieu = 1 Groupe WhatsApp**. Lorsqu'un joueur entre dans une zone, il quitte automatiquement tous les autres groupes de type `location`.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| wa_group_id | VARCHAR(50) | PK | ID réel du groupe WhatsApp (fourni par l'API Baileys) |
| zone_id | VARCHAR(30) | FK → T_ZONES, NULL | Zone associée (NULL si c'est un groupe système) |
| group_type | ENUM('community_hub','location','dungeon_instance','private_party','housing','guild_hall','arena','system') | NOT NULL | Type de groupe |
| group_name | VARCHAR(100) | NOT NULL | Nom affiché du groupe WhatsApp |
| group_description | TEXT | NULL | Description affichée dans les infos du groupe |
| max_participants | INT | DEFAULT 256 | Capacité maximale |
| current_participants | INT | DEFAULT 0 | Nombre actuel de membres |
| is_active | BOOLEAN | DEFAULT TRUE | Si le groupe est actif |
| is_ephemeral | BOOLEAN | DEFAULT FALSE | Si TRUE, sera supprimé après utilisation (instances de donjon) |
| created_at | TIMESTAMP | DEFAULT NOW() | Date de création |

## RÈGLE CRITIQUE : Protocole d'Exclusion Mutuelle
Lorsqu'un joueur exécute `!enter_zone [Zone]` :
1. Le backend vérifie que le joueur n'est PAS en combat (T_COMBAT_SESSIONS.status != 'active')
2. Le backend récupère TOUS les wa_group_id où le joueur est membre ET group_type = 'location'
3. Le bot API retire le joueur de TOUS ces groupes
4. Le bot API ajoute le joueur au nouveau groupe de la zone cible
5. Le champ `current_zone_id` de T_AVATARS est mis à jour
6. Le groupe `community_hub` n'est JAMAIS quitté

## Relations
- WA_Group (0,1) → Zone : Un groupe peut être lié à une zone (ou être un groupe système)
- WA_Group (0,n) → Avatar : Un groupe contient 0 à n joueurs
