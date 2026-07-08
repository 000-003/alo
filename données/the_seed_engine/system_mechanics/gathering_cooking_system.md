# Système de Pêche, Cuisine & Activités Secondaires

## 1. Pêche (Fishing)
La pêche est un métier de récolte qui fournit des ingrédients pour la cuisine et occasionnellement des objets rares.

### 1.1 Mécanique
- **Activation** : `!fish` (nécessite une canne à pêche équipée, uniquement dans les zones avec de l'eau).
- **Mini-jeu** : Le bot décrit la tension de la ligne. Le joueur doit répondre `!reel` au bon moment (fenêtre de 10 secondes). Réussite basée sur la DEX.
- **Résultats** : Poissons communs (ingrédients), Poissons rares (matériaux de craft), Objets mystérieux (coffres sous-marins).

### 1.2 Table de Pêche par Zone

| Zone | Poisson Commun | Poisson Rare | Objet Mystérieux |
|---|---|---|---|
| Lac de Swilvane | Truite Sylphe (3 Yrds) | Carpe Dorée (50 Yrds) | Bague Rouillée (Quest Item) |
| Mer d'Undine | Maquereau Bleu (5 Yrds) | Espadon Géant (100 Yrds) | Perle d'Ondine (Matériau Enchant) |
| Rivière d'Alne | Saumon d'Argent (4 Yrds) | Anguille Électrique (80 Yrds) | Coffre Submergé (Random Loot) |
| Marais de Jötunheimr | Poisson-Mort (1 Yrd) | Léviathan Miniature (200 Yrds) | Fragment d'Excalibur (Lore Item) |

## 2. Cuisine (Cooking)
La cuisine transforme les ingrédients bruts en repas qui octroient des buffs temporaires.

### 2.1 Mécanique
- **Activation** : `!cook [Recette]` (nécessite un feu de camp ou une cuisine dans un logement).
- **Réussite** : Basée sur la DEX + Niveau de Craft Cuisine. Échec = nourriture brûlée (pas de buff, perte des ingrédients).

### 2.2 Recettes

| Recette | Ingrédients | Buff | Durée |
|---|---|---|---|
| Ragout de Viande | 2x Viande de Sanglier + 1x Herbe | +10% Max HP | 30 min |
| Poisson Grillé Royal | 1x Carpe Dorée + 1x Sel | +15% Régénération MP | 30 min |
| Pain de Voyage Elfique | 3x Blé + 1x Miel | +5% EXP gagnée | 60 min |
| Ragoût de Champion | 1x Viande de Boss + 2x Légume Rare | +20% ATK | 15 min |
| Thé Médicinal Undine | 2x Herbe Aquatique + 1x Miel | Immunité Poison pendant 1h | 60 min |

## 3. Système de Minage Avancé (Mining)
- `!mine` : Extraction de minerais dans les zones montagneuses et souterraines.
- Résultats dépendent de la zone et de l'outil équipé (Pioche en fer < Pioche en mithril).

| Zone | Minerai Commun | Minerai Rare | Gemme |
|---|---|---|---|
| Mines Gnome | Fer (5 Yrds) | Mithril (100 Yrds) | Rubis (500 Yrds) |
| Cavernes Jötunheimr | Obsidienne (8 Yrds) | Orichalque (150 Yrds) | Diamant Noir (800 Yrds) |
| Montagnes Salamander | Cuivre (3 Yrds) | Adamantite (120 Yrds) | Saphir de Feu (600 Yrds) |

## 4. Commandes IA
- `SYS_STOCK_FISHING_SPOT(Zone_ID, Fish_ID, Rarity)` : L'IA peuple un point de pêche avec une espèce rare.
- `SYS_DEPLETE_RESOURCE(Zone_ID, Resource_Type)` : L'IA vide un gisement de minerai (surexploitation).
- `SYS_BONUS_HARVEST(Zone_ID, Multiplier)` : L'IA déclenche un événement "Récolte Abondante" (x2 drops).
