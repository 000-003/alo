#!/bin/bash
# rebuild.sh — Réinitialise et peuple la base cardinal_alo
set -e
DB="cardinal_alo"

echo "=== Drop & Create ==="
sudo -S -u postgres psql -c "DROP DATABASE IF EXISTS $DB" > /dev/null
sudo -S -u postgres createdb $DB > /dev/null

echo "=== Schema ==="
psql -d $DB -f schema.sql > /dev/null

echo "=== Races + Calendar + Titles + Effects + Achievements ==="
psql -d $DB <<'SQL'
INSERT INTO T_RACES (race_id, name, element_affinity, bonus_hp, bonus_mp, bonus_str, bonus_agi, bonus_vit, bonus_int, bonus_dex, flight_modifier, racial_passive, racial_weakness, lore_description) VALUES
('RACE_SYLPH','Sylphe','Vent',0,200,-5,30,-10,10,10,1.3,'Vol Rapide (+30% vitesse vol)','Faible DEF physique','Race du vent.'),
('RACE_SALAMANDER','Salamandre','Feu',200,0,30,-5,20,-10,5,0.9,'Résistance Feu (+30%)','Vulnérable à Eau','Race du feu.'),
('RACE_UNDINE','Undine','Eau',0,300,-10,0,0,30,10,1.0,'Magie de Guérison (+50% soins)','Vulnérable à Foudre','Race de l''eau.'),
('RACE_CAIT_SITH','Cait Sith','Neutre',0,100,0,20,0,0,20,1.0,'Beast Taming (+30% capture)','Aucune affinité','Race des bêtes.'),
('RACE_IMP','Imp','Ténèbres',-200,200,-10,15,-10,25,5,1.0,'Vision Nocturne + Vol de Nuit','HP réduits','Race des ombres.'),
('RACE_GNOME','Gnome','Terre',300,-100,25,-15,30,-10,10,0.7,'Résistance Terre (+30%)','Vol lent (-30%)','Race de terre.'),
('RACE_PUCA','Puca','Neutre',0,250,-15,10,-5,20,15,1.0,'Magie Musicale (buff)','Faible en mêlée','Race de musique.'),
('RACE_SPRIGGAN','Spriggan','Ténèbres',0,150,10,15,0,15,15,1.0,'Magie Illusoire + Détection Trésors','Aucune spécialisation','Race des illusions.'),
('RACE_LEPRECHAUN','Leprechaun','Neutre',100,0,15,0,15,10,25,0.9,'Artisanat Expert (+30% forge)','Vol lent','Race des forgerons.');
INSERT INTO T_DAILY_CALENDAR (day_number, reward_yrds, reward_item, reward_exp) VALUES
(1,100,NULL,50),(2,150,NULL,75),(3,200,NULL,100),(4,300,NULL,150),(5,500,NULL,200),(6,750,NULL,300),
(7,1000,'CSM_POT_HP_B',500),(14,2500,'CSM_POT_HP_A',1000),(21,5000,'ITEM_CRYSTAL_TELEPORT',2000),(28,10000,'ITEM_CRYSTAL_CORRIDOR',5000),(30,25000,'CSM_POT_HP_S',10000);
INSERT INTO T_TITLES (title_id, name, description, rarity, stat_bonus, visual_effect, unlock_type, is_permanent, max_holders) VALUES
('TITLE_BEGINNER','Novice','Premier pas','common','{}',NULL,'auto',TRUE,0),
('TITLE_LVL_10','Aventurier','Niv.10','common','{}',NULL,'level',TRUE,0),
('TITLE_LVL_25','Explorateur','Niv.25','uncommon','{}',NULL,'level',TRUE,0),
('TITLE_LVL_50','Vétéran','Niv.50','rare','{}',NULL,'level',TRUE,0),
('TITLE_LVL_75','Élite','Niv.75','epic','{}',NULL,'level',TRUE,0),
('TITLE_LVL_100','Légende','Niv.100','legendary','{}',NULL,'level',TRUE,0),
('TITLE_PK_10','Chasseur','10 PvP','uncommon','{}',NULL,'pvp',TRUE,0),
('TITLE_PK_50','Guerrier','50 PvP','rare','{}',NULL,'pvp',TRUE,0),
('TITLE_PK_100','Conquérant','100 PvP','epic','{}',NULL,'pvp',TRUE,0),
('TITLE_QUEST_10','Mercenaire','10 quêtes','common','{}',NULL,'quest',TRUE,0),
('TITLE_QUEST_50','Héros','50 quêtes','rare','{}',NULL,'quest',TRUE,0),
('TITLE_QUEST_100','Légende Vivante','100 quêtes','epic','{}',NULL,'quest',TRUE,0),
('TITLE_CRAFT_10','Apprenti','10 crafts','common','{}',NULL,'craft',TRUE,0),
('TITLE_CRAFT_50','Artisan','50 crafts','uncommon','{}',NULL,'craft',TRUE,0),
('TITLE_CRAFT_100','Maître Artisan','100 crafts','rare','{}',NULL,'craft',TRUE,0),
('TITLE_SPECIAL_1','Gardien','Sauvetage','rare','{}',NULL,'special',TRUE,0),
('TITLE_SPECIAL_2','Élu des Étoiles','Corridor','legendary','{}',NULL,'quest',TRUE,0),
('TITLE_LEG_GRAM','Porteur de Gram','Gram','legendary','{}',NULL,'quest',FALSE,0),
('TITLE_LEG_EXCALIBUR','Chevalier d''Excalibur','Excalibur','legendary','{}',NULL,'quest',FALSE,0),
('TITLE_LEG_CALIBUR','Héros de Calibur','Calibur','legendary','{}',NULL,'quest',FALSE,0),
('TITLE_LEG_CREST','Porteur du Crest','Crest','legendary','{}',NULL,'quest',FALSE,0);
INSERT INTO T_STATUS_EFFECTS_DICT (effect_id, name, type, stat_modified, modifier_value, modifier_type, duration_sec, tick_damage, tick_interval, is_dispellable, max_stacks, icon_emoji) VALUES
('EFF_BURN','Brûlure','debuff','hp_current',5,'flat',15,0,0,TRUE,3,NULL),
('EFF_POISON','Poison','debuff','hp_current',8,'flat',30,0,0,TRUE,5,NULL),
('EFF_FREEZE','Gel','debuff','stat_agi',50,'percent',10,0,0,TRUE,1,NULL),
('EFF_STUN','Étourdissement','debuff','stat_agi',100,'percent',3,0,0,TRUE,1,NULL),
('EFF_SLOW','Lenteur','debuff','stat_agi',30,'percent',10,0,0,TRUE,2,NULL),
('EFF_HASTE','Célérité','buff','stat_agi',30,'percent',15,0,0,TRUE,2,NULL),
('EFF_STR_UP','Force +','buff','stat_str',20,'percent',30,0,0,TRUE,2,NULL),
('EFF_DEF_UP','Défense +','buff','stat_vit',20,'percent',30,0,0,TRUE,2,NULL),
('EFF_INT_UP','Intelligence +','buff','stat_int',20,'percent',30,0,0,TRUE,2,NULL),
('EFF_REGENERATE','Régénération','buff','hp_current',15,'flat',20,0,0,TRUE,3,NULL),
('EFF_INVISIBLE','Invisibilité','buff',NULL,0,'flat',60,0,0,TRUE,1,NULL),
('EFF_BLIND','Cécité','debuff',NULL,0,'flat',10,0,0,TRUE,1,NULL),
('EFF_SILENCE','Silence','debuff',NULL,0,'flat',10,0,0,TRUE,1,NULL),
('EFF_FEAR','Peur','debuff','stat_agi',50,'percent',8,0,0,TRUE,1,NULL),
('EFF_PROTECT','Protection','buff','stat_vit',50,'percent',20,0,0,TRUE,1,NULL);
INSERT INTO T_ACHIEVEMENTS_DICT (achievement_id, name, description, category, condition_type, condition_value, reward_title_id, reward_item_id, reward_yrds, reward_exp, rarity, is_hidden) VALUES
('ACHV_BEGINNER','Bienvenue','Créer avatar','general','create_avatar',1,'TITLE_BEGINNER',NULL,100,0,'common',FALSE),
('ACHV_LVL_10','Premier palier','Niv.10','level','reach_level',10,'TITLE_LVL_10',NULL,500,500,'common',FALSE),
('ACHV_LVL_25','Militaire','Niv.25','level','reach_level',25,'TITLE_LVL_25',NULL,1500,1500,'uncommon',FALSE),
('ACHV_LVL_50','Vétéran','Niv.50','level','reach_level',50,'TITLE_LVL_50',NULL,5000,5000,'rare',FALSE),
('ACHV_LVL_75','Élite','Niv.75','level','reach_level',75,'TITLE_LVL_75',NULL,10000,10000,'epic',FALSE),
('ACHV_LVL_100','Légende','Niv.100','level','reach_level',100,'TITLE_LVL_100',NULL,50000,50000,'legendary',FALSE),
('ACHV_QUEST_10','Mercenaire','10 quêtes','quest','complete_quest',10,'TITLE_QUEST_10',NULL,1000,1000,'common',FALSE),
('ACHV_QUEST_50','Héros','50 quêtes','quest','complete_quest',50,'TITLE_QUEST_50',NULL,5000,5000,'rare',FALSE),
('ACHV_QUEST_100','Légende Vivante','100 quêtes','quest','complete_quest',100,'TITLE_QUEST_100',NULL,15000,15000,'epic',FALSE),
('ACHV_CRAFT_10','Apprenti','10 crafts','craft','craft_item',10,'TITLE_CRAFT_10',NULL,500,500,'common',FALSE),
('ACHV_CRAFT_50','Artisan','50 crafts','craft','craft_item',50,'TITLE_CRAFT_50',NULL,2500,2500,'uncommon',FALSE),
('ACHV_CRAFT_100','Maître Artisan','100 crafts','craft','craft_item',100,'TITLE_CRAFT_100',NULL,7500,7500,'rare',FALSE),
('ACHV_PK_10','Premier sang','10 PvP','pvp','pvp_win',10,'TITLE_PK_10',NULL,2000,2000,'uncommon',FALSE),
('ACHV_PK_50','Guerrier','50 PvP','pvp','pvp_win',50,'TITLE_PK_50',NULL,7500,7500,'rare',FALSE),
('ACHV_PK_100','Conquérant','100 PvP','pvp','pvp_win',100,'TITLE_PK_100',NULL,20000,20000,'epic',FALSE),
('ACHV_RESCUE','Gardien','Sauvetage','social','rescue_player',1,'TITLE_SPECIAL_1',NULL,5000,5000,'rare',FALSE);
SQL
echo "  OK"

echo "=== Zones (52) + mise à jour capitales ==="
psql -d $DB <<'SQL'
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, territory_race, is_safe_zone, min_level, max_level) VALUES
('ZONE_NEU_CAP_001','Alne','CAP',NULL,TRUE,1,50),
('ZONE_SYL_CAP_001','Swilvane','CAP','RACE_SYLPH',TRUE,1,30),
('ZONE_SAL_CAP_001','Gattan','CAP','RACE_SALAMANDER',TRUE,1,35),
('ZONE_SAL_TWN_001','Voulg','TWN','RACE_SALAMANDER',TRUE,5,45),
('ZONE_CAI_CAP_001','Freelia','CAP','RACE_CAIT_SITH',TRUE,1,30),
('ZONE_UND_CAP_001','Archipel','CAP','RACE_UNDINE',TRUE,1,30),
('ZONE_PUC_CAP_001','Lioda','CAP','RACE_PUCA',TRUE,1,30),
('ZONE_IMP_CAP_001','Duskarn','CAP','RACE_IMP',TRUE,1,30),
('ZONE_GNO_CAP_001','Granzam','CAP','RACE_GNOME',TRUE,1,30),
('ZONE_LEP_CAP_001','Brokkheim','CAP','RACE_LEPRECHAUN',TRUE,1,30),
('ZONE_SPR_CAP_001','Penwether','CAP','RACE_SPRIGGAN',TRUE,1,30);
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, territory_race, min_level, max_level, flight_allowed) VALUES
('ZONE_SYL_HUNT_001','Clairière Sylphe','HUNT','RACE_SYLPH',1,15,TRUE),
('ZONE_SYL_HUNT_002','Forêt Murmures','HUNT','RACE_SYLPH',10,25,TRUE),
('ZONE_SYL_DUN_001','Grotte Échos','DUN','RACE_SYLPH',20,35,TRUE),
('ZONE_SAL_HUNT_001','Champs Lave','HUNT','RACE_SALAMANDER',1,15,TRUE),
('ZONE_SAL_HUNT_002','Plaine Braise','HUNT','RACE_SALAMANDER',10,25,TRUE),
('ZONE_SAL_DUN_001','Cavernes Magma','DUN','RACE_SALAMANDER',20,35,TRUE),
('ZONE_CAI_HUNT_001','Savane Crocs','HUNT','RACE_CAIT_SITH',1,15,TRUE),
('ZONE_CAI_HUNT_002','Jungle Félins','HUNT','RACE_CAIT_SITH',10,25,TRUE),
('ZONE_CAI_DUN_001','Repaire Tigre Ombre','DUN','RACE_CAIT_SITH',20,35,TRUE),
('ZONE_UND_HUNT_001','Lagune Corail','HUNT','RACE_UNDINE',1,15,TRUE),
('ZONE_UND_HUNT_002','Récif Abysses','HUNT','RACE_UNDINE',10,25,TRUE),
('ZONE_UND_DUN_001','Gouffre Sirène','DUN','RACE_UNDINE',20,35,TRUE),
('ZONE_PUC_HUNT_001','Clairière Musique','HUNT','RACE_PUCA',1,15,TRUE),
('ZONE_PUC_HUNT_002','Forêt Mélodies','HUNT','RACE_PUCA',10,25,TRUE),
('ZONE_PUC_DUN_001','Caverne Écho','DUN','RACE_PUCA',20,35,TRUE),
('ZONE_IMP_HUNT_001','Plaines Crépuscule','HUNT','RACE_IMP',1,15,TRUE),
('ZONE_IMP_HUNT_002','Terres Ombre','HUNT','RACE_IMP',10,25,TRUE),
('ZONE_IMP_DUN_001','Nécropole','DUN','RACE_IMP',20,35,TRUE),
('ZONE_GNO_HUNT_001','Collines Granit','HUNT','RACE_GNOME',1,15,TRUE),
('ZONE_GNO_HUNT_002','Plaine Rocheuse','HUNT','RACE_GNOME',10,25,TRUE),
('ZONE_GNO_DUN_001','Profondeurs Terre','DUN','RACE_GNOME',20,35,TRUE),
('ZONE_LEP_HUNT_001','Atelier Ciel Ouvert','HUNT','RACE_LEPRECHAUN',1,15,TRUE),
('ZONE_LEP_HUNT_002','Carrières Mithril','HUNT','RACE_LEPRECHAUN',10,25,TRUE),
('ZONE_LEP_DUN_001','Forge Ancestrale','DUN','RACE_LEPRECHAUN',20,35,TRUE),
('ZONE_SPR_HUNT_001','Bois Illusions','HUNT','RACE_SPRIGGAN',1,15,TRUE),
('ZONE_SPR_HUNT_002','Forêt Mirages','HUNT','RACE_SPRIGGAN',10,25,TRUE),
('ZONE_SPR_DUN_001','Antre Ombres','DUN','RACE_SPRIGGAN',20,35,TRUE);
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, min_level, max_level) VALUES
('ZONE_YGG_DUN_001','Yggdrasil Tronc','DUN',50,80),
('ZONE_YGG_TOP_001','Yggdrasil Cime','TOP',80,100),
('ZONE_JOT_FLD_001','Jotunheimr Plaines','FLD',60,90),
('ZONE_JOT_RAID_001','Jotunheimr Repaire','RAID',85,100),
('ZONE_AIN_HUB_001','Aincrad Hub','HUB',1,100);
INSERT INTO T_ZONES (zone_id, zone_name, zone_type, flight_allowed) VALUES
('ZONE_ROUTE_SYL_ALN','Route Swilvane','ROUTE',TRUE),
('ZONE_ROUTE_SAL_ALN','Route Gattan','ROUTE',TRUE),
('ZONE_ROUTE_CAI_ALN','Route Freelia','ROUTE',TRUE),
('ZONE_ROUTE_UND_ALN','Route Archipel','ROUTE',TRUE),
('ZONE_ROUTE_PUC_ALN','Route Lioda','ROUTE',TRUE),
('ZONE_ROUTE_IMP_ALN','Route Duskarn','ROUTE',TRUE),
('ZONE_ROUTE_GNO_ALN','Route Granzam','ROUTE',TRUE),
('ZONE_ROUTE_LEP_ALN','Route Brokkheim','ROUTE',TRUE),
('ZONE_ROUTE_SPR_ALN','Route Penwether','ROUTE',TRUE);
UPDATE T_RACES SET capital_zone_id = 'ZONE_SYL_CAP_001' WHERE race_id = 'RACE_SYLPH';
UPDATE T_RACES SET capital_zone_id = 'ZONE_SAL_CAP_001' WHERE race_id = 'RACE_SALAMANDER';
UPDATE T_RACES SET capital_zone_id = 'ZONE_UND_CAP_001' WHERE race_id = 'RACE_UNDINE';
UPDATE T_RACES SET capital_zone_id = 'ZONE_CAI_CAP_001' WHERE race_id = 'RACE_CAIT_SITH';
UPDATE T_RACES SET capital_zone_id = 'ZONE_IMP_CAP_001' WHERE race_id = 'RACE_IMP';
UPDATE T_RACES SET capital_zone_id = 'ZONE_GNO_CAP_001' WHERE race_id = 'RACE_GNOME';
UPDATE T_RACES SET capital_zone_id = 'ZONE_PUC_CAP_001' WHERE race_id = 'RACE_PUCA';
UPDATE T_RACES SET capital_zone_id = 'ZONE_SPR_CAP_001' WHERE race_id = 'RACE_SPRIGGAN';
UPDATE T_RACES SET capital_zone_id = 'ZONE_LEP_CAP_001' WHERE race_id = 'RACE_LEPRECHAUN';
SQL
echo "  OK"

echo "=== Zone Links (78) ==="
psql -d $DB <<'SQL'
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_SYL_CAP_001','ZONE_SYL_HUNT_001','WALK',0,2,FALSE),
('ZONE_SYL_CAP_001','ZONE_SYL_HUNT_002','FLY',30,5,TRUE),
('ZONE_SYL_CAP_001','ZONE_SYL_DUN_001','FLY',50,8,TRUE),
('ZONE_SYL_CAP_001','ZONE_ROUTE_SYL_ALN','FLY',100,15,TRUE),
('ZONE_SYL_HUNT_001','ZONE_SYL_HUNT_002','WALK',0,6,FALSE),
('ZONE_SYL_HUNT_002','ZONE_SYL_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_SYL_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE),
('ZONE_SAL_CAP_001','ZONE_SAL_TWN_001','WALK',0,4,FALSE),
('ZONE_SAL_TWN_001','ZONE_SAL_HUNT_001','WALK',0,5,FALSE),
('ZONE_SAL_CAP_001','ZONE_SAL_HUNT_002','FLY',30,5,TRUE),
('ZONE_SAL_CAP_001','ZONE_SAL_DUN_001','FLY',50,8,TRUE),
('ZONE_SAL_CAP_001','ZONE_ROUTE_SAL_ALN','FLY',100,15,TRUE),
('ZONE_SAL_HUNT_001','ZONE_SAL_HUNT_002','WALK',0,6,FALSE),
('ZONE_SAL_HUNT_002','ZONE_SAL_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_SAL_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE),
('ZONE_CAI_CAP_001','ZONE_CAI_HUNT_001','WALK',0,2,FALSE),
('ZONE_CAI_CAP_001','ZONE_CAI_HUNT_002','FLY',30,5,TRUE),
('ZONE_CAI_CAP_001','ZONE_CAI_DUN_001','FLY',50,8,TRUE),
('ZONE_CAI_CAP_001','ZONE_ROUTE_CAI_ALN','FLY',100,15,TRUE),
('ZONE_CAI_HUNT_001','ZONE_CAI_HUNT_002','WALK',0,6,FALSE),
('ZONE_CAI_HUNT_002','ZONE_CAI_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_CAI_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_UND_CAP_001','ZONE_UND_HUNT_001','WALK',0,2,FALSE),
('ZONE_UND_CAP_001','ZONE_UND_HUNT_002','FLY',30,5,TRUE),
('ZONE_UND_CAP_001','ZONE_UND_DUN_001','FLY',50,8,TRUE),
('ZONE_UND_CAP_001','ZONE_ROUTE_UND_ALN','FLY',100,15,TRUE),
('ZONE_UND_HUNT_001','ZONE_UND_HUNT_002','WALK',0,6,FALSE),
('ZONE_UND_HUNT_002','ZONE_UND_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_UND_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE),
('ZONE_PUC_CAP_001','ZONE_PUC_HUNT_001','WALK',0,2,FALSE),
('ZONE_PUC_CAP_001','ZONE_PUC_HUNT_002','FLY',30,5,TRUE),
('ZONE_PUC_CAP_001','ZONE_PUC_DUN_001','FLY',50,8,TRUE),
('ZONE_PUC_CAP_001','ZONE_ROUTE_PUC_ALN','FLY',100,15,TRUE),
('ZONE_PUC_HUNT_001','ZONE_PUC_HUNT_002','WALK',0,6,FALSE),
('ZONE_PUC_HUNT_002','ZONE_PUC_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_PUC_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE),
('ZONE_IMP_CAP_001','ZONE_IMP_HUNT_001','WALK',0,2,FALSE),
('ZONE_IMP_CAP_001','ZONE_IMP_HUNT_002','FLY',30,5,TRUE),
('ZONE_IMP_CAP_001','ZONE_IMP_DUN_001','FLY',50,8,TRUE),
('ZONE_IMP_CAP_001','ZONE_ROUTE_IMP_ALN','FLY',100,15,TRUE),
('ZONE_IMP_HUNT_001','ZONE_IMP_HUNT_002','WALK',0,6,FALSE),
('ZONE_IMP_HUNT_002','ZONE_IMP_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_IMP_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, requires_flight) VALUES
('ZONE_GNO_CAP_001','ZONE_GNO_HUNT_001','WALK',0,2,FALSE),
('ZONE_GNO_CAP_001','ZONE_GNO_HUNT_002','FLY',30,5,TRUE),
('ZONE_GNO_CAP_001','ZONE_GNO_DUN_001','FLY',50,8,TRUE),
('ZONE_GNO_CAP_001','ZONE_ROUTE_GNO_ALN','FLY',100,15,TRUE),
('ZONE_GNO_HUNT_001','ZONE_GNO_HUNT_002','WALK',0,6,FALSE),
('ZONE_GNO_HUNT_002','ZONE_GNO_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_GNO_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE),
('ZONE_LEP_CAP_001','ZONE_LEP_HUNT_001','WALK',0,2,FALSE),
('ZONE_LEP_CAP_001','ZONE_LEP_HUNT_002','FLY',30,5,TRUE),
('ZONE_LEP_CAP_001','ZONE_LEP_DUN_001','FLY',50,8,TRUE),
('ZONE_LEP_CAP_001','ZONE_ROUTE_LEP_ALN','FLY',100,15,TRUE),
('ZONE_LEP_HUNT_001','ZONE_LEP_HUNT_002','WALK',0,6,FALSE),
('ZONE_LEP_HUNT_002','ZONE_LEP_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_LEP_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE),
('ZONE_SPR_CAP_001','ZONE_SPR_HUNT_001','WALK',0,2,FALSE),
('ZONE_SPR_CAP_001','ZONE_SPR_HUNT_002','FLY',30,5,TRUE),
('ZONE_SPR_CAP_001','ZONE_SPR_DUN_001','FLY',50,8,TRUE),
('ZONE_SPR_CAP_001','ZONE_ROUTE_SPR_ALN','FLY',100,15,TRUE),
('ZONE_SPR_HUNT_001','ZONE_SPR_HUNT_002','WALK',0,6,FALSE),
('ZONE_SPR_HUNT_002','ZONE_SPR_DUN_001','WALK',0,8,FALSE),
('ZONE_ROUTE_SPR_ALN','ZONE_NEU_CAP_001','FLY',0,15,TRUE);
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min, lore_status) VALUES
('ZONE_SAL_HUNT_002','ZONE_SYL_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_SYL_HUNT_002','ZONE_CAI_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_CAI_HUNT_002','ZONE_PUC_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_PUC_HUNT_002','ZONE_UND_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_UND_HUNT_002','ZONE_LEP_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_LEP_HUNT_002','ZONE_IMP_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_IMP_HUNT_002','ZONE_SPR_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_SPR_HUNT_002','ZONE_GNO_HUNT_002','WALK',0,12,'Frontière'),
('ZONE_GNO_HUNT_002','ZONE_SAL_HUNT_002','WALK',0,12,'Frontière');
INSERT INTO T_ZONE_LINKS (zone_a, zone_b, link_type, mp_cost, travel_time_min) VALUES
('ZONE_NEU_CAP_001','ZONE_YGG_DUN_001','FLY',50,10),
('ZONE_YGG_DUN_001','ZONE_YGG_TOP_001','FLY',100,20),
('ZONE_NEU_CAP_001','ZONE_JOT_FLD_001','UNDERGROUND',100,30),
('ZONE_JOT_FLD_001','ZONE_JOT_RAID_001','WALK',0,15),
('ZONE_NEU_CAP_001','ZONE_AIN_HUB_001','FLY',200,45);
SQL
echo "  OK"

echo "=== Seed data (items, monsters, skills, quests) ==="
psql -d $DB -f seed_data.sql 2>&1 | grep -c "INSERT" | xargs echo "  INSERT batches:"

echo "=== Final counts ==="
psql -d $DB -c "
SELECT 'RACES' t, count(*) FROM T_RACES UNION ALL
SELECT 'ZONES', count(*) FROM T_ZONES UNION ALL
SELECT 'ZONE_LINKS', count(*) FROM T_ZONE_LINKS UNION ALL
SELECT 'ITEMS_DICT', count(*) FROM T_ITEMS_DICT UNION ALL
SELECT 'MONSTERS_DICT', count(*) FROM T_MONSTERS_DICT UNION ALL
SELECT 'SKILLS_DICT', count(*) FROM T_SKILLS_DICT UNION ALL
SELECT 'QUESTS_DICT', count(*) FROM T_QUESTS_DICT UNION ALL
SELECT 'TITLES', count(*) FROM T_TITLES UNION ALL
SELECT 'EFFECTS', count(*) FROM T_STATUS_EFFECTS_DICT UNION ALL
SELECT 'ACHIEVEMENTS', count(*) FROM T_ACHIEVEMENTS_DICT UNION ALL
SELECT 'DAILY_CALENDAR', count(*) FROM T_DAILY_CALENDAR;
"
