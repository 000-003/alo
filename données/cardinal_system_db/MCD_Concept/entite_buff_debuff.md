# Entité : Altération d'État (Buff / Debuff / Status Effect)

## Définition Conceptuelle
Une Altération d'État est un effet temporaire appliqué à un Avatar ou un Monstre qui modifie ses statistiques ou son comportement. Les buffs sont positifs, les debuffs négatifs.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| effect_id | VARCHAR(30) | PK | Ex: `BUFF_STR_POTION`, `DEBUFF_POISON` |
| name | VARCHAR(50) | NOT NULL | Nom affiché (ex: Brûlure, Bénédiction) |
| type | ENUM('buff','debuff','neutral') | NOT NULL | Classification |
| category | ENUM('physical','magical','environmental','social') | NOT NULL | Source de l'effet |
| stat_modified | VARCHAR(20) | NULL | Stat impactée (STR, AGI, HP, etc.) |
| modifier_value | FLOAT | NOT NULL | Valeur du modificateur (+30, -20%, x1.5) |
| modifier_type | ENUM('flat','percent','multiplier') | NOT NULL | Type de modification |
| duration_seconds | INT | NULL | Durée (NULL = permanent jusqu'à dissipation) |
| tick_damage | INT | DEFAULT 0 | Dégâts par tour si DoT (Poison, Brûlure) |
| tick_interval | INT | DEFAULT 0 | Intervalle des ticks en secondes |
| is_dispellable | BOOLEAN | DEFAULT TRUE | Peut être dissipé par Antidote/Purification |
| max_stacks | INT | DEFAULT 1 | Nombre max d'empilements |
| icon_emoji | VARCHAR(10) | NULL | Emoji affiché dans le statut WhatsApp |
| lore_description | TEXT | NULL | Description narrative |

## Relations
- Effect (0,n) → Avatar : Un effet peut toucher 0 à n avatars
- Effect (0,n) → Monster_Instance : Un effet peut toucher 0 à n monstres
