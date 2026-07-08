# Moteur Physique : Physique de Déplacement (Flight & Movement)

## 1. Vol Assisté vs Vol Libre
Le déplacement dans ALfheim est la fonctionnalité majeure du jeu.
- **Vol Assisté (Controller)** : L'avatar utilise un joystick virtuel. Vitesse plafonnée à `AGI * 0.5`. Coût en Mana très faible. Trajectoires fluides mais prévisibles.
- **Vol Libre (System Override)** : Le joueur n'utilise pas le système de vol, mais manipule directement les muscles de ses ailes virtuelles (nécessite un apprentissage). La vitesse maximale n'est plus bridée (peut atteindre `AGI * 1.5`), permettant des manœuvres impossibles à verrouiller (Dogfight).

## 2. Aérodynamisme et Poids
- La vitesse de vol brute est déterminée par l'AGI, mais le **Taux d'Ascension** (capacité à monter en altitude) est détruit par le poids de l'inventaire.
- Un joueur en armure lourde (`Weight > 50`) monte 3x plus lentement qu'un joueur en tissu. 
- Au-delà du plafond d'altitude (L'Altitude Limite de l'Aincrad ou d'ALfheim), l'oxygène virtuel manque, la gravité s'inverse, et un mur système repousse les joueurs vers le sol.

## 3. La Gestion de l'Endurance (Stamina) et du Mana
- Déployer ses ailes consomme de base `10 MP / minute`.
- Passer en Vol Sprint (Boost) consomme `50 MP / minute`. Si la jauge de MP tombe à 0 en plein vol, les ailes disparaissent instantanément, provoquant une chute libre.
- Les Sylphes consomment 30% de MP en moins durant le vol.

## 4. Wall Run & Momentum (Parkour terrestre)
- Les joueurs ne sont pas limités à courir sur le sol. Grâce au moteur de collision, une AGI supérieure à 400 permet de réaliser un *Wall Run* (courir sur les murs) pendant un maximum de 4 secondes. 
- Le Momentum (Vitesse accumulée) se transfère dans l'attaque. Une attaque plongeante initiée à haute vitesse depuis les airs ajoute un modificateur `Velocity_Damage` (jusqu'à +50% de dégâts bruts), mais si elle rate, les dégâts de chute sont appliqués au joueur (Crash).
