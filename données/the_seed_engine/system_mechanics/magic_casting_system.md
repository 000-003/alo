# Moteur Cardinal : Système d'Incantation et Interruption (Casting Break)

## 1. Analyse Fandom & Lore
La magie dans ALO nécessite l'incantation d'une formule en pseudo-vieux norrois. L'AmuSphere traduit la commande vocale en code système. Si le joueur est frappé physiquement pendant la barre de chargement, l'accumulation de Mana s'effondre (Casting Break).

## 2. Implémentation Système
- **Cast Time (Frames)** : `Base_Spell_Frames / (1 + (INT / 1000))`.
- **Mécanique de Break** : 
  ```javascript
  if (damageReceived > (avatar.max_hp * 0.05)) {
      spellState.isBroken = true;
      system.emit('CASTING_BREAK', avatar.uuid);
  }
  ```
- L'interruption draine tout de même 20% des MP prévus pour le sort, simulant la perte de la concentration magique.