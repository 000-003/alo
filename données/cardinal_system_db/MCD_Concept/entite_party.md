# Entité : Party (Groupe Temporaire de Raid)

## Définition Conceptuelle
Une Party est un groupe temporaire de 2 à 7 joueurs formé pour l'exploration ou le combat coopératif. Elle est dissoute automatiquement si tous les membres se déconnectent ou quittent volontairement.

## Attributs
| Attribut | Type | Contrainte | Description |
|---|---|---|---|
| party_id | UUID | PK | Identifiant unique généré à la création |
| leader_avatar_id | UUID | FK → T_AVATARS, NOT NULL | Le chef de groupe |
| name | VARCHAR(50) | NULL | Nom optionnel du groupe |
| created_at | TIMESTAMP | DEFAULT NOW() | Date de création |
| max_members | INT | DEFAULT 7 | Taille maximale |
| status | ENUM('active','disbanded') | DEFAULT 'active' | État du groupe |
| shared_exp | BOOLEAN | DEFAULT TRUE | Si TRUE, l'EXP est répartie équitablement |
| loot_rule | ENUM('round_robin','need_greed','leader') | DEFAULT 'round_robin' | Règle de distribution du loot |

## Relations
- Party (1,1) → Avatar (leader) : Chaque party a exactement un leader
- Party (1,n) → Avatar (membres) : Via table intermédiaire T_PARTY_MEMBERS
- Party (0,1) → Combat_Instance : Une party peut être engagée dans 0 ou 1 combat
