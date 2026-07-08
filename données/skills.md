# ALfheim Online (ALO) - Codex des Magies et Original Sword Skills

*Analyse mathématique et lore des capacités du moteur The Seed appliqué à ALO.*

## 1. Incantations Magiques (Magic System)
Dans ALO, il n'y a pas de raccourci clavier. Les mages doivent prononcer des formules (chants) dans un langage pseudo-nordique généré par le moteur.
- **La Jauge de MP** : Chaque mot chanté draine de la mana. Si le joueur n'a plus de MP au milieu de la phrase, le sort s'annule en une gerbe d'étincelles grises.
- **Interruption (Casting Break)** : Si le joueur subit un dégât physique pendant le chant, l'incantation échoue. Cela rend les mages très vulnérables sans *Tanks* terrestres.
- **Quelques Sorts Canoniques** :
  - *Heal* (Undine) : Sort de soin. Asuna, bien qu'Undine, préfère se battre au corps à corps, d'où son surnom de *Healer Berserk*.
  - *Search* (Spriggan) : Magie noire d'illusion, ou détection de pièges. Kirito (Spriggan) l'utilise pour se transformer en monstre The Gleam Eyes lors de son combat dans l'Arbre du Monde.
  - *Smokescreen* (Sylph) : Écran de fumée (utilisé par Leafa et Kirito contre Eugene).
  - *Dark Detonation* (Imp/Spriggan) : Magie kamikaze (utilisée par Recon au dôme d'Yggdrasil), réduisant l'EXP et les stats de l'utilisateur pour infliger des dégâts critiques de zone.

## 2. Le Vol Magique (Flight Mechanics)
Le vol n'est pas illimité, contrairement à la légende d'Oberon.
- **Dépendance Photovoltaïque** : Les ailes féériques absorbent la lumière du soleil ou de la lune pour alimenter la jauge de vol.
- **Souterrains et Donjons** : Sans lumière, une jauge stricte apparaît. Si elle se vide en vol, l'avatar chute brutalement et subit des dégâts de chute massifs (Fall Damage). Seuls les Imps ont une mutation raciale ignorant cette règle dans l'obscurité.
- **Vol Assisté vs Vol Volontaire** : 
  - Assisté : Utilisation d'un contrôleur holographique ("joystick"). Mouvements fluides mais bridés par l'algorithme.
  - Volontaire : Connexion neuronale directe aux muscles dorsaux imaginaires. Nécessite une grande gymnastique mentale. Permet des virages à 90 degrés instantanés et libère les deux mains pour le combat. Kirito et Leafa en sont les maîtres absolus.

## 3. Original Sword Skills (OSS)
Intégrés via une mise à jour d'Ymir.
- **Création** : Un joueur doit exécuter un enchaînement de coups d'affilée sans assistance système, sans ralentir et avec une fluidité millimétrée. Le système Cardinal analyse les *frames*. S'il juge l'attaque valide, elle devient un OSS nommé par le joueur.
- **Mother's Rosario (L'Épée Absolue)** : 
  - *Créateur* : Yuuki Konno (Zekken).
  - *Hit Count* : 11 coups continus. C'est l'OSS avec le plus grand nombre de coups au monde, dépassant l'Ambidextrie de Kirito.
  - *Transmission* : Transféré à Asuna via un parchemin magique avant la mort de Yuuki.

## 4. Skill Connect (L'Exploit de Kirito)
Dans ALO, l'Ambidextrie n'est pas codée comme un *Unique Skill* (SAO). Kirito, pour manier deux épées, utilise l'exploit "Skill Connect".
- **La Technique** : Chaque Sword Skill possède un "Post-Delay" (temps de rigidité post-attaque). Kirito annule ce délai en lançant un deuxième Sword Skill avec son autre main *exactement* dans la fenêtre de la frame finale du premier coup.
- **Difficulté** : La fenêtre de validation est d'environ 0.05 seconde. S'il la rate, ses deux bras sont frappés de paralysie de délai. Le combat contre Thrym (Tome 8) illustre parfaitement la maîtrise mortelle de cette technique.
