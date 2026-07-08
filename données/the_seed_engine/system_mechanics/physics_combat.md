# Moteur Physique : Physique de Combat (Polygon Collision)

## 1. La Loi de Collision des Polygones (Weight vs Speed)
Dans ALO, le système d'assistance (System Assist) de SAO n'existe pas de base. Les combats reposent sur un moteur de calcul de collision physique brute.
- Chaque arme possède une masse (`Weapon_Weight`) en Kg.
- L'impact mathématique est généré via : `Force = Weapon_Weight * (Weapon_Speed + (STR/10))`.
- **Clash (Parade Lourde)** : Si deux joueurs attaquent en même temps, le moteur calcule la Force des deux armes. Celui qui a la force la plus faible subit un **Knockback** (Recul) proportionnel à la différence de force, causant une annulation de son tour d'attaque.

## 2. Gestion des Hitboxes
Il n'y a pas de pourcentage de précision statique. La précision dépend de l'écart d'AGI.
- **Zone Critique** : Frapper la Tête ou le Coureau (Faiblesse) applique un multiplicateur mathématique de x2.5. L'IA juge la probabilité de toucher ce point faible selon le ratio `(DEX Attaquant / AGI Défenseur)`.
- **Severing (Démembrement)** : Si une attaque unique inflige plus de 30% des Max HP sur un membre (Bras/Aile), le membre est sectionné (Polygones éclatés). Le statut [Amputé] est appliqué pendant 3 minutes, empêchant d'utiliser les armes à deux mains ou de voler.

## 3. Cast Physics (Interruptions Physiques)
- La magie nécessite une vocalisation et une posture.
- Si le joueur subit un impact modifiant sa position (Knockdown/Knockback) supérieur à une force de `50 Newtons_virtuels` avant la fin du `Cast_Time`, le sort s'effondre avec un bruit de verre brisé (Casting Break).

## 4. Inertie de Combat
Frapper dans le vide avec une arme lourde (ex: Hache à deux mains) crée une pénalité d'inertie.
- **Miss Penalty** : Si une arme de `Weight > 15` rate sa cible, l'avatar subit un *Recovery Delay* (1 tour perdu) où son évasion tombe à 0%, simulant le fait qu'il est déséquilibré par le poids de son arme.
