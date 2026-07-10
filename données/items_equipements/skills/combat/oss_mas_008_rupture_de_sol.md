# Rupture de Sol

## Identification Cardinal
- **Skill_ID** : `OSS_MAS_008`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Masse
- **Tier** : T4 · **Rareté** : Légendaire

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 80 |
| Coût Stamina | 65% de la jauge |
| Nombre de Hits | 9 |
| Multiplicateur Total | ×5.5 |
| Post-Motion Delay | 2.8s (le joueur est vulnérable) |
| Niveau Requis | 38 |
| Déblocage | Maîtrise Avancé + Quête « Les Entrailles de la Terre » |

## Séquence d'Animation
Le joueur frappe le sol de toutes ses forces, créant une fissure qui se propage vers l'ennemi. Neuf secousses en chaîne dévastent la zone autour de la cible.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Avancé + Quête « Les Entrailles de la Terre »
- **Commande** : `!learn_skill OSS_MAS_008` puis `!cast rupture_de_sol` en combat

## Lore (Encyclopédie d'Argo)
Un skill cataclysmique qui peut détruire le terrain. Utile en donjon pour révéler des passages secrets, moins utile dans la chambre d'auberge.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_MAS_008')`
