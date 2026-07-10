# Frappe du Bûcheron

## Identification Cardinal
- **Skill_ID** : `OSS_HAC_006`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Hache
- **Tier** : T3 · **Rareté** : Épique

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 44 |
| Coût Stamina | 44% de la jauge |
| Nombre de Hits | 5 |
| Multiplicateur Total | ×3.0 |
| Post-Motion Delay | 1.5s (le joueur est vulnérable) |
| Niveau Requis | 24 |
| Déblocage | Maîtrise Confirmé + Entraîneur |

## Séquence d'Animation
Cinq coups méthodiques portés comme un bûcheron abattant un chêne séculaire. Chaque impact est plus fort que le précédent, le dernier fendant littéralement l'ennemi.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Confirmé + Entraîneur
- **Commande** : `!learn_skill OSS_HAC_006` puis `!cast frappe_du_bucheron` en combat

## Lore (Encyclopédie d'Argo)
Un maître bûcheron légendaire du Troisième Étage enseignait ce skill. Il exige une force brute mais aussi un timing parfait.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_HAC_006')`
