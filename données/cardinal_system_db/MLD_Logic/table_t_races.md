# Table : T_RACES

```sql
CREATE TABLE T_RACES (
    race_id         VARCHAR(20) PRIMARY KEY,
    name            VARCHAR(50) NOT NULL UNIQUE,
    element_affinity VARCHAR(20) NOT NULL,
    bonus_hp        INT DEFAULT 0,
    bonus_mp        INT DEFAULT 0,
    bonus_str       INT DEFAULT 0,
    bonus_agi       INT DEFAULT 0,
    bonus_vit       INT DEFAULT 0,
    bonus_int       INT DEFAULT 0,
    bonus_dex       INT DEFAULT 0,
    flight_modifier FLOAT DEFAULT 1.0,
    racial_passive  VARCHAR(100) NOT NULL,
    racial_weakness VARCHAR(200),
    capital_zone_id VARCHAR(30) REFERENCES T_ZONES(zone_id),
    lore_description TEXT NOT NULL
);

-- Données initiales
INSERT INTO T_RACES VALUES
('RACE_SYLPH','Sylphe','Vent',0,200,-5,30,-10,10,10,1.3,'Vol Rapide (+30% vitesse vol)','Faible DEF physique','ZONE_SYL_CAP','Race du vent...'),
('RACE_SALAMANDER','Salamandre','Feu',200,0,30,-5,20,-10,5,0.9,'Résistance Feu (+30%)','Vulnérable à Eau','ZONE_SAL_CAP','Race du feu...'),
('RACE_UNDINE','Undine','Eau',0,300,-10,0,0,30,10,1.0,'Magie de Guérison (+50% efficacité soins)','Vulnérable à Foudre','ZONE_UND_CAP','Race de eau...'),
('RACE_CAIT_SITH','Cait Sith','Neutre',0,100,0,20,0,0,20,1.0,'Beast Taming (+30% capture)','Aucune affinité élémentaire','ZONE_CAT_CAP','Race des bêtes...'),
('RACE_IMP','Imp','Ténèbres',-200,200,-10,15,-10,25,5,1.0,'Vision Nocturne + Vol de Nuit','HP réduits','ZONE_IMP_CAP','Race des ombres...'),
('RACE_GNOME','Gnome','Terre',300,-100,25,-15,30,-10,10,0.7,'Résistance Terre (+30%)','Vol lent (-30%)','ZONE_GNO_CAP','Race de terre...'),
('RACE_PUCA','Puca','Neutre',0,250,-15,10,-5,20,15,1.0,'Magie Musicale (mélodies de buff)','Faible en mêlée','ZONE_PUC_CAP','Race de musique...'),
('RACE_SPRIGGAN','Spriggan','Ténèbres',0,150,10,15,0,15,15,1.0,'Magie Illusoire + Détection Trésors','Aucune spécialisation forte','ZONE_SPR_CAP','Race des illusions...'),
('RACE_LEPRECHAUN','Leprechaun','Neutre',100,0,15,0,15,10,25,0.9,'Artisanat Expert (+30% qualité forge)','Vol légèrement lent','ZONE_LEP_CAP','Race des forgerons...');
```
