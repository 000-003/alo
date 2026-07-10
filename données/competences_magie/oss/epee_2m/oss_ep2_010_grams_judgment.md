# Gram’s Judgment

## Identification Cardinal
- **Skill_ID** : `OSS_EP2_010`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée à deux mains
- **Tier** : T5 · **Rareté** : Légendaire

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 300 |
| Coût Stamina | 80% de la jauge |
| Nombre de Hits | 14 |
| Multiplicateur Total | x7.5 |
| Post-Motion Delay | 3.5s (le joueur est vulnérable) |
| Niveau Requis | 78 |
| Déblocage | Maîtrise **Avancé** + **quête spéciale** (cf. Starburst Stream) |

## Séquence d'Animation
Enchaînement de 14 frappe(s) calculées individuellement par le Système Cardinal (répartition des dégâts hit par hit). Le Post-Motion Delay croît avec le tier : plus l’OSS est puissant, plus la fenêtre de vulnérabilité finale est longue.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Si tous les hits touchent, bonus **« Perfect Chain » +20%** de dégâts.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise **Avancé** + **quête spéciale** (cf. Starburst Stream)
- **Commande** : `!learn_skill OSS_EP2_010` puis `!cast grams_judgment` en combat

## Lore (Encyclopédie d'Argo)
Le jugement de l’épée démoniaque Gram, réservé à ceux qui ont dompté sa malédiction.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EP2_010')`
