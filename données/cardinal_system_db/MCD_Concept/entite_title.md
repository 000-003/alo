# Entité : Titre Honorifique (Title)

## Définition Conceptuelle
Un Titre est une distinction visible par tous les joueurs, affichée sous le nom de l'avatar. Les titres sont débloqués par des achievements, des quêtes, des élections ou des exploits.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| title_id | VARCHAR(30) | PK | Ex: `TITLE_FAIRY_KING`, `TITLE_ZEKKEN` |
| name | VARCHAR(50) | NOT NULL | Texte affiché (ex: ⚔️ Roi des Fées) |
| description | TEXT | NOT NULL | Comment obtenir ce titre |
| rarity | ENUM('common','uncommon','rare','epic','legendary','unique') | NOT NULL | Rareté |
| stat_bonus | JSON | NULL | Bonus passif (ex: {"str": 5, "agi": 10}) |
| visual_effect | VARCHAR(100) | NULL | Effet visuel narratif (ex: Aura dorée) |
| unlock_type | ENUM('achievement','quest','election','combat','event','gm_grant') | NOT NULL | Source |
| is_permanent | BOOLEAN | DEFAULT TRUE | Si FALSE, le titre expire |
| max_holders | INT | DEFAULT 0 | 0 = illimité. 1 = unique au serveur |
