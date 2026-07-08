# Entité MCD : ENCYCLOPEDIA_KNOWLEDGE

## 1. Définition Conceptuelle (The Seed)
Le codex de connaissances du jeu (Le Guide d'Argo). Représente les fragments de savoir, les fiches de monstres, et les notes géographiques qui existent dans la base de données de The Seed.

## 2. Attributs
- `Knowledge_ID` (String, PK) : Identifiant unique de l'information (ex: `LORE_THRYMHEIM`, `MOB_SLIME_01`).
- `Category` (Enum: Bestiary, Lore, Mechanic, Geography, Secret).
- `Title` (String) : Nom affiché dans le `!help` ou `!encyclopedia`.
- `Content_Text` (Text) : Le texte de l'encyclopédie (Le Fandom Wiki brut).
- `Unlock_Condition_Type` (Enum: Level_Reach, Monster_Kill, Zone_Enter, Item_Acquire).
- `Unlock_Condition_Value` (String) : Valeur associée à la condition (ex: si Type=Zone_Enter, Value="foret_chuchotements").

## 3. Cardinalités et Relations
- 1 ENCYCLOPEDIA_KNOWLEDGE est débloqué par (0,n) AVATARS (via la table de liaison `T_UNLOCKED_LORE`).
