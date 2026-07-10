# Tsujikaze

## Identification Cardinal
- **Skill_ID** : `OSS_KAT_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Katana
- **Tier** : T3 · **Rareté** : Rare

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 60 |
| Coût Stamina | 45% de la jauge |
| Nombre de Hits | 5 |
| Multiplicateur Total | x3.2 |
| Post-Motion Delay | 1.8s (le joueur est vulnérable) |
| Niveau Requis | 24 |
| Déblocage | Maîtrise **Confirmé** + entraînement auprès de Ferra `NPC_GAT_31` |

## Séquence d'Animation
Enchaînement de 5 frappe(s) calculées individuellement par le Système Cardinal (répartition des dégâts hit par hit). Le Post-Motion Delay croît avec le tier : plus l’OSS est puissant, plus la fenêtre de vulnérabilité finale est longue.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Si tous les hits touchent, bonus **« Perfect Chain » +20%** de dégâts.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise **Confirmé** + entraînement auprès de Ferra `NPC_GAT_31`
- **Commande** : `!learn_skill OSS_KAT_001` puis `!cast tsujikaze` en combat

## Lore (Encyclopédie d'Argo)
« Le Vent du Carrefour » : une coupe si rapide qu’elle déplace l’air ; iaï de maître.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_KAT_001')`
