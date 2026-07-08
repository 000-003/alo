# Entité : Personnage Non-Joueur (NPC)

## Définition Conceptuelle
Un PNJ est une entité contrôlée par le Système Cardinal avec un comportement, un inventaire, une affinité variable envers chaque joueur, et des dialogues dynamiques générés par l'IA.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| npc_id | VARCHAR(30) | PK | Ex: `NPC_SHOP_SYL`, `NPC_CANON_KIRITO` |
| name | VARCHAR(100) | NOT NULL | Nom complet |
| race | VARCHAR(20) | FK → T_RACES, NULL | Race du PNJ |
| role | ENUM('merchant','guard','quest_giver','lord','boss_npc','trainer','lore_keeper','canonical') | NOT NULL | Fonction |
| zone_id | VARCHAR(30) | FK → T_ZONES, NOT NULL | Zone de résidence |
| level | INT | DEFAULT 1 | Niveau de puissance |
| hp | INT | NOT NULL | Points de vie |
| is_killable | BOOLEAN | DEFAULT FALSE | Si TRUE, le PNJ peut être tué (conséquences graves) |
| is_movable | BOOLEAN | DEFAULT TRUE | Si TRUE, le SYS_ peut le déplacer |
| inventory | JSON | NULL | Items en vente ou en possession |
| base_dialogue | TEXT | NULL | Dialogue par défaut |
| secret | TEXT | NULL | Secret narratif (révélé par l'IA si affinité haute) |
| respawn_time_hours | INT | NULL | Temps de respawn si tué (NULL = pas de respawn) |
| bounty | INT | DEFAULT 0 | Prime pour l'avoir vaincu |

## Relations
- NPC (1,1) → Zone : Réside dans exactement une zone
- NPC (0,n) → Affinité Joueur : Via table T_NPC_AFFINITY
