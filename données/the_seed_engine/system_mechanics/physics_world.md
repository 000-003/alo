# Moteur Physique : Physique Environnementale (World Physics)

## 1. Gravité et Chute Libre
Contrairement à l'Aincrad, ALfheim Online possède une physique atmosphérique modifiée pour le vol.
- **Gravité Standard** : Constante de `9.8 m/s²`.
- **Dégâts de Chute (Fall Damage)** : Le calcul des dégâts de chute est de `(Hauteur_mètres * 15) - (VIT * 0.5)`. Une chute de plus de 50 mètres sans activation des ailes est mortelle pour 90% des builds.
- **Water Physics** : Les mouvements sous l'eau sont réduits de 40% (sauf pour la race Undine, qui ne subit aucune pénalité et n'a pas de jauge d'O2).

## 2. Le Cycle Météorologique (Weather System)
L'IA Orchestrateur manipule la météo qui a un impact mathématique direct :
- **Soleil Zénithal** : +10% de récupération de MP pour toutes les races (sauf Imp).
- **Nuit Noire (Sans Lune)** : Désactivation pure et simple des ailes (Vol impossible) pour 8 des 9 races. Seuls les Imps peuvent voler dans l'obscurité totale et voient leur furtivité augmentée de 30%.
- **Tempête / Pluie** : 
  - Réduit la précision (DEX effective) des attaques à distance de 20%.
  - Augmente les dégâts de l'élément [Foudre] de 50% et réduit l'élément [Feu] de 30%.
- **Neige / Gel** : Réduit la jauge d'Endurance de 10% toutes les minutes sans équipement adapté.

## 3. Le Système de Lumière (Illumination & Stealth)
La furtivité dans ALO n'est pas un simple buff invisible, elle est basée sur le moteur d'éclairage.
- Un joueur utilisant `!hide` dans les ombres réduit sa "signature polygonale". Son nom n'apparaît plus sur les UI des autres joueurs.
- Utiliser un sort de Lumière ou équiper une torche détruit immédiatement toute furtivité dans un rayon de 30 mètres.
