# Throwing Spike

## Identification Cardinal
- **Skill_ID** : `OSS_JET_001`
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
- **Commande** : `!learn_skill OSS_JET_001` puis `!cast throwing_spike` en combat

## Lore (Encyclopédie d'Argo)
Un pieu de lancer rapide et silencieux, arme d’ouverture des embusqueurs.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_JET_001')`
