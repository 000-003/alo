# Wiki ALfheim Online - Golden Knights (Gardiens d'Yggdrasil)

## 1. Lore et Histoire (Background)
Les "Chevaliers Dorés" ne sont pas des monstres nés de l'évolution de *The Seed*, mais des "Programmes de Rétention" écrits spécifiquement par l'Administrateur Oberon (Nobuyuki Sugou). 
Lorsque Sugou a conçu ALfheim Online à partir des restes de SAO, il a placé Asuna dans une cage au sommet de l'Arbre du Monde. Pour s'assurer qu'aucun joueur n'atteindrait jamais ce dôme et ne découvrirait son existence, il a codé l'espace intérieur de l'Arbre comme une "Zone de Mort Procédurale". Les Golden Knights sont les anticorps de cette zone. Ils n'ont pas de visage, pas d'âme, et sont simplement des polygones dorés voués à l'annihilation de tout intrus.

## 2. Apparitions
- **Lieu d'apparition** : Le puits ascendant à l'intérieur de l'Arbre du Monde (Yggdrasil).
- **Condition de rencontre** : Déclenchée automatiquement dès qu'un joueur passe le seuil de la porte magique située à la Cité d'Alne.

## 3. Statistiques RPG (Fandom Stats)
- **ID Monstre** : MOB_YGG_00X (Code Itératif Infini)
- **Catégorie** : Swarm Entity (Entité d'Essaim)
- **Niveau Estimé** : 70 (Individuellement)
- **Hit Points (HP)** : 10,000 (Très faibles pour des mobs de fin de jeu).
- **STR (Force)** : 800
- **AGI (Vitesse)** : 600
- **Résistances** : Toutes magies (75% de résistance).
- **Faiblesses** : Dégâts physiques contondants (Armour Break).

## 4. Mécaniques de Combat et Patterns
Ce n'est pas la force d'un Golden Knight qui tue le joueur, c'est l'algorithme "Swarm" qui gère leur spawn.
1. **Aggro Absolu** : Dès l'entrée, 10 chevaliers apparaissent sur les murs circulaires.
2. **Croissance Exponentielle (Calcul DPS)** : Le système Cardinal calcule la vitesse à laquelle le joueur tue les chevaliers. Si le joueur tue 10 chevaliers en 5 secondes, le système fait spawn 20 chevaliers à la 6ème seconde. Si le joueur en tue 20, le système en génère 40. L'objectif mathématique du code est d'atteindre un stade où 100% de l'espace physique (la hitbox de l'écran) est saturé de flèches et d'épées.
3. **Coordination Parfaite (Swarm Logic)** : Contrairement à l'IA classique des monstres qui attaquent de face, les Chevaliers d'Yggdrasil calculent l'angle mort absolu du joueur. Une volée de flèches arrivera toujours par-dessous et par-derrière l'avatar, interdisant la parade.
4. **Armement** : 
   - *Sword Knights* : Équipés de grandes épées lourdes (Claymore) pour interdire le vol rapide et ralentir le joueur.
   - *Archer Knights* : Équipés de grands arcs tirant des flèches à tête chercheuse mineure.

## 5. Loot et Conséquences
- **Drops Directs** : Strictement rien. Le système est conçu pour décourager le "farm". Ils ne donnent ni Yrd, ni points d'expérience (EXP).
- **Le Bypass** : La seule façon de contourner cette armée (illustrée par Kirito dans le Tome 4) est de percer avec une armée entière pour faire "bouclier de chair", d'utiliser une magie d'explosion suicidaire (Le *Dark Detonation* de Recon) pour vider la zone instantanément, et de voler dans la fraction de seconde où le serveur charge le prochain batch de chevaliers.
