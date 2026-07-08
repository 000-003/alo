# Interface I/O : Traitement Narratif WhatsApp

## 1. Analyse Fandom & Lore
Puisque nous n'avons pas d'AmuSphere ni de casque FullDive, l'interface WhatsApp doit agir comme le log de combat textuel du système. La restitution doit utiliser le champ lexical strict du jeu VRMMO.

## 2. Parsing des Inputs
- Le joueur envoie : `!cast Fire_Lance Target:Boar`
- Le backend Node.js intercepte, vérifie le *Locking* de la base de données (pour éviter les conflits de frames).

## 3. Formatting de l'Output (Cinematic Worldbuilding)
- L'output généré par le bot doit décrire les pixels, les effets sonores virtuels et l'état de la barre de HP.
- **Exemple de Log Généré** : `[SYSTÈME] : Vous initiez l'incantation de Fire Lance. Un cercle magique rouge apparaît sous vos polygones. (-40 MP) -> Impact ! Le Sanglier subit 850 Dégâts de Feu. Sa barre de HP vire au jaune.`