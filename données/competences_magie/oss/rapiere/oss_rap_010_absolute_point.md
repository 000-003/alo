# Absolute Point

## Identification Cardinal
- **Skill_ID** : `OSS_RAP_010`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Rapière
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
- **Commande** : `!learn_skill OSS_RAP_010` puis `!cast absolute_point` en combat

## Lore (Encyclopédie d'Argo)
Un unique estoc parfait cherchant le point vital ; débloqué par quête.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_RAP_010')`
