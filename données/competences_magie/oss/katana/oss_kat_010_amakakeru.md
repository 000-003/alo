# Amakakeru

## Identification Cardinal
- **Skill_ID** : `OSS_KAT_010`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Katana
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
- **Commande** : `!learn_skill OSS_KAT_010` puis `!cast amakakeru` en combat

## Lore (Encyclopédie d'Argo)
La coupe céleste qui fend l’espace d’un éclair ; titre-quête des maîtres du sabre.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_KAT_010')`
