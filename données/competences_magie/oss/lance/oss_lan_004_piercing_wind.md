# Piercing Wind

## Identification Cardinal
- **Skill_ID** : `OSS_LAN_004`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Lance
- **Tier** : T2 · **Rareté** : Peu commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 20 |
| Coût Stamina | 30% de la jauge |
| Nombre de Hits | 3 |
| Multiplicateur Total | x2.1 |
| Post-Motion Delay | 1s (le joueur est vulnérable) |
| Niveau Requis | 12 |
| Déblocage | Maîtrise d’arme Lance au rang **Confirmé** |

## Séquence d'Animation
Enchaînement de 3 frappe(s) calculées individuellement par le Système Cardinal (répartition des dégâts hit par hit). Le Post-Motion Delay croît avec le tier : plus l’OSS est puissant, plus la fenêtre de vulnérabilité finale est longue.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Si tous les hits touchent, bonus **« Perfect Chain » +20%** de dégâts.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise d’arme Lance au rang **Confirmé**
- **Commande** : `!learn_skill OSS_LAN_004` puis `!cast piercing_wind` en combat

## Lore (Encyclopédie d'Argo)
Un estoc si rapide qu’il siffle, poussant l’ennemi en arrière.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_LAN_004')`
