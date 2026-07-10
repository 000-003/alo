# Death Blossom

## Identification Cardinal
- **Skill_ID** : `OSS_JET_007`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Armes de jet
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
- **Commande** : `!learn_skill OSS_JET_007` puis `!cast death_blossom` en combat

## Lore (Encyclopédie d'Argo)
Une éclosion de projectiles tous azimuts ; débloquée par quête.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_JET_007')`
