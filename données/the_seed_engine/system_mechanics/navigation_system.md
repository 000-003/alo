# Système de Navigation & Cartographie (Navigation Skill)

## 1. Définition Cardinal System
La compétence de Navigation est essentielle pour se repérer dans le monde immense d'ALO. Sans elle, un joueur ne voit qu'un brouillard de guerre sur sa carte.

## 2. Mécanique de Jeu
- **Compétence Passive** : La Navigation s'améliore automatiquement en explorant de nouvelles zones.
- **Niveaux de Navigation** :

| Palier | EXP requise | Fonctionnalité Débloquée |
|---|---|---|
| Lv.1 (Novice) | 0 | Affiche le nom de la zone actuelle uniquement |
| Lv.2 (Apprenti) | 500 | Affiche les zones connectées (adjacentes) |
| Lv.3 (Éclaireur) | 2 000 | Affiche les PNJ présents dans la zone |
| Lv.4 (Cartographe) | 5 000 | Affiche le taux d'apparition des mobs |
| Lv.5 (Maître) | 15 000 | Affiche les ressources récoltables et les trésors cachés |
| Lv.6 (Grand Cartographe) | 50 000 | Permet d'utiliser `!fast_travel` vers les zones déjà visitées |

## 3. Commandes Joueur
- `!map` : Renvoie les infos selon le niveau de Navigation.
- `!compass [Direction]` : Indique la direction d'une zone spécifique.
- `!mark [Nom]` : Place un marqueur personnel sur la zone actuelle.
- `!fast_travel [Zone_ID]` : Téléportation instantanée (nécessite Navigation Lv.6 + Teleport Crystal).

## 4. Commandes IA
- `SYS_REVEAL_MAP(Avatar_ID, Zone_ID)` : L'IA révèle une zone sur la carte d'un joueur (récompense de quête).
- `SYS_SCRAMBLE_MAP(Avatar_ID)` : L'IA brouille la carte d'un joueur (malédiction, piège de labyrinthe).
- `SYS_CREATE_MAZE(Zone_ID, Complexity)` : L'IA reconfigure dynamiquement les connexions d'un donjon pour créer un labyrinthe.
