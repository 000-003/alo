# Mother's Rosario

## Identification Cardinal
- **Skill_ID** : `OSS_RAP_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Rapière
- **Tier** : T5

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 350 |
| Coût Stamina | 90% de la jauge |
| Nombre de Hits | 11 |
| Multiplicateur Total | x9.5 |
| Post-Motion Delay | 4.0s (le joueur est vulnérable) |
| Niveau Requis | 85 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 11 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 11 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
L'OSS ultime créé par Yuuki Konno (Zekken), la joueuse la plus forte de l'histoire d'ALO. 11 frappes d'une vitesse inhumaine formant le motif d'une croix (rosaire). La dernière frappe est une estocade si puissante qu'elle traverse la cible de part en part. Yuuki l'a transmis à Asuna sous forme de Parchemin avant sa disparition.

## Commande IA
- `SYS_TRANSFER_OSS(Source_ID, Target_ID, 'OSS_RAP_001') — Transférable uniquement via Parchemin d'OSS`
