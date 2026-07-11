-- ============================================================================
-- SEED CARDINAL — ALfheim Online (PostgreSQL)
-- Données structurelles extraites des fichiers MLD
-- ============================================================================
-- NOTES :
--   Les données de contenu (items, PNJ, mobs, quêtes, compétences, boutiques)
--   sont dans ~3 289 fichiers markdown à convertir programmatiquement.
--   Ce seed couvre les données explicitement définies dans les MLD + seed
--   structurel minimal.
-- ============================================================================

BEGIN;

-- ============================================================================
-- 1. T_RACES — 9 races jouables (source : table_t_races.md)
-- ============================================================================
INSERT INTO T_RACES (race_id, name, element_affinity, bonus_hp, bonus_mp, bonus_str, bonus_agi, bonus_vit, bonus_int, bonus_dex, flight_modifier, racial_passive, racial_weakness, lore_description) VALUES
('RACE_SYLPH',       'Sylphe',       'Vent',    0, 200, -5, 30, -10, 10, 10, 1.3, 'Vol Rapide (+30% vitesse vol)',                        'Faible DEF physique',        'Race du vent, nés dans les cieux de Swilvane.'),
('RACE_SALAMANDER',  'Salamandre',   'Feu',   200,   0, 30, -5, 20, -10,  5, 0.9, 'Résistance Feu (+30%)',                                 'Vulnérable à Eau',            'Race du feu, fiers guerriers de Gattan et Voulg.'),
('RACE_UNDINE',      'Undine',       'Eau',     0, 300,-10,  0,  0, 30, 10, 1.0, 'Magie de Guérison (+50% efficacité soins)',             'Vulnérable à Foudre',         'Race de l''eau, guérisseurs de l''Archipel d''Écume.'),
('RACE_CAIT_SITH',   'Cait Sith',    'Neutre',  0, 100,  0, 20,  0,  0, 20, 1.0, 'Beast Taming (+30% capture)',                            'Aucune affinité élémentaire', 'Race des bêtes, protecteurs de Freelia.'),
('RACE_IMP',         'Imp',          'Ténèbres',-200, 200,-10, 15,-10, 25,  5, 1.0, 'Vision Nocturne + Vol de Nuit',                          'HP réduits',                  'Race des ombres, habitants de Duskarn.'),
('RACE_GNOME',       'Gnome',        'Terre',  300,-100, 25,-15, 30,-10, 10, 0.7, 'Résistance Terre (+30%)',                                'Vol lent (-30%)',             'Race de terre, mineurs de Granzam.'),
('RACE_PUCA',        'Puca',         'Neutre',  0, 250,-15, 10, -5, 20, 15, 1.0, 'Magie Musicale (mélodies de buff)',                      'Faible en mêlée',             'Race de musique, ménestrels de Lioda.'),
('RACE_SPRIGGAN',    'Spriggan',     'Ténèbres',0, 150, 10, 15,  0, 15, 15, 1.0, 'Magie Illusoire + Détection Trésors',                    'Aucune spécialisation forte', 'Race des illusions, maîtres de Penwether.'),
('RACE_LEPRECHAUN',  'Leprechaun',   'Neutre',100,   0, 15,  0, 15, 10, 25, 0.9, 'Artisanat Expert (+30% qualité forge)',                  'Vol légèrement lent',         'Race des forgerons, artisans de Brokkheim.');

-- ============================================================================
-- 2. T_ZONES — Capitales raciales + zones de départ (seed minimal)
-- ============================================================================
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, territory_race, is_safe_zone, min_level, max_level) VALUES
('ZONE_NEU_CAP_001', 'Alne — Capitale Neutre',           'CAP', NULL,   TRUE,  1,  50),
('ZONE_SYL_CAP_001', 'Swilvane — Cité des Sylphes',      'CAP', 'RACE_SYLPH',      TRUE,  1,  30),
('ZONE_SAL_CAP_001', 'Gattan — Capitale Salamander',     'CAP', 'RACE_SALAMANDER', TRUE,  1,  35),
('ZONE_SAL_TWN_001', 'Voulg — Avant-Poste Salamander',   'TWN', 'RACE_SALAMANDER', TRUE,  5,  45),
('ZONE_CAI_CAP_001', 'Freelia — Cité des Cait Sith',    'CAP', 'RACE_CAIT_SITH',   TRUE,  1,  30),
('ZONE_UND_CAP_001', 'Archipel d''Écume — Cité des Undines','CAP','RACE_UNDINE',    TRUE,  1,  30),
('ZONE_PUC_CAP_001', 'Lioda — Cité des Pucas',           'CAP', 'RACE_PUCA',        TRUE,  1,  30),
('ZONE_IMP_CAP_001', 'Duskarn — Cité des Imps',          'CAP', 'RACE_IMP',         TRUE,  1,  30),
('ZONE_GNO_CAP_001', 'Granzam — Cité des Gnomes',        'CAP', 'RACE_GNOME',       TRUE,  1,  30),
('ZONE_LEP_CAP_001', 'Brokkheim — Cité des Leprechauns', 'CAP', 'RACE_LEPRECHAUN',  TRUE,  1,  30),
('ZONE_SPR_CAP_001', 'Penwether — Cité des Spriggans',   'CAP', 'RACE_SPRIGGAN',    TRUE,  1,  30);

-- Zones de chasse de départ (toutes races)
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, territory_race, min_level, max_level, flight_allowed) VALUES
('ZONE_SYL_HUNT_001', 'Clairière des Sylphes',    'HUNT', 'RACE_SYLPH',      1, 15, TRUE),
('ZONE_SYL_HUNT_002', 'Forêt des Murmures',       'HUNT', 'RACE_SYLPH',     10, 25, TRUE),
('ZONE_SYL_DUN_001',  'Grotte des Échos',         'DUN',  'RACE_SYLPH',     20, 35, TRUE),
('ZONE_SAL_HUNT_001', 'Plaines de Lave',          'HUNT', 'RACE_SALAMANDER', 1, 15, TRUE),
('ZONE_SAL_HUNT_002', 'Désert de Braises',        'HUNT', 'RACE_SALAMANDER',10, 25, TRUE),
('ZONE_SAL_DUN_001',  'Cavernes Magmatiques',     'DUN',  'RACE_SALAMANDER',20, 35, TRUE),
('ZONE_CAI_HUNT_001', 'Collines Verdoyantes',     'HUNT', 'RACE_CAIT_SITH', 1, 15, TRUE),
('ZONE_CAI_HUNT_002', 'Forêt de Chasse',          'HUNT', 'RACE_CAIT_SITH',10, 25, TRUE),
('ZONE_CAI_DUN_001',  'Repaire Félin',            'DUN',  'RACE_CAIT_SITH',20, 35, TRUE),
('ZONE_UND_HUNT_001', 'Rivages d''Écume',         'HUNT', 'RACE_UNDINE',    1, 15, TRUE),
('ZONE_UND_HUNT_002', 'Abysses Coralliens',       'HUNT', 'RACE_UNDINE',   10, 25, TRUE),
('ZONE_UND_DUN_001',  'Grotte des Marées',        'DUN',  'RACE_UNDINE',   20, 35, TRUE),
('ZONE_PUC_HUNT_001', 'Prairies Mélodieuses',     'HUNT', 'RACE_PUCA',      1, 15, TRUE),
('ZONE_PUC_HUNT_002', 'Bois des Ménestrels',      'HUNT', 'RACE_PUCA',     10, 25, TRUE),
('ZONE_PUC_DUN_001',  'Grotte aux Échos',         'DUN',  'RACE_PUCA',     20, 35, TRUE),
('ZONE_IMP_HUNT_001', 'Terres Brûlées',           'HUNT', 'RACE_IMP',       1, 15, TRUE),
('ZONE_IMP_HUNT_002', 'Plaines des Ombres',       'HUNT', 'RACE_IMP',      10, 25, TRUE),
('ZONE_IMP_DUN_001',  'Antre des Ténèbres',       'DUN',  'RACE_IMP',      20, 35, TRUE),
('ZONE_GNO_HUNT_001', 'Collines Rocheuses',       'HUNT', 'RACE_GNOME',     1, 15, TRUE),
('ZONE_GNO_HUNT_002', 'Grottes Cristallines',     'HUNT', 'RACE_GNOME',    10, 25, TRUE),
('ZONE_GNO_DUN_001',  'Mines Abandonnées',        'DUN',  'RACE_GNOME',    20, 35, TRUE),
('ZONE_LEP_HUNT_001', 'Plaines de Brokkheim',     'HUNT', 'RACE_LEPRECHAUN',1, 15, TRUE),
('ZONE_LEP_HUNT_002', 'Forge Sauvage',            'HUNT', 'RACE_LEPRECHAUN',10, 25, TRUE),
('ZONE_LEP_DUN_001',  'Atelier Souterrain',       'DUN',  'RACE_LEPRECHAUN',20, 35, TRUE),
('ZONE_SPR_HUNT_001', 'Forêt des Illusions',      'HUNT', 'RACE_SPRIGGAN',  1, 15, TRUE),
('ZONE_SPR_HUNT_002', 'Clairière des Songes',     'HUNT', 'RACE_SPRIGGAN', 10, 25, TRUE),
('ZONE_SPR_DUN_001',  'Labyrinthe des Ombres',    'DUN',  'RACE_SPRIGGAN', 20, 35, TRUE);

-- Zones spéciales
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, min_level, max_level) VALUES
('ZONE_YGG_DUN_001',  'Yggdrasil — Tronc',      'DUN',  50, 80),
('ZONE_YGG_TOP_001',  'Yggdrasil — Cime',       'TOP',  80, 100),
('ZONE_JOT_FLD_001',  'Jotunheimr — Plaines',   'FLD',  60, 90),
('ZONE_JOT_RAID_001', 'Jotunheimr — Repaire',   'RAID', 85, 100),
('ZONE_AIN_HUB_001',  'Aincrad — Hub',          'HUB',  1,  100);

-- Routes neutres
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, flight_allowed) VALUES
('ZONE_ROUTE_SYL_ALN', 'Route Swilvane-Alne',   'ROUTE', TRUE),
('ZONE_ROUTE_SAL_ALN', 'Route Gattan-Alne',     'ROUTE', TRUE),
('ZONE_ROUTE_CAI_ALN', 'Route Freelia-Alne',    'ROUTE', TRUE),
('ZONE_ROUTE_UND_ALN', 'Route Archipel-Alne',   'ROUTE', TRUE),
('ZONE_ROUTE_PUC_ALN', 'Route Lioda-Alne',      'ROUTE', TRUE),
('ZONE_ROUTE_IMP_ALN', 'Route Duskarn-Alne',    'ROUTE', TRUE),
('ZONE_ROUTE_GNO_ALN', 'Route Granzam-Alne',    'ROUTE', TRUE),
('ZONE_ROUTE_LEP_ALN', 'Route Brokkheim-Alne',  'ROUTE', TRUE),
('ZONE_ROUTE_SPR_ALN', 'Route Penwether-Alne',  'ROUTE', TRUE);

-- Mise à jour des capitales dans T_RACES
UPDATE T_RACES SET capital_zone_id = 'ZONE_SYL_CAP_001' WHERE race_id = 'RACE_SYLPH';
UPDATE T_RACES SET capital_zone_id = 'ZONE_SAL_CAP_001' WHERE race_id = 'RACE_SALAMANDER';
UPDATE T_RACES SET capital_zone_id = 'ZONE_UND_CAP_001' WHERE race_id = 'RACE_UNDINE';
UPDATE T_RACES SET capital_zone_id = 'ZONE_CAI_CAP_001' WHERE race_id = 'RACE_CAIT_SITH';
UPDATE T_RACES SET capital_zone_id = 'ZONE_IMP_CAP_001' WHERE race_id = 'RACE_IMP';
UPDATE T_RACES SET capital_zone_id = 'ZONE_GNO_CAP_001' WHERE race_id = 'RACE_GNOME';
UPDATE T_RACES SET capital_zone_id = 'ZONE_PUC_CAP_001' WHERE race_id = 'RACE_PUCA';
UPDATE T_RACES SET capital_zone_id = 'ZONE_SPR_CAP_001' WHERE race_id = 'RACE_SPRIGGAN';
UPDATE T_RACES SET capital_zone_id = 'ZONE_LEP_CAP_001' WHERE race_id = 'RACE_LEPRECHAUN';

-- ============================================================================
-- 3. T_ZONE_LINKS — 80 liaisons initiales (source : table_t_zone_links.md)
-- ============================================================================
-- Chaque territoire racial <SEC> : 7 liaisons
-- Pattern : CAP↔HUNT_001 (WALK), CAP↔HUNT_002 (FLY), CAP↔DUN_001 (FLY),
--           CAP↔ROUTE_<SEC>_ALN (FLY), HUNT_001↔HUNT_002 (WALK),
--           HUNT_002↔DUN_001 (WALK), ROUTE_<SEC>_ALN↔NEU_CAP_001 (FLY)

-- Sylphe
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_SYL_CAP_001','ZONE_SYL_HUNT_001','WALK',0,2,FALSE),
('ZONE_SYL_CAP_001','ZONE_SYL_HUNT_002','FLY',30,5,TRUE),
('ZONE_SYL_CAP_001','ZONE_SYL_DUN_001','FLY',50,8,TRUE),
('ZONE_SYL_CAP_001','ZONE_ROUTE_SYL_ALN','FLY',100,15,TRUE),
('ZONE_SYL_HUNT_001','ZONE_SYL_HUNT_002','WALK',0,6,FALSE),
('ZONE_SYL_HUNT_002','ZONE_SYL_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_SYL_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Salamander (avec exception Voulg)
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_SAL_CAP_001','ZONE_SAL_TWN_001','WALK',0,4,FALSE),
('ZONE_SAL_TWN_001','ZONE_SAL_HUNT_001','WALK',0,5,FALSE),
('ZONE_SAL_CAP_001','ZONE_SAL_HUNT_002','FLY',30,5,TRUE),
('ZONE_SAL_CAP_001','ZONE_SAL_DUN_001','FLY',50,8,TRUE),
('ZONE_SAL_CAP_001','ZONE_ROUTE_SAL_ALN','FLY',100,15,TRUE),
('ZONE_SAL_HUNT_001','ZONE_SAL_HUNT_002','WALK',0,6,FALSE),
('ZONE_SAL_HUNT_002','ZONE_SAL_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_SAL_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Cait Sith
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_CAI_CAP_001','ZONE_CAI_HUNT_001','WALK',0,2,FALSE),
('ZONE_CAI_CAP_001','ZONE_CAI_HUNT_002','FLY',30,5,TRUE),
('ZONE_CAI_CAP_001','ZONE_CAI_DUN_001','FLY',50,8,TRUE),
('ZONE_CAI_CAP_001','ZONE_ROUTE_CAI_ALN','FLY',100,15,TRUE),
('ZONE_CAI_HUNT_001','ZONE_CAI_HUNT_002','WALK',0,6,FALSE),
('ZONE_CAI_HUNT_002','ZONE_CAI_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_CAI_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Undine
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_UND_CAP_001','ZONE_UND_HUNT_001','WALK',0,2,FALSE),
('ZONE_UND_CAP_001','ZONE_UND_HUNT_002','FLY',30,5,TRUE),
('ZONE_UND_CAP_001','ZONE_UND_DUN_001','FLY',50,8,TRUE),
('ZONE_UND_CAP_001','ZONE_ROUTE_UND_ALN','FLY',100,15,TRUE),
('ZONE_UND_HUNT_001','ZONE_UND_HUNT_002','WALK',0,6,FALSE),
('ZONE_UND_HUNT_002','ZONE_UND_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_UND_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Puca
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_PUC_CAP_001','ZONE_PUC_HUNT_001','WALK',0,2,FALSE),
('ZONE_PUC_CAP_001','ZONE_PUC_HUNT_002','FLY',30,5,TRUE),
('ZONE_PUC_CAP_001','ZONE_PUC_DUN_001','FLY',50,8,TRUE),
('ZONE_PUC_CAP_001','ZONE_ROUTE_PUC_ALN','FLY',100,15,TRUE),
('ZONE_PUC_HUNT_001','ZONE_PUC_HUNT_002','WALK',0,6,FALSE),
('ZONE_PUC_HUNT_002','ZONE_PUC_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_PUC_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Imp
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_IMP_CAP_001','ZONE_IMP_HUNT_001','WALK',0,2,FALSE),
('ZONE_IMP_CAP_001','ZONE_IMP_HUNT_002','FLY',30,5,TRUE),
('ZONE_IMP_CAP_001','ZONE_IMP_DUN_001','FLY',50,8,TRUE),
('ZONE_IMP_CAP_001','ZONE_ROUTE_IMP_ALN','FLY',100,15,TRUE),
('ZONE_IMP_HUNT_001','ZONE_IMP_HUNT_002','WALK',0,6,FALSE),
('ZONE_IMP_HUNT_002','ZONE_IMP_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_IMP_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Gnome
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_GNO_CAP_001','ZONE_GNO_HUNT_001','WALK',0,2,FALSE),
('ZONE_GNO_CAP_001','ZONE_GNO_HUNT_002','FLY',30,5,TRUE),
('ZONE_GNO_CAP_001','ZONE_GNO_DUN_001','FLY',50,8,TRUE),
('ZONE_GNO_CAP_001','ZONE_ROUTE_GNO_ALN','FLY',100,15,TRUE),
('ZONE_GNO_HUNT_001','ZONE_GNO_HUNT_002','WALK',0,6,FALSE),
('ZONE_GNO_HUNT_002','ZONE_GNO_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_GNO_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Leprechaun
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_LEP_CAP_001','ZONE_LEP_HUNT_001','WALK',0,2,FALSE),
('ZONE_LEP_CAP_001','ZONE_LEP_HUNT_002','FLY',30,5,TRUE),
('ZONE_LEP_CAP_001','ZONE_LEP_DUN_001','FLY',50,8,TRUE),
('ZONE_LEP_CAP_001','ZONE_ROUTE_LEP_ALN','FLY',100,15,TRUE),
('ZONE_LEP_HUNT_001','ZONE_LEP_HUNT_002','WALK',0,6,FALSE),
('ZONE_LEP_HUNT_002','ZONE_LEP_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_LEP_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Spriggan
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_SPR_CAP_001','ZONE_SPR_HUNT_001','WALK',0,2,FALSE),
('ZONE_SPR_CAP_001','ZONE_SPR_HUNT_002','FLY',30,5,TRUE),
('ZONE_SPR_CAP_001','ZONE_SPR_DUN_001','FLY',50,8,TRUE),
('ZONE_SPR_CAP_001','ZONE_ROUTE_SPR_ALN','FLY',100,15,TRUE),
('ZONE_SPR_HUNT_001','ZONE_SPR_HUNT_002','WALK',0,6,FALSE),
('ZONE_SPR_HUNT_002','ZONE_SPR_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_SPR_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);

-- Anneau frontalier (9 liaisons — cerclage du continent)
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, lore_status) VALUES
('ZONE_SAL_HUNT_002','ZONE_SYL_HUNT_002','WALK',0,12,'Frontière Salamander-Sylphe — Tension historique'),
('ZONE_SYL_HUNT_002','ZONE_CAI_HUNT_002','WALK',0,12,'Frontière Sylphe-Cait Sith — Alliance'),
('ZONE_CAI_HUNT_002','ZONE_PUC_HUNT_002','WALK',0,12,'Frontière Cait Sith-Puca — Neutre'),
('ZONE_PUC_HUNT_002','ZONE_UND_HUNT_002','WALK',0,12,'Frontière Puca-Undine — Neutre'),
('ZONE_UND_HUNT_002','ZONE_LEP_HUNT_002','WALK',0,12,'Frontière Undine-Leprechaun — Neutre'),
('ZONE_LEP_HUNT_002','ZONE_IMP_HUNT_002','WALK',0,12,'Frontière Leprechaun-Imp — Neutre'),
('ZONE_IMP_HUNT_002','ZONE_SPR_HUNT_002','WALK',0,12,'Frontière Imp-Spriggan — Tension'),
('ZONE_SPR_HUNT_002','ZONE_GNO_HUNT_002','WALK',0,12,'Frontière Spriggan-Gnome — Neutre'),
('ZONE_GNO_HUNT_002','ZONE_SAL_HUNT_002','WALK',0,12,'Frontière Gnome-Salamander — Alliance');

-- Axe central (Yggdrasil + Jotunheimr + Aincrad)
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min) VALUES
('ZONE_NEU_CAP_001','ZONE_YGG_DUN_001','FLY',50,10),
('ZONE_YGG_DUN_001','ZONE_YGG_TOP_001','FLY',100,20),
('ZONE_NEU_CAP_001','ZONE_JOT_FLD_001','UNDERGROUND',100,30),
('ZONE_JOT_FLD_001','ZONE_JOT_RAID_001','WALK',0,15),
('ZONE_NEU_CAP_001','ZONE_AIN_HUB_001','FLY',200,45);

-- ============================================================================
-- 4. T_DAILY_CALENDAR — Récompenses journalières (source : table_t_daily_rewards.md)
-- ============================================================================
INSERT INTO T_DAILY_CALENDAR (day_number, reward_yrds, reward_item, reward_exp) VALUES
(1, 100, NULL, 50),
(2, 150, NULL, 75),
(3, 200, NULL, 100),
(4, 300, NULL, 150),
(5, 500, NULL, 200),
(6, 750, NULL, 300),
(7, 1000, 'CSM_POT_HP_B', 500),
(14, 2500, 'CSM_POT_HP_A', 1000),
(21, 5000, 'ITEM_CRYSTAL_TELEPORT', 2000),
(28, 10000, 'ITEM_CRYSTAL_CORRIDOR', 5000),
(30, 25000, 'CSM_POT_HP_S', 10000);

-- ============================================================================
-- 5. T_TITLES — Titres de base (source : table_t_achievements.md + table_t_titles.md)
-- ============================================================================
INSERT INTO T_TITLES (title_id, name, description, rarity, unlock_type, is_permanent) VALUES
('TITLE_BEGINNER',    'Novice',       'Premier pas dans ALfheim Online',                     'common',    'auto', TRUE),
('TITLE_LVL_10',      'Aventurier',   'Atteindre le niveau 10',                              'common',    'level', TRUE),
('TITLE_LVL_25',      'Explorateur',  'Atteindre le niveau 25',                              'uncommon',  'level', TRUE),
('TITLE_LVL_50',      'Vétéran',      'Atteindre le niveau 50',                              'rare',      'level', TRUE),
('TITLE_LVL_75',      'Élite',        'Atteindre le niveau 75',                              'epic',      'level', TRUE),
('TITLE_LVL_100',     'Légende',      'Atteindre le niveau 100',                             'legendary', 'level', TRUE),
('TITLE_PK_10',       'Chasseur',     '10 victoires PvP',                                    'uncommon',  'pvp', TRUE),
('TITLE_PK_50',       'Guerrier',     '50 victoires PvP',                                    'rare',      'pvp', TRUE),
('TITLE_PK_100',      'Conquérant',   '100 victoires PvP',                                   'epic',      'pvp', TRUE),
('TITLE_QUEST_10',    'Mercenaire',   '10 quêtes accomplies',                                'common',    'quest', TRUE),
('TITLE_QUEST_50',    'Héros',        '50 quêtes accomplies',                                'rare',      'quest', TRUE),
('TITLE_QUEST_100',   'Légende Vivante', '100 quêtes accomplies',                            'epic',      'quest', TRUE),
('TITLE_CRAFT_10',    'Apprenti',     '10 crafts réussis',                                   'common',    'craft', TRUE),
('TITLE_CRAFT_50',    'Artisan',      '50 crafts réussis',                                   'uncommon',  'craft', TRUE),
('TITLE_CRAFT_100',   'Maître Artisan','100 crafts réussis',                                 'rare',      'craft', TRUE),
('TITLE_SPECIAL_1',   'Gardien',      'Avoir sauvé un autre joueur en Remain Light',          'rare',      'special', TRUE),
('TITLE_SPECIAL_2',   'Élu des Étoiles','Avoir complété la quête légendaire du Corridor','legendary', 'quest', TRUE),
('TITLE_LEG_GRAM',    'Porteur de Gram',   'Digne de manier l''épée légendaire Gram',       'legendary', 'quest', FALSE),
('TITLE_LEG_EXCALIBUR','Chevalier d''Excalibur','Digne de manier l''épée sacrée Excalibur','legendary', 'quest', FALSE),
('TITLE_LEG_CALIBUR', 'Héros de Calibur',   'Digne de manier l''épée Calibur',              'legendary', 'quest', FALSE),
('TITLE_LEG_CREST',   'Porteur du Crest',   'Digne de manier le Crest',                      'legendary', 'quest', FALSE);

-- ============================================================================
-- 6. T_STATUS_EFFECTS_DICT — Effets de base
-- ============================================================================
INSERT INTO T_STATUS_EFFECTS_DICT (effect_id, name, type, stat_modified, modifier_value, modifier_type, duration_sec, is_dispellable, max_stacks) VALUES
('EFF_BURN',      'Brûlure',      'debuff',  'hp_current',   5,   'flat',      15, TRUE, 3),
('EFF_POISON',    'Poison',       'debuff',  'hp_current',   8,   'flat',      30, TRUE, 5),
('EFF_FREEZE',    'Gel',          'debuff',  'stat_agi',    50,   'percent',   10, TRUE, 1),
('EFF_STUN',      'Étourdissement','debuff', 'stat_agi',   100,   'percent',    3, TRUE, 1),
('EFF_SLOW',      'Lenteur',      'debuff',  'stat_agi',    30,   'percent',   10, TRUE, 2),
('EFF_HASTE',     'Célérité',     'buff',    'stat_agi',    30,   'percent',   15, TRUE, 2),
('EFF_STR_UP',    'Force +',       'buff',   'stat_str',    20,   'percent',   30, TRUE, 2),
('EFF_DEF_UP',    'Défense +',     'buff',   'stat_vit',    20,   'percent',   30, TRUE, 2),
('EFF_INT_UP',    'Intelligence +','buff',   'stat_int',    20,   'percent',   30, TRUE, 2),
('EFF_REGENERATE','Régénération',  'buff',   'hp_current',  15,   'flat',      20, TRUE, 3),
('EFF_INVISIBLE',  'Invisibilité', 'buff',   NULL,           0,   'flat',      60, TRUE, 1),
('EFF_BLIND',     'Cécité',        'debuff', NULL,           0,   'flat',      10, TRUE, 1),
('EFF_SILENCE',   'Silence',       'debuff', NULL,           0,   'flat',      10, TRUE, 1),
('EFF_FEAR',      'Peur',          'debuff', 'stat_agi',    50,   'percent',    8, TRUE, 1),
('EFF_PROTECT',   'Protection',    'buff',   'stat_vit',    50,   'percent',   20, TRUE, 1);

-- ============================================================================
-- 7. T_ACHIEVEMENTS_DICT — Succès de base
-- ============================================================================
INSERT INTO T_ACHIEVEMENTS_DICT (achievement_id, name, description, category, condition_type, condition_value, reward_title_id, reward_yrds, reward_exp, rarity, is_hidden) VALUES
('ACHV_BEGINNER',      'Bienvenue en ALO',    'Créer son avatar',                   'general',   'create_avatar',  1, 'TITLE_BEGINNER', 100, 0, 'common', FALSE),
('ACHV_LVL_10',        'Premier palier',       'Atteindre le niveau 10',             'level',     'reach_level',   10, 'TITLE_LVL_10',  500, 500, 'common', FALSE),
('ACHV_LVL_25',        'Militaire confirmé',   'Atteindre le niveau 25',             'level',     'reach_level',   25, 'TITLE_LVL_25', 1500, 1500, 'uncommon', FALSE),
('ACHV_LVL_50',        'Vétéran d''ALO',       'Atteindre le niveau 50',             'level',     'reach_level',   50, 'TITLE_LVL_50', 5000, 5000, 'rare', FALSE),
('ACHV_LVL_75',        'Élite d''ALO',         'Atteindre le niveau 75',             'level',     'reach_level',   75, 'TITLE_LVL_75', 10000, 10000, 'epic', FALSE),
('ACHV_LVL_100',       'Légende d''ALfheim',   'Atteindre le niveau 100',            'level',     'reach_level',  100, 'TITLE_LVL_100', 50000, 50000, 'legendary', FALSE),
('ACHV_QUEST_10',      'Mercenaire',           '10 quêtes accomplies',               'quest',     'complete_quest',10, 'TITLE_QUEST_10', 1000, 1000, 'common', FALSE),
('ACHV_QUEST_50',      'Héros du peuple',      '50 quêtes accomplies',               'quest',     'complete_quest',50, 'TITLE_QUEST_50', 5000, 5000, 'rare', FALSE),
('ACHV_QUEST_100',     'Légende Vivante',      '100 quêtes accomplies',              'quest',     'complete_quest',100,'TITLE_QUEST_100', 15000, 15000, 'epic', FALSE),
('ACHV_CRAFT_10',      'Apprenti artisan',     '10 crafts réussis',                  'craft',     'craft_item',    10, 'TITLE_CRAFT_10', 500, 500, 'common', FALSE),
('ACHV_CRAFT_50',      'Artisan',              '50 crafts réussis',                  'craft',     'craft_item',    50, 'TITLE_CRAFT_50', 2500, 2500, 'uncommon', FALSE),
('ACHV_CRAFT_100',     'Maître Artisan',       '100 crafts réussis',                 'craft',     'craft_item',   100, 'TITLE_CRAFT_100', 7500, 7500, 'rare', FALSE),
('ACHV_PK_10',         'Premier sang',         '10 victoires PvP',                   'pvp',       'pvp_win',       10, 'TITLE_PK_10', 2000, 2000, 'uncommon', FALSE),
('ACHV_PK_50',         'Guerrier impitoyable', '50 victoires PvP',                   'pvp',       'pvp_win',       50, 'TITLE_PK_50', 7500, 7500, 'rare', FALSE),
('ACHV_PK_100',        'Conquérant',           '100 victoires PvP',                  'pvp',       'pvp_win',      100, 'TITLE_PK_100', 20000, 20000, 'epic', FALSE),
('ACHV_RESCUE',        'Gardien',              'Sauver un joueur en Remain Light',   'social',    'rescue_player',  1, 'TITLE_SPECIAL_1', 5000, 5000, 'rare', FALSE);

COMMIT;
