# Linear

## Identification Cardinal
- **Skill_ID** : `OSS_RAP_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Rapière
- **Tier** : T1

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Coût Stamina | 15% de la jauge |
| Nombre de Hits | 1 |
| Multiplicateur Total | x2.0 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 5 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 1 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 1 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
L'estocade basique. Un pas en avant suivi d'une frappe rectiligne à la vitesse maximale. Simple mais mortel. C'est le premier Sword Skill qu'Asuna a maîtrisé dans SAO, et elle l'a importé dans ALO avec une précision chirurgicale.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_RAP_002')`
