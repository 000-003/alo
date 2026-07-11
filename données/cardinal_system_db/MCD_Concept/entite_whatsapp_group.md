# Entité : Groupe WhatsApp (Territory Mapping)

## Définition Conceptuelle (amendée D76, étape 48)
Chaque **territoire** du monde d'ALfheim (13 territoires couvrant les 52 zones — registre maître : atlas §2-bis) est associé à un groupe WhatsApp réel géré par le bot. Cette entité est la clé de voûte de l'architecture physique du jeu : **1 Territoire = 1 Groupe WhatsApp** (contrainte réelle : ~100 groupes max par communauté). Un groupe `location` est ancré sur la **zone d'ancrage** de son territoire via `zone_id` ; la position exacte du joueur est l'état L1 `T_AVATARS.current_zone_id`, jamais l'appartenance de groupe. Lorsqu'un joueur franchit une frontière de territoire, il quitte automatiquement tous les autres groupes de type `location` (`sync_player_groups()`) ; un déplacement intra-territorial ne touche pas aux groupes.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| wa_group_id | VARCHAR(50) | PK | ID réel du groupe WhatsApp (fourni par l'API Baileys) |
| zone_id | VARCHAR(30) | FK → T_ZONES, NULL | Zone d'ancrage du territoire pour les groupes `location` (atlas §2-bis) ; NULL si groupe système/social |
| group_type | ENUM('community_hub','location','dungeon_instance','private_party','housing','guild_hall','arena','system') | NOT NULL | Type de groupe |
| group_name | VARCHAR(100) | NOT NULL | Nom affiché du groupe WhatsApp |
| group_description | TEXT | NULL | Description affichée dans les infos du groupe |
| max_participants | INT | DEFAULT 256 | Capacité maximale |
| current_participants | INT | DEFAULT 0 | Nombre actuel de membres |
| is_active | BOOLEAN | DEFAULT TRUE | Si le groupe est actif |
| is_ephemeral | BOOLEAN | DEFAULT FALSE | Si TRUE, sera supprimé après utilisation (instances de donjon) |
| created_at | TIMESTAMP | DEFAULT NOW() | Date de création |

## RÈGLE CRITIQUE : Protocole d'Exclusion Mutuelle (v2, D76)
Lorsqu'un joueur exécute `!enter_zone [Zone]` :
1. Le backend vérifie que le joueur n'est PAS en combat (T_COMBAT_SESSIONS.status != 'active')
2. Le champ `current_zone_id` de T_AVATARS est mis à jour (écriture L1 — source de vérité de la position)
3. Le backend détermine le territoire de la zone cible (atlas §2-bis)
4. Si le territoire change : le bot API retire le joueur de TOUS les groupes `location` non autorisés et l'ajoute au groupe du territoire cible (`sync_player_groups()`, idempotente)
5. Si le territoire est inchangé : aucun mouvement de groupe (la narration d'arrivée est postée dans le groupe courant)
6. Les groupes `community_hub` (4 communauté + 9 raciaux) ne sont JAMAIS quittés

## Relations
- WA_Group (0,1) → Zone : Un groupe peut être lié à une zone (ou être un groupe système)
- WA_Group (0,n) → Avatar : Un groupe contient 0 à n joueurs
