# Deadly Sins

## Identification Cardinal
- **Skill_ID** : `OSS_EPE_010`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée à une main
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
- **Commande** : `!learn_skill OSS_EPE_010` puis `!cast deadly_sins` en combat

## Lore (Encyclopédie d'Argo)
Une combinaison de huit frappes péchés dont chaque impact ouvre le suivant.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EPE_010')`
