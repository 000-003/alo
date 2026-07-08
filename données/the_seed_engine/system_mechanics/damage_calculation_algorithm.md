# Moteur Cardinal : Algorithme de Calcul des Dégâts

## 1. Analyse Fandom & Lore
Dans ALO, le système ne repose pas sur les Sword Skills assistés de SAO, mais sur la physique des polygones (poids de l'arme, vitesse de collision). Néanmoins, notre adaptation WhatsApp recrée ce ressenti via une formule mathématique stricte.

## 2. Formule Mathématique (Node.js Logic)
```javascript
function calculateHit(attacker, defender, weapon, skill) {
  // 1. Raw Polygon Force (Force brute)
  let rawForce = (weapon.base_atk + (attacker.STR * 0.45));
  
  // 2. OSS Multiplier (Si Original Sword Skill activé)
  let skillMultiplier = skill ? skill.damage_modifier : 1.0;
  let totalAttack = rawForce * skillMultiplier;

  // 3. Armor Mitigation (Atténuation par la hitbox défensive)
  let mitigation = defender.equipped_armor.base_def + (defender.VIT * 0.35);
  
  // 4. RNG & Critical (Calcul de collision basé sur la DEX)
  let isCritical = Math.random() <= (attacker.DEX / 2000);
  if (isCritical) totalAttack *= 2.0;

  let finalDamage = Math.max(1, Math.floor(totalAttack - mitigation));
  return { damage: finalDamage, isCrit: isCritical };
}
```