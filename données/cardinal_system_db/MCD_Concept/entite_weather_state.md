# Entité : État Météorologique (Weather State)

## Définition Conceptuelle
Chaque zone possède un état météorologique temps réel qui affecte la physique de combat, le vol, et les taux de spawn. L'IA Cardinal peut modifier la météo via `SYS_CHANGE_WEATHER`.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| weather_id | UUID | PK | Identifiant unique |
| zone_id | VARCHAR(30) | FK → T_ZONES, UNIQUE, NOT NULL | Zone associée (1 météo par zone) |
| current_weather | ENUM('clear','rain','storm','snow','fog','sandstorm','eclipse','aurora') | DEFAULT 'clear' | Météo actuelle |
| temperature | INT | DEFAULT 20 | Température en °C (affecte le gel) |
| wind_speed | INT | DEFAULT 0 | Vitesse du vent (affecte la précision de vol) |
| visibility | FLOAT | DEFAULT 1.0 | Multiplicateur de visibilité (1.0 = parfaite, 0.1 = quasi-aveugle) |
| time_of_day | ENUM('dawn','day','dusk','night') | DEFAULT 'day' | Heure actuelle |
| moon_phase | ENUM('new','crescent','half','full') | DEFAULT 'full' | Phase lunaire (affecte les Imps) |
| last_changed_at | TIMESTAMP | DEFAULT NOW() | Dernière modification |
| changed_by | ENUM('natural_cycle','cardinal_ai','gm_command') | DEFAULT 'natural_cycle' | Source du changement |
