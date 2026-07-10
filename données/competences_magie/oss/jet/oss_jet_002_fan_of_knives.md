# Fan of Knives

## Identification Cardinal
- **Skill_ID** : `OSS_JET_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Armes de jet
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 0 |
| Coût Stamina | 15% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | x1.4 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 3 |
| Déblocage | Maîtrise d’arme Armes de jet au rang **Novice** |

## Séquence d'Animation
Enchaînement de 2 frappe(s) calculées individuellement par le Système Cardinal (répartition des dégâts hit par hit). Le Post-Motion Delay croît avec le tier : plus l’OSS est puissant, plus la fenêtre de vulnérabilité finale est longue.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Si tous les hits touchent, bonus **« Perfect Chain » +20%** de dégâts.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise d’arme Armes de jet au rang **Novice**
- **Commande** : `!learn_skill OSS_JET_002` puis `!cast fan_of_knives` en combat

## Lore (Encyclopédie d'Argo)
Un éventail de lames lancé en arc frappant plusieurs ennemis proches.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_JET_002')`
