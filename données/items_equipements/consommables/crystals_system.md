# Cristaux Système (Teleport Crystals, Corridor Crystals, Mirage Spheres)

## 1. Définition Cardinal System
Les cristaux sont les objets utilitaires les plus précieux d'ALfheim Online. Hérités directement du système de SAO, ils permettent des déplacements instantanés et des communications à longue portée. Ce sont des consommables à usage unique.

## 2. Catalogue des Cristaux

### 2.1 Teleport Crystal (Cristal de Téléportation)
- **ID** : `ITEM_CRYSTAL_TELEPORT`
- **Description** : Un cristal bleu translucide qui brille en permanence. En le brisant, le joueur est instantanément téléporté vers n'importe quelle ville déjà visitée.
- **Commande** : `!use_crystal teleport [Nom_Ville]`
- **Effet** : Téléportation instantanée. Le bot retire le joueur du groupe WhatsApp actuel et l'ajoute au groupe de la ville cible.
- **Restriction** : Inutilisable en combat (statut `Locked`). Inutilisable dans les Anti-Crystal Zones (salles de boss, donjons finaux).
- **Prix** : 500 Yrds chez les marchands.
- **Drop** : Coffres de donjons (15% de chance).

### 2.2 Corridor Crystal (Cristal de Corridor)
- **ID** : `ITEM_CRYSTAL_CORRIDOR`
- **Description** : Un cristal violet qui ouvre un portail dimensionnel entre deux points. L'entrée reste ouverte pendant 30 secondes, permettant à tout le groupe de passer.
- **Commande** : `!use_crystal corridor [Zone_ID]`
- **Effet** : Crée un passage temporaire. Tous les membres de la Party peuvent taper `!enter_portal` pour être transférés.
- **Restriction** : Le joueur doit avoir déjà visité la zone cible. Consomme 100 MP en plus du cristal.
- **Prix** : 2 000 Yrds.
- **Drop** : Boss de Palier (8% de chance).

### 2.3 Mirage Sphere (Sphère de Mirage)
- **ID** : `ITEM_MIRAGE_SPHERE`
- **Description** : Un globe de cristal dans lequel flotte une carte 3D miniature du monde d'ALO. Permet de visualiser les zones alentour sans s'y déplacer.
- **Commande** : `!use_crystal mirage`
- **Effet** : Affiche une description détaillée de toutes les zones connectées à la zone actuelle, incluant la densité de joueurs, la météo et les mobs actifs. Équivalent d'un `!map` avancé sans nécessiter Navigation Lv.5.
- **Prix** : 1 500 Yrds.

### 2.4 Recording Crystal (Cristal d'Enregistrement)
- **ID** : `ITEM_CRYSTAL_RECORD`
- **Description** : Un cristal ambré qui stocke le dernier message narratif du bot. Le joueur peut le relire à tout moment.
- **Commande** : `!use_crystal record` / `!replay_crystal`
- **Effet** : Sauvegarde les 5 derniers logs de combat/exploration dans la mémoire du joueur. Utile pour retracer ses aventures.
- **Prix** : 200 Yrds.

### 2.5 Yui's Heart (Le Cœur de Yui)
- **ID** : `ITEM_YUIS_HEART`
- **Description** : Un cristal rose en forme de larme, contenant l'IA pixie Yui. Objet narratif unique au serveur. Celui qui le possède peut invoquer Yui pour obtenir une analyse détaillée de n'importe quel monstre ou joueur.
- **Commande** : `!yui_analyze [Cible]`
- **Effet** : Révèle les stats exactes, les faiblesses, et le pattern d'attaque de la cible. Ne fonctionne qu'une fois par heure.
- **Obtention** : Récompense de la quête spéciale *"L'Écho du Premier Étage"* dans New Aincrad.

## 3. Anti-Crystal Zones
Certaines zones bloquent l'utilisation de tous les cristaux :
- Salles de Boss de New Aincrad (Paliers 25, 50, 75, 100)
- Le Cœur de Jötunheimr (Thrymheim)
- Toute zone où l'IA a activé `SYS_DISABLE_CRYSTALS`

## 4. Commandes IA
- `SYS_DISABLE_CRYSTALS(Zone_ID)` : L'IA verrouille l'usage des cristaux dans une zone (piège, boss fight scénarisé).
- `SYS_ENABLE_CRYSTALS(Zone_ID)` : L'IA réactive les cristaux après un événement.
- `SYS_DROP_RARE_CRYSTAL(Avatar_ID, Crystal_Type)` : L'IA fait tomber un cristal rare en récompense narrative.
