# Table : T_WEATHER

```sql
CREATE TABLE T_WEATHER (
    zone_id         VARCHAR(30) PRIMARY KEY REFERENCES T_ZONES(zone_id),
    current_weather VARCHAR(20) DEFAULT 'clear',
    temperature     INT DEFAULT 20,
    wind_speed      INT DEFAULT 0,
    visibility      FLOAT DEFAULT 1.0,
    time_of_day     VARCHAR(10) DEFAULT 'day',
    moon_phase      VARCHAR(10) DEFAULT 'full',
    last_changed    TIMESTAMP DEFAULT NOW(),
    changed_by      VARCHAR(20) DEFAULT 'natural_cycle'
);
```
