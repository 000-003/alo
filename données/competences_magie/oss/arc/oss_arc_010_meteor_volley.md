# Meteor Volley

## Identification Cardinal
- **Skill_ID** : `OSS_ARC_010`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Arc
- **Tier** : T4 · **Rareté** : Épique

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 150 |
| Coût Stamina | 65% de la jauge |
| Nombre de Hits | 9 |
| Multiplicateur Total | x5.2 |
| Post-Motion Delay | 2.8s (le joueur est vulnérable) |
| Niveau Requis | 40 |
| Déblocage | Maîtrise **Avancé** + **quête** de compétence |

## Séquence d'Animation
Enchaînement de 9 frappe(s) calculées individuellement par le Système Cardinal (répartition des dégâts hit par hit). Le Post-Motion Delay croît avec le tier : plus l’OSS est puissant, plus la fenêtre de vulnérabilité finale est longue.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Si tous les hits touchent, bonus **« Perfect Chain » +20%** de dégâts.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise **Avancé** + **quête** de compétence
- **Commande** : `!learn_skill OSS_ARC_010` puis `!cast meteor_volley` en combat

## Lore (Encyclopédie d'Argo)
Une salve enflammée tombant en pluie de météores ; débloquée par quête.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_ARC_010')`
